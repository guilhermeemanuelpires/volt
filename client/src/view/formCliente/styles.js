import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15
    },
    ajustaCampos: {
        paddingLeft: 10,
        paddingRight: 10
    },
    alinhaLabel: {
        marginTop: 5,
        fontSize: 14,
        paddingLeft: 10,
        color: '#0D0D0D',
        fontWeight: 'bold',
    },
    grupo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 35,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#D9D9D9',
        borderBottomWidth: 1
    },
    inputInvalido: {
        height: 35,
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: 'red'
    },
    inputRight: {
        height: 45,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#D9D9D9',
        borderBottomWidth: 1,
        textAlign: 'right'
    },
    inputPiker: {
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#D9D9D9',
        borderBottomWidth: 1
    },
    botao: {
        margin: 10,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#11BF4E'
    },
    labelBotao: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});