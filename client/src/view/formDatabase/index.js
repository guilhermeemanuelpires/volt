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
export default class FormDatabase extends React.Component {
  constructor(props) {
    super(props);
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
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tarifa" +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "valor DOUBLE)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS padroes_entrada" +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "descricao TEXT, minimo DOUBLE, coluna1 INT, solo INT)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS disj_entrada" +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "descricao TEXT, demanda INT, amper INT, codPadrao INT)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tipo_instalacao" +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "descricao TEXT)"
      );
    });
    this.state = {
      ip: "",
      data: [],
      cidades: [],
      modulos: [],
      medias: [],
      tarifas: [],
      tipoRede: [],
      tipoInstall: [],
      Disjuntores: [],
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
    if (modulos == "Error") {
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Erro na requisição" });
    } else {
      this.setState({ modulos });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM modulo");
        tx.executeSql(
          "INSERT INTO modulo (modelo, descricao, potencia, area, eficiencia, peso, garantia1, garantia2 )" +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
          ["Selecione", "Selecione", 0, 0, 0, 0, 0, 0],
          (txObj, resultSet) =>
            this.setState({
              data: this.state.data.concat({
                id: 0,
                modelo: "Selecione",
                descricao: "Selecione",
                potencia: 0,
                area: 0,
                eficiencia: 0,
                peso: 0,
                garantia1: 0,
                garantia2: 0,
              }),
            }),
          (txObj, error) => console.log("Error", error)
        );
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
                  descricao: this.state.modulos[x].descricao,
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
    }
  };
  newCidades = async () => {
    const cidades = await listar.getCidade(this.state.ip);
    const medias = await listar.getMedia(this.state.ip);
    if (cidades == "Error" || medias == "Error") {
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Erro na requisição" });
      return "Error";
    } else {
      this.setState({ cidades, medias });
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
    }
  };

  newTarifas = async () => {
    const tarifas = await listar.getTarifa(this.state.ip);
    if (tarifas == "Error") {
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Erro na requisição" });
    } else {
      this.setState({ tarifas });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM tarifa");
        for (let x = 0; x < this.state.tarifas.length; x++) {
          tx.executeSql(
            "INSERT INTO tarifa (valor)" + "values (?)",
            [this.state.tarifas[x].valor],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: resultSet.insertId,
                  valor: this.state.tarifas[x].valor,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    }
  };

  newPadroes_Entrada = async () => {
    const tipoRede = await listar.getTipoRede(this.state.ip);
    if (tipoRede == "Error") {
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Erro ao atualizar dados" });
    } else {
      this.setState({ tipoRede });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM padroes_entrada");
        tx.executeSql(
          "INSERT INTO padroes_entrada (descricao, minimo, coluna1, solo)" +
            "values (?, ?, ?, ?)",
          ["Selecione", 0, 0, 0],
          (txObj, resultSet) =>
            this.setState({
              data: this.state.data.concat({
                id: 0,
                descricao: "Selecione",
                minimo: 0,
                coluna1: 0,
                solo: 0,
              }),
            }),
          (txObj, error) => console.log("Error", error)
        );
        for (let x = 0; x < this.state.tipoRede.length; x++) {
          tx.executeSql(
            "INSERT INTO padroes_entrada (descricao, minimo, coluna1, solo)" +
              "values (?, ?, ?, ?)",
            [
              this.state.tipoRede[x].descricao,
              this.state.tipoRede[x].minimo,
              this.state.tipoRede[x].coluna1,
              this.state.tipoRede[x].solo,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: resultSet.insertId,
                  descricao: this.state.tipoRede[x].descricao,
                  minimo: this.state.tipoRede[x].minimo,
                  coluna1: this.state.tipoRede[x].coluna1,
                  solo: this.state.tipoRede[x].solo,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    }
  };

  newDisjuntores = async () => {
    const Disjuntores = await listar.getDisjuntor(this.state.ip);
    if (Disjuntores == "Error") {
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Valide o IP do servidor !!" });
    } else {
      this.setState({ Disjuntores });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM disj_entrada");
        tx.executeSql(
          "INSERT INTO disj_entrada (descricao, demanda, amper, codPadrao)" +
            "values (?, ?, ?, ?)",
          ["Selecione", 0, 0, 0],
          (txObj, resultSet) =>
            this.setState({
              data: this.state.data.concat({
                id: 0,
                descricao: "Selecione",
                demanda: 0,
                amper: 0,
                codPadrao: 0,
              }),
            }),
          (txObj, error) => console.log("Error", error)
        );
        for (let x = 0; x < this.state.Disjuntores.length; x++) {
          tx.executeSql(
            "INSERT INTO disj_entrada (descricao, demanda, amper, amper)" +
              "values (?, ?, ?, ?)",
            [
              this.state.Disjuntores[x].descricao,
              this.state.Disjuntores[x].demanda,
              this.state.Disjuntores[x].amper,
              this.state.Disjuntores[x].codPadraoId,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: resultSet.insertId,
                  descricao: this.state.Disjuntores[x].descricao,
                  demanda: this.state.Disjuntores[x].demanda,
                  amper: this.state.Disjuntores[x].amper,
                  codPadrao: this.state.Disjuntores[x].codPadraoId,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    }
  };
  newTipoInstall = async () => {
    const tipoInstall = await listar.getTipoInstall(this.state.ip);
    if (tipoInstall == "Error") {
      this.setState({ openIP: true });
      this.setState({ mensagemIP: "Verifique se você está online!" });
    } else {
      this.setState({ tipoInstall });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM tipo_instalacao");
        tx.executeSql(
          "INSERT INTO tipo_instalacao (descricao)" + "values (?)",
          ["Selecione"],
          (txObj, resultSet) =>
            this.setState({
              data: this.state.data.concat({
                id: 0,
                descricao: "Selecione",
              }),
            }),
          (txObj, error) => console.log("Error", error)
        );
        for (let x = 0; x < this.state.tipoInstall.length; x++) {
          tx.executeSql(
            "INSERT INTO tipo_instalacao (descricao)" + "values (?)",
            [this.state.tipoInstall[x].descricao],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: resultSet.insertId,
                  descricao: this.state.tipoInstall[x].descricao,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    }
  };
  onValidaFom = async (data) => {
    if (!data.ip) {
      this.setState({ mensagem: "Informe um Ip" });
      this.openModal(true);
    } else {
      if (this.newCidades() == "Error") {
        this.setState({ openIP: false });
      } else {
        this.newCidades();
        this.setState({ openIP: true });
        this.setState({ mensagemIP: "Atualizando Tabela Cidades" });
      }
      setTimeout(() => {
        this.newModulos(data.ip);
        this.setState({ mensagemIP: "Atualizando Tabela Modulos" });
        setTimeout(() => {
          this.newTarifas();
          this.setState({ mensagemIP: "Atualizando Tabela Tarifas" });
          setTimeout(() => {
            this.newPadroes_Entrada();
            this.setState({ mensagemIP: "Atualizando Tabela Tipo de Rede" });
            setTimeout(() => {
              this.newDisjuntores();
              this.setState({
                mensagemIP: "Atualizando Tabela Disjuntores Padrão",
              });
              setTimeout(() => {
                this.newTipoInstall();
                this.setState({
                  mensagemIP: "Atualizando Tabela Tipo Instalação",
                });
                setTimeout(() => {
                  this.setState({ openIP: false });
                }, 1000);
              }, 4000);
            }, 2000);
          }, 1000);
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
        <ModalIP open={this.state.openIP} mensagem={this.state.mensagemIP} tipoIcone='loading' />
      </View>
    );
  }
}
