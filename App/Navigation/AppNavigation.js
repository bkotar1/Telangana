import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import TelanganaDataScreen from "../Containers/TelanganaDataScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    TelanganaDataScreen: { screen: TelanganaDataScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "TelanganaDataScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
