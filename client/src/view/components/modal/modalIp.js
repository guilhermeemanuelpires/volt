import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  ActivityIndicator

} from "react-native";

import styles from "./styles"

export default class ModalIP extends Component {
  
  render() {
    return (

      <Modal
        animationType="none"
        transparent={true}
        visible={this.props.open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.descricao}>{this.props.mensagem}</Text>
          </View>
        </View>
      </Modal>

    );
  }
}