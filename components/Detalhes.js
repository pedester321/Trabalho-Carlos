import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import logoCart from "../assets/carrinho.jpg";

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

function Detalhes(){
    return (
      <>
        <View style={styles.logoCartContainer}>
          <View>
            <Image source={logoCart} style={styles.cartLogo}></Image>
          </View>
          <View>
            <Text style={styles.cartText}>Carrinho de pecas</Text>
          </View>
        </View>
        <Text style={styles.description}>
          A loja de autopecas das melhores marcas pare seu veiculo!
        </Text>
        <ScrollView style={styles.scrollViewContainer}>
          {products.map((item, index) => (
            <View key={index} style={styles.productItem}>
              <Image source={item[0]} style={styles.scrollImages} />
              <Text style={styles.name}>{item[1]}</Text>
              <Text style={styles.scrollPrices}>R$ {item[2].toFixed(2)}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.price}>Total: R$ ${total.toFixed(2)}</Text>
      </>
    );
}

export default Detalhes

const styles = StyleSheet.create({
  logoCartContainer: {
    flexDirection: "row",
    padding: 14,
  },
  cartLogo: {
    width: 30,
    height: 30,
  },
  cartText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
  },
  description: {
    color: "grey",
    fontSize: 13,
    padding: 5,
  },
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
})