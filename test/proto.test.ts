import "jest";

declare global {
  namespace jest {
    interface Matchers<R> {
      toHavePrototype(a: any): R;
    }
  }
}

expect.extend({
  toHavePrototype(received, object) {
    const pass = Object.getPrototypeOf(received) === object.prototype;
    if (pass) {
      return {
        pass,
        message: `expected ${received} not to have ${object} as the prototype`,
      };
    } else {
      return {
        pass,
        message: `expected ${received} to have ${object} as the prototype`,
      };
    }
  },
});

test("Function class is instance of Function", () => {
  expect(Function).toHavePrototype(Function);
  expect(Function).toBeInstanceOf(Function);
});

test("Object class is instance of Function", () => {
  expect(Object).toHavePrototype(Function);
  expect(Object).toBeInstanceOf(Function);
});

test("String class is instance of Function", () => {
  expect(String).toHavePrototype(Function);
  expect(String).toBeInstanceOf(Function);
});

test("object literal type", () => {
  expect({}).toHavePrototype(Object);
  expect({}).toBeInstanceOf(Object);
});

test("string literal type", () => {
  expect("").toHavePrototype(String);
  expect("").not.toBeInstanceOf(String);
  expect(typeof "").toEqual("string");
});
