import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const Router = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Please Login'
    }
  },
  employeeList: {
    screen: EmployeeList,
    navigationOptions: {
      headerTitle: 'Employee List'
    }
  }
}, {
  initialRouteName: 'login',
});

export default Router;
