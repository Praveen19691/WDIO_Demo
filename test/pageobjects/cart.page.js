import BasePage from './base.page.js';
import { CartLocators } from './locators.js';

class CartPage extends BasePage {
    get cartItems() { return $$(CartLocators.cartItems); }
    get removeButtons() { return $$(CartLocators.removeButtons); }
    get continueShoppingButton() { return $(CartLocators.continueShopping); }
    get checkoutBtn() { return $(CartLocators.checkout); }

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

    async checkout() {
        await this.click(this.checkoutBtn);
    }

    async areProductsPresent(...indices) {
        const flatIndices = indices.flat();
    
        const items = await $$('.cart_item');
        return flatIndices.every(index => items[index]);
    }
    
}

export default new CartPage();
