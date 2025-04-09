import BasePage from './sree.base.page.js';
import selectors from '../locators/sree.selectors.js';

class LoginPage extends BasePage {
  get username() { return $(selectors.login.username); }
  get password() { return $(selectors.login.password); }
  get loginBtn() { return $(selectors.login.loginBtn); }

  async login(user, pass) {
    await this.waitForElement(this.username);
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new LoginPage();
