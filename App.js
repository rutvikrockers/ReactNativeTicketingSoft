/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''}
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.input}
                  placeholder="Your Email"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  autoCapitalize='none'
              />
          </View>
          <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  autoCapitalize='none'
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  secureTextEntry={true}
              />
          </View>
          <View style={{marginTop: 20}} />
          <Button
              style={styles.btnContainer}
              onPress={() => {this.login()}}
              value="GO"
          />
          {/* <Link to="/signup">
              <Text>Register</Text>
          </Link> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
