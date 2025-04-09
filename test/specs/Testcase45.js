
import * as chai from "chai";
const chaiExpect = chai.expect;
import allItems from "../pageobjects/all.cards"
import { expect } from "expect-webdriverio";
import Sau from "../pageobjects/sauce.page"
import basepage from "../pageobjects/bse.page"
describe("Test4",()=>{
    it("Testcase4", async()=>{
        await basepage.launchSite();
        await browser.maximizeWindow();
        await basepage.loginpage();
        await allItems.adtcrt(2);
        let rem1 = await Sau.remove1;
        expect(await rem1.isDisplayed()).toBe(true);
        let rem2 = await Sau.remove2
        expect(await rem2.getText()).toBe('Remove');
        /*if(await browser.isAlertOpen()){
            await browser.acceptAlert();
        } */      
        //await browser.acceptAlert();
        //await ( await Sau.cartcontainer).scrollIntoView();
        let bdge = await Sau.cartbage;
        expect(await bdge.getText()).toBe('2');
         await allItems.cartlinkcl();
        //await browser.pause(8000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await rem2.click();
        await expect(await Sau.continueshop.isDisplayed()).toBe(true);
        await allItems.continueshcl();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        //await browser.pause(3000)
        let adc = await Sau.secondatc;
        expect(await adc.getText()).toEqual("Add to cart");
    })
})