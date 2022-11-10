(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"/* TODO: fix layout of content  */\n\nbody {\n margin: 0%;\n}\n#content {\n  height: 100vh;\n  width: auto;\n  display: grid;\n  gap: 4px;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n\n}\n\n:is(#header, #sidebar, #main, #footer, .card) {\n  border: 2px solid black;\n}\n\n#sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 8;\n}\n\n#header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n}\n#main {\n  grid-column: 2 / -1;\n  grid-row: 2 / 8;\n}\n#footer{\n  grid-column: 1 / -1;\n  grid-row: 8 / -1;\n}\n\n.card {\n  height: 2rem;\n  width: clamp(70%, 120px, 140px);\n  margin: 5px;\n}\n\n\n/* Main container */\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  position: relative;\n}\n\n/* button */\n#add-task{\n  position: absolute;\n  bottom: 3rem;\n  right: 3rem;\n  height: 50px;\n  width: 80px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),u=t.n(d),p=t(589),l=t.n(p),f=t(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=()=>{const e=document.createElement("div");return e.classList.add("card"),e},h=e=>{document.querySelector(`#${e.id}`).addEventListener("click",(()=>{main.append(v())}))};(()=>{const e=document.getElementById("content"),n={sidebar:(()=>{const e=document.createElement("div");return e.setAttribute("id","sidebar"),e})(),header:(()=>{const e=document.createElement("div");return e.setAttribute("id","header"),e})(),main:(()=>{const e=document.createElement("div");return e.setAttribute("id","main"),e})(),footer:(()=>{const e=document.createElement("div");return e.setAttribute("id","footer"),e})()},t=n.header;e.append(t);const r=n.sidebar;e.append(r);const o=n.main;e.append(o),o.append(v()),o.append(v());const a=((e,n)=>{const t=document.createElement("button");return t.setAttribute("type","button"),t.setAttribute("id",String(e)),t.innerText=String(n),t})("add-task","Add");o.append(a),h(a);const i=n.footer;e.append(i)})()})()})();