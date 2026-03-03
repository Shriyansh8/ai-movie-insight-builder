import { isValidImdbID } from "../src/utils/validation";

describe("IMDb ID Validation", () => {
  test("valid IMDb ID", () => {
    expect(isValidImdbID("tt0133093")).toBe(true);
  });

  test("invalid IMDb ID - missing tt", () => {
    expect(isValidImdbID("0133093")).toBe(false);
  });

  test("invalid IMDb ID - wrong format", () => {
    expect(isValidImdbID("wrongID")).toBe(false);
  });
});