import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  Picker
} from "react-native";

import Style from "./styles";

export default class FormCli extends Component {

  async componentDidMount() {
    const cidades = ['Dois Vizinhos', 'Pato Branco', 'Teste']
    this.setState({ cidades });
  }

  render() {
    return (

      <View style={Style.container}>

        <Text style={Style.titulo}>Dados Do Cliente</Text>

        <ScrollView>
          <View style={Style.ajustaCampos}>

            <Text style={Style.alinhaLabel}>Finame</Text>
            <TextInput
              placeholder='Sem Finame'
              value='Sem Finame'
              readonly
              style={Style.input}
            />

            <Text style={Style.alinhaLabel}>Nome Cliente</Text>
            <TextInput
              style={Style.input}
            />

            <Text style={Style.alinhaLabel}>CFP/CNPJ</Text>
            <TextInput
              keyboardType='numeric'
              style={Style.input}
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

              {/* <View >
                <Text style={Style.alinhaLabel}>Cidade</Text>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View> */}

          </View>
        </ScrollView>

        <TouchableHighlight style={Style.botao}>
          <Text style={Style.alinhaLabel} >Salvar</Text>
        </TouchableHighlight>

      </View>
    );
  }
}