import { expect } from '@playwright/test';
 export class ProductPageClass{
    constructor(page){
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
        this.CartButtons = page.locator('.btn_inventory');
        this.cartIcon = page.locator('.shopping_cart_link');
 
    }


    async addFirstProductToCart(){
        await this.CartButtons.first().click();

        const cartText = await this.page.locator('.shopping_cart_badge').textContent();

        if (cartText === '1') {
        console.log('First product added to cart successfully!');
        } else {
          console.log('Product not added to cart successfully!');

        }

        await expect(this.CartButtons.first()).toHaveText('Remove');
         console.log(' Button changed to Remove  Product added!');

    }





    async atToCartCleckLoop(indexs){
        for (const i of indexs){
            await this.CartButtons.nth(i).click();
            console.log(`Product ${i + 1} added to cart`)
        }
    }

    async openCart(){
        await this.cartIcon.click();
    }

}