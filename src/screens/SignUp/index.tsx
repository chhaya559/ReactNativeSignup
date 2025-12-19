import { StatusBar } from "expo-status-bar";
import { ReactElement, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import DatePicker from "react-native-date-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./style";
import { SignupTypes } from "../../types/SignupTypes";
import ThirdParty from "../../components/ThirdParty";

type SignupScreenProps = NativeStackScreenProps<RootStackParams, "Signup">;

export default function SignUp({ navigation }: SignupScreenProps) {
  const [emailError, setEmailError] = useState(" ");
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState(" ");
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
  function submit() {
    if (!data.Email || !data.Password) {
      setSubmitMessage("Fill the remaining fields");
      setTimeout(() => setSubmitMessage(" "), 1500);
      return;
    }
    if (data.Password !== data.PasswordConfirm) {
      Alert.alert("Passwords are not same");
      return;
    }
    //-------------------------Storing Data -------------------//
    // const storeData = async () => {
    //   const name: [string, string] = ["FirstName", data.FirstName];
    //   const lastNamme: [string, string] = ["LastName", data.LastName];
    //   const Email: [string, string] = ["email", data.email];
    //   const phone: [string, string] = ["PhoneNumber", data.PhoneNumber];
    //   const password: [string, string] = ["Password", data.Password];
    //   const dob: [string, string] = ["DOB", FormattedDate];
    //   try {
    //     await AsyncStorage.multiSet([
    //       name,
    //       lastNamme,
    //       Email,
    //       phone,
    //       password,
    //       dob,
    //     ]);
    //     console.log("Data Saved Successfully");
    //   } catch (e) {
    //     console.log("error: " + e);
    //   }
    // };
    const storeData = async (data: any) => {
      try {
        const jsonValue = JSON.stringify(data);
        const key = data.Email;

        await AsyncStorage.setItem(key, jsonValue);
        console.log("Data Stored");
        //   const storedData = await AsyncStorage.getItem(key);
        //   if (!storedData) {
        //     console.log("No data found");
        //   } else {
        //     console.log("data stored", JSON.parse(storedData));
        //   }
      } catch (e) {
        console.log("Error in storing data : " + e);
      }
    };

    storeData(data);
    setData({
      Name: "",
      Email: "",
      Password: "",
      PasswordConfirm: "",
    });
    navigation.navigate("Login");
  }

  //------Email regex----------//
  function checkEmail(key: string, value: string) {
    const emailRegex = /^[a-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
      setEmailError("This is a required field");
    } else if (!emailRegex.test(value)) {
      setEmailError("Email not valid");
      // setTimeout(() => {
      //   setEmailError(" ");
      // }, 1000);
    }
  }

  //----------Name regex---------------//
  // function check(key: string, value: string) {
  //   const filtered = value.replace(/[^a-zA-Z]/g, "");
  //   setData((prev) => ({
  //     ...prev,
  //     [key]: filtered,
  //   }));
  // }

  //---------Comparing passwords ---------//
  function comparePassword(PasswordConfirm:string) {
    if (data.Password != "" && PasswordConfirm != "") {
      if (data.Password == PasswordConfirm) {
        setMessage("Password Match");
      } else {
        setMessage("Password don't match");
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subHeading}>
          Create an account so you can explore all the existing jobs
        </Text>

        <TextInput
          style={[styles.inputs, {}]}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#94A3B8"
          value={data.Email}
          onChangeText={(text) => {
            handleChange("Email", text);
          }}
          onChange={() => setEmailError(" ")}
          onBlur={() => {
            checkEmail("Email", data.Email);
          }}
          autoCapitalize="none"
        ></TextInput>
        {emailError && <Text style={{ color: "#00000" }}>{emailError}</Text>}
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          placeholderTextColor="#94A3B8"
          value={data.Password}
          onChange={() => setMessage(" ")}
          onChangeText={(text) => handleChange("Password", text)}
        ></TextInput>
        <TextInput
          style={styles.inputs}
          placeholder="Confirm Password"
          placeholderTextColor="#94A3B8"
          value={data.PasswordConfirm}
          onChangeText={(text) => {
            handleChange("PasswordConfirm", text);
            comparePassword(text);
          }}
          onChange={() => setMessage(" ")}
        ></TextInput>
        {message && <Text style={{ color: "#000000ff" }}>{message}</Text>}
        {submitMessage && (
          <Text style={{ color: "#000000ff" }}>{submitMessage}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={() => submit()}>
          <Text style={styles.signinText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.replace("Login")}>
          Already have an account
        </Text>

        <ThirdParty />
      </View>
    </ScrollView>
  );
}
