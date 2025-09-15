import { expect, test } from "vitest";
import { useRandomNumberGenerator } from "./useRandomNumberGenerator.ts";

test("test useRandomNumberGenerator", () => {
  expect(useRandomNumberGenerator("param")).toBe("result");
});
