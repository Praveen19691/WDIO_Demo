import loginPage from '../pageobjects/login.page.js';
import homePage from '../pageobjects/home.page.js';
import { expect } from 'chai';
import { TIMEOUT } from '../pageobjects/constants.js';

describe('Testcase 1: Product Cards Verification', () => {

    before(async () => {
        await loginPage.open();
        await loginPage.usernameField.waitForDisplayed({ timeout: TIMEOUT });
        await loginPage.login();
        await homePage.sortDropdown.waitForDisplayed({ timeout: TIMEOUT });
    });

    it('should verify all product cards have required elements', async () => {
        const isValid = await homePage.validateProductsDetails();
        browser.pause(10000);
        expect(isValid).to.be.true;
    });
});
