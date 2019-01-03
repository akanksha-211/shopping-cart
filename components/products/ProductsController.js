const ProductService = require('./ProductsService');
const prodService = new ProductService();

const CategoryService = require('../home/CatService');

const catService = new CategoryService();

const cartComponent = require('../cart/Cart');

const Cart = new cartComponent();

class ProductController{
    constructor(prodService) {
        this.prodService = prodService;
    }
    listAll(categoryId){
        const self = this;
        catService.findAll()
        .then(response => {
            const sideNav = document.querySelector('.page-content__category');
            const categoryList = document.createElement('div');
            categoryList.className = 'category-list';
            const categoryDropDown = document.createElement('div');
            categoryDropDown.className = 'category-dropdown small';
            categoryDropDown.innerHTML = '<span>'+response[0].name+'</span><a class="toggle"><i class="fas fa-caret-down"></i></a>';
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
                    categoryLink.onclick = function(){
                        document.querySelector(".category-dropdown.small span").innerText = element.name;
                        document.querySelector(".nav-list").style.display = 'none';
                        self.getProducts(element.id);
                    }
                    categoryLink.innerText = element.name;
                    listItem.appendChild(categoryLink);
                    sideNavList.appendChild(listItem);
                }
            });
            categoryList.appendChild(sideNavList);
            sideNav.appendChild(categoryList);
        })
        .catch(error => console.log(error) );
        this.getProducts(categoryId);
        
        setTimeout(() => {
            document.querySelector(".toggle").addEventListener('click', _ => {
                if(document.querySelector(".nav-list").style.display == "" || document.querySelector(".nav-list").style.display == "none") {
                    document.querySelector(".nav-list").style.display = 'block';
                }
                else {
                    document.querySelector(".nav-list").style.display = 'none';
                }
            }) 
        }, 500);
    }

    getProducts(categoryId) {
        document.querySelector(".page-content__productsList").innerHTML = '';
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
                    // const product_name = ((buy_now.parentElement).querySelector(".product-data").dataset.attr);
                    // const product_price = ((buy_now.parentElement).querySelector(".product-data").dataset.price);
                    // const product_image = ((buy_now.parentElement).querySelector(".product-data").dataset.value);
                    // console.log(product_id,product_name, product_price, product_image);
                    let quantity = 1;
                    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
                    // sessionStorage.clear();
                    sessionStorage.removeItem("cart");
                    cart.forEach(el => {
                        const cartInstance = (JSON.parse(el));
                        if(cartInstance.product_id == product_id){
                            quantity = cartInstance.qty;
                            quantity++;
                            cart.pop(el);
                        }
                    });
                    cart.push(JSON.stringify({
                        "product_id": product_id, 
                        // "product_name": product_name, 
                        // "price": product_price, 
                        // "image": product_image,
                        "qty": quantity
                    }));
                    
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    // console.log('length-------------'+JSON.parse(sessionStorage.getItem("cart")));
                    document.getElementById("overlay").style.display = "block";
                    document.body.style.overflow = 'hidden';
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
        buttonDiv.innerHTML = '<input type="hidden" class="product-data" data-price = "'+element.price+
        '" value="'+element.id+'" data-attr="'+element.name+'" data-value="'+(element.imageURL).replace("/static/", "")+
        '"/><button type="button" class="buy-product large">Buy Now</button>'+
        '<button type="button" class="buy-product small">Buy Now @ Rs.'+element.price+'</button>';
        cardContent.appendChild(buttonDiv);
        cardDiv.appendChild(cardContent);
        articleProduct.appendChild(cardDiv);
    }

    addtocart(id){
        prodService.addToCart(id)
        .then(response => console.log('RES-------------'+response))
        .catch(e => console.log('error--- add to cart'));
    }
}

module.exports = ProductController;