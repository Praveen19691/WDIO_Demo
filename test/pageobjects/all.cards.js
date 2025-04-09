import { expect } from "expect-webdriverio";
import locators from "../pageobjects/sauce.page"
class allItems{
    async productdetails(){
            //const productss = await locators.Products;
            
            await expect(await locators.Productname).toBeDisplayed();
            await expect(await locators.singPrice).toBeDisplayed();
            await expect(await locators.Description).toBeDisplayed();
            await expect(await locators.AddTOCart).toBeDisplayed();
            
          
    }
    async sortby(){
        let Originalpricerr = await locators.Price;
                let prodpr = await Originalpricerr.map(async pr => {
                            return ((await pr.getText()).replace('$',''));
                        });
        
                //console.log(prodpr);
        return prodpr.slice(0);
    }
    async dropdownn(index){
        let dropdow = await locators.DropDown;
        //await dropdow.click();
        await dropdow.selectByIndex(index);
    }
    async sortalp(){
        let pnarr = await locators.Productnames;
        let eachprname = await pnarr.map(async prname=>{
                return await prname.getText();
        });
        return eachprname;
    }
    async adtcrt(index){
        let ATC = await locators.singleATC;
        for(let i=0; i<index;i++){
            ATC[i].click();
        }
    }
    async remove1(){
        let rem1 = await locators.remove1;
    }
    async cartlinkcl(){
        let link = await locators.cartlink;
            await link.click();
    }
    async continueshcl(){
        let contibtn = await locators.continueshop;
            await contibtn.scrollIntoView();
                
            await contibtn.click();
    }
}
export default new allItems();