const OBJECT = '[object Object]';
const ARRAY = '[object Array]';

export const getTypeOf = param => Object.prototype.toString.call(param);

export const isObject = param => getTypeOf(param) === OBJECT;

export const isArray = param => getTypeOf(param) === ARRAY;

export const hasProp = (obj, prop) => isObject(obj) && !!obj[prop];

export const removeEmptyValues = (obj) => {
  const newObj = {};
  if (!isObject(obj)) return newObj;

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== '') {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

export const parseMultipleParamsToUrl = (params) => {
  if (!params) return '';
  if (!isArray(params)) return params;

  const paramsSelected = params.filter(param => param.selected && param.id);

  if (!paramsSelected.length) return '';

  const param = paramsSelected.map(item => item.id).toString();

  return param;
};

export const filterByProp = (data, prop) => data.filter(item => hasProp(item, prop));
