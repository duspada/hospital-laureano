import If from './If';

describe('Util: If', () => {
  let obj = {};

  beforeEach(() => {
    obj = {
      test: true,
      children: '1',
    };
  });

  it('If exist', () => {
    expect(If).toBeDefined();
  });

  it('If is a function', () => {
    expect(If).toBeInstanceOf(Function);
  });

  it("If should return 'children' if 'test' is valid", () => {
    expect(If(obj)).toEqual(obj.children);
  });

  it("If should return 'null' with 'test' is invalid", () => {
    obj.test = false;

    expect(If(obj)).toBeNull();
  });
});
