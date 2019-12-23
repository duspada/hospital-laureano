import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { black } from '~/styles/colors';

export const Input = styled(props => (
  <StylesProvider>
    <TextField {...props} />
  </StylesProvider>
))`
  border-color: red;
  & label {
    font-size: 1em;
  }
  & label.Mui-focused {
    color: ${black};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${black};
  }
`;

export const InputWrapper = styled.div`
  ${({ fullWidth }) => fullWidth && 'flex: 1'};
  flex-direction: column;
`;
