import BasePage from './sree.base.page.js';
import selectors from '../locators/sree.selectors.js';

class CartPage extends BasePage {
  
    get cartItems() {return $$(selectors.cart.cartItems); }
    get continueShoppingBtn() {return $(selectors.cart.continueShoppingBtn); }

    async removeFromCart(product) {
        const removeBtn = await product.$(selectors.cart.removeFromCrtBtn);
        await this.waitForElement(removeBtn);
        await removeBtn.click();
    }
    async isOnCartPage() {
        const url = await browser.getUrl();
        console.log(`Current URL: ${url}`);
        return url.includes('cart.html');
      }
    async continueShopping() {
        const continueShoppingButton = await this.continueShoppingBtn;
        await this.waitForElement(continueShoppingButton);
        await continueShoppingButton.click();
    }
    
    
}

export default new CartPage();
