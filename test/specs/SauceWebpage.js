import Sau from "../pageobjects/sauce.page"
import basePage from "../pageobjects/bse.page"
import * as chai from "chai";
const chaiExpect = chai.expect;
import allItems from "../pageobjects/all.cards"
import { expect } from "expect-webdriverio";
describe("Verify the features of saucelabs",()=>{
    beforeEach(async()=>{
        await basePage.launchSite();
        await browser.maximizeWindow();
        await basePage.loginpage();
        //await expect(browser).toHaveTitle("Swag Labs")
    })
    it("Check all the card details",async()=>{
        let Productsarr = await Sau.Products;
        for(let produc of Productsarr){
            await allItems.productdetails(produc);
            if(await browser.isAlertOpen()){
                await browser.acceptAlert()
            }
        }

    });
    it("Sorting the price",async()=>{

        if(await browser.isAlertOpen()){
            await browser.acceptAlert()
        }
        let sortfun = await allItems.sortby();

        //sort the array in asscending order------Low to Hign
        let ascending = sortfun.sort((a,b)=>a-b);
        console.log("1Low to high---->" +ascending); 
        console.log(Array.isArray(ascending));

        let drd = await allItems.dropdownn(2);
        let sorttfun = await allItems.sortby();
        //let sorttingg = sorttfun.sort((a,b)=>a-b)
        console.log("Low to high---->" +sorttfun);
        expect(ascending).toEqual(sorttfun);

        //Sort the array in descending order-----high to low
        let dsortfun = await allItems.sortby();
        let descending= dsortfun.sort((a,b)=>b-a);
        console.log("High to low------>" +descending);
        await allItems.dropdownn(3);
        let descenarr = await allItems.sortby();
        let sortting = descenarr.sort((a,b)=>b-a);
        console.log(sortting);

        
        expect(descending).toEqual(sortting);


    });
    it.only("Sort baased on product nme",async()=>{
            let sortal = await allItems.sortalp();
            let prodnmsort  = await sortal.sort().reverse();
            console.log(prodnmsort);
            await allItems.dropdownn(1);
            let sortno = await allItems.sortalp(); //z to a => sortno
            expect(sortno).toEqual(prodnmsort)
            
            let prodnmsortaz  = await sortno.sort();
            //let az = await allItems.sortalp()//z to a => az
           await allItems.dropdownn(0);
            let sortaz = await allItems.sortalp() //  a to z => sortaz

            expect(prodnmsortaz).toEqual(sortaz);
    })
        
    
   
})