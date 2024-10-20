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

// testing for new lines between numbers
test('returns 15 for "1\\n2\\n3\\n4\\n5"', () => {
  expect(add("1\n2\n3\n4\n5")).toBe(15);
});

//testing for different delimiters
test('returns 15 for "//***\\n1***2***3***4***5"', () => {
  expect(add("//***\n1***2***3***4***5")).toBe(15);
});

//negative numbers test
test("throws an exception for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test("throws an exception for multiple negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow(
    "Negative numbers not allowed: -2, -4"
  );
});