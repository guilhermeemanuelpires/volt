import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";

import Style from "../styles/styles";
import Dropdow from "../components/dropdown/index";

export default class formConfOrcamento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipoRedeSel: '',
            tipoRedes: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "teste" }, { "id": "2", "descricao": "teste02" }],

            disjuntorSel: '',
            disjuntores: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }]
        }
    }

    setTipoRedeSel = (tipoRedeSel) => {
        this.setState({ tipoRedeSel });
    }

    setDisjuntorSel = (disjuntorSel) => {
        this.setState({ disjuntorSel });
    }

    _Submit() {
        alert('Gera Pdf Dus Guri');
    }

    render() {
        return (
            <View style={Style.container}>
                <Text style={Style.titulo}>Configuração do Orçamento</Text>

                <ScrollView>

                    <View style={Style.ajustaCampos}>
                        <Text style={Style.alinhaLabel}>Tipo De Rede</Text>
                        <Dropdow
                            descricao="descricao"
                            lista={this.state.tipoRedes}
                            sel={this.state.tipoRedeSel}
                            handleClick={this.setTipoRedeSel} />

                        <Text style={Style.alinhaLabel}>Disjuntor</Text>

                        <Dropdow
                            descricao="descricao"
                            lista={this.state.disjuntores}
                            sel={this.state.disjuntorSel}
                            handleClick={this.setDisjuntorSel} />

                    </View>
                </ScrollView>

                <TouchableOpacity style={Style.botao}
                    onPress={() => { this._Submit() }}
                >
                    <Text style={Style.labelBotao}>Gerar</Text>
                </TouchableOpacity>
            </View >
        )
    }
}
