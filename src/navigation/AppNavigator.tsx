import { useSelector } from "react-redux";

import { RootState } from "../store";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

export default function AppNavigator() {
  const isAuth = useSelector((state : RootState) => state.auth.isAuthenticated);
  console.log(isAuth, typeof isAuth);

  return isAuth ? <AppStack /> : <AuthStack />;
}
