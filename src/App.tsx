import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import EntryScreen from "./screens/Landing/index";
import SignUp from "./screens/SignUp/index";
import Home from "./screens/Home/index";
import { RootStackParams } from "./types/RootStackParams";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import Toast from "react-native-toast-message";
import ChangePassword from "./screens/ChangePassword";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
              name="EntryScreen"
              component={EntryScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
<Stack.Screen
  name="ChangePassword"
  component={ChangePassword}
/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <Toast />
    </SafeAreaProvider>
  );
}
