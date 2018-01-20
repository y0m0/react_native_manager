import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <Text>Employee Form</Text>
      </View>
    );
  }
}

EmployeeCreate.navigationOptions = ({ navigation }) => {
  return {
    title: 'Create Employee',
    headerLeft: <Button title="Back" onPress={() => navigation.goBack()} />
  };
};

export default EmployeeCreate;
