const { expect } = require('chai');
 
const loginPage = require('../pageobjects/nikhil.login.page');
const homePage = require('../pageobjects/nikhil.home.page');
const cartPage = require('../pageobjects/nikhil.cart.page');
const checkoutPage = require('../pageobjects/nikhil.checkout.page');
 
describe('SauceDemo End-to-End Test - Test Case 9', () => {
 
  let selectedProductNames = [];
 
  it('should login successfully', async () => {
await browser.url('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await browser.getUrl()).to.include('inventory');
  });
 
  it('should add 3 products to cart', async () => {
    for (let i = 0; i < 3; i++) {
      await homePage.addToCartByIndex(i);
      // Wait for cart count to reflect the correct number
      await browser.pause(500);
      selectedProductNames.push(await homePage.getProductNameByIndex(i));
    }
 
    const cartCount = await homePage.getCartCount();
    expect(cartCount).to.equal('3');
  });
 
  it('should navigate to cart and verify products', async () => {
await homePage.cartIcon.click();
 
    const cartItems = await cartPage.getCartItems();
    expect(cartItems.length).to.equal(3);
  });
 
  it('should continue to checkout info page', async () => {
    await cartPage.clickCheckout();
    await checkoutPage.waitForCheckoutPage();
expect(await checkoutPage.firstName.isDisplayed()).to.be.true;
  });
 
  it('should fill checkout info and verify products on summary page', async () => {
    await checkoutPage.fillCheckoutForm('Nikhil', 'Sai', '500084');
 
    const summaryNames = await checkoutPage.getSummaryItemNames();
    expect(summaryNames).to.have.members(selectedProductNames);
  });
 
});