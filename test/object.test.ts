import "../src/object";

test("Function prototype has extension method", () => {
  expect(Object.prototype).toHaveProperty("map");
});

type ValueOf<T extends {}> = T[keyof T];

test(`{foo: 0} ==> {FOO: 1}`, () => {
  const o = { foo: 0 };
  const f = ([key, value]: [string, ValueOf<typeof o>]) =>
    <[string, number]>[key.toUpperCase(), value + 1];
  expect(o.map(f)).toStrictEqual({ FOO: 1 });
});

test(`{foo: 0} ==> {foo1: 1}`, () => {
  const o = { foo: 0 };
  const f = ([key, value]: [string, ValueOf<typeof o>]) => <[string, number]>[key + 1, value + 1];
  expect(o.map(f)).toStrictEqual({ foo1: 1 });
});
