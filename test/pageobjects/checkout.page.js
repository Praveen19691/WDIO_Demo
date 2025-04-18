const BasePage = require('./base.page');
const locators = require('../locators').checkout;
 
class CheckoutPage extends BasePage {
  get firstName() { return $(locators.firstName); }
  get lastName() { return $(locators.lastName); }
  get postalCode() { return $(locators.postalCode); }
  get continueBtn() { return $(locators.continueBtn); }
  get summaryItems() { return $$(locators.summaryItem); }
 
  async waitForCheckoutPage() {
    await this.firstName.waitForDisplayed({ timeout: 10000 });
  }
 
  async fillCheckoutForm(first, last, zip) {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('checkout-step-one'),
      {
        timeout: 10000,
        timeoutMsg: 'Checkout Step One page did not load in time'
      }
    );
 
    await this.firstName.waitForDisplayed({ timeout: 10000 });
    await this.firstName.setValue(first);
    await this.lastName.setValue(last);
    await this.postalCode.setValue(zip);
await this.continueBtn.click();
  }
 
  async getSummaryItemNames() {
    const names = [];
    const items = await this.summaryItems;
    for (let item of items) {
      const nameEl = await item.$('.inventory_item_name');
      const name = await nameEl.getText();
      names.push(name);
    }
    return names;
  }
}
 
module.exports = new CheckoutPage();