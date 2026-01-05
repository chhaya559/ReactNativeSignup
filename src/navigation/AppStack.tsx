import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { RootStackParams } from "../types/RootStackParams";
import Header from "../components/atoms/Header";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home Page" }}
      />
    </Stack.Navigator>
  );
}
