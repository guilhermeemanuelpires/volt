import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ADD8E6'
  },
  logo: {
    alignItems: 'center'
  },
  ajustaCampos: {
    paddingLeft: 25,
    paddingRight: 25
  },
  alinhaLabel: {
    textAlign: "center",
    fontSize: 25,
    color: '#FFFFFF'
  },
  input: {
    marginTop: 10,
    height: 45,
    borderRadius: 50,
    padding: 15,
    fontWeight: 'bold',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF'
  },
  botao: {
    marginTop: 10,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#FFFF'
  },
  botoaText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: '#000'
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F2360C'
  },
  btnRecurso: {
    marginTop: 20,
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderBottomWidth : 1,
    borderRadius: 25,
    flex: 0.4
  },
  textRecurso: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 50,
    padding : 4,
    color: '#000'
  }
  
});