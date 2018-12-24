const CatService = require('./CatService');

const catService = new CatService();

class CategoryController {
    // use dependency injection
    constructor(catService) {
        this.catService = catService;
    }
    
    // to load data from json and display in html
    findAllItems() {
        catService.findAll()
        .then((res) => { 
            const ul = document.querySelector(".categories");
            res.forEach((element, index) => {
                const li = document.createElement('li');
                let liClass = '';
                if(index%2 === 0) {
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
                console.log(document.querySelector('.category-list__button'));
                // document.querySelector('.category-list__button').addEventListener('click', _ => {
                //     event.preventDefault();
                //     console.log(event.target.innerText);
                // });
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = CategoryController;