import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { RootStackParams } from "../types/RootStackParams";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
