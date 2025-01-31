import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import Lista from "./Lista";
import logoCart from "../assets/carrinho.jpg";
import CustomButton from "./CustomButton";

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
})