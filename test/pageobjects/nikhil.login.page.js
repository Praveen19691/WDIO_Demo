const BasePage = require('./nikhil.base.page');
const locators = require('./nikhil.locators').login;
 
class LoginPage extends BasePage {
    get usernameInput() { return $(locators.username); }
    get passwordInput() { return $(locators.password); }
    get loginButton() { return $(locators.loginBtn); }
 
    async login(username, password) {
        await this.usernameInput.waitForDisplayed({ timeout: 5000 });
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.waitForClickable({ timeout: 5000 });
await this.loginButton.click();
    }
}
 
module.exports = new LoginPage();