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
        catService.findAll()
        .then((res) => { 
            const ul = document.querySelector(".categories");
            let counter = 0;
            res.forEach(element => {
                if(element.enabled) {
                    const li = document.createElement('li');
                    let liClass = '';
                    if(counter%2 === 0) {
                        liClass = 'row';
                    }
                    else {
                    liClass = 'row-reverse'
                    }
                    li.className = 'category-item '+liClass;
                    li.innerHTML = '<img src="../..'+element.imageUrl+'" alt="'+element.name+
                    '" width="250" height="175" class="category-image"><ul class="category-detail"><li><h3>'+element.name+
                    '</h3></li><li>'+element.description+'</li><li><button type="button" class="category-list__button">'+element.name+'</button></li></ul>';
                    ul.appendChild(li);
                    counter++;
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    getBannerItems(){
        catService.getBanner().
        then(res => {
            const carousel = document.querySelector(".slideshow-container");
            res.forEach(element => {
                if(element.isActive) {
                    const div = document.createElement('div');
                    div.className = 'mySlides fade';
                    const image = document.createElement('img');
                    image.src = '../..'+element.bannerImageUrl;
                    image.alt = element.bannerImageAlt;
                    div.appendChild(image);
                    carousel.appendChild(div);
                }
            });
        })
        .catch(err => console.log(err));
    }
}

module.exports = CategoryController;