import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import SVGImage from "react-native-svg-image";
import { Card } from "react-native-material-ui";

const { width, height } = Dimensions.get("window");

export default class IndiaMapScreen extends Component {
  showArea() {
    alert("clickable");
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <SVGImage
          style={{
            width: 300,
            height: 200
          }}
          source={{
            uri:
              "../Images/car.svg"
          }}
        />
      </View>

      /** 
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} >
          <SVGImage width="24" viewBox="0 0 24 23"
          source={{
            uri: "../Images/Telangana.svg"
          }}
          />
          </View>
      </View>
      */
      /** 
      <View style={{flex: 4}}>
        <SVGImage
          style={{ flex: 2, width: 200, height: 100 }}
          source={{
            uri: "../Images/Telangana.svg"
          }}
        />
      </View>
      */
    );
  }
}
