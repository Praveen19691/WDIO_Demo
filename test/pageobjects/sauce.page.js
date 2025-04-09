class sauce{
    get username(){
        return $('#user-name');
    }
    get password(){
        return $('#password');
    }
    get loginbutton(){
        return $('//input[@value="Login"]');
    }
    get Products(){
        return $$('.inventory_item');
    }
    get Productname(){
        return $('.inventory_item_name ');
    }
    get AddTOCart(){
        return $('//button[contains(text(),"Add to cart")]')
    }
    get singleATC(){
        return $$('button.btn_inventory');
    }
    get Price(){
        return $$('.inventory_item_price');
    }
    get Description(){
        return $('.inventory_item_desc');
    }
    get DropDown(){
        return $('.product_sort_container');
    }
    get asscendingprice(){
        return $$('.inventory_item_price')
    }
    get removebtn1(){
        return $('#remove-sauce-labs-backpack')
    }
    get removebtn2(){
        return $('#remove-sauce-labs-bike-light')
    }
    get cartcontainer(){
        return $('.shopping_cart_link');
    }
    get cartbage(){
        return $('.shopping_cart_badge');
    }
    get continueshop(){
        return $('#continue-shopping')
    }
    get secondatc(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get Productnames(){
        return $$('.inventory_item_name ');
    }
    get firstdtc(){
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get secondadtc(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get removebtns(){
        return $$('//button[contains(text(),"Remove")]')
    }
    get cartlink(){
        return $('.shopping_cart_link')
    }
    get remove1(){
        return $('#remove-sauce-labs-backpack')
    }
    get remove2(){
        return $('#remove-sauce-labs-bike-light')
    }
    get singPrice(){
        return $('.inventory_item_price');
    }
    
}
export default new sauce;