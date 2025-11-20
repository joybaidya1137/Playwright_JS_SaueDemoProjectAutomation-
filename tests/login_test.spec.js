
import{test, expect} from '@playwright/test';
import { LoginPageClass } from '../pages/login_page.js/'
//import { ProductPageClass } from '../pages/product_page.js';

let login_pageObj1

test.beforeEach(async({page})=>{
 login_pageObj1 = new LoginPageClass(page);

 
 await login_pageObj1.LoginUrl();
 await login_pageObj1.Login('standard_user', 'secret_sauce');
})

test('User can successfull login1', async({ page }) => {

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle('Swag Labs');
    console.log(" Product page URL & Title verified successfully!");
});


test('User can successfull login2', async({ page }) => {
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle('Swag Labs1');
    console.log(" Product page URL & Title verified successfully!");
});


test('User can successfull login3', async({ page }) => {

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html2');
  await expect(page).toHaveTitle('Swag Labs');
  console.log(" Product page URL & Title verified successfully!");
});

