import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom : 10,
    justifyContent: "center",
  },
  touchableIcon: {
     backgroundColor : "#cbcbccff",
     height : 35,
     width : 45,
     borderRadius : 10,
    alignContent : "center"

  },
  icon: {
    height: 35,
    width: 35,
    padding : 7,
    alignSelf : "center"
  },
  text: {
    textAlign: "center",
    color: "#1E40AF",
    margin: 15,
    fontWeight: "600",
  },
});

export default styles;