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
        //await Sau.username.setValue("standard_user");
        //await Sau.password.setValue("secret_sauce");
        //await Sau.loginbutton.click();
        await basePage.loginpage();

        //await expect(browser).toHaveTitle("Swag Labs")
    })
    it.only("Check all the card details",async()=>{
        //browser.url("https://www.saucedemo.com/");
        //await Sau.username.setValue("standard_user");
        //await Sau.password.setValue("secret_sauce");
        //await Sau.loginbutton.click();
        
        //await expect(browser).toHaveTitle('Swag Labs');
        
        let Productsarr = await Sau.Products;
        //await expect(Productsarr).toBeElementsArrayOfSize({gte: 6});
       
        for(let produc of Productsarr){
            /*let nameofthepro = await (produc.$('.inventory_item_name')).isDisplayed();
            let pricee = await (produc.$('.inventory_item_price')).isDisplayed();
            let description = await (produc.$('.inventory_item_desc')).isDisplayed();
            let Addtocrtbtn = await (produc.$('//button[contains(text(),"Add to cart")]')).isDisplayed();*/
            await allItems.productdetails(produc);
            /*chaiExpect().to.equal(true);
            chaiExpect(pricee).to.equal(true);
            chaiExpect(description).to.eq(true);
            chaiExpect(Addtocrtbtn).to.equals(true);*/

            if(await browser.isAlertOpen()){
                await browser.acceptAlert()
            }
        }

    });
    it("Sorting the price",async()=>{

        if(await browser.isAlertOpen()){
            await browser.acceptAlert()
        }
       
        /*let Originalpricerr = await Sau.Price;
        let prodpr = await Originalpricerr.map(async pr => {
                    return ((await pr.getText()).replace('$',''));
                });

        //console.log(prodpr);
        let duppricearr = prodpr.slice(0);
        //console.log(duppricearr);*/

        let sortfun = await allItems.sortby();

        //sort the array in asscending order------Low to Hign
        let ascending = sortfun.sort((a,b)=>a-b);
        console.log("1Low to high---->" +ascending); 
        console.log(Array.isArray(ascending));

        let drd = await allItems.dropdownn(2);
        /*let dropdow = await Sau.DropDown;
        await dropdow.click();
        await dropdow.selectByIndex(2);
        await browser.pause(8000);*/
        
        /*let ascepri = await Sau.Price;
        let asprodpr1 = await ascepri.map(async pr => {
            return (await pr.getText()).replace('$','');
        });*/
        let sorttfun = await allItems.sortby();
        //let sorttingg = sorttfun.sort((a,b)=>a-b)
        console.log("Low to high---->" +sorttfun);
        expect(ascending).toEqual(sorttfun);

        //let dropdow = await Sau.DropDown;
        //await dropdow.click();
        
        //Sort the array in descending order-----high to low
        let dsortfun = await allItems.sortby();
        let descending= dsortfun.sort((a,b)=>b-a);
        console.log("High to low------>" +descending);
        //console.log(prodpr);
        /*await dropdow.selectByIndex(3);
        await browser.pause(8000);*/
        let drd1 = await allItems.dropdownn(3);

        let descenarr = await allItems.sortby();
        /*let dspropr = await descenarr.map(async pr1 =>{
            return (await pr1.getText()).replace('$','');
        })*/
        
        //console.log(dspropr);
        let sortting = descenarr.sort((a,b)=>b-a);
        console.log(sortting);

        
        expect(descending).toEqual(sortting);


    });
    it("Sort baased on product nme",async()=>{
            /*let pnarr = await Sau.Productnames;
            let eachprname = await pnarr.map(async prname=>{
                return await prname.getText();
            });
            console.log(eachprname);*/
            let sortal = await allItems.sortalp();
            let prodnmsort  = await sortal.sort().reverse();
            console.log(prodnmsort);
    
            /*let dropdow = await Sau.DropDown;
                    await dropdow.click();
                    await dropdow.selectByIndex(1);
                    await browser.pause(8000);*/
            let drd11 = await allItems.dropdownn(1);
    
            /*let pnarrza = await Sau.Productnames;
            let za  = await pnarrza.map(async prname=>{
                return await prname.getText();
            });
            console.log(za);*/

            let sortno = await allItems.sortalp(); //z to a => sortno
            expect(sortno).toEqual(prodnmsort)
            
            /*await dropdow.selectByIndex(0);
            await browser.pause(8000);*/
            let prodnmsortaz  = await sortno.sort();
            //let az = await allItems.sortalp()//z to a => az
           await allItems.dropdownn(0);
    
            /*let prnmaz = await Sau.Productnames;
            let az  = await prnmaz.map(async prname1=>{
                return await prname1.getText();
            });
            console.log(az);*/
            let sortaz = await allItems.sortalp() //  a to z => sortaz

            expect(prodnmsortaz).toEqual(sortaz);
    })
        
    
   
})