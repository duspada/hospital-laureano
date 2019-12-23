import React, { Component } from 'react';

import logo from '~/assets/logo.jpg';
import FormComponent from '~/components/FormContainer';
import TextInput from '~/components/TextInput';
import api from '~/services/api';
import { toOnlyNumbers } from '~/utils/stringFormatter';

import {
  Container, Header, Logo, Title, FormContainer, Form, ButtonWrapper,
  SubmitButton, SmallForms, SmForm,
} from './styles';

class Main extends Component {
  state={
    name: '',
    valor: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    data: '',
    dataExport: '',
    file: null,
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  getCep = async (e) => {
    const { data } = await api.get(`${toOnlyNumbers(e.target.value)}/json`);
    this.setState({
      endereco: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    });
  };

  render() {
    const {
      name, valor,
      endereco, bairro,
      cidade, estado, cep,
      telefone, data, dataExport, file,
    } = this.state;
    return (
      <Container>
        <Header>
          <Logo src={logo} />
          <Title>Sistema de Controle de Doações</Title>
        </Header>
        <FormContainer>
          <Form>
            <Title>Formulário Doador</Title>
            <FormComponent
              onSubmit={this.submitForm}
            >
              <form onSubmit={this.submitForm}>
                <TextInput
                  fullWidth
                  label="Nome"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  maskType="money"
                  label="Valor"
                  id="valor"
                  name="valor"
                  value={valor}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  maskType="cep"
                  label="CEP"
                  id="cep"
                  name="cep"
                  value={cep}
                  onChange={this.handleInputChange}
                  onBlur={this.getCep}
                />
                <TextInput
                  fullWidth
                  label="Endereço"
                  id="endereco"
                  name="endereco"
                  value={endereco}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  label="Bairro"
                  id="bairro"
                  name="bairro"
                  value={bairro}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  label="Cidade"
                  id="cidade"
                  name="cidade"
                  value={cidade}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  label="Estado"
                  maskType="state"
                  id="estado"
                  name="estado"
                  value={estado}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  maskType="cellphone"
                  label="Telefone"
                  id="telefone"
                  name="telefone"
                  value={telefone}
                  onChange={this.handleInputChange}
                />
                <TextInput
                  fullWidth
                  maskType="birthdate"
                  label="Data"
                  id="data"
                  name="data"
                  value={data}
                  onChange={this.handleInputChange}
                />
                <ButtonWrapper>
                  <SubmitButton
                    type="submit"
                    onPress={this.submitForm}
                  >
                  Enviar
                  </SubmitButton>
                </ButtonWrapper>
              </form>
            </FormComponent>
          </Form>
          <SmallForms>
            <SmForm>
              <Title>Exportar Arquivo</Title>
              <FormComponent
                onSubmit={this.submitForm}
              >
                <form onSubmit={this.submitForm}>
                  <TextInput
                    maskType="birthdate"
                    label="Data"
                    id="dataExport"
                    name="dataExport"
                    value={dataExport}
                    onChange={this.handleInputChange}
                    style={{ textAlign: 'center' }}
                  />
                  <ButtonWrapper>
                    <SubmitButton
                      type="submit"
                      onPress={this.submitForm}
                    >
                    Enviar
                    </SubmitButton>
                  </ButtonWrapper>
                </form>
              </FormComponent>
            </SmForm>
            <SmForm>
              <Title>Importar Arquivo</Title>
              <FormComponent
                onSubmit={this.submitForm}
              >
                <form
                  onSubmit={this.submitForm}
                  style={{ color: '#000', textAlign: 'center' }}
                >
                  <input
                    id="file"
                    name="file"
                    type="file"
                    value={file}
                    onChange={this.handleInputChange}
                  />
                  <ButtonWrapper>
                    <SubmitButton
                      type="submit"
                      onPress={this.submitForm}
                    >
                    Enviar
                    </SubmitButton>
                  </ButtonWrapper>
                </form>
              </FormComponent>
            </SmForm>
          </SmallForms>
        </FormContainer>
      </Container>
    );
  }
}

export default Main;
