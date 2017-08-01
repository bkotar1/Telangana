import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions,WebView } from "react-native";
import SVGImage from "../Components/SVGImage";
import { Card } from "react-native-material-ui";



export default class IndiaMapScreen extends Component {
  showArea() {
    alert("clickable");
  }

  render() {
    return (
      <View style={{flex: 1,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
        <WebView
          style={{width:100,height:100,justifyContent:'center',alignItems:'center'}}
          source={require('./helloworld.html')}
        />
      </View>
    );
  }
}
