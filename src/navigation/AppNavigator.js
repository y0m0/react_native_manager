import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

const AppNavigator = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Please Login'
    }
  },
  employeeList: {
    screen: EmployeeList,
    navigationOptions: {
      headerTitle: 'Employee List',
      headerLeft: null,
      headerRight: <Button title="Add" onPress={() => console.log('press')} />
    }
  }
}, {
  initialRouteName: 'login',
});

export default AppNavigator;
