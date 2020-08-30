import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Style from "../view/styles/styles";

export default function App(props, navigation) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.navigation.navigate("database", {
      ip: data,
    });
  };

  if (hasPermission === null) {
    return <Text>Necessita permissões para acessar a camera</Text>;
  }
  if (hasPermission === false) {
    Alert.alert("Erro!", "Sem acesso a camera!!");
    props.navigation.navigate("FormCli", {
      screen: "database",
    });
    return <Text> Sem acesso a camera!!</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <TouchableOpacity style={Style.botao} onPress={() => setScanned(false)}>
          <Text style={Style.labelBotao}>Aperte Para ler o QRCODE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
