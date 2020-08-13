import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Style from "../styles/styles";
import StyleIp from "./styles";
import InputPattern from "../components/InputPattern/index";
import ModalIP from "../components/modal/modalIp";
import MsgModal from "../components/modal/index";

export default class FormDatabase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      open: false,
      mensagem: '',
      openIP: false,
      mensagemIP: 'Atualizando Tabela X'
    };
  }

  setIp = (ip) => {
    this.setState({ ip });
  }

  openModal = (open) => {
    this.setState({ open });
  }

  onValidaFom = (data) => {
    if (!data.ip) {
      this.setState({ mensagem: "Informe um Ip um IP" });
      this.openModal(true);
    } else {

      // AQUI TU IMPLEMENTA SUA REGRA DE NEGOCIO 
      // DE PREFERENCIA CRIE UMA FUNCA SEPARADA
      this.setState({ openIP: true });
      this.setState({ mensagemIP: 'Atualizando Tabela Cidades' });
  
      // essa gambira só serve para teste 
      setTimeout(() => {
        this.setState({ openIP: false });
      }, 5000);
    }
  }

  _Submit() {

    const data = {
      ip: this.state.ip
    }

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
            keyboardType='numeric'
          />

          <Text style={{ textAlign: "center", padding: 25 }}>Para realizar a atualização dos dados, é necessário informar o IP de atualização fornecido pelo servidor de atualização.</Text>

        </View>

        <TouchableOpacity style={Style.botao}
          onPress={() => { this._Submit() }}>
          <Text style={Style.labelBotao}>Atualizar</Text>
        </TouchableOpacity>

        <MsgModal mensagem={this.state.mensagem} open={this.state.open} execute={this.openModal} />
        <ModalIP open={this.state.openIP} mensagem={this.state.mensagemIP} />

      </View >
    );
  }
}