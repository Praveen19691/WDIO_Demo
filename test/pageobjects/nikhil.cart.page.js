const BasePage = require('./nikhil.base.page');
const locators = require('./nikhil.locators').cart;
 
class CartPage extends BasePage {
  get checkoutBtn() {
    return $(locators.checkoutBtn); // Make sure locator key is correct
  }
 
  get continueShoppingBtn() {
    return $(locators.continueShopping);
  }
 
  async clickCheckout() {
    await this.checkoutBtn.waitForDisplayed({ timeout: 10000 });
    await this.checkoutBtn.waitForClickable({ timeout: 10000 });
await this.checkoutBtn.click();
  }
 
  async getCartItems() {
    return await $$(locators.cartItem);
  }
 
  async removeItemByIndex(index) {
    const removeBtns = await $$(locators.removeBtn);
    if (index >= removeBtns.length) {
      throw new Error(`Cannot remove item. Index ${index} is out of range. Found ${removeBtns.length} remove buttons.`);
    }
    await removeBtns[index].waitForClickable({ timeout: 5000 });
    await removeBtns[index].click();
  }
}
 
module.exports = new CartPage();