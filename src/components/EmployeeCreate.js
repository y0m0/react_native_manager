import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <Text>Employee Form</Text>
      </View>
    );
  }
}

EmployeeCreate.navigationOptions = {
  title: 'Create Employee'
};

export default EmployeeCreate;
