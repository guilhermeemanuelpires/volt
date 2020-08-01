import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#04BF8A'
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
    backgroundColor: '#F29F05'
  },
  botoaText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F2360C'
  }
});