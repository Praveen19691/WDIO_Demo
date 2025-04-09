import { expect } from "chai"
describe("Verify price",async()=>{
    before(async()=>{
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it("Verify the sum of prices",async()=>{
        let strprices = await $$('.product-price').map(async item =>{
            return await item.getText();
        })
        console.log(strprices);

        let values = strprices.filter(ele => ele!=='');
        console.log(values);

        let inprices = values.map(pri=>parseInt(pri));
        console.log(inprices);

        let presum = inprices.reduce((pre,cur)=>{
            return pre+cur;
        })
        console.log(presum);

        let addtocart = await $$('//button[contains(text(),"ADD TO CART")]').map(async button=>{
            await button.click();
            await browser.pause(1700);
        })
        let totalsum = await $("(//strong)[2]").getText();
        console.log(totalsum);

        expect(parseInt(presum)).to.eq(parseInt(totalsum));

    })
    it.skip("Search the product", async()=>{
        let searchbar = await $('//input[@class="search-keyword"]');
        await browser.pause(6000)
        await searchbar.addValue('carrot');
        await browser.pause(7000);
        expect($("div.product-image")).toBeDisplayed();

    })
})


it("Sorting the price",async()=>{
       
    let Originalpricerr = await Sau.Price;
    let prodpr = await Originalpricerr.map(async pr => {
                return ((await pr.getText()).replace('$',''));
            });

    //console.log(prodpr);
    let duppricearr = prodpr.slice(0);
    //console.log(duppricearr);

    //sort the array in asscending order------Low to Hign
    let ascending = duppricearr.sort((a,b)=>a-b);
    console.log("1Low to high---->" +ascending); 

    //Sort the array in descending order-----high to low
    //let descending= duppricearr.sort((a,b)=>b-a);
    //console.log(descending);
    //console.log(prodpr);

    let dropdow = await Sau.DropDown;
    await dropdow.click();
    await dropdow.selectByIndex(2);
    await browser.pause(8000);
    
    let ascepri = await Sau.Price;
    let asprodpr1 = await ascepri.map(async pr => {
        return (await pr.getText()).replace('$','');
    });
    //let sortting = asprodpr1.sort((a,b)=>a-b)
    console.log("Low to high---->" +asprodpr1);

   
    /*let descenarr = Sau.asscendingprice;
    let dspropr = descenarr.
    
    console.log(dspropr);*/

    expect(ascending).to.equal(asprodpr1);
    //chaiExpect(descending).to.equal(dspropr);

})