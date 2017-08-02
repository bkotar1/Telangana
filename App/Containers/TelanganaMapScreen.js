import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions,WebView } from "react-native";
import SVGImage from "../Components/SVGImage";
import { Card } from "react-native-material-ui";



export default class TelanganaMapScreen extends Component {
  showArea() {
    alert("clickable");
  }

  render() {
    return (
      <View style={{flex: 1,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
        <WebView
          style={{width:600,height:600,justifyContent:'center',alignItems:'center'}}
          source={require('./TelanganaMapSvg.html')}
        />
      </View>
    );
  }
}
