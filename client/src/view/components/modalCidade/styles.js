import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center"        
    },
    input: {
        height: 36,
        width: 250,
        borderColor: "#EEE8AA",
        borderWidth: 1,
        borderRadius: 9,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        flexDirection: 'column',
        
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {        
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        marginTop: 5,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center"
    },
    descricao: {
        paddingTop: 15
    }
});