// Import React
import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

// Import Screens
import HomeScreen from "./Screens/Home";
import SettingsScreen from "./Screens/Settings";

const DrawerNavigator = createDrawerNavigator({
  Inicio: { screen: HomeScreen },
  Configurações: { screen: SettingsScreen }
});

export default createAppContainer(DrawerNavigator);
