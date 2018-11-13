import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import {
  View
} from 'react-native';

import App from '../../App';

import {connect} from 'react-redux';
import styles from '../styles/main.js';



class Authenticated extends Component {
  render() {
    var props = this.props;
    var match = props.match;
    return (
      <View style={styles.root}>
        <Header />
        <Switch>
          <Route exact  path={match.url} component={App}/>
        
        </Switch>
        <Footer />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Authenticated);
