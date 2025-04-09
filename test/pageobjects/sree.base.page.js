export default class BasePage {
    async open(path) {
      await browser.url(path);
    }
  
    async waitForElement(elem) {
      await elem.waitForDisplayed({ timeout: 10000 });
    }
  }
  