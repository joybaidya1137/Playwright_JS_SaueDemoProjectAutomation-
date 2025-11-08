
import{test, expect} from '@playwright/test';
import { LoginPageClass } from '../pages/login_page.js/'
import { ProductPageClass } from '../pages/product_page.js';

test('User can successfull login', async({ page }) => {
 const login_pageObj1 = new LoginPageClass(page);
 await login_pageObj1.LoginUrl();
 await login_pageObj1.homePageTitle();
 await login_pageObj1.Login('standard_user', 'secret_sauce');

  await login_pageObj1.verifyProductPage();
// login call er verifyProductPage(); er modde diya kora jay and ay nihe derected diya kora jay 
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle('Swag Labs');
    console.log(" Product page URL & Title verified successfully!");
});

