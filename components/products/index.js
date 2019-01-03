const ProductService = require('./ProductsService');
const ProductController = require('./ProductsController');

const prodService = new ProductService();
const prodController = new ProductController(prodService);
const category = document.querySelector("#category");

const cart = require('../cart/Cart');

const Cart = new cart();

prodController.listAll(category.value);

(document.querySelector(".header-menu__subgroup-container.cart")).addEventListener('click', _ => {
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = 'hidden';
    Cart.render();
});
let cartStore = JSON.parse(sessionStorage.getItem("cart")) || [];
document.querySelector(".header-menu__subgroup-container.item-total").innerText = (cartStore.length)+ ' items';
// setTimeout(() => {
//     const buy_now = document.getElementsByClassName("buy-product");
//     Array.prototype.forEach.call(buy_now, buy_now => {
//         buy_now.parentElement.addEventListener('click', _ => {
//             event.stopImmediatePropagation();
//             prodController.addtocart((buy_now.parentElement).querySelector(".product-data").value)
//         });
//     });
// }, 500);
