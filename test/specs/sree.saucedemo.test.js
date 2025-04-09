import loginPage from '../pageobjects/sree.login.page.js';
import homePage from '../pageobjects/sree.home.page.js';
import { assert, expect } from 'chai';
import cartPage from '../pageobjects/sree.cart.page.js';

describe('SauceDemo Tests', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await loginPage.open('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.open('https://www.saucedemo.com/inventory.html');
    expect(await homePage.isOnInventoryPage()).to.be.true;
  });

  it('Test Case 1: Validate product card details', async () => {
    expect(await homePage.areAllProductsValid()).to.be.true;
  });

  it('Test Case 2: Sort products by price', async () => {
    await homePage.selectSort('Price (low to high)');
    expect(await homePage.isProductSortedBy.price.asc()).to.be.true;
    await homePage.selectSort('Price (high to low)');
    expect(await homePage.isProductSortedBy.price.desc()).to.be.true;
  });

  it('Test Case 3: Sort products by name', async () => {
    await homePage.selectSort('Name (A to Z)');
    expect(await homePage.isProductSortedBy.name.asc()).to.be.true;
    await homePage.selectSort('Name (Z to A)');
    expect(await homePage.isProductSortedBy.name.desc()).to.be.true;
  });


  it('Test Case 4: Add to cart and validate cart', async () => {
    const products = await homePage.products;
    await homePage.addToCart(products[0]);
    await homePage.addToCart(products[1]);
    browser.refresh();
  
    expect(await homePage.getCartBadgeText()).to.equal('2');

    await homePage.openCart();
    expect(await cartPage.isOnCartPage()).to.be.true;

    const cartItems = await cartPage.cartItems
    expect(cartItems.length).to.equal(2);
  });

  it('Test Case 5: Remove item from cart', async () => { 
    await browser.refresh();

    const products = await homePage.products;
    await homePage.addToCart(products[0]);
    await homePage.addToCart(products[1]);
    await browser.refresh();
    expect(await homePage.getCartBadgeText()).to.equal('2');

    await homePage.openCart();
    expect(await cartPage.isOnCartPage()).to.be.true;

    const cartItems = await cartPage.cartItems
    expect(cartItems.length).to.equal(2);

    await cartPage.removeFromCart(cartItems[1]);
    expect(await homePage.getCartBadgeText()).to.equal('1');
    console.log(cartItems);

    await cartPage.continueShopping();
    expect(await homePage.isOnInventoryPage()).to.be.true;
    expect(await homePage.isAddToCartVisible(products[1])).to.be.true;
  });

});