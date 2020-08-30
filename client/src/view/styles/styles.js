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
    inputSelected: {
        height: 35,
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#51ACFF',

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
        backgroundColor: '#11BF4E',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12
    },
    botaoCalc: {        
        margin: 10,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#F5BD42',
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 50,

        elevation: 4,
    },
    botaoQR: {        
        margin: 10,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#51ACFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 50,
        elevation: 4,
    },
    botaoDisabled: {
        margin: 10,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#060606',
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 50,

        elevation: 12,
        opacity: 0.3,
    },
    labelBotao: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    botaoLupa :{
        // margin: 1,
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#51ACFF',
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,

        elevation: 7,
    }
});