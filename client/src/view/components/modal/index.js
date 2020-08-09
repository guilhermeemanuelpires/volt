import React, { Component } from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import styles from "./styles"

export default class MsgModal extends Component {

    setModalVisible = (visible) => {
        this.props.execute({ visible })
    }

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
                        <Text style={styles.modalText}>{this.props.mensagem}</Text>

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