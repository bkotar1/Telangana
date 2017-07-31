import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import TelanganaDataScreen from "../Containers/TelanganaDataScreen";
import IndiaMapScreen from "../Containers/IndiaMapScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    TelanganaDataScreen: { screen: TelanganaDataScreen },
    IndiaMapScreen: { screen: IndiaMapScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "IndiaMapScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
