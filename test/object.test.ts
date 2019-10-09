import "../src/object";

test("Function prototype has extended method", () => {
  expect(Object.prototype).toHaveProperty("map");
});

type ValueOf<T extends {}> = T[keyof T];

test(`{foo: 0} ==> {FOO: 1}`, () => {
  const o = { foo: 0 };
  type Foo = [string, ValueOf<typeof o>];
  const f = ([key, value]: Foo): Foo => [key.toUpperCase(), value + 1];
  expect(o.map(f)).toStrictEqual({ FOO: 1 });
});

test(`{foo: 0} ==> {foo1: 1}`, () => {
  const o = { foo: 0 };
  type Foo = [string, ValueOf<typeof o>];
  const f = ([key, value]: Foo): Foo => [key + 1, value + 1];
  expect(o.map(f)).toStrictEqual({ foo1: 1 });
});
