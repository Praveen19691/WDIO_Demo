import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';
import { expect } from 'chai';

describe('Add products to cart and verify cart page', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login();
    });

    it('should add first two products and verify cart count', async () => {
        await HomePage.addProductsToCart([0, 1]);
        const cartCount = await HomePage.getCartCount();
        expect(parseInt(cartCount)).to.equal(2);

        const areButtonsUpdated = await HomePage.areRemoveButtonsVisible([0, 1]);
        expect(areButtonsUpdated).to.be.true;
    });

    it('should navigate to cart and verify added products', async () => {
        await HomePage.goToCart();
        const isProductPresent = await CartPage.areProductsPresent([0, 1]);
        expect(isProductPresent).to.be.true;
    });
});