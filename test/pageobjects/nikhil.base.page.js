module.exports = class BasePage {
    async waitForElement(selector) {
      await $(selector).waitForExist({ timeout: 5000 });
    }
   
    async clickElement(selector) {
      await this.waitForElement(selector);
      await $(selector).click();
    }
   
    async getText(selector) {
      await this.waitForElement(selector);
      return await $(selector).getText();
    }
   
    async isDisplayed(selector) {
      await this.waitForElement(selector);
      return await $(selector).isDisplayed();
    }
  };