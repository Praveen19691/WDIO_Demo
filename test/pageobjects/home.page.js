
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    get lists () {
        return $$('//li//a');
    }

    get zipBlock () {
        return $('#ssp-service-zip')
    }

    get autoCheckBox () {
        return $('[data-product="auto"] .product-checkbox')
    }
    
    open() {
        return super.open()
    }

    ClickOnTheList(text) {
        this.lists.forEach(async val => {
            if(await val.getText() === text){
                await val.click();
            }
        })
    }
}

export default new HomePage();
