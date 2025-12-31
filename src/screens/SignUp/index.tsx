import { ReactElement, useState } from "react";
import { normalizeEmail } from "../../utils/utils";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./style";
import { SignupTypes } from "../../types/SignupTypes";
import ThirdParty from "../../components/atoms/ThirdParty";
import TextInput from "../../components/atoms/TextInput";

type SignupScreenProps = NativeStackScreenProps<RootStackParams, "Signup">;

export default function SignUp({ navigation }: SignupScreenProps) {
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [data, setData] = useState<SignupTypes>({
    Name: "",
    Email: "",
    Password: "",
    PasswordConfirm: "",
  });

  function handleChange(prop: string, value: string) {
    setData({
      ...data,
      [prop]: value,
    });
  }
  //-----------On Submit Actions -----------//
  async function submit() {
    if (!data.Email || !data.Password || !data.PasswordConfirm) {
      setSubmitMessage("Please fill all fields");
      return;
    }

    if (emailError.trim()) {
      Alert.alert("Invalid email");
      return;
    }

    if (data.Password !== data.PasswordConfirm) {
      Alert.alert("Passwords are not same");
      return;
    }

    const key = normalizeEmail(data.Email);

    try {
      const existingUser = await AsyncStorage.getItem(key);

      if (existingUser) {
        Alert.alert("User already exists");
        return;
      }

      await AsyncStorage.setItem(
        key,
        JSON.stringify({
          email: data.Email,
          password: data.Password,
        })
      );

      navigation.navigate("Login");
    } catch {
      Alert.alert("Something went wrong");
    }
  }

  //------Email regex----------//
  function checkEmail(key: string, value: string) {
    const emailRegex = /^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
      setEmailError("This is a required field");
    } else if (!emailRegex.test(value)) {
      setEmailError("Email not valid");
   
    }
  }

  //---------Comparing passwords ---------//
  function comparePassword(PasswordConfirm: string) {
    if (data.Password != "" && PasswordConfirm != "") {
      if (data.Password == PasswordConfirm) {
        setMessage("Password Match");
      } else {
        setMessage("Password don't match");
      }
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subHeading}>
          Create an account so you can explore all the existing jobs
        </Text>
        <TextInput
          placeholder={"Email"}
          placeholderTextColor={"#94A3B8"}
          value={data.Email}
          autoCapitalize="none"
          onChangeText={(text) => {
            handleChange("Email", text);
            setEmailError("");
          }}
          onBlur={() => {
            checkEmail("Email", data.Email);
          }}
        />
        {emailError !== "" && <Text>{emailError}</Text>}

        <TextInput
          placeholder={"Password"}
          placeholderTextColor={"#94A3B8"}
          value={data.Password}
          onChangeText={(text) => {
            setMessage("");
            handleChange("Password", text)}
          }
        />

        <TextInput
          placeholder={"Confirm Password"}
          placeholderTextColor={"#94A3b8"}
          value={data.PasswordConfirm}
          onChangeText={(text) => {
            handleChange("PasswordConfirm", text);
            comparePassword(text);
          }}
          onChange={() => setMessage("")}
        />

        {message && <Text style={{ color: "#000000ff" }}>{message}</Text>}
        {submitMessage && (
          <Text style={{ color: "#000000ff" }}>{submitMessage}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={() => submit()}>
          <Text style={styles.signinText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.navigate("Login")}>
          Already have an account
        </Text>

        <ThirdParty />
      </View>
    </ScrollView>
  );
}
