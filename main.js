/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector(".profile").querySelector(".profile__info"),e=t.querySelector(".profile__avatar"),r=t.querySelector(".profile__caption"),n=r.querySelector(".profile__title"),o=t.querySelector(".profile__job"),i=r.querySelector(".profile__edit-button"),a=void 0;function c(){return a}var u=function(t){n.textContent=t.name,o.textContent=t.about},l={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-13",headers:{authorization:"d870b268-feb8-4751-8894-514caff2a776","content-type":"application/json"}};function s(t){return t.ok?t.json():t.json().then((function(e){return e.code=t.status,Promise.reject(e)}))}function f(t){return fetch("".concat(l.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:l.headers}).then(s)}var h=document.querySelector(".popup-profile"),p=document.querySelector(".popup-new-card"),d=document.forms["edit-profile"],y=document.forms["edit-card"],v=document.querySelector(".popup-image"),m=v.querySelector(".popup__image"),g=v.querySelector(".popup__image-caption"),b=document.querySelectorAll(".popup"),_=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_opened");e&&L(e)}},w=function(t,e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&L(t)};function E(t){t.classList.add("popup_opened"),document.addEventListener("keydown",_)}function L(t){t.classList.remove("popup_opened"),document.removeEventListener("keydown",_)}function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function x(){x=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:q(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function b(){}var _={};l(_,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(A([])));E&&E!==r&&n.call(E,a)&&(_=E);var L=b.prototype=m.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==S(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function q(e,r,n){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?y:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(S(e)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},k(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),l(L,u,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function k(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var j,q=document.getElementById("cardElementTemplate").content,O=document.querySelector(".cards__elements"),C=document.querySelector(".profile__add-button");function P(t){t.classList.toggle("heart_active")}function T(t){var e,r,n=t.target;e=n.alt,r=n.src,m.src=r,m.alt=e,g.textContent=e,E(v)}function A(t,e){return N.apply(this,arguments)}function N(){var t;return t=x().mark((function t(e,r){var n;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!r.target.classList.contains("heart_active")){t.next=7;break}return t.next=4,o=e,fetch("".concat(l.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:l.headers}).then(s);case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,f(e);case 9:t.t0=t.sent;case 10:n=t.t0,console.log(n),P(r.target),t.next=18;break;case 15:t.prev=15,t.t1=t.catch(0),console.error(t.t1);case 18:case"end":return t.stop()}var o}),t,null,[[0,15]])})),N=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){k(i,n,o,a,c,"next",t)}function c(t){k(i,n,o,a,c,"throw",t)}a(void 0)}))},N.apply(this,arguments)}function U(t,e){var r;(r=t,fetch("".concat(l.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:l.headers}).then(s)).then((function(){e.target.closest(".element").remove()})).catch((function(t){return console.error(t)}))}function I(t){var e=q.cloneNode(!0),r=e.querySelector(".element__image");r.src=t.link,r.alt=t.name,r.addEventListener("click",T),e.querySelector(".element__title").textContent=t.name;var n,o,i=e.querySelector(".heart");i.addEventListener("click",A.bind(null,t._id)),n=t.likes,o=c(),n.some((function(t){return t._id===o}))&&P(i);var a=e.querySelector(".element__trash");return c()!==t.owner._id?a.remove():a.addEventListener("click",U.bind(null,t._id)),e}function G(t){O.prepend(t)}function B(t){t.disabled=!0}function F(t,e){t.checkValidity()?function(t){t.disabled=!1}(e):B(e)}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}b.forEach((function(t){t.addEventListener("mousedown",w.bind(null,t))})),C.addEventListener("click",(function(){return E(p)})),i.addEventListener("click",(function(){d.username.value=n.textContent,d.job.value=o.textContent,E(h)})),d.addEventListener("submit",(function(t){var e,r;t.preventDefault(),(e=d.username.value,r=d.job.value,fetch("".concat(l.baseUrl,"/users/me"),{method:"PATCH",headers:l.headers,body:JSON.stringify({name:e,about:r})}).then(s)).then((function(t){u(t),L(h)})).catch((function(t){return console.error(t)}))})),y.addEventListener("submit",(function(t){var e,r;t.preventDefault(),(e=y.place.value,r=y.url.value,fetch("".concat(l.baseUrl,"/cards"),{method:"POST",headers:l.headers,body:JSON.stringify({name:e,link:r})}).then(s)).then((function(t){G(I(t)),L(p),y.reset()})).catch((function(t){return console.error(t)}))})),Promise.all([fetch("".concat(l.baseUrl,"/users/me"),{headers:l.headers}).then(s),fetch("".concat(l.baseUrl,"/cards"),{headers:l.headers}).then(s)]).then((function(t){var r,n,o,i=(o=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(n,o)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],l=i[1];r=c._id,a=r,function(t){e.src=t.avatar}(c),u(c),l.reverse().forEach((function(t){G(I(t))}))})).catch((function(t){console.error(t)})),j={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},document.querySelectorAll(j.formSelector).forEach((function(t){var e=j.submitButtonSelector,r=j.inputSelector,n=t.querySelector(e);t.querySelectorAll(r).forEach((function(e){e.addEventListener("input",(function(){return function(e){F(t,n),function(t,e){t.validity.valid?function(t,e,r){t.classList.remove(e);var n="error-"+t.name,o=document.getElementById(n);o.classList.remove(r),o.textContent=""}(t,e.inputErrorClass,e.errorClass):function(t,e,r,n){t.classList.add(r);var o="error-"+t.name,i=document.getElementById(o);i.classList.add(n),i.textContent=e}(t,t.validationMessage,e.inputErrorClass,e.errorClass)}(e,j)}(e)}))})),F(t,n),t.addEventListener("reset",(function(){B(n)}))}))})();