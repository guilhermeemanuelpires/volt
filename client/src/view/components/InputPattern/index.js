import React, { Component } from "react";
import {
    TextInput
} from "react-native";

import Style from "../../styles/styles";
import Mask from "../../../util/mask";

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
                result = Mask.cpfMask(result);
            }

            if (this.props.mask == 'FONE') {
                result = Mask.foneMask(result);
            }

            if (this.props.mask == 'CEP') {
                result = Mask.cepMask(result);
            }

            if (this.props.mask == 'NOT-VIRGULA') {
                result = Mask.notVirgula(result);
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