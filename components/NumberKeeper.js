import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const NumberKeeper = ({ id, onNumberChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleTextChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos
    setInputValue(cleanedText);
    const quantity = parseInt(cleanedText, 10);
    if (!isNaN(quantity)) {
      onNumberChange(id, quantity); // Notifica o componente pai com o ID e a quantidade
    }else{
      onNumberChange(id, 0); // Caso o valor seja vazio, notifica o componente pai com o ID e a quantidade 0
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0"
        value={inputValue}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});

export default NumberKeeper;
