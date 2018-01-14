import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';

import reducers from './reducers';
import AppNavigator from './AppNavigator';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBCxENjuOI9x8GJj6g20EjInjAGWJPSTI4',
      authDomain: 'rn-manager-810f5.firebaseapp.com',
      databaseURL: 'https://rn-manager-810f5.firebaseio.com',
      projectId: 'rn-manager-810f5',
      storageBucket: '',
      messagingSenderId: '1079510736988'
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;

