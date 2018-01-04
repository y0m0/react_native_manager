import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@mail.com"
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
