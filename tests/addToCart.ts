import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(`https://ilarionhalushka.github.io/jekyll-ecommerce-demo`);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByRole("button", { name: "Remove item" }).click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByRole("button", { name: "Back to store" }).click();
  await page.getByPlaceholder("Enter your name...").click();
  await page.getByPlaceholder("Enter your name...").fill("фафіва");
  await page.getByPlaceholder("Enter your email...").click();
  await page.getByPlaceholder("Enter your email...").press("CapsLock");
  await page.getByPlaceholder("Enter your email...").fill("email@email.com");
  await page.getByPlaceholder("Enter your message...").click();
  await page.getByPlaceholder("Enter your message...").fill("adsf");
  await page.getByRole("button", { name: "Send Message" }).click();
});
