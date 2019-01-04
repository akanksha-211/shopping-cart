import CategoryService from './CatService';
import CategoryController from './CatController';
import cart from '../cart/Cart';

const catService = new CategoryService();
const catController = new CategoryController(catService);


const Cart = new cart();
catController.render();

var slideIndex = 0;
setTimeout(() => {
    showSlidesAuto();
}, 500);

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
    setTimeout(showSlidesAuto, 1000); // Change image every 2 seconds
  }
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
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

(document.querySelector(".header-menu__subgroup-container.cart")).addEventListener('click', _ => {
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = 'hidden';
    Cart.render();
});
let cartStore = JSON.parse(sessionStorage.getItem("cart")) || [];
let total = 0;
cartStore.forEach(element => {
    total += JSON.parse(element).qty;
});

document.querySelector(".header-menu__subgroup-container.item-total").innerText = (total)+ ' items';