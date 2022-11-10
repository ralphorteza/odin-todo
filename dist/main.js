(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/* TODO: fix layout of content  */\n\nbody {\n margin: 0%;\n}\n#content {\n  position: relative;\n\n  height: 100vh;\n  width: auto;\n\n  display: grid;\n  gap: 4px;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n\n}\n\n:is(#header, #sidebar, #main, #footer, #form-container, .card) {\n  border: 2px solid black;\n}\n\n#sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 8;\n}\n\n#header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n}\n#main {\n  grid-column: 2 / -1;\n  grid-row: 2 / 8;\n}\n#footer{\n  grid-column: 1 / -1;\n  grid-row: 8 / -1;\n}\n\n.card {\n  height: 2rem;\n  width: clamp(70%, 120px, 140px);\n  margin: 5px;\n}\n\n\n/* Main container */\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  position: relative;\n}\n\n/* button */\n#add-task{\n  position: absolute;\n  bottom: 3rem;\n  right: 3rem;\n  height: 50px;\n  width: 80px;\n}\n\n\n/* Form Container */\n#form-container {\n  display: flex;\n  flex-direction: column;\n\n  width: 300px;\n  height: auto;\n\n  /* Fixes position to the middle of viewport. */\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nfieldset {\n  margin: 0%;\n  border: none;\n}\n\nfieldset > div {\n  margin-bottom: 20px;\n  display: flex;\n  flex-flow: row wrap;\n}\n\nbutton, label, input {\n  display: block;\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 5px;\n  height: 30px;\n}\n\ninput {\n  box-shadow: inset 1px 1px 3px #ccc;\n  border-radius: 5px;\n}\n\ninput:hover, input:focus {\n  background-color: #eee;\n}\n\ninput + span {\n  position: relative;\n}\n\ninput:required + span::after{\n  font-size: 0.7rem;\n  position: absolute;\n  content: "required";\n  color: white;\n  background-color: black;\n  padding: 5px 10px;\n  top: -26px;\n  left: -70px;\n}\n\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],p=i[d]||0,u="".concat(d," ").concat(p);i[d]=p+1;var l=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),p=t.n(d),u=t(589),l=t.n(u),f=t(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=(n,e,t,r)=>{const o=String(n),i=String(e),a=(String(t),r),c=document.createElement("div"),s=document.createElement("label");s.setAttribute("for",o),s.innerText=`${i}: `,c.append(s);const d=document.createElement("input");d.setAttribute("id",o),d.setAttribute("name",o),d.required=a,c.append(d);const p=document.createElement("span");return c.append(p),c};(()=>{const n=document.getElementById("content"),e=(()=>{const n=document.createElement("div");n.setAttribute("id","form-container");const e=document.createElement("fieldset");n.append(e);const t=v("task-title","Task","text",!0);e.append(t);const r=v("task-desc","Description","text",!1);return e.append(r),n})();n.append(e)})()})()})();