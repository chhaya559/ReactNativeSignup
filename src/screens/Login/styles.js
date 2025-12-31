import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  subContainer: {
    margin :  20,
  },
  heading: {
    marginTop : 40,
    color : "#1E40AF",
    fontSize: 32,
    fontWeight : "700",
    textAlign : "center"
  },
  subHeading: {
    color : "#0F172A",
    fontWeight : "700",
    fontSize : 20,
    margin : 20,
    marginBottom : 50,
    textAlign : "center",
  },
  isFocused : {
    borderColor : "#1E40AF"
  },
  button : {
  width : "auto",
  backgroundColor : "#1E40AF",
  padding : 20,
  borderRadius : 10,
  marginTop : 25,
  marginBottom : 20,
  },
  forgot : {
    textAlign : "right",
    margin  : 5,
    color : "#1E40AF",
    fontWeight : "bold",
  },
  create : {
    color : "#0F172A",
    textAlign : "center",
    margin : 10,
    fontWeight : "500"
  },
  buttonText:{
    color : "#ffffff",
    fontWeight : "700",
    textAlign : "center",
    fontSize : 15,
  },
});

export default styles;
