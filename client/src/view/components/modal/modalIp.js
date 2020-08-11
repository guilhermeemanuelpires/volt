import React, { Component } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import styles from "./styles";

export default class MsgModal extends Component {
  state = { ip: "" };
  setModalVisible = (open) => {
    this.props.execute({ open })
}
  derreter = () => {
    // Alert.alert(this.state.ip);
    console.log("OPEN "+this.props.open);
    console.log("!OPEN" + !this.props.open);
    this.props.execute(!this.props.open);
    // this.setState({ visible: false });
    this.props.execute(!this.props.visible);
  };

  render() {
    const { modalVisible } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              autoFocus={true}
              // onFocus={() => this.setState({ ip: "" })}
              value={this.state.ip}
              onChangeText={(ip) => this.setState({ ip })}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.setModalVisible(!this.props.open)
            }}
            >
              <Text style={styles.textStyle}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
