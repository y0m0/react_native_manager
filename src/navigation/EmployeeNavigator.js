import { StackNavigator } from 'react-navigation';

import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';

const EmployeeNavigator = StackNavigator({
  employeeList: { screen: EmployeeList },
  employeeCreate: { screen: EmployeeCreate }
}, {
  initialRouteName: 'employeeList',
  headerMode: 'none'
});

export default EmployeeNavigator;
