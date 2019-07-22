/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Tymonlvy from './app/luyou'
import {Provider} from 'mobx-react';
import aac from './app/mommbx/mbindex'
import AV from 'leancloud-storage'; 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
console.disableYellowBox=true
export default class App extends Component<Props> {
  render() {
    AV.initialize('dIDy2CSBTHs0y0kfFcHARX3D-gzGzoHsz', 'XiMKvUMP4c2XBsck38S9DIxt');
    return (
      <Provider {...aac}>
         <Tymonlvy />
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
