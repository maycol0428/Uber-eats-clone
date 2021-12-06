import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "./helpers/base";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import OrderCompleted from "./screens/OrderCompleted";
export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
