const rsg = require(".");

it("throws a TypeError if specified length is not a whole number", () => {
  expect(() => rsg()).toThrow(TypeError);
  expect(() => rsg(undefined)).toThrow(TypeError);
  expect(() => rsg(null)).toThrow(TypeError);

  expect(() => rsg(true)).toThrow(TypeError);
  expect(() => rsg(false)).toThrow(TypeError);

  expect(() => rsg(-Infinity)).toThrow(TypeError);
  expect(() => rsg(-1)).toThrow(TypeError);
  expect(() => rsg(1.3)).toThrow(TypeError);

  expect(() => rsg("1")).toThrow(TypeError);
  expect(() => rsg("a")).toThrow(TypeError);

  expect(() => rsg([])).toThrow(TypeError);
  expect(() => rsg({})).toThrow(TypeError);
});

test("generated string is of specified length", () => {
  expect(rsg(0).length).toBe(0);
  expect(rsg(5).length).toBe(5);
  expect(rsg(1e5).length).toBe(1e5);
});

test("generated string satisfies specified constraints", () => {
  expect(rsg(6, { lowercase: true })).toMatch(/^[a-z]+$/);
  expect(rsg(6, { uppercase: true })).toMatch(/^[A-Z]+$/);
  expect(rsg(6, { digits: true })).toMatch(/^\d+$/);

  expect(rsg(6, { lowercase: true, uppercase: true })).toMatch(/^[A-Za-z]+$/);
  expect(rsg(6, { lowercase: true, uppercase: true, digits: true })).toMatch(
    /^[A-Za-z0-9]+$/
  );
});
