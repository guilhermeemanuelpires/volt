import React, { Component } from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import styles from "./styles"
import Style from "../../styles/styles";
import SearchableDropdown from "react-native-searchable-dropdown";

export default class ModalCidade extends Component {

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
                    this.setModalVisible(!this.props.open)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>                        
                        <SearchableDropdown
                            onTextChange={(text) => { }}
                            onItemSelect={(item) => { this.props.selecionado(item) }}
                            containerStyle={{ padding: 5 }}
                            textInputStyle={Style.inputPiker}
                            itemStyle={{
                                padding: 5,
                                borderColor: "#bbb",
                                borderWidth: 1,
                            }}
                            itemTextStyle={{
                                color: "#222",
                            }}
                            itemsContainerStyle={{
                                maxHeight: "70%",
                            }}
                            items={this.props.cidades}
                            defaultIndex={0}
                            placeholder="Pesquisar"
                            resetValue={false}
                            underlineColorAndroid="transparent"
                        />

                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                this.setModalVisible(!this.props.open)
                            }}
                        >
                            <Text style={styles.textStyle}>Selecionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}