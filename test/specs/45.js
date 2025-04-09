import * as chai from "chai";
const chaiExpect = chai.expect;
import allItems from "../pageobjects/all.cards"
import { expect } from "expect-webdriverio";
import Sau from "../pageobjects/sauce.page"
import basepage from "../pageobjects/bse.page"
describe("Test4",()=>{
    it("Testcase4", async()=>{
        //await basepage.launchSite();
        await browser.url("https://www.saucedemo.com/");
        await Sau.username.setValue("standard_user");
        await Sau.password.setValue("secret_sauce");
        await Sau.loginbutton.click();

        //await expect(browser).toHaveTitle('Swag Labs');
        //await basepage.handleUnexpectedAlert(); 
        let ATC = await Sau.singleATC;
       
               
        await ATC[0].click();
        await ATC[1].click();
        await browser.pause(6000);

        let rembtn = await Sau.removebtns;

        if(await browser.isAlertOpen()){
            await browser.acceptAlert();
        }   
    
        
        
        //await browser.acceptAlert();
        //await ( await Sau.cartcontainer).scrollIntoView();

        
        let link = await Sau.cartlink;
        await link.click();
        await browser.pause(8000);

        let contibtn = await Sau.continueshop;
        await contibtn.scrollIntoView();
        await browser.pause(2000)
        await expect(await Sau.continueshop.isDisplayed()).toBe(true);
        await contibtn.click();

    })
})