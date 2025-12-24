import { useSelector } from "react-redux";

import { AuthState } from "../store";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

export default function AppNavigator() {
  const isAuth = useSelector((state: AuthState) => state.auth.isAuthenticated);

  console.log("isAuth:", isAuth);

  return isAuth ? <AppStack /> : <AuthStack />;
}
