import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import Lista from "./Lista";
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
import CustomButton from "./CustomButton";

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
        <Lista />
        <View style={styles.buttonContainer}>
          <CustomButton>Comprar</CustomButton>
        </View>
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
  buttonContainer: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
})