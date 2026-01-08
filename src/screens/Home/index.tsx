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
import { useGetProductsInfiniteQuery } from "../../services/ProductsApi";
import ProductCard from "../../components/atoms/ProductCard";
import { useState } from "react";

type HomeProps = NativeStackScreenProps<RootStackParams, "Home">;

export default function Home({ route, navigation }: HomeProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    error,
    data,
    fetchNextPage,
    isFetching,
    isLoading,
    refetch,
    hasNextPage,
    isFetchingNextPage,
  } = useGetProductsInfiniteQuery();

  const productsData = data?.pages.flat() ?? [];
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

  function loadMore() {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }
  function refresh() {
    refetch();
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => <ProductCard product={item} />}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        refreshing={isFetching && !isFetchingNextPage}
        onRefresh={refresh}
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
