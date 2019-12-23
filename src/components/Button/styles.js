import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { Button, CircularProgress } from '@material-ui/core';

import {
  primaryMain,
  primaryContrast,
  secondaryMain,
  secondaryContrast,
} from '~/styles/colors';

export const StyledButton = styled(props => (
  <StylesProvider injectFirst>
    <Button {...props} secondary={undefined} />
  </StylesProvider>
))`
  min-width: ${props => (props.size === 'small' ? '64px' : '155px')};
  border-radius: 50px;
  padding: ${props => (props.size === 'small' ? '4px' : '12px')};
  color: ${props => (props.secondary ? secondaryContrast : primaryContrast)};
  border: 0;
  background: ${props => (props.secondary ? secondaryMain : primaryMain)};
  &:hover {
    background: ${props => (props.secondary ? secondaryMain : primaryMain)};
  }
`;

export const LoadingIndicator = styled(props => (
  <CircularProgress {...props} secondary={undefined} size={20} />
))`
  color: ${props => (props.secondary ? secondaryContrast : primaryContrast)};
`;
