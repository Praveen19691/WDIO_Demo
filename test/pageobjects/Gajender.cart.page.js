import { expect } from "chai";
import BasePage from "./base.page";
import locators from "./pageobjects/Gajender.locators";

class CartPage extends BasePage {
    get productID1() {
        return $(locators.cartPage.productID1);
    }
    get productID2() {
        return $(locators.cartPage.productID2);
    }
    get productID3() {
        return $(locators.cartPage.productID3);
    }
    get cartTitle() {
        return $(locators.cartPage.cartTitle);
    }
    get productId_remove() {
        return $(locators.cartPage.productId_remove);
    }
    get cartBadge() {
        return $(locators.cartPage.cartBadge);
    }
    get cartButton() {
        return $(locators.cartPage.cartButton);
    }

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

    async removeProduct() {
        await this.productId_remove.waitForClickable({ timeout: 5000 });
        await this.productId_remove.click();
    }
}
export default new CartPage;