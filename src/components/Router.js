import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';

const Router = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Please Login'
    }
  }
});


export default Router;
