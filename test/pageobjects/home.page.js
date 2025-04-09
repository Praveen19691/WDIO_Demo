import BasePage from './base.page.js';
import { HomeLocators } from './locators.js';
import { TIMEOUT } from './constants.js';

class HomePage extends BasePage {
    get inventoryItems() { return $$(HomeLocators.inventoryItems); }
    get productNames() { return $$(HomeLocators.productName); }
    get productPrices() { return $$(HomeLocators.productPrice); }
    get productDescriptions() { return $$(HomeLocators.productDescription); }
    get addToCartButtons() { return $$(HomeLocators.addToCartButtons); }
    get sortDropdown() { return $(HomeLocators.sortDropdown); }
    get cartBadge() { return $(HomeLocators.cartBadge); }
    get cartIcon() { return $(HomeLocators.cartIcon); }

    async getProductPricesAsNumbers() {
        await browser.waitUntil(
            async () => (await this.productPrices).length > 0,
            { timeout: TIMEOUT }
        );
        const prices = await this.getElementsText(this.productPrices);
        return prices.map(price => parseFloat(price.replace('$', '')));
    }

    async getProductNamesText() {
        await browser.waitUntil(
            async () => (await this.productNames).length > 0,
            { timeout: TIMEOUT }
        );
        return await this.getElementsText(this.productNames);
    }

    async selectSortOption(value) {
        await this.sortDropdown.waitForDisplayed({ timeout: TIMEOUT });
        await this.sortDropdown.selectByAttribute('value', value);
        await browser.pause(500);
    }

    async validateProductsDetails() {
        const items = await this.inventoryItems;
    
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
    
            await item.waitForDisplayed({ timeout: TIMEOUT });
    
            const name = await item.$(HomeLocators.productName);
            const desc = await item.$(HomeLocators.productDescription);
            const price = await item.$(HomeLocators.productPrice);
            const addToCart = await item.$('button');
    
            await name.waitForDisplayed({ timeout: TIMEOUT });
            await desc.waitForDisplayed({ timeout: TIMEOUT });
            await price.waitForDisplayed({ timeout: TIMEOUT });
            await addToCart.waitForDisplayed({ timeout: TIMEOUT });
    
            const productName = await name.getText();
            const productDesc = await desc.getText();
            const productPrice = await price.getText();
            const addToCartText = await addToCart.getText();
            const isAddToCartVisible = await addToCart.isDisplayed();
    
            console.log(`\n--- Product Card ${i + 1} ---`);
            console.log(`Name       : ${productName}`);
            console.log(`Description: ${productDesc}`);
            console.log(`Price      : ${productPrice}`);
            console.log(`Add to Cart Button Visible: ${isAddToCartVisible}`);
            console.log(`Button Text: ${addToCartText}`);
    
            const allVisible = await Promise.all([
                name.isDisplayed(),
                desc.isDisplayed(),
                price.isDisplayed(),
                addToCart.isDisplayed()
            ]);
    
            if (allVisible.includes(false)) return false;
        }
    
        return true;
    }
    

    async addProductsToCart(...products) {
        const buttons = await this.addToCartButtons.forEach(async button => {
            await button.waitForDisplayed({ timeout: TIMEOUT })
        })
        for (let i of products) {
            await buttons[i].waitForClickable({ timeout: TIMEOUT });
            await buttons[i].click();
            await browser.pause(500);
        }
    }

    async getCartCount() {
        await this.cartBadge.waitForDisplayed({ timeout: TIMEOUT });
        return await this.cartBadge.getText();
    }

    async areRemoveButtonsVisible(indices = []) {
        const buttons = await this.addToCartButtons;
        for (let i of indices) {
            await buttons[i].waitForDisplayed({ timeout: TIMEOUT });
            const buttonText = await buttons[i].getText();
            if (buttonText !== 'Remove') return false;
        }
        return true;
    }

    async goToCart() {
        await this.cartIcon.waitForClickable({ timeout: TIMEOUT });
        await this.cartIcon.click();
    }

    async isAddToCartVisible(index) {
        const buttons = await this.addToCartButtons;
        await buttons[index].waitForDisplayed({ timeout: TIMEOUT });
        return await buttons[index].isDisplayed();
    }

    async verifyPricesSortedAsc() {
        const prices = await this.getProductPricesAsNumbers();
        const sorted = [...prices].sort((a, b) => a - b);
        return JSON.stringify(prices) === JSON.stringify(sorted);
    }

    async verifyPricesSortedDesc() {
        const prices = await this.getProductPricesAsNumbers();
        const sorted = [...prices].sort((a, b) => b - a);
        return JSON.stringify(prices) === JSON.stringify(sorted);
    }

    async verifyNamesSortedAsc() {
        const names = await this.getProductNamesText();
        const sorted = [...names].sort();
        return JSON.stringify(names) === JSON.stringify(sorted);
    }

    async verifyNamesSortedDesc() {
        const names = await this.getProductNamesText();
        const sorted = [...names].sort().reverse();
        return JSON.stringify(names) === JSON.stringify(sorted);
    }
}

export default new HomePage();
