const ProductService = require('./ProductsService');
const ProductController = require('./ProductsController');

const prodService = new ProductService();
const prodController = new ProductController(prodService);

prodController.listAll();