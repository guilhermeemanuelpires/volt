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
import SearchableDropdown from "react-native-searchable-dropdown";
import listar from "../service/api";
import { color } from "react-native-reanimated";
import Dropdow from "../view/components/dropdown/index";
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
  state = {
    data: [],
    modulos: [],
    cidades: [],
    medias: [],
    loading: true,
    ip: "",
    cidadeSel: 0,
    cepSel:''
  };

  listarALL = async () => {
    const cidades = await listar.getModulo('192.168.0.236');
    if (!cidades) {
      alert("Erro!!");
    } else {
      this.setState({ cidades });
    }
  };
  constructor(props) {
    super(props);
    db = DatabaseConnection.getConnection();
    this.fetchData(); //Metodo de select
    // Verifique se a tabela de itens existe, se não a criar
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS modulo " +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "modelo TEXT, descricao TEXT, potencia DOUBLE," +
          "area DOUBLE, eficiencia DOUBLE, peso DOUBLE," +
          "garantia1 INT, garantia2 INT)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cidade " +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "nome TEXT, cep TEXT, media DOUBLE)"
      );
    });
  }
  setCidadeSel = (cidadeSel) => {
    this.setState({ cidadeSel });
  }
  fetchData = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT id, nome as name, media, cep FROM cidade",
        [],
        (trans, result) => {
          // console.log(result['rows']._array),
          this.setState({ data: result["rows"]._array });
          // console.log("Data " +this.state.data)
        }
      );
    });
    // console.log(this.state.data)
  };
  derreter() {
    db.transaction((tx) => {
      tx.executeSql("delete from modulo ");
      tx.executeSql("delete from cidade ");
    });
  }
  // function para criar novo item
  newItem = async () => {
    if (this.state.ip != "") {
      const modulos = await listar.getModulo(this.state.ip);
      const cidades = await listar.getCidade(this.state.ip);
      const medias = await listar.getMedia(this.state.ip);
      this.setState({ modulos, cidades, medias });
      console.log(this.state.medias.length);
      console.log(this.state.cidades.length);
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM cidade");
        for (let x = 0; x < this.state.cidades.length; x++) {
          tx.executeSql(
            "INSERT INTO cidade (nome, cep, media)" + "values (?, ?, ?)",
            [
              this.state.cidades[x].nome,
              this.state.cidades[x].cep,
              this.state.medias[x].media,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: resultSet.insertId,
                  nome: this.state.cidades[x].nome,
                  cep: this.state.cidades[x].cep,
                  media: this.state.medias[x].media,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    } else {
      alert("Preenche o campo iP");
    }
    // this.fetchData();
  };

  //Function delete
  delete = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM cidade WHERE id = ? ",
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
        {/* <View>
          <Text style={Style.titulo}> Insira o IP</Text>
          <TextInput
            style={Style.input}
            autoFocus={true}
            // onFocus={() => this.setState({ ip: "" })}
            // value={this.state.ip}
            onChangeText={(ip) => this.setState({ ip })}
            keyboardType="numeric"
          />
        </View>*/
        <TouchableOpacity onPress={this.newItem} style={Style.buttonAdd}>
          <Text style={Style.txtbutton}>Adicionar</Text>
        </TouchableOpacity>}
        <View style={{ flex: 1, marginTop: 30 }}>
        {/* <Dropdow
                  descricao="name"
                  lista={this.state.data}
                  sel={this.state.cidadeSel}
                  handleClick={this.setCidadeSel} /> */}
          {/* {console.log(this.state.data)} */}
          <SearchableDropdown
            onTextChange={(text) => console.log(text)}
            //On text change listner on the searchable input
            onItemSelect={(item) => this.setState({cidadeSel: String(item.media), cepCel : item.cep})}
            //onItemSelect called after the selection from the dropdown
            containerStyle={{ padding: 5 }}
            //suggestion container style
            textInputStyle={{
              //inserted text style
              padding: 12,
              borderWidth: 1,
              borderColor: "#ccc",
              backgroundColor: "#FAF7F6",
            }}
            itemStyle={{
              //single dropdown item style
              padding: 10,
              marginTop: 2,
              backgroundColor: "#FAF9F8",
              borderColor: "#bbb",
              borderWidth: 1,
            }}
            itemTextStyle={{
              //text style of a single dropdown item
              color: "#222",
            }}
            itemsContainerStyle={{
              //items container style you can pass maxHeight
              //to restrict the items dropdown hieght
              maxHeight: "60%",
            }}
            items={this.state.data}
            //mapping of item array
            defaultIndex={2}
            //default selected item index
            placeholder="placeholder"
            //place holder for the search input
            resetValue={false}
            //reset textInput Value with true and false state
            underlineColorAndroid="transparent"
            //To remove the underline from the android input
          />
          <TextInput
          value={this.state.cepCel}
          placeholder="Cep"
          ></TextInput>
          <TextInput
          placeholder="Media"
          value={this.state.cidadeSel}
          onChangeText={(media) => this.setState({ media:media })}
          >
            
          </TextInput>
          {/* <ScrollView>
            {
            this.state.data &&
              this.state.data.map((data) => (
                <View key={data.id} style={Style.item}>
                  <Text>
                    {data.id} {data.nome} - {data.cep}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.delete(data.id)}
                    style={Style.buttonExc}
                  >
                    <Text> DEL </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView> */}
        </View>
      </View>
    );
  }
}
