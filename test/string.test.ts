import "../src/string";

test("Function prototype has extended method", () => {
  expect(String.prototype).toHaveProperty("codePoints");
});

test(`codepoints of 'ABC' = [65, 66, 67]`, () => {
  expect("ABC".codePoints()).toStrictEqual([65, 66, 67]);
});
