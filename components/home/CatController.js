const CatService = require('./CatService');

const catService = new CatService();

class CategoryController {
    // use dependency injection
    constructor(catService) {
        this.catService = catService;
    }
    render(){
        this.getBannerItems();
        this.findAllCategories();
    }
    // to load data from json and display in html
    findAllCategories() {
        let tab = 11;
        catService.findAll()
        .then((res) => { 
            const ul = document.querySelector(".categories");
            let counter = 0;
            res.forEach(element => {
                if(element.enabled) {
                    const li = document.createElement('li');
                    li.tabIndex = tab++;
                    let liClass = '';
                    if(counter%2 === 0) {
                        liClass = 'row';
                    }
                    else {
                    liClass = 'row-reverse'
                    }
                    li.className = 'category-item '+liClass;
                    li.innerHTML = '<img src="'+(element.imageUrl).replace("/static/", "")+'" alt="'+element.name+
                    '" width="250" height="175" class="category-image" tabindex="'+(tab++)+'"><ul class="category-detail"><li tabindex="'+(tab++)+'"><h3>'+element.name+
                    '</h3></li><li tabindex="'+(tab++)+'">'+element.description+'</li><li><button type="button" id="category-'+counter+'" class="category-list__button" data-attr="'+element.id+'" tabindex="'+(tab++)+'">'+element.name+'</button></li></ul>';
                    ul.appendChild(li);
                    counter++;
                }
            });
            const category_button = document.getElementsByClassName("category-list__button");
            Array.prototype.forEach.call(category_button, (category_button) => {
                category_button.addEventListener('click', function(){
                    console.log(category_button.dataset.attr);
                    window.location = '/products?id='+category_button.dataset.attr;
                });
            });
            document.querySelector(".page-footer span").tabIndex = tab;
        })
        .catch(err => {
            console.log(err);
        });
    }
    getBannerItems(){
        catService.getBanner().
        then(res => {
            const carouselContainer = document.querySelector(".carousel");
            const dotContainer = document.createElement('div');
            dotContainer.className = 'dot-container';
            const carousel = document.querySelector(".slideshow-container");
            res.forEach(element => {
                if(element.isActive) {
                    const div = document.createElement('div');
                    div.setAttribute("role", "image slide");
                    div.className = 'mySlides fade';
                    const image = document.createElement('img');
                    image.src = (element.bannerImageUrl).replace("/static/", "");
                    image.alt = element.bannerImageAlt;
                    div.appendChild(image);
                    carousel.appendChild(div);
                    const dot = document.createElement('span');
                    dot.className = 'dot';
                    dotContainer.appendChild(dot);
                }
            });
            carouselContainer.appendChild(dotContainer);
        })
        .catch(err => console.log(err));
    }
}

module.exports = CategoryController;