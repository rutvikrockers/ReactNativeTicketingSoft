import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar, Image,TouchableOpacity, Alert, Text,ToolbarAndroid} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {

}