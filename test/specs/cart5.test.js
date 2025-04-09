import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';
import { PRODUCTS } from '../pageobjects/constants.js';
import { expect } from 'chai';

describe('Remove product from cart and continue shopping', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login();
        await HomePage.addProductsToCart(PRODUCTS.firstProduct, PRODUCTS.secondProduct);
        await HomePage.goToCart();
    });

    it('should remove the second product', async () => {
        await CartPage.removeProductByIndex(1);
        const isSecondProductRemoved = await CartPage.isProductRemoved(1);
        expect(isSecondProductRemoved).to.be.true;
    });

    it('should continue shopping and see "Add to cart" again', async () => {
        await CartPage.continueShopping();
        const isAddToCartVisible = await HomePage.isAddToCartVisible(1);
        expect(isAddToCartVisible).to.be.true;
    });
});
