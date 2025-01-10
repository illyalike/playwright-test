import { test, expect } from "@playwright/test";

test("test blog url and title", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io");

  await page.getByRole("button", { name: "About me" }).click();

  await expect.soft(page).toHaveURL(/about1234/);

  await expect(page).toHaveTitle("About author | IT Blog by Ilarion Halushka");

  await expect(page.locator(".back-to-articles-btn")).toHaveText(
    "<- Back to the list of articles"
  );
});

test("nav to home page from about page", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io");

  await page.getByRole("button", { name: "About me" }).click();

  await page.getByRole("button", { name: "Home" }).click();

  await expect(page).not.toHaveURL(/about/);

  await expect(page).not.toHaveTitle(
    "About author | IT Blog by Ilarion Halushka"
  );
});

test("check the search input are visiable and editable", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io");

  await expect(page.locator('[aria-label="search..."]')).toBeVisible();
  await expect(page.locator('[aria-label="search..."]')).toBeEnabled();
  await expect(page.locator('[aria-label="search..."]')).toBeEditable();
});
