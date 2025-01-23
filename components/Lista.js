import { Text, View, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";

import CampoInteiro from "./CampoInteiro";

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
  [pneu, "Pneu", 249.4],
  [vela, "Vela", 10.2],
  [escap, "Escapamento", 110.07],
  [embreagem, "Embreagem", 320.02],
  [amort, "Amortecedor", 235.9],
  [disco, "Disco", 623.3],
  [piston, "Óleo", 40.4],
  [bater, "Bateria", 360.6],
  [radiador, "Radiador", 170],
];

//somando o total da lista
const total = products.reduce((soma, produto) => soma + produto[2], 0);

function Lista(){
  
  const [valor, setValor] = useState(1);

    return (
      <>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString() }
          renderItem={({ item, index }) => (
            <View key={index} style={styles.productItem}>
              <Image source={item[0]} style={styles.scrollImages} />
              <Text style={styles.name}>{item[1]}</Text>
              <CampoInteiro valor={valor} acao={setValor} />
              <Text style={styles.scrollPrices}>R$ {item[2].toFixed(2)}</Text>
            </View>
          )}
        />
        <Text style={styles.price}>Total: R$ {total.toFixed(2)}</Text>
      </>
    );
}

export default Lista

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
    flex: 1
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