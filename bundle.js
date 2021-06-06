(()=>{"use strict";var e={360:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #000;\n}\np {\n  text-indent: 2em;\n  margin: 0 1em;\n}\np:first-of-type::first-letter {\n  font-size: 2em;\n}\np:last-of-type {\n  text-align: right;\n}\nhtml {\n  font-size: 14px;\n}\n@media screen and (min-width: 1025px) {\n  #book {\n    display: flex;\n    margin-top: 10vh;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #book {\n    margin: 10vh 10vw;\n    height: 80vh;\n    width: 80vw;\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #book {\n    margin: 10vh 10vw;\n    display: flex;\n    height: 80vh;\n    width: 80vw;\n    transform: rotateX(10deg);\n  }\n}\n@media screen and (min-width: 1025px) {\n  #book > * {\n    transform: rotateX(10deg);\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #book > * {\n    transform: rotateX(10deg);\n  }\n}\n#rotate-page {\n  height: 80vh;\n  position: absolute;\n  z-index: 1;\n}\n@media screen and (min-width: 1025px) {\n  #rotate-page {\n    display: flex;\n    width: 800px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #rotate-page {\n    width: 80vw;\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #rotate-page {\n    display: flex;\n    width: 80vw;\n  }\n}\n.page {\n  background: snow;\n  border: #e8e8e8 solid 1px;\n}\n@media screen and (min-width: 1025px) {\n  .page {\n    height: calc(80vh - 2px);\n    width: 398px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .page {\n    height: calc(40vh - 1px);\n    width: calc(80vw - 2px);\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  .page {\n    height: calc(80vh - 2px);\n    width: calc(40vw - 1px);\n  }\n}\n.title {\n  text-align: center;\n  font-size: 2em;\n  height: 20%;\n}\n.title::before {\n  display: block;\n  content: '';\n  height: 20%;\n}\n.content {\n  overflow-y: scroll;\n}\n@media screen and (min-width: 1025px) {\n  .content {\n    height: 70%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .content {\n    height: 75%;\n  }\n}\n::-webkit-scrollbar {\n  width: 2px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(128, 128, 128, 0.5);\n}\n@keyframes l_to_r1 {\n  0% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(90deg);\n  }\n}\n@-webkit-keyframes webkit_l_to_r1 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(90deg);\n  }\n}\n@keyframes l_to_r2 {\n  0% {\n    transform: rotateX(10deg) rotateY(-90deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_l_to_r2 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(-90deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@keyframes r_to_l1 {\n  0% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(-90deg);\n  }\n}\n@-webkit-keyframes webkit_r_to_l1 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(-90deg);\n  }\n}\n@keyframes r_to_l2 {\n  0% {\n    transform: rotateX(10deg) rotateY(90deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_r_to_l2 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(90deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@keyframes t_to_b1 {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(90deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_t_to_b1 {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(90deg) rotateY(0deg);\n  }\n}\n@keyframes t_to_b2 {\n  0% {\n    transform: rotateX(-90deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_t_to_b2 {\n  0% {\n    -webkit-transform: rotateX(-90deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@keyframes b_to_t1 {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(-90deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_b_to_t1 {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(-90deg) rotateY(0deg);\n  }\n}\n@keyframes b_to_t2 {\n  0% {\n    transform: rotateX(90deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_b_to_t2 {\n  0% {\n    -webkit-transform: rotateX(90deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},109:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(379),o=t.n(r),a=t(360);o()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],o=0;o<e.length;o++){var d=e[o],s=n.base?d[0]+n.base:d[0],l=t[s]||0,c="".concat(s," ").concat(l);t[s]=l+1;var f=i(c),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(a[f].references++,a[f].updater(m)):a.push({identifier:c,updater:u(m,n),references:1}),r.push(c)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,c=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,p=0;function u(e,n){var t,r,o;if(n.singleton){var a=p++;t=g||(g=s(n)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=s(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=d(e,n),l=0;l<t.length;l++){var c=i(t[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t(109);var n=document.querySelector("#rotate-page"),r=document.querySelectorAll(".page"),o=[{title:"My Little Airpot",content:[]},{title:"广州足浴一夜",content:["人生是什么","我今晚不知道喎","2020.12.02"]},{title:"九龙公园游泳池",content:["二百年后这里什么也不是","宇宙里有什么不是暂时","2020.12.02"]},{title:"悲伤的采购",content:["从前话过要如何欣赏世界的美丽","现在只懂得放假去消费","2020.12.02"]},{title:"宅女上街吧",content:["但愿你的醒觉","不会是在多年以后","2020.12.02"]},{title:"验孕的下昼",content:["世界要你去努力考取功名","但真诚才是最大本领","2020.12.02"]}],a=void 0,i=!0,d=[[1,0,1,2,3],[-1,1,0,3,2]],s={x:0,y:0};function l(e,t,d,s,l){i&&(a-2>=0&&-1===e||a+2<=o.length&&1===e)&&(i=!1,a+=2*e,r[s].style.opacity=a<3&&1===e||a>=o.length-2&&-1===e?0:1,a===o.length||0===a?r[l].style.opacity=0:1===e?c(r[l],o[a]):-1===e&&c(r[l],o[a-1]),r[t].style.opacity=0,c(r[s],r[t]),1===e?"flex"===window.getComputedStyle(n).display?(n.style.animation="r_to_l1 .5s linear",n.style.webkitAnimation="webkit_r_to_l1 .5s linear"):(n.style.animation="b_to_t1 .5s linear",n.style.webkitAnimation="webkit_b_to_t1 .5s linear"):"flex"===window.getComputedStyle(n).display?(n.style.animation="l_to_r1 .5s linear",n.style.webkitAnimation="webkit_l_to_r1 .5s linear"):(n.style.animation="t_to_b1 .5s linear",n.style.webkitAnimation="webkit_t_to_b1 .5s linear"),setTimeout((function(){r[t].style.opacity=1,r[d].style.opacity=0,1===e?c(r[t],o[a-1]):-1===e&&c(r[t],o[a]),1===e?"flex"===window.getComputedStyle(n).display?(n.style.animation="r_to_l2 .5s linear",n.style.webkitAnimation="webkit_r_to_l2 .5s linear"):(n.style.animation="b_to_t2 .5s linear",n.style.webkitAnimation="webkit_b_to_t2 .5s linear"):"flex"===window.getComputedStyle(n).display?(n.style.animation="l_to_r2 .5s linear",n.style.webkitAnimation="webkit_l_to_r2 .5s linear"):(n.style.animation="t_to_b2 .5s linear",n.style.webkitAnimation="webkit_t_to_b2 .5s linear")}),484),setTimeout((function(){r[d].style.opacity=1,a===o.length||0===a?r[d].style.opacity=0:c(r[d],r[l]),i=!0,n.style.animation="",n.style.webkitAnimation=""}),1e3))}function c(e,n){if(n.nodeType)e.children[0].innerText=n.children[0].innerText,e.children[1].innerHTML=n.children[1].innerHTML;else for(var t in e.children[0].innerText=n.title,e.children[1].innerHTML="",n.content){var r=document.createElement("p");r.innerText=n.content[t],e.children[1].appendChild(r)}}function f(){s.x=0,s.y=0}a=0,r[0].style.opacity=r[2].style.opacity=0,c(r[1],o[a]),c(r[3],o[a+2]),r[0].onmousedown=f,r[1].onmousedown=f,r[0].onmouseup=function(n){n.pageX===s.x&&n.pageY===s.y||l.apply(void 0,e(d[1]))},r[1].onmouseup=function(n){n.pageX===s.x&&n.pageY===s.y||l.apply(void 0,e(d[0]))},r[0].ontouchstart=f,r[1].ontouchstart=f,r[0].ontouchend=function(n){n.pageX===s.x&&n.pageY===s.y||l.apply(void 0,e(d[1]))},r[1].ontouchend=function(n){n.pageX===s.x&&n.pageY===s.y||l.apply(void 0,e(d[0]))}})()})();