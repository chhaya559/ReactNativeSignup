import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ThirdParty() {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.touchableIcon}>
          <Image
            source={require("../../../../assets/google.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIcon}>
          <Image
            source={require("../../../../assets/facebook.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableIcon}>
          <Image
            source={require("../../../../assets/apple.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
