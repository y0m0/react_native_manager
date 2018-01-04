import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as firebase from 'firebase';
import reducers from './reducers';

const firebaseConfig = {
  apiKey: 'AIzaSyBCxENjuOI9x8GJj6g20EjInjAGWJPSTI4',
  authDomain: 'rn-manager-810f5.firebaseapp.com',
  databaseURL: 'https://rn-manager-810f5.firebaseio.com',
  projectId: 'rn-manager-810f5',
  storageBucket: '',
  messagingSenderId: '1079510736988'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Manager
          </Text>
      </View>
    </Provider>
    );
  }
}

