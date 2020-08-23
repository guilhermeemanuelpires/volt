import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
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

      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS calculo_kwp" +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "POTEN1 DOUBLE, POTEN2 DOUBLE, TELHADO INTEGER, SOLO INTEGER, codPadrao INTEGER )"
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
      CalculoKWP: [],
      erro: false,
      open: false,
      mensagem: "",
      openIP: false,
      mensagemIP: "Atualizando Tabela X",
      tipoIcone: "loading",
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
      this.setState({erro: true})
    } else {
      this.setState({ modulos });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM modulo");
        tx.executeSql(
          "INSERT INTO modulo (id, modelo, descricao, potencia, area, eficiencia, peso, garantia1, garantia2 )" +
            "values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [0, "Selecione", "Selecione", 0, 0, 0, 0, 0, 0],
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
            "INSERT INTO modulo (id, modelo, descricao, potencia, area, eficiencia, peso, garantia1, garantia2 )" +
              "values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              this.state.modulos[x].id,
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
                  id: this.state.modulos[x].id,
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
      this.setState({erro: true})
    } else {
      this.setState({ cidades, medias });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM cidade");
        for (let x = 0; x < this.state.cidades.length; x++) {
          tx.executeSql(
            "INSERT INTO cidade (id, nome, cep, media)" + "values (?, ?, ?, ?)",
            [
              this.state.cidades[x].id,
              this.state.cidades[x].nome,
              this.state.cidades[x].cep,
              this.state.medias[x].media,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: this.state.cidades[x].id,
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
      this.setState({erro: true})
    } else {
      this.setState({ tarifas });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM tarifa");
        for (let x = 0; x < this.state.tarifas.length; x++) {
          tx.executeSql(
            "INSERT INTO tarifa (id, valor)" + "values (?, ?)",
            [this.state.tarifas[x].id, this.state.tarifas[x].valor],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: this.state.tarifas[x].id,
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
      this.setState({erro: true})
    } else {
      this.setState({ tipoRede });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM padroes_entrada");
        tx.executeSql(
          "INSERT INTO padroes_entrada (id, descricao, minimo, coluna1, solo)" +
            "values (?, ?, ?, ?, ?)",
          [0 ,"Selecione", 0, 0, 0],
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
            "INSERT INTO padroes_entrada (id, descricao, minimo, coluna1, solo)" +
              "values (?, ?, ?, ?, ?)",
            [
              this.state.tipoRede[x].id,
              this.state.tipoRede[x].descricao,
              this.state.tipoRede[x].minimo,
              this.state.tipoRede[x].coluna1,
              this.state.tipoRede[x].solo,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: this.state.tipoRede[x].id,
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
      this.setState({erro: true})
    } else {
      this.setState({ Disjuntores });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM disj_entrada");
        tx.executeSql(
          "INSERT INTO disj_entrada (id, descricao, demanda, amper, codPadrao)" +
            "values (?, ?, ?, ?, ?)",
          [0, "Selecione", 0, 0, 0],
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
            "INSERT INTO disj_entrada (id, descricao, demanda, amper, codPadrao)" +
              "values (?, ?, ?, ?, ?)",
            [
              this.state.Disjuntores[x].id,
              this.state.Disjuntores[x].descricao,
              this.state.Disjuntores[x].demanda,
              this.state.Disjuntores[x].amper,
              this.state.Disjuntores[x].cod_padrao.id,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: this.state.Disjuntores[x].id,
                  descricao: this.state.Disjuntores[x].descricao,
                  demanda: this.state.Disjuntores[x].demanda,
                  amper: this.state.Disjuntores[x].amper,
                  codPadrao: this.state.Disjuntores[x].cod_padrao.id,
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
      this.setState({erro: true})
    } else {
      this.setState({ tipoInstall });
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM tipo_instalacao");
        tx.executeSql(
          "INSERT INTO tipo_instalacao (id, descricao)" + "values (?, ?)",
          [0, "Selecione"],
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
            "INSERT INTO tipo_instalacao (id, descricao)" + "values (?, ?)",
            [this.state.tipoInstall[x].id , this.state.tipoInstall[x].descricao],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: this.state.tipoInstall[x].id,
                  descricao: this.state.tipoInstall[x].descricao,
                }),
              }),
            (txObj, error) => console.log("Error", error)
          );
        }
      });
    }
  };
  newCalculo = async () => {
    const CalculoKWP = await listar.getCalculoKWP(this.state.ip);
    if (CalculoKWP == "Error") {
      this.setState({erro: true})
    } else {
      this.setState({ CalculoKWP });
      console.log(this.state.CalculoKWP.length)
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM calculo_kwp");
        for (let x = 0; x < this.state.CalculoKWP.length; x++) {
          tx.executeSql(
            "INSERT INTO calculo_kwp (id, POTEN1, POTEN2, TELHADO, SOLO, codPadrao)" +
              "values (?, ?, ?, ?, ?, ?)",
            [
              this.state.CalculoKWP[x].id,
              this.state.CalculoKWP[x].POTEN1,
              this.state.CalculoKWP[x].POTEN2,
              this.state.CalculoKWP[x].TELHADO,
              this.state.CalculoKWP[x].SOLO,
              this.state.CalculoKWP[x].cod_padrao.id,
            ],
            (txObj, resultSet) =>
              this.setState({
                data: this.state.data.concat({
                  id: this.state.CalculoKWP[x].id,
                  POTEN1: this.state.CalculoKWP[x].POTEN1,
                  POTEN2: this.state.CalculoKWP[x].POTEN2,
                  TELHADO: this.state.CalculoKWP[x].TELHADO,
                  SOLO: this.state.CalculoKWP[x].SOLO,
                  codPadrao: this.state.CalculoKWP[x].cod_padrao.id,
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

      setTimeout(() => {
        this.setState({ mensagemIP: "Carregando.." });
        this.setState({ tipoIcone: "loading" });
        this.newModulos(data.ip);
        this.newCidades();
        console.log("Erro:" + this.state.erro)
        this.setState({erro:true})
      }, 1000);
      if (this.state.erro) {
        console.log("IF")
        this.setState({ mensagemIP: "Erro na requisição" });
        this.setState({ tipoIcone: "error" });
        this.openModal(false);
      } else {
        this.newCidades();
        this.setState({ openIP: true });
        this.setState({ mensagemIP: "Atualizando Tabela Cidades" });
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
                this.newCalculo();
                this.setState({
                  mensagemIP: "Atualizando Tabela Disjuntores Padrão",
                });
                setTimeout(() => {
                  this.newTipoInstall();
                  this.setState({
                    mensagemIP: "Atualizando Tabela Tipo Instalação",
                  });
                  setTimeout(() => {
                    this.setState({
                      mensagemIP: "Concluído com Sucesso!!",
                      tipoIcone: "sucess",
                    });
                    setTimeout(() => {
                      this.setState({ openIP: false });
                    }, 1000);
                  }, 1000);
                }, 4000);
              }, 2000);
            }, 1000);
          }, 1000);
        }, 20000);
      }
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
            mask='NOT-VIRGULA'
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
        <ModalIP
          open={this.state.openIP}
          mensagem={this.state.mensagemIP}
          tipoIcone={this.state.tipoIcone}
        />
      </View>
    );
  }
}
