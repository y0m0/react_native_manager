import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EmployeeList extends Component {
  render() {
    return (
      <View>
        <Text>Employee 1</Text>
        <Text>Employee 2</Text>
        <Text>Employee 3</Text>
        <Text>Employee 4</Text>
        <Text>Employee 5</Text>
        <Text>Employee 6</Text>
      </View>
    );
  }
}

EmployeeList.navigationOptions = ({ navigation }) => {
  return {
    title: 'Employee List',
    headerLeft: null,
    headerRight: <Button
      title="Add"
      onPress={() => navigation.navigate('employeeCreate')}
    />
  };
};

export default EmployeeList;
