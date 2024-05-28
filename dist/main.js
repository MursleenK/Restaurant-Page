(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(601),r=t.n(i),o=t(314),a=t.n(o)()(r());a.push([e.id,'body{\n    margin: 0px;\n    background-image: url("https://static.dezeen.com/uploads/2015/11/Bird-Islington-by-Brinkworth_dezeen_1568_0.jpg");\n    background-repeat: no-repeat;\n    background-size:cover; \n    color: white;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n}\nheader{\n    background-color: rgba(0, 0, 0, 0.575);\n    height: 10%;\n\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr ;\n    gap: 250px;\n}\nnav {\n    align-self: center;\n}\nbutton{\n    font-size:large;\n    background-color: rgba(0, 0, 0, 0);\n    color: white;\n    border: 0;\n}\nbutton:hover{\n    background-color: rgba(255, 217, 0, 0.616);\n}\n.title{ \n    font-size: xxx-large;\n    justify-self:end;\n    align-self: center;\n}\n#content{\n    width: 100%;\n    height: 90%;\n    background-color: rgba(0, 0, 0, 0.486);\n\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n.aboutContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr 2fr;\n    gap: 40px;\n\n    width: 80%;\n}\n.aboutDescriptionHeading{\n    font-size: xx-large;\n    font-weight:900;\n\n    grid-column-start: 1;\n    grid-column-end: 3;\n    justify-self: center;\n}\n.aboutDescription{\n    grid-column-start: 1;\n    grid-column-end: 3;\n\n    font-size: large;\n}\n.location :nth-child(1), .timing :nth-child(1) {\n    font-size: x-large;\n    font-weight:900;\n}\n.homeContainer{\n\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr;\n\n}\n.offerTitle{\n    font-size:70px;\n}\n.description{\n    font-size: 20px;\n    width: 800px;\n    padding-left: 90px;\n\n    align-self: center;\n}\n.buyButton{\n    border:  dashed 1px rgba(255, 217, 0, 0.616);\n    font-size: 25px;\n}\n.menuContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 20px;\n}\n.specialties :nth-child(1), .combos :nth-child(1), .desserts :nth-child(1), .drinks :nth-child(1){\n    text-align: center;\n    font-weight: 900;\n    font-size: x-large;\n}\n.specialties :nth-child(2), .specialties :nth-child(4), .combos :nth-child(2), .combos :nth-child(4){\n    font-weight: 550;\n}\n.desserts :nth-child(2), .desserts :nth-child(3), .drinks :nth-child(2), .drinks :nth-child(3), .drinks :nth-child(4) {\n    margin-top: 5px;\n}\n\n',""]);const s=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var d=e[s],c=i.base?d[0]+i.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var p=t(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=r(h,i);i.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var d=i(e,r),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},659:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{let e=document.querySelector(".home"),n=document.querySelector(".menu"),i=document.querySelector(".about"),r=document.querySelector("#content"),o=r.children;var a=t(72),s=t.n(a),d=t(825),c=t.n(d),l=t(659),u=t.n(l),p=t(56),h=t.n(p),f=t(540),m=t.n(f),v=t(113),g=t.n(v),y=t(365),b={};b.styleTagTransform=g(),b.setAttributes=h(),b.insert=u().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=m(),s()(y.A,b),y.A&&y.A.locals&&y.A.locals,e.addEventListener("click",(()=>{r.removeChild(o[0]);const e=document.createElement("div");e.classList.add("homeContainer"),r.appendChild(e);const n=document.createElement("div");n.classList.add("offerTitle"),n.textContent="Special Fried Chicken!",e.appendChild(n);const t=document.createElement("div");t.classList.add("description"),t.textContent="\n    Indulge in the ultimate fried chicken experience with our Signature Special Fried Chicken.\n    Indulge in the ultimate fried chicken experience with our Signature Special Fried Chicken.\n        of herbs and spices for 24 hours to ensure maximum flavor.\n    Each piece is hand-breaded in a light, crispy coating that delivers a perfect crunch\n        with every bite.",e.appendChild(t);const i=document.createElement("button");i.classList.add("buyButton"),i.textContent="Let's go!",e.appendChild(i)})),n.addEventListener("click",(()=>{r.removeChild(o[0]);const e=document.createElement("div");e.classList.add("menuContainer"),r.appendChild(e);const n=document.createElement("div");n.classList.add("specialties"),e.appendChild(n),n.innerHTML+="<div>Specialties</div>",n.innerHTML+="<ul>Signature Fried Chicken</ul>",n.innerHTML+="<li>Classic | Spicy | Buttermilk</li>",n.innerHTML+="<ul>Crispy Chicken Wings</ul>",n.innerHTML+="<li>Buffalo | BBQ | Korean-Style</li>";const t=document.createElement("div");t.classList.add("combos"),e.appendChild(t),t.innerHTML+="<div>Combos</div>",t.innerHTML+="<ul>Two-Piece Combo</ul>",t.innerHTML+="<li>Chicken, one side, and a biscuit</li>",t.innerHTML+="<ul>Family Bucket</ul>",t.innerHTML+="<li>Eight pieces, four sides, and four biscuits</li>";const i=document.createElement("div");i.classList.add("desserts"),e.appendChild(i),i.innerHTML+="<div>Desserts</div>",i.innerHTML+="<li>Apple Pie</li>",i.innerHTML+="<li>Chocolate Lava Cake</li>";const a=document.createElement("div");a.classList.add("drinks"),e.appendChild(a),a.innerHTML+="<div>Drinks</div>",a.innerHTML+="<li>Iced Tea</li>",a.innerHTML+="<li>Soft Drinks</li>",a.innerHTML+="<li>Milkshakes</li>"})),i.addEventListener("click",(()=>{r.removeChild(o[0]);const e=document.createElement("div");e.classList.add("aboutContainer"),r.appendChild(e);const n=document.createElement("div");n.classList.add("aboutDescriptionHeading"),n.textContent="Experience the Crunch: Welcome to Crispy Delights!",e.appendChild(n);const t=document.createElement("div");t.classList.add("aboutDescription"),t.textContent="\n        Founded with a simple mission to bring joy to every bite, Crispy Delights has \n        quickly become a beloved destination for fried chicken enthusiasts and comfort food lovers alike.\n    At Crispy Delights, we believe that great food starts with great ingredients. That’s why we meticulously \n        source the finest quality chicken, locally sourced whenever possible, and handpick the freshest herbs \n        and spices to create our signature marinades and batters.\n    Thank you for joining us on this delicious journey. We can’t wait to welcome you to Crispy Delights \n        and share the joy of perfectly fried chicken with you.",e.appendChild(t);const i=document.createElement("div");i.classList.add("location"),e.appendChild(i),i.innerHTML+="<div>Location:</div>",i.innerHTML+="<div>Crispy Delights</div>",i.innerHTML+="<div>456 Fried Chicken Avenue</div>",i.innerHTML+="<div>Townsville</div>";const a=document.createElement("div");a.classList.add("timing"),e.appendChild(a),a.innerHTML+="<div>Hours of Operation:</div>",a.innerHTML+="<div>Monday - Thursday: 11:00 AM - 9:00 PM</div>",a.innerHTML+="<div>Friday - Saturday: 11:00 AM - 10:00 PM</div>",a.innerHTML+="<div>Sunday: Closed</div>"}))})()})();