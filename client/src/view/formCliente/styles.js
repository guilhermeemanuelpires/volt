import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 20
    },
    ajustaCampos: {
        paddingLeft: 15,
        paddingRight: 15
    },
    alinhaLabel: {
        marginTop: 5,
        fontSize: 15,
        paddingLeft: 10,
        color: '#0D0D0D',
        fontWeight: 'bold',
    },
    input: {
        // marginTop: 1,
        height: 35,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#D9D9D9',
        borderBottomWidth: 1
    },
    botao: {
        justifyContent: 'center',
        marginTop: 10,
        height: 50,
        // borderRadius: 50,
    }

});