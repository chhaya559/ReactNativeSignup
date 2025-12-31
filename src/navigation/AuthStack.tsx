import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryScreen from "../screens/Landing";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import { RootStackParams } from "../types/RootStackParams";
import Header from "../components/atoms/Header";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="EntryScreen" component={EntryScreen} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}
