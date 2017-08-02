import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import TelanganaDataScreen from "../Containers/TelanganaDataScreen";
import TelanganaMapScreen from "../Containers/TelanganaMapScreen";
import SvgExample from "../Containers/SvgExample";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    TelanganaDataScreen: { screen: TelanganaDataScreen },
    TelanganaMapScreen: { screen: TelanganaMapScreen },
    SvgExample:{ screen: SvgExample }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "TelanganaMapScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
