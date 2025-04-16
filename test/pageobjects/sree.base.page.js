export default class BasePage {
  async waitForElement(locator) {
    await $(locator).waitForDisplayed({ timeout: 5000 });
  }
 
  async clickElement(locator) {
    await this.waitForElement(locator);
    await $(locator).click();
  }
 
  async setInput(locator, value) {
    await this.waitForElement(locator);
    await $(locator).setValue(value);
  }
 
  async getText(locator) {
    await this.waitForElement(locator);
    return await $(locator).getText();
  }
}