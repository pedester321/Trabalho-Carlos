import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native"; // Importe o NavigationContainer
import { createStackNavigator } from "@react-navigation/stack";

import AutoPecasScreen from "./screens/AutoPecasScreen";
import SelectedProductsScreen from "./screens/SelectedProductsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden></StatusBar>
      <Stack.Navigator
        initialRouteName="AutoPecas"
        screenOptions={{
          headerShown: false, // Oculta o header para todas as telas
        }}
      >
        <Stack.Screen
          name="AutoPecas"
          component={AutoPecasScreen}
          options={{ title: "Lista de Produtos" }}
        />
        <Stack.Screen
          name="SelectedProducts"
          component={SelectedProductsScreen}
          options={{ title: "Produtos Selecionados" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
