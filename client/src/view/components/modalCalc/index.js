import React, { Component } from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";

import Mask from "../../../util/mask";
import Style from "../../styles/styles";
import styles from "./styles";

export default class MsgModal extends Component {

    setModalVisible = (visible) => {
        this.props.execute({ visible })
    }

    render() {
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

                        <View styles={Style.container} >
                            <Text style={Style.alinhaLabel}>Número de Modulos</Text>
                            <TextInput
                                style={Style.input}
                                editable={false}
                                value={String(this.props.numeroModulos)}
                            />

                            <Text style={Style.alinhaLabel}>Cálculo da Potência do Sistema</Text>
                            <TextInput
                                style={Style.input}
                                editable={false}
                                value={String(this.props.calculoPotenciaSistema)}
                            />

                            <Text style={Style.alinhaLabel}>Cálculo da potência instalada</Text>
                            <TextInput
                                style={Style.input}
                                editable={false}
                                value={String(this.props.calculoPotenciaInstalada)}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View style={{ flex: 0.6 }}>
                                    <Text style={Style.alinhaLabel}>Valor Final R$</Text>
                                    <TextInput
                                        style={Style.input}
                                        editable={false}
                                        value={Mask.moedaMask(String(this.props.valorFinal))}
                                    />
                                </View>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={Style.alinhaLabel}>Valor do KW/R$</Text>
                                    <TextInput
                                        style={Style.input}
                                        editable={false}
                                        value={Mask.moedaMask(String(this.props.valorKW))}
                                    />
                                </View>
                            </View>
                        </View>

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