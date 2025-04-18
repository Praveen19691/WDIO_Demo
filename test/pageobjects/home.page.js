const { expect } = require('chai');
const BasePage = require('./base.page');
const locators = require('../locators').home;
 
class HomePage extends BasePage {
  get products() {
    return $$(locators.productCard);
  }
 
  get sortDropdown() {
    return $(locators.sortDropdown);
  }
 
  get cartIcon() {
    return $(locators.cartIcon);
  }
 
  get cartCountBadge() {
    return $(locators.cartCount);
  }
 
  async addToCartByIndex(index) {
    const products = await this.products;
    const addToCartBtn = await products[index].$(locators.addToCartBtn);
await addToCartBtn.click();
  }
 
  async getCartCount() {
    const exists = await this.cartCountBadge.isExisting();
    if (!exists) return '0';
    const countText = await this.cartCountBadge.getText();
    return countText.trim();
  }
 
  async getAddOrRemoveText(index) {
    const products = await this.products;
    if (index >= products.length) {
      throw new Error(`Index ${index} out of bounds. Found ${products.length} products.`);
    }
    const btn = await products[index].$(locators.addToCartBtn);
    await btn.waitForDisplayed({ timeout: 5000 });
    return await btn.getText();
  }
 
  async validateProductCards() {
    const products = await this.products;
    for (let product of products) {
expect(await product.$(locators.name).isDisplayed()).to.be.true;
expect(await product.$(locators.desc).isDisplayed()).to.be.true;
expect(await product.$(locators.price).isDisplayed()).to.be.true;
expect(await product.$(locators.addToCartBtn).isDisplayed()).to.be.true;
    }
  }
 
  async sortBy(optionText) {
    await this.sortDropdown.selectByVisibleText(optionText);
  }
 
  async getAllPrices() {
    const products = await this.products;
    const prices = [];
    for (let product of products) {
      const priceText = await product.$(locators.price).getText();
      const numericPrice = parseFloat(priceText.replace('$', ''));
      prices.push(numericPrice);
    }
    return prices;
  }
 
  async getAllNames() {
    const products = await this.products;
    const names = [];
    for (let product of products) {
const nameText = await product.$(locators.name).getText();
      names.push(nameText);
    }
    return names;
  }
 
  async getProductNameByIndex(index) {
    const products = await this.products;
    if (index >= products.length) {
      throw new Error(`Index ${index} out of bounds. Found ${products.length} products.`);
    }
return await products[index].$(locators.name).getText();
  }
}
 
module.exports = new HomePage();