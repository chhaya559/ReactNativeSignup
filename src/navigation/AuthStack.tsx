 import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryScreen from "../screens/Landing";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import { RootStackParams } from "../types/RootStackParams";


const Stack = createNativeStackNavigator<RootStackParams>();

 export default function AuthStack(){
    return(
          <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name="EntryScreen"
      component={EntryScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen name="Signup" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
  </Stack.Navigator>
    )
 }