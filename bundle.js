(()=>{"use strict";var n={360:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #000;\n}\np {\n  text-indent: 2em;\n  margin: 0 1em;\n}\np:first-of-type::first-letter {\n  font-size: 2em;\n}\np:last-of-type {\n  text-align: right;\n}\nhtml {\n  font-size: 14px;\n}\n@media screen and (min-width: 1025px) {\n  #book {\n    display: flex;\n    margin-top: 10vh;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #book {\n    margin: 10vh 10vw;\n    height: 80vh;\n    width: 80vw;\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #book {\n    margin: 10vh 10vw;\n    display: flex;\n    height: 80vh;\n    width: 80vw;\n    transform: rotateX(10deg);\n  }\n}\n@media screen and (min-width: 1025px) {\n  #book > * {\n    transform: rotateX(10deg);\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #book > * {\n    transform: rotateX(10deg);\n  }\n}\n#rotate-page {\n  height: 80vh;\n  position: absolute;\n  z-index: 1;\n}\n@media screen and (min-width: 1025px) {\n  #rotate-page {\n    display: flex;\n    width: 800px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #rotate-page {\n    width: 80vw;\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #rotate-page {\n    display: flex;\n    width: 80vw;\n  }\n}\n.page {\n  background: snow;\n  border: #e8e8e8 solid 1px;\n}\n@media screen and (min-width: 1025px) {\n  .page {\n    height: calc(80vh - 2px);\n    width: 398px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .page {\n    height: calc(40vh - 1px);\n    width: calc(80vw - 2px);\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  .page {\n    height: calc(80vh - 2px);\n    width: calc(40vw - 1px);\n  }\n}\n.title {\n  text-align: center;\n  font-size: 2em;\n  height: 20%;\n}\n.title::before {\n  display: block;\n  content: '';\n  height: 20%;\n}\n.content {\n  overflow-y: scroll;\n}\n@media screen and (min-width: 1025px) {\n  .content {\n    height: 70%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .content {\n    height: 75%;\n  }\n}\n::-webkit-scrollbar {\n  width: 2px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(128, 128, 128, 0.5);\n}\n@keyframes l_to_r1 {\n  0% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(90deg);\n  }\n}\n@-webkit-keyframes webkit_l_to_r1 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(90deg);\n  }\n}\n@keyframes l_to_r2 {\n  0% {\n    transform: rotateX(10deg) rotateY(-90deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_l_to_r2 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(-90deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@keyframes r_to_l1 {\n  0% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(-90deg);\n  }\n}\n@-webkit-keyframes webkit_r_to_l1 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(-90deg);\n  }\n}\n@keyframes r_to_l2 {\n  0% {\n    transform: rotateX(10deg) rotateY(90deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_r_to_l2 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(90deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@keyframes t_to_b1 {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(90deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_t_to_b1 {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(90deg) rotateY(0deg);\n  }\n}\n@keyframes t_to_b2 {\n  0% {\n    transform: rotateX(-90deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_t_to_b2 {\n  0% {\n    -webkit-transform: rotateX(-90deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@keyframes b_to_t1 {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(-90deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_b_to_t1 {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(-90deg) rotateY(0deg);\n  }\n}\n@keyframes b_to_t2 {\n  0% {\n    transform: rotateX(90deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_b_to_t2 {\n  0% {\n    -webkit-transform: rotateX(90deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},109:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});var r=t(379),o=t.n(r),a=t(360);o()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},r=[],o=0;o<n.length;o++){var d=n[o],s=e.base?d[0]+e.base:d[0],l=t[s]||0,c="".concat(s," ").concat(l);t[s]=l+1;var f=i(c),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(a[f].references++,a[f].updater(m)):a.push({identifier:c,updater:p(m,e),references:1}),r.push(c)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,c=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=c(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function m(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var u=null,g=0;function p(n,e){var t,r,o;if(e.singleton){var a=g++;t=u||(u=s(e)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=s(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=d(n,e),l=0;l<t.length;l++){var c=i(t[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=s}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{function n(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}t(109);var e=document.querySelector("#rotate-page"),r=document.querySelectorAll(".page"),o=[{title:"My Little Airpot",content:["二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","二百年后这里什么也不是宇宙里有什么不是暂时","2020.12.02"]},{title:"广州足浴一夜",content:["人生是什么","我今晚不知道喎","2020.12.02"]},{title:"九龙公园游泳池",content:["二百年后这里什么也不是","宇宙里有什么不是暂时","2020.12.02"]},{title:"悲伤的采购",content:["从前话过要如何欣赏世界的美丽","现在只懂得放假去消费","2020.12.02"]},{title:"宅女上街吧",content:["但愿你的醒觉","不会是在多年以后","2020.12.02"]},{title:"验孕的下昼",content:["世界要你去努力考取功名","但真诚才是最大本领","2020.12.02"]}],a=void 0,i=!0,d=[[1,0,1,2,3],[-1,1,0,3,2]],s={x:0,y:0};function l(n,t,d,s,l){i&&(a-2>=0&&-1===n||a+2<=o.length&&1===n)&&(i=!1,a+=2*n,r[s].style.opacity=a<3&&1===n||a>=o.length-2&&-1===n?0:1,a===o.length||0===a?r[l].style.opacity=0:1===n?c(r[l],o[a]):-1===n&&c(r[l],o[a-1]),r[t].style.opacity=0,c(r[s],r[t]),1===n?"flex"===window.getComputedStyle(e).display?(e.style.animation="r_to_l1 .5s linear",e.style.webkitAnimation="webkit_r_to_l1 .5s linear"):(e.style.animation="b_to_t1 .5s linear",e.style.webkitAnimation="webkit_b_to_t1 .5s linear"):"flex"===window.getComputedStyle(e).display?(e.style.animation="l_to_r1 .5s linear",e.style.webkitAnimation="webkit_l_to_r1 .5s linear"):(e.style.animation="t_to_b1 .5s linear",e.style.webkitAnimation="webkit_t_to_b1 .5s linear"),setTimeout((function(){r[t].style.opacity=1,r[d].style.opacity=0,1===n?c(r[t],o[a-1]):-1===n&&c(r[t],o[a]),1===n?"flex"===window.getComputedStyle(e).display?(e.style.animation="r_to_l2 .5s linear",e.style.webkitAnimation="webkit_r_to_l2 .5s linear"):(e.style.animation="b_to_t2 .5s linear",e.style.webkitAnimation="webkit_b_to_t2 .5s linear"):"flex"===window.getComputedStyle(e).display?(e.style.animation="l_to_r2 .5s linear",e.style.webkitAnimation="webkit_l_to_r2 .5s linear"):(e.style.animation="t_to_b2 .5s linear",e.style.webkitAnimation="webkit_t_to_b2 .5s linear")}),484),setTimeout((function(){r[d].style.opacity=1,a===o.length||0===a?r[d].style.opacity=0:c(r[d],r[l]),i=!0,e.style.animation="",e.style.webkitAnimation=""}),1e3))}function c(n,e){if(e.nodeType)n.children[0].innerText=e.children[0].innerText,n.children[1].innerHTML=e.children[1].innerHTML;else for(var t in n.children[0].innerText=e.title,n.children[1].innerHTML="",e.content){var r=document.createElement("p");r.innerText=e.content[t],n.children[1].appendChild(r)}}a=0,r[0].style.opacity=r[2].style.opacity=0,c(r[1],o[a]),c(r[3],o[a+2]),r[0].onmousedown=function(){s.x=0,s.y=0},r[1].onmousedown=function(){s.x=0,s.y=0},r[0].onmousemove=function(n){s.x=n.clientX,s.y=n.clientY},r[1].onmousemove=function(n){s.x=n.clientX,s.y=n.clientY},r[0].onmouseup=function(){s.x||s.y||l.apply(void 0,n(d[1]))},r[1].onmouseup=function(){s.x||s.y||l.apply(void 0,n(d[0]))},r[0].ontouchstart=function(){s.x=0,s.y=0},r[1].ontouchstart=function(){s.x=0,s.y=0},r[0].ontouchmove=function(n){s.x=n.clientX,s.y=n.clientY},r[1].ontouchmove=function(n){s.x=n.clientX,s.y=n.clientY},r[0].ontouchend=function(){s.x||s.y||l.apply(void 0,n(d[1]))},r[1].ontouchend=function(){s.x||s.y||l.apply(void 0,n(d[0]))}})()})();