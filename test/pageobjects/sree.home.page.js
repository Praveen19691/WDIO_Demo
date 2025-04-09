import BasePage from './sree.base.page.js';
import selectors from '../locators/sree.selectors.js';


class HomePage extends BasePage {
  get products() {return $$(selectors.home.inventoryItems); }
  get sortDropdown() {return $(selectors.home.sortDropdown); }
  get cartBadge() {return $(selectors.home.cartBadge); }
  get cartLink() {return $(selectors.home.cartLink); }

  async addToCart(product) {
    const addBtn = await product.$(selectors.home.addToCartBtn);
    await this.waitForElement(addBtn);
    await addBtn.click();
  }

  async removeFromCart(product) {
    const removeBtn = await product.$(selectors.home.removeFromCrtBtn);
    await this.waitForElement(removeBtn);
    await removeBtn.click();
  }

  async isAddToCartVisible(product) {
    const cartBtn = await product.$(selectors.home.cartBtn);
    await this.waitForElement(cartBtn);
    return (await cartBtn.getText() === "Add to cart");
  }

  async getProductDetails(product) {
    return {
      name: await (await product.$(selectors.home.itemName)).getText(),
      desc: await (await product.$(selectors.home.itemDesc)).getText(),
      price: await (await product.$(selectors.home.itemPrice)).getText()
    };
  }

  async selectSort(optionText) {
    await this.sortDropdown.selectByVisibleText(optionText);
    await browser.waitUntil(async ()=>{
        const selectedOption = await this.sortDropdown.getValue();
        return selectedOption !== '';
    },
    {
        timeout: 5000,
    })
  }

  async openCart() {
    const cartBtn =  await this.cartLink;
    await this.waitForElement(cartBtn);
    await cartBtn.click();
  }

  async isOnInventoryPage() {
    const url = await browser.getUrl();
    console.log(`Current URL: ${url}`);
    return url.includes('inventory.html');
  }

  async areAllProductsValid() {
    const products = await this.products;
    for (let i = 0; i < products.length; i++) {
      const details = await this.getProductDetails(products[i]);
      if (!(details.name && details.desc && details.price)){
          return false;
      }
    }
    return true;
  }

  
  async getCartBadgeText() {
    const CartElement = await this.cartBadge;
    await this.waitForElement(CartElement);
    return await CartElement.getText();
  }

  async _checkSort(products,field = 'name',order = 'asc') {
    const values = [];
    for (let product of products) {
      const details = await this.getProductDetails(product);
      const value = field === 'price' ?  parseFloat(await details.price.replace('$','')):  await details.name.toLowerCase();
      values.push(value);
    }
    let sortedValues = 0;
    if (field === 'price') {
      sortedValues = order === 'asc' ? values.sort((a,b) => a - b) : values.sort((a,b) => b - a);
    } 
    else {
        sortedValues = order === 'asc' ? values.sort((a,b) => a.localeCompare(b)) : values.sort((a,b) => a.localeCompare(a));
    }
    const isEqual = (a,b) => a.length === b.length && a.every((v,i) => v === b[i]);
    return isEqual(values,sortedValues)
  }

  isProductSortedBy = {
    name : {
        asc : async () => await this._checkSort(await this.products,'name','asc'),
        desc : async () => await this._checkSort(await this.products,'name','desc')
    },
    price : {
        asc : async () => await this._checkSort(await this.products,'price','asc'),
        desc : async () => await this._checkSort(await this.products,'price','desc')
    }
  }

}

export default new HomePage();
