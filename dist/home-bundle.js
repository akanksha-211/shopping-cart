!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=class{constructor(){this.serviceUrl="http://localhost:5000"}async findAll(){try{const e=await fetch(this.serviceUrl+"/categories");if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}async getBanner(){try{const e=await fetch(this.serviceUrl+"/banners");if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}}},,function(e,t,n){const r=n(0),o=new(n(3))(new r);var c=1;function a(e){s(c+=e)}function s(e){var t,n=document.getElementsByClassName("mySlides");for(e>n.length&&(c=1),e<1&&(c=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[c-1].style.display="block"}setTimeout(()=>{s(c)},2e3),document.querySelector(".prev").addEventListener("click",()=>{a(-1)}),document.querySelector(".next").addEventListener("click",()=>{a(1)}),o.render()},function(e,t,n){const r=new(n(0));e.exports=class{constructor(e){this.catService=e}render(){this.getBannerItems(),this.findAllCategories()}findAllCategories(){r.findAll().then(e=>{const t=document.querySelector(".categories");let n=0;e.forEach(e=>{if(e.enabled){const r=document.createElement("li");let o="";o=n%2==0?"row":"row-reverse",r.className="category-item "+o,r.innerHTML='<img src="../..'+e.imageUrl+'" alt="'+e.name+'" width="250" height="175" class="category-image"><ul class="category-detail"><li><h3>'+e.name+"</h3></li><li>"+e.description+'</li><li><button type="button" class="category-list__button">'+e.name+"</button></li></ul>",t.appendChild(r),n++}})}).catch(e=>{console.log(e)})}getBannerItems(){r.getBanner().then(e=>{const t=document.querySelector(".slideshow-container");e.forEach(e=>{if(e.isActive){const n=document.createElement("div");n.className="mySlides fade";const r=document.createElement("img");r.src="../.."+e.bannerImageUrl,r.alt=e.bannerImageAlt,n.appendChild(r),t.appendChild(n)}})}).catch(e=>console.log(e))}}}]);