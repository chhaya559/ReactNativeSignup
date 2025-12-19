import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./styles";
import ThirdParty from "../../components/ThirdParty";

type LoginScreenProps = NativeStackScreenProps<RootStackParams, "Login">;

export default function Login({ navigation }: LoginScreenProps) {
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  function submit() {
    if (loginData.Email == "" || loginData.Email == " " || loginData.Password == "" || loginData.Password == " ") {
      Alert.alert("Please fill the data first");
      return;
    }
    const getData = async () => {
      const key = loginData.Email;
      const user = await AsyncStorage.getItem(key);

      if (!user) {
        
        console.log("No such user");
        return;
      } else {
        const jsonValue = JSON.parse(user);
        console.log(jsonValue);
        console.log(loginData.Password);
        console.log(jsonValue.Password);
        if (loginData.Password == jsonValue.Password) {
          navigation.navigate("Home", {
            username: jsonValue.FirstName,
            Email: jsonValue.Email,
          });
        } else {
          Alert.alert("Please check your credentials");
        }
      }
    };
    getData();
    setLoginData({
      Email: "",
      Password: "",
    });
  }

  function handleChange(prop: string, value: string) {
    setLoginData({
      ...loginData,
      [prop]: value,
    });
  }

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Login here</Text>
        <Text style={styles.subHeading}>Welcome back you've been missed!</Text>
        <TextInput
          style={[styles.inputs]}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#94A3B8"
          value={loginData.Email}
          onChangeText={(text) => {
            handleChange("Email", text);
          }}
          autoCapitalize="none"
        ></TextInput>
        <TextInput
          style={[styles.inputs]}
          placeholder="Password"
          placeholderTextColor="#94A3B8"
          value={loginData.Password}
          onChangeText={(text) => handleChange("Password", text)}
        ></TextInput>
        <Text style={styles.forgot}>Forgot your password?</Text>
        <Pressable
          onPress={() => {
            submit;
          }}
          style={styles.button}
          onPressIn={() => submit()}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
        <Text
          onPress={() => navigation.replace("Signup")}
          style={styles.create}
        >
          Create new account
        </Text>

        <ThirdParty />
      </View>
    </ScrollView>
  );
}
