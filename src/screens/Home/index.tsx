import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Pressable, Text, View } from "react-native";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./style";
import { useSelector } from "react-redux";
import { AuthState } from "../../slice/AuthSlice";

type HomeProps = NativeStackScreenProps<RootStackParams, "Home">;

export default function Home({ route, navigation }: HomeProps) {
  // const user = useSelector((state: AuthState) => state.user);
  return (
    <View style={styles.container}>
      <View>
        {/* <Text>Username : {route.params.username}</Text> */}
        <Text>Home Page</Text>
     {/* <Text>user</Text> */}

        <Pressable style={styles.button}>
          <Text style={styles.text}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
