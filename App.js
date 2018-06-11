/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './src/Global';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootStack from './src/Router';
import ProviderStore from './src/store/ProviderStore'
import { Provider } from 'mobx-react/native';

export default class App extends Component {
  render() {
    return (
      <Provider {...ProviderStore}>
        <RootStack />
      </Provider>
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
