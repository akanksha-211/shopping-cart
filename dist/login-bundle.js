!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}({4:function(e,n,t){(new(t(5))).render()},5:function(e,n){e.exports=class{constructor(){}render(){const e=document.querySelector(".page__content--aside"),n=document.createElement("h2");n.innerText="Login";const t=document.createElement("h5");t.innerText="Get access to your Orders, Wishlist and Recommendations",e.appendChild(n).appendChild(t);const r=document.querySelector(".page__content--article"),o=document.createElement("form"),a=document.createElement("div");a.className="form-group",a.innerHTML='<label for="email" class="login--label">Email</label><input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" class="form-control email" id="email" name="email">',o.appendChild(a);const l=document.createElement("div");l.className="form-group",l.innerHTML='<label for="password" class="login--label">Password</label><input type="password" pattern="" class="form-control password" id="password" name="password">',o.appendChild(l);const c=document.createElement("div");c.className="form-group",c.innerHTML='<button type="button" class="form-control login" id="login" name="login">Login</button>',o.appendChild(c),r.appendChild(o)}}}});