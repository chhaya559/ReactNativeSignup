import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { RootStackParams } from "../../types/RootStackParams";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slice/AuthSlice";
import { AppDispatch, RootState } from "../../store";
import { useGetProductsQuery } from "../../services/ProductsApi";

type HomeProps = NativeStackScreenProps<RootStackParams, "Home">;

export default function Home({ route, navigation }: HomeProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoading, data } = useGetProductsQuery();

  // useEffect(() => {
  //   console.log("Dispatching...");
  //   dispatch(fetchRequest());
  // }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#1100ff" />;
  }
  if (error) {
    return <Text>Error </Text>;
  }
  const EmptyList = () => (
    <View>
      <Text>No data found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data ?? []}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
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
