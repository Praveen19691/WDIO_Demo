import Basepage from './base.page.js';
import locators from './pageobjects/Gajender.locators.js';
import { Credentials } from './constants.js';

class LoginPage extends Basepage {
    get inputUsername () {
        return $(locators.loginPage.user_name);
    }

    get inputPassword () {
        return $(locators.loginPage.password);
    }

    get btnSubmit () {
        return $(locators.loginPage.login_button);
    }
    async open () {
        await browser.url('https://www.saucedemo.com/');
        await browser.fullscreenWindow();
    }
    async login (username=Credentials.username, password=Credentials.passsword) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
