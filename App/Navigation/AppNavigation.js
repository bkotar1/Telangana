import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import TelanagaDataScreen from "../Containers/TelanaganDataScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    TelanagaDataScreen: { screen: TelanagaDataScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "TelanagaDataScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
