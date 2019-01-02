!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=class{constructor(){this.serviceUrl="http://localhost:5000"}async findAll(){try{const e=await fetch(this.serviceUrl+"/categories");if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}async getBanner(){try{const e=await fetch(this.serviceUrl+"/banners");if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}}},function(e,t){e.exports=class{constructor(){this.serviceUrl="http://localhost:5000"}async listAllProducts(){try{const e=await fetch(`${this.serviceUrl}/products`);if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}async listProductsByCategory(e){try{const t=await fetch(`${this.serviceUrl}?category=${e}`);if(200!==t.status&&201!==t.status)throw new Error(t.statusText);return await t.json()}catch(e){throw e}}async addToCart(e){try{let t="";return $.ajax({url:`${this.serviceUrl}/addToCart`,type:"POST",data:{id:e},success:function(e,n,r){t=r.responseText,console.log(t)},error:function(e,t,n){throw new Error("Error occurred!")}}),console.log(t),await t.json()}catch(e){throw e}}}},function(e,t,n){const r=new(n(1));e.exports=class{constructor(){}render(){let e=JSON.parse(sessionStorage.getItem("cart"))||[];const t=document.getElementById("overlayContainer");if(!document.querySelector(".overlay-header")){const e=document.createElement("div");e.className="overlay-header",e.innerHTML='<header><div class="cart-header"><div class="cart-name">My Cart</div><i class="fas fa-times close"></i></div></header>',t.appendChild(e);const n=document.createElement("div");n.className="overlay-content empty",n.innerHTML='<div class="cart-empty"><p>No items in your cart</p><p>Your favourite items are just a click away</p></div><div class="content"></div>';const r=document.createElement("div");r.className="overlay-footer",r.innerHTML='<div class="overlay-button"><button class="checkout start" type="button">Start Shopping</button></div>',t.appendChild(n),t.appendChild(r)}if(e.length){document.querySelector(".header-menu__subgroup-container.item-total").innerText=e.length+" items";const t=document.querySelector(".overlay-content"),n=t.getElementsByClassName("cart-instance");Array.prototype.forEach.call(n,e=>{e.remove()}),t.classList.remove("empty"),document.querySelector(".content").remove();const c=document.createElement("div");c.className="content",document.querySelector(".cart-empty").style.display="none";let a=0;r.listAllProducts().then(n=>{n.forEach(t=>{e.forEach(e=>{const n=JSON.parse(e);if(n.product_id==t.id&&n.qty){const e=document.createElement("div");e.className="cart-instance";const r=document.createElement("div");r.className="cart-instance__image",r.innerHTML='<img alt="'+t.name+'" src="'+t.imageURL.replace("/static/","")+'" height="100" width="100">',e.appendChild(r);const o=document.createElement("div");o.className="cart-instance__desc",o.innerHTML="<p>"+t.name+'</p><div class="cart-instance__qty"><button type="button" class="cart-instance__update decrease" data-id="'+t.id+'">-</button><span class="cart-qty">'+n.qty+'</span><button type="button" class="cart-instance__update increase" data-id="'+t.id+'">+</button><span class="times">X</span><span class="cart-price">Rs.'+t.price+"</div>",e.appendChild(o);const s=document.createElement("div");s.className="cart-instance__total",s.innerHTML="<span>Rs."+n.qty*t.price+"</span>",e.appendChild(s),c.appendChild(e),a+=n.qty*t.price}})});const r=document.createElement("div");r.className="cart__lowest-price",r.innerHTML='<img src="images/lowest-price.png"><span>You won\'t find it cheaper anywhere</span>',c.appendChild(r),t.appendChild(c),document.querySelector(".promo-message")&&document.querySelector(".promo-message").remove(),document.querySelector(".checkout.proceed")&&document.querySelector(".checkout.proceed").remove();const o=document.querySelector(".overlay-button"),s=document.createElement("div");s.className="promo-message",s.innerText="Promo code can be applied on payment page",o.appendChild(s),document.querySelector(".checkout.start").style.display="none";const d=document.createElement("button");d.className="checkout proceed",d.innerHTML='<div class="proceed">Proceed to Checout</div><div class="cart_total">Rs.'+a+'</div><div class="arrow">></div>',o.appendChild(d),$(".increase").each((t,n)=>{n.addEventListener("click",t=>{let n=0;e.forEach(t=>{const r=JSON.parse(t);r.product_id==event.target.dataset.id&&(n=r.qty,n++,e.pop(t))}),e.push(JSON.stringify({product_id:event.target.dataset.id,qty:n})),sessionStorage.setItem("cart",JSON.stringify(e)),this.render()})}),$(".decrease").each((t,n)=>{n.addEventListener("click",t=>{let n=1,r=0;e.forEach(t=>{const c=JSON.parse(t);c.product_id==event.target.dataset.id&&(n=c.qty,n--,e.pop(t)),r=r+c.qty-1}),e.push(JSON.stringify({product_id:event.target.dataset.id,qty:n})),r?sessionStorage.setItem("cart",JSON.stringify(e)):(sessionStorage.removeItem("cart"),document.querySelector(".cart-empty").style.display="block",document.querySelector(".content").style.display="none",document.querySelector(".promo-message").style.display="none",document.querySelector(".checkout.proceed").style.display="none",document.querySelector(".checkout.start").style.display="block",document.querySelector(".overlay-content").classList.add("empty"),document.querySelector(".header-menu__subgroup-container.item-total").innerText="0 items"),this.render()})}),document.querySelector(".proceed")&&document.querySelector(".proceed").addEventListener("click",e=>{document.getElementById("overlay").style.display="none"})}).catch(e=>console.log("Something went wrong!!")),document.querySelector(".cart__lowest-price")&&document.querySelector(".cart__lowest-price").remove()}document.querySelector(".close").addEventListener("click",e=>{document.getElementById("overlay").style.display="none"}),document.querySelector(".checkout.start").addEventListener("click",e=>{document.getElementById("overlay").style.display="none"})}}},,,,,function(e,t,n){const r=n(1),c=new(n(8))(new r),a=document.querySelector("#category"),o=new(n(2));c.listAll(a.value),document.querySelector(".header-menu__subgroup-container.cart").addEventListener("click",e=>{document.getElementById("overlay").style.display="block",o.render()});let s=JSON.parse(sessionStorage.getItem("cart"))||[];document.querySelector(".header-menu__subgroup-container.item-total").innerText=s.length+" items"},function(e,t,n){const r=new(n(1)),c=new(n(0)),a=new(n(2));e.exports=class{constructor(e){this.prodService=e}listAll(e){c.findAll().then(e=>{const t=document.querySelector(".page-content__category"),n=document.createElement("div");n.className="category-list";const r=document.createElement("div");r.className="category-dropdown small";const c=document.createElement("span");c.innerText=e[0].name,r.appendChild(c);const a=document.createElement("a");a.href="#",a.innerText="˅",r.appendChild(a),n.appendChild(r),t.appendChild(n);const o=document.createElement("ul");o.className="nav-list",e.forEach(e=>{if(e.enabled){const t=document.createElement("li");t.className="nav-list-item",t.dataset.attr=e.id;const n=document.createElement("a");n.className="category-link",n.href="?id="+e.id,n.innerText=e.name,t.appendChild(n),o.appendChild(t)}}),n.appendChild(o),t.appendChild(n)}).catch(e=>console.log(e)),r.listAllProducts().then(t=>{t.forEach(t=>{e&&""!=e?e==t.category&&this.printCard(t):this.printCard(t)});const n=document.getElementsByClassName("buy-product");Array.prototype.forEach.call(n,e=>{e.parentElement.addEventListener("click",t=>{event.stopImmediatePropagation();const n=e.parentElement.querySelector(".product-data").value;let r=1,c=JSON.parse(sessionStorage.getItem("cart"))||[];sessionStorage.removeItem("cart"),c.forEach(e=>{const t=JSON.parse(e);t.product_id==n&&(r=t.qty,r++,c.pop(e))}),c.push(JSON.stringify({product_id:n,qty:r})),sessionStorage.setItem("cart",JSON.stringify(c)),document.getElementById("overlay").style.display="block",a.render()})})}).catch(e=>console.log(e))}printCard(e){const t=document.querySelector(".page-content__productsList"),n=document.createElement("div");n.className="card";const r=document.createElement("div");r.className="card-heading",r.innerHTML="<h3>"+e.name+"</h3>",n.appendChild(r);const c=document.createElement("div");c.className="card-content";const a=document.createElement("div");a.className="card-image",a.innerHTML='<img src="'+e.imageURL.replace("/static/","")+'" alt="'+e.name+'">',c.appendChild(a);const o=document.createElement("div");o.className="product-desc truncate",o.innerHTML="<p>"+e.description+"</p>",c.appendChild(o);const s=document.createElement("div");s.className="product-price",s.innerHTML="<p>MRP Rs."+e.price+"</p>",c.appendChild(s);const d=document.createElement("div");d.className="card-button",d.innerHTML='<input type="hidden" class="product-data" data-price = "'+e.price+'" value="'+e.id+'" data-attr="'+e.name+'" data-value="'+e.imageURL.replace("/static/","")+'"/><button type="button" class="buy-product large">Buy Now</button><button type="button" class="buy-product small">Buy Now @ Rs.'+e.price+"</button>",c.appendChild(d),n.appendChild(c),t.appendChild(n)}addtocart(e){r.addToCart(e).then(e=>console.log("RES-------------"+e)).catch(e=>console.log("error--- add to cart"))}}}]);