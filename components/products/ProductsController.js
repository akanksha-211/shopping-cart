const ProductService = require('./ProductsService');
const prodService = new ProductService();

const CategoryService = require('../home/CatService');

const catService = new CategoryService();

const cart = require('../cart/Cart');

const Cart = new cart();

class ProductController{
    constructor(prodService) {
        this.prodService = prodService;
    }
    listAll(categoryId){
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
                    categoryLink.href = '?id='+element.id;
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
                if(categoryId && categoryId!= ""){
                    if(categoryId == element.category){
                        this.printCard(element);
                    }
                }
                else {
                    this.printCard(element);
                }
            });
            const buy_now = document.getElementsByClassName("buy-product");
            Array.prototype.forEach.call(buy_now, buy_now => {
                buy_now.parentElement.addEventListener('click', _ => {
                    event.stopImmediatePropagation();
                    const product_id = ((buy_now.parentElement).querySelector(".product-data").value);
                    const product_name = ((buy_now.parentElement).querySelector(".product-data").dataset.attr);
                    const product_price = ((buy_now.parentElement).querySelector(".product-data").dataset.price);
                    console.log(product_id,product_name, product_price);
                    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
                    cart.push(JSON.stringify({"product_id": product_id, "product_name": product_name, "price": product_price}));
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    console.log('length-------------'+JSON.parse(sessionStorage.getItem("cart")).length);
                    document.getElementById("overlay").style.display = "block";
                    Cart.render();
                });
            });
        })
        .catch(err => console.log(err));

    }

    printCard(element) {
        const articleProduct = document.querySelector('.page-content__productsList');
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        const cardHeading = document.createElement('div');
        cardHeading.className = 'card-heading';
        cardHeading.innerHTML = '<h3>'+element.name+'</h3>';
        cardDiv.appendChild(cardHeading);
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        const imageDiv = document.createElement('div');
        imageDiv.className = 'card-image';
        imageDiv.innerHTML = '<img src="'+(element.imageURL).replace("/static/", "")+'" alt="'+element.name+'">';
        cardContent.appendChild(imageDiv);
        const descDiv = document.createElement('div');
        descDiv.className = 'product-desc truncate';
        descDiv.innerHTML = '<p>'+element.description+'</p>';
        cardContent.appendChild(descDiv);
        const priceDiv = document.createElement('div');
        priceDiv.className = 'product-price';
        priceDiv.innerHTML = '<p>MRP Rs.'+element.price+'</p>';
        cardContent.appendChild(priceDiv);
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'card-button';
        buttonDiv.innerHTML = '<input type="hidden" class="product-data" data-price = "'+element.price+'" value="'+element.id+'" data-attr="'+element.name+'"/><button type="button" class="buy-product large">Buy Now</button>'+
        '<button type="button" class="buy-product small">Buy Now @ Rs.'+element.price+'</button>';
        cardContent.appendChild(buttonDiv);
        cardDiv.appendChild(cardContent);
        articleProduct.appendChild(cardDiv);
    }
}

module.exports = ProductController;