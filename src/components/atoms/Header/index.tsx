import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TouchableOpacity, View, Text } from "react-native";
import { RootStackParams } from "../../../types/RootStackParams";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

type HeaderProps = NativeStackNavigationProp<RootStackParams>;
export default function Header({
  back,
  navigation,
  options,
  route,
}: NativeStackHeaderProps) {
  //   console.log(navigation?.canGoBack(), "hsbdfjdsbfhj");
  //   const navigation = useNavigation();
  //   const canGoBack = navigation.canGoBack();
  function handleBack() {
    if (back) {
      navigation.goBack();
    }
  }
  return (
    <View style={styles.header}>
      {back && (
        <>
          <TouchableOpacity onPress={handleBack}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={30}
              color="#1E40AF"
            />
          </TouchableOpacity>
        </>
      )}
      <Text style={styles.headerTitle}>{options?.title}</Text>
    </View>
  );
}
