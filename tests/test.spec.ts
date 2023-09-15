import { test, expect } from "@playwright/test";

test.describe.serial("Game Tests", () => {
  test("Verify 1=1", async ({ page }) => {
    await expect(1).toBe(1);
  });
});
