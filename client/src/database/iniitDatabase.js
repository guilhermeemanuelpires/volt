import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
// import TextInputMask from "react-native-text-input-mask";
import { DatabaseConnection } from "../database/connection";
import listar from "../service/api";
var db = null;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 36,
    width: 250,
    borderColor: "#EEE8AA",
    borderWidth: 1,
    borderRadius: 9,
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 50,
    fontSize: 20,
  },
  buttonEdit: {
    backgroundColor: "#87CE",
    alignItems: "center",
    margin: 15,
    padding: 10,
    height: 40,
    width: 90,
    borderRadius: 8,
  },
  buttonAdd: {
    backgroundColor: "#87CEEB",
    alignItems: "center",
    margin: 25,
    padding: 10,
    height: 40,
    width: 90,
    borderRadius: 8,
  },
  txtbutton: {
    fontWeight: "500",
  },
  buttonExc: {
    backgroundColor: "#FA8072",
    alignItems: "center",
    margin: 15,
    padding: 10,
    height: 40,
    width: 90,
    borderRadius: 8,
  },
  item: {
    backgroundColor: "#F0FFF0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default class InitDatabase extends React.Component {
  state = { modulos: [], loading: true, ip: "" };
  listarALL = async () => {
    const modulos = await listar.getAll(this.state.ip);
    if (modulos) {
      alert("Erro!!");
    } else {
      this.setState({ modulos });
      console.log(this.state.modulos);
    }
    // this.fetchData();
  };

  constructor(props) {
    db = DatabaseConnection.getConnection();
    super(props);
    // Verifique se a tabela de itens existe, se não a criar
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS modulo " +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "modelo TEXT, descricao TEXT, potencia DOUBLE," +
          "area DOUBLE, eficiencia DOUBLE, peso DOUBLE," +
          "garantia1 INT, garantia2 INT)"
      );
    });
    this.fetchData(); //Metodo de select
  }
  fetchData = () => {
    db.transaction((tx) => {
      // enviando 4 argumentos em executeSql
      tx.executeSql(
        "SELECT * FROM modulo",
        null, // passando consulta sql e parâmetros: null
        // retorno de chamada de sucesso que envia duas coisas: objeto de transação e objeto de resultado
        (txObj, { rows: { _array } }) => this.setState({ data: _array })
        // retorno de chamada de falha que envia duas coisas, objeto de transação e erro
      ); // fim execucao SQL
    }); // fim da transacao
  };
  derreter() {
    db.transaction((tx) => {
      tx.executeSql("DROP TABLE modulo ");
    });
  }
  // function para criar novo item
  newItem = async () => {
    if (this.state.ip != "") {
      const modulos = await listar.getAll(this.state.ip);
      this.setState({ modulos });
      db.transaction((tx) => {
        for (let x = 0; x < this.state.modulos.length; x++) {
          tx.executeSql(
            "INSERT INTO modulo (modelo, descricao, potencia, area, eficiencia, peso, garantia1, garantia2 )" +
              "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [
              this.state.modulos[x].modelo,
              this.state.modulos[x].descricao,
              this.state.modulos[x].potencia,
              this.state.modulos[x].area,
              this.state.modulos[x].eficiencia,
              this.state.modulos[x].peso,
              this.state.modulos[x].garantia1,
              this.state.modulos[x].garantia2,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: resultSet.insertId,
                  modelo: this.state.modulos[x].modelo,
                  potencia: this.state.modulos[x].potencia,
                  area: this.state.modulos[x].area,
                  eficiencia: this.state.modulos[x].eficiencia,
                  peso: this.state.modulos[x].peso,
                  garantia1: this.state.modulos[x].garantia1,
                  garantia2: this.state.modulos[x].garantia2,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    } else {
      alert("Preenche o campo iP");
    }
  };

  //Function delete
  delete = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM modulo WHERE id = ? ",
        [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let newList = this.state.data.filter((data) => {
              if (data.id === id) return false;
              else return true;
            });
            this.setState({ data: newList });
          }
        }
      );
    });
  };
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.titulo}>Teste SQLITE</Text>
        <View>
          <Text style={Style.titulo}> Insira o IP</Text>
          {/* <TextInputMask
            refInput={(ref) => {
              this.input = ref;
            }}
            
            value={this.state.ip}
            keyboardType="numeric"
            onChangeText={
              (ip) => this.setState({ ip })
              (formatted, extracted) => {
              console.log(formatted); // +1 (123) 456-78-90
              console.log(extracted); // 1234567890
            }}
            mask={"+1 ([000]) [000] [00] [00]"}
          /> */}
          <TextInput
            style={Style.input}
            autoFocus={true}
            // onFocus={() => this.setState({ ip: "" })}
            value={this.state.ip}
            onChangeText={(ip) => this.setState({ ip })}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity onPress={this.newItem} style={Style.buttonAdd}>
          <Text style={Style.txtbutton}>Adicionar</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.data &&
            this.state.data.map((data) => (
              <View key={data.id} style={Style.item}>
                <Text>
                  {data.id} {data.descricao} - {data.area}
                </Text>
                <TouchableOpacity
                  onPress={() => this.delete(data.id)}
                  style={Style.buttonExc}
                >
                  <Text> DEL </Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}
