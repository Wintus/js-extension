import "../src/extend";

test("Function prototype has extend method", () => {
  expect(Function.prototype).toHaveProperty("extend");
});
