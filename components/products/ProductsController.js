const ProductService = require('./ProductsService');
const prodService = new ProductService();

const CategoryService = require('../home/CatService');

const catService = new CategoryService();

class ProductController{
    constructor(prodService) {
        this.prodService = prodService;
    }
    listAll(){
        catService.findAll()
        .then(response => {
            const sideNav = document.querySelector('.page-content__category');
            const categoryList = document.createElement('div');
            categoryList.className = 'category-list';
            const categoryDropDown = document.createElement('div');
            categoryDropDown.className = 'category-dropdown small';
            const selectedItem = document.createElement('span');
            selectedItem.innerText = response[0].name;
            categoryDropDown.appendChild(selectedItem);
            const categoryDropDownToggle = document.createElement('a');
            categoryDropDownToggle.href = '#';
            categoryDropDownToggle.innerText = '˅';
            categoryDropDown.appendChild(categoryDropDownToggle);
            categoryList.appendChild(categoryDropDown);
            sideNav.appendChild(categoryList);
            const sideNavList = document.createElement('ul');
            sideNavList.className = 'nav-list';
            response.forEach(element => {
                if(element.enabled) {
                    const listItem = document.createElement('li');
                    listItem.className = 'nav-list-item';
                    listItem.dataset.attr = element.id;
                    const categoryLink = document.createElement('a');
                    categoryLink.className = 'category-link';
                    categoryLink.href = '#';
                    categoryLink.innerText = element.name;
                    listItem.appendChild(categoryLink);
                    sideNavList.appendChild(listItem);
                }
            });
            categoryList.appendChild(sideNavList);
            sideNav.appendChild(categoryList);
        })
        .catch(error => console.log(error) );

        prodService.listAllProducts()
        .then(res => {
            res.forEach(element => {
                const articleProduct = document.querySelector('.page-content__productsList');
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';
                const cardHeading = document.createElement('h3');
                cardHeading.innerText = element.name;
                cardDiv.appendChild(cardHeading);
                const cardContent = document.createElement('div');
                cardContent.className = 'card-content';
                const image = document.createElement('img');
                image.src = '../..'+element.imageURL;
                cardContent.appendChild(image);
                const descDiv = document.createElement('div');
                descDiv.className = 'product-desc';
                descDiv.innerHTML = '<p>'+element.description+'</p>';
                cardContent.appendChild(descDiv);
                const priceDiv = document.createElement('div');
                priceDiv.className = 'product-price';
                priceDiv.innerHTML = '<p>MRP Rs.'+element.price+'</p>';
                cardContent.appendChild(priceDiv);
                const buttonDiv = document.createElement('div');
                buttonDiv.className = 'card-button';
                buttonDiv.innerHTML = '<button type="button" class="buy-product large">Buy Now</button>'+
                '<button type="button" class="buy-product small">Buy Now @ Rs.'+element.price+'</button>';
                cardContent.appendChild(buttonDiv);
                cardDiv.appendChild(cardContent);
                articleProduct.appendChild(cardDiv);
            });
        })
        .catch(err => console.log(err));

    }
}

module.exports = ProductController;