import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page";
import { PRODUCTS, ERROR_MESSAGES } from "../pageobjects/constants";
import { expect } from "chai";

describe('Testcase 6: Complete Checkout Flow and Error Message Validation', () => {
    it('Should perform full flow and validate error message on empty continue', async () => {
        // Step 1: Login
        await LoginPage.open();
        await LoginPage.login();

        // Step 2: Add products
        await HomePage.addProductsToCart(PRODUCTS.firstProduct, PRODUCTS.secondProduct);

        // Step 3: Go to Cart
        await HomePage.goToCart();

        // Step 4: Remove second product
        await CartPage.removeProductByIndex(PRODUCTS.secondProduct);
        const isSecondProductRemoved = await CartPage.isProductRemoved(PRODUCTS.secondProduct);
        expect(isSecondProductRemoved).to.be.true;

        // Step 5: Click on checkout
        await CartPage.checkout();
        expect(await CheckoutPage.isCheckoutFormVisible()).to.be.true;

        // Step 6: Click continue without entering any info
        await CheckoutPage.clickContinue();

        // Step 7: Get error text and validate
        const errorText = await CheckoutPage.getErrorText();
        console.log("Error Message Displayed:", errorText);

        expect(errorText).to.equal(ERROR_MESSAGES.firstNameRequired);
    });
});