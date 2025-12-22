import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SignUp from "../SignUp";
import Login from "../Login";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./styles";

type EntryScreenProp = NativeStackScreenProps<RootStackParams, "EntryScreen">;

export default function EntryScreen({ navigation }: EntryScreenProp) {
  return (
    <View style={styles.Container}>
      <View style={styles.subContainer}>
        <Image source={require("../../../assets/landing.png")} style={styles.image}/>
        <Text style={styles.heading}> Discover Your Dream Job Here</Text>
        <Text style={styles.subheading}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.loginButton}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.registerButton}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
