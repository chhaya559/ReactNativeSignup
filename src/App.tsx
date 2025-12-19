import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import EntryScreen from "./screens/Landing";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { RootStackParams } from "./types/RootStackParams";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1, backgroundColor : "#fff"}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : true}} >
        <Stack.Screen
          name="EntryScreen"
          component={EntryScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>

  );
}
