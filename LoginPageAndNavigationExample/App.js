import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Components/Login';
import Transaction from './src/Components/Transaction';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCURzqfrLCzfXHIamdzBUm1bf5cuUIbvPE",
    authDomain: "appnavigation.firebaseapp.com",
    databaseURL: "https://appnavigation.firebaseio.com",
    projectId: "appnavigation",
    storageBucket: "appnavigation.appspot.com",
    messagingSenderId: "496439336752"
  };
  firebase.initializeApp(config);


  const NavigationApp = StackNavigator({
    Login : { screen: Login} ,
    Transaction: {screen: Transaction}
  });

export default class App extends React.Component {
  render() {
    return (
      <NavigationApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
