import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
