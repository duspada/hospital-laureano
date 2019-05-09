import {
  intToString,
  isOnlyNumbers,
  toOnlyNumbers,
  parsePhoneToApiObject,
  obfuscatePhoneLastSection,
  getInitials,
  getValueFromQueryString,
  convertToMoney,
  isEven,
} from './stringFormatter';

describe('Util: stringFormatter', () => {
  describe('intToString', () => {
    let str = '';
    let padding = '';
    let char = '';

    beforeEach(() => {
      str = 'abc';
      padding = 1;
      char = 'x';
    });

    it('intToString exist', () => {
      expect(intToString).toBeDefined();
    });

    it('intToString is a function', () => {
      expect(intToString).toBeInstanceOf(Function);
    });

    it('should string is smaller then padding without chart', () => {
      expect(intToString(str, padding)).toEqual('abc');
    });

    it('should string is bigger then padding without chart', () => {
      padding = 4;

      expect(intToString(str, padding)).toEqual(',abc');
    });

    it('should string is bigger then padding with chart', () => {
      padding = 5;
      char = 'x';

      expect(intToString(str, padding, char)).toEqual('xxabc');
    });
  });

  describe('isOnlyNumbers', () => {
    it('isOnlyNumbers exist', () => {
      expect(isOnlyNumbers).toBeDefined();
    });

    it('isOnlyNumbers is a function', () => {
      expect(isOnlyNumbers).toBeInstanceOf(Function);
    });

    it("should return 'true' with param is numbers", () => {
      expect(isOnlyNumbers('123')).toEqual(true);
      expect(isOnlyNumbers(123)).toEqual(true);
    });

    it("should return 'false' with param is a mix the letter and numbers", () => {
      expect(isOnlyNumbers('123abc')).toEqual(false);
      expect(isOnlyNumbers('abc123')).toEqual(false);
      expect(isOnlyNumbers('a1b2c3')).toEqual(false);
    });

    it("should return 'false' with param is letters", () => {
      expect(isOnlyNumbers('abc')).toEqual(false);
      expect(isOnlyNumbers('ABC')).toEqual(false);
    });
  });

  describe('toOnlyNumbers', () => {
    it('toOnlyNumbers exist', () => {
      expect(toOnlyNumbers).toBeDefined();
    });

    it('toOnlyNumbers is a function', () => {
      expect(toOnlyNumbers).toBeInstanceOf(Function);
    });

    it("should return 'number(s)' with param is only number(s) ", () => {
      expect(toOnlyNumbers('1')).toEqual('1');
      expect(toOnlyNumbers('123')).toEqual('123');
      expect(toOnlyNumbers('123456789')).toEqual('123456789');
    });

    it("should return '' with param is only letters", () => {
      expect(toOnlyNumbers('abc')).toEqual('');
      expect(toOnlyNumbers('ABC')).toEqual('');
      expect(toOnlyNumbers('AbC')).toEqual('');
      expect(toOnlyNumbers('abc def')).toEqual('');
    });

    it('should return only number with param is mix of letter and number', () => {
      expect(toOnlyNumbers('0ab1cde2')).toBe('012');
      expect(toOnlyNumbers('123abc')).toBe('123');
      expect(toOnlyNumbers('abc123')).toBe('123');
    });
  });

  describe('parsePhoneToApiObject', () => {
    let phoneFormat = {};
    let phone = '';

    beforeEach(() => {
      phoneFormat = {
        ddd: '00',
        phone: '123456789',
      };
    });

    it('parsePhoneToApiObject exist', () => {
      expect(parsePhoneToApiObject).toBeDefined();
    });

    it('parsePhoneToApiObject is a function', () => {
      expect(parsePhoneToApiObject).toBeInstanceOf(Function);
    });

    it("should return {ddd: '00', phone: '123456789'} with phone is '00123456789'", () => {
      phone = '00123456789';

      expect(parsePhoneToApiObject(phone)).toEqual(phoneFormat);
    });

    it("should return {ddd: '00', phone: '123456789'} with phone is '(00) 12345-6789'", () => {
      phone = '(00) 12345-6789';

      expect(parsePhoneToApiObject(phone)).toEqual(phoneFormat);
    });
  });

  describe('obfuscatePhoneLastSection', () => {
    it('obfuscatePhoneLastSection exist', () => {
      expect(obfuscatePhoneLastSection).toBeDefined();
    });

    it('obfuscatePhoneLastSection is a function', () => {
      expect(obfuscatePhoneLastSection).toBeInstanceOf(Function);
    });

    it("should return '(00) xxxxx 6789' with phone is '00123456789'", () => {
      const phone = '00123456789';

      expect(obfuscatePhoneLastSection(phone)).toEqual('(00) xxxxx 6789');
    });

    it("should return '(00) xxxxx-6789' with phone is '(00) xxxxx 6789'", () => {
      const phone = '(00) xxxxx-6789';

      expect(obfuscatePhoneLastSection(phone)).toEqual('(00) xxxxx 6789');
    });

    it("should return '(00) xxxxx 6789' with phone is '+55 (00) 12345-6789'", () => {
      const phone = '+55 (00) 12345-6789';

      expect(obfuscatePhoneLastSection(phone)).toEqual('+55 (00) xxxxx 6789');
    });
  });

  describe('getInitials', () => {
    let name = '';

    beforeEach(() => {
      name = 'user';
    });

    it('getInitials exist', () => {
      expect(getInitials).toBeDefined();
    });

    it('getInitials is a function', () => {
      expect(getInitials).toBeInstanceOf(Function);
    });

    it("should return 'U' with user has name 'user'", () => {
      expect(getInitials(name)).toEqual('U');
    });

    it("should return 'UN' with user has name 'user name'", () => {
      name = 'user name';

      expect(getInitials(name)).toEqual('UN');
    });

    it("should return 'UL' with user has name 'The name of user is very long'", () => {
      name = 'The name of user is very long';

      expect(getInitials(name)).toEqual('TL');
    });
  });

  describe('getValueFromQueryString', () => {
    let search = '';
    let key = '';

    beforeEach(() => {
      search = 'http://localhost.com?a=1&b=2&c=3';
      key = 'b';
    });

    it('getValueFromQueryString exist', () => {
      expect(getValueFromQueryString).toBeDefined();
    });

    it('getValueFromQueryString is a function', () => {
      expect(getValueFromQueryString).toBeInstanceOf(Function);
    });

    it("should return 2 with 'key' is 'b' in url 'http://localhost.com?a=1&b=2&c=3'", () => {
      expect(getValueFromQueryString(search, key)).toEqual('2');
    });

    it("should return 2 with 'key' is 'b' in url 'http://localhost.com?a=1&b=1&b=2' when key is duplicate", () => {
      search = 'http://localhost.com?a=1&b=1&b=2';

      expect(getValueFromQueryString(search, key)).toEqual('1');
    });

    it("should return '' with param is invalid", () => {
      expect(getValueFromQueryString('', '')).toEqual('');
      expect(getValueFromQueryString(null, null)).toEqual('');
      expect(getValueFromQueryString()).toEqual('');
    });

    it("should return '' with 'key' no exist in 'search'", () => {
      key = 'd';

      expect(getValueFromQueryString(search, key)).toEqual('');
    });

    it("should return '' with 'key' no defined", () => {
      expect(getValueFromQueryString(search)).toEqual('');
    });
  });

  describe('convertToMoney', () => {
    it('convertToMoney exist', () => {
      expect(convertToMoney).toBeDefined();
    });

    it('convertToMoney is a function', () => {
      expect(convertToMoney).toBeInstanceOf(Function);
    });

    it("should return 'R$ 0,00' when param not exist", () => {
      expect(convertToMoney()).toEqual('R$ 0,00');
    });

    it("should return 'R$ 0,00' when param is 'boolean'", () => {
      expect(convertToMoney(true)).toEqual('R$ 0,00');
      expect(convertToMoney(false)).toEqual('R$ 0,00');
    });

    it("should return 'R$ 0,00' when param is 'undefined'", () => {
      expect(convertToMoney(undefined)).toEqual('R$ 0,00');
    });

    it("should return 'R$ 10,00' when param is 'number 10'", () => {
      expect(convertToMoney(10)).toEqual('R$ 10,00');
    });

    it("should return 'R$ 2,23' when param is '2.23'", () => {
      expect(convertToMoney('2.23')).toEqual('R$ 2,23');
    });

    it("should return '- R$ 2,23' when param is '-2.23'", () => {
      expect(convertToMoney('-2.23')).toEqual('- R$ 2,23');
    });

    it("should return 'R$ 2,23' when value param is '-2.23' and hide operator is 'true'", () => {
      expect(convertToMoney('-2.23', true)).toEqual('R$ 2,23');
    });

    it("should return 'R$ 4.50' when param is '4.5'", () => {
      expect(convertToMoney('4.5')).toEqual('R$ 4,50');
    });

    it("should return 'R$ 12,23' when param is '12.30'", () => {
      expect(convertToMoney('12.23')).toEqual('R$ 12,23');
    });

    it("should return 'R$ 1.234,56' when param is '1234.56'", () => {
      expect(convertToMoney('1234.56')).toEqual('R$ 1.234,56');
    });
  });

  describe('isEven', () => {
    it('isEven exist', () => {
      expect(isEven).toBeDefined();
    });

    it('isEven is a function', () => {
      expect(isEven).toBeInstanceOf(Function);
    });

    it("should return 'true' when param is '2'", () => {
      expect(isEven(2)).toEqual(true);
    });

    it("should return 'true' when param is '3'", () => {
      expect(isEven(3)).toEqual(false);
    });
  });
});
