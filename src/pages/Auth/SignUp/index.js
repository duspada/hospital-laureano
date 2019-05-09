import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redux from '~/store/redux';

import Button from '~/styles/Button';
import { Container, SignForm } from '../styles';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(name, email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Criar conta</h1>

          <span>NOME</span>
          <input name="name" value={name} onChange={this.handleInputChange} />

          <span>E-MAIL</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />

          <span>SENHA</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />

          <Button size="big" type="submit">
            Criar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

export default Redux(SignUp);
