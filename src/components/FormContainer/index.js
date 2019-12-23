import React from 'react';
import {
  arrayOf, bool, func, shape,
} from 'prop-types';
import { FormBehavior } from '~/utils/modules';

const FormContainer = ({
  validationSchema,
  initialValues,
  onSubmit,
  validateOnChange,
  children,
  style,
}) => (
  <FormBehavior
    validateOnChange={validateOnChange}
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={onSubmit}
    style={style}
  >
    {children}
  </FormBehavior>
);

FormContainer.propTypes = {
  children: func.isRequired,
  validationSchema: shape({}).isRequired,
  initialValues: shape({}).isRequired,
  onSubmit: func.isRequired,
  validateOnChange: bool,
  style: arrayOf(shape({})),
};

FormContainer.defaultProps = {
  validateOnChange: false,
  style: [{}],
};

export default FormContainer;
