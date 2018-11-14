import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar, Image,TouchableOpacity, Alert, Text,ToolbarAndroid} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {

  render() {
    if(this.props.user.loggedIn){
      return ( <Redirect to="/home" /> )
      }
    return (
      <View>
          <Text>
            welcome To Home..!!!
          </Text>
      </View>
  );
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to React123 Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );

  
}
}