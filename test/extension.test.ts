import "../extension";

test("Function prototype has extension method", () => {
  expect(Function.prototype).toHaveProperty("extension");
});
