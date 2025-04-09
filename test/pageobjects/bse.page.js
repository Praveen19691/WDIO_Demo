import locators from "../pageobjects/sauce.page"
class basePage{
    async launchSite(){
        await browser.url("https://www.saucedemo.com/")
    }
    async handleUnexpectedAlert() {
        try{
            await browser.acceptAlert();
            console.log('Alert accepted');
        }
        catch(error){
            if(error.message.includes('no such alert')){

            }else{
                console.log(error);
            }
        }
    }
    async loginpage(){
        await locators.username.setValue("standard_user");
        await locators.password.setValue("secret_sauce");
        await locators.loginbutton.click();
    }
    
}
export default new basePage