import { StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeNavigator from './EmployeeNavigator';

const AppNavigator = StackNavigator({
  login: { screen: LoginForm, },
  employeeNavigator: { screen: EmployeeNavigator }
}, {
  initialRouteName: 'login',
  headerMode: 'screen'
});

export default AppNavigator;
