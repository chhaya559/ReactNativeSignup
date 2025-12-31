import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#FFFFFF"
    },
    subContainer  :{
        margin : 40,
    },
    heading : {
    color: "#1E40AF",
    fontSize : 35,
    textAlign : "center",
    fontWeight : "bold",
    margin : 20,
    marginTop : "10%"
    },
    subheading:{
    color : "#0F172A",
    textAlign :"center",
    marginLeft : 20,
    marginRight : 20,
    fontWeight  :"600",
    fontSize : 15,
    },
    button : {
        width : "10%",
        backgroundColor : ""
    },
    buttonsContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginTop : "30%"
    },
    image:{
        height : "50%",
        width :  "auto",
        marginBottom : "auto"
    },
    loginButton : {
        backgroundColor : "#1E40AF",
        width : "35%",
        padding : 15,
        borderRadius : 10,
    },
    login :{
        color : "#ffffff",
        textAlign : "center",
        fontSize : 20,
        fontWeight : "bold"
    },
    registerButton : {
        backgroundColor : "#FFFFFF",
        width : "35%",
        padding : 15,
        borderRadius : 10,
    },
    register : {
        color : "#0F172A",
        fontWeight : "bold",
        fontSize : 20,
        textAlign : "center"
        },
})

export default styles;