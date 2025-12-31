import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  subContainer : {
    margin :  20,
  },
  heading :{
    marginTop : 30,
    color : "#1E40AF",
    fontSize: 32,
    fontWeight : "700",
    textAlign : "center"
  },
  subHeading:{
    color : "#0F172A",
    fontWeight : "600",
    fontSize : 15,
    margin : 20,
    marginBottom : 50,
    textAlign : "center",
  },

  button:{
  width : "auto",
  backgroundColor : "#1E40AF",
  padding : 20,
  borderRadius : 10,
  margin : 10,
  marginTop : 30,
  marginBottom : 20,
  },
  text:{
    color : "#0F172A",
    textAlign : "center",
    marginBottom : 20,
    fontWeight : "500"
  },
  signinText:{
    color : "#ffffff",
    fontWeight : "700",
    textAlign : "center",
    fontSize : 15,
  },
})

export default styles;