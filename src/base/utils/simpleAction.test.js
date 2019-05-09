import simpleAction from './simpleAction';

describe('Util: simpleAction', () => {
  it('simpleAction exist', () => {
    expect(simpleAction).toBeDefined();
  });

  it('simpleAction is a function', () => {
    expect(simpleAction).toBeInstanceOf(Function);
  });

  it("should return a object with 'type' and 'payload' correct", () => {
    const type = 'type';
    const payload = { a: 1, b: 2 };

    expect(simpleAction(type)(payload)).toEqual({
      type: 'type',
      payload: {
        a: 1,
        b: 2,
      },
    });
  });
});
