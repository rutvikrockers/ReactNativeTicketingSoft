import React, {Component} from 'react';

import {Platform, StyleSheet, View, Text} from 'react-native';

import {Platform, View, Text, TextInput} from 'react-native';
import Button from './src/components/shared/button';
import styles from './src/styles/main';
import {authenticate} from './src/actions';
//import {Redirect, Link} from 'react-router-native';
//import SplashScreen from 'react-native-splash-screen';

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
    // componentDidMount() {
    //   // do stuff while splash screen is shown
    //     // After having done stuff (such as async tasks) hide the splash screen
    //     SplashScreen.hide();
    // }
    // login() {
    //   this.props.dispatch(authenticate(this.state.email, this.state.password)); 
    //   }

    render() {
      // if(this.props.user.loggedIn){
      //   return ( <Redirect to="/home" /> )
      //   }
      return (
        <View style={styles.container}>

           <Text>Welcome To Jurassic World.</Text>
            

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
                value="LOGIN"
            />
            {/* <Link to="/signup">
                <Text>Register</Text>
            </Link> */}

        </View>
    );
      
  
    
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

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// const mapStateToProps = (state) => {
//   return {
//   error: state.error,
//   user: state.user
//   }
//   }
  
//   export default connect(mapStateToProps)(App);

