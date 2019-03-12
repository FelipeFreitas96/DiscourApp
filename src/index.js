// Import React
import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { View, Text } from "react-native";

// Import Screens
import HomeScreen from "./screens";
import SettingsScreen from "./screens/settings";

const DrawerNavigator = createDrawerNavigator({
  Inicio: { screen: HomeScreen },
  Configurações: { screen: SettingsScreen }
});

export default createAppContainer(DrawerNavigator);
