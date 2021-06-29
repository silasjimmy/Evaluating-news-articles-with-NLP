import { checkForName } from '../src/client/js/nameChecker'

// Define the test
describe("Testing the url validation functionality", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForName).toBeDefined();
  });

  test("Testing with a valid url", () => {
    expect(checkForName("https://jestjs.io/docs/using-matchers")).toBe(true);
  });

  test("Testing with an invalid url", () => {
    expect(checkForName("hello")).toBe(false);
  });
});
