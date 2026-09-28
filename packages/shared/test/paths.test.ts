import { test, expect } from "vitest";
import { HEALTH_PATH } from "@pupside/shared/paths";

test("first test", () => {
  expect(HEALTH_PATH).toEqual("/healthz");
});
