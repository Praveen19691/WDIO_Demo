import Sau from "../pageobjects/sauce.page"
import basePage from "../pageobjects/bse.page";
import { expect } from "chai";
describe("Verify the features of saucelabs",()=>{
    beforeEach(async()=>{
        await basePage.launchSite();
        await browser.maximizeWindow();
        await Sau.username.setValue("standard_user");
        await Sau.password.setValue("secret_sauce");
        await Sau.loginbutton.click();

        //await expect(browser).toHaveTitle("Swag Labs")
    })
    it("Sort baased on product nme",async()=>{
        let pnarr = await Sau.Productnames;
        let eachprname = await pnarr.map(async prname=>{
            return await prname.getText();
        });
        console.log(eachprname);
        let prodnmsort  = await eachprname.sort().reverse();
        console.log(prodnmsort);

        let dropdow = await Sau.DropDown;
                await dropdow.click();
                await dropdow.selectByIndex(1);
                await browser.pause(8000);

        let pnarrza = await Sau.Productnames;
        let za  = await pnarrza.map(async prname=>{
            return await prname.getText();
        });
        console.log(za);

        //expect(za).equal(prodnmsort)
        
        await dropdow.selectByIndex(0);
        await browser.pause(8000);

        let prnmaz = await Sau.Productnames;
        let az  = await prnmaz.map(async prname1=>{
            return await prname1.getText();
        });
        console.log(az);

        
        
    })
   
})