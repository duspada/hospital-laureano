import React, { Fragment } from 'react';
import {
  oneOfType, string, bool, node, arrayOf, shape,
} from 'prop-types';
import { ErrorText } from './styles';

const FormError = ({ error, children, style }) => (
  <Fragment>
    {children}
    <ErrorText style={style}>{error}</ErrorText>
  </Fragment>
);

export default FormError;

FormError.propTypes = {
  error: oneOfType([string, bool]),
  children: node.isRequired,
  style: arrayOf(shape({})),
};

FormError.defaultProps = {
  error: '',
  style: [{}],
};
