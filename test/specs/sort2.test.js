import loginPage from '../pageobjects/login.page.js';
import homePage from '../pageobjects/home.page.js';
import { expect } from 'chai';

describe('Testcase 2: Product Sort by Price', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login();
    });

    it('should sort products by Price (Low to High)', async () => {
        await homePage.selectSortOption('lohi');
        const isSortedLowToHigh = await homePage.verifyPricesSortedAsc();
        expect(isSortedLowToHigh).to.be.true;
    });

    it('should sort products by Price (High to Low)', async () => {
        await homePage.selectSortOption('hilo');
        const isSortedHighToLow = await homePage.verifyPricesSortedDesc();
        expect(isSortedHighToLow).to.be.true;
    });
});