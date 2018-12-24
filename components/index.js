const CategoryService = require('./home/CatService');
const CategoryController = require('./home/CatController');

const catService = new CategoryService();
const catController = new CategoryController(catService);

catController.findAllItems();


// document.querySelector('.category-list__button').addEventListener('click', _ => {
//     event.preventDefault();
//     console.log(event.target.innerText);
// });