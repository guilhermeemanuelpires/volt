import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Dropdow from "../components/dropdown/index";
import ModalCalculo from "../components/modalCalc/index";
import MsgModal from "../components/modal/index";
import InputPattern from "../components/InputPattern/index";
import { DatabaseConnection } from "../../database/connection";
import Calculos from "../../util/index";
import Style from "../styles/styles";

var db = null;
export default class formConfOrcamento extends Component {
  constructor(props) {
    db = DatabaseConnection.getConnection();
    super(props);
    this.state = {
      tipoRedeSel: "",
      tipoRedeID: 0,
      tipoRedes: [],

      tarifaSel: "",
      tarifas: [],
      tarifa: 0,
      calculo_kwp: [{
        'TELHADO':0,
        'SOLO':0
      }],

      disjuntorSel: "",
      disjuntores: [],

      instalacaoSel: "",
      instalacaoDesc: "",
      tipoInstalacao: [],

      mediaConsumoMes: "",
      taxaPerda: "",

      moduloSel: "",
      modulos: [],
      potencia: 0,
      numeroModulos: 0,
      calculoPotenciaSistema: 0,
      calculoPotenciaInstalada: 0,
      valorFinal: "",
      valorKW: "",
      openCalculo: false,
      mensagem: "",
      open: false,
    };
    this.listTipo_Rede();
    this.listTarifas();
    this.listDisjuntores();
    this.listTipoInstall();
    this.listModulos();
  }

  setTaxaPerda = (taxaPerda) => {
    this.setState({ taxaPerda });
  };

  setMediaConsumoMes = (mediaConsumoMes) => {
    this.setState({ mediaConsumoMes });
  };

  setTipoRedeSel = (tipoRedeSel) => {
    this.setState({ tipoRedeSel });
    const tipoRede = this.state.tipoRedes.find((tipoRede) => {
      if (tipoRede.id == tipoRedeSel) {
        return tipoRede;
      }
    });
    this.setState({ tipoRedeID: tipoRede.id });
    this.listDisjuntores();
  };

  setDisjuntorSel = (disjuntorSel) => {
    this.setState({ disjuntorSel });
  };

  setTarifaSel = (tarifaSel) => {
    const tarifas = this.state.tarifas.find((tarifa) => {
      if (tarifa.id == tarifaSel) {
        return tarifa;
      }
    });
    this.setState({ tarifa: tarifas.valor });
    this.setState({ tarifaSel });
  };

  setInstalacaoSel = (instalacaoSel) => {
    this.setState({ instalacaoSel });
    const instalacao = this.state.tipoInstalacao.find((instalacao) => {
      if (instalacao.id == instalacaoSel) {
        return instalacao;
      }
    });
    this.setState({ instalacaoDesc: instalacao.descricao });
  };

  setModuloSel = (moduloSel) => {
    this.setState({ moduloSel });
    const potenciaModulo = this.state.modulos.find((modulo) => {
      if (modulo.id == moduloSel) {
        return modulo;
      }
    });
    this.setState({ potencia: potenciaModulo.potencia });
  };

  setNumeroModulos = (numeroModulos) => {
    this.setState({ numeroModulos });
  };

  setCalculoPotenciaSistema = (calculoPotenciaSistema) => {
    this.setState({ calculoPotenciaSistema });
  };

  setCalculoPotenciaInstalada = () => {
    this.setState({ calculoPotenciaInstalada });
  };

  setValorFinal = (valorFinal) => {
    this.setState({ valorFinal });
  };

  setValorKW = (valorKW) => {
    this.setState({ valorKW });
  };

  openModalCalculo = (openCalculo) => {
    this.setState({ openCalculo });
  };

  openModal = (open) => {
    this.setState({ open });
  };

