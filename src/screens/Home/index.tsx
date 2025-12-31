import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, logout } from "../../slice/AuthSlice";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchRequest } from "../../slice/ProductSlice";

type HomeProps = NativeStackScreenProps<RootStackParams, "Home">;

export default function Home({ route, navigation }: HomeProps) {
  // const user = useSelector((state: AuthState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    console.log("Dispatching...");
    dispatch(fetchRequest());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#1100ff" />;
  }
  if (error) {
    return <Text>Error : {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(logout());
          navigation.replace("Login");
        }}
      >
        <Text style={styles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}
