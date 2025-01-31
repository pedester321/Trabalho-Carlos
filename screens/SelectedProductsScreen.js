import Topo from "../components/Topo";
import { Text, View,Image, FlatList, StyleSheet} from "react-native";

function SelectedProductsScreen({ route }) {
  const { selectedProducts, quantities, total} = route.params;
  return (
    <View>
      <Topo />
      <FlatList
        data={selectedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.scrollImages} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.quantity}>Qtd: {quantities[item.id]}</Text>
            <Text style={styles.scrollPrices}> Subtotal: R$ {(item.price*quantities[item.id]).toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style = {styles.price}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
}

export default SelectedProductsScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 8,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  scrollImages: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  quantity: {
    flex: 1,
  },
  scrollPrices: {
    fontSize: 16,
    color: "#888888",
  },
  price: {
    padding: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
  },
});