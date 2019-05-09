import isFunction from 'lodash/isFunction';

const switchStyle = prop => stylesObj => (props) => {
  const propValue = props[prop] || 'default';
  const switchObj = stylesObj[propValue];

  if (isFunction(switchObj)) return switchObj(props);

  return switchObj;
};

export default switchStyle;
