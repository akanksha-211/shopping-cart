const ProductService = require('./ProductsService');
const ProductController = require('./ProductsController');

const prodService = new ProductService();
const prodController = new ProductController(prodService);
const category = document.querySelector("#category");
// if(category.value) {
//     console.log(category.value);
//     prodController.listByCategory(category.value);
// }
// else {
//     prodController.listAll();
// }
prodController.listAll(category.value);