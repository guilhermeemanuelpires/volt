import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import InputPattern from "../components/InputPattern/index";
import ModalIP from "../components/modal/modalIp";
import MsgModal from "../components/modal/index";
import { DatabaseConnection } from "../../database/connection";
import listar from "../../service/api";
import Style from "../styles/styles";
import StyleIp from "./styles";

var db = null;
export default class FormDatabase extends Component {
  constructor(props) {
    db = DatabaseConnection.getConnection();
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
    super(props);
    this.state = {
      ip: "",
      data: [],
      cidades: [],
      modulos: [],
      medias: [],
      open: false,
      mensagem: "",
      openIP: false,
      mensagemIP: "Atualizando Tabela X",
    };
  }

  setIp = (ip) => {
    this.setState({ ip });
  };

  openModal = (open) => {
    this.setState({ open });
  };

  newModulos = async (data) => {
    const modulos = await listar.getModulo(data);
    this.setState({ modulos });
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM modulo");
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
            this.state.modulos[x].garantia2
          ],
          (txObj, resultSet) =>
            this.setState({
              data: this.state.data.concat({
                id: resultSet.insertId,
                modelo: this.state.modulos[x].modelo,
                descricao: this.state.modulos[x].descricao,
                potencia: this.state.modulos[x].potencia,
                area: this.state.modulos[x].area,
                eficiencia: this.state.modulos[x].eficiencia,
                peso: this.state.modulos[x].peso,
                garantia1: this.state.modulos[x].garantia1,
                garantia2: this.state.modulos[x].garantia2
              }),
            }),
          (txObj, error) => console.log("Error", error)
        );
      }
    });
  };
  newCidades = async (data) => {
    const cidades = await listar.getCidade(data);
    const medias = await listar.getMedia(data);
    this.setState({ cidades, medias });
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM cidade");
      tx.executeSql("DELETE FROM media");
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
  };
  onValidaFom = async (data) => {
    if (!data.ip) {
      this.setState({ mensagem: "Informe um Ip" });
      this.openModal(true);
    } else {
      this.newCidades(data.ip);
      // AQUI TU IMPLEMENTA SUA REGRA DE NEGOCIO
      // DE PREFERENCIA CRIE UMA FUNCA SEPARADA
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Atualizando Tabela Cidades" });

      // essa gambira só serve para teste
      setTimeout(() => {
        this.setState({ openIP: false });
        this.newModulos(data.ip);
        this.setState({ openIP: true });
       this.setState({ mensagemIP: "Atualizando Tabela Modulos" });  
       setTimeout(() => {
        this.setState({ openIP: false });
      }, 1000);
      }, 20000);


    }
  };

  _Submit() {
    const data = {
      ip: this.state.ip,
    };

    this.onValidaFom(data);
  }

  render() {
    return (
      <View style={StyleIp.container}>
        <Text style={Style.titulo}>Atualizar Dados</Text>

        <View style={Style.ajustaCampos}>
          <Text style={StyleIp.alinhaLabel}>Informe o IP de Atualização</Text>

          <InputPattern
            value={this.state.ip}
            handleClick={this.setIp}
            keyboardType="numeric"
          />

          <Text style={{ textAlign: "center", padding: 25 }}>
            Para realizar a atualização dos dados, é necessário informar o IP de
            atualização fornecido pelo servidor de atualização.
          </Text>
        </View>

        <TouchableOpacity
          style={Style.botao}
          onPress={() => {
            this._Submit();
          }}
        >
          <Text style={Style.labelBotao}>Atualizar</Text>
        </TouchableOpacity>

        <MsgModal
          mensagem={this.state.mensagem}
          open={this.state.open}
          execute={this.openModal}
        />
        <ModalIP open={this.state.openIP} mensagem={this.state.mensagemIP} />
      </View>
    );
  }
}
