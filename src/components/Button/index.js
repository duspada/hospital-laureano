import React from 'react';
import { string, func, bool } from 'prop-types';
import { StyledButton, LoadingIndicator } from './styles';
import If from '../If';

const Button = ({
  children,
  onPress,
  secondary,
  transparent,
  loading,
  disabled,
  ...rest
}) => (
  <StyledButton onClick={onPress} secondary={secondary || false} {...rest}>
    <If condition={loading}>
      <LoadingIndicator secondary={secondary || false} />
    </If>
    <If condition={!loading}>{children}</If>
  </StyledButton>
);

Button.propTypes = {
  children: string.isRequired,
  secondary: bool,
  transparent: bool,
  loading: bool,
  disabled: bool,
  onPress: func,
};

Button.defaultProps = {
  onPress: () => null,
  secondary: false,
  transparent: false,
  loading: false,
  disabled: false,
};

export default Button;
