import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./styles";
import ThirdParty from "../../components/atoms/ThirdParty/index";
import TextInput from "../../components/atoms/TextInput";
import ForgotPassword from "../ForgotPassword";

type LoginScreenProps = NativeStackScreenProps<RootStackParams, "Login">;

export default function Login({ navigation }: LoginScreenProps) {
  const [emailError, setEmailError] = useState(" ");
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  function submit() {
    if (!loginData.Email.trim() || !loginData.Password.trim()) {
      Alert.alert("Please fill the data first");
      return;
    }

    const getData = async () => {
      const key = loginData.Email;
      const user = await AsyncStorage.getItem(key);

      if (!user) {
        Alert.alert("No such user");
        return;
      } else {
        const jsonValue = JSON.parse(user);
        console.log(key);
        console.log(jsonValue);
      
        console.log(loginData.Password);
        console.log(jsonValue.Password)
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
  }
  function checkEmail(key: string, value: string) {
    const emailRegex = /^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
      setEmailError("This is a required field");
    } else if (!emailRegex.test(value)) {
      setEmailError("Email not valid");
      // setTimeout(() => {
      //   setEmailError(" ");
      // }, 1000);
    }
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
      <View style={[styles.subContainer]}>
        <Text style={styles.heading}>Login here</Text>
        <Text style={styles.subHeading}>Welcome back you've been missed!</Text>

        <TextInput
          placeholder={"email"}
          placeholderTextColor={"#94A3B8"}
          value={loginData.Email}
          onChangeText={(text: string) => {
            handleChange("Email", text);
          }}
          onChange={() => setEmailError(" ")}
          onBlur={() => {
            checkEmail("Email", loginData.Email);
          }}
        />
        {emailError && <Text>{emailError}</Text>}
        <TextInput
          placeholder={"Password"}
          placeholderTextColor={"#94A3B8"}
          value={loginData.Password}
          autoCapitalize="none"
          onChangeText={(text: string) => handleChange("Password", text)}
        />

        <Text
          style={styles.forgot}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot your password?
        </Text>
        <Pressable onPress={submit} style={styles.button}>
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
