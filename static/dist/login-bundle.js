!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}({5:function(e,t,r){(new(r(6))).render(),document.querySelector(".form-control.email").addEventListener("focus",e=>{document.querySelector(".login--label.email").style.visibility="visible"}),document.querySelector(".form-control.email").addEventListener("blur",e=>{event.target.value&&""!=event.target.value||(document.querySelector(".login--label.email").style.visibility="hidden")}),document.querySelector(".form-control.password").addEventListener("focus",e=>{document.querySelector(".login--label.password").style.visibility="visible"}),document.querySelector(".form-control.password").addEventListener("blur",e=>{event.target.value&&""!=event.target.value||(document.querySelector(".login--label.password").style.visibility="hidden")}),document.querySelector(".form-control.login").addEventListener("click",e=>{event.preventDefault();const t=document.getElementsByTagName("input");let r=!0;Array.prototype.forEach.call(t,e=>{const t=e.parentElement.querySelector(".errorMessage");e.validity.valid?(e.parentElement.classList.remove("error"),t.innerText="",t.style.visibility="hidden"):(e.parentElement.classList.add("error"),t.style.visibility="visible",r=!1),e.validity.valueMissing?t.innerText=e.placeholder+" required":e.validity.patternMismatch&&("email"==e.type?t.innerText="Please enter a valid email address":"password"==e.type&&(console.dir(e.value),t.innerText="Password must have a alphabet and a number and no spaces"))}),r&&(window.location="/")})},6:function(e,t){e.exports=class{constructor(){}render(){const e=document.querySelector(".page__content--aside"),t=document.createElement("h2");t.tabIndex=8,t.innerText="Login";const r=document.createElement("span");r.tabIndex=9,r.innerText="Get access to your Orders, Wishlist and Recommendations",e.appendChild(t),e.appendChild(r);const n=document.querySelector(".page__content--article"),o=document.createElement("form");o.id="login-form",o.method="post";const l=document.createElement("div");l.className="form-group",l.setAttribute("role","email form group"),l.innerHTML='<label for="email" class="login--label email" tabindex="10" style="visibility:hidden">Email</label><input type="email" required data-value-missing="Required" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$" data-pattern-mismatch="Wrong pattern" class="form-control email" id="email" name="email" tabindex="11" placeholder="Email"><em class="errorMessage" style="visibility:hidden;"></em>',o.appendChild(l);const i=document.createElement("div");i.setAttribute("role","password form group"),i.className="form-group",i.innerHTML='<label for="password" class="login--label password" tabindex="12" style="visibility:hidden">Password</label><input type="password" class="form-control password" id="password" pattern="(?=.*d)(?=.*[a-zA-Z]).{6,}" name="password" tabindex="13" placeholder="Password" required><em class="errorMessage" style="visibility:hidden;"></em>',o.appendChild(i);const a=document.createElement("div");a.setAttribute("role","button form group"),a.className="form-group",a.innerHTML='<button class="form-control login" id="login" name="login" tabindex="14">Login</button>',o.appendChild(a),n.appendChild(o)}}}});