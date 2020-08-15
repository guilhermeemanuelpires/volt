import React, { Component } from "react";
import {
    View,    
    Picker
} from "react-native";

import Style from "../../styles/styles";

export default class Dropdown extends Component {

    _pickerChange(index) {
        this.props.lista.map((v, i) => {
            if (index === i) {
                this.props.handleClick(this.props.lista[index].id);
            }
        });
    }

    render() {
        return (
            <View style={Style.inputPiker}>
                <Picker
                    selectedValue={this.props.sel}
                    onValueChange={(itemValor, itemindex) => this._pickerChange(itemindex)}>{
                        this.props.lista.map((v) => {
                            return <Picker.Item label={v[this.props.descricao]} value={v[this.props.value]} key={v.id} />
                        })
                    }
                </Picker>
            </View>
        );
    }
}

