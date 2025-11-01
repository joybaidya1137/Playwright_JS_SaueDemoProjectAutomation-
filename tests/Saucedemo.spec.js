import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('URL and Home page title verification', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});


test('Verify products on inventory page', async ({ page }) => {
  const productNames = await page.locator('//div[@class="inventory_item_name " and @data-test="inventory-item-name"]').allTextContents();
  expect(productNames.length).toBe(6);
  expect(productNames).toContain('Sauce Labs Backpack');
  expect(productNames).toContain('Sauce Labs Fleece Jacket');
  expect(productNames).toContain('Sauce Labs Onesie');
});


test('Add products to cart and verify cart count', async ({ page }) => {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
  await page.locator('#add-to-cart-sauce-labs-onesie').click();

  const cartBadge = page.locator('.shopping_cart_badge');
  await cartBadge.waitFor({ state: 'visible', timeout: 10000 });
  await expect(cartBadge).toHaveText('3');
});


test('Remove products from cart and verify cart count', async ({ page }) => {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
  await page.locator('#add-to-cart-sauce-labs-onesie').click();

  await page.locator('#remove-sauce-labs-backpack').click();

  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('2');
});



test('Navigate to cart and verify items', async ({ page }) => {
  await page.locator('//a[@class="shopping_cart_link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

});

test('Proceed to checkout from cart', async ({ page }) => {
  await page.locator('#checkout').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});

test('Checkout information verification', async ({ page }) => {
  await page.fill('#first-name', 'Joy');
  await page.fill('#last-name', 'Baidya');
  await page.fill('#postal-code', '12345');

  await page.locator('//input[@type="submit" and @value="Continue"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await expect(page.locator('[class="title"]')).toHaveText('Checkout: Overview');
 
});


test('Finish checkout and verify order completion', async ({ page }) => { 
  await page.locator('#finish').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(page.locator('[class="title"]')).toHaveText('Checkout: Complete!');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});


test('back to products page', async ({ page }) => {
  await page.locator('#back-to-products').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
