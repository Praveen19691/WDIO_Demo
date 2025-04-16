import Basepage from "./base.page";
import locators from "./Gajender.locators";

class CheckoutPage extends Basepage {
    get checkoutTitle() {
        return $(locators.checkoutPage.checkoutTitle);
    }
    get checkoutButton() {
        return $(locators.checkoutPage.checkoutButton);
    }
    get first_name() {
        return $(locators.checkoutPage.first_name);
    }
    get last_name() {
        return $(locators.checkoutPage.last_name);
    }
    get postal_code() {
        return $(locators.checkoutPage.postal_code);
    }
    get continue() {
        return $(locators.checkoutPage.continue);
    }
    get finish() {
        return $(locators.checkoutPage.finish);
    }


    async checkoutPage() {
        await this.checkoutButton.waitForClickable({ timeout: 5000 });
        await this.checkoutButton.scrollIntoView();
        await this.checkoutButton.click();
        await this.checkoutTitle.scrollIntoView();
    }

    async ischeckoutPageVisible() {
        await this.checkoutTitle.waitForDisplayed({ timeout:5000 });
        return await this.checkoutTitle.isDisplayed();
    }

    async fillTheForm() {
        await this.first_name.waitForDisplayed({ timeout: 5000 });
        await this.first_name.setValue('Alex');
        await this.last_name.waitForDisplayed({ timeout: 5000 });
        await this.last_name.setValue('Doe');
        await this.postal_code.waitForDisplayed({ timeout: 5000 });
        await this.postal_code.setValue('12345');
    }

    async clickContinue() {
        await this.continue.scrollIntoView();
        await this.continue.click();
    }
    async isFinalCheckoutVisible() {
        await this.finish.waitForDisplayed({timeout:5000});
        return this.finish.isDisplayed();
    }
}
export default new CheckoutPage();