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

    render() {
        return (
            <TextInput
                style={(this.state.isFocused) ? Style.inputSelected : Style.input}
                value={this.props.value}
                editable={this.props.editable}
                keyboardType={this.props.keyboardType}
                onFocus={this.onFocusChange}
                onBlur={this.onBlurChange}
                onChangeText={(texto) => this.props.handleClick(texto)}
            />
        );
    }
}