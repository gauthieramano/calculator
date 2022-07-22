import { Action, compute, round } from "./utils";

describe("utils", () => {
  /* ******************************************************
   *                       compute                        *
   ********************************************************/

  describe("compute", () => {
    test("1 + 2 equals 3", () => {
      // GIVEN
      const args = [Action.Add, 1, 2] as const;

      // WHEN
      const result = compute(...args);

      // THEN
      expect(result).toEqual(3);
    });

    test("1 + -3 equals -2", () => {
      // GIVEN
      const args = [Action.Add, 1, -3] as const;

      // WHEN
      const result = compute(...args);

      // THEN
      expect(result).toEqual(-2);
    });

    test("1 - 3 equals -2", () => {
      // GIVEN
      const args = [Action.Substract, 1, 3] as const;

      // WHEN
      const result = compute(...args);

      // THEN
      expect(result).toEqual(-2);
    });

    test("3 * 4 equals 12", () => {
      // GIVEN
      const args = [Action.Multiply, 3, 4] as const;

      // WHEN
      const result = compute(...args);

      // THEN
      expect(result).toEqual(12);
    });

    test("3 / 4 equals 0.75", () => {
      // GIVEN
      const args = [Action.Divide, 3, 4] as const;

      // WHEN
      const result = compute(...args);

      // THEN
      expect(result).toEqual(0.75);
    });

    // Consider JavaScript weirdness
    test("0.1 + 0.2 equals 0.30000000000000004", () => {
      // GIVEN
      const args = [Action.Add, 0.1, 0.2] as const;

      // WHEN
      const result = compute(...args);

      // THEN
      expect(result).toEqual(0.30000000000000004);
    });
  });

  /* ******************************************************
   *                        round                         *
   ********************************************************/

  describe("round", () => {
    test("123456789012 doesn't change", () => {
      // GIVEN
      const arg = -12345678901;

      // WHEN
      const result = round(arg);

      // THEN
      expect(result).toEqual(-12345678901);
    });

    test("-12345678901 doesn't change", () => {
      // GIVEN
      const arg = -12345678901;

      // WHEN
      const result = round(arg);

      // THEN
      expect(result).toEqual(-12345678901);
    });

    test("12345678901234 doesn't change", () => {
      // GIVEN
      const arg = 12345678901234;

      // WHEN
      const result = round(arg);

      // THEN
      expect(result).toEqual(12345678901234);
    });

    test("12345678901234.5 becomes 12345678901235", () => {
      // GIVEN
      const arg = 12345678901234.5;

      // WHEN
      const result = round(arg);

      // THEN
      expect(result).toEqual(12345678901235);
    });

    test("123456.789012345 becomes 123456.78901", () => {
      // GIVEN
      const arg = 123456.789012345;

      // WHEN
      const result = round(arg);

      // THEN
      expect(result).toEqual(123456.78901);
    });

    test("-123456.789992345 becomes -123456.79", () => {
      // GIVEN
      const arg = -123456.789992345;

      // WHEN
      const result = round(arg);

      // THEN
      expect(result).toEqual(-123456.79);
    });
  });
});
