const CategoryService = require('./CatService');
const CategoryController = require('./CatController');

const catService = new CategoryService();
const catController = new CategoryController(catService);

var slideIndex = 1;
setTimeout(() => {
    showSlides(slideIndex);
}, 2000);


// Next/previous controls
document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block"; 
    // dots[slideIndex-1].className += " active";
  }

catController.render();