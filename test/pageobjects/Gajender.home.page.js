import { expect } from 'chai';
import Basepage from './base.page.js';
import locators from './pageobjects/Gajender.locators.js';

class Homepage extends Basepage {
    get inventory_item () {
        return $$(locators.homePage.inventory_item);
    }
    get sortDropdown() { 
        return $(locators.homePage.sortDropdown); 
    }
    get productPrices() {
        return $$(locators.homePage.productPrice);
    }
    get productNames() { 
        return $$(locators.homePage.productName); 
    }
    get productPrices() { 
        return $$(locators.homePage.productPrice); 
    }
    get productDescriptions() { 
        return $$(locators.homePage.productDescription); 
    }

    async sortLowToHigh() {
        await this.sortDropdown.waitForDisplayed({timeout: 5000});
        await this.sortDropdown.selectByAttribute('value', 'lohi');
    }

    async sortHighToLow() {
        await this.sortDropdown.waitForDisplayed({timeout: 5000});
        await this.sortDropdown.selectByAttribute('value', 'hilo');
    }

    async sortZtoA() {
        await this.sortDropdown.waitForDisplayed({timeout: 5000});
        await this.sortDropdown.selectByAttribute('value', 'za');
    }

    async sortAtoZ() {
        await this.sortDropdown.waitForDisplayed({timeout: 5000});
        await this.sortDropdown.selectByAttribute('value', 'az');
    }

    async validateAllCards() {
        const items = await this.inventory_item;
   
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
   
            await item.waitForDisplayed({ timeout: 5000 });
   
            const name = await item.$(locators.homePage.inventory_item_name);
            const desc = await item.$(locators.homePage.inventory_item_desc);
            const price = await item.$(locators.homePage.inventory_item_price);
            const addToCart = await item.$('button');
   
            await name.waitForDisplayed({ timeout: 3000 });
            await desc.waitForDisplayed({ timeout: 3000 });
            await price.waitForDisplayed({ timeout: 3000 });
            await addToCart.waitForDisplayed({ timeout: 3000 });
   
            const allVisible = await Promise.all([
                name.isDisplayed(),
                desc.isDisplayed(),
                price.isDisplayed(),
                addToCart.isDisplayed()
            ]);
   
            if (allVisible.includes(false)) return false;
        }
   
        return true;
    }
}

export default new Homepage();
