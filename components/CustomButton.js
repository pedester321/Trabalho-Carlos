import { StyleSheet, View, Text, Pressable } from "react-native";

function CustomButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#023020" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "green",
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },

  //IOS
  pressed: {
    opacity: 0.75,
  },
});
