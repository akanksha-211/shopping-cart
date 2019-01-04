import ProductService from './ProductsService';
import ProductController from './ProductsController';
import cart from '../cart/Cart';

const prodService = new ProductService();
const prodController = new ProductController(prodService);
const category = document.querySelector("#category");


const Cart = new cart();

prodController.listAll(category.value);

(document.querySelector(".header-menu__subgroup-container.cart")).addEventListener('click', _ => {
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = 'hidden';
    Cart.render();
});
let cartStore = JSON.parse(sessionStorage.getItem("cart")) || [];
let total = 0;
cartStore.forEach(element => {
    total += JSON.parse(element).qty;
});

document.querySelector(".header-menu__subgroup-container.item-total").innerText = (total)+ ' items';

