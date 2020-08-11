import React, { Component } from "react";
import { View, Text } from "react-native";
import Style from "./styles";
import MsgModal from "../components/modal/modalIp";
export default class Form extends Component {

  openModal = (open) => {
    this.setState({ open });
  }
  
  // componentWillUnmount(){
  //   this.openModal(false);
  // }

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    return (
      <View>
        <MsgModal open={this.state.open} execute={this.openModal} />
      </View>
    );
  }
}
