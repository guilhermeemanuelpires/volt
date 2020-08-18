import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Dropdow from "../components/dropdown/index";
import InputPattern from "../components/InputPattern/index";
import { DatabaseConnection } from "../../database/connection";
import Calculos from "../../util/index";
import Style from "../styles/styles";
import { Portal } from "react-native-paper";
var db = null;
export default class formConfOrcamento extends Component {
  constructor(props) {
    db = DatabaseConnection.getConnection();
    super(props);
    this.state = {
      tipoRedeSel: "",
      tipoRedes: [],

      tarifaSel: "",
      tarifas: [],
      tarifa: 0,

      disjuntorSel: "",
      disjuntores: [],

      instalacaoSel: "",
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
    };
    this.listTipo_Rede();
    this.listTarifas();
    this.listDisjuntores();
    this.listTipoInstall();
    this.listModulos();
  }

  setTaxaPerda = (taxaPerda) => {
    this.setState({ taxaPerda });
    this.potencia_sistema();
  };

  setMediaConsumoMes = (mediaConsumoMes) => {
    this.setState({ mediaConsumoMes });
    this.potencia_sistema();
  };

  setTipoRedeSel = (tipoRedeSel) => {
    this.setState({ tipoRedeSel });
    this.potencia_sistema();
  };

  setDisjuntorSel = (disjuntorSel) => {
    this.setState({ disjuntorSel });
    this.potencia_sistema();
  };

  setTarifaSel = (tarifaSel) => {
    const tarifas = this.state.tarifas.find((tarifa) => {
      if (tarifa.id == tarifaSel) {
        return tarifa;
      }
    });
    this.setState({tarifa: tarifas.valor} )
    this.potencia_sistema();
    this.setState({ tarifaSel });
  };

  setInstalacaoSel = (instalacaoSel) => {
    this.setState({ instalacaoSel });
  };

  setModuloSel = (moduloSel) => {
    this.setState({ moduloSel });
    const potenciaModulo = this.state.modulos.find((modulo) => {
      if (modulo.id == moduloSel) {
        return modulo;
      }
    });
    this.setState({ potencia: potenciaModulo.potencia });
    this.num_modulo(potenciaModulo.potencia)
    this.potencia_sistema();
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

  _Submit() {
    alert("Gera Pdf Dus Guri");
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
        "SELECT id, descricao, demanda, amper, codPadrao FROM disj_entrada",
        [],
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

  potencia_sistema = () => {
    const valor = Calculos.potencia_sistema(
      this.state.mediaConsumoMes,
      5,
      this.state.taxaPerda
    );
    this.setState({ calculoPotenciaSistema: valor });
    
  };

  num_modulo = (potencia) => {
    const valor = Calculos.num_modulos(this.state.calculoPotenciaSistema, potencia);
    this.setState({ numeroModulos: valor });
    this.potencia_instalada(valor, potencia)
  };

  potencia_instalada =  (numModulo, potencia) => {
    const valor =  Calculos.potencia_instalada(
      numModulo,
      potencia
    );
    this.setState({ calculoPotenciaInstalada: valor });
  };

  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.titulo}>Configuração do Orçamento</Text>

        <ScrollView>
          <View style={Style.ajustaCampos}>
            <Text style={Style.alinhaLabel}>Tipo De Rede</Text>
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

            <Text style={Style.alinhaLabel}>Número de Modulos</Text>
            <TextInput
              style={Style.input}
              editable={false}
              value={String(this.state.numeroModulos)}
            />

            <Text style={Style.alinhaLabel}>
              Cálculo da Potência do Sistema
            </Text>
            <InputPattern
              keyboardType="numeric"
              editable={false}
              value={String(this.state.calculoPotenciaSistema)}
              handleClick={this.setCalculoPotenciaSistema}
            />

            <Text style={Style.alinhaLabel}>Cálculo da potência instalada</Text>
            <InputPattern
              keyboardType="numeric"
              editable={false}
              value={String(this.state.calculoPotenciaInstalada)}
              handleClick={this.setCalculoPotenciaInstalada}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 0.6 }}>
                <Text style={Style.alinhaLabel}>Valor Final</Text>
                <InputPattern
                  keyboardType="numeric"
                  editable={false}
                  value={this.state.valorFinal}
                  handleClick={this.setValorFinal}
                />
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={Style.alinhaLabel}>Valor do KW/R$</Text>
                <InputPattern
                  keyboardType="numeric"
                  editable={false}
                  value={this.state.valorKW}
                  handleClick={this.setValorKW}
                />
              </View>
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
      </View>
    );
  }
}
