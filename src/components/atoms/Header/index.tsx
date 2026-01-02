import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { TouchableOpacity, View, Text } from "react-native";
import { RootStackParams } from "../../../types/RootStackParams";
import { useNavigation } from "@react-navigation/native";

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
    <View>
      {back && (
        <TouchableOpacity onPress={handleBack}>
          <Text>Back please</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
