import React from 'react';
import {
  oneOf, oneOfType, string, shape, node, arrayOf,
} from 'prop-types';
import { CustomTypography } from './styles';

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
];

const Typography = ({
  style, variant, children, ...rest
}) => (
  <CustomTypography variant={variant} {...rest}>
    {children}
  </CustomTypography>
);

Typography.propTypes = {
  children: oneOfType([arrayOf(string), string, node]).isRequired,
  style: arrayOf(shape({})),
  variant: oneOf(variants),
};

Typography.defaultProps = {
  variant: 'body1',
  style: [{}],
};

export default Typography;
