import loginPage from '../pageobjects/login.page.js';
import homePage from '../pageobjects/home.page.js';
import { expect } from 'chai';

describe('Testcase 3: Sort by Name functionality', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login();
    });

    it('should sort products from Z to A', async () => {
        await homePage.selectSortOption('za');
        const isSortedDesc = await homePage.verifyNamesSortedDesc();
        expect(isSortedDesc).to.be.true;
    });

    it('should sort products from A to Z', async () => {
        await homePage.selectSortOption('az');
        const isSortedAsc = await homePage.verifyNamesSortedAsc();
        expect(isSortedAsc).to.be.true;
    });
});