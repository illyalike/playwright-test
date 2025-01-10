import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/", {
    waitUntil: "load",
  });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Play/);
});

test("Expect Test", async ({ page }) => {
  const value_2 = {
    prop: 1,
    prop2: {
      prop: 3,
      prop2: {
        prop: 4,
      },
    },
    prop3: {
      name: "Illia",
      surname: "Yablonskyi1",
    },
  };
  const value = {
    prop: 2,
    prop2: {
      prop: 3,
      prop2: {
        prop: 4,
      },
    },
  };
  await page.pause();
  expect(value.prop).toStrictEqual(expect.any(Number));
  expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1]));
  expect.soft(value_2.prop3).toEqual({
    name: expect.stringMatching(/[A-Za-z]/),
    surname: expect.stringMatching(/[A-Za-z]\d+/),
  });
  expect([1, 2, 3]).not.toEqual(expect.arrayContaining([5, 4]));
  expect("Hello Illia").toEqual(expect.stringContaining("Illia"));
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect.soft(page).toHaveTitle(/play/i);

  // Click the get started linkasdf.
  // await ;

  console.log("Test");
  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toContainText("started");

  await page.getByRole("link", { name: "Get Started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
  await expect(page.locator("#introduction")).toHaveClass(/anchor/);

  await page.goBack();

  await page
    .locator(".row div")
    .filter({ hasText: /no limits/i })
    .click();

  await expect(
    page.locator(".footer__col").first().getByRole("link")
  ).toHaveText([
    "Getting started",
    "Playwright Training",
    "Learn Videos",
    "Feature Videos",
  ]);

  await expect(page.locator(".col--6")).toHaveCount(9);

  await page.getByRole("img").and(page.getByAltText("Outlook")).click();

  // await //expect(page.getByLabel(/main/i)).toBeInViewport;
});

test("test bukovel24", async ({ page }) => {
  await page.goto("https://bukovel24.com/");

  await page.frameLocator("[title='reCAPTCHA']").locator("body").click();

});

test.describe;
