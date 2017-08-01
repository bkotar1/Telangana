import React, { PropTypes, PureComponent } from "react";
import { View, Platform, WebView, ActivityIndicator } from "react-native";

export default class SVGImage extends PureComponent {
  static propTypes = {
    style: PropTypes.any,
    source: PropTypes.shape({
      uri: PropTypes.string
    }).isRequired,
    showWebviewLoader: PropTypes.bool,
    height: PropTypes.number
  };

  static defaultProps = {
    style: {},
    source: { uri: "" },
    showWebviewLoader: Platform.OS === "android",
    height: null
  };

  renderLoader = () =>
    <View
      style={[
        this.props.style,
        { flex: 1, alignItems: "center", justifyContent: "center" }
      ]}
    >
      <ActivityIndicator />
    </View>;

 
    render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
  
}
