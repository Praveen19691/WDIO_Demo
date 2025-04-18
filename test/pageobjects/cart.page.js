import BasePage from './base.page.js';
import { CartLocators } from './locators.js';
import { cartPage } from './locators.js';

class CartPage extends BasePage {
    get cartItems() { return $$(CartLocators.cartItems); }
    get removeButtons() { return $$(CartLocators.removeButtons); }
    get continueShoppingButton() { return $(CartLocators.continueShopping); }
    get productID1() { return $(cartPage.productID1); }
    get productID2() { return $(cartPage.productID2); }
    get productID3() { return $(cartPage.productID3); }
    get cartTitle() { return $(cartPage.cartTitle); }
    get cartBadge() { return $(cartPage.cartBadge); }
    get cartButton() { return $(cartPage.cartButton); }

    async displayCart() {
        await this.cartButton.waitForClickable({ timeout: 5000});
        await this.cartButton.click();
        await browser.pause(2000);
    }

    get productElemnts() {
        return [
            this.productID1, 
            this.productID2, 
            this.productID3
        ];
    }

    async addToCartProducts() {
        const products = this.productElemnts;
        for(const product of products) {
            await product.waitForClickable({ timeout: 5000 });
            await product.click();
            await browser.pause(500);
        }
        await browser.pause(500);
    }

    async isCartVisible() {
        await this.cartTitle.waitForDisplayed({ timeout: 5000 });
        return await this.cartTitle.isDisplayed();
    } 

    async validateCartItems() {
        await this.cartBadge.waitForDisplayed({ timeout: 5000 });
        return this.cartBadge.getText();
    }

    async removeProductByIndex(index) {
        const buttons = await this.removeButtons;
        if (buttons[index]) {
            await buttons[index].click();
        }
    }

    async isProductRemoved(index) {
        const items = await this.cartItems;
        return !items[index];
    }
    
    async continueShopping() {
        await this.click(this.continueShoppingButton);
    }

    async areProductsPresent(indices = []) {
        const items = await this.cartItems;
        return indices.every(index => items[index]);
    }

}

export default new CartPage();
