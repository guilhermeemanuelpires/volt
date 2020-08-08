import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
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
            disjuntores: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }],

            instalacaoSel: '',
            tipoInstalacao: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }],

            moduloSel: '',
            modulos: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }]
        }
    }

    setTipoRedeSel = (tipoRedeSel) => {
        this.setState({ tipoRedeSel });
    }

    setDisjuntorSel = (disjuntorSel) => {
        this.setState({ disjuntorSel });
    }

    setInstalacaoSel = (instalacaoSel) => {
        this.setState({ instalacaoSel });
    }

    setModuloSel = (moduloSel) => {
        this.setState({ moduloSel });
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

                        <Text style={Style.alinhaLabel}>Tipo instalação</Text>
                        <Dropdow
                            descricao="descricao"
                            lista={this.state.tipoInstalacao}
                            sel={this.state.instalacaoSel}
                            handleClick={this.setInstalacaoSel} />

                        <Text style={Style.alinhaLabel}>Média de Consumo Mês</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={Style.input}
                        />

                        <Text style={Style.alinhaLabel}>Módulo</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{ flex: 0.8 }} >
                                <Dropdow
                                    descricao="descricao"
                                    lista={this.state.modulos}
                                    sel={this.state.moduloSel}
                                    handleClick={this.setModuloSel} />

                            </View>
                            <View style={{ flex: 0.3 }} >
                                <TextInput
                                    keyboardType='numeric'
                                    editable={false}
                                    style={Style.inputRight}
                                    value={this.state.moduloSel}
                                />
                            </View>
                        </View>

                        <Text style={Style.alinhaLabel}>Número de Modulos</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={Style.input}
                        />

                        <Text style={Style.alinhaLabel}>Cálculo da Potência do Sistema</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={Style.input}
                        />

                        <Text style={Style.alinhaLabel}>Cálculo da potência instalada</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={Style.input}
                        />
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
