!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./",t(t.s=10)}([function(e,n,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function l(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},a=[],r=0;r<e.length;r++){var i=e[r],d=n.base?i[0]+n.base:i[0],s=t[d]||0,u="".concat(d," ").concat(s);t[d]=s+1;var c=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(o[c].references++,o[c].updater(p)):o.push({identifier:u,updater:f(p,n),references:1}),a.push(u)}return a}function s(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,c=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=c(n,r);else{var i=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function m(e,n,t){var a=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var _=null,b=0;function f(e,n){var t,a,r;if(n.singleton){var i=b++;t=_||(_=s(n)),a=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=s(n),a=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var r=l(t[a]);o[r].references--}for(var i=d(e,n),s=0;s<t.length;s++){var u=l(t[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var r=(o=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(d," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var o,l,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},function(e,n,t){var a=t(0),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=n},function(e,n,t){var a=t(0),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,n,t){var a=t(1),r=t(6),i=t(7),o=t(8),l=t(9);n=a(!1);var d=r(i),s=r(o),u=r(l);n.push([e.i,'@font-face{font-family:"Monteserrat";src:url('+d+') format("truetype")}@font-face{font-family:"Balsamiq";src:url('+s+') format("truetype")}*{box-sizing:border-box}body{height:100vh;font-family:Monteserrat}.header{background:#42a5f5;padding:10px 20px}.header__title{color:#fff;margin:0;font-family:Balsamiq}.mainWrapper{display:flex;padding:20px 20px 13px 0;overflow-x:auto;position:relative;background:url('+u+") no-repeat;background-size:cover;height:calc(100vh - 56px);align-items:flex-start}.mainWrapper::-webkit-scrollbar{height:7px}.mainWrapper::-webkit-scrollbar-track{border-radius:5px;background:rgba(9,30,66,.08)}.mainWrapper::-webkit-scrollbar-thumb{background:#bfc4ce;border-radius:5px}.mainWrapper .column{transition:.3s;border-radius:5px;max-height:calc(100vh - 96px);width:260px;background:#dfe3e6;box-shadow:2px 1px 7px 0px rgba(0,0,0,.65);margin-left:20px;flex-shrink:0;position:relative}.mainWrapper .column.dragstart{border:1px dashed #000;opacity:.5}.mainWrapper .column.dragover{transition:.3s;transform:translateY(20px);box-shadow:1px 1px 5px 2px rgba(255,255,255,.65)}.mainWrapper .column .interactionPanel{display:flex;justify-content:flex-end;position:absolute;top:0%;left:0;opacity:0;width:100%;padding:2px;z-index:-1;transition:.3s}.mainWrapper .column .interactionPanel button{background:none;border:none;cursor:pointer;padding:1px;font-size:18px;color:#fff;border-radius:5px}.mainWrapper .column .interactionPanel .interactionPanel__button{transition:.3s}.mainWrapper .column .interactionPanel .interactionPanel__button:hover{color:#000;background-color:rgba(0,0,0,.15)}.mainWrapper .column .column__interactionPanel button{color:#6b808c}.mainWrapper .column .editColumnTitlePanel .column__titleWrap{min-height:30px;padding-bottom:8px;display:flex;align-items:center;opacity:1;transition:opacity .3s ease-out,display .3s ease .5s}.mainWrapper .column .editColumnTitlePanel .column__titleWrap .column__title{font-size:13px;margin:0 0 0 12px;font-weight:bold;border-radius:5px;word-break:break-all}.mainWrapper .column .editColumnTitlePanel .column__titleWrap.hiddenTitle{opacity:0;display:none;transition:opacity .3s ease-out,display .3s ease .5s;padding:0;margin:0}.mainWrapper .column .editColumnTitlePanel .column__titleWrap:hover .column__interactionPanel{opacity:1}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper{height:0;transition:.3s;overflow:hidden}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper.openInputPanel{height:auto;overflow:visible;transition:.3s}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__input{margin:12px 12px 0;padding:8px 12px;box-shadow:1px 1px 7px 0px rgba(0,0,0,.15);border:none;border-radius:5px;font-size:13px;width:calc(100% - 24px)}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__buttonsWrap{padding:8px 12px 12px 12px;display:flex;justify-content:space-between}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__buttonsWrap .editColumnTitlePanel__button{border:none;cursor:pointer;background:none}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__buttonsWrap .ediTitle{background:#39c071;color:#fff;padding:8px 12px 5px;border-radius:5px;transition:.3s}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__buttonsWrap .ediTitle:hover{background:#0d4625}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__buttonsWrap .cancel{color:#6b808c;transition:.3s;border-radius:5px}.mainWrapper .column .editColumnTitlePanel .editColumnTitlePanelWrapper .editColumnTitlePanel__buttonsWrap .cancel:hover{color:#000;background:rgba(0,0,0,.15)}.mainWrapper .column .column__taskWrapper{max-height:62vh;overflow-y:auto;margin:0 6px 0;padding:0 6px 0}.mainWrapper .column .column__taskWrapper::-webkit-scrollbar{width:7px}.mainWrapper .column .column__taskWrapper::-webkit-scrollbar-track{border-radius:5px;background:rgba(9,30,66,.08)}.mainWrapper .column .column__taskWrapper::-webkit-scrollbar-thumb{background:#bfc4ce;border-radius:5px}.mainWrapper .column .column__taskWrapper .column__task{position:relative;transition:.3s}.mainWrapper .column .column__taskWrapper .column__task.dragstart:hover p{border:1px dashed #000;color:rgba(0,0,0,0);background:none;transition:.3s}.mainWrapper .column .column__taskWrapper .column__task.dragover{opacity:.5;transition:.3s}.mainWrapper .column .column__taskWrapper .column__task.dragover p{border:1px dashed #000;box-shadow:2px 2px 4px 1px rgba(0,0,0,.5);transition:.3s}.mainWrapper .column .column__taskWrapper .column__task:hover p{background:#6b808c}.mainWrapper .column .column__taskWrapper .column__task:hover .interactionPanel{opacity:1;z-index:9999}.mainWrapper .column .column__taskWrapper .task__wrapper{display:block;opacity:1;transition:opacity .3s ease-out,display .3s ease .5s}.mainWrapper .column .column__taskWrapper .task__wrapper.hiddenTitle{opacity:0;display:none;transition:opacity .3s ease-out,display .3s ease .5s;padding:0;margin:0}.mainWrapper .column .column__taskWrapper .task__title{border-radius:5px;background-color:#fff;padding:12px;font-size:13px;margin:0;margin-bottom:8px;box-shadow:1px 1px 7px 0px rgba(0,0,0,.15);word-break:break-all;transition:.3s}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper{display:none}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper.openInputPanel{display:block}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__textarea{padding:8px 12px;box-shadow:1px 1px 7px 0px rgba(0,0,0,.15);border:none;border-radius:5px;font-size:13px;width:100%}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__buttonsWrap{padding:8px 0px 12px 0px;display:flex;justify-content:space-between}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__buttonsWrap .editTaskPanel__button{border:none;cursor:pointer;background:none}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__buttonsWrap .editTask{background:#39c071;color:#fff;padding:8px 12px 5px;border-radius:5px;transition:.3s}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__buttonsWrap .editTask:hover{background:#0d4625}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__buttonsWrap .cancel{color:#6b808c;transition:.3s;border-radius:5px}.mainWrapper .column .column__taskWrapper .editTaskPanel__wrapper .editTaskPanel__buttonsWrap .cancel:hover{color:#000;background:rgba(0,0,0,.15)}.mainWrapper .column .column__addTask{font-size:13px;border-radius:5px;background:inherit;border:none;cursor:pointer;text-align:left;width:calc(100% - 12px);color:#6b808c;transition:.3s;font-weight:bold}.mainWrapper .column .column__addTask:hover{background-color:rgba(0,0,0,.15)}.mainWrapper .column:hover{cursor:pointer}.mainWrapper .column:hover .column__interactionPanel{top:0;z-index:9999}.mainWrapper .column .addTaskPanel .column__addTask{display:flex;height:26px;opacity:1;transition:.3s;margin-left:6px;margin-bottom:6px;margin-top:6px;padding:6px}.mainWrapper .column .addTaskPanel .column__addTask.hiddenTitle{opacity:0;height:0;transition:.3s;padding:0;margin:0}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper{height:0;transition:.3s;overflow:hidden}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper.openInputPanel{height:108px;overflow:visible;transition:.3s}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTask__input{margin:12px 12px 0;padding:8px 12px;box-shadow:1px 1px 7px 0px rgba(0,0,0,.15);border:none;border-radius:5px;font-size:13px;width:calc(100% - 24px)}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTaskPanel__ButtonsWrap{padding:8px 12px 12px 12px;display:flex;justify-content:space-between}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTaskPanel__ButtonsWrap .addTaskPanel__button{border:none;cursor:pointer;background:none}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTaskPanel__ButtonsWrap .addTask{background:#39c071;color:#fff;padding:8px 12px 5px;border-radius:5px;transition:.3s}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTaskPanel__ButtonsWrap .addTask:hover{background:#0d4625}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTaskPanel__ButtonsWrap .cancel{color:#6b808c;transition:.3s;border-radius:5px}.mainWrapper .column .addTaskPanel .addTaskPanel__wrapper .addTaskPanel__ButtonsWrap .cancel:hover{color:#000;background:rgba(0,0,0,.15)}.mainWrapper .newColumn{transition:.3s;display:flex;flex-direction:column;justify-content:center;margin-right:20px}.mainWrapper .newColumn .column__title{cursor:pointer;font-size:13px;font-weight:bold;margin:0;padding:0 0 0 12px;color:#6b808c;width:100%;height:30px;display:flex;align-items:center;border-radius:5px;opacity:1;transition:.3s}.mainWrapper .newColumn .column__title.hiddenTitle{opacity:0;height:0;transition:.3s}.mainWrapper .newColumn:hover .column__title{color:#dfe3e6;background-color:#6b808c;transition:.3s}.mainWrapper .newColumn .newColumn__inputPanelWrap{height:0;transition:.3s;overflow:hidden}.mainWrapper .newColumn .newColumn__inputPanelWrap.openInputPanel{height:108px;overflow:visible;transition:.3s}.mainWrapper .newColumn .newColumn__input{margin:12px 12px 0;padding:8px 12px;box-shadow:1px 1px 7px 0px rgba(0,0,0,.15);border:none;border-radius:5px;font-size:13px;width:calc(100% - 24px)}.mainWrapper .newColumn .newColumn__ButtonsWrap{padding:8px 12px 12px 12px;display:flex;justify-content:space-between}.mainWrapper .newColumn .newColumn__ButtonsWrap .newColumn__button{border:none;cursor:pointer;background:none}.mainWrapper .newColumn .newColumn__ButtonsWrap .addColumn{background:#39c071;color:#fff;padding:8px 12px 5px;border-radius:5px;transition:.3s}.mainWrapper .newColumn .newColumn__ButtonsWrap .addColumn:hover{background:#0d4625}.mainWrapper .newColumn .newColumn__ButtonsWrap .cancel{color:#6b808c;transition:.3s;border-radius:5px}.mainWrapper .newColumn .newColumn__ButtonsWrap .cancel:hover{color:#000;background:rgba(0,0,0,.15)}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"3cd786652b8a2e9d41f210cb1a527ff6.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"600fc42389926ea6ae36e9942fa6c6c5.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"ff30e720fcf5df9e1b08923a5cc5cc28.jpg"},function(e,n,t){"use strict";t.r(n),t.d(n,"columns",(function(){return T})),t.d(n,"tasks",(function(){return P})),t.d(n,"addTaskButton",(function(){return W})),t.d(n,"addTaskInput",(function(){return w}));t(2),t(4);const a=e=>{const n=document.querySelector(".newColumnWrapper");(Array.isArray(e)?e:[e]).forEach(({id:e,title:t})=>{document.createElement("div").classList.add("column"),n.insertAdjacentHTML("beforebegin",`<div class='column' id=${e} draggable="true">\n       <div class="column__editColumnTitlePanel editColumnTitlePanel">\n          <div class="column__titleWrap">\n            <h2 class="column__title">${t}</h2>\n            <div class="column__interactionPanel interactionPanel">\n              <button class="interactionPanel__button editButton">\n                &#9998;\n              </button>\n              <button class="interactionPanel__button removeButton" data-id="${e}">\n                &#10006;\n              </button>\n            </div>\n          </div>\n          <div\n            class="column__editColumnTitlePanelWrapper editColumnTitlePanelWrapper"\n          >\n            <textarea\n            name="title"\n            class="editColumnTitlePanel__input"\n            ></textarea>\n            <div class="editColumnTitlePanel__buttonsWrap">\n              <button class="editColumnTitlePanel__button ediTitle" data-id="${e}">\n                Изменить\n              </button>\n              <button class="editColumnTitlePanel__button cancel">\n                &#10006;\n              </button>\n            </div>\n          </div>\n        </div>\n       <div class="column__taskWrapper" id=${e}></div>\n       <div class="column__addTaskPanel addTaskPanel">\n          <button class="column__addTask">+ Добавить еще одну карточку</button>\n          <div class="addTaskPanel__wrapper">\n            <textarea\n              name="addTask"\n              class="addTask__input"\n              placeholder="Введите описание карточки"\n            ></textarea>\n            <div class="addTaskPanel__ButtonsWrap">\n              <button class="addTaskPanel__button addTask" data-id=${e}>Добавить карточку</button>\n              <button class="addTaskPanel__button cancel">&#10006;</button>\n            </div>\n          </div>\n        </div>\n     </div>`)})},r=e=>{const n=document.querySelectorAll(".column__taskWrapper");(Array.isArray(e)?e:[e]).forEach(({id:e,title:t,columnId:a})=>{n.forEach(n=>{n.id==a&&n.insertAdjacentHTML("beforeend",`<div class="column__task task" id=${e} draggable="true">\n             <div class="task__wrapper">   \n              <div class="task__interactionPanel interactionPanel">\n                <button class="interactionPanel__button editButton">&#9998;</button>\n                <button class="interactionPanel__button removeButton" data-id=${e}>&#10006;</button>\n               </div>\n               <p class="task__title">${t}</p>\n              </div> \n              <div class="column__editTaskPanelWrapper editTaskPanel__wrapper">\n               <textarea class="editTaskPanel__textarea"></textarea>\n               <div class="editTaskPanel__buttonsWrap">\n                <button class="editTaskPanel__button editTask" data-id=${e}>\n                  Изменить\n                </button>\n                <button class="editTaskPanel__button cancel">\n                  &#10006;\n                </button>\n              </div>\n              </div>\n             </div>`)})})},i=({target:e},n,t)=>{confirm("You want remove this item")&&(n=n.filter(({id:n})=>(e.closest(""+t).remove(),n!=e.dataset.id)))},o=(e,n)=>{e.forEach(e=>{e.addEventListener("click",e=>i(e,n,".task"))})},l=(e,n)=>{e.forEach(e=>{e.addEventListener("click",e=>i(e,n,".column"))})},d=(e,n,t,a)=>{n.forEach((n,r)=>{n.addEventListener("click",({target:{dataset:{id:n}}})=>{e[r].value.length<1?alert("Поле не должно быть пустым"):(t=t.map(t=>t.id==n?{...t,title:e[r].value}:t),a(n,e[r]))})})},s=(e,n,t)=>{d(e,n,t,(e,n)=>{const t=document.querySelector(`div.task[id="${e}"] p`),a=document.querySelector(`div.task[id="${e}"] .task__wrapper`),r=document.querySelector(`div.task[id="${e}"] .column__editTaskPanelWrapper`);t.innerHTML=n.value,a.classList.remove("hiddenTitle"),r.classList.remove("openInputPanel")})},u=(e,n,t)=>{d(e,n,t,(e,n)=>{const t=document.querySelector(`div.column[id="${e}"] h2`),a=document.querySelector(`div.column[id="${e}"] .column__titleWrap`),r=document.querySelector(`div.column[id="${e}"] .column__editColumnTitlePanelWrapper `);t.innerHTML=n.value,a.classList.remove("hiddenTitle"),r.classList.remove("openInputPanel")})},c=(e,n)=>{e.forEach((e,t)=>{e.value=n[t].innerHTML,(e=>{e.addEventListener("input",({target:{style:e,scrollHeight:n}})=>{e.height=n+"px"}),e.style.height="1px",e.style.height=e.scrollHeight+"px"})(e)})},p=()=>{const e=document.querySelectorAll(".column h2"),n=document.querySelectorAll("textarea.editColumnTitlePanel__input"),t=document.querySelectorAll(".column .column__taskWrapper p"),a=document.querySelectorAll(".editTaskPanel__wrapper textarea");c(n,e),c(a,t)},m=(e,n,t,a,r,i=!1)=>{e.forEach((e,t)=>{e.addEventListener("click",({target:e})=>{(r?r[t]:e).classList.add("hiddenTitle"),n[t].classList.add("openInputPanel"),a[t].focus(),i&&p()})}),t.forEach((t,i)=>{t.addEventListener("click",()=>{(r?r[i]:e[i]).classList.remove("hiddenTitle"),n[i].classList.remove("openInputPanel"),a[i].value=""})})};let _=null,b=null,f=null;const h=e=>{[...e].forEach(n=>{const t=document.querySelectorAll(".task");n.addEventListener("dragstart",(function(e){b=this,this.classList.add("dragstart"),t.forEach(e=>e.removeAttribute("draggable"))})),n.addEventListener("dragend",(function(){b.classList.remove("dragstart"),b=null,e.forEach(e=>e.classList.remove("dragover")),t.forEach(e=>e.setAttribute("draggable","true"))})),n.addEventListener("dragover",(function(n){if(n.preventDefault(),b===this||!b&&this.querySelector(".column__taskWrapper").children.length>1)return f&&f.classList.remove("dragover"),void(f=null);f=this,e.forEach(e=>e.classList.remove("dragover")),this.classList.add("dragover")})),n.addEventListener("drop",(function(){if(b!==this){if(_)n.querySelector(".column__taskWrapper").append(_);else if(b){const e=[...document.querySelectorAll(".column[draggable='true']")];e.indexOf(this)>e.indexOf(b)?document.querySelector(".mainWrapper").insertBefore(b,this.nextElementSibling):document.querySelector(".mainWrapper").insertBefore(b,this)}e.forEach(e=>e.classList.remove("dragover"))}}))})},g=e=>{[...e].forEach(e=>{e.addEventListener("dragstart",(function(e){_=this,this.classList.add("dragstart"),e.stopPropagation()})),e.addEventListener("dragend",(function(e){this.classList.remove("dragstart"),_=null,document.querySelectorAll(".column").forEach(e=>e.classList.remove("dragover")),e.stopPropagation()})),e.addEventListener("dragenter",(function(e){e.preventDefault(),e.stopPropagation(),this!==_&&_&&this.classList.add("dragover")})),e.addEventListener("dragover",(function(e){e.preventDefault(),e.stopPropagation()})),e.addEventListener("dragleave",(function(e){e.stopPropagation(),this!==_&&_&&this.classList.remove("dragover")})),e.addEventListener("drop",(function(e){if(e.stopPropagation(),this!==_&&_)if(this.classList.remove("dragover"),this.parentElement===_.parentElement){const e=[...this.parentElement.querySelectorAll(".task")];e.indexOf(this)<e.indexOf(_)?this.parentElement.insertBefore(_,this):this.parentElement.insertBefore(_,this.nextElementSibling)}else this.parentElement.insertBefore(_,this)}))})},v=(e,n)=>{(e=>{const n=document.querySelector(`div.column[id="${e}"] .addTaskPanel button.column__addTask`),t=document.querySelector(`div.column[id="${e}"] .addTaskPanel__wrapper`);n.classList.remove("hiddenTitle"),t.classList.remove("openInputPanel")})(n),(e=>{const n=document.querySelectorAll(`.task[id="${e.length}"] button.removeButton`);o(n,e)})(e),(e=>{const n=document.querySelectorAll(`div.column[id="${e}"] .task__interactionPanel .editButton`),t=document.querySelectorAll(`div.column[id="${e}"] .task__wrapper`),a=document.querySelectorAll(`div.column[id="${e}"] .editTaskPanel__wrapper`),r=document.querySelectorAll(`div.column[id="${e}"]  textarea.editTaskPanel__textarea`),i=document.querySelectorAll(`div.column[id="${e}"] .editTaskPanel__wrapper .cancel`);m(n,a,i,r,t)})(n),((e,n)=>{const t=document.querySelectorAll(`div.column[id="${e}"] textarea.editTaskPanel__textarea`),a=document.querySelectorAll(`div.column[id="${e}"]  .editTaskPanel__button.editTask`);s(t,a,n)})(n,e),(e=>{const n=document.querySelectorAll(`.task[id="${e.length}"]`);g(n)})(e)},x=(e,n,t,a)=>{y(e,n,t,a,v)},k=e=>{(()=>{const e=document.querySelector(".newColumn h2"),n=document.querySelector(".newColumn__inputPanelWrap");e.classList.remove("hiddenTitle"),n.classList.remove("openInputPanel")})(),(e=>{const n=document.querySelectorAll(`.column__interactionPanel button[data-id="${e.length}"]`);l(n,e)})(e),(e=>{const n=document.querySelectorAll(`div.column[id="${e.length}"] .column__addTask`),t=document.querySelectorAll(`div.column[id="${e.length}"] .addTaskPanel__wrapper`),a=document.querySelectorAll(`div.column[id="${e.length}"] .addTaskPanel__wrapper textarea`),r=document.querySelectorAll(`div.column[id="${e.length}"] .addTaskPanel__wrapper .cancel`);m(n,t,r,a)})(e),(e=>{const n=document.querySelectorAll(`div.column[id="${e.length}"] .addTaskPanel__wrapper .addTask`),t=document.querySelectorAll(`div.column[id="${e.length}"] .addTaskPanel__wrapper .addTask__input`);x(n,t,P,r)})(e),(e=>{const n=document.querySelectorAll(`div.column[id="${e.length}"] .column__interactionPanel .editButton`),t=document.querySelectorAll(`div.column[id="${e.length}"] .column__editColumnTitlePanel .column__titleWrap`),a=document.querySelectorAll(`div.column[id="${e.length}"] .editColumnTitlePanelWrapper`),r=document.querySelectorAll(`div.column[id="${e.length}"] .column__editColumnTitlePanel textarea`),i=document.querySelectorAll(`div.column[id="${e.length}"] .editColumnTitlePanelWrapper .cancel`);m(n,a,i,r,t)})(e),(e=>{const n=document.querySelectorAll(`div.column[id="${e.length}"] textarea.editColumnTitlePanel__input`),t=document.querySelectorAll(`div.column[id="${e.length}"]  .editColumnTitlePanel__button.ediTitle`);u(n,t,e)})(e),(e=>{const n=document.querySelectorAll(`div.column[id="${e.length}"]`);h(n)})(e)},y=(e,n,t,a,r=(()=>{}))=>{e.forEach((e,i)=>{e.addEventListener("click",({target:{dataset:{id:e}}})=>{if(n[i].value.length<1)return void alert("Поле для ввода не должно быть пустым");let o=e?{id:t.length+1,title:n[i].value,columnId:e}:{id:t.length+1,title:n[i].value};t=[...t,o],a(o),n[i].value="",r(t,e)})})},T=[{id:1,title:"Новая колонка"},{id:2,title:"Старая колонка"},{id:3,title:"Новая два колонка"},{id:4,title:"Клонка для драга"}],P=[{id:1,title:"Досмотреть с Дашей мультик",columnId:1},{id:2,title:"Досмотреть с Дашей мультик",columnId:1},{id:3,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:1},{id:4,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:1},{id:5,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:1},{id:6,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:1},{id:7,title:"Почитаь диплом",columnId:2},{id:8,title:"Досмотреть с Дашей мультик",columnId:2},{id:9,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:2},{id:10,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:2},{id:11,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:3},{id:12,title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",columnId:3},{id:13,title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste modi itaque ad aliquam voluptatum velit reprehenderit debitis, quos numquam iure vitae sunt non aperiam dignissimos. Libero ullam totam consectetur suscipit veniam, perferendis dicta, animi, quas dignissimos voluptate ab deserunt excepturi harum. Blanditiis necessitatibus molestiae ipsum corrupti at ipsam exercitationem reiciendis porro itaque velit, error non perferendis fugiat explicabo dignissimos magni in, aliquam quasi. Libero deserunt distinctio perspiciatis, ab hic eveniet corrupti vero, maxime, neque ipsum eos. Possimus dolor neque, debitis impedit maxime aperiam. Magni optio nostrum quidem molestiae, dicta dolorem qui eveniet suscipit quisquam placeat laborum odit commodi corporis?",columnId:1}],W=document.querySelectorAll(".addTask"),w=document.querySelectorAll(".addTask__input");a(T),r(P),(()=>{const e=document.querySelectorAll(".column__interactionPanel .removeButton"),n=document.querySelectorAll(".task__interactionPanel .removeButton");o(n,P),l(e,T)})(),(()=>{const e=document.querySelectorAll(".newColumn h2"),n=document.querySelectorAll(".newColumn__inputPanelWrap"),t=document.querySelectorAll(".newColumn__inputPanelWrap textarea"),a=document.querySelectorAll(".newColumn__inputPanelWrap .cancel"),r=document.querySelectorAll(".column__addTask"),i=document.querySelectorAll(".addTaskPanel__wrapper"),o=document.querySelectorAll(".addTaskPanel__wrapper textarea"),l=document.querySelectorAll(".addTaskPanel__wrapper .cancel");m(r,i,l,o),m(e,n,a,t)})(),(()=>{const e=document.querySelectorAll(".newColumn__inputPanelWrap .addColumn"),n=document.querySelectorAll(".newColumn__inputPanelWrap .newColumn__input"),t=document.querySelectorAll(".addTask"),i=document.querySelectorAll(".addTask__input");y(e,n,T,a,k),x(t,i,P,r)})(),(()=>{const e=document.querySelectorAll(".column__interactionPanel .editButton"),n=document.querySelectorAll(".column__editColumnTitlePanel .column__titleWrap "),t=document.querySelectorAll(".editColumnTitlePanelWrapper"),a=document.querySelectorAll(".column__editColumnTitlePanel .editColumnTitlePanel__input"),r=document.querySelectorAll(".editColumnTitlePanelWrapper .cancel");m(e,t,r,a,n,!0);const i=document.querySelectorAll(".task__interactionPanel .editButton"),o=document.querySelectorAll(".editTaskPanel__wrapper"),l=document.querySelectorAll(".column__task .task__wrapper "),d=document.querySelectorAll(".editTaskPanel__wrapper textarea"),s=document.querySelectorAll(".editTaskPanel__button.cancel");m(i,o,s,d,l,!0)})(),p(),(()=>{const e=document.querySelectorAll("textarea.editTaskPanel__textarea"),n=document.querySelectorAll(".editTaskPanel__button.editTask"),t=document.querySelectorAll("textarea.editColumnTitlePanel__input"),a=document.querySelectorAll(".column  .editColumnTitlePanel__button.ediTitle");s(e,n,P),u(t,a,T)})();const q=document.querySelectorAll(".task");g(q);const C=document.querySelectorAll(".column[draggable='true']");h(C)}]);