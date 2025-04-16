import BasePage from './base.page.js';
import locators from './locators.js';
 
class HomePage extends BasePage {
  get addToCartButtons() {
    return $$(locators.homePage.addToCartButtons);
  }
 
  get cartCount() {
    return $(locators.homePage.cartCount);
  }
 
  get cartLink() {
    return $(locators.homePage.cartLink);
  }
 
  async addItemsToCart(count = 3) {
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons[i].click();
    }
  }
 
  async goToCart() {
    await this.cartLink.click();
  }
}
 
export default new HomePage();