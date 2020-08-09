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
import InputPattern from "../components/InputPattern/index";

export default class formConfOrcamento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipoRedeSel: '',
            tipoRedes: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "teste" }, { "id": "2", "descricao": "teste02" }],

            tarifaSel: '',
            tarifas: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "teste" }, { "id": "2", "descricao": "teste02" }],

            disjuntorSel: '',
            disjuntores: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }],

            instalacaoSel: '',
            tipoInstalacao: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }],

            mediaConsumoMes: '',
            taxaPerda: '',

            moduloSel: '',
            modulos: [{ "id": "0", "descricao": "Selecione" }, { "id": "1", "descricao": "aaaaaa" }, { "id": "2", "descricao": "bbbbb" }],

            numeroModulos: '',
            calculoPotenciaSistema: '',
            calculoPotenciaInstalada: '',
            valorFinal: '',
            valorKW: ''
        }
    }

    setTaxaPerda = (taxaPerda) => {
        this.setState({ taxaPerda });
    }

    setMediaConsumoMes = (mediaConsumoMes) => {
        this.setState({ mediaConsumoMes });
    }

    setTipoRedeSel = (tipoRedeSel) => {
        this.setState({ tipoRedeSel });
    }

    setDisjuntorSel = (disjuntorSel) => {
        this.setState({ disjuntorSel });
    }

    setTarifaSel = (tarifaSel) => {
        this.setState({ tarifaSel });
    }

    setInstalacaoSel = (instalacaoSel) => {
        this.setState({ instalacaoSel });
    }

    setModuloSel = (moduloSel) => {
        this.setState({ moduloSel });
    }

    setNumeroModulos = (numeroModulos) => {
        this.setState({ numeroModulos });
    }

    setCalculoPotenciaSistema = (calculoPotenciaSistema) => {
        this.setState({ calculoPotenciaSistema });
    }

    setCalculoPotenciaInstalada = () => {
        this.setState({ calculoPotenciaInstalada });
    }

    setValorFinal = (valorFinal) => {
        this.setState({ valorFinal });
    }

    setValorKW = (valorKW) => {
        this.setState({ valorKW });
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


                        <Text style={Style.alinhaLabel}>Tarifa</Text>
                        <Dropdow
                            descricao="descricao"
                            lista={this.state.tarifas}
                            sel={this.state.tarifaSel}
                            handleClick={this.setTarifaSel} />

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
                        <InputPattern
                            keyboardType='numeric'
                            value={this.state.mediaConsumoMes}
                            handleClick={this.setMediaConsumoMes}
                        />

                        <Text style={Style.alinhaLabel}>Taxa Perda</Text>
                        <InputPattern
                            keyboardType='numeric'
                            value={this.state.taxaPerda}
                            handleClick={this.setTaxaPerda}
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
                            <View style={{ flex: 0.4 }} >
                                <TextInput
                                    keyboardType='numeric'
                                    editable={false}
                                    style={Style.inputRight}
                                    value={this.state.moduloSel}
                                />
                            </View>
                        </View>

                        <Text style={Style.alinhaLabel}>Número de Modulos</Text>
                        <InputPattern
                            keyboardType='numeric'
                            editable={false}
                            value={this.state.numeroModulos}
                            handleClick={this.setNumeroModulos}
                        />

                        <Text style={Style.alinhaLabel}>Cálculo da Potência do Sistema</Text>
                        <InputPattern
                            keyboardType='numeric'
                            editable={false}
                            value={this.state.calculoPotenciaSistema}
                            handleClick={this.setCalculoPotenciaSistema}
                        />

                        <Text style={Style.alinhaLabel}>Cálculo da potência instalada</Text>
                        <InputPattern
                            keyboardType='numeric'
                            editable={false}
                            value={this.state.calculoPotenciaInstalada}
                            handleClick={this.setCalculoPotenciaInstalada}
                        />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{ flex: 0.6 }} >

                                <Text style={Style.alinhaLabel}>Valor Final</Text>
                                <InputPattern
                                    keyboardType='numeric'
                                    editable={false}
                                    value={this.state.valorFinal}
                                    handleClick={this.setValorFinal}
                                />
                            </View>
                            <View style={{ flex: 0.6 }} >
                                <Text style={Style.alinhaLabel}>Valor do KW/R$</Text>
                                <InputPattern
                                    keyboardType='numeric'
                                    editable={false}
                                    value={this.state.valorKW}
                                    handleClick={this.setValorKW}
                                />
                            </View>
                        </View>


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
