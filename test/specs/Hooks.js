describe("HOOkS in webdriverIO",()=>{
    var URL = "https://edition.cnn.com/"
    before(()=>{
        browser.url(URL);
        browser.maximizeWindow();
        let title = browser.getTitle();
        console.log(title);
        expect(browser).toHaveTitle('Breaking News, Latest News and Videos | CNN');
    })
    after(()=>{
        browser.closeWindow();
    })
    beforeEach(()=>{

    })
    afterEach(()=>{

    })
    it("Verify all header menus",async()=>{
        let US = $('(//a[contains(text(),"US")])[1]');
        browser.pause(7000);
        await US.click();
        let ustitle = browser.getTitle();
        console.log(ustitle);
        browser.back();
        browser.refresh();

        
    })
})