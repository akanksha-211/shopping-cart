const CategoryService = require('./home/CatService');
const CategoryController = require('./home/CatController');

const catService = new CategoryService();
const catController = new CategoryController(catService);

catController.render();
