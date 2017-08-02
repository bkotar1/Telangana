import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions,WebView } from "react-native";
import SVGImage from "../Components/SVGImage";
import { Card } from "react-native-material-ui";




export default class TelanganaMapScreen extends Component {
  constructor(props) {
        super(props)
        this.postMessage = this.postMessage.bind(this)
    }
      receivedMessage(action) {
        console.log('received message from web view')
        console.log(action)
    }
    postMessage() {
        console.log('sending message from react native')
        this.webView.postMessage('message from react native')
    }
  

  render() {
    function processMessage(e) {
      alert(e.nativeEvent.data);
    }
  /**  return (
      <View style={{flex: 1,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
        <WebView  javaScriptEnabled={true} scalesPageToFit={false} onMessage={this.showArea()}
          style={{width:600,height:600,justifyContent:'center',alignItems:'center'}}
          source={require('./TelanganaMapSvg.html')}
          ref={x => {
                        this.webView = x
                    }}
        />
        
      </View>
    );
    */

    return (
      <View style={{flex: 1,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
        <WebView javaScriptEnabled={true} scalesPageToFit={false} style={{width:600,height:600,justifyContent:'center',alignItems:'center'}}
                    source={require('./TelanganaMapSvg.html')}
                    onMessage={processMessage}
                />
                
      </View>
    );
  
  }
}
