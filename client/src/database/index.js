import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native"

import listar from "../service/api"
// import styles from "./styles"
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    input: {
      height: 36,
      width: 250,
      borderColor: "#87CEEB",
      borderWidth: 1,
      borderRadius: 9
    },
    titulo: {
      textAlign: "center",
      fontWeight: "bold",
      padding: 15,
      margin: 25,
      fontSize: 20
    },
    buttonListar: {
      backgroundColor: "#87CEEB",
      alignItems: "center",
      margin: 15,
      padding: 10,
      height: 40,
      width: 90,
      borderRadius: 8
    },
    buttonLimpar: {
      backgroundColor: "#FA8072",
      alignItems: "center",
      margin: 15,
      padding: 10,
      height: 40,
      width: 90,
      borderRadius: 8
    },
    buttonADD: {
      backgroundColor: "#3CB371",
      alignItems: "center",
      margin: 15,
      padding: 10,
      height: 40,
      width: 90,
      borderRadius: 8
    },
    txtbutton: {
      fontWeight: "500"
    },
    logoContainer:{
      padding: 50
    },
    logo: {
      width: 150,
      height: 150
    },
    item: {
      alignItems: "center",
      backgroundColor: "#87CEEB",
      flexGrow: 1,
      margin: 4,
      padding: 20
    }
  }
  );
  
export default class Home extends Component {
  state = { modulos: [], loading: true };

  async listarAll() {
    const modulos = await listar.getAll();
    this.setState({ modulos, loading: false })
    console.log(modulos)
  }

  limpar() {

    this.setState({ modulos: [] });
  }

  render() {

    return (
      <View>
        <Text style={styles.titulo}>Lista de modulos</Text>
        <ScrollView>
          {this.state.modulos &&
            this.state.modulos.map((data) => (
              <View key={data.id} style={styles.item}>
                <Text>
                {data.id} {data.descricao} - {data.potencia}
                </Text>
              </View>
            ))}
        </ScrollView>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.buttonListar}
            onPress={() => this.listarAll()}
          >
            <Text style={styles.txtbutton}>Listar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLimpar}
            onPress={() => this.limpar()}
          >
            <Text style={styles.txtbutton}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonADD}
            onPress={() => this.props.navigation.navigate('FormInserir')}
          >
            <Text style={styles.txtbutton}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
