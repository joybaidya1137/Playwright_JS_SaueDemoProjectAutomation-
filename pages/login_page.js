import { expect } from "playwright/test";

 export class LoginPageClass{
  
   constructor(page){
    
      this.page = page;
      this.usernameInput =page.locator('#user-name');
      this.passwordInput =page.locator('#password');
      this.loginButton =page.locator('#login-button');
   }

    async LoginUrl(){
      await this.page.goto('https://www.saucedemo.com/');
   }

   async homePageTitle(){
      await expect(this.page).toHaveTitle('Swag Labs');
      console.log("Home page title verified successfully");
   }

   async Login(username, password){
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();

   }

   async homePageTitle(){
      await expect(this.page).toHaveTitle('Swag Labs');
      console.log("Home page title verified successfully");
   }


   async verifyProductPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(this.page).toHaveTitle('Swag Labs');
    console.log(" Product page URL & Title verified successfully!");

   }

}