const loginPage = {
  username: '#user-name',
  password: '#password',
  loginButton: '#login-button'
};
const homePage = {
  addToCartButtons: '.btn_inventory',
  cartCount: '.shopping_cart_badge',
  cartLink: '.shopping_cart_link'
};
const cartPage = {
  checkoutButton: '#checkout'
};
const checkoutPage = {
  firstName: '#first-name',
  lastName: '#last-name',
  zipCode: '#postal-code',
  continueButton: '#continue'
};
const summaryPage = {
  itemTotal: '.summary_subtotal_label',
  tax: '.summary_tax_label'
};
const locators = {loginPage, homePage, cartPage,checkoutPage, summaryPage};
export default locators;