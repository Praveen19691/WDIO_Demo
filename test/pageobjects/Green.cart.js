class greenCart{

    get productname(){
        return $$('.product-name')
    }
    get productprice(){
        return $$('p.product-price')
    }

}

export default new greenCart;


