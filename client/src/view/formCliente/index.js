import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Picker
} from "react-native";

import Style from "../styles/styles";
import Dropdow from "../components/dropdown/index";
import { useNavigation } from '@react-navigation/native';
import Style from "./styles";
import styles from "./styles";

export default class FormCli extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      finame: 'Sem Finame',
      nome: '',      
      cidadeSel: '',
      cidades: [{ "id": "0", "nome": "Selecione uma Cidade", "distancia": '0' },
                { "id": "1", "nome": "Dois Vizinhos", "distancia": "999" },
                { "id": "3", "nome": "Pato Branco", "distancia": "888" }]
    }
  }

  state = {
    bntEnable: false,
    active: true
  }

  setCidadeSel = (cidadeSel) => {
    this.setState({ cidadeSel });
  }

  _Submit() {
    this.props.navigation.navigate('formConfOrcamento');
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={Style.container}>

        <Text style={Style.titulo}>Dados Do Cliente</Text>

        <ScrollView>
          <View style={Style.ajustaCampos}>

            <Text style={Style.alinhaLabel}>Finame</Text>
            <TextInput
              style={Style.input}
              placeholder='Sem Finame'
              value='Sem Finame'
              editable={false}
            />

            <Text style={Style.alinhaLabel}>Nome Cliente</Text>
            <TextInput
              style={this.active ? Style.inputInvalido : Style.input}
              onFocus={(valeu) => { this.setState({ active: valeu }) }}
              onChangeText={(texto) => this.setState({ nome: texto })}
              value={this.state.nome}
            />

            <Text style={Style.alinhaLabel}>CPF/CNPJ</Text>
            <TextInput
              keyboardType='numeric'
              style={Style.input}
              ref={(input) => { this.secondTextInput = input; }}
            />

            <Text style={Style.alinhaLabel}>Contato</Text>
            <TextInput
              keyboardType='numeric'
              style={Style.input}
            />

            <Text style={Style.alinhaLabel}>Endereço</Text>
            <TextInput
              style={Style.input}
            />

            <Text style={Style.alinhaLabel}>Cep</Text>
            <TextInput
              keyboardType='numeric'
              style={Style.input}
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

        <TouchableOpacity style={Style.botao}
          onPress={() => { this._Submit() }}
          disabled={this.state.bntEnable}
        >
          <Text style={Style.labelBotao}>Prosseguir</Text>
        </TouchableOpacity>

      </View>
    );
  }
}