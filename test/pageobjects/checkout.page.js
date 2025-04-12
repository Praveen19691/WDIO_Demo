import BasePage from "./base.page";
import { CheckoutLocators } from "./locators";
class CheckoutPage extends BasePage {

    get checkoutForm() { return $(CheckoutLocators.checkoutForm); }
    get continue() { return $(CheckoutLocators.continue); }
    get errorMsg() { return $(CheckoutLocators.errorMsg); }

    async isCheckoutFormVisible() {
        await this.checkoutForm.waitForDisplayed();
        return await this.checkoutForm.isDisplayed();
    }
    
    async clickContinue() {
        await this.click(this.continue);
    }

    async getErrorText() {
        await this.errorMsg.waitForDisplayed();
        await browser.pause(2000);
        return await this.errorMsg.getText();
    }

}
export default new CheckoutPage();