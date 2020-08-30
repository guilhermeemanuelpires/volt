import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import InputPattern from "../components/InputPattern/index";
import ModalIP from "../components/modalIP/modalIp";
import MsgModal from "../components/modal/index";
import { DatabaseConnection } from "../../database/connection";
import listar from "../../service/api";
import Style from "../styles/styles";
import StyleIp from "./styles";

var db = null;
export default class FormDatabase extends Component {
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
      erro: "Correto",
      open: false,
      mensagem: "",
      openIP: false,
      mensagemIP: "Atualizando Tabela X",
      tipoIcone: "loading",
    };
  }

  componentDidMount() {
    if (this.props.route.params) {
      const array = this.props.route.params.ip.split("/");
      if (array[0] == "volt") {
        this.setState({ ip: array[1] });
        this.atualizacao(array[1]);
      } else {
        Alert.alert("Atenção!", "QRCODE Inválido!!");
        this.props.navigation.navigate("FormCli");
      }
    }
  }

  setIp = (ip) => {
    this.setState({ ip });
  };

  openModal = (open) => {
    this.setState({ open });
  };

  newModulos = async (data) => {
    try {
      const modulos = await listar.getModulo(data);
      this.setState({ modulos });
      setTimeout(() => {
        this.setState({ tipoIcone: "loading" });
        this.setState({ mensagemIP: "Atualizando Tabela Módulos" });
      }, 1000);

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
    } catch (error) {
      this.setState({ tipoIcone: "error" });
      this.setState({
        mensagemIP: "Erro ao atualizar ao atualizar tabela Módulos!",
      });
      throw "PIPOCOU";
    }
  };
  newCidades = async (data) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      this.setState({ openIP: true });
      this.setState({ tipoIcone: "loading" });
      this.setState({ mensagemIP: "Atualizando Tabela Cidades" });
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
      this.setState({ openIP: true });
      this.setState({ tipoIcone: "loading" });
      this.setState({ mensagemIP: "Atualizando Tabela Cidades" });
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      const cidades = await listar.getCidade(data);
      const medias = await listar.getMedia(data);
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
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoIcone: "error" });
      this.setState({ mensagemIP: "Erro ao atualizar os dados!!" });
      setTimeout(() => {
        this.setState({ mensagemIP: "Valide se o IP está correto!!" });
        setTimeout(() => {
          this.setState({
            mensagemIP: "Verifique se o servidor está funcionando!",
          });
          setTimeout(() => {
            this.setState({
              mensagemIP: "Utilize o QRCODE para facilitar!",
            });
            setTimeout(() => {
              this.setState({ openIP: false });
              this.props.navigation.navigate("FormCli");
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
<<<<<<< HEAD
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      throw "PIPOCOU";
    }
  };

  newTarifas = async (data) => {
    try {
      const tarifas = await listar.getTarifa(data);
      this.setState({ tarifas });
      setTimeout(() => {
        this.setState({ tipoIcone: "loading" });
        this.setState({
          mensagemIP: "Atualizando tabela Tarifas",
        });
      }, 1000);
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
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoIcone: "error" });
      this.setState({
        mensagemIP: "Erro ao atualizar ao atualizar tabela Tarifa!",
      });
<<<<<<< HEAD
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      throw "PIPOCOU";
    }
  };

  newPadroes_Entrada = async () => {
    try {
      const tipoRede = await listar.getTipoRede(this.state.ip);
      this.setState({ tipoRede });
      setTimeout(() => {
        this.setState({ tipoIcone: "loading" });
        this.setState({ mensagemIP: "Atualizando Tabela Tipo de Rede" });
      }, 1500);

      db.transaction((tx) => {
        tx.executeSql("DELETE FROM padroes_entrada");
        tx.executeSql(
          "INSERT INTO padroes_entrada (id, descricao, minimo, coluna1, solo)" +
          "values (?, ?, ?, ?, ?)",
          [0, "Selecione", 0, 0, 0],
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
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoIcone: "error" });
      this.setState({
        mensagemIP: "Erro ao atualizar ao atualizar tabela Tipo de Rede!",
      });
<<<<<<< HEAD
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      throw "PIPOCOU";
    }
  };

  newDisjuntores = async (data) => {
    try {
      const Disjuntores = await listar.getDisjuntor(data);
      this.setState({ Disjuntores });
      setTimeout(() => {
        this.setState({ tipoIcone: "loading" });
        this.setState({ mensagemIP: "Atualizando Tabela Disjuntores" });
      }, 1000);
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
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoIcone: "error" });
      this.setState({
        mensagemIP: "Erro ao atualizar ao atualizar tabela Disjuntores!",
      });
<<<<<<< HEAD
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      throw "PIPOCOU";
    }
  };
  newTipoInstall = async (data) => {
    try {
      const tipoInstall = await listar.getTipoInstall(data);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoInstall });
      setTimeout(() => {
        this.setState({ tipoIcone: "loading" });
        this.setState({
          mensagemIP: "Atualizando Tabela Tipo Instalação",
        });
      }, 1000);

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
            [this.state.tipoInstall[x].id, this.state.tipoInstall[x].descricao],
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
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoIcone: "error" });
      this.setState({
        mensagemIP: "Erro ao atualizar ao atualizar tabela Tipo Instalação!",
      });
<<<<<<< HEAD
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      throw "PIPOCOU";
    }
  };
  newCalculo = async (data) => {
    try {
      const CalculoKWP = await listar.getCalculoKWP(data);
      this.setState({ CalculoKWP });
      setTimeout(() => {
        this.setState({ tipoIcone: "loading" });
        this.setState({ mensagemIP: "Atualizando Tabela Calculo KWP" });
      }, 1000);

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
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      this.setState({ tipoIcone: "error" });
      this.setState({
        mensagemIP: "Erro ao atualizar ao atualizar tabela Calculo KWP!",
      });
<<<<<<< HEAD
>>>>>>> d14b2f5c91112064d6ff724ce22d233eb48887ce
=======
>>>>>>> a4d641dfe4ac6ea4cb7a7401f566a8384f1962ca
      throw "PIPOCOU";
    }
  };
  atualizacao = async (data) => {
    try {
      const validaCidades = await this.newCidades(data);
      const validaModulos = await this.newModulos(data);
      const validaDisjuntores = await this.newDisjuntores(data);
      const validaPadroes = await this.newPadroes_Entrada(data);
      const validaTarifas = await this.newTarifas(data);
      const validaTipoInstall = await this.newTipoInstall(data);
      const validaCalculo = await this.newCalculo(data);
      setTimeout(() => {
        this.setState({ tipoIcone: "success" });
        this.setState({ mensagemIP: "Atualização concluída com sucesso!!" });
        setTimeout(() => {
          this.props.navigation.navigate("FormCli");
        }, 3000);
      }, 3000);
    } catch (e) {
      setTimeout(() => {
        this.setState({ openIP: false });
        this.props.navigation.navigate("FormCli");
      }, 2500);
    }
  };

  onValidaFom = async (data) => {
    if (!data) {
      this.setState({ mensagem: "Informe um Ip" });
      this.openModal(true);
    } else {
      this.atualizacao(data.ip);
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, paddingTop: 23 }}>
              <InputPattern
                value={this.state.ip}
                mask="NOT-VIRGULA"
                handleClick={this.setIp}
                keyboardType="numeric"
              />
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                style={Style.botaoQR}
                onPress={() => {
                  this.props.navigation.navigate("qrcode");
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/qrcode.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ textAlign: "center", padding: 25 }}>
            Para realizar a atualização dos dados, é necessário informar o IP de atualização ou escanear o Qr-Code fornecido pelo servidor de atualização.
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
