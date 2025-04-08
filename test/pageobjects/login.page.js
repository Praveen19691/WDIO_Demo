import BasePage from './base.page.js';
import { LoginLocators } from './locators.js';
import { CREDENTIALS, TIMEOUT } from './constants.js';

class LoginPage extends BasePage {
    get usernameField() { return $(LoginLocators.username); }
    get passwordField() { return $(LoginLocators.password); }
    get loginButton() { return $(LoginLocators.loginBtn); }

    async login(username = CREDENTIALS.username, password = CREDENTIALS.password) {
        await this.open();

        await this.usernameField.waitForDisplayed({ timeout: TIMEOUT });
        await this.usernameField.setValue(username);

        await this.passwordField.waitForDisplayed({ timeout: TIMEOUT });
        await this.passwordField.setValue(password);

        await this.loginButton.waitForClickable({ timeout: TIMEOUT });
        await this.loginButton.click();
    }

    async open() {
        await browser.url('https://www.saucedemo.com/');
        await this.usernameField.waitForDisplayed({ timeout: TIMEOUT });
    }
}

export default new LoginPage();
