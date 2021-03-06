export const intToString = (string, padding, char) => {
  if (string.length >= padding) {
    return string;
  }
  return (new Array(padding).join(char) + string).slice(-padding);
};

export const isOnlyNumbers = string => RegExp('^[0-9]*$').test(string);

export const toOnlyNumbers = (string) => {
  if (!string) return '';
  return string.replace(/\D/g, '');
};

export const parsePhoneToApiObject = (phone) => {
  const isOnlyNumber = isOnlyNumbers(phone);

  if (isOnlyNumber) {
    const ddd = phone.slice(0, 2);
    const phoneText = phone.slice(2);

    return {
      ddd,
      phone: phoneText,
    };
  }
  const dddRegexp = new RegExp("(\\d{2})"); // eslint-disable-line

  const ddd = dddRegexp.exec(phone)[0];
  const phoneToOnlyNumber = toOnlyNumbers(phone.split(' ')[1]);

  return {
    ddd,
    phone: phoneToOnlyNumber,
  };
};

export const obfuscatePhoneLastSection = (phone) => {
  const isOnlyNumber = isOnlyNumbers(phone);

  if (isOnlyNumber) {
    const ddd = phone.slice(0, 2);
    const secondPart = phone.slice(7);

    return `(${ddd}) xxxxx ${secondPart}`;
  }

  const lastSectionRegexp = new RegExp("\\s\\d{5}"); //eslint-disable-line

  return phone.replace('-', ' ').replace(lastSectionRegexp, ' xxxxx');
};

export const getInitials = (fullname) => {
  const names = fullname.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

export const getValueFromQueryString = (search, key) => {
  if (!search || !key) {
    return '';
  }
  if (!search.includes(key)) {
    return '';
  }

  const splitted = search.split(`${key}=`, search.length);
  const index = splitted.length > 1 ? 1 : 0;

  const value = splitted[index].split('&', splitted[index].length)[0];

  return value || '';
};

export const isEven = value => value % 2 === 0;

export const toNumber = (value) => {
  let baseValue = value;
  if (value === undefined || typeof value === 'boolean') {
    baseValue = 0;
  }

  return Number(baseValue);
};

export const convertToDecimal = (value, numberOfDecimalPlaces = 2) => {
  const number = toNumber(value);

  return number
    .toFixed(numberOfDecimalPlaces)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');
};

export const convertToMoney = (
  value,
  hideOperator,
  numberOfDecimalPlaces = 2,
) => {
  const withDecimalValue = convertToDecimal(value, numberOfDecimalPlaces);

  let result = `R$ ${withDecimalValue}`;

  if (toNumber(value) < 0) {
    const valueOnly = withDecimalValue.split('-')[1];
    result = hideOperator ? `R$ ${valueOnly}` : `- R$ ${valueOnly}`;
  }

  return result;
};

const stringFormatter = {
  intToString,
  isOnlyNumbers,
  toOnlyNumbers,
  parsePhoneToApiObject,
  obfuscatePhoneLastSection,
  getInitials,
  getValueFromQueryString,
  convertToDecimal,
  convertToMoney,
};

export default stringFormatter;
