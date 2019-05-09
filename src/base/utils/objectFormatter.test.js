import {
  isObject,
  isArray,
  hasProp,
  removeEmptyValues,
  parseMultipleParamsToUrl,
} from './objectFormatter';

describe('Util: objectFormatter', () => {
  describe('isObject', () => {
    it('isObject exist', () => {
      expect(isObject).toBeDefined();
    });

    it('isObject is a function', () => {
      expect(isObject).toBeInstanceOf(Function);
    });

    it("should call isObject when param is not defined then return 'false'", () => {
      expect(isObject()).toEqual(false);
    });

    it("should call isObject when param is a 'string' then return 'false'", () => {
      expect(isObject('teste')).toEqual(false);
    });

    it("should call isObject when param is a 'bollean' when return 'false'", () => {
      expect(isObject(true)).toEqual(false);
      expect(isObject(false)).toEqual(false);
    });

    it("should call isObject when param is a 'array' when return 'false'", () => {
      expect(isObject([])).toEqual(false);
      expect(isObject([1, 2, 3])).toEqual(false);
    });

    it("should call isObject when param is an 'object' when return 'true'", () => {
      expect(isObject({})).toEqual(true);
      expect(isObject({
        a: 1, b: 2, c: 3, d: '',
      })).toEqual(true);
    });
  });

  describe('isArray', () => {
    it('isArray exist', () => {
      expect(isArray).toBeDefined();
    });

    it('isArray is a function', () => {
      expect(isArray).toBeInstanceOf(Function);
    });

    it("should call isArray when param is not defined then return 'false'", () => {
      expect(isArray()).toEqual(false);
    });

    it("should call isArray when param is a 'string' then return 'false'", () => {
      expect(isArray('teste')).toEqual(false);
    });

    it("should call isArray when param is a 'bollean' when return 'false'", () => {
      expect(isArray(true)).toEqual(false);
      expect(isArray(false)).toEqual(false);
    });
    it("should call isArray when param is an 'object' when return 'false'", () => {
      expect(isArray({})).toEqual(false);
      expect(isArray({
        a: 1, b: 2, c: 3, d: '',
      })).toEqual(false);
    });

    it("should call isArray when param is a 'array' when return 'true'", () => {
      expect(isArray([])).toEqual(true);
      expect(isArray([1, 2, 3])).toEqual(true);
      expect(isArray([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqual(true);
    });
  });

  describe('hasProp', () => {
    let obj;

    beforeEach(() => {
      obj = { a: 1, b: 2, c: 3 };
    });

    it('hasProp exist', () => {
      expect(hasProp).toBeDefined();
    });

    it('hasProp is a function', () => {
      expect(hasProp).toBeInstanceOf(Function);
    });

    it("should call hasProp without object when return 'false'", () => {
      expect(hasProp()).toEqual(false);
    });

    it("should call hasProp with object and widthout prop when return 'false'", () => {
      expect(hasProp(obj)).toEqual(false);
    });

    it("should call hasProp with param { a: 1, b: 2, c: 3 } when check if exist prop 'a' return 'true'", () => {
      expect(hasProp(obj, 'a')).toEqual(true);
    });

    it("should call hasProp with param { a: 1, b: 2, c: 3 } when check if exist propr 'd' return 'false'", () => {
      expect(hasProp(obj, 'd')).toEqual(false);
    });
  });

  describe('removeEmptyValues', () => {
    let obj;

    beforeEach(() => {
      obj = { a: 1, b: 2, c: 3 };
    });

    it('removeEmptyValues exist', () => {
      expect(removeEmptyValues).toBeDefined();
    });

    it('removeEmptyValues is a function', () => {
      expect(removeEmptyValues).toBeInstanceOf(Function);
    });

    it('should call removeEmptyValues without object when return {}', () => {
      const expectResult = {};

      expect(removeEmptyValues()).toEqual(expectResult);
    });

    it("should call removeEmptyValues with object = { a: 1, b: 2, c: 3 } when return '{ a: 1, b: 2, c: 3 }'", () => {
      const expectResult = { a: 1, b: 2, c: 3 };

      expect(removeEmptyValues(obj)).toEqual(expectResult);
    });

    it("should call removeEmptyValues with object = { a: 'a', b: '', c: true } when return { a: 'a', c: true }", () => {
      const expectResult = { a: 'a', c: true };
      obj = { a: 'a', b: '', c: true };

      expect(removeEmptyValues(obj)).toEqual(expectResult);
    });

    it("should call removeEmptyValues with object = { a: '', b: [1, 2, 3], c: { x: 1, y: 2 } } when return { b: [1, 2, 3], c: { x: 1, y: 2 } }", () => {
      const expectResult = { b: [1, 2, 3], c: { x: 1, y: 2 } };
      obj = { a: '', b: [1, 2, 3], c: { x: 1, y: 2 } };

      expect(removeEmptyValues(obj)).toEqual(expectResult);
    });
  });

  describe('parseMultipleParamsToUrl', () => {
    let param;

    it('parseMultipleParamsToUrl exist', () => {
      expect(parseMultipleParamsToUrl).toBeDefined();
    });

    it('parseMultipleParamsToUrl is a function', () => {
      expect(parseMultipleParamsToUrl).toBeInstanceOf(Function);
    });

    it("should call parseMultipleParamsToUrl without param when return ''", () => {
      const expectResult = '';
      expect(parseMultipleParamsToUrl()).toEqual(expectResult);
    });

    it("should call parseMultipleParamsToUrl when param is an 'teste' when return 'teste'", () => {
      const expectResult = 'teste';
      param = 'teste';

      expect(parseMultipleParamsToUrl(param)).toEqual(expectResult);
    });

    it("should call parseMultipleParamsToUrl when param is an [{ id:1, selected: true }] when return '1'", () => {
      const expectResult = '1';
      param = [{ id: 1, selected: true }];

      expect(parseMultipleParamsToUrl(param)).toEqual(expectResult);
    });

    it("should call parseMultipleParamsToUrl when param is an [{ id: 1, selected: false }, { id: 2, selected: true }] when return '2'", () => {
      const expectResult = '2';
      param = [{ id: 1, selected: false }, { id: 2, selected: true }];

      expect(parseMultipleParamsToUrl(param)).toEqual(expectResult);
    });

    it("should call parseMultipleParamsToUrl when param is an [{ id: 1, selected: true }, { id: 2, selected: false }, { id: 3, selected: true }] when return '1,3'", () => {
      const expectResult = '1,3';
      param = [
        { id: 1, selected: true },
        { id: 2, selected: false },
        { id: 3, selected: true },
      ];

      expect(parseMultipleParamsToUrl(param)).toEqual(expectResult);
    });

    it("should call parseMultipleParamsToUrl when param is an '[{ id: 1, selected: false }, { id: 2, selected: false }]' when return ''", () => {
      const expectResult = '';
      param = [{ id: 1, selected: false }, { id: 2, selected: false }];

      expect(parseMultipleParamsToUrl(param)).toEqual(expectResult);
    });
  });
});
