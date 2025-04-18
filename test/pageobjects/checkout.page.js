import Basepage from "./base.page";
import { checkoutPage } from "./locators";

class CheckoutPage extends Basepage {
    get checkoutTitle() {
        return $(checkoutPage.checkoutTitle);
    }
    get checkoutButton() {
        return $(checkoutPage.checkoutButton);
    }
    get first_name() {
        return $(checkoutPage.first_name);
    }
    get last_name() {
        return $(checkoutPage.last_name);
    }
    get postal_code() {
        return $(checkoutPage.postal_code);
    }
    get continue() {
        return $(checkoutPage.continue);
    }
    get finish() {
        return $(checkoutPage.finish);
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