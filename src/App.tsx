import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "./types/RootStackParams";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import AppNavigator from "./navigation/AppNavigator";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaView>
          <Toast />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
