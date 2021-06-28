// To prevent regenerator runtime reference error
import regeneratorRuntime from "regenerator-runtime"

import { evaluateArticle } from '../src/client/js/articleEvaluator'

describe("Testing the API functionality", () => {
    test("Testing the evaluateArticle() function", () => {
      expect(evaluateArticle).toBeDefined();
    });
});
