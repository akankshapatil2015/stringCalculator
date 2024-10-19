const add = require("./calculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test('returns 1 when the string is "1"', () => {
  expect(add("1")).toBe(1);
});

test('returns 3 when the string is "1,2"', () => {
  expect(add("1,2")).toBe(3);
});
