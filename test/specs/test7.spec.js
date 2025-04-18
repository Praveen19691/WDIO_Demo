import loginPage from "../pageobjects/login.page";
import CartPage from "../pageobjects/cart.page";
import CheckoutPage from "../pageobjects/checkout.page";
import { expect } from "chai";

describe('Testcase 7: Adding 3 products and checkout', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login();
    });
    it('Adding 3 products to cart and validating it', async () => {
        await CartPage.addToCartProducts();
        const cartCount = await CartPage.validateCartItems();
        expect(parseInt(cartCount)).to.equal(3);
    });
    it('Checking is cart visible', async () => {   
        await CartPage.displayCart();
        const cartDisplayed = await CartPage.isCartVisible();
        expect(cartDisplayed).to.be.true;
    });
    it('Now checkout page', async () => {
        await CheckoutPage.checkoutPage();
        const checkoutPageDisplayed = await CheckoutPage.ischeckoutPageVisible();
        expect(checkoutPageDisplayed).to.be.true;
    });
    it('Filling the form and going to final checkout', async () => {
        await CheckoutPage.fillTheForm();
        await CheckoutPage.clickContinue();
        const FinalCheckoutVisible = await CheckoutPage.isFinalCheckoutVisible();
        expect(FinalCheckoutVisible).to.be.true;
    });
});