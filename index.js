/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import DrawerNavigator from "./src/DrawerNavigator";

AppRegistry.registerComponent(appName, () => DrawerNavigator);
