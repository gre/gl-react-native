import { AppRegistry, StatusBarIOS } from "react-native";
const AdvancedEffects = require("./src");

StatusBarIOS.setHidden(true);
AppRegistry.registerComponent("Hearts", () => AdvancedEffects);
