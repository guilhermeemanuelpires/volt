import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import Style from "../styles/styles";
import Dropdow from "../components/dropdown/index";
import InputPattern from "../components/InputPattern/index";
import MsgModal from "../components/modal/index"

export default class FormCli extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finame: 'Sem Finame',
      nome: '',
      cnpjf: '',
      contato: '',
      endereco: '',
      cep: '',
      cidadeSel: '',
      cidades: [{ "id": "0", "nome": "Selecione uma Cidade", "distancia": '0' },
      { "id": "1", "nome": "Dois Vizinhos", "distancia": "999" },
      { "id": "3", "nome": "Pato Branco", "distancia": "888" }],
      bntActive: true,
      open: false,
      mensagem: ''
    }
  }

  setNome = (nome) => {
    this.setState({ nome });
  }

  setCnpjf = (cnpjf) => {
    this.setState({ cnpjf });
  }

  setContato = (contato) => {
    this.setState({ contato });
  }

  setEndereco = (endereco) => {
    this.setState({ endereco });
  }

  setCep = (cep) => {
    this.setState({ cep });
  }

  setCidadeSel = (cidadeSel) => {
    this.setState({ cidadeSel });
  }

  setMensagem = (msg) => {
    this.setState({ mensagem: msg });
  }

  openModal = (open) => {
    this.setState({ open });
  }

  _geToMessage(cliente) {
    if (!cliente.nome) return "Necessário informar o Nome do Cliente";
    if (!cliente.cnpjf) return "Necessário informar o CPF/CNPJ do Cliente";
    if (!cliente.contato) return "Necessário informar o Contato do Cliente";
    if (!cliente.endereco) return "Necessário informar o Endereço do Cliente";
    if (!cliente.cep) return "Necessário informar o Cep do Cliente";
    if (cliente.cidadeSel <= 0) return "Necessário selecionar a Cidade do Cliente";
  }

  onValidaFom = (cliente) => {

    if ((!cliente.nome) ||
      (!cliente.cnpjf) ||
      (!cliente.contato) ||
      (!cliente.endereco) ||
      (!cliente.cep) ||
      (cliente.cidadeSel <= 0)) {

      const msg = this._geToMessage(cliente);

      this.setState({ mensagem: msg });
      this.openModal(true);

    } else {
      this.props.navigation.navigate('formConfOrcamento');
    }
  }

  _Submit() {

    const cliente = {
      finame: this.state.finame,
      nome: this.state.nome,
      cnpjf: this.state.cnpjf,
      contato: this.state.contato,
      endereco: this.state.endereco,
      cep: this.state.cep,
      cidadeSel: this.state.cidadeSel
    };

    this.onValidaFom(cliente);

  }

  render() {
    return (
      <View style={Style.container}>

        <Text style={Style.titulo}>Dados Do Cliente</Text>

        <ScrollView>

          <View style={Style.ajustaCampos}>

            <Text style={Style.alinhaLabel}>Finame</Text>
            <InputPattern value={this.state.finame} editable={false} />

            <Text style={Style.alinhaLabel}>Nome Cliente</Text>
            <InputPattern value={this.state.nome} handleClick={this.setNome} />


            <Text style={Style.alinhaLabel}>CPF/CNPJ</Text>
            <InputPattern
              value={this.state.cnpjf}
              handleClick={this.setCnpjf}
              keyboardType='number-pad'
            />

            <Text style={Style.alinhaLabel}>Contato</Text>
            <InputPattern
              value={this.state.contato}
              handleClick={this.setContato}
              keyboardType='number-pad'
            />

            <Text style={Style.alinhaLabel}>Endereço</Text>
            <InputPattern
              value={this.state.endereco}
              handleClick={this.setEndereco}
            />

            <Text style={Style.alinhaLabel}>Cep</Text>
            <InputPattern
              value={this.state.cep}
              handleClick={this.setCep}
              keyboardType='number-pad'
            />

            <Text style={Style.alinhaLabel}>Cidade </Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View style={{ flex: 0.8 }} >
                <Dropdow
                  descricao="nome"
                  lista={this.state.cidades}
                  sel={this.state.cidadeSel}
                  handleClick={this.setCidadeSel} />

              </View>
              <View style={{ flex: 0.3 }} >
                <TextInput
                  keyboardType='numeric'
                  editable={false}
                  style={Style.inputRight}
                  value={this.state.cidadeSel}
                />
              </View>
            </View>

          </View>
        </ScrollView>

        <TouchableOpacity style={(!this.state.bntActive) ? Style.botaoDisabled : Style.botao}
          onPress={() => { this._Submit() }}
          disabled={!this.state.bntActive}
        >
          <Text style={Style.labelBotao}>Prosseguir</Text>
        </TouchableOpacity>

        <MsgModal mensagem={this.state.mensagem} open={this.state.open} execute={this.openModal} />

      </View>
    );
  }
}