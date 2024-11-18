import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import AutoPecasScreen from "./screens/AutoPecasScreen";

export default function App() {
  return (
    <>
      <StatusBar hidden></StatusBar>
      <SafeAreaView style={styles.rootScreen}>
        <AutoPecasScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
