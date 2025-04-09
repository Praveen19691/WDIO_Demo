describe("Dropdown hanling",()=>{
    it("Dropdown methods", async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        let Title = browser.getTitle();
        console.log(Title);
        await expect(browser).toHaveTitle('Practice Page');

        let dropdow = await $('#dropdown-class-example');
        await browser.pause(5000);
        //dropdow.selectByIndex(2);
        
        await dropdow.selectByVisibleText("Option2");
        //await expect(dropdow).toHaveText('')
        await browser.pause(5000);
    })
})