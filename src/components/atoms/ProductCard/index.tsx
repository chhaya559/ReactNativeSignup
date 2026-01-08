import { Text, View } from "react-native";
import { Product } from "../../../types/Product";
import styles from "./style";
export type ProductProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductProps) {
  return (
    <View style={styles.outer}>
      <View style={styles.card}>
        <Text>{product.id}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
}
