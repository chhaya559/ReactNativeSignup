import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "../SignUp/style";
import { ro } from "react-native-paper-dates";

type HomeProps = NativeStackScreenProps<RootStackParams, "Home">;

export default function Home({ route, navigation }: HomeProps) {
  return (
    <View style={{}}>
      <View>
        {/* <Text>Username : {route.params.username}</Text> */}
        <Text>Email : {route.params.Email}</Text>
      </View>
    </View>
  );
}
