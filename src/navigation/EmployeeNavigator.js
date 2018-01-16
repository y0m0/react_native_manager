import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';

const EmployeeNavigator = StackNavigator({
  employeeList: {
    screen: EmployeeList,
    navigationOptions: {
      title: 'Employee List',
      headerLeft: null,
      headerRight: <Button title="Add" onPress={() => console.log('press')} />
    }
  },
  employeeCreate: {
    screen: EmployeeCreate,
    navigationOptions: {
      title: 'Create Employee'
    }
  }
}, {
  initialRouteName: 'employeeList',
  headerMode: 'none'
});

export default EmployeeNavigator;
