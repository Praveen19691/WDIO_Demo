module.exports = {
    login: {
      username: '#user-name',
      password: '#password',
      loginBtn: '#login-button'
    },
   
    home: {
      productCard: '.inventory_item',
      addToCartBtn: '.btn_inventory',
      price: '.inventory_item_price',
      name: '.inventory_item_name',
      desc: '.inventory_item_desc',
      sortDropdown: '.product_sort_container',
      cartIcon: '.shopping_cart_link',
      cartCount: '.shopping_cart_badge',
      checkoutBtn: '[data-test="checkout"]'
    },
   
    checkout: {
      firstName: '[data-test="firstName"]',
      lastName: '[data-test="lastName"]',
      postalCode: '[data-test="postalCode"]',
      continueBtn: '[data-test="continue"]',
      summaryItem: '.cart_item'
    },
   
    cart: {
      cartItem: '.cart_item',
      removeBtn: '.cart_button',
      checkoutBtn: '[data-test="checkout"]',
      continueShopping: '[data-test="continue-shopping"]'
    }
  };