import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

export default class ModalIP extends Component {

  getIcone() {
    switch (this.props.tipoIcone) {
      case "loading":
        return <ActivityIndicator size="large" color="#0000ff" />;
      case "success":
        return <Image source={require("../../../../assets/sucess.png")} />;
      case "error":
        return <Image source={require("../../../../assets/error.png")} />;
    }
  }

  render() {
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={this.props.open}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {this.getIcone()}
            <Text style={styles.descricao}>{this.props.mensagem}</Text>
          </View>
        </View>

      </Modal>
    );
  }
}
