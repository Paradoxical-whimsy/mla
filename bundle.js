(()=>{"use strict";var e={360:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #000;\n}\np {\n  text-indent: 2em;\n  margin: 0 1em;\n}\np:first-of-type::first-letter {\n  font-size: 2em;\n}\np:last-of-type {\n  text-align: right;\n}\nhtml {\n  font-size: 14px;\n}\n@media screen and (min-width: 1025px) {\n  #book {\n    display: flex;\n    margin-top: 10vh;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #book {\n    margin: 10vh 10vw;\n    height: 80vh;\n    width: 80vw;\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #book {\n    margin: 10vh 10vw;\n    display: flex;\n    height: 80vh;\n    width: 80vw;\n    transform: rotateX(10deg);\n  }\n}\n@media screen and (min-width: 1025px) {\n  #book > * {\n    transform: rotateX(10deg);\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #book > * {\n    transform: rotateX(10deg);\n  }\n}\n#rotate-page {\n  height: 80vh;\n  position: absolute;\n  z-index: 1;\n}\n@media screen and (min-width: 1025px) {\n  #rotate-page {\n    display: flex;\n    width: 800px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #rotate-page {\n    width: 80vw;\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  #rotate-page {\n    display: flex;\n    width: 80vw;\n  }\n}\n.page {\n  background: snow;\n  border: #e8e8e8 solid 1px;\n}\n@media screen and (min-width: 1025px) {\n  .page {\n    height: calc(80vh - 2px);\n    width: 398px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .page {\n    height: calc(40vh - 1px);\n    width: calc(80vw - 2px);\n  }\n}\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  .page {\n    height: calc(80vh - 2px);\n    width: calc(40vw - 1px);\n  }\n}\n.title {\n  text-align: center;\n  font-size: 2em;\n  height: 20%;\n}\n.title::before {\n  display: block;\n  content: '';\n  height: 20%;\n}\n.content {\n  overflow-y: scroll;\n}\n@media screen and (min-width: 1025px) {\n  .content {\n    height: 70%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .content {\n    height: 75%;\n  }\n}\n::-webkit-scrollbar {\n  width: 2px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(128, 128, 128, 0.5);\n}\n@keyframes l_to_r1 {\n  0% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(90deg);\n  }\n}\n@-webkit-keyframes webkit_l_to_r1 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(90deg);\n  }\n}\n@keyframes l_to_r2 {\n  0% {\n    transform: rotateX(10deg) rotateY(-90deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_l_to_r2 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(-90deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@keyframes r_to_l1 {\n  0% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(-90deg);\n  }\n}\n@-webkit-keyframes webkit_r_to_l1 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(-90deg);\n  }\n}\n@keyframes r_to_l2 {\n  0% {\n    transform: rotateX(10deg) rotateY(90deg);\n  }\n  100% {\n    transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_r_to_l2 {\n  0% {\n    -webkit-transform: rotateX(10deg) rotateY(90deg);\n  }\n  100% {\n    -webkit-transform: rotateX(10deg) rotateY(0deg);\n  }\n}\n@keyframes t_to_b1 {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(90deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_t_to_b1 {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(90deg) rotateY(0deg);\n  }\n}\n@keyframes t_to_b2 {\n  0% {\n    transform: rotateX(-90deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_t_to_b2 {\n  0% {\n    -webkit-transform: rotateX(-90deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@keyframes b_to_t1 {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(-90deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_b_to_t1 {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(-90deg) rotateY(0deg);\n  }\n}\n@keyframes b_to_t2 {\n  0% {\n    transform: rotateX(90deg) rotateY(0deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n@-webkit-keyframes webkit_b_to_t2 {\n  0% {\n    -webkit-transform: rotateX(90deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n  }\n}\n",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},109:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(379),a=n.n(r),o=n(360);a()(o.Z,{insert:"head",singleton:!1});const i=o.Z.locals||{}},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],a=0;a<e.length;a++){var d=e[a],s=t.base?d[0]+t.base:d[0],l=n[s]||0,c="".concat(s," ").concat(l);n[s]=l+1;var f=i(c),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(o[f].references++,o[f].updater(m)):o.push({identifier:c,updater:u(m,t),references:1}),r.push(c)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,p=0;function u(e,t){var n,r,a;if(t.singleton){var o=p++;n=g||(g=s(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=s(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var s=d(e,t),l=0;l<n.length;l++){var c=i(n[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(109);var t=document.querySelector("#rotate-page"),r=document.querySelectorAll(".page"),a=[{title:"My Little Airpot",content:["点我请问请问请问请问燃气费噶阿斯利康发哈李开复哈伦裤设计费哈萨克积分","按时打算打算打算佛翘起金佛我仅供其及其为奇偶气雾剂哦我就该骄傲司法局按时发过去额","按时打算打算打算佛翘起金佛我仅供其及其为奇偶气雾剂哦我就该骄傲司法局按时发过去额","按时打算打算打算佛翘起金佛我仅供其及其为奇偶气雾剂哦我就该骄傲司法局按时发过去额","按时打算打算打算佛翘起金佛我仅供其及其为奇偶气雾剂哦我就该骄傲司法局按时发过去额","按时打算打算打算佛翘起金佛我仅供其及其为奇偶气雾剂哦我就该骄傲司法局按时发过去额","2020.12.02"]},{title:"广州足浴一夜",content:["人生是什么","我今晚不知道喎","2020.12.02"]},{title:"九龙公园游泳池",content:["二百年后这里什么也不是","宇宙里有什么不是暂时","2020.12.02"]},{title:"悲伤的采购",content:["从前话过要如何欣赏世界的美丽","现在只懂得放假去消费","2020.12.02"]},{title:"宅女上街吧",content:["但愿你的醒觉","不会是在多年以后","2020.12.02"]}],o=void 0,i=!0,d=[[1,0,1,2,3],[-1,1,0,3,2]];function s(e,n,d,s,c){i&&(o-2>=0&&-1===e||o+2<=a.length&&1===e)&&(i=!1,o+=2*e,r[s].style.opacity=o<3&&1===e||o>=a.length-2&&-1===e?0:1,o===a.length||0===o?r[c].style.opacity=0:1===e?l(r[c],a[o]):-1===e&&l(r[c],a[o-1]),r[n].style.opacity=0,l(r[s],r[n]),1===e?"flex"===window.getComputedStyle(t).display?(t.style.animation="r_to_l1 .5s linear",t.style.webkitAnimation="webkit_r_to_l1 .5s linear"):(t.style.animation="b_to_t1 .5s linear",t.style.webkitAnimation="webkit_b_to_t1 .5s linear"):"flex"===window.getComputedStyle(t).display?(t.style.animation="l_to_r1 .5s linear",t.style.webkitAnimation="webkit_l_to_r1 .5s linear"):(t.style.animation="t_to_b1 .5s linear",t.style.webkitAnimation="webkit_t_to_b1 .5s linear"),setTimeout((function(){r[n].style.opacity=1,r[d].style.opacity=0,1===e?l(r[n],a[o-1]):-1===e&&l(r[n],a[o]),1===e?"flex"===window.getComputedStyle(t).display?(t.style.animation="r_to_l2 .5s linear",t.style.webkitAnimation="webkit_r_to_l2 .5s linear"):(t.style.animation="b_to_t2 .5s linear",t.style.webkitAnimation="webkit_b_to_t2 .5s linear"):"flex"===window.getComputedStyle(t).display?(t.style.animation="l_to_r2 .5s linear",t.style.webkitAnimation="webkit_l_to_r2 .5s linear"):(t.style.animation="t_to_b2 .5s linear",t.style.webkitAnimation="webkit_t_to_b2 .5s linear")}),484),setTimeout((function(){r[d].style.opacity=1,o===a.length||0===o?r[d].style.opacity=0:l(r[d],r[c]),i=!0,t.style.animation="",t.style.webkitAnimation=""}),1e3))}function l(e,t){if(t.nodeType)e.children[0].innerText=t.children[0].innerText,e.children[1].innerHTML=t.children[1].innerHTML;else for(var n in e.children[0].innerText=t.title,e.children[1].innerHTML="",t.content){var r=document.createElement("p");r.innerText=t.content[n],e.children[1].appendChild(r)}}o=0,r[0].style.opacity=r[2].style.opacity=0,l(r[1],a[o]),l(r[3],a[o+2]),r[0].onclick=function(){return s.apply(void 0,e(d[1]))},r[1].onclick=function(){return s.apply(void 0,e(d[0]))},r[0].ontouchstart=function(){return s.apply(void 0,e(d[1]))},r[1].ontouchstart=function(){return s.apply(void 0,e(d[0]))}})()})();