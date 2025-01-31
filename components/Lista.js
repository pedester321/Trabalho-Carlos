import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import NumberKeeper from "./NumberKeeper";

//imports das lista
import pneu from "../assets/pneu2.png";
import vela from "../assets/vela2.png";
import escap from "../assets/escap.png";
import embreagem from "../assets/embreagem.png";
import amort from "../assets/amort.png";
import disco from "../assets/disco.png";
import piston from "../assets/piston.png";
import bater from "../assets/bater.png";
import radiador from "../assets/radiador.png";

const products = [
  { id: "1", image: pneu, name: "Pneu", price: 249.4 },
  { id: "2", image: vela, name: "Vela", price: 10.2 },
  { id: "3", image: escap, name: "Escapamento", price: 110.07 },
  { id: "4", image: embreagem, name: "Embreagem", price: 320.02 },
  { id: "5", image: amort, name: "Amortecedor", price: 235.9 },
  { id: "6", image: disco, name: "Disco", price: 623.3 },
  { id: "7", image: piston, name: "Óleo", price: 40.4 },
  { id: "8", image: bater, name: "Bateria", price: 360.6 },
  { id: "9", image: radiador, name: "Radiador", price: 170 },
];

const hadleNumberChange = (number) => {
  console.log(number);
};

function Lista() {
  // Estado para armazenar as quantidades de cada produto
  const [quantities, setQuantities] = useState({});

  // Função para atualizar a quantidade de um produto específico
  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity, // Atualiza a quantidade do produto com o ID correspondente
    }));
  };

  // Função para calcular o total da compra
  const calcularTotal = () => {
    return products.reduce((total, product) => {
      const quantity = quantities[product.id] || 0; // Quantidade digitada (ou 0 se não houver)
      return total + product.price * quantity;
    }, 0);
  };

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.scrollImages} />
            <Text style={styles.name}>{item.name}</Text>
            <NumberKeeper id={item.id} onNumberChange={handleQuantityChange} />
            <Text style={styles.scrollPrices}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.price}>Total: R$ {calcularTotal().toFixed(2)}</Text>
    </>
  );
}

export default Lista;

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
