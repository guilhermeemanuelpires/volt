import React, { Component } from "react";
import {
    TextInput
} from "react-native";

import Style from "../../styles/styles";

export default class InputPattern extends Component {

    state = {
        isFocused: false
    }

    onFocusChange = () => {
        this.setState({ isFocused: true });
    }

    onBlurChange = () => {
        this.setState({ isFocused: false });
    }

    onChangeTextPattern = (texto) => {

        var result = texto;

        if (this.props.hasOwnProperty('mask')) {
            if (this.props.mask == 'CNPJF') {
                result = cpfMask(result);
            }

            if (this.props.mask == 'FONE') {
                result = foneMask(result);
            }

            if (this.props.mask == 'CEP') {
                result = cepMask(result);
            }

            if (this.props.mask == 'NUMERICO') {
                result = numericoMask(result);
            }
        }

        this.props.handleClick(result);
    }

    render() {
        return (
            <TextInput
                style={(this.state.isFocused) ? Style.inputSelected : Style.input}

                value={this.props.value}
                editable={this.props.editable}
                keyboardType={this.props.keyboardType}
                onFocus={this.onFocusChange}
                onBlur={this.onBlurChange}
                onChangeText={(texto) => this.onChangeTextPattern(texto)}
                maxLength={this.props.maxLength}
            />
        );
    }
}

//CPF
const cpfMask = value => {
    const calc = value;

    if (calc.length <= 15) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    } else {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1/$2')
            .replace(/(\d{4})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }
}

//TELEFONE
const foneMask = value => {

    const calc = value;
    if (calc.length <= 14) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
    } else {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
    }

}

//CEP
const cepMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}

//NUMERICO
const numericoMask = v => {
    v = v.replace(/\D/g, "");
    var len = v.length;
    for (var i = 3; i < v.length; i = i + 3) {
        if (len > i) {
            var x = len - i
                , er = new RegExp('(\\d{' + x + '})(\\d)');
            v = v.replace(er, '$1.$2');
        }
    }
    return v;
}