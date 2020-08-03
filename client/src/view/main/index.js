import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  AsyncStorage,
  BackHandler,
  Alert,
  TextInput
} from "react-native";
import Style from "./styles";

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>SEJA BEM VINDO sasasas</Text>
        <TouchableHighlight style={Style.botao}>
          <Text style={Style.botoaText}>Sair</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
