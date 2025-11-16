import test from "node:test";
import assert from "node:assert";
import { factorial } from "./index.js";

test("1! = 1", () => {
  assert.equal(factorial(1), 1);
});

test("5! = 120", () => {
  assert.equal(factorial(5), 120);
});
