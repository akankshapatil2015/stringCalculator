const add = require("./calculator");

// testing for empty string
test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// testing for one number
test('returns 1 when the string is "1"', () => {
  expect(add("1")).toBe(1);
});

// testing for two number
test('returns 3 when the string is "1,2"', () => {
  expect(add("1,2")).toBe(3);
});

// testing for any amount of number
test('returns 10 for "1,2,3,4"', () => {
  expect(add("1,2,3,4")).toBe(10);
});