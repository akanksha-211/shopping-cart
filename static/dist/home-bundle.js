!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=class{constructor(){this.serviceUrl="http://localhost:5000"}async findAll(){try{const e=await fetch(this.serviceUrl+"/categories");if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}async getBanner(){try{const e=await fetch(this.serviceUrl+"/banners");if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(e){throw e}}}},,function(e,t,n){const r=n(0),a=new(n(3))(new r);var o=0;function c(){var e,t=document.getElementsByClassName("mySlides");for(e=0;e<t.length;e++)t[e].style.display="none";++o>t.length&&(o=1),t[o-1].style.display="block",setTimeout(c,2e3)}function s(e){l(o+=e)}function l(e){var t,n=document.getElementsByClassName("mySlides"),r=document.getElementsByClassName("dot");for(e>n.length&&(o=1),e<1&&(o=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<r.length;t++)r[t].className=r[t].className.replace(" active","");n[o-1].style.display="block",r[o-1].className+=" active"}setTimeout(()=>{c()},500),document.querySelector(".prev").addEventListener("click",()=>{s(-1)}),document.querySelector(".next").addEventListener("click",()=>{s(1)}),a.render()},function(e,t,n){const r=new(n(0));e.exports=class{constructor(e){this.catService=e}render(){this.getBannerItems(),this.findAllCategories()}findAllCategories(){let e=11;r.findAll().then(t=>{const n=document.querySelector(".categories");let r=0;t.forEach(t=>{if(t.enabled){const a=document.createElement("li");a.tabIndex=e++;let o="";o=r%2==0?"row":"row-reverse",a.className="category-item "+o,a.innerHTML='<img src="'+t.imageUrl.replace("/static/","")+'" alt="'+t.name+'" width="250" height="175" class="category-image" tabindex="'+e+++'"><ul class="category-detail"><li tabindex="'+e+++'"><h3>'+t.name+'</h3></li><li tabindex="'+e+++'">'+t.description+'</li><li><button type="button" class="category-list__button" tabindex="'+e+++'">'+t.name+"</button></li></ul>",n.appendChild(a),r++}}),document.querySelector(".page-footer span").tabIndex=e}).catch(e=>{console.log(e)})}getBannerItems(){r.getBanner().then(e=>{const t=document.querySelector(".carousel"),n=document.createElement("div");n.className="dot-container";const r=document.querySelector(".slideshow-container");e.forEach(e=>{if(e.isActive){const t=document.createElement("div");t.setAttribute("role","image slide"),t.className="mySlides fade";const a=document.createElement("img");a.src=e.bannerImageUrl.replace("/static/",""),a.alt=e.bannerImageAlt,t.appendChild(a),r.appendChild(t);const o=document.createElement("span");o.className="dot",n.appendChild(o)}}),t.appendChild(n)}).catch(e=>console.log(e))}}}]);