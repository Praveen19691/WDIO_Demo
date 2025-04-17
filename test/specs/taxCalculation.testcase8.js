import { expect } from 'chai';
import HomePage from '../pageobjects/home.page.js';
import BasePage from '../pageobjects/base.page.js';
import locators from '../pageobjects/locators.js';

describe('Test Case 8 - Cart Flow', () => {
    it('Should validate item total and tax', async () => {
        await browser.url('https://www.saucedemo.com/');
        const base = new BasePage();
        await base.setInput(locators.loginPage.username, 'standard_user');
        await base.setInput(locators.loginPage.password, 'secret_sauce');
        await base.clickElement(locators.loginPage.loginButton);

        await HomePage.addItemsToCart(3);
        const cartCountText = await HomePage.cartCount.getText();
        expect(parseInt(cartCountText)).to.equal(3);

        await HomePage.goToCart();
        await base.clickElement(locators.cartPage.checkoutButton);

        await base.setInput(locators.checkoutPage.firstName, 'Arthur');
        await base.setInput(locators.checkoutPage.lastName, 'Morgan');
        await base.setInput(locators.checkoutPage.zipCode, '12345');
        await base.clickElement(locators.checkoutPage.continueButton);

        await browser.waitUntil(
            async () => await $(locators.summaryPage.itemTotal).isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Item total did not appear in time',
            }
        );

        const itemTotalText = await base.getText(locators.summaryPage.itemTotal);
        const taxText = await base.getText(locators.summaryPage.tax);
        const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
        const tax = parseFloat(taxText.replace('Tax: $', ''));
        const expectedTax = parseFloat((itemTotal * 0.08).toFixed(2));

        expect(tax).to.equal(expectedTax);
    });
});
