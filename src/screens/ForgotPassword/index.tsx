import { use, useState } from "react";
import TextInput from "../../components/atoms/TextInput";
import { Alert, Pressable, View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";
import { RootStackParams } from "../../types/RootStackParams";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { OtpInput } from "react-native-otp-entry";

type ForgotPasswordProps = NativeStackScreenProps<
  RootStackParams,
  "ForgotPassword"
>;
export default function ForgotPassword({ navigation }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedotp, setgeneratedOtp] = useState<string>("");
  const [visible, setVisibility] = useState(false);
  const [emailVisibility, setEmailVisibility] = useState(true);

  async function getOtp() {
    const isEmail = await AsyncStorage.getItem(email);
    if (!isEmail) {
      Alert.alert("Email is not registered");
    }
    const otpValue = Math.ceil(Math.random() * 10000).toString();
    setgeneratedOtp(otpValue);
    setVisibility(true);
    setEmailVisibility(false);
    Toast.show({
      text1: "your otp is " + otpValue,
    });
  }
  async function resendOtp() {
    setOtp("");
    const otpValue = Math.ceil(Math.random() * 10000).toString();
    setgeneratedOtp(otpValue);
    Toast.show({
      text1: "your otp is " + otpValue,
    });
  }

  function compareOTP() {
    if (generatedotp == otp) {
      navigation.replace("ChangePassword", { email: email });
    } else {
      Alert.alert("Enter correct otp");
    }
  }

  function checkEmail() {
    const emailRegex = /^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == "") {
      Alert.alert("Please enter email first");
    } else if (!emailRegex.test(email)) {
      Alert.alert("Email is not valid");
    }
  }
  return (
    <View style={styles.container}>
      {emailVisibility && (
        <>
          <TextInput
            placeholder={"Enter your email"}
            placeholderTextColor={"#94A3B8"}
            value={email}
            onChangeText={(e) => setEmail(e)}
            autoCapitalize="none"
          />
          {emailError && <Text>emailError</Text>}
          <TouchableOpacity onPress={getOtp} style={styles.button}>
            <Text style={styles.text}>Get OTP</Text>
          </TouchableOpacity>
        </>
      )}
      {visible && (
        <>
          <View style={styles.otp}>
            <OtpInput
              numberOfDigits={4}
              focusColor={"#02430fff"}
              onTextChange={(text) => setOtp(text)}
            />
          </View>
          <Pressable onPress={compareOTP} style={styles.button}>
            <Text style={styles.text}>Submit OTP</Text>
          </Pressable>
          <Pressable onPress={resendOtp} style={styles.button}>
            <Text style={styles.text}>Resend OTP</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
