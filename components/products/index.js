const ProductService = require('./ProductsService');
const ProductController = require('./ProductsController');

const prodService = new ProductService();
const prodController = new ProductController(prodService);
const category = document.querySelector("#category");

const cart = require('../cart/Cart');

const Cart = new cart();
// if(category.value) {
//     console.log(category.value);
//     prodController.listByCategory(category.value);
// }
// else {
//     prodController.listAll();
// }
prodController.listAll(category.value);

(document.querySelector(".header-menu__subgroup-container.cart")).addEventListener('click', _ => {
    document.getElementById("overlay").style.display = "block";
    Cart.render();
});
