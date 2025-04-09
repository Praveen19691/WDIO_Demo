describe("Window Handling",()=>{
    it("Switching to multiple windows", async()=>{
        browser.url('https://www.google.com/');
        let gtitle =browser.getTitle();
        console.log(gtitle);

        browser.newWindow('https://edition.cnn.com/');
        browser.pause(7000);
        let mainWindow = browser.getWindowHandle();
        await expect(browser).toHaveUrl('https://edition.cnn.com/');
        let watch = $('.header__right a[class*="header__video-link header"]');
        await watch.click();
        await browser.pause(3000);
        let singup = $("#desktop-header-account-nav div.user-account-nav__icons button:nth-child(3)");
        await singup.click();
        await browser.pause(7000);
        let allWindows = await browser.getWindowHandles();
        console.log("Total no.of opened windows" +allWindows.length);

        
    })
})