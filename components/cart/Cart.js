const ProductService = require('../products/ProductsService');
const prodService = new ProductService();



class Cart {
    constructor(){

    }
    render() {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const overLayContainer = document.getElementById("overlayContainer");
        if(!document.querySelector(".overlay-header")){
            const overlayHeader = document.createElement('div');
            overlayHeader.className = 'overlay-header';
            overlayHeader.innerHTML = '<header><div class="cart-header"><div class="cart-name">My Cart</div><i class="fas fa-times close"></i></div></header>'
            overLayContainer.appendChild(overlayHeader);
            const overlayContent = document.createElement('div');
            overlayContent.className = 'overlay-content empty';
            overlayContent.innerHTML = '<div class="cart-empty"><p>No items in your cart</p><p>Your favourite items are just a click away</p></div><div class="content"></div>'
            const overlayFooter = document.createElement('div');
            overlayFooter.className = 'overlay-footer';
            overlayFooter.innerHTML = '<div class="overlay-button"><button class="checkout start" type="button">Start Shopping</button></div>'
            overLayContainer.appendChild(overlayContent);
            overLayContainer.appendChild(overlayFooter);
        }
        
        if(cart.length) {
            document.querySelector(".header-menu__subgroup-container.item-total").innerText = (cart.length)+ ' items';
            const overlayContent = document.querySelector(".overlay-content");
            const prevInstance = overlayContent.getElementsByClassName("cart-instance");
            // console.log(prevInstance);
            Array.prototype.forEach.call(prevInstance, prevInstance => {
                // console.log('instances');
                // console.log(prevInstance);
                prevInstance.remove();
            });
            overlayContent.classList.remove('empty');
            document.querySelector(".content").remove();
            const cartContainer = document.createElement('div');
            cartContainer.className = "content";
            document.querySelector(".cart-empty").style.display = 'none';
            let total = 0;
            prodService.listAllProducts()
            .then(res => {
                res.forEach(element => {
                    cart.forEach(el => {
                        const instance = JSON.parse(el);
                        if((instance.product_id == element.id) && instance.qty){
                            const cartInstance = document.createElement('div');
                            cartInstance.className = 'cart-instance';
                            const product_image = document.createElement('div');
                            product_image.className = 'cart-instance__image';
                            product_image.innerHTML = '<img alt="'+element.name+'" src="'+(element.imageURL).replace("/static/", "")+
                            '" height="100" width="100">';
                            cartInstance.appendChild(product_image);
                            const product_desc = document.createElement('div');
                            product_desc.className = 'cart-instance__desc';
                            product_desc.innerHTML = '<p>'+element.name+
                            '</p><div class="cart-instance__qty"><button type="button" class="cart-instance__update decrease" data-id="'+element.id+'">-</button><span class="cart-qty">'+
                            instance.qty+'</span><button type="button" class="cart-instance__update increase" data-id="'+element.id+'">+</button><span class="times">X</span><span class="cart-price">Rs.'+
                            element.price+'</div>';
                            cartInstance.appendChild(product_desc);
                            const product_total = document.createElement('div');
                            product_total.className = 'cart-instance__total';
                            product_total.innerHTML = '<span>Rs.'+(instance.qty*element.price)+'</span>'
                            cartInstance.appendChild(product_total);
                            cartContainer.appendChild(cartInstance);
                            total = total + (instance.qty*element.price);
                        }
                    });
                });
                const lowest_priceDiv = document.createElement('div');
                lowest_priceDiv.className = 'cart__lowest-price';
                lowest_priceDiv.innerHTML = '<img src="images/lowest-price.png"><span>You won\'t find it cheaper anywhere</span>';
                cartContainer.appendChild(lowest_priceDiv);
                overlayContent.appendChild(cartContainer);
                
                if(document.querySelector(".promo-message")) {
                    document.querySelector(".promo-message").remove();
                }
                if(document.querySelector(".checkout.proceed")) {
                    document.querySelector(".checkout.proceed").remove();
                }
                const cart_footer = document.querySelector('.overlay-button');
                const promo = document.createElement('div');
                promo.className = 'promo-message';
                promo.innerText = 'Promo code can be applied on payment page';
                cart_footer.appendChild(promo);
                document.querySelector('.checkout.start').style.display = 'none';
                const checkout_button = document.createElement('button');
                checkout_button.className = 'checkout proceed';
                checkout_button.innerHTML = '<div class="proceed">Proceed to Checout</div><div class="cart_total">Rs.'+total+'</div><div class="arrow">></div>'
                cart_footer.appendChild(checkout_button);
                $(".increase").each((index, el) => {
                    el.addEventListener('click', _ => {
                        let quantity = 0;
                        cart.forEach(obj => {
                            const instObj = JSON.parse(obj);
                            if(instObj.product_id == event.target.dataset.id) {
                                quantity = instObj.qty;
                                quantity++;
                                cart.pop(obj);
                            }
                        });
                        cart.push(JSON.stringify({
                            "product_id": event.target.dataset.id, 
                            "qty": quantity
                        }));
                        sessionStorage.setItem("cart", JSON.stringify(cart))
                        this.render();
                    });
                });
                $(".decrease").each((index, el) => {
                    el.addEventListener('click', _ => {
                        let quantity = 1;
                        let totalItems = 0;
                        cart.forEach(obj => {
                            const instObj = JSON.parse(obj);
                            if(instObj.product_id == event.target.dataset.id) {
                                quantity = instObj.qty;
                                quantity--;
                                cart.pop(obj);
                            }
                            totalItems = (totalItems + instObj.qty)-1;
                        });
                        cart.push(JSON.stringify({
                            "product_id": event.target.dataset.id, 
                            "qty": quantity
                        }));
                        if(totalItems) {
                            sessionStorage.setItem("cart", JSON.stringify(cart))
                        }
                        else {
                            sessionStorage.removeItem("cart");
                            document.querySelector(".cart-empty").style.display = 'block';
                            document.querySelector(".content").style.display = 'none';
                            document.querySelector(".promo-message").style.display = 'none';
                            document.querySelector(".checkout.proceed").style.display = 'none';
                            document.querySelector(".checkout.start").style.display = 'block';
                            document.querySelector(".overlay-content").classList.add('empty');
                            document.querySelector(".header-menu__subgroup-container.item-total").innerText = '0 items';
                        }
                        this.render();
                    });
                });
                if(document.querySelector(".proceed")) {
                    document.querySelector(".proceed").addEventListener('click', _ => {
                        document.getElementById("overlay").style.display = "none";
                    });
                }
            })
            .catch(error => console.log('Something went wrong!!')) ;
            if(document.querySelector(".cart__lowest-price")) {
                document.querySelector(".cart__lowest-price").remove();
            }
        }
        document.querySelector(".close").addEventListener('click', _ => {
            document.getElementById("overlay").style.display = "none";
        });
        document.querySelector(".checkout.start").addEventListener('click', _ => {
            document.getElementById("overlay").style.display = "none";
        });
        
    }
}

module.exports = Cart;