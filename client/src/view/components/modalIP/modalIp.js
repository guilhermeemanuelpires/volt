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
import Style from "../../styles/styles";

export default class ModalIP extends Component {
  getIcone() {
    switch (this.props.tipoIcone) {
      case "loading":
        return <ActivityIndicator size="large" color="#0000ff" />;
      case "sucess":
        return <Image source={require("../../../../assets/sucess.png")} />;
      case "error":
        return <Image source={require("../../../../assets/error.png")} />;
    }
  }
  setModalVisible = (visible) => {
    this.props.execute({ visible })
}

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
          <View styles={styles.container} >
            {this.getIcone()}
            
           
            <Text style={styles.descricao}>{this.props.mensagem}</Text>
            </View>
            {
              (this.props.tipoIcone == 'error') && ( 
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!this.props.open);
                }}
              >
                <Text style={styles.textStyle}>Voltar</Text>
              </TouchableOpacity>
              )
            }
          
          </View>
        </View>
      </Modal>
    );
  }
}