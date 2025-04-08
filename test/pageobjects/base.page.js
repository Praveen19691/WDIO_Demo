import { TIMEOUT } from './constants.js';

class BasePage {
    async click(element, timeout = TIMEOUT) {
        await element.waitForClickable({ timeout });
        await element.click();
    }

    async type(element, text, timeout = TIMEOUT) {
        await element.waitForDisplayed({ timeout });
        await element.setValue(text);
    }

    async getElementsText(elements) {
        const textArr = [];
        for (let el of await elements) {
            textArr.push(await el.getText());
        }
        return textArr;
    }
}

export default BasePage;
