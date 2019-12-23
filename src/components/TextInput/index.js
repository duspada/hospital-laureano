import React, { Component } from 'react';
import { string, func, oneOf } from 'prop-types';
import FormError from '~/components/FormError';
import { TextInputMask } from '~/utils/modules';
import { Input, InputWrapper } from './styles';

const maskTypes = {
  cep: '99999-999',
  cpf: '999.999.999-99',
  cnpj: '99.999.999/9999-99',
  birthdate: '99/99/9999',
  phone: '(99) 9999-9999',
  cellphone: '(99) 99999-9999',
  money: 'R$99,99',
  state: 'aa',
};

class TextInput extends Component {
  renderTextInput = () => {
    const {
      mask, maskType, error, ...rest
    } = this.props;
    const hasError = !!error;
    return mask || maskType ? (
      <TextInputMask
        mask={maskTypes[maskType] || mask}
        error={hasError}
        {...rest}
      >
        {inputProps => <Input margin="normal" {...inputProps} />}
      </TextInputMask>
    ) : (
      <Input margin="normal" {...rest} error={hasError} />
    );
  };

  render() {
    const { error, ...rest } = this.props;
    return (
      <InputWrapper {...rest}>
        <FormError error={error}>{this.renderTextInput()}</FormError>
      </InputWrapper>
    );
  }
}

TextInput.propTypes = {
  mask: string,
  maskType: oneOf(Object.keys(maskTypes)),
  label: string,
  error: string,
  placeholder: string,
  onChange: func,
};

TextInput.defaultProps = {
  mask: '',
  maskType: null,
  placeholder: '',
  label: '',
  error: '',
  onChange: () => {},
};

export default TextInput;
