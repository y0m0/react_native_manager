import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

