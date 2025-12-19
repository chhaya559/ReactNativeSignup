import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ThirdParty() {
  return (
    <View style={{marginBottom : 10}}>
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.touchableIcon}>
          <Image
            source={require("../../assets/google.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIcon}>
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIcon}>
          <Image
            source={require("../../assets/apple.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
