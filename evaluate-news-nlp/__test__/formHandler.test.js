import { handleSubmit } from '../src/client/js/formHandler'

describe("Testing the form handler functionality", () => {
    test("Testing the handleSubmit() function", () => {
      expect(handleSubmit).toBeDefined();
    });
});
