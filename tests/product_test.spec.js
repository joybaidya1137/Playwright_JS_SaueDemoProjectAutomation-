
import{test, expect} from '@playwright/test';
import { LoginPageClass } from '../pages/login_page.js/'
import { ProductPageClass } from '../pages/product_page.js';

test('Product Page test', async({page})=>{
 const login_pageObj1 = new LoginPageClass(page);  
  await login_pageObj1.LoginUrl();
  await login_pageObj1.Login('standard_user', 'secret_sauce');

 const product_pageObj1 = new ProductPageClass(page);

 await product_pageObj1.addFirstProductToCart();
 

 });