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
  const [confirmpass,confirmsetPass] = useState("")

  async function changePass() {
    try {
        if(pass != confirmpass){
            Alert.alert("enter same passwords")
            return;
        }
        const data = await AsyncStorage.getItem(route.params.email);
        if(!data){
            Alert.alert("Email is not registered")
            return;
        }
           const userData = JSON.parse(data);
            userData.Password = pass;

            await AsyncStorage.setItem(route.params.email, JSON.stringify(userData));
 
        Alert.alert("Password changed successfully");
        navigation.goBack();
        
    }catch(error : any){
        Alert.alert(error.message)
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

