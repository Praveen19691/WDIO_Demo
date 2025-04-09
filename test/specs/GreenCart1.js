import { expect } from "chai";
import Greencart from "../pageobjects/Green.cart";

describe("Green Cart",()=>{
    before(async()=>{
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/');
    })
    it("Product names starts with b",async()=>{
        let products = await Greencart.productname.map(async pro => {
            return await pro.getText();
        })
        console.log(products);

        let bproducts = products.filter(pr=> pr.charAt(0).toLowerCase()==='b');
        console.log(bproducts);

    })
    it("Sort product names based on length of product name",async()=>{
        let onlyproductnme = await Greencart.productname.map(async proo => {
            return ((await proo.getText()).split('-'))[0];
        });
        console.log(onlyproductnme);

        let sortedproducts = onlyproductnme.sort((prod1,prod2)=>{
            return prod2.length - prod1.length;
        })
        console.log(sortedproducts);
    })
    /*it.only("Sort product names based price highest price product will come first",async()=>{
        let price = await Greencart.productprice.map(async(pri)=>{
            return (await pri.getText()).
        })
        console.log(price);
    })*/
})