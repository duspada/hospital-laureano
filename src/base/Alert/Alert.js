import React from 'react';
import PropTypes from 'prop-types';

import { AlertWrapper, AlertContent } from './Alert.styles';

const Alert = ({
  id, type, children, show,
}) => (
  <AlertWrapper id={id} type={type} show={show} role="alert">
    <AlertContent>{children}</AlertContent>
  </AlertWrapper>
);

export default Alert;

Alert.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
  show: PropTypes.bool,
};

Alert.defaultProps = {
  children: '',
  type: 'default',
  show: false,
};
