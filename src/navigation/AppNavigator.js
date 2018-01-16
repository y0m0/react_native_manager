import { StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeNavigator from './EmployeeNavigator';

const AppNavigator = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Please Login'
    }
  },
  employeeNavigator: { screen: EmployeeNavigator }
}, {
  initialRouteName: 'login',
});

export default AppNavigator;
