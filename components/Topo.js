import { Text, View, Image,StyleSheet } from "react-native";

import imagem from "../assets/logo.png";

function Topo(){
    return(
        <View style={styles.container}>
            <Image source={imagem} style={styles.image}></Image>
            <Text style={styles.title}>Detalhes da Compra</Text>
        </View>
    )
}

export default Topo

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    width: 500,
    textAlign: "start",
    fontWeight: "bold",
    fontSize: 20,
    position: "absolute",
    color: "grey",
    paddingTop: 30,
    paddingLeft: 10,
  },
});