  _Calculos = async () => {
    if (this._onValidaFom()) {
      const valCalculos = {
        potencia: this.state.potencia,
        mediaConsumoMes: this.state.mediaConsumoMes,
        taxaPerda: this.state.taxaPerda,
      };

      const potencia_sistema = Calculos.potencia_sistema(
        valCalculos.mediaConsumoMes,
        this.props.route.params.media,
        valCalculos.taxaPerda
      );
      const num_modulos = Calculos.num_modulos(
        potencia_sistema,
        valCalculos.potencia
      );

      const potencia_instalada = Calculos.potencia_instalada(
        num_modulos,
        valCalculos.potencia
      );
    await db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM calculo_kwp where POTEN2 > (?) AND POTEN1 < (?) AND codPadrao = (?)",
          [
            potencia_instalada,
            potencia_instalada,
            this.state.tipoRedeID,
          ],
          (trans, result) => {
            this.setState({ calculo_kwp: result["rows"]._array });
            const val = this.state.calculo_kwp[0];
            const desc = this.state.instalacaoDesc;
            var valorFinal = this.state.calculoPotenciaInstalada * val[desc];
            var valorKW_R = valorFinal / this.state.calculoPotenciaInstalada;
            this.setState({ valorFinal: valorFinal });
            this.setState({ valorKW: valorKW_R });
          }
        );
      });
      this.setState({
        calculoPotenciaInstalada: potencia_instalada.toFixed(2),
        numeroModulos: num_modulos,
        calculoPotenciaSistema: potencia_sistema.toFixed(2),
      });

      this.openModalCalculo(true);
    }
  };

  _geToMessage(orcamentoConfig) {
    if (orcamentoConfig.tipoRedeSel < 1) return "Selecione o Tipo de Rede";
    if (orcamentoConfig.disjuntorSel < 1) return "Selecione o Disjuntor";
    if (orcamentoConfig.instalacaoSel < 1)
      return "Selecione o Tipo de instalação";
    if (!orcamentoConfig.mediaConsumoMes)
      return "Informe a Média de Consumo Mês";
    if (orcamentoConfig.moduloSel < 1) return "Selecione o Módulo";
    if (orcamentoConfig.tarifaSel <= 0) return "Selecione a Tarifa";
    if (!orcamentoConfig.taxaPerda) return "Informe a taxa Perda";
  }

  _onValidaFom = () => {
    const orcamentoConfig = {
      tipoRedeSel: this.state.tipoRedeSel,
      disjuntorSel: this.state.disjuntorSel,
      instalacaoSel: this.state.instalacaoSel,
      mediaConsumoMes: this.state.mediaConsumoMes,
      taxaPerda: this.state.taxaPerda,
      tarifaSel: this.state.tarifaSel,
      moduloSel: this.state.moduloSel,
    };

    if (
      orcamentoConfig.tipoRedeSel < 1 ||
      orcamentoConfig.disjuntorSel < 1 ||
      orcamentoConfig.instalacaoSel < 1 ||
      !orcamentoConfig.mediaConsumoMes ||
      orcamentoConfig.moduloSel < 1 ||
      orcamentoConfig.tarifaSel <= 0 ||
      !orcamentoConfig.taxaPerda
    ) {
      const msg = this._geToMessage(orcamentoConfig);
      this.setState({ mensagem: msg });
      this.openModal(true);
      return false;
    } else {
      return true;
    }
  };

  _Submit() {
    if (this._onValidaFom()) {
      alert("Gera Pdf Dus Guri");
    }
  }

  listModulos = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT id, modelo, potencia FROM modulo",
        [],
        (trans, result) => {
          this.setState({ modulos: result["rows"]._array });
        }
      );
    });
  };

  listTarifas = async () => {
    await db.transaction((tx) => {
      tx.executeSql("SELECT id, valor FROM tarifa", [], (trans, result) => {
        this.setState({ tarifas: result["rows"]._array });
      });
    });
  };

  listTipo_Rede = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT id, descricao, minimo, coluna1, solo FROM padroes_entrada",
        [],
        (trans, result) => {
          this.setState({ tipoRedes: result["rows"]._array });
        }
      );
    });
  };

  listDisjuntores = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT id, descricao, demanda, amper, codPadrao FROM disj_entrada WHERE codPadrao = (?)",
        [this.state.tipoRedeID],
        (trans, result) => {
          this.setState({ disjuntores: result["rows"]._array });
        }
      );
    });
  };

  listTipoInstall = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT id, descricao FROM tipo_instalacao",
        [],
        (trans, result) => {
          this.setState({ tipoInstalacao: result["rows"]._array });
        }
      );
    });
  };
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.titulo}>Configuração do Orçamento</Text>

        <ScrollView>
          <View style={Style.ajustaCampos}>
            <Text style={Style.alinhaLabel}>Tipo de Rede</Text>
            <Dropdow
              descricao="descricao"
              lista={this.state.tipoRedes}
              sel={this.state.tipoRedeSel}
              handleClick={this.setTipoRedeSel}
            />

            <Text style={Style.alinhaLabel}>Disjuntor</Text>
            <Dropdow
              descricao="descricao"
              lista={this.state.disjuntores}
              sel={this.state.disjuntorSel}
              handleClick={this.setDisjuntorSel}
            />

            <Text style={Style.alinhaLabel}>Tipo instalação</Text>
            <Dropdow
              descricao="descricao"
              lista={this.state.tipoInstalacao}
              sel={this.state.instalacaoSel}
              handleClick={this.setInstalacaoSel}
            />

            <Text style={Style.alinhaLabel}>Média de Consumo Mês</Text>
            <InputPattern
              keyboardType="numeric"
              value={this.state.mediaConsumoMes}
              handleClick={this.setMediaConsumoMes}
            />
            <Text style={Style.alinhaLabel}>Taxa Perda</Text>
            <InputPattern
              keyboardType="numeric"
              value={this.state.taxaPerda}
              handleClick={this.setTaxaPerda}
            />
            <Text style={Style.alinhaLabel}>Tarifa</Text>
            <Dropdow
              descricao="valor"
              lista={this.state.tarifas}
              sel={this.state.tarifaSel}
              handleClick={this.setTarifaSel}
            />
            <Text style={Style.alinhaLabel}>Módulo</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 0.8 }}>
                <Dropdow
                  descricao="modelo"
                  lista={this.state.modulos}
                  sel={this.state.moduloSel}
                  handleClick={this.setModuloSel}
                />
              </View>
              <View style={{ flex: 0.4 }}>
                <TextInput
                  keyboardType="numeric"
                  editable={false}
                  style={Style.inputRight}
                  value={String(this.state.potencia)}
                />
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                style={Style.botaoCalc}
                onPress={() => {
                  this._Calculos();
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/calc.png")}
                    style={{ width: 30, height: 35 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={Style.botao}
          onPress={() => {
            this._Submit();
          }}
        >
          <Text style={Style.labelBotao}>Gerar</Text>
        </TouchableOpacity>

        <ModalCalculo
          open={this.state.openCalculo}
          execute={this.openModalCalculo}
          numeroModulos={this.state.numeroModulos}
          calculoPotenciaSistema={this.state.calculoPotenciaSistema}
          calculoPotenciaInstalada={this.state.calculoPotenciaInstalada}
          valorFinal={this.state.valorFinal}
          valorKW={this.state.valorKW}
        />

        <MsgModal
          mensagem={this.state.mensagem}
          open={this.state.open}
          execute={this.openModal}
        />
      </View>
    );
  }
}
