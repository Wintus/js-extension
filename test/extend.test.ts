import "../src/extend";

test("Function prototype has extension method", () => {
  expect(Function.prototype).toHaveProperty("extension");
});
