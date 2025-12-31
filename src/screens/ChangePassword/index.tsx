import TextInput from "../../components/atoms/TextInput";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ChangePasswordProps = NativeStackScreenProps<
  RootStackParams,
  "ChangePassword"
>;

export default function ChangePassword({
  navigation,
  route,
}: ChangePasswordProps) {
  const [pass, setPass] = useState("");
  const [confirmpass, confirmsetPass] = useState("");

  async function changePass() {
    try {
      if (!pass || !confirmpass) {
        Alert.alert("Password cannot be empty");
        return;
      }

      if (pass !== confirmpass) {
        Alert.alert("Passwords do not match");
        return;
      }

      const key = route.params.email;
      const data = await AsyncStorage.getItem(key);

      if (!data) {
        Alert.alert("Email is not registered");
        navigation.replace("ForgotPassword");
        return;
      }

      const userData = JSON.parse(data);

      userData.password = pass;

      await AsyncStorage.setItem(key, JSON.stringify(userData));

      Alert.alert("Password changed successfully");
      navigation.goBack();
    } catch (error: any) {
      Alert.alert("Something went wrong");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter new password"
        value={pass}
        onChangeText={setPass}
        placeholderTextColor="#94A3B8"
      />
      <TextInput
        placeholder="Confirm new password"
        value={confirmpass}
        onChangeText={confirmsetPass}
        placeholderTextColor="#94A3B8"
      />

      <TouchableOpacity onPress={changePass} style={styles.button}>
        <Text style={styles.text}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}
