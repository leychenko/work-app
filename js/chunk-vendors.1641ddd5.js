"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[998],{9773:function(){},223:function(e,c,t){t.d(c,{BH:function(){return g},L:function(){return o},LL:function(){return y},P0:function(){return v},Sg:function(){return V},ZR:function(){return b},aH:function(){return z},eu:function(){return C},hl:function(){return H},m9:function(){return k},vZ:function(){return w}});t(3429),t(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(e){const c=[];let t=0;for(let a=0;a<e.length;a++){let n=e.charCodeAt(a);n<128?c[t++]=n:n<2048?(c[t++]=n>>6|192,c[t++]=63&n|128):55296===(64512&n)&&a+1<e.length&&56320===(64512&e.charCodeAt(a+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++a)),c[t++]=n>>18|240,c[t++]=n>>12&63|128,c[t++]=n>>6&63|128,c[t++]=63&n|128):(c[t++]=n>>12|224,c[t++]=n>>6&63|128,c[t++]=63&n|128)}return c},n=function(e){const c=[];let t=0,a=0;while(t<e.length){const n=e[t++];if(n<128)c[a++]=String.fromCharCode(n);else if(n>191&&n<224){const i=e[t++];c[a++]=String.fromCharCode((31&n)<<6|63&i)}else if(n>239&&n<365){const i=e[t++],l=e[t++],r=e[t++],o=((7&n)<<18|(63&i)<<12|(63&l)<<6|63&r)-65536;c[a++]=String.fromCharCode(55296+(o>>10)),c[a++]=String.fromCharCode(56320+(1023&o))}else{const i=e[t++],l=e[t++];c[a++]=String.fromCharCode((15&n)<<12|(63&i)<<6|63&l)}}return c.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<e.length;n+=3){const c=e[n],i=n+1<e.length,l=i?e[n+1]:0,r=n+2<e.length,o=r?e[n+2]:0,s=c>>2,f=(3&c)<<4|l>>4;let u=(15&l)<<2|o>>6,d=63&o;r||(d=64,i||(u=64)),a.push(t[s],t[f],t[u],t[d])}return a.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(a(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):n(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const t=c?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<e.length;){const c=t[e.charAt(n++)],i=n<e.length,r=i?t[e.charAt(n)]:0;++n;const o=n<e.length,s=o?t[e.charAt(n)]:64;++n;const f=n<e.length,u=f?t[e.charAt(n)]:64;if(++n,null==c||null==r||null==s||null==u)throw new l;const d=c<<2|r>>4;if(a.push(d),64!==s){const e=r<<4&240|s>>2;if(a.push(e),64!==u){const e=s<<6&192|u;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(e){const c=a(e);return i.encodeByteArray(c,!0)},o=function(e){return r(e).replace(/\./g,"")},s=function(e){try{return i.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=()=>f().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyDtgumEJv7GHl8fAHgrQNlsgY8AUtkHTfc",VUE_APP_FIREBASE_APP_ID:"1:227341534387:web:36d4edbef39a59ee8a1cc6",VUE_APP_FIREBASE_AUTH_DOMAIN:"app-base-data.firebaseapp.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"227341534387",VUE_APP_FIREBASE_PROJECT_ID:"app-base-data",VUE_APP_FIREBASE_STORAGE_BUCKET:"app-base-data.appspot.com",BASE_URL:"/work-app/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const c=e&&s(e[1]);return c&&JSON.parse(c)},p=()=>{try{return u()||d()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=e=>{var c,t;return null===(t=null===(c=p())||void 0===c?void 0:c.emulatorHosts)||void 0===t?void 0:t[e]},v=e=>{const c=h(e);if(!c)return;const t=c.lastIndexOf(":");if(t<=0||t+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const a=parseInt(c.substring(t+1),10);return"["===c[0]?[c.substring(1,t-1),a]:[c.substring(0,t),a]},z=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}wrapCallback(e){return(c,t)=>{c?this.reject(c):this.resolve(t),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(c):e(c,t))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=c||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),r="";return[o(JSON.stringify(t)),o(JSON.stringify(l)),r].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){try{return"object"===typeof indexedDB}catch(e){return!1}}function C(){return new Promise(((e,c)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(a),e(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var e;c((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(t){c(t)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M="FirebaseError";class b extends Error{constructor(e,c,t){super(c),this.code=e,this.customData=t,this.name=M,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,c,t){this.service=e,this.serviceName=c,this.errors=t}create(e,...c){const t=c[0]||{},a=`${this.service}/${e}`,n=this.errors[e],i=n?L(n,t):"Error",l=`${this.serviceName}: ${i} (${a}).`,r=new b(a,l,t);return r}}function L(e,c){return e.replace(x,((e,t)=>{const a=c[t];return null!=a?String(a):`<${t}?>`}))}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,c){if(e===c)return!0;const t=Object.keys(e),a=Object.keys(c);for(const n of t){if(!a.includes(n))return!1;const t=e[n],i=c[n];if(S(t)&&S(i)){if(!w(t,i))return!1}else if(t!==i)return!1}for(const n of a)if(!t.includes(n))return!1;return!0}function S(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(e){return e&&e._delegate?e._delegate:e}},7749:function(e,c,t){t.d(c,{GN:function(){return A}});t(560);var a=t(3494),n=t(3396);function i(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);c&&(a=a.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?i(Object(t),!0).forEach((function(c){o(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,c,t){return c=g(c),c in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function s(e,c){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],c.indexOf(t)>=0||(n[t]=e[t]);return n}function f(e,c){if(null==e)return{};var t,a,n=s(e,c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function u(e){return d(e)||m(e)||p(e)||v()}function d(e){if(Array.isArray(e))return h(e)}function m(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e,c){if(e){if("string"===typeof e)return h(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,c):void 0}}function h(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,a=new Array(c);t<c;t++)a[t]=e[t];return a}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function z(e,c){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,c||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===c?String:Number)(e)}function g(e){var c=z(e,"string");return"symbol"===typeof c?c:String(c)}var V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{},H={exports:{}};(function(e){(function(c){var t=function(e,c,a){if(!s(c)||u(c)||d(c)||m(c)||o(c))return c;var n,i=0,l=0;if(f(c))for(n=[],l=c.length;i<l;i++)n.push(t(e,c[i],a));else for(var r in n={},c)Object.prototype.hasOwnProperty.call(c,r)&&(n[e(r,a)]=t(e,c[r],a));return n},a=function(e,c){c=c||{};var t=c.separator||"_",a=c.split||/(?=[A-Z])/;return e.split(a).join(t)},n=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,c){return c?c.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},i=function(e){var c=n(e);return c.substr(0,1).toUpperCase()+c.substr(1)},l=function(e,c){return a(e,c).toLowerCase()},r=Object.prototype.toString,o=function(e){return"function"===typeof e},s=function(e){return e===Object(e)},f=function(e){return"[object Array]"==r.call(e)},u=function(e){return"[object Date]"==r.call(e)},d=function(e){return"[object RegExp]"==r.call(e)},m=function(e){return"[object Boolean]"==r.call(e)},p=function(e){return e-=0,e===e},h=function(e,c){var t=c&&"process"in c?c.process:c;return"function"!==typeof t?e:function(c,a){return t(c,e,a)}},v={camelize:n,decamelize:l,pascalize:i,depascalize:l,camelizeKeys:function(e,c){return t(h(n,c),e)},decamelizeKeys:function(e,c){return t(h(l,c),e,c)},pascalizeKeys:function(e,c){return t(h(i,c),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=v:c.humps=v})(V)})(H);var C=H.exports,M=["class","style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,c){var t=c.indexOf(":"),a=C.camelize(c.slice(0,t)),n=c.slice(t+1).trim();return e[a]=n,e}),{})}function y(e){return e.split(/\s+/).reduce((function(e,c){return e[c]=!0,e}),{})}function L(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var a=(e.children||[]).map((function(e){return L(e)})),i=Object.keys(e.attributes||{}).reduce((function(c,t){var a=e.attributes[t];switch(t){case"class":c.class=y(a);break;case"style":c.style=b(a);break;default:c.attrs[t]=a}return c}),{attrs:{},class:{},style:{}});t.class;var r=t.style,o=void 0===r?{}:r,s=f(t,M);return(0,n.h)(e.tag,l(l(l({},c),{},{class:i.class,style:l(l({},i.style),o)},i.attrs),s),a)}var x=!1;try{x=!0}catch(_){}function w(){var e;!x&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function S(e,c){return Array.isArray(c)&&c.length>0||!Array.isArray(c)&&c?o({},e,c):{}}function k(e){var c,t=(c={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},o(c,"fa-".concat(e.size),null!==e.size),o(c,"fa-rotate-".concat(e.rotation),null!==e.rotation),o(c,"fa-pull-".concat(e.pull),null!==e.pull),o(c,"fa-swap-opacity",e.swapOpacity),o(c,"fa-bounce",e.bounce),o(c,"fa-shake",e.shake),o(c,"fa-beat",e.beat),o(c,"fa-fade",e.fade),o(c,"fa-beat-fade",e.beatFade),o(c,"fa-flash",e.flash),o(c,"fa-spin-pulse",e.spinPulse),o(c,"fa-spin-reverse",e.spinReverse),c);return Object.keys(t).map((function(e){return t[e]?e:null})).filter((function(e){return e}))}function N(e){return e&&"object"===r(e)&&e.prefix&&e.iconName&&e.icon?e:a.Qc.icon?a.Qc.icon(e):null===e?null:"object"===r(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var A=(0,n.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,c){var t=c.attrs,i=(0,n.Fl)((function(){return N(e.icon)})),r=(0,n.Fl)((function(){return S("classes",k(e))})),o=(0,n.Fl)((function(){return S("transform","string"===typeof e.transform?a.Qc.transform(e.transform):e.transform)})),s=(0,n.Fl)((function(){return S("mask",N(e.mask))})),f=(0,n.Fl)((function(){return(0,a.qv)(i.value,l(l(l(l({},r.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))}));(0,n.YP)(f,(function(e){if(!e)return w("Could not find one or more icon(s)",i.value,s.value)}),{immediate:!0});var u=(0,n.Fl)((function(){return f.value?L(f.value.abstract[0],{},t):null}));return function(){return u.value}}});(0,n.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,c){var t=c.slots,i=a.vc.familyPrefix,l=(0,n.Fl)((function(){return["".concat(i,"-layers")].concat(u(e.fixedWidth?["".concat(i,"-fw")]:[]))}));return function(){return(0,n.h)("div",{class:l.value},t.default?t.default():[])}}}),(0,n.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,c){var t=c.attrs,i=a.vc.familyPrefix,r=(0,n.Fl)((function(){return S("classes",[].concat(u(e.counter?["".concat(i,"-layers-counter")]:[]),u(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))})),o=(0,n.Fl)((function(){return S("transform","string"===typeof e.transform?a.Qc.transform(e.transform):e.transform)})),s=(0,n.Fl)((function(){var c=(0,a.fL)(e.value.toString(),l(l({},o.value),r.value)),t=c.abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]})),f=(0,n.Fl)((function(){return L(s.value,{},t)}));return function(){return f.value}}})},4870:function(e,c,t){t.d(c,{B:function(){return l},BK:function(){return Oe},Bj:function(){return i},EB:function(){return s},Fl:function(){return qe},IU:function(){return xe},Jd:function(){return x},OT:function(){return He},PG:function(){return Me},SU:function(){return Ie},Um:function(){return Ve},Vh:function(){return Ue},WL:function(){return Re},X$:function(){return N},X3:function(){return Le},XI:function(){return Ee},Xl:function(){return we},dq:function(){return _e},iH:function(){return Fe},j:function(){return S},lk:function(){return w},nZ:function(){return o},qj:function(){return ge},qq:function(){return M},yT:function(){return ye}});t(560);var a=t(7139);let n;class i{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=n,!e&&n&&(this.index=(n.scopes||(n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=n;try{return n=this,e()}finally{n=c}}else 0}on(){n=this}off(){n=this.parent}stop(e){if(this._active){let c,t;for(c=0,t=this.effects.length;c<t;c++)this.effects[c].stop();for(c=0,t=this.cleanups.length;c<t;c++)this.cleanups[c]();if(this.scopes)for(c=0,t=this.scopes.length;c<t;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function l(e){return new i(e)}function r(e,c=n){c&&c.active&&c.effects.push(e)}function o(){return n}function s(e){n&&n.cleanups.push(e)}const f=e=>{const c=new Set(e);return c.w=0,c.n=0,c},u=e=>(e.w&z)>0,d=e=>(e.n&z)>0,m=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=z},p=e=>{const{deps:c}=e;if(c.length){let t=0;for(let a=0;a<c.length;a++){const n=c[a];u(n)&&!d(n)?n.delete(e):c[t++]=n,n.w&=~z,n.n&=~z}c.length=t}},h=new WeakMap;let v=0,z=1;const g=30;let V;const H=Symbol(""),C=Symbol("");class M{constructor(e,c=null,t){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,r(this,t)}run(){if(!this.active)return this.fn();let e=V,c=y;while(e){if(e===this)return;e=e.parent}try{return this.parent=V,V=this,y=!0,z=1<<++v,v<=g?m(this):b(this),this.fn()}finally{v<=g&&p(this),z=1<<--v,V=this.parent,y=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){V===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:c}=e;if(c.length){for(let t=0;t<c.length;t++)c[t].delete(e);c.length=0}}let y=!0;const L=[];function x(){L.push(y),y=!1}function w(){const e=L.pop();y=void 0===e||e}function S(e,c,t){if(y&&V){let c=h.get(e);c||h.set(e,c=new Map);let a=c.get(t);a||c.set(t,a=f());const n=void 0;k(a,n)}}function k(e,c){let t=!1;v<=g?d(e)||(e.n|=z,t=!u(e)):t=!e.has(V),t&&(e.add(V),V.deps.push(e))}function N(e,c,t,n,i,l){const r=h.get(e);if(!r)return;let o=[];if("clear"===c)o=[...r.values()];else if("length"===t&&(0,a.kJ)(e)){const e=Number(n);r.forEach(((c,t)=>{("length"===t||!(0,a.yk)(t)&&t>=e)&&o.push(c)}))}else switch(void 0!==t&&o.push(r.get(t)),c){case"add":(0,a.kJ)(e)?(0,a.S0)(t)&&o.push(r.get("length")):(o.push(r.get(H)),(0,a._N)(e)&&o.push(r.get(C)));break;case"delete":(0,a.kJ)(e)||(o.push(r.get(H)),(0,a._N)(e)&&o.push(r.get(C)));break;case"set":(0,a._N)(e)&&o.push(r.get(H));break}if(1===o.length)o[0]&&A(o[0]);else{const e=[];for(const c of o)c&&e.push(...c);A(f(e))}}function A(e,c){const t=(0,a.kJ)(e)?e:[...e];for(const a of t)a.computed&&_(a,c);for(const a of t)a.computed||_(a,c)}function _(e,c){(e!==V||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function F(e,c){var t;return null==(t=h.get(e))?void 0:t.get(c)}const E=(0,a.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(a.yk)),T=I();function I(){const e={};return["includes","indexOf","lastIndexOf"].forEach((c=>{e[c]=function(...e){const t=xe(this);for(let c=0,n=this.length;c<n;c++)S(t,"get",c+"");const a=t[c](...e);return-1===a||!1===a?t[c](...e.map(xe)):a}})),["push","pop","shift","unshift","splice"].forEach((c=>{e[c]=function(...e){x();const t=xe(this)[c].apply(this,e);return w(),t}})),e}function B(e){const c=xe(this);return S(c,"has",e),c.hasOwnProperty(e)}class R{constructor(e=!1,c=!1){this._isReadonly=e,this._shallow=c}get(e,c,t){const n=this._isReadonly,i=this._shallow;if("__v_isReactive"===c)return!n;if("__v_isReadonly"===c)return n;if("__v_isShallow"===c)return i;if("__v_raw"===c)return t===(n?i?he:pe:i?me:de).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const l=(0,a.kJ)(e);if(!n){if(l&&(0,a.RI)(T,c))return Reflect.get(T,c,t);if("hasOwnProperty"===c)return B}const r=Reflect.get(e,c,t);return((0,a.yk)(c)?P.has(c):E(c))?r:(n||S(e,"get",c),i?r:_e(r)?l&&(0,a.S0)(c)?r:r.value:(0,a.Kn)(r)?n?He(r):ge(r):r)}}class O extends R{constructor(e=!1){super(!1,e)}set(e,c,t,n){let i=e[c];if(!this._shallow){const c=be(i);if(ye(t)||be(t)||(i=xe(i),t=xe(t)),!(0,a.kJ)(e)&&_e(i)&&!_e(t))return!c&&(i.value=t,!0)}const l=(0,a.kJ)(e)&&(0,a.S0)(c)?Number(c)<e.length:(0,a.RI)(e,c),r=Reflect.set(e,c,t,n);return e===xe(n)&&(l?(0,a.aU)(t,i)&&N(e,"set",c,t,i):N(e,"add",c,t)),r}deleteProperty(e,c){const t=(0,a.RI)(e,c),n=e[c],i=Reflect.deleteProperty(e,c);return i&&t&&N(e,"delete",c,void 0,n),i}has(e,c){const t=Reflect.has(e,c);return(0,a.yk)(c)&&P.has(c)||S(e,"has",c),t}ownKeys(e){return S(e,"iterate",(0,a.kJ)(e)?"length":H),Reflect.ownKeys(e)}}class W extends R{constructor(e=!1){super(!0,e)}set(e,c){return!0}deleteProperty(e,c){return!0}}const D=new O,U=new W,j=new O(!0),$=e=>e,q=e=>Reflect.getPrototypeOf(e);function G(e,c,t=!1,n=!1){e=e["__v_raw"];const i=xe(e),l=xe(c);t||((0,a.aU)(c,l)&&S(i,"get",c),S(i,"get",l));const{has:r}=q(i),o=n?$:t?ke:Se;return r.call(i,c)?o(e.get(c)):r.call(i,l)?o(e.get(l)):void(e!==i&&e.get(c))}function Y(e,c=!1){const t=this["__v_raw"],n=xe(t),i=xe(e);return c||((0,a.aU)(e,i)&&S(n,"has",e),S(n,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function Z(e,c=!1){return e=e["__v_raw"],!c&&S(xe(e),"iterate",H),Reflect.get(e,"size",e)}function X(e){e=xe(e);const c=xe(this),t=q(c),a=t.has.call(c,e);return a||(c.add(e),N(c,"add",e,e)),this}function K(e,c){c=xe(c);const t=xe(this),{has:n,get:i}=q(t);let l=n.call(t,e);l||(e=xe(e),l=n.call(t,e));const r=i.call(t,e);return t.set(e,c),l?(0,a.aU)(c,r)&&N(t,"set",e,c,r):N(t,"add",e,c),this}function J(e){const c=xe(this),{has:t,get:a}=q(c);let n=t.call(c,e);n||(e=xe(e),n=t.call(c,e));const i=a?a.call(c,e):void 0,l=c.delete(e);return n&&N(c,"delete",e,void 0,i),l}function Q(){const e=xe(this),c=0!==e.size,t=void 0,a=e.clear();return c&&N(e,"clear",void 0,void 0,t),a}function ee(e,c){return function(t,a){const n=this,i=n["__v_raw"],l=xe(i),r=c?$:e?ke:Se;return!e&&S(l,"iterate",H),i.forEach(((e,c)=>t.call(a,r(e),r(c),n)))}}function ce(e,c,t){return function(...n){const i=this["__v_raw"],l=xe(i),r=(0,a._N)(l),o="entries"===e||e===Symbol.iterator&&r,s="keys"===e&&r,f=i[e](...n),u=t?$:c?ke:Se;return!c&&S(l,"iterate",s?C:H),{next(){const{value:e,done:c}=f.next();return c?{value:e,done:c}:{value:o?[u(e[0]),u(e[1])]:u(e),done:c}},[Symbol.iterator](){return this}}}}function te(e){return function(...c){return"delete"!==e&&("clear"===e?void 0:this)}}function ae(){const e={get(e){return G(this,e)},get size(){return Z(this)},has:Y,add:X,set:K,delete:J,clear:Q,forEach:ee(!1,!1)},c={get(e){return G(this,e,!1,!0)},get size(){return Z(this)},has:Y,add:X,set:K,delete:J,clear:Q,forEach:ee(!1,!0)},t={get(e){return G(this,e,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:ee(!0,!1)},a={get(e){return G(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:ee(!0,!0)},n=["keys","values","entries",Symbol.iterator];return n.forEach((n=>{e[n]=ce(n,!1,!1),t[n]=ce(n,!0,!1),c[n]=ce(n,!1,!0),a[n]=ce(n,!0,!0)})),[e,t,c,a]}const[ne,ie,le,re]=ae();function oe(e,c){const t=c?e?re:le:e?ie:ne;return(c,n,i)=>"__v_isReactive"===n?!e:"__v_isReadonly"===n?e:"__v_raw"===n?c:Reflect.get((0,a.RI)(t,n)&&n in c?t:c,n,i)}const se={get:oe(!1,!1)},fe={get:oe(!1,!0)},ue={get:oe(!0,!1)};const de=new WeakMap,me=new WeakMap,pe=new WeakMap,he=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ze(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,a.W7)(e))}function ge(e){return be(e)?e:Ce(e,!1,D,se,de)}function Ve(e){return Ce(e,!1,j,fe,me)}function He(e){return Ce(e,!0,U,ue,pe)}function Ce(e,c,t,n,i){if(!(0,a.Kn)(e))return e;if(e["__v_raw"]&&(!c||!e["__v_isReactive"]))return e;const l=i.get(e);if(l)return l;const r=ze(e);if(0===r)return e;const o=new Proxy(e,2===r?n:t);return i.set(e,o),o}function Me(e){return be(e)?Me(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function ye(e){return!(!e||!e["__v_isShallow"])}function Le(e){return Me(e)||be(e)}function xe(e){const c=e&&e["__v_raw"];return c?xe(c):e}function we(e){return(0,a.Nj)(e,"__v_skip",!0),e}const Se=e=>(0,a.Kn)(e)?ge(e):e,ke=e=>(0,a.Kn)(e)?He(e):e;function Ne(e){y&&V&&(e=xe(e),k(e.dep||(e.dep=f())))}function Ae(e,c){e=xe(e);const t=e.dep;t&&A(t)}function _e(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Pe(e,!1)}function Ee(e){return Pe(e,!0)}function Pe(e,c){return _e(e)?e:new Te(e,c)}class Te{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:xe(e),this._value=c?e:Se(e)}get value(){return Ne(this),this._value}set value(e){const c=this.__v_isShallow||ye(e)||be(e);e=c?e:xe(e),(0,a.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:Se(e),Ae(this,e))}}function Ie(e){return _e(e)?e.value:e}const Be={get:(e,c,t)=>Ie(Reflect.get(e,c,t)),set:(e,c,t,a)=>{const n=e[c];return _e(n)&&!_e(t)?(n.value=t,!0):Reflect.set(e,c,t,a)}};function Re(e){return Me(e)?e:new Proxy(e,Be)}function Oe(e){const c=(0,a.kJ)(e)?new Array(e.length):{};for(const t in e)c[t]=je(e,t);return c}class We{constructor(e,c,t){this._object=e,this._key=c,this._defaultValue=t,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return F(xe(this._object),this._key)}}class De{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ue(e,c,t){return _e(e)?e:(0,a.mf)(e)?new De(e):(0,a.Kn)(e)&&arguments.length>1?je(e,c,t):Fe(e)}function je(e,c,t){const a=e[c];return _e(a)?a:new We(e,c,t)}class $e{constructor(e,c,t,a){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new M(e,(()=>{this._dirty||(this._dirty=!0,Ae(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!a,this["__v_isReadonly"]=t}get value(){const e=xe(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,c,t=!1){let n,i;const l=(0,a.mf)(e);l?(n=e,i=a.dG):(n=e.get,i=e.set);const r=new $e(n,i,l||!i,t);return r}},3396:function(e,c,t){t.d(c,{$d:function(){return r},Ah:function(){return Oe},Cn:function(){return I},FN:function(){return Et},Fl:function(){return Qt},HY:function(){return et},Ho:function(){return Mt},JJ:function(){return gc},Jd:function(){return Re},Ko:function(){return $e},LL:function(){return Z},P$:function(){return ve},Q2:function(){return X},Q6:function(){return Me},U2:function(){return ge},Uk:function(){return bt},Us:function(){return Rc},WI:function(){return qe},Wm:function(){return Vt},Xn:function(){return Ie},Y3:function(){return V},Y8:function(){return de},YP:function(){return ae},ZK:function(){return i},_:function(){return gt},aZ:function(){return be},bv:function(){return Te},dD:function(){return T},dG:function(){return St},dl:function(){return we},f3:function(){return Vc},h:function(){return ea},iD:function(){return ut},ic:function(){return Be},j4:function(){return dt},kq:function(){return yt},lA:function(){return mt},lR:function(){return Jc},m0:function(){return ce},nJ:function(){return pe},nK:function(){return Ce},se:function(){return Se},sv:function(){return tt},up:function(){return G},w5:function(){return B},wF:function(){return Pe},wg:function(){return lt},wy:function(){return oe},xv:function(){return ct}});t(560);var a=t(4870),n=t(7139);function i(e,...c){}function l(e,c,t,a){let n;try{n=a?e(...a):e()}catch(i){o(i,c,t)}return n}function r(e,c,t,a){if((0,n.mf)(e)){const i=l(e,c,t,a);return i&&(0,n.tI)(i)&&i.catch((e=>{o(e,c,t)})),i}const i=[];for(let n=0;n<e.length;n++)i.push(r(e[n],c,t,a));return i}function o(e,c,t,a=!0){const n=c?c.vnode:null;if(c){let a=c.parent;const n=c.proxy,i=t;while(a){const c=a.ec;if(c)for(let t=0;t<c.length;t++)if(!1===c[t](e,n,i))return;a=a.parent}const r=c.appContext.config.errorHandler;if(r)return void l(r,null,10,[e,n,i])}s(e,t,n,a)}function s(e,c,t,a=!0){console.error(e)}let f=!1,u=!1;const d=[];let m=0;const p=[];let h=null,v=0;const z=Promise.resolve();let g=null;function V(e){const c=g||z;return e?c.then(this?e.bind(this):e):c}function H(e){let c=m+1,t=d.length;while(c<t){const a=c+t>>>1,n=d[a],i=w(n);i<e||i===e&&n.pre?c=a+1:t=a}return c}function C(e){d.length&&d.includes(e,f&&e.allowRecurse?m+1:m)||(null==e.id?d.push(e):d.splice(H(e.id),0,e),M())}function M(){f||u||(u=!0,g=z.then(k))}function b(e){const c=d.indexOf(e);c>m&&d.splice(c,1)}function y(e){(0,n.kJ)(e)?p.push(...e):h&&h.includes(e,e.allowRecurse?v+1:v)||p.push(e),M()}function L(e,c,t=(f?m+1:0)){for(0;t<d.length;t++){const c=d[t];if(c&&c.pre){if(e&&c.id!==e.uid)continue;0,d.splice(t,1),t--,c()}}}function x(e){if(p.length){const e=[...new Set(p)];if(p.length=0,h)return void h.push(...e);for(h=e,h.sort(((e,c)=>w(e)-w(c))),v=0;v<h.length;v++)h[v]();h=null,v=0}}const w=e=>null==e.id?1/0:e.id,S=(e,c)=>{const t=w(e)-w(c);if(0===t){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return t};function k(e){u=!1,f=!0,d.sort(S);n.dG;try{for(m=0;m<d.length;m++){const e=d[m];e&&!1!==e.active&&l(e,null,14)}}finally{m=0,d.length=0,x(e),f=!1,g=null,(d.length||p.length)&&k(e)}}function N(e,c,...t){if(e.isUnmounted)return;const a=e.vnode.props||n.kT;let i=t;const l=c.startsWith("update:"),o=l&&c.slice(7);if(o&&o in a){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:c,trim:l}=a[e]||n.kT;l&&(i=t.map((e=>(0,n.HD)(e)?e.trim():e))),c&&(i=t.map(n.h5))}let s;let f=a[s=(0,n.hR)(c)]||a[s=(0,n.hR)((0,n._A)(c))];!f&&l&&(f=a[s=(0,n.hR)((0,n.rs)(c))]),f&&r(f,e,6,i);const u=a[s+"Once"];if(u){if(e.emitted){if(e.emitted[s])return}else e.emitted={};e.emitted[s]=!0,r(u,e,6,i)}}function A(e,c,t=!1){const a=c.emitsCache,i=a.get(e);if(void 0!==i)return i;const l=e.emits;let r={},o=!1;if(!(0,n.mf)(e)){const a=e=>{const t=A(e,c,!0);t&&(o=!0,(0,n.l7)(r,t))};!t&&c.mixins.length&&c.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return l||o?((0,n.kJ)(l)?l.forEach((e=>r[e]=null)):(0,n.l7)(r,l),(0,n.Kn)(e)&&a.set(e,r),r):((0,n.Kn)(e)&&a.set(e,null),null)}function _(e,c){return!(!e||!(0,n.F7)(c))&&(c=c.slice(2).replace(/Once$/,""),(0,n.RI)(e,c[0].toLowerCase()+c.slice(1))||(0,n.RI)(e,(0,n.rs)(c))||(0,n.RI)(e,c))}let F=null,E=null;function P(e){const c=F;return F=e,E=e&&e.type.__scopeId||null,c}function T(e){E=e}function I(){E=null}function B(e,c=F,t){if(!c)return e;if(e._n)return e;const a=(...t)=>{a._d&&st(-1);const n=P(c);let i;try{i=e(...t)}finally{P(n),a._d&&st(1)}return i};return a._n=!0,a._c=!0,a._d=!0,a}function R(e){const{type:c,vnode:t,proxy:a,withProxy:i,props:l,propsOptions:[r],slots:s,attrs:f,emit:u,render:d,renderCache:m,data:p,setupState:h,ctx:v,inheritAttrs:z}=e;let g,V;const H=P(e);try{if(4&t.shapeFlag){const e=i||a,c=e;g=Lt(d.call(c,e,m,l,h,p,v)),V=f}else{const e=c;0,g=Lt(e.length>1?e(l,{attrs:f,slots:s,emit:u}):e(l,null)),V=c.props?f:O(f)}}catch(M){nt.length=0,o(M,e,1),g=Vt(tt)}let C=g;if(V&&!1!==z){const e=Object.keys(V),{shapeFlag:c}=C;e.length&&7&c&&(r&&e.some(n.tR)&&(V=W(V,r)),C=Mt(C,V))}return t.dirs&&(C=Mt(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),g=C,P(H),g}const O=e=>{let c;for(const t in e)("class"===t||"style"===t||(0,n.F7)(t))&&((c||(c={}))[t]=e[t]);return c},W=(e,c)=>{const t={};for(const a in e)(0,n.tR)(a)&&a.slice(9)in c||(t[a]=e[a]);return t};function D(e,c,t){const{props:a,children:n,component:i}=e,{props:l,children:r,patchFlag:o}=c,s=i.emitsOptions;if(c.dirs||c.transition)return!0;if(!(t&&o>=0))return!(!n&&!r||r&&r.$stable)||a!==l&&(a?!l||U(a,l,s):!!l);if(1024&o)return!0;if(16&o)return a?U(a,l,s):!!l;if(8&o){const e=c.dynamicProps;for(let c=0;c<e.length;c++){const t=e[c];if(l[t]!==a[t]&&!_(s,t))return!0}}return!1}function U(e,c,t){const a=Object.keys(c);if(a.length!==Object.keys(e).length)return!0;for(let n=0;n<a.length;n++){const i=a[n];if(c[i]!==e[i]&&!_(t,i))return!0}return!1}function j({vnode:e,parent:c},t){while(c&&c.subTree===e)(e=c.vnode).el=t,c=c.parent}const $="components",q="directives";function G(e,c){return K($,e,!0,c)||e}const Y=Symbol.for("v-ndc");function Z(e){return(0,n.HD)(e)?K($,e,!1)||e:e||Y}function X(e){return K(q,e)}function K(e,c,t=!0,a=!1){const i=F||Ft;if(i){const t=i.type;if(e===$){const e=Kt(t,!1);if(e&&(e===c||e===(0,n._A)(c)||e===(0,n.kC)((0,n._A)(c))))return t}const l=J(i[e]||t[e],c)||J(i.appContext[e],c);return!l&&a?t:l}}function J(e,c){return e&&(e[c]||e[(0,n._A)(c)]||e[(0,n.kC)((0,n._A)(c))])}const Q=e=>e.__isSuspense;function ee(e,c){c&&c.pendingBranch?(0,n.kJ)(e)?c.effects.push(...e):c.effects.push(e):y(e)}function ce(e,c){return ne(e,null,c)}const te={};function ae(e,c,t){return ne(e,c,t)}function ne(e,c,{immediate:t,deep:i,flush:o,onTrack:s,onTrigger:f}=n.kT){var u;const d=(0,a.nZ)()===(null==(u=Ft)?void 0:u.scope)?Ft:null;let m,p,h=!1,v=!1;if((0,a.dq)(e)?(m=()=>e.value,h=(0,a.yT)(e)):(0,a.PG)(e)?(m=()=>e,i=!0):(0,n.kJ)(e)?(v=!0,h=e.some((e=>(0,a.PG)(e)||(0,a.yT)(e))),m=()=>e.map((e=>(0,a.dq)(e)?e.value:(0,a.PG)(e)?re(e):(0,n.mf)(e)?l(e,d,2):void 0))):m=(0,n.mf)(e)?c?()=>l(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),r(e,d,3,[g])}:n.dG,c&&i){const e=m;m=()=>re(e())}let z,g=e=>{p=b.onStop=()=>{l(e,d,4),p=b.onStop=void 0}};if(Ut){if(g=n.dG,c?t&&r(c,d,3,[m(),v?[]:void 0,g]):m(),"sync"!==o)return n.dG;{const e=ta();z=e.__watcherHandles||(e.__watcherHandles=[])}}let V=v?new Array(e.length).fill(te):te;const H=()=>{if(b.active)if(c){const e=b.run();(i||h||(v?e.some(((e,c)=>(0,n.aU)(e,V[c]))):(0,n.aU)(e,V)))&&(p&&p(),r(c,d,3,[e,V===te?void 0:v&&V[0]===te?[]:V,g]),V=e)}else b.run()};let M;H.allowRecurse=!!c,"sync"===o?M=H:"post"===o?M=()=>Bc(H,d&&d.suspense):(H.pre=!0,d&&(H.id=d.uid),M=()=>C(H));const b=new a.qq(m,M);c?t?H():V=b.run():"post"===o?Bc(b.run.bind(b),d&&d.suspense):b.run();const y=()=>{b.stop(),d&&d.scope&&(0,n.Od)(d.scope.effects,b)};return z&&z.push(y),y}function ie(e,c,t){const a=this.proxy,i=(0,n.HD)(e)?e.includes(".")?le(a,e):()=>a[e]:e.bind(a,a);let l;(0,n.mf)(c)?l=c:(l=c.handler,t=c);const r=Ft;Bt(this);const o=ne(i,l.bind(a),t);return r?Bt(r):Rt(),o}function le(e,c){const t=c.split(".");return()=>{let c=e;for(let e=0;e<t.length&&c;e++)c=c[t[e]];return c}}function re(e,c){if(!(0,n.Kn)(e)||e["__v_skip"])return e;if(c=c||new Set,c.has(e))return e;if(c.add(e),(0,a.dq)(e))re(e.value,c);else if((0,n.kJ)(e))for(let t=0;t<e.length;t++)re(e[t],c);else if((0,n.DM)(e)||(0,n._N)(e))e.forEach((e=>{re(e,c)}));else if((0,n.PO)(e))for(const t in e)re(e[t],c);return e}function oe(e,c){const t=F;if(null===t)return e;const a=Xt(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let l=0;l<c.length;l++){let[e,t,r,o=n.kT]=c[l];e&&((0,n.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&re(t),i.push({dir:e,instance:a,value:t,oldValue:void 0,arg:r,modifiers:o}))}return e}function se(e,c,t,n){const i=e.dirs,l=c&&c.dirs;for(let o=0;o<i.length;o++){const s=i[o];l&&(s.oldValue=l[o].value);let f=s.dir[n];f&&((0,a.Jd)(),r(f,t,8,[e.el,s,e,c]),(0,a.lk)())}}const fe=Symbol("_leaveCb"),ue=Symbol("_enterCb");function de(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const me=[Function,Array],pe={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:me,onEnter:me,onAfterEnter:me,onEnterCancelled:me,onBeforeLeave:me,onLeave:me,onAfterLeave:me,onLeaveCancelled:me,onBeforeAppear:me,onAppear:me,onAfterAppear:me,onAppearCancelled:me},he={name:"BaseTransition",props:pe,setup(e,{slots:c}){const t=Et(),n=de();let i;return()=>{const l=c.default&&Me(c.default(),!0);if(!l||!l.length)return;let r=l[0];if(l.length>1){let e=!1;for(const c of l)if(c.type!==tt){0,r=c,e=!0;break}}const o=(0,a.IU)(e),{mode:s}=o;if(n.isLeaving)return Ve(r);const f=He(r);if(!f)return Ve(r);const u=ge(f,o,n,t);Ce(f,u);const d=t.subTree,m=d&&He(d);let p=!1;const{getTransitionKey:h}=f.type;if(h){const e=h();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(m&&m.type!==tt&&(!pt(f,m)||p)){const e=ge(m,o,n,t);if(Ce(m,e),"out-in"===s)return n.isLeaving=!0,e.afterLeave=()=>{n.isLeaving=!1,!1!==t.update.active&&t.update()},Ve(r);"in-out"===s&&f.type!==tt&&(e.delayLeave=(e,c,t)=>{const a=ze(n,m);a[String(m.key)]=m,e[fe]=()=>{c(),e[fe]=void 0,delete u.delayedLeave},u.delayedLeave=t})}return r}}},ve=he;function ze(e,c){const{leavingVNodes:t}=e;let a=t.get(c.type);return a||(a=Object.create(null),t.set(c.type,a)),a}function ge(e,c,t,a){const{appear:i,mode:l,persisted:o=!1,onBeforeEnter:s,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:z,onAppear:g,onAfterAppear:V,onAppearCancelled:H}=c,C=String(e.key),M=ze(t,e),b=(e,c)=>{e&&r(e,a,9,c)},y=(e,c)=>{const t=c[1];b(e,c),(0,n.kJ)(e)?e.every((e=>e.length<=1))&&t():e.length<=1&&t()},L={mode:l,persisted:o,beforeEnter(c){let a=s;if(!t.isMounted){if(!i)return;a=z||s}c[fe]&&c[fe](!0);const n=M[C];n&&pt(e,n)&&n.el[fe]&&n.el[fe](),b(a,[c])},enter(e){let c=f,a=u,n=d;if(!t.isMounted){if(!i)return;c=g||f,a=V||u,n=H||d}let l=!1;const r=e[ue]=c=>{l||(l=!0,b(c?n:a,[e]),L.delayedLeave&&L.delayedLeave(),e[ue]=void 0)};c?y(c,[e,r]):r()},leave(c,a){const n=String(e.key);if(c[ue]&&c[ue](!0),t.isUnmounting)return a();b(m,[c]);let i=!1;const l=c[fe]=t=>{i||(i=!0,a(),b(t?v:h,[c]),c[fe]=void 0,M[n]===e&&delete M[n])};M[n]=e,p?y(p,[c,l]):l()},clone(e){return ge(e,c,t,a)}};return L}function Ve(e){if(Le(e))return e=Mt(e),e.children=null,e}function He(e){return Le(e)?e.children?e.children[0]:void 0:e}function Ce(e,c){6&e.shapeFlag&&e.component?Ce(e.component.subTree,c):128&e.shapeFlag?(e.ssContent.transition=c.clone(e.ssContent),e.ssFallback.transition=c.clone(e.ssFallback)):e.transition=c}function Me(e,c=!1,t){let a=[],n=0;for(let i=0;i<e.length;i++){let l=e[i];const r=null==t?l.key:String(t)+String(null!=l.key?l.key:i);l.type===et?(128&l.patchFlag&&n++,a=a.concat(Me(l.children,c,r))):(c||l.type!==tt)&&a.push(null!=r?Mt(l,{key:r}):l)}if(n>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}
/*! #__NO_SIDE_EFFECTS__ */function be(e,c){return(0,n.mf)(e)?(()=>(0,n.l7)({name:e.name},c,{setup:e}))():e}const ye=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Le=e=>e.type.__isKeepAlive;RegExp,RegExp;function xe(e,c){return(0,n.kJ)(e)?e.some((e=>xe(e,c))):(0,n.HD)(e)?e.split(",").includes(c):!!(0,n.Kj)(e)&&e.test(c)}function we(e,c){ke(e,"a",c)}function Se(e,c){ke(e,"da",c)}function ke(e,c,t=Ft){const a=e.__wdc||(e.__wdc=()=>{let c=t;while(c){if(c.isDeactivated)return;c=c.parent}return e()});if(Fe(c,a,t),t){let e=t.parent;while(e&&e.parent)Le(e.parent.vnode)&&Ne(a,c,t,e),e=e.parent}}function Ne(e,c,t,a){const i=Fe(c,e,a,!0);Oe((()=>{(0,n.Od)(a[c],i)}),t)}function Ae(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _e(e){return 128&e.shapeFlag?e.ssContent:e}function Fe(e,c,t=Ft,n=!1){if(t){const i=t[e]||(t[e]=[]),l=c.__weh||(c.__weh=(...n)=>{if(t.isUnmounted)return;(0,a.Jd)(),Bt(t);const i=r(c,t,e,n);return Rt(),(0,a.lk)(),i});return n?i.unshift(l):i.push(l),l}}const Ee=e=>(c,t=Ft)=>(!Ut||"sp"===e)&&Fe(e,((...e)=>c(...e)),t),Pe=Ee("bm"),Te=Ee("m"),Ie=Ee("bu"),Be=Ee("u"),Re=Ee("bum"),Oe=Ee("um"),We=Ee("sp"),De=Ee("rtg"),Ue=Ee("rtc");function je(e,c=Ft){Fe("ec",e,c)}function $e(e,c,t,a){let i;const l=t&&t[a];if((0,n.kJ)(e)||(0,n.HD)(e)){i=new Array(e.length);for(let t=0,a=e.length;t<a;t++)i[t]=c(e[t],t,void 0,l&&l[t])}else if("number"===typeof e){0,i=new Array(e);for(let t=0;t<e;t++)i[t]=c(t+1,t,void 0,l&&l[t])}else if((0,n.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,t)=>c(e,t,void 0,l&&l[t])));else{const t=Object.keys(e);i=new Array(t.length);for(let a=0,n=t.length;a<n;a++){const n=t[a];i[a]=c(e[n],n,a,l&&l[a])}}else i=[];return t&&(t[a]=i),i}function qe(e,c,t={},a,n){if(F.isCE||F.parent&&ye(F.parent)&&F.parent.isCE)return"default"!==c&&(t.name=c),Vt("slot",t,a&&a());let i=e[c];i&&i._c&&(i._d=!1),lt();const l=i&&Ge(i(t)),r=dt(et,{key:t.key||l&&l.key||`_${c}`},l||(a?a():[]),l&&1===e._?64:-2);return!n&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),i&&i._c&&(i._d=!0),r}function Ge(e){return e.some((e=>!mt(e)||e.type!==tt&&!(e.type===et&&!Ge(e.children))))?e:null}const Ye=e=>e?Ot(e)?Xt(e)||e.proxy:Ye(e.parent):null,Ze=(0,n.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ye(e.parent),$root:e=>Ye(e.root),$emit:e=>e.emit,$options:e=>nc(e),$forceUpdate:e=>e.f||(e.f=()=>C(e.update)),$nextTick:e=>e.n||(e.n=V.bind(e.proxy)),$watch:e=>ie.bind(e)}),Xe=(e,c)=>e!==n.kT&&!e.__isScriptSetup&&(0,n.RI)(e,c),Ke={get({_:e},c){const{ctx:t,setupState:i,data:l,props:r,accessCache:o,type:s,appContext:f}=e;let u;if("$"!==c[0]){const a=o[c];if(void 0!==a)switch(a){case 1:return i[c];case 2:return l[c];case 4:return t[c];case 3:return r[c]}else{if(Xe(i,c))return o[c]=1,i[c];if(l!==n.kT&&(0,n.RI)(l,c))return o[c]=2,l[c];if((u=e.propsOptions[0])&&(0,n.RI)(u,c))return o[c]=3,r[c];if(t!==n.kT&&(0,n.RI)(t,c))return o[c]=4,t[c];Qe&&(o[c]=0)}}const d=Ze[c];let m,p;return d?("$attrs"===c&&(0,a.j)(e,"get",c),d(e)):(m=s.__cssModules)&&(m=m[c])?m:t!==n.kT&&(0,n.RI)(t,c)?(o[c]=4,t[c]):(p=f.config.globalProperties,(0,n.RI)(p,c)?p[c]:void 0)},set({_:e},c,t){const{data:a,setupState:i,ctx:l}=e;return Xe(i,c)?(i[c]=t,!0):a!==n.kT&&(0,n.RI)(a,c)?(a[c]=t,!0):!(0,n.RI)(e.props,c)&&(("$"!==c[0]||!(c.slice(1)in e))&&(l[c]=t,!0))},has({_:{data:e,setupState:c,accessCache:t,ctx:a,appContext:i,propsOptions:l}},r){let o;return!!t[r]||e!==n.kT&&(0,n.RI)(e,r)||Xe(c,r)||(o=l[0])&&(0,n.RI)(o,r)||(0,n.RI)(a,r)||(0,n.RI)(Ze,r)||(0,n.RI)(i.config.globalProperties,r)},defineProperty(e,c,t){return null!=t.get?e._.accessCache[c]=0:(0,n.RI)(t,"value")&&this.set(e,c,t.value,null),Reflect.defineProperty(e,c,t)}};function Je(e){return(0,n.kJ)(e)?e.reduce(((e,c)=>(e[c]=null,e)),{}):e}let Qe=!0;function ec(e){const c=nc(e),t=e.proxy,i=e.ctx;Qe=!1,c.beforeCreate&&tc(c.beforeCreate,e,"bc");const{data:l,computed:r,methods:o,watch:s,provide:f,inject:u,created:d,beforeMount:m,mounted:p,beforeUpdate:h,updated:v,activated:z,deactivated:g,beforeDestroy:V,beforeUnmount:H,destroyed:C,unmounted:M,render:b,renderTracked:y,renderTriggered:L,errorCaptured:x,serverPrefetch:w,expose:S,inheritAttrs:k,components:N,directives:A,filters:_}=c,F=null;if(u&&cc(u,i,F),o)for(const a in o){const e=o[a];(0,n.mf)(e)&&(i[a]=e.bind(t))}if(l){0;const c=l.call(t,t);0,(0,n.Kn)(c)&&(e.data=(0,a.qj)(c))}if(Qe=!0,r)for(const a in r){const e=r[a],c=(0,n.mf)(e)?e.bind(t,t):(0,n.mf)(e.get)?e.get.bind(t,t):n.dG;0;const l=!(0,n.mf)(e)&&(0,n.mf)(e.set)?e.set.bind(t):n.dG,o=Qt({get:c,set:l});Object.defineProperty(i,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(s)for(const a in s)ac(s[a],i,t,a);if(f){const e=(0,n.mf)(f)?f.call(t):f;Reflect.ownKeys(e).forEach((c=>{gc(c,e[c])}))}function E(e,c){(0,n.kJ)(c)?c.forEach((c=>e(c.bind(t)))):c&&e(c.bind(t))}if(d&&tc(d,e,"c"),E(Pe,m),E(Te,p),E(Ie,h),E(Be,v),E(we,z),E(Se,g),E(je,x),E(Ue,y),E(De,L),E(Re,H),E(Oe,M),E(We,w),(0,n.kJ)(S))if(S.length){const c=e.exposed||(e.exposed={});S.forEach((e=>{Object.defineProperty(c,e,{get:()=>t[e],set:c=>t[e]=c})}))}else e.exposed||(e.exposed={});b&&e.render===n.dG&&(e.render=b),null!=k&&(e.inheritAttrs=k),N&&(e.components=N),A&&(e.directives=A)}function cc(e,c,t=n.dG){(0,n.kJ)(e)&&(e=sc(e));for(const i in e){const t=e[i];let l;l=(0,n.Kn)(t)?"default"in t?Vc(t.from||i,t.default,!0):Vc(t.from||i):Vc(t),(0,a.dq)(l)?Object.defineProperty(c,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e}):c[i]=l}}function tc(e,c,t){r((0,n.kJ)(e)?e.map((e=>e.bind(c.proxy))):e.bind(c.proxy),c,t)}function ac(e,c,t,a){const i=a.includes(".")?le(t,a):()=>t[a];if((0,n.HD)(e)){const t=c[e];(0,n.mf)(t)&&ae(i,t)}else if((0,n.mf)(e))ae(i,e.bind(t));else if((0,n.Kn)(e))if((0,n.kJ)(e))e.forEach((e=>ac(e,c,t,a)));else{const a=(0,n.mf)(e.handler)?e.handler.bind(t):c[e.handler];(0,n.mf)(a)&&ae(i,a,e)}else 0}function nc(e){const c=e.type,{mixins:t,extends:a}=c,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,o=l.get(c);let s;return o?s=o:i.length||t||a?(s={},i.length&&i.forEach((e=>ic(s,e,r,!0))),ic(s,c,r)):s=c,(0,n.Kn)(c)&&l.set(c,s),s}function ic(e,c,t,a=!1){const{mixins:n,extends:i}=c;i&&ic(e,i,t,!0),n&&n.forEach((c=>ic(e,c,t,!0)));for(const l in c)if(a&&"expose"===l);else{const a=lc[l]||t&&t[l];e[l]=a?a(e[l],c[l]):c[l]}return e}const lc={data:rc,props:dc,emits:dc,methods:uc,computed:uc,beforeCreate:fc,created:fc,beforeMount:fc,mounted:fc,beforeUpdate:fc,updated:fc,beforeDestroy:fc,beforeUnmount:fc,destroyed:fc,unmounted:fc,activated:fc,deactivated:fc,errorCaptured:fc,serverPrefetch:fc,components:uc,directives:uc,watch:mc,provide:rc,inject:oc};function rc(e,c){return c?e?function(){return(0,n.l7)((0,n.mf)(e)?e.call(this,this):e,(0,n.mf)(c)?c.call(this,this):c)}:c:e}function oc(e,c){return uc(sc(e),sc(c))}function sc(e){if((0,n.kJ)(e)){const c={};for(let t=0;t<e.length;t++)c[e[t]]=e[t];return c}return e}function fc(e,c){return e?[...new Set([].concat(e,c))]:c}function uc(e,c){return e?(0,n.l7)(Object.create(null),e,c):c}function dc(e,c){return e?(0,n.kJ)(e)&&(0,n.kJ)(c)?[...new Set([...e,...c])]:(0,n.l7)(Object.create(null),Je(e),Je(null!=c?c:{})):c}function mc(e,c){if(!e)return c;if(!c)return e;const t=(0,n.l7)(Object.create(null),e);for(const a in c)t[a]=fc(e[a],c[a]);return t}function pc(){return{app:null,config:{isNativeTag:n.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hc=0;function vc(e,c){return function(t,a=null){(0,n.mf)(t)||(t=(0,n.l7)({},t)),null==a||(0,n.Kn)(a)||(a=null);const i=pc();const l=new WeakSet;let r=!1;const o=i.app={_uid:hc++,_component:t,_props:a,_container:null,_context:i,_instance:null,version:aa,get config(){return i.config},set config(e){0},use(e,...c){return l.has(e)||(e&&(0,n.mf)(e.install)?(l.add(e),e.install(o,...c)):(0,n.mf)(e)&&(l.add(e),e(o,...c))),o},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),o},component(e,c){return c?(i.components[e]=c,o):i.components[e]},directive(e,c){return c?(i.directives[e]=c,o):i.directives[e]},mount(n,l,s){if(!r){0;const f=Vt(t,a);return f.appContext=i,l&&c?c(f,n):e(f,n,s),r=!0,o._container=n,n.__vue_app__=o,Xt(f.component)||f.component.proxy}},unmount(){r&&(e(null,o._container),delete o._container.__vue_app__)},provide(e,c){return i.provides[e]=c,o},runWithContext(e){zc=o;try{return e()}finally{zc=null}}};return o}}let zc=null;function gc(e,c){if(Ft){let t=Ft.provides;const a=Ft.parent&&Ft.parent.provides;a===t&&(t=Ft.provides=Object.create(a)),t[e]=c}else 0}function Vc(e,c,t=!1){const a=Ft||F;if(a||zc){const i=a?null==a.parent?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:zc._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&(0,n.mf)(c)?c.call(a&&a.proxy):c}else 0}function Hc(e,c,t,i=!1){const l={},r={};(0,n.Nj)(r,ht,1),e.propsDefaults=Object.create(null),Mc(e,c,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);t?e.props=i?l:(0,a.Um)(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function Cc(e,c,t,i){const{props:l,attrs:r,vnode:{patchFlag:o}}=e,s=(0,a.IU)(l),[f]=e.propsOptions;let u=!1;if(!(i||o>0)||16&o){let a;Mc(e,c,l,r)&&(u=!0);for(const i in s)c&&((0,n.RI)(c,i)||(a=(0,n.rs)(i))!==i&&(0,n.RI)(c,a))||(f?!t||void 0===t[i]&&void 0===t[a]||(l[i]=bc(f,s,i,void 0,e,!0)):delete l[i]);if(r!==s)for(const e in r)c&&(0,n.RI)(c,e)||(delete r[e],u=!0)}else if(8&o){const t=e.vnode.dynamicProps;for(let a=0;a<t.length;a++){let i=t[a];if(_(e.emitsOptions,i))continue;const o=c[i];if(f)if((0,n.RI)(r,i))o!==r[i]&&(r[i]=o,u=!0);else{const c=(0,n._A)(i);l[c]=bc(f,s,c,o,e,!1)}else o!==r[i]&&(r[i]=o,u=!0)}}u&&(0,a.X$)(e,"set","$attrs")}function Mc(e,c,t,i){const[l,r]=e.propsOptions;let o,s=!1;if(c)for(let a in c){if((0,n.Gg)(a))continue;const f=c[a];let u;l&&(0,n.RI)(l,u=(0,n._A)(a))?r&&r.includes(u)?(o||(o={}))[u]=f:t[u]=f:_(e.emitsOptions,a)||a in i&&f===i[a]||(i[a]=f,s=!0)}if(r){const c=(0,a.IU)(t),i=o||n.kT;for(let a=0;a<r.length;a++){const o=r[a];t[o]=bc(l,c,o,i[o],e,!(0,n.RI)(i,o))}}return s}function bc(e,c,t,a,i,l){const r=e[t];if(null!=r){const e=(0,n.RI)(r,"default");if(e&&void 0===a){const e=r.default;if(r.type!==Function&&!r.skipFactory&&(0,n.mf)(e)){const{propsDefaults:n}=i;t in n?a=n[t]:(Bt(i),a=n[t]=e.call(null,c),Rt())}else a=e}r[0]&&(l&&!e?a=!1:!r[1]||""!==a&&a!==(0,n.rs)(t)||(a=!0))}return a}function yc(e,c,t=!1){const a=c.propsCache,i=a.get(e);if(i)return i;const l=e.props,r={},o=[];let s=!1;if(!(0,n.mf)(e)){const a=e=>{s=!0;const[t,a]=yc(e,c,!0);(0,n.l7)(r,t),a&&o.push(...a)};!t&&c.mixins.length&&c.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!l&&!s)return(0,n.Kn)(e)&&a.set(e,n.Z6),n.Z6;if((0,n.kJ)(l))for(let u=0;u<l.length;u++){0;const e=(0,n._A)(l[u]);Lc(e)&&(r[e]=n.kT)}else if(l){0;for(const e in l){const c=(0,n._A)(e);if(Lc(c)){const t=l[e],a=r[c]=(0,n.kJ)(t)||(0,n.mf)(t)?{type:t}:(0,n.l7)({},t);if(a){const e=Sc(Boolean,a.type),t=Sc(String,a.type);a[0]=e>-1,a[1]=t<0||e<t,(e>-1||(0,n.RI)(a,"default"))&&o.push(c)}}}}const f=[r,o];return(0,n.Kn)(e)&&a.set(e,f),f}function Lc(e){return"$"!==e[0]}function xc(e){const c=e&&e.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:null===e?"null":""}function wc(e,c){return xc(e)===xc(c)}function Sc(e,c){return(0,n.kJ)(c)?c.findIndex((c=>wc(c,e))):(0,n.mf)(c)&&wc(c,e)?0:-1}const kc=e=>"_"===e[0]||"$stable"===e,Nc=e=>(0,n.kJ)(e)?e.map(Lt):[Lt(e)],Ac=(e,c,t)=>{if(c._n)return c;const a=B(((...e)=>Nc(c(...e))),t);return a._c=!1,a},_c=(e,c,t)=>{const a=e._ctx;for(const i in e){if(kc(i))continue;const t=e[i];if((0,n.mf)(t))c[i]=Ac(i,t,a);else if(null!=t){0;const e=Nc(t);c[i]=()=>e}}},Fc=(e,c)=>{const t=Nc(c);e.slots.default=()=>t},Ec=(e,c)=>{if(32&e.vnode.shapeFlag){const t=c._;t?(e.slots=(0,a.IU)(c),(0,n.Nj)(c,"_",t)):_c(c,e.slots={})}else e.slots={},c&&Fc(e,c);(0,n.Nj)(e.slots,ht,1)},Pc=(e,c,t)=>{const{vnode:a,slots:i}=e;let l=!0,r=n.kT;if(32&a.shapeFlag){const e=c._;e?t&&1===e?l=!1:((0,n.l7)(i,c),t||1!==e||delete i._):(l=!c.$stable,_c(c,i)),r=c}else c&&(Fc(e,c),r={default:1});if(l)for(const n in i)kc(n)||null!=r[n]||delete i[n]};function Tc(e,c,t,i,r=!1){if((0,n.kJ)(e))return void e.forEach(((e,a)=>Tc(e,c&&((0,n.kJ)(c)?c[a]:c),t,i,r)));if(ye(i)&&!r)return;const o=4&i.shapeFlag?Xt(i.component)||i.component.proxy:i.el,s=r?null:o,{i:f,r:u}=e;const d=c&&c.r,m=f.refs===n.kT?f.refs={}:f.refs,p=f.setupState;if(null!=d&&d!==u&&((0,n.HD)(d)?(m[d]=null,(0,n.RI)(p,d)&&(p[d]=null)):(0,a.dq)(d)&&(d.value=null)),(0,n.mf)(u))l(u,f,12,[s,m]);else{const c=(0,n.HD)(u),i=(0,a.dq)(u);if(c||i){const a=()=>{if(e.f){const t=c?(0,n.RI)(p,u)?p[u]:m[u]:u.value;r?(0,n.kJ)(t)&&(0,n.Od)(t,o):(0,n.kJ)(t)?t.includes(o)||t.push(o):c?(m[u]=[o],(0,n.RI)(p,u)&&(p[u]=m[u])):(u.value=[o],e.k&&(m[e.k]=u.value))}else c?(m[u]=s,(0,n.RI)(p,u)&&(p[u]=s)):i&&(u.value=s,e.k&&(m[e.k]=s))};s?(a.id=-1,Bc(a,t)):a()}else 0}}function Ic(){}const Bc=ee;function Rc(e){return Oc(e)}function Oc(e,c){Ic();const t=(0,n.E9)();t.__VUE__=!0;const{insert:i,remove:l,patchProp:r,createElement:o,createText:s,createComment:f,setText:u,setElementText:d,parentNode:m,nextSibling:p,setScopeId:h=n.dG,insertStaticContent:v}=e,z=(e,c,t,a=null,n=null,i=null,l=!1,r=null,o=!!c.dynamicChildren)=>{if(e===c)return;e&&!pt(e,c)&&(a=J(e),G(e,n,i,!0),e=null),-2===c.patchFlag&&(o=!1,c.dynamicChildren=null);const{type:s,ref:f,shapeFlag:u}=c;switch(s){case ct:g(e,c,t,a);break;case tt:V(e,c,t,a);break;case at:null==e&&H(c,t,a,l);break;case et:E(e,c,t,a,n,i,l,r,o);break;default:1&u?w(e,c,t,a,n,i,l,r,o):6&u?P(e,c,t,a,n,i,l,r,o):(64&u||128&u)&&s.process(e,c,t,a,n,i,l,r,o,ee)}null!=f&&n&&Tc(f,e&&e.ref,i,c||e,!c)},g=(e,c,t,a)=>{if(null==e)i(c.el=s(c.children),t,a);else{const t=c.el=e.el;c.children!==e.children&&u(t,c.children)}},V=(e,c,t,a)=>{null==e?i(c.el=f(c.children||""),t,a):c.el=e.el},H=(e,c,t,a)=>{[e.el,e.anchor]=v(e.children,c,t,a,e.el,e.anchor)},M=({el:e,anchor:c},t,a)=>{let n;while(e&&e!==c)n=p(e),i(e,t,a),e=n;i(c,t,a)},y=({el:e,anchor:c})=>{let t;while(e&&e!==c)t=p(e),l(e),e=t;l(c)},w=(e,c,t,a,n,i,l,r,o)=>{l=l||"svg"===c.type,null==e?S(c,t,a,n,i,l,r,o):A(e,c,n,i,l,r,o)},S=(e,c,t,a,l,s,f,u)=>{let m,p;const{type:h,props:v,shapeFlag:z,transition:g,dirs:V}=e;if(m=e.el=o(e.type,s,v&&v.is,v),8&z?d(m,e.children):16&z&&N(e.children,m,null,a,l,s&&"foreignObject"!==h,f,u),V&&se(e,null,a,"created"),k(m,e,e.scopeId,f,a),v){for(const c in v)"value"===c||(0,n.Gg)(c)||r(m,c,null,v[c],s,e.children,a,l,K);"value"in v&&r(m,"value",null,v.value),(p=v.onVnodeBeforeMount)&&kt(p,a,e)}V&&se(e,null,a,"beforeMount");const H=Dc(l,g);H&&g.beforeEnter(m),i(m,c,t),((p=v&&v.onVnodeMounted)||H||V)&&Bc((()=>{p&&kt(p,a,e),H&&g.enter(m),V&&se(e,null,a,"mounted")}),l)},k=(e,c,t,a,n)=>{if(t&&h(e,t),a)for(let i=0;i<a.length;i++)h(e,a[i]);if(n){let t=n.subTree;if(c===t){const c=n.vnode;k(e,c,c.scopeId,c.slotScopeIds,n.parent)}}},N=(e,c,t,a,n,i,l,r,o=0)=>{for(let s=o;s<e.length;s++){const o=e[s]=r?xt(e[s]):Lt(e[s]);z(null,o,c,t,a,n,i,l,r)}},A=(e,c,t,a,i,l,o)=>{const s=c.el=e.el;let{patchFlag:f,dynamicChildren:u,dirs:m}=c;f|=16&e.patchFlag;const p=e.props||n.kT,h=c.props||n.kT;let v;t&&Wc(t,!1),(v=h.onVnodeBeforeUpdate)&&kt(v,t,c,e),m&&se(c,e,t,"beforeUpdate"),t&&Wc(t,!0);const z=i&&"foreignObject"!==c.type;if(u?_(e.dynamicChildren,u,s,t,a,z,l):o||W(e,c,s,null,t,a,z,l,!1),f>0){if(16&f)F(s,c,p,h,t,a,i);else if(2&f&&p.class!==h.class&&r(s,"class",null,h.class,i),4&f&&r(s,"style",p.style,h.style,i),8&f){const n=c.dynamicProps;for(let c=0;c<n.length;c++){const l=n[c],o=p[l],f=h[l];f===o&&"value"!==l||r(s,l,o,f,i,e.children,t,a,K)}}1&f&&e.children!==c.children&&d(s,c.children)}else o||null!=u||F(s,c,p,h,t,a,i);((v=h.onVnodeUpdated)||m)&&Bc((()=>{v&&kt(v,t,c,e),m&&se(c,e,t,"updated")}),a)},_=(e,c,t,a,n,i,l)=>{for(let r=0;r<c.length;r++){const o=e[r],s=c[r],f=o.el&&(o.type===et||!pt(o,s)||70&o.shapeFlag)?m(o.el):t;z(o,s,f,null,a,n,i,l,!0)}},F=(e,c,t,a,i,l,o)=>{if(t!==a){if(t!==n.kT)for(const s in t)(0,n.Gg)(s)||s in a||r(e,s,t[s],null,o,c.children,i,l,K);for(const s in a){if((0,n.Gg)(s))continue;const f=a[s],u=t[s];f!==u&&"value"!==s&&r(e,s,u,f,o,c.children,i,l,K)}"value"in a&&r(e,"value",t.value,a.value)}},E=(e,c,t,a,n,l,r,o,f)=>{const u=c.el=e?e.el:s(""),d=c.anchor=e?e.anchor:s("");let{patchFlag:m,dynamicChildren:p,slotScopeIds:h}=c;h&&(o=o?o.concat(h):h),null==e?(i(u,t,a),i(d,t,a),N(c.children,t,d,n,l,r,o,f)):m>0&&64&m&&p&&e.dynamicChildren?(_(e.dynamicChildren,p,t,n,l,r,o),(null!=c.key||n&&c===n.subTree)&&Uc(e,c,!0)):W(e,c,t,d,n,l,r,o,f)},P=(e,c,t,a,n,i,l,r,o)=>{c.slotScopeIds=r,null==e?512&c.shapeFlag?n.ctx.activate(c,t,a,l,o):T(c,t,a,n,i,l,o):I(e,c,o)},T=(e,c,t,a,n,i,l)=>{const r=e.component=_t(e,a,n);if(Le(e)&&(r.ctx.renderer=ee),jt(r),r.asyncDep){if(n&&n.registerDep(r,B),!e.el){const e=r.subTree=Vt(tt);V(null,e,c,t)}}else B(r,e,c,t,n,i,l)},I=(e,c,t)=>{const a=c.component=e.component;if(D(e,c,t)){if(a.asyncDep&&!a.asyncResolved)return void O(a,c,t);a.next=c,b(a.update),a.update()}else c.el=e.el,a.vnode=c},B=(e,c,t,i,l,r,o)=>{const s=()=>{if(e.isMounted){let c,{next:t,bu:a,u:i,parent:s,vnode:f}=e,u=t;0,Wc(e,!1),t?(t.el=f.el,O(e,t,o)):t=f,a&&(0,n.ir)(a),(c=t.props&&t.props.onVnodeBeforeUpdate)&&kt(c,s,t,f),Wc(e,!0);const d=R(e);0;const p=e.subTree;e.subTree=d,z(p,d,m(p.el),J(p),e,l,r),t.el=d.el,null===u&&j(e,d.el),i&&Bc(i,l),(c=t.props&&t.props.onVnodeUpdated)&&Bc((()=>kt(c,s,t,f)),l)}else{let a;const{el:o,props:s}=c,{bm:f,m:u,parent:d}=e,m=ye(c);if(Wc(e,!1),f&&(0,n.ir)(f),!m&&(a=s&&s.onVnodeBeforeMount)&&kt(a,d,c),Wc(e,!0),o&&te){const t=()=>{e.subTree=R(e),te(o,e.subTree,e,l,null)};m?c.type.__asyncLoader().then((()=>!e.isUnmounted&&t())):t()}else{0;const a=e.subTree=R(e);0,z(null,a,t,i,e,l,r),c.el=a.el}if(u&&Bc(u,l),!m&&(a=s&&s.onVnodeMounted)){const e=c;Bc((()=>kt(a,d,e)),l)}(256&c.shapeFlag||d&&ye(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Bc(e.a,l),e.isMounted=!0,c=t=i=null}},f=e.effect=new a.qq(s,(()=>C(u)),e.scope),u=e.update=()=>f.run();u.id=e.uid,Wc(e,!0),u()},O=(e,c,t)=>{c.component=e;const n=e.vnode.props;e.vnode=c,e.next=null,Cc(e,c.props,n,t),Pc(e,c.children,t),(0,a.Jd)(),L(e),(0,a.lk)()},W=(e,c,t,a,n,i,l,r,o=!1)=>{const s=e&&e.children,f=e?e.shapeFlag:0,u=c.children,{patchFlag:m,shapeFlag:p}=c;if(m>0){if(128&m)return void $(s,u,t,a,n,i,l,r,o);if(256&m)return void U(s,u,t,a,n,i,l,r,o)}8&p?(16&f&&K(s,n,i),u!==s&&d(t,u)):16&f?16&p?$(s,u,t,a,n,i,l,r,o):K(s,n,i,!0):(8&f&&d(t,""),16&p&&N(u,t,a,n,i,l,r,o))},U=(e,c,t,a,i,l,r,o,s)=>{e=e||n.Z6,c=c||n.Z6;const f=e.length,u=c.length,d=Math.min(f,u);let m;for(m=0;m<d;m++){const a=c[m]=s?xt(c[m]):Lt(c[m]);z(e[m],a,t,null,i,l,r,o,s)}f>u?K(e,i,l,!0,!1,d):N(c,t,a,i,l,r,o,s,d)},$=(e,c,t,a,i,l,r,o,s)=>{let f=0;const u=c.length;let d=e.length-1,m=u-1;while(f<=d&&f<=m){const a=e[f],n=c[f]=s?xt(c[f]):Lt(c[f]);if(!pt(a,n))break;z(a,n,t,null,i,l,r,o,s),f++}while(f<=d&&f<=m){const a=e[d],n=c[m]=s?xt(c[m]):Lt(c[m]);if(!pt(a,n))break;z(a,n,t,null,i,l,r,o,s),d--,m--}if(f>d){if(f<=m){const e=m+1,n=e<u?c[e].el:a;while(f<=m)z(null,c[f]=s?xt(c[f]):Lt(c[f]),t,n,i,l,r,o,s),f++}}else if(f>m)while(f<=d)G(e[f],i,l,!0),f++;else{const p=f,h=f,v=new Map;for(f=h;f<=m;f++){const e=c[f]=s?xt(c[f]):Lt(c[f]);null!=e.key&&v.set(e.key,f)}let g,V=0;const H=m-h+1;let C=!1,M=0;const b=new Array(H);for(f=0;f<H;f++)b[f]=0;for(f=p;f<=d;f++){const a=e[f];if(V>=H){G(a,i,l,!0);continue}let n;if(null!=a.key)n=v.get(a.key);else for(g=h;g<=m;g++)if(0===b[g-h]&&pt(a,c[g])){n=g;break}void 0===n?G(a,i,l,!0):(b[n-h]=f+1,n>=M?M=n:C=!0,z(a,c[n],t,null,i,l,r,o,s),V++)}const y=C?jc(b):n.Z6;for(g=y.length-1,f=H-1;f>=0;f--){const e=h+f,n=c[e],d=e+1<u?c[e+1].el:a;0===b[f]?z(null,n,t,d,i,l,r,o,s):C&&(g<0||f!==y[g]?q(n,t,d,2):g--)}}},q=(e,c,t,a,n=null)=>{const{el:l,type:r,transition:o,children:s,shapeFlag:f}=e;if(6&f)return void q(e.component.subTree,c,t,a);if(128&f)return void e.suspense.move(c,t,a);if(64&f)return void r.move(e,c,t,ee);if(r===et){i(l,c,t);for(let e=0;e<s.length;e++)q(s[e],c,t,a);return void i(e.anchor,c,t)}if(r===at)return void M(e,c,t);const u=2!==a&&1&f&&o;if(u)if(0===a)o.beforeEnter(l),i(l,c,t),Bc((()=>o.enter(l)),n);else{const{leave:e,delayLeave:a,afterLeave:n}=o,r=()=>i(l,c,t),s=()=>{e(l,(()=>{r(),n&&n()}))};a?a(l,r,s):s()}else i(l,c,t)},G=(e,c,t,a=!1,n=!1)=>{const{type:i,props:l,ref:r,children:o,dynamicChildren:s,shapeFlag:f,patchFlag:u,dirs:d}=e;if(null!=r&&Tc(r,null,t,e,!0),256&f)return void c.ctx.deactivate(e);const m=1&f&&d,p=!ye(e);let h;if(p&&(h=l&&l.onVnodeBeforeUnmount)&&kt(h,c,e),6&f)X(e.component,t,a);else{if(128&f)return void e.suspense.unmount(t,a);m&&se(e,null,c,"beforeUnmount"),64&f?e.type.remove(e,c,t,n,ee,a):s&&(i!==et||u>0&&64&u)?K(s,c,t,!1,!0):(i===et&&384&u||!n&&16&f)&&K(o,c,t),a&&Y(e)}(p&&(h=l&&l.onVnodeUnmounted)||m)&&Bc((()=>{h&&kt(h,c,e),m&&se(e,null,c,"unmounted")}),t)},Y=e=>{const{type:c,el:t,anchor:a,transition:n}=e;if(c===et)return void Z(t,a);if(c===at)return void y(e);const i=()=>{l(t),n&&!n.persisted&&n.afterLeave&&n.afterLeave()};if(1&e.shapeFlag&&n&&!n.persisted){const{leave:c,delayLeave:a}=n,l=()=>c(t,i);a?a(e.el,i,l):l()}else i()},Z=(e,c)=>{let t;while(e!==c)t=p(e),l(e),e=t;l(c)},X=(e,c,t)=>{const{bum:a,scope:i,update:l,subTree:r,um:o}=e;a&&(0,n.ir)(a),i.stop(),l&&(l.active=!1,G(r,e,c,t)),o&&Bc(o,c),Bc((()=>{e.isUnmounted=!0}),c),c&&c.pendingBranch&&!c.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===c.pendingId&&(c.deps--,0===c.deps&&c.resolve())},K=(e,c,t,a=!1,n=!1,i=0)=>{for(let l=i;l<e.length;l++)G(e[l],c,t,a,n)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,c,t)=>{null==e?c._vnode&&G(c._vnode,null,null,!0):z(c._vnode||null,e,c,null,null,null,t),L(),x(),c._vnode=e},ee={p:z,um:G,m:q,r:Y,mt:T,mc:N,pc:W,pbc:_,n:J,o:e};let ce,te;return c&&([ce,te]=c(ee)),{render:Q,hydrate:ce,createApp:vc(Q,ce)}}function Wc({effect:e,update:c},t){e.allowRecurse=c.allowRecurse=t}function Dc(e,c){return(!e||e&&!e.pendingBranch)&&c&&!c.persisted}function Uc(e,c,t=!1){const a=e.children,i=c.children;if((0,n.kJ)(a)&&(0,n.kJ)(i))for(let n=0;n<a.length;n++){const e=a[n];let c=i[n];1&c.shapeFlag&&!c.dynamicChildren&&((c.patchFlag<=0||32===c.patchFlag)&&(c=i[n]=xt(i[n]),c.el=e.el),t||Uc(e,c)),c.type===ct&&(c.el=e.el)}}function jc(e){const c=e.slice(),t=[0];let a,n,i,l,r;const o=e.length;for(a=0;a<o;a++){const o=e[a];if(0!==o){if(n=t[t.length-1],e[n]<o){c[a]=n,t.push(a);continue}i=0,l=t.length-1;while(i<l)r=i+l>>1,e[t[r]]<o?i=r+1:l=r;o<e[t[i]]&&(i>0&&(c[a]=t[i-1]),t[i]=a)}}i=t.length,l=t[i-1];while(i-- >0)t[i]=l,l=c[l];return t}const $c=e=>e.__isTeleport,qc=e=>e&&(e.disabled||""===e.disabled),Gc=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Yc=(e,c)=>{const t=e&&e.to;if((0,n.HD)(t)){if(c){const e=c(t);return e}return null}return t},Zc={name:"Teleport",__isTeleport:!0,process(e,c,t,a,n,i,l,r,o,s){const{mc:f,pc:u,pbc:d,o:{insert:m,querySelector:p,createText:h,createComment:v}}=s,z=qc(c.props);let{shapeFlag:g,children:V,dynamicChildren:H}=c;if(null==e){const e=c.el=h(""),s=c.anchor=h("");m(e,t,a),m(s,t,a);const u=c.target=Yc(c.props,p),d=c.targetAnchor=h("");u&&(m(d,u),l=l||Gc(u));const v=(e,c)=>{16&g&&f(V,e,c,n,i,l,r,o)};z?v(t,s):u&&v(u,d)}else{c.el=e.el;const a=c.anchor=e.anchor,f=c.target=e.target,m=c.targetAnchor=e.targetAnchor,h=qc(e.props),v=h?t:f,g=h?a:m;if(l=l||Gc(f),H?(d(e.dynamicChildren,H,v,n,i,l,r),Uc(e,c,!0)):o||u(e,c,v,g,n,i,l,r,!1),z)h?c.props&&e.props&&c.props.to!==e.props.to&&(c.props.to=e.props.to):Xc(c,t,a,s,1);else if((c.props&&c.props.to)!==(e.props&&e.props.to)){const e=c.target=Yc(c.props,p);e&&Xc(c,e,null,s,0)}else h&&Xc(c,f,m,s,1)}Qc(c)},remove(e,c,t,a,{um:n,o:{remove:i}},l){const{shapeFlag:r,children:o,anchor:s,targetAnchor:f,target:u,props:d}=e;if(u&&i(f),l&&i(s),16&r){const e=l||!qc(d);for(let a=0;a<o.length;a++){const i=o[a];n(i,c,t,e,!!i.dynamicChildren)}}},move:Xc,hydrate:Kc};function Xc(e,c,t,{o:{insert:a},m:n},i=2){0===i&&a(e.targetAnchor,c,t);const{el:l,anchor:r,shapeFlag:o,children:s,props:f}=e,u=2===i;if(u&&a(l,c,t),(!u||qc(f))&&16&o)for(let d=0;d<s.length;d++)n(s[d],c,t,2);u&&a(r,c,t)}function Kc(e,c,t,a,n,i,{o:{nextSibling:l,parentNode:r,querySelector:o}},s){const f=c.target=Yc(c.props,o);if(f){const o=f._lpa||f.firstChild;if(16&c.shapeFlag)if(qc(c.props))c.anchor=s(l(e),c,r(e),t,a,n,i),c.targetAnchor=o;else{c.anchor=l(e);let r=o;while(r)if(r=l(r),r&&8===r.nodeType&&"teleport anchor"===r.data){c.targetAnchor=r,f._lpa=c.targetAnchor&&l(c.targetAnchor);break}s(o,c,f,t,a,n,i)}Qc(c)}return c.anchor&&l(c.anchor)}const Jc=Zc;function Qc(e){const c=e.ctx;if(c&&c.ut){let t=e.children[0].el;while(t&&t!==e.targetAnchor)1===t.nodeType&&t.setAttribute("data-v-owner",c.uid),t=t.nextSibling;c.ut()}}const et=Symbol.for("v-fgt"),ct=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),at=Symbol.for("v-stc"),nt=[];let it=null;function lt(e=!1){nt.push(it=e?null:[])}function rt(){nt.pop(),it=nt[nt.length-1]||null}let ot=1;function st(e){ot+=e}function ft(e){return e.dynamicChildren=ot>0?it||n.Z6:null,rt(),ot>0&&it&&it.push(e),e}function ut(e,c,t,a,n,i){return ft(gt(e,c,t,a,n,i,!0))}function dt(e,c,t,a,n){return ft(Vt(e,c,t,a,n,!0))}function mt(e){return!!e&&!0===e.__v_isVNode}function pt(e,c){return e.type===c.type&&e.key===c.key}const ht="__vInternal",vt=({key:e})=>null!=e?e:null,zt=({ref:e,ref_key:c,ref_for:t})=>("number"===typeof e&&(e=""+e),null!=e?(0,n.HD)(e)||(0,a.dq)(e)||(0,n.mf)(e)?{i:F,r:e,k:c,f:!!t}:e:null);function gt(e,c=null,t=null,a=0,i=null,l=(e===et?0:1),r=!1,o=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&vt(c),ref:c&&zt(c),scopeId:E,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:F};return o?(wt(s,t),128&l&&e.normalize(s)):t&&(s.shapeFlag|=(0,n.HD)(t)?8:16),ot>0&&!r&&it&&(s.patchFlag>0||6&l)&&32!==s.patchFlag&&it.push(s),s}const Vt=Ht;function Ht(e,c=null,t=null,i=0,l=null,r=!1){if(e&&e!==Y||(e=tt),mt(e)){const a=Mt(e,c,!0);return t&&wt(a,t),ot>0&&!r&&it&&(6&a.shapeFlag?it[it.indexOf(e)]=a:it.push(a)),a.patchFlag|=-2,a}if(Jt(e)&&(e=e.__vccOpts),c){c=Ct(c);let{class:e,style:t}=c;e&&!(0,n.HD)(e)&&(c.class=(0,n.C_)(e)),(0,n.Kn)(t)&&((0,a.X3)(t)&&!(0,n.kJ)(t)&&(t=(0,n.l7)({},t)),c.style=(0,n.j5)(t))}const o=(0,n.HD)(e)?1:Q(e)?128:$c(e)?64:(0,n.Kn)(e)?4:(0,n.mf)(e)?2:0;return gt(e,c,t,i,l,o,r,!0)}function Ct(e){return e?(0,a.X3)(e)||ht in e?(0,n.l7)({},e):e:null}function Mt(e,c,t=!1){const{props:a,ref:i,patchFlag:l,children:r}=e,o=c?St(a||{},c):a,s={__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&vt(o),ref:c&&c.ref?t&&i?(0,n.kJ)(i)?i.concat(zt(c)):[i,zt(c)]:zt(c):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==et?-1===l?16:16|l:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return s}function bt(e=" ",c=0){return Vt(ct,null,e,c)}function yt(e="",c=!1){return c?(lt(),dt(tt,null,e)):Vt(tt,null,e)}function Lt(e){return null==e||"boolean"===typeof e?Vt(tt):(0,n.kJ)(e)?Vt(et,null,e.slice()):"object"===typeof e?xt(e):Vt(ct,null,String(e))}function xt(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Mt(e)}function wt(e,c){let t=0;const{shapeFlag:a}=e;if(null==c)c=null;else if((0,n.kJ)(c))t=16;else if("object"===typeof c){if(65&a){const t=c.default;return void(t&&(t._c&&(t._d=!1),wt(e,t()),t._c&&(t._d=!0)))}{t=32;const a=c._;a||ht in c?3===a&&F&&(1===F.slots._?c._=1:(c._=2,e.patchFlag|=1024)):c._ctx=F}}else(0,n.mf)(c)?(c={default:c,_ctx:F},t=32):(c=String(c),64&a?(t=16,c=[bt(c)]):t=8);e.children=c,e.shapeFlag|=t}function St(...e){const c={};for(let t=0;t<e.length;t++){const a=e[t];for(const e in a)if("class"===e)c.class!==a.class&&(c.class=(0,n.C_)([c.class,a.class]));else if("style"===e)c.style=(0,n.j5)([c.style,a.style]);else if((0,n.F7)(e)){const t=c[e],i=a[e];!i||t===i||(0,n.kJ)(t)&&t.includes(i)||(c[e]=t?[].concat(t,i):i)}else""!==e&&(c[e]=a[e])}return c}function kt(e,c,t,a=null){r(e,c,7,[t,a])}const Nt=pc();let At=0;function _t(e,c,t){const i=e.type,l=(c?c.appContext:e.appContext)||Nt,r={uid:At++,vnode:e,type:i,parent:c,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new a.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(i,l),emitsOptions:A(i,l),emit:null,emitted:null,propsDefaults:n.kT,inheritAttrs:i.inheritAttrs,ctx:n.kT,data:n.kT,props:n.kT,attrs:n.kT,slots:n.kT,refs:n.kT,setupState:n.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=N.bind(null,r),e.ce&&e.ce(r),r}let Ft=null;const Et=()=>Ft||F;let Pt,Tt,It="__VUE_INSTANCE_SETTERS__";(Tt=(0,n.E9)()[It])||(Tt=(0,n.E9)()[It]=[]),Tt.push((e=>Ft=e)),Pt=e=>{Tt.length>1?Tt.forEach((c=>c(e))):Tt[0](e)};const Bt=e=>{Pt(e),e.scope.on()},Rt=()=>{Ft&&Ft.scope.off(),Pt(null)};function Ot(e){return 4&e.vnode.shapeFlag}let Wt,Dt,Ut=!1;function jt(e,c=!1){Ut=c;const{props:t,children:a}=e.vnode,n=Ot(e);Hc(e,t,n,c),Ec(e,a);const i=n?$t(e,c):void 0;return Ut=!1,i}function $t(e,c){const t=e.type;e.accessCache=Object.create(null),e.proxy=(0,a.Xl)(new Proxy(e.ctx,Ke));const{setup:i}=t;if(i){const t=e.setupContext=i.length>1?Zt(e):null;Bt(e),(0,a.Jd)();const r=l(i,e,0,[e.props,t]);if((0,a.lk)(),Rt(),(0,n.tI)(r)){if(r.then(Rt,Rt),c)return r.then((t=>{qt(e,t,c)})).catch((c=>{o(c,e,0)}));e.asyncDep=r}else qt(e,r,c)}else Gt(e,c)}function qt(e,c,t){(0,n.mf)(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:(0,n.Kn)(c)&&(e.setupState=(0,a.WL)(c)),Gt(e,t)}function Gt(e,c,t){const i=e.type;if(!e.render){if(!c&&Wt&&!i.render){const c=i.template||nc(e).template;if(c){0;const{isCustomElement:t,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:r}=i,o=(0,n.l7)((0,n.l7)({isCustomElement:t,delimiters:l},a),r);i.render=Wt(c,o)}}e.render=i.render||n.dG,Dt&&Dt(e)}Bt(e),(0,a.Jd)();try{ec(e)}finally{(0,a.lk)(),Rt()}}function Yt(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,t){return(0,a.j)(e,"get","$attrs"),c[t]}}))}function Zt(e){const c=c=>{e.exposed=c||{}};return{get attrs(){return Yt(e)},slots:e.slots,emit:e.emit,expose:c}}function Xt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,a.WL)((0,a.Xl)(e.exposed)),{get(c,t){return t in c?c[t]:t in Ze?Ze[t](e):void 0},has(e,c){return c in e||c in Ze}}))}function Kt(e,c=!0){return(0,n.mf)(e)?e.displayName||e.name:e.name||c&&e.__name}function Jt(e){return(0,n.mf)(e)&&"__vccOpts"in e}const Qt=(e,c)=>(0,a.Fl)(e,c,Ut);function ea(e,c,t){const a=arguments.length;return 2===a?(0,n.Kn)(c)&&!(0,n.kJ)(c)?mt(c)?Vt(e,null,[c]):Vt(e,c):Vt(e,null,c):(a>3?t=Array.prototype.slice.call(arguments,2):3===a&&mt(t)&&(t=[t]),Vt(e,c,t))}const ca=Symbol.for("v-scx"),ta=()=>{{const e=Vc(ca);return e}};const aa="3.3.13"},9242:function(e,c,t){t.d(c,{F8:function(){return _},W3:function(){return se},iM:function(){return Ce},nr:function(){return ge},ri:function(){return Le},uT:function(){return m}});t(560);var a=t(3396),n=t(7139),i=t(4870);const l="http://www.w3.org/2000/svg",r="undefined"!==typeof document?document:null,o=r&&r.createElement("template"),s={insert:(e,c,t)=>{c.insertBefore(e,t||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,t,a)=>{const n=c?r.createElementNS(l,e):r.createElement(e,t?{is:t}:void 0);return"select"===e&&a&&null!=a.multiple&&n.setAttribute("multiple",a.multiple),n},createText:e=>r.createTextNode(e),createComment:e=>r.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>r.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,t,a,n,i){const l=t?t.previousSibling:c.lastChild;if(n&&(n===i||n.nextSibling)){while(1)if(c.insertBefore(n.cloneNode(!0),t),n===i||!(n=n.nextSibling))break}else{o.innerHTML=a?`<svg>${e}</svg>`:e;const n=o.content;if(a){const e=n.firstChild;while(e.firstChild)n.appendChild(e.firstChild);n.removeChild(e)}c.insertBefore(n,t)}return[l?l.nextSibling:c.firstChild,t?t.previousSibling:c.lastChild]}},f="transition",u="animation",d=Symbol("_vtc"),m=(e,{slots:c})=>(0,a.h)(a.P$,g(e),c);m.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},h=m.props=(0,n.l7)({},a.nJ,p),v=(e,c=[])=>{(0,n.kJ)(e)?e.forEach((e=>e(...c))):e&&e(...c)},z=e=>!!e&&((0,n.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function g(e){const c={};for(const n in e)n in p||(c[n]=e[n]);if(!1===e.css)return c;const{name:t="v",type:a,duration:i,enterFromClass:l=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:s=l,appearActiveClass:f=r,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,g=V(i),H=g&&g[0],y=g&&g[1],{onBeforeEnter:x,onEnter:w,onEnterCancelled:S,onLeave:N,onLeaveCancelled:A,onBeforeAppear:_=x,onAppear:F=w,onAppearCancelled:E=S}=c,P=(e,c,t)=>{M(e,c?u:o),M(e,c?f:r),t&&t()},T=(e,c)=>{e._isLeaving=!1,M(e,d),M(e,h),M(e,m),c&&c()},I=e=>(c,t)=>{const n=e?F:w,i=()=>P(c,e,t);v(n,[c,i]),b((()=>{M(c,e?s:l),C(c,e?u:o),z(n)||L(c,a,H,i)}))};return(0,n.l7)(c,{onBeforeEnter(e){v(x,[e]),C(e,l),C(e,r)},onBeforeAppear(e){v(_,[e]),C(e,s),C(e,f)},onEnter:I(!1),onAppear:I(!0),onLeave(e,c){e._isLeaving=!0;const t=()=>T(e,c);C(e,d),k(),C(e,m),b((()=>{e._isLeaving&&(M(e,d),C(e,h),z(N)||L(e,a,y,t))})),v(N,[e,t])},onEnterCancelled(e){P(e,!1),v(S,[e])},onAppearCancelled(e){P(e,!0),v(E,[e])},onLeaveCancelled(e){T(e),v(A,[e])}})}function V(e){if(null==e)return null;if((0,n.Kn)(e))return[H(e.enter),H(e.leave)];{const c=H(e);return[c,c]}}function H(e){const c=(0,n.He)(e);return c}function C(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.add(c))),(e[d]||(e[d]=new Set)).add(c)}function M(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.remove(c)));const t=e[d];t&&(t.delete(c),t.size||(e[d]=void 0))}function b(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let y=0;function L(e,c,t,a){const n=e._endId=++y,i=()=>{n===e._endId&&a()};if(t)return setTimeout(i,t);const{type:l,timeout:r,propCount:o}=x(e,c);if(!l)return a();const s=l+"end";let f=0;const u=()=>{e.removeEventListener(s,d),i()},d=c=>{c.target===e&&++f>=o&&u()};setTimeout((()=>{f<o&&u()}),r+1),e.addEventListener(s,d)}function x(e,c){const t=window.getComputedStyle(e),a=e=>(t[e]||"").split(", "),n=a(`${f}Delay`),i=a(`${f}Duration`),l=w(n,i),r=a(`${u}Delay`),o=a(`${u}Duration`),s=w(r,o);let d=null,m=0,p=0;c===f?l>0&&(d=f,m=l,p=i.length):c===u?s>0&&(d=u,m=s,p=o.length):(m=Math.max(l,s),d=m>0?l>s?f:u:null,p=d?d===f?i.length:o.length:0);const h=d===f&&/\b(transform|all)(,|$)/.test(a(`${f}Property`).toString());return{type:d,timeout:m,propCount:p,hasTransform:h}}function w(e,c){while(e.length<c.length)e=e.concat(e);return Math.max(...c.map(((c,t)=>S(c)+S(e[t]))))}function S(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function k(){return document.body.offsetHeight}function N(e,c,t){const a=e[d];a&&(c=(c?[c,...a]:[...a]).join(" ")),null==c?e.removeAttribute("class"):t?e.setAttribute("class",c):e.className=c}const A=Symbol("_vod"),_={beforeMount(e,{value:c},{transition:t}){e[A]="none"===e.style.display?"":e.style.display,t&&c?t.beforeEnter(e):F(e,c)},mounted(e,{value:c},{transition:t}){t&&c&&t.enter(e)},updated(e,{value:c,oldValue:t},{transition:a}){!c!==!t&&(a?c?(a.beforeEnter(e),F(e,!0),a.enter(e)):a.leave(e,(()=>{F(e,!1)})):F(e,c))},beforeUnmount(e,{value:c}){F(e,c)}};function F(e,c){e.style.display=c?e[A]:"none"}const E=Symbol("");function P(e,c,t){const a=e.style,i=(0,n.HD)(t);if(t&&!i){if(c&&!(0,n.HD)(c))for(const e in c)null==t[e]&&I(a,e,"");for(const e in t)I(a,e,t[e])}else{const n=a.display;if(i){if(c!==t){const e=a[E];e&&(t+=";"+e),a.cssText=t}}else c&&e.removeAttribute("style");A in e&&(a.display=n)}}const T=/\s*!important$/;function I(e,c,t){if((0,n.kJ)(t))t.forEach((t=>I(e,c,t)));else if(null==t&&(t=""),c.startsWith("--"))e.setProperty(c,t);else{const a=O(e,c);T.test(t)?e.setProperty((0,n.rs)(a),t.replace(T,""),"important"):e[a]=t}}const B=["Webkit","Moz","ms"],R={};function O(e,c){const t=R[c];if(t)return t;let a=(0,n._A)(c);if("filter"!==a&&a in e)return R[c]=a;a=(0,n.kC)(a);for(let n=0;n<B.length;n++){const t=B[n]+a;if(t in e)return R[c]=t}return c}const W="http://www.w3.org/1999/xlink";function D(e,c,t,a,i){if(a&&c.startsWith("xlink:"))null==t?e.removeAttributeNS(W,c.slice(6,c.length)):e.setAttributeNS(W,c,t);else{const a=(0,n.Pq)(c);null==t||a&&!(0,n.yA)(t)?e.removeAttribute(c):e.setAttribute(c,a?"":t)}}function U(e,c,t,a,i,l,r){if("innerHTML"===c||"textContent"===c)return a&&r(a,i,l),void(e[c]=null==t?"":t);const o=e.tagName;if("value"===c&&"PROGRESS"!==o&&!o.includes("-")){e._value=t;const a="OPTION"===o?e.getAttribute("value"):e.value,n=null==t?"":t;return a!==n&&(e.value=n),void(null==t&&e.removeAttribute(c))}let s=!1;if(""===t||null==t){const a=typeof e[c];"boolean"===a?t=(0,n.yA)(t):null==t&&"string"===a?(t="",s=!0):"number"===a&&(t=0,s=!0)}try{e[c]=t}catch(f){0}s&&e.removeAttribute(c)}function j(e,c,t,a){e.addEventListener(c,t,a)}function $(e,c,t,a){e.removeEventListener(c,t,a)}const q=Symbol("_vei");function G(e,c,t,a,n=null){const i=e[q]||(e[q]={}),l=i[c];if(a&&l)l.value=a;else{const[t,r]=Z(c);if(a){const l=i[c]=Q(a,n);j(e,t,l,r)}else l&&($(e,t,l,r),i[c]=void 0)}}const Y=/(?:Once|Passive|Capture)$/;function Z(e){let c;if(Y.test(e)){let t;c={};while(t=e.match(Y))e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}const t=":"===e[2]?e.slice(3):(0,n.rs)(e.slice(2));return[t,c]}let X=0;const K=Promise.resolve(),J=()=>X||(K.then((()=>X=0)),X=Date.now());function Q(e,c){const t=e=>{if(e._vts){if(e._vts<=t.attached)return}else e._vts=Date.now();(0,a.$d)(ee(e,t.value),c,5,[e])};return t.value=e,t.attached=J(),t}function ee(e,c){if((0,n.kJ)(c)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},c.map((e=>c=>!c._stopped&&e&&e(c)))}return c}const ce=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,te=(e,c,t,a,i=!1,l,r,o,s)=>{"class"===c?N(e,a,i):"style"===c?P(e,t,a):(0,n.F7)(c)?(0,n.tR)(c)||G(e,c,t,a,r):("."===c[0]?(c=c.slice(1),1):"^"===c[0]?(c=c.slice(1),0):ae(e,c,a,i))?U(e,c,a,l,r,o,s):("true-value"===c?e._trueValue=a:"false-value"===c&&(e._falseValue=a),D(e,c,a,i))};function ae(e,c,t,a){if(a)return"innerHTML"===c||"textContent"===c||!!(c in e&&ce(c)&&(0,n.mf)(t));if("spellcheck"===c||"draggable"===c||"translate"===c)return!1;if("form"===c)return!1;if("list"===c&&"INPUT"===e.tagName)return!1;if("type"===c&&"TEXTAREA"===e.tagName)return!1;if("width"===c||"height"===c){const c=e.tagName;if("IMG"===c||"VIDEO"===c||"CANVAS"===c||"SOURCE"===c)return!1}return(!ce(c)||!(0,n.HD)(t))&&c in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ne=new WeakMap,ie=new WeakMap,le=Symbol("_moveCb"),re=Symbol("_enterCb"),oe={name:"TransitionGroup",props:(0,n.l7)({},h,{tag:String,moveClass:String}),setup(e,{slots:c}){const t=(0,a.FN)(),n=(0,a.Y8)();let l,r;return(0,a.ic)((()=>{if(!l.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!me(l[0].el,t.vnode.el,c))return;l.forEach(fe),l.forEach(ue);const a=l.filter(de);k(),a.forEach((e=>{const t=e.el,a=t.style;C(t,c),a.transform=a.webkitTransform=a.transitionDuration="";const n=t[le]=e=>{e&&e.target!==t||e&&!/transform$/.test(e.propertyName)||(t.removeEventListener("transitionend",n),t[le]=null,M(t,c))};t.addEventListener("transitionend",n)}))})),()=>{const o=(0,i.IU)(e),s=g(o);let f=o.tag||a.HY;l=r,r=c.default?(0,a.Q6)(c.default()):[];for(let e=0;e<r.length;e++){const c=r[e];null!=c.key&&(0,a.nK)(c,(0,a.U2)(c,s,n,t))}if(l)for(let e=0;e<l.length;e++){const c=l[e];(0,a.nK)(c,(0,a.U2)(c,s,n,t)),ne.set(c,c.el.getBoundingClientRect())}return(0,a.Wm)(f,null,r)}}};oe.props;const se=oe;function fe(e){const c=e.el;c[le]&&c[le](),c[re]&&c[re]()}function ue(e){ie.set(e,e.el.getBoundingClientRect())}function de(e){const c=ne.get(e),t=ie.get(e),a=c.left-t.left,n=c.top-t.top;if(a||n){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${a}px,${n}px)`,c.transitionDuration="0s",e}}function me(e,c,t){const a=e.cloneNode(),n=e[d];n&&n.forEach((e=>{e.split(/\s+/).forEach((e=>e&&a.classList.remove(e)))})),t.split(/\s+/).forEach((e=>e&&a.classList.add(e))),a.style.display="none";const i=1===c.nodeType?c:c.parentNode;i.appendChild(a);const{hasTransform:l}=x(a);return i.removeChild(a),l}const pe=e=>{const c=e.props["onUpdate:modelValue"]||!1;return(0,n.kJ)(c)?e=>(0,n.ir)(c,e):c};function he(e){e.target.composing=!0}function ve(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const ze=Symbol("_assign"),ge={created(e,{modifiers:{lazy:c,trim:t,number:a}},i){e[ze]=pe(i);const l=a||i.props&&"number"===i.props.type;j(e,c?"change":"input",(c=>{if(c.target.composing)return;let a=e.value;t&&(a=a.trim()),l&&(a=(0,n.h5)(a)),e[ze](a)})),t&&j(e,"change",(()=>{e.value=e.value.trim()})),c||(j(e,"compositionstart",he),j(e,"compositionend",ve),j(e,"change",ve))},mounted(e,{value:c}){e.value=null==c?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:t,trim:a,number:i}},l){if(e[ze]=pe(l),e.composing)return;const r=i||"number"===e.type?(0,n.h5)(e.value):e.value,o=null==c?"":c;if(r!==o){if(document.activeElement===e&&"range"!==e.type){if(t)return;if(a&&e.value.trim()===o)return}e.value=o}}};const Ve=["ctrl","shift","alt","meta"],He={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,c)=>Ve.some((t=>e[`${t}Key`]&&!c.includes(t)))},Ce=(e,c)=>{const t=e._withMods||(e._withMods={}),a=c.join(".");return t[a]||(t[a]=(t,...a)=>{for(let e=0;e<c.length;e++){const a=He[c[e]];if(a&&a(t,c))return}return e(t,...a)})},Me=(0,n.l7)({patchProp:te},s);let be;function ye(){return be||(be=(0,a.Us)(Me))}const Le=(...e)=>{const c=ye().createApp(...e);const{mount:t}=c;return c.mount=e=>{const a=xe(e);if(!a)return;const i=c._component;(0,n.mf)(i)||i.render||i.template||(i.template=a.innerHTML),a.innerHTML="";const l=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),l},c};function xe(e){if((0,n.HD)(e)){const c=document.querySelector(e);return c}return e}},7139:function(e,c,t){t.d(c,{C_:function(){return K},DM:function(){return v},E9:function(){return U},F7:function(){return o},Gg:function(){return k},HD:function(){return H},He:function(){return W},Kj:function(){return g},Kn:function(){return M},NO:function(){return r},Nj:function(){return R},Od:function(){return u},PO:function(){return w},Pq:function(){return Q},RI:function(){return m},S0:function(){return S},W7:function(){return x},WV:function(){return te},Z6:function(){return i},_A:function(){return _},_N:function(){return h},aU:function(){return I},dG:function(){return l},fY:function(){return a},h5:function(){return O},hR:function(){return T},hq:function(){return ae},ir:function(){return B},j5:function(){return q},kC:function(){return P},kJ:function(){return p},kT:function(){return n},l7:function(){return f},mf:function(){return V},rs:function(){return E},tI:function(){return b},tR:function(){return s},yA:function(){return ee},yk:function(){return C},yl:function(){return $},zw:function(){return ne}});t(560);function a(e,c){const t=Object.create(null),a=e.split(",");for(let n=0;n<a.length;n++)t[a[n]]=!0;return c?e=>!!t[e.toLowerCase()]:e=>!!t[e]}const n={},i=[],l=()=>{},r=()=>!1,o=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=e=>e.startsWith("onUpdate:"),f=Object.assign,u=(e,c)=>{const t=e.indexOf(c);t>-1&&e.splice(t,1)},d=Object.prototype.hasOwnProperty,m=(e,c)=>d.call(e,c),p=Array.isArray,h=e=>"[object Map]"===L(e),v=e=>"[object Set]"===L(e),z=e=>"[object Date]"===L(e),g=e=>"[object RegExp]"===L(e),V=e=>"function"===typeof e,H=e=>"string"===typeof e,C=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,b=e=>(M(e)||V(e))&&V(e.then)&&V(e.catch),y=Object.prototype.toString,L=e=>y.call(e),x=e=>L(e).slice(8,-1),w=e=>"[object Object]"===L(e),S=e=>H(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,k=a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const c=Object.create(null);return t=>{const a=c[t];return a||(c[t]=e(t))}},A=/-(\w)/g,_=N((e=>e.replace(A,((e,c)=>c?c.toUpperCase():"")))),F=/\B([A-Z])/g,E=N((e=>e.replace(F,"-$1").toLowerCase())),P=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),T=N((e=>{const c=e?`on${P(e)}`:"";return c})),I=(e,c)=>!Object.is(e,c),B=(e,c)=>{for(let t=0;t<e.length;t++)e[t](c)},R=(e,c,t)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:t})},O=e=>{const c=parseFloat(e);return isNaN(c)?e:c},W=e=>{const c=H(e)?Number(e):NaN;return isNaN(c)?e:c};let D;const U=()=>D||(D="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{});const j="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",$=a(j);function q(e){if(p(e)){const c={};for(let t=0;t<e.length;t++){const a=e[t],n=H(a)?X(a):q(a);if(n)for(const e in n)c[e]=n[e]}return c}if(H(e)||M(e))return e}const G=/;(?![^(]*\))/g,Y=/:([^]+)/,Z=/\/\*[^]*?\*\//g;function X(e){const c={};return e.replace(Z,"").split(G).forEach((e=>{if(e){const t=e.split(Y);t.length>1&&(c[t[0].trim()]=t[1].trim())}})),c}function K(e){let c="";if(H(e))c=e;else if(p(e))for(let t=0;t<e.length;t++){const a=K(e[t]);a&&(c+=a+" ")}else if(M(e))for(const t in e)e[t]&&(c+=t+" ");return c.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=a(J);function ee(e){return!!e||""===e}function ce(e,c){if(e.length!==c.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=te(e[a],c[a]);return t}function te(e,c){if(e===c)return!0;let t=z(e),a=z(c);if(t||a)return!(!t||!a)&&e.getTime()===c.getTime();if(t=C(e),a=C(c),t||a)return e===c;if(t=p(e),a=p(c),t||a)return!(!t||!a)&&ce(e,c);if(t=M(e),a=M(c),t||a){if(!t||!a)return!1;const n=Object.keys(e).length,i=Object.keys(c).length;if(n!==i)return!1;for(const t in e){const a=e.hasOwnProperty(t),n=c.hasOwnProperty(t);if(a&&!n||!a&&n||!te(e[t],c[t]))return!1}}return String(e)===String(c)}function ae(e,c){return e.findIndex((e=>te(e,c)))}const ne=e=>H(e)?e:null==e?"":p(e)||M(e)&&(e.toString===y||!V(e.toString))?JSON.stringify(e,ie,2):String(e),ie=(e,c)=>c&&c.__v_isRef?ie(e,c.value):h(c)?{[`Map(${c.size})`]:[...c.entries()].reduce(((e,[c,t],a)=>(e[le(c,a)+" =>"]=t,e)),{})}:v(c)?{[`Set(${c.size})`]:[...c.values()].map((e=>le(e)))}:C(c)?le(c):!M(c)||p(c)||w(c)?c:String(c),le=(e,c="")=>{var t;return C(e)?`Symbol(${null!=(t=e.description)?t:c})`:e}},89:function(e,c){c.Z=(e,c)=>{const t=e.__vccOpts||e;for(const[a,n]of c)t[a]=n;return t}},65:function(e,c,t){t.d(c,{MT:function(){return ee},nv:function(){return ne},Se:function(){return ae}});t(560);var a=t(3396),n=t(4870);function i(){return l().__VUE_DEVTOOLS_GLOBAL_HOOK__}function l(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{}}const r="function"===typeof Proxy,o="devtools-plugin:setup",s="plugin:settings:set";let f,u;function d(){var e;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,u=window.performance):"undefined"!==typeof t.g&&(null===(e=t.g.perf_hooks)||void 0===e?void 0:e.performance)?(f=!0,u=t.g.perf_hooks.performance):f=!1),f}function m(){return d()?u.now():Date.now()}class p{constructor(e,c){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=c;const t={};if(e.settings)for(const l in e.settings){const c=e.settings[l];t[l]=c.defaultValue}const a=`__vue-devtools-plugin-settings__${e.id}`;let n=Object.assign({},t);try{const e=localStorage.getItem(a),c=JSON.parse(e);Object.assign(n,c)}catch(i){}this.fallbacks={getSettings(){return n},setSettings(e){try{localStorage.setItem(a,JSON.stringify(e))}catch(i){}n=e},now(){return m()}},c&&c.on(s,((e,c)=>{e===this.plugin.id&&this.fallbacks.setSettings(c)})),this.proxiedOn=new Proxy({},{get:(e,c)=>this.target?this.target.on[c]:(...e)=>{this.onQueue.push({method:c,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,c)=>this.target?this.target[c]:"on"===c?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...e)=>(this.targetQueue.push({method:c,args:e,resolve:()=>{}}),this.fallbacks[c](...e)):(...e)=>new Promise((t=>{this.targetQueue.push({method:c,args:e,resolve:t})}))})}async setRealTarget(e){this.target=e;for(const c of this.onQueue)this.target.on[c.method](...c.args);for(const c of this.targetQueue)c.resolve(await this.target[c.method](...c.args))}}function h(e,c){const t=e,a=l(),n=i(),s=r&&t.enableEarlyProxy;if(!n||!a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&s){const e=s?new p(t,n):null,i=a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:c,proxy:e}),e&&c(e.proxiedTarget)}else n.emit(o,e,c)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var v="store";function z(e,c){Object.keys(e).forEach((function(t){return c(e[t],t)}))}function g(e){return null!==e&&"object"===typeof e}function V(e){return e&&"function"===typeof e.then}function H(e,c){return function(){return e(c)}}function C(e,c,t){return c.indexOf(e)<0&&(t&&t.prepend?c.unshift(e):c.push(e)),function(){var t=c.indexOf(e);t>-1&&c.splice(t,1)}}function M(e,c){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var t=e.state;y(e,t,[],e._modules.root,!0),b(e,t,c)}function b(e,c,t){var i=e._state,l=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,o={},s={},f=(0,n.B)(!0);f.run((function(){z(r,(function(c,t){o[t]=H(c,e),s[t]=(0,a.Fl)((function(){return o[t]()})),Object.defineProperty(e.getters,t,{get:function(){return s[t].value},enumerable:!0})}))})),e._state=(0,n.qj)({data:c}),e._scope=f,e.strict&&N(e),i&&t&&e._withCommit((function(){i.data=null})),l&&l.stop()}function y(e,c,t,a,n){var i=!t.length,l=e._modules.getNamespace(t);if(a.namespaced&&(e._modulesNamespaceMap[l],e._modulesNamespaceMap[l]=a),!i&&!n){var r=A(c,t.slice(0,-1)),o=t[t.length-1];e._withCommit((function(){r[o]=a.state}))}var s=a.context=L(e,l,t);a.forEachMutation((function(c,t){var a=l+t;w(e,a,c,s)})),a.forEachAction((function(c,t){var a=c.root?t:l+t,n=c.handler||c;S(e,a,n,s)})),a.forEachGetter((function(c,t){var a=l+t;k(e,a,c,s)})),a.forEachChild((function(a,i){y(e,c,t.concat(i),a,n)}))}function L(e,c,t){var a=""===c,n={dispatch:a?e.dispatch:function(t,a,n){var i=_(t,a,n),l=i.payload,r=i.options,o=i.type;return r&&r.root||(o=c+o),e.dispatch(o,l)},commit:a?e.commit:function(t,a,n){var i=_(t,a,n),l=i.payload,r=i.options,o=i.type;r&&r.root||(o=c+o),e.commit(o,l,r)}};return Object.defineProperties(n,{getters:{get:a?function(){return e.getters}:function(){return x(e,c)}},state:{get:function(){return A(e.state,t)}}}),n}function x(e,c){if(!e._makeLocalGettersCache[c]){var t={},a=c.length;Object.keys(e.getters).forEach((function(n){if(n.slice(0,a)===c){var i=n.slice(a);Object.defineProperty(t,i,{get:function(){return e.getters[n]},enumerable:!0})}})),e._makeLocalGettersCache[c]=t}return e._makeLocalGettersCache[c]}function w(e,c,t,a){var n=e._mutations[c]||(e._mutations[c]=[]);n.push((function(c){t.call(e,a.state,c)}))}function S(e,c,t,a){var n=e._actions[c]||(e._actions[c]=[]);n.push((function(c){var n=t.call(e,{dispatch:a.dispatch,commit:a.commit,getters:a.getters,state:a.state,rootGetters:e.getters,rootState:e.state},c);return V(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch((function(c){throw e._devtoolHook.emit("vuex:error",c),c})):n}))}function k(e,c,t,a){e._wrappedGetters[c]||(e._wrappedGetters[c]=function(e){return t(a.state,a.getters,e.state,e.getters)})}function N(e){(0,a.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function A(e,c){return c.reduce((function(e,c){return e[c]}),e)}function _(e,c,t){return g(e)&&e.type&&(t=c,c=e,e=e.type),{type:e,payload:c,options:t}}var F="vuex bindings",E="vuex:mutations",P="vuex:actions",T="vuex",I=0;function B(e,c){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[F]},(function(t){t.addTimelineLayer({id:E,label:"Vuex Mutations",color:R}),t.addTimelineLayer({id:P,label:"Vuex Actions",color:R}),t.addInspector({id:T,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree((function(t){if(t.app===e&&t.inspectorId===T)if(t.filter){var a=[];$(a,c._modules.root,t.filter,""),t.rootNodes=a}else t.rootNodes=[j(c._modules.root,"")]})),t.on.getInspectorState((function(t){if(t.app===e&&t.inspectorId===T){var a=t.nodeId;x(c,a),t.state=q(Y(c._modules,a),"root"===a?c.getters:c._makeLocalGettersCache,a)}})),t.on.editInspectorState((function(t){if(t.app===e&&t.inspectorId===T){var a=t.nodeId,n=t.path;"root"!==a&&(n=a.split("/").filter(Boolean).concat(n)),c._withCommit((function(){t.set(c._state.data,n,t.state.value)}))}})),c.subscribe((function(e,c){var a={};e.payload&&(a.payload=e.payload),a.state=c,t.notifyComponentUpdate(),t.sendInspectorTree(T),t.sendInspectorState(T),t.addTimelineEvent({layerId:E,event:{time:Date.now(),title:e.type,data:a}})})),c.subscribeAction({before:function(e,c){var a={};e.payload&&(a.payload=e.payload),e._id=I++,e._time=Date.now(),a.state=c,t.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:a}})},after:function(e,c){var a={},n=Date.now()-e._time;a.duration={_custom:{type:"duration",display:n+"ms",tooltip:"Action duration",value:n}},e.payload&&(a.payload=e.payload),a.state=c,t.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:a}})}})}))}var R=8702998,O=6710886,W=16777215,D={label:"namespaced",textColor:W,backgroundColor:O};function U(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function j(e,c){return{id:c||"root",label:U(c),tags:e.namespaced?[D]:[],children:Object.keys(e._children).map((function(t){return j(e._children[t],c+t+"/")}))}}function $(e,c,t,a){a.includes(t)&&e.push({id:a||"root",label:a.endsWith("/")?a.slice(0,a.length-1):a||"Root",tags:c.namespaced?[D]:[]}),Object.keys(c._children).forEach((function(n){$(e,c._children[n],t,a+n+"/")}))}function q(e,c,t){c="root"===t?c:c[t];var a=Object.keys(c),n={state:Object.keys(e.state).map((function(c){return{key:c,editable:!0,value:e.state[c]}}))};if(a.length){var i=G(c);n.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?U(e):e,editable:!1,value:Z((function(){return i[e]}))}}))}return n}function G(e){var c={};return Object.keys(e).forEach((function(t){var a=t.split("/");if(a.length>1){var n=c,i=a.pop();a.forEach((function(e){n[e]||(n[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),n=n[e]._custom.value})),n[i]=Z((function(){return e[t]}))}else c[t]=Z((function(){return e[t]}))})),c}function Y(e,c){var t=c.split("/").filter((function(e){return e}));return t.reduce((function(e,a,n){var i=e[a];if(!i)throw new Error('Missing module "'+a+'" for path "'+c+'".');return n===t.length-1?i:i._children}),"root"===c?e:e.root._children)}function Z(e){try{return e()}catch(c){return c}}var X=function(e,c){this.runtime=c,this._children=Object.create(null),this._rawModule=e;var t=e.state;this.state=("function"===typeof t?t():t)||{}},K={namespaced:{configurable:!0}};K.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(e,c){this._children[e]=c},X.prototype.removeChild=function(e){delete this._children[e]},X.prototype.getChild=function(e){return this._children[e]},X.prototype.hasChild=function(e){return e in this._children},X.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},X.prototype.forEachChild=function(e){z(this._children,e)},X.prototype.forEachGetter=function(e){this._rawModule.getters&&z(this._rawModule.getters,e)},X.prototype.forEachAction=function(e){this._rawModule.actions&&z(this._rawModule.actions,e)},X.prototype.forEachMutation=function(e){this._rawModule.mutations&&z(this._rawModule.mutations,e)},Object.defineProperties(X.prototype,K);var J=function(e){this.register([],e,!1)};function Q(e,c,t){if(c.update(t),t.modules)for(var a in t.modules){if(!c.getChild(a))return void 0;Q(e.concat(a),c.getChild(a),t.modules[a])}}J.prototype.get=function(e){return e.reduce((function(e,c){return e.getChild(c)}),this.root)},J.prototype.getNamespace=function(e){var c=this.root;return e.reduce((function(e,t){return c=c.getChild(t),e+(c.namespaced?t+"/":"")}),"")},J.prototype.update=function(e){Q([],this.root,e)},J.prototype.register=function(e,c,t){var a=this;void 0===t&&(t=!0);var n=new X(c,t);if(0===e.length)this.root=n;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],n)}c.modules&&z(c.modules,(function(c,n){a.register(e.concat(n),c,t)}))},J.prototype.unregister=function(e){var c=this.get(e.slice(0,-1)),t=e[e.length-1],a=c.getChild(t);a&&a.runtime&&c.removeChild(t)},J.prototype.isRegistered=function(e){var c=this.get(e.slice(0,-1)),t=e[e.length-1];return!!c&&c.hasChild(t)};function ee(e){return new ce(e)}var ce=function(e){var c=this;void 0===e&&(e={});var t=e.plugins;void 0===t&&(t=[]);var a=e.strict;void 0===a&&(a=!1);var n=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=n;var i=this,l=this,r=l.dispatch,o=l.commit;this.dispatch=function(e,c){return r.call(i,e,c)},this.commit=function(e,c,t){return o.call(i,e,c,t)},this.strict=a;var s=this._modules.root.state;y(this,s,[],this._modules.root),b(this,s),t.forEach((function(e){return e(c)}))},te={state:{configurable:!0}};ce.prototype.install=function(e,c){e.provide(c||v,this),e.config.globalProperties.$store=this;var t=void 0!==this._devtools&&this._devtools;t&&B(e,this)},te.state.get=function(){return this._state.data},te.state.set=function(e){0},ce.prototype.commit=function(e,c,t){var a=this,n=_(e,c,t),i=n.type,l=n.payload,r=(n.options,{type:i,payload:l}),o=this._mutations[i];o&&(this._withCommit((function(){o.forEach((function(e){e(l)}))})),this._subscribers.slice().forEach((function(e){return e(r,a.state)})))},ce.prototype.dispatch=function(e,c){var t=this,a=_(e,c),n=a.type,i=a.payload,l={type:n,payload:i},r=this._actions[n];if(r){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(l,t.state)}))}catch(s){0}var o=r.length>1?Promise.all(r.map((function(e){return e(i)}))):r[0](i);return new Promise((function(e,c){o.then((function(c){try{t._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(l,t.state)}))}catch(s){0}e(c)}),(function(e){try{t._actionSubscribers.filter((function(e){return e.error})).forEach((function(c){return c.error(l,t.state,e)}))}catch(s){0}c(e)}))}))}},ce.prototype.subscribe=function(e,c){return C(e,this._subscribers,c)},ce.prototype.subscribeAction=function(e,c){var t="function"===typeof e?{before:e}:e;return C(t,this._actionSubscribers,c)},ce.prototype.watch=function(e,c,t){var n=this;return(0,a.YP)((function(){return e(n.state,n.getters)}),c,Object.assign({},t))},ce.prototype.replaceState=function(e){var c=this;this._withCommit((function(){c._state.data=e}))},ce.prototype.registerModule=function(e,c,t){void 0===t&&(t={}),"string"===typeof e&&(e=[e]),this._modules.register(e,c),y(this,this.state,e,this._modules.get(e),t.preserveState),b(this,this.state)},ce.prototype.unregisterModule=function(e){var c=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var t=A(c.state,e.slice(0,-1));delete t[e[e.length-1]]})),M(this)},ce.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ce.prototype.hotUpdate=function(e){this._modules.update(e),M(this,!0)},ce.prototype._withCommit=function(e){var c=this._committing;this._committing=!0,e(),this._committing=c},Object.defineProperties(ce.prototype,te);re((function(e,c){var t={};return ie(c).forEach((function(c){var a=c.key,n=c.val;t[a]=function(){var c=this.$store.state,t=this.$store.getters;if(e){var a=oe(this.$store,"mapState",e);if(!a)return;c=a.context.state,t=a.context.getters}return"function"===typeof n?n.call(this,c,t):c[n]},t[a].vuex=!0})),t})),re((function(e,c){var t={};return ie(c).forEach((function(c){var a=c.key,n=c.val;t[a]=function(){var c=[],t=arguments.length;while(t--)c[t]=arguments[t];var a=this.$store.commit;if(e){var i=oe(this.$store,"mapMutations",e);if(!i)return;a=i.context.commit}return"function"===typeof n?n.apply(this,[a].concat(c)):a.apply(this.$store,[n].concat(c))}})),t}));var ae=re((function(e,c){var t={};return ie(c).forEach((function(c){var a=c.key,n=c.val;n=e+n,t[a]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[n]},t[a].vuex=!0})),t})),ne=re((function(e,c){var t={};return ie(c).forEach((function(c){var a=c.key,n=c.val;t[a]=function(){var c=[],t=arguments.length;while(t--)c[t]=arguments[t];var a=this.$store.dispatch;if(e){var i=oe(this.$store,"mapActions",e);if(!i)return;a=i.context.dispatch}return"function"===typeof n?n.apply(this,[a].concat(c)):a.apply(this.$store,[n].concat(c))}})),t}));function ie(e){return le(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(c){return{key:c,val:e[c]}})):[]}function le(e){return Array.isArray(e)||g(e)}function re(e){return function(c,t){return"string"!==typeof c?(t=c,c=""):"/"!==c.charAt(c.length-1)&&(c+="/"),e(c,t)}}function oe(e,c,t){var a=e._modulesNamespaceMap[t];return a}},509:function(e,c,t){var a=t(9985),n=t(3691),i=TypeError;e.exports=function(e){if(a(e))return e;throw new i(n(e)+" is not a function")}},3550:function(e,c,t){var a=t(9985),n=String,i=TypeError;e.exports=function(e){if("object"==typeof e||a(e))return e;throw new i("Can't set "+n(e)+" as a prototype")}},767:function(e,c,t){var a=t(3622),n=TypeError;e.exports=function(e,c){if(a(c,e))return e;throw new n("Incorrect invocation")}},5027:function(e,c,t){var a=t(8999),n=String,i=TypeError;e.exports=function(e){if(a(e))return e;throw new i(n(e)+" is not an object")}},7075:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(e,c,t){var a,n,i,l=t(7075),r=t(7697),o=t(9037),s=t(9985),f=t(8999),u=t(6812),d=t(926),m=t(3691),p=t(5773),h=t(1880),v=t(2148),z=t(3622),g=t(1868),V=t(9385),H=t(4201),C=t(4630),M=t(618),b=M.enforce,y=M.get,L=o.Int8Array,x=L&&L.prototype,w=o.Uint8ClampedArray,S=w&&w.prototype,k=L&&g(L),N=x&&g(x),A=Object.prototype,_=o.TypeError,F=H("toStringTag"),E=C("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",T=l&&!!V&&"Opera"!==d(o.opera),I=!1,B={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8},O=function(e){if(!f(e))return!1;var c=d(e);return"DataView"===c||u(B,c)||u(R,c)},W=function(e){var c=g(e);if(f(c)){var t=y(c);return t&&u(t,P)?t[P]:W(c)}},D=function(e){if(!f(e))return!1;var c=d(e);return u(B,c)||u(R,c)},U=function(e){if(D(e))return e;throw new _("Target is not a typed array")},j=function(e){if(s(e)&&(!V||z(k,e)))return e;throw new _(m(e)+" is not a typed array constructor")},$=function(e,c,t,a){if(r){if(t)for(var n in B){var i=o[n];if(i&&u(i.prototype,e))try{delete i.prototype[e]}catch(l){try{i.prototype[e]=c}catch(s){}}}N[e]&&!t||h(N,e,t?c:T&&x[e]||c,a)}},q=function(e,c,t){var a,n;if(r){if(V){if(t)for(a in B)if(n=o[a],n&&u(n,e))try{delete n[e]}catch(i){}if(k[e]&&!t)return;try{return h(k,e,t?c:T&&k[e]||c)}catch(i){}}for(a in B)n=o[a],!n||n[e]&&!t||h(n,e,c)}};for(a in B)n=o[a],i=n&&n.prototype,i?b(i)[P]=n:T=!1;for(a in R)n=o[a],i=n&&n.prototype,i&&(b(i)[P]=n);if((!T||!s(k)||k===Function.prototype)&&(k=function(){throw new _("Incorrect invocation")},T))for(a in B)o[a]&&V(o[a],k);if((!T||!N||N===A)&&(N=k.prototype,T))for(a in B)o[a]&&V(o[a].prototype,N);if(T&&g(S)!==N&&V(S,N),r&&!u(N,F))for(a in I=!0,v(N,F,{configurable:!0,get:function(){return f(this)?this[E]:void 0}}),B)o[a]&&p(o[a],E,a);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_TAG:I&&E,aTypedArray:U,aTypedArrayConstructor:j,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:W,isView:O,isTypedArray:D,TypedArray:k,TypedArrayPrototype:N}},9976:function(e,c,t){var a=t(6310);e.exports=function(e,c,t){var n=0,i=arguments.length>2?t:a(c),l=new e(i);while(i>n)l[n]=c[n++];return l}},4328:function(e,c,t){var a=t(5290),n=t(7578),i=t(6310),l=function(e){return function(c,t,l){var r,o=a(c),s=i(o),f=n(l,s);if(e&&t!==t){while(s>f)if(r=o[f++],r!==r)return!0}else for(;s>f;f++)if((e||f in o)&&o[f]===t)return e||f||0;return!e&&-1}};e.exports={includes:l(!0),indexOf:l(!1)}},5649:function(e,c,t){var a=t(7697),n=t(2297),i=TypeError,l=Object.getOwnPropertyDescriptor,r=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=r?function(e,c){if(n(e)&&!l(e,"length").writable)throw new i("Cannot set read only .length");return e.length=c}:function(e,c){return e.length=c}},6166:function(e,c,t){var a=t(6310);e.exports=function(e,c){for(var t=a(e),n=new c(t),i=0;i<t;i++)n[i]=e[t-i-1];return n}},6134:function(e,c,t){var a=t(6310),n=t(8700),i=RangeError;e.exports=function(e,c,t,l){var r=a(e),o=n(t),s=o<0?r+o:o;if(s>=r||s<0)throw new i("Incorrect index");for(var f=new c(r),u=0;u<r;u++)f[u]=u===s?l:e[u];return f}},6648:function(e,c,t){var a=t(8844),n=a({}.toString),i=a("".slice);e.exports=function(e){return i(n(e),8,-1)}},926:function(e,c,t){var a=t(3043),n=t(9985),i=t(6648),l=t(4201),r=l("toStringTag"),o=Object,s="Arguments"===i(function(){return arguments}()),f=function(e,c){try{return e[c]}catch(t){}};e.exports=a?i:function(e){var c,t,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=f(c=o(e),r))?t:s?i(c):"Object"===(a=i(c))&&n(c.callee)?"Arguments":a}},8758:function(e,c,t){var a=t(6812),n=t(9152),i=t(2474),l=t(2560);e.exports=function(e,c,t){for(var r=n(c),o=l.f,s=i.f,f=0;f<r.length;f++){var u=r[f];a(e,u)||t&&a(t,u)||o(e,u,s(c,u))}}},1748:function(e,c,t){var a=t(3689);e.exports=!a((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5773:function(e,c,t){var a=t(7697),n=t(2560),i=t(5684);e.exports=a?function(e,c,t){return n.f(e,c,i(1,t))}:function(e,c,t){return e[c]=t,e}},5684:function(e){e.exports=function(e,c){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:c}}},2148:function(e,c,t){var a=t(8702),n=t(2560);e.exports=function(e,c,t){return t.get&&a(t.get,c,{getter:!0}),t.set&&a(t.set,c,{setter:!0}),n.f(e,c,t)}},1880:function(e,c,t){var a=t(9985),n=t(2560),i=t(8702),l=t(5014);e.exports=function(e,c,t,r){r||(r={});var o=r.enumerable,s=void 0!==r.name?r.name:c;if(a(t)&&i(t,s,r),r.global)o?e[c]=t:l(c,t);else{try{r.unsafe?e[c]&&(o=!0):delete e[c]}catch(f){}o?e[c]=t:n.f(e,c,{value:t,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e}},5014:function(e,c,t){var a=t(9037),n=Object.defineProperty;e.exports=function(e,c){try{n(a,e,{value:c,configurable:!0,writable:!0})}catch(t){a[e]=c}return c}},7697:function(e,c,t){var a=t(3689);e.exports=!a((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(e){var c="object"==typeof document&&document.all,t="undefined"==typeof c&&void 0!==c;e.exports={all:c,IS_HTMLDDA:t}},6420:function(e,c,t){var a=t(9037),n=t(8999),i=a.document,l=n(i)&&n(i.createElement);e.exports=function(e){return l?i.createElement(e):{}}},5565:function(e){var c=TypeError,t=9007199254740991;e.exports=function(e){if(e>t)throw c("Maximum allowed index exceeded");return e}},7136:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,c,t){var a,n,i=t(9037),l=t(71),r=i.process,o=i.Deno,s=r&&r.versions||o&&o.version,f=s&&s.v8;f&&(a=f.split("."),n=a[0]>0&&a[0]<4?1:+(a[0]+a[1])),!n&&l&&(a=l.match(/Edge\/(\d+)/),(!a||a[1]>=74)&&(a=l.match(/Chrome\/(\d+)/),a&&(n=+a[1]))),e.exports=n},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(e,c,t){var a=t(8844),n=Error,i=a("".replace),l=function(e){return String(new n(e).stack)}("zxcasd"),r=/\n\s*at [^:]*:[^\n]*/,o=r.test(l);e.exports=function(e,c){if(o&&"string"==typeof e&&!n.prepareStackTrace)while(c--)e=i(e,r,"");return e}},9989:function(e,c,t){var a=t(9037),n=t(2474).f,i=t(5773),l=t(1880),r=t(5014),o=t(8758),s=t(5266);e.exports=function(e,c){var t,f,u,d,m,p,h=e.target,v=e.global,z=e.stat;if(f=v?a:z?a[h]||r(h,{}):(a[h]||{}).prototype,f)for(u in c){if(m=c[u],e.dontCallGetSet?(p=n(f,u),d=p&&p.value):d=f[u],t=s(v?u:h+(z?".":"#")+u,e.forced),!t&&void 0!==d){if(typeof m==typeof d)continue;o(m,d)}(e.sham||d&&d.sham)&&i(m,"sham",!0),l(f,u,m,e)}}},3689:function(e){e.exports=function(e){try{return!!e()}catch(c){return!0}}},7215:function(e,c,t){var a=t(3689);e.exports=!a((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,c,t){var a=t(7215),n=Function.prototype.call;e.exports=a?n.bind(n):function(){return n.apply(n,arguments)}},1236:function(e,c,t){var a=t(7697),n=t(6812),i=Function.prototype,l=a&&Object.getOwnPropertyDescriptor,r=n(i,"name"),o=r&&"something"===function(){}.name,s=r&&(!a||a&&l(i,"name").configurable);e.exports={EXISTS:r,PROPER:o,CONFIGURABLE:s}},2743:function(e,c,t){var a=t(8844),n=t(509);e.exports=function(e,c,t){try{return a(n(Object.getOwnPropertyDescriptor(e,c)[t]))}catch(i){}}},8844:function(e,c,t){var a=t(7215),n=Function.prototype,i=n.call,l=a&&n.bind.bind(i,i);e.exports=a?l:function(e){return function(){return i.apply(e,arguments)}}},6058:function(e,c,t){var a=t(9037),n=t(9985),i=function(e){return n(e)?e:void 0};e.exports=function(e,c){return arguments.length<2?i(a[e]):a[e]&&a[e][c]}},4849:function(e,c,t){var a=t(509),n=t(981);e.exports=function(e,c){var t=e[c];return n(t)?void 0:a(t)}},9037:function(e,c,t){var a=function(e){return e&&e.Math===Math&&e};e.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof t.g&&t.g)||a("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(e,c,t){var a=t(8844),n=t(690),i=a({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,c){return i(n(e),c)}},7248:function(e){e.exports={}},8506:function(e,c,t){var a=t(7697),n=t(3689),i=t(6420);e.exports=!a&&!n((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,c,t){var a=t(8844),n=t(3689),i=t(6648),l=Object,r=a("".split);e.exports=n((function(){return!l("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?r(e,""):l(e)}:l},3457:function(e,c,t){var a=t(9985),n=t(8999),i=t(9385);e.exports=function(e,c,t){var l,r;return i&&a(l=c.constructor)&&l!==t&&n(r=l.prototype)&&r!==t.prototype&&i(e,r),e}},6738:function(e,c,t){var a=t(8844),n=t(9985),i=t(4091),l=a(Function.toString);n(i.inspectSource)||(i.inspectSource=function(e){return l(e)}),e.exports=i.inspectSource},618:function(e,c,t){var a,n,i,l=t(9834),r=t(9037),o=t(8999),s=t(5773),f=t(6812),u=t(4091),d=t(2713),m=t(7248),p="Object already initialized",h=r.TypeError,v=r.WeakMap,z=function(e){return i(e)?n(e):a(e,{})},g=function(e){return function(c){var t;if(!o(c)||(t=n(c)).type!==e)throw new h("Incompatible receiver, "+e+" required");return t}};if(l||u.state){var V=u.state||(u.state=new v);V.get=V.get,V.has=V.has,V.set=V.set,a=function(e,c){if(V.has(e))throw new h(p);return c.facade=e,V.set(e,c),c},n=function(e){return V.get(e)||{}},i=function(e){return V.has(e)}}else{var H=d("state");m[H]=!0,a=function(e,c){if(f(e,H))throw new h(p);return c.facade=e,s(e,H,c),c},n=function(e){return f(e,H)?e[H]:{}},i=function(e){return f(e,H)}}e.exports={set:a,get:n,has:i,enforce:z,getterFor:g}},2297:function(e,c,t){var a=t(6648);e.exports=Array.isArray||function(e){return"Array"===a(e)}},9401:function(e,c,t){var a=t(926);e.exports=function(e){var c=a(e);return"BigInt64Array"===c||"BigUint64Array"===c}},9985:function(e,c,t){var a=t(2659),n=a.all;e.exports=a.IS_HTMLDDA?function(e){return"function"==typeof e||e===n}:function(e){return"function"==typeof e}},5266:function(e,c,t){var a=t(3689),n=t(9985),i=/#|\.prototype\./,l=function(e,c){var t=o[r(e)];return t===f||t!==s&&(n(c)?a(c):!!c)},r=l.normalize=function(e){return String(e).replace(i,".").toLowerCase()},o=l.data={},s=l.NATIVE="N",f=l.POLYFILL="P";e.exports=l},981:function(e){e.exports=function(e){return null===e||void 0===e}},8999:function(e,c,t){var a=t(9985),n=t(2659),i=n.all;e.exports=n.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:a(e)||e===i}:function(e){return"object"==typeof e?null!==e:a(e)}},3931:function(e){e.exports=!1},734:function(e,c,t){var a=t(6058),n=t(9985),i=t(3622),l=t(9525),r=Object;e.exports=l?function(e){return"symbol"==typeof e}:function(e){var c=a("Symbol");return n(c)&&i(c.prototype,r(e))}},6310:function(e,c,t){var a=t(3126);e.exports=function(e){return a(e.length)}},8702:function(e,c,t){var a=t(8844),n=t(3689),i=t(9985),l=t(6812),r=t(7697),o=t(1236).CONFIGURABLE,s=t(6738),f=t(618),u=f.enforce,d=f.get,m=String,p=Object.defineProperty,h=a("".slice),v=a("".replace),z=a([].join),g=r&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),V=String(String).split("String"),H=e.exports=function(e,c,t){"Symbol("===h(m(c),0,7)&&(c="["+v(m(c),/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(c="get "+c),t&&t.setter&&(c="set "+c),(!l(e,"name")||o&&e.name!==c)&&(r?p(e,"name",{value:c,configurable:!0}):e.name=c),g&&t&&l(t,"arity")&&e.length!==t.arity&&p(e,"length",{value:t.arity});try{t&&l(t,"constructor")&&t.constructor?r&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(n){}var a=u(e);return l(a,"source")||(a.source=z(V,"string"==typeof c?c:"")),e};Function.prototype.toString=H((function(){return i(this)&&d(this).source||s(this)}),"toString")},8828:function(e){var c=Math.ceil,t=Math.floor;e.exports=Math.trunc||function(e){var a=+e;return(a>0?t:c)(a)}},3841:function(e,c,t){var a=t(4327);e.exports=function(e,c){return void 0===e?arguments.length<2?"":c:a(e)}},2560:function(e,c,t){var a=t(7697),n=t(8506),i=t(5648),l=t(5027),r=t(8360),o=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u="enumerable",d="configurable",m="writable";c.f=a?i?function(e,c,t){if(l(e),c=r(c),l(t),"function"===typeof e&&"prototype"===c&&"value"in t&&m in t&&!t[m]){var a=f(e,c);a&&a[m]&&(e[c]=t.value,t={configurable:d in t?t[d]:a[d],enumerable:u in t?t[u]:a[u],writable:!1})}return s(e,c,t)}:s:function(e,c,t){if(l(e),c=r(c),l(t),n)try{return s(e,c,t)}catch(a){}if("get"in t||"set"in t)throw new o("Accessors not supported");return"value"in t&&(e[c]=t.value),e}},2474:function(e,c,t){var a=t(7697),n=t(2615),i=t(9556),l=t(5684),r=t(5290),o=t(8360),s=t(6812),f=t(8506),u=Object.getOwnPropertyDescriptor;c.f=a?u:function(e,c){if(e=r(e),c=o(c),f)try{return u(e,c)}catch(t){}if(s(e,c))return l(!n(i.f,e,c),e[c])}},2741:function(e,c,t){var a=t(4948),n=t(2739),i=n.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},7518:function(e,c){c.f=Object.getOwnPropertySymbols},1868:function(e,c,t){var a=t(6812),n=t(9985),i=t(690),l=t(2713),r=t(1748),o=l("IE_PROTO"),s=Object,f=s.prototype;e.exports=r?s.getPrototypeOf:function(e){var c=i(e);if(a(c,o))return c[o];var t=c.constructor;return n(t)&&c instanceof t?t.prototype:c instanceof s?f:null}},3622:function(e,c,t){var a=t(8844);e.exports=a({}.isPrototypeOf)},4948:function(e,c,t){var a=t(8844),n=t(6812),i=t(5290),l=t(4328).indexOf,r=t(7248),o=a([].push);e.exports=function(e,c){var t,a=i(e),s=0,f=[];for(t in a)!n(r,t)&&n(a,t)&&o(f,t);while(c.length>s)n(a,t=c[s++])&&(~l(f,t)||o(f,t));return f}},9556:function(e,c){var t={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,n=a&&!t.call({1:2},1);c.f=n?function(e){var c=a(this,e);return!!c&&c.enumerable}:t},9385:function(e,c,t){var a=t(2743),n=t(5027),i=t(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,c=!1,t={};try{e=a(Object.prototype,"__proto__","set"),e(t,[]),c=t instanceof Array}catch(l){}return function(t,a){return n(t),i(a),c?e(t,a):t.__proto__=a,t}}():void 0)},5899:function(e,c,t){var a=t(2615),n=t(9985),i=t(8999),l=TypeError;e.exports=function(e,c){var t,r;if("string"===c&&n(t=e.toString)&&!i(r=a(t,e)))return r;if(n(t=e.valueOf)&&!i(r=a(t,e)))return r;if("string"!==c&&n(t=e.toString)&&!i(r=a(t,e)))return r;throw new l("Can't convert object to primitive value")}},9152:function(e,c,t){var a=t(6058),n=t(8844),i=t(2741),l=t(7518),r=t(5027),o=n([].concat);e.exports=a("Reflect","ownKeys")||function(e){var c=i.f(r(e)),t=l.f;return t?o(c,t(e)):c}},4684:function(e,c,t){var a=t(981),n=TypeError;e.exports=function(e){if(a(e))throw new n("Can't call method on "+e);return e}},2713:function(e,c,t){var a=t(3430),n=t(4630),i=a("keys");e.exports=function(e){return i[e]||(i[e]=n(e))}},4091:function(e,c,t){var a=t(9037),n=t(5014),i="__core-js_shared__",l=a[i]||n(i,{});e.exports=l},3430:function(e,c,t){var a=t(3931),n=t(4091);(e.exports=function(e,c){return n[e]||(n[e]=void 0!==c?c:{})})("versions",[]).push({version:"3.34.0",mode:a?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,c,t){var a=t(3615),n=t(3689),i=t(9037),l=i.String;e.exports=!!Object.getOwnPropertySymbols&&!n((function(){var e=Symbol("symbol detection");return!l(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&a&&a<41}))},7578:function(e,c,t){var a=t(8700),n=Math.max,i=Math.min;e.exports=function(e,c){var t=a(e);return t<0?n(t+c,0):i(t,c)}},1530:function(e,c,t){var a=t(8732),n=TypeError;e.exports=function(e){var c=a(e,"number");if("number"==typeof c)throw new n("Can't convert number to bigint");return BigInt(c)}},5290:function(e,c,t){var a=t(4413),n=t(4684);e.exports=function(e){return a(n(e))}},8700:function(e,c,t){var a=t(8828);e.exports=function(e){var c=+e;return c!==c||0===c?0:a(c)}},3126:function(e,c,t){var a=t(8700),n=Math.min;e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},690:function(e,c,t){var a=t(4684),n=Object;e.exports=function(e){return n(a(e))}},8732:function(e,c,t){var a=t(2615),n=t(8999),i=t(734),l=t(4849),r=t(5899),o=t(4201),s=TypeError,f=o("toPrimitive");e.exports=function(e,c){if(!n(e)||i(e))return e;var t,o=l(e,f);if(o){if(void 0===c&&(c="default"),t=a(o,e,c),!n(t)||i(t))return t;throw new s("Can't convert object to primitive value")}return void 0===c&&(c="number"),r(e,c)}},8360:function(e,c,t){var a=t(8732),n=t(734);e.exports=function(e){var c=a(e,"string");return n(c)?c:c+""}},3043:function(e,c,t){var a=t(4201),n=a("toStringTag"),i={};i[n]="z",e.exports="[object z]"===String(i)},4327:function(e,c,t){var a=t(926),n=String;e.exports=function(e){if("Symbol"===a(e))throw new TypeError("Cannot convert a Symbol value to a string");return n(e)}},3691:function(e){var c=String;e.exports=function(e){try{return c(e)}catch(t){return"Object"}}},4630:function(e,c,t){var a=t(8844),n=0,i=Math.random(),l=a(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+l(++n+i,36)}},9525:function(e,c,t){var a=t(146);e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,c,t){var a=t(7697),n=t(3689);e.exports=a&&n((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:function(e){var c=TypeError;e.exports=function(e,t){if(e<t)throw new c("Not enough arguments");return e}},9834:function(e,c,t){var a=t(9037),n=t(9985),i=a.WeakMap;e.exports=n(i)&&/native code/.test(String(i))},4201:function(e,c,t){var a=t(9037),n=t(3430),i=t(6812),l=t(4630),r=t(146),o=t(9525),s=a.Symbol,f=n("wks"),u=o?s["for"]||s:s&&s.withoutSetter||l;e.exports=function(e){return i(f,e)||(f[e]=r&&i(s,e)?s[e]:u("Symbol."+e)),f[e]}},560:function(e,c,t){var a=t(9989),n=t(690),i=t(6310),l=t(5649),r=t(5565),o=t(3689),s=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},u=s||!f();a({target:"Array",proto:!0,arity:1,forced:u},{push:function(e){var c=n(this),t=i(c),a=arguments.length;r(t+a);for(var o=0;o<a;o++)c[t]=arguments[o],t++;return l(c,t),t}})},4224:function(e,c,t){var a=t(6166),n=t(4872),i=n.aTypedArray,l=n.exportTypedArrayMethod,r=n.getTypedArrayConstructor;l("toReversed",(function(){return a(i(this),r(this))}))},1121:function(e,c,t){var a=t(4872),n=t(8844),i=t(509),l=t(9976),r=a.aTypedArray,o=a.getTypedArrayConstructor,s=a.exportTypedArrayMethod,f=n(a.TypedArrayPrototype.sort);s("toSorted",(function(e){void 0!==e&&i(e);var c=r(this),t=l(o(c),c);return f(t,e)}))},7133:function(e,c,t){var a=t(6134),n=t(4872),i=t(9401),l=t(8700),r=t(1530),o=n.aTypedArray,s=n.getTypedArrayConstructor,f=n.exportTypedArrayMethod,u=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();f("with",{with:function(e,c){var t=o(this),n=l(e),f=i(t)?r(c):+c;return a(t,s(t),n,f)}}["with"],!u)},3429:function(e,c,t){var a=t(9989),n=t(9037),i=t(6058),l=t(5684),r=t(2560).f,o=t(6812),s=t(767),f=t(3457),u=t(3841),d=t(7136),m=t(6610),p=t(7697),h=t(3931),v="DOMException",z=i("Error"),g=i(v),V=function(){s(this,H);var e=arguments.length,c=u(e<1?void 0:arguments[0]),t=u(e<2?void 0:arguments[1],"Error"),a=new g(c,t),n=new z(c);return n.name=v,r(a,"stack",l(1,m(n.stack,1))),f(a,this,V),a},H=V.prototype=g.prototype,C="stack"in new z(v),M="stack"in new g(1,2),b=g&&p&&Object.getOwnPropertyDescriptor(n,v),y=!!b&&!(b.writable&&b.configurable),L=C&&!y&&!M;a({global:!0,constructor:!0,forced:h||L},{DOMException:L?V:g});var x=i(v),w=x.prototype;if(w.constructor!==x)for(var S in h||r(w,"constructor",l(1,x)),d)if(o(d,S)){var k=d[S],N=k.s;o(x,N)||r(x,N,l(6,k.c))}},8858:function(e,c,t){var a=t(1880),n=t(8844),i=t(4327),l=t(1500),r=URLSearchParams,o=r.prototype,s=n(o.append),f=n(o["delete"]),u=n(o.forEach),d=n([].push),m=new r("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&a(o,"delete",(function(e){var c=arguments.length,t=c<2?void 0:arguments[1];if(c&&void 0===t)return f(this,e);var a=[];u(this,(function(e,c){d(a,{key:c,value:e})})),l(c,1);var n,r=i(e),o=i(t),m=0,p=0,h=!1,v=a.length;while(m<v)n=a[m++],h||n.key===r?(h=!0,f(this,n.key)):p++;while(p<v)n=a[p++],n.key===r&&n.value===o||s(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,c,t){var a=t(1880),n=t(8844),i=t(4327),l=t(1500),r=URLSearchParams,o=r.prototype,s=n(o.getAll),f=n(o.has),u=new r("a=1");!u.has("a",2)&&u.has("a",void 0)||a(o,"has",(function(e){var c=arguments.length,t=c<2?void 0:arguments[1];if(c&&void 0===t)return f(this,e);var a=s(this,e);l(c,1);var n=i(t),r=0;while(r<a.length)if(a[r++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,c,t){var a=t(7697),n=t(8844),i=t(2148),l=URLSearchParams.prototype,r=n(l.forEach);a&&!("size"in l)&&i(l,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})},7077:function(e,c,t){t.d(c,{Jn:function(){return he},qX:function(){return ue},Xd:function(){return fe},Mq:function(){return ze},ZF:function(){return ve},KN:function(){return ge}});t(560);var a=t(7142),n=t(5168),i=t(223);t(3429);const l=(e,c)=>c.some((c=>e instanceof c));let r,o;function s(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,d=new WeakMap,m=new WeakMap,p=new WeakMap,h=new WeakMap;function v(e){const c=new Promise(((c,t)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{c(M(e.result)),a()},i=()=>{t(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",i)}));return c.then((c=>{c instanceof IDBCursor&&u.set(c,e)})).catch((()=>{})),h.set(c,e),c}function z(e){if(d.has(e))return;const c=new Promise(((c,t)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{c(),a()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,c)}let g={get(e,c,t){if(e instanceof IDBTransaction){if("done"===c)return d.get(e);if("objectStoreNames"===c)return e.objectStoreNames||m.get(e);if("store"===c)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return M(e[c])},set(e,c,t){return e[c]=t,!0},has(e,c){return e instanceof IDBTransaction&&("done"===c||"store"===c)||c in e}};function V(e){g=e(g)}function H(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?f().includes(e)?function(...c){return e.apply(b(this),c),M(u.get(this))}:function(...c){return M(e.apply(b(this),c))}:function(c,...t){const a=e.call(b(this),c,...t);return m.set(a,c.sort?c.sort():[c]),M(a)}}function C(e){return"function"===typeof e?H(e):(e instanceof IDBTransaction&&z(e),l(e,s())?new Proxy(e,g):e)}function M(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const c=C(e);return c!==e&&(p.set(e,c),h.set(c,e)),c}const b=e=>h.get(e);function y(e,c,{blocked:t,upgrade:a,blocking:n,terminated:i}={}){const l=indexedDB.open(e,c),r=M(l);return a&&l.addEventListener("upgradeneeded",(e=>{a(M(l.result),e.oldVersion,e.newVersion,M(l.transaction),e)})),t&&l.addEventListener("blocked",(e=>t(e.oldVersion,e.newVersion,e))),r.then((e=>{i&&e.addEventListener("close",(()=>i())),n&&e.addEventListener("versionchange",(e=>n(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),r}const L=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],w=new Map;function S(e,c){if(!(e instanceof IDBDatabase)||c in e||"string"!==typeof c)return;if(w.get(c))return w.get(c);const t=c.replace(/FromIndex$/,""),a=c!==t,n=x.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!L.includes(t))return;const i=async function(e,...c){const i=this.transaction(e,n?"readwrite":"readonly");let l=i.store;return a&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),n&&i.done]))[0]};return w.set(c,i),i}V((e=>({...e,get:(c,t,a)=>S(c,t)||e.get(c,t,a),has:(c,t)=>!!S(c,t)||e.has(c,t)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const c=e.getImmediate();return`${c.library}/${c.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const c=e.getComponent();return"VERSION"===(null===c||void 0===c?void 0:c.type)}const A="@firebase/app",_="0.9.25",F=new n.Yd("@firebase/app"),E="@firebase/app-compat",P="@firebase/analytics-compat",T="@firebase/analytics",I="@firebase/app-check-compat",B="@firebase/app-check",R="@firebase/auth",O="@firebase/auth-compat",W="@firebase/database",D="@firebase/database-compat",U="@firebase/functions",j="@firebase/functions-compat",$="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",Z="@firebase/performance",X="@firebase/performance-compat",K="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",ce="@firebase/firestore",te="@firebase/firestore-compat",ae="firebase",ne="10.7.1",ie="[DEFAULT]",le={[A]:"fire-core",[E]:"fire-core-compat",[T]:"fire-analytics",[P]:"fire-analytics-compat",[B]:"fire-app-check",[I]:"fire-app-check-compat",[R]:"fire-auth",[O]:"fire-auth-compat",[W]:"fire-rtdb",[D]:"fire-rtdb-compat",[U]:"fire-fn",[j]:"fire-fn-compat",[$]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[Z]:"fire-perf",[X]:"fire-perf-compat",[K]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[ce]:"fire-fst",[te]:"fire-fst-compat","fire-js":"fire-js",[ae]:"fire-js-all"},re=new Map,oe=new Map;function se(e,c){try{e.container.addComponent(c)}catch(t){F.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,t)}}function fe(e){const c=e.name;if(oe.has(c))return F.debug(`There were multiple attempts to register component ${c}.`),!1;oe.set(c,e);for(const t of re.values())se(t,e);return!0}function ue(e,c){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new i.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,c,t){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=ne;function ve(e,c={}){let t=e;if("object"!==typeof c){const e=c;c={name:e}}const n=Object.assign({name:ie,automaticDataCollectionEnabled:!1},c),l=n.name;if("string"!==typeof l||!l)throw me.create("bad-app-name",{appName:String(l)});if(t||(t=(0,i.aH)()),!t)throw me.create("no-options");const r=re.get(l);if(r){if((0,i.vZ)(t,r.options)&&(0,i.vZ)(n,r.config))return r;throw me.create("duplicate-app",{appName:l})}const o=new a.H0(l);for(const a of oe.values())o.addComponent(a);const s=new pe(t,n,o);return re.set(l,s),s}function ze(e=ie){const c=re.get(e);if(!c&&e===ie&&(0,i.aH)())return ve();if(!c)throw me.create("no-app",{appName:e});return c}function ge(e,c,t){var n;let i=null!==(n=le[e])&&void 0!==n?n:e;t&&(i+=`-${t}`);const l=i.match(/\s|\//),r=c.match(/\s|\//);if(l||r){const e=[`Unable to register library "${i}" with version "${c}":`];return l&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),l&&r&&e.push("and"),r&&e.push(`version name "${c}" contains illegal characters (whitespace or "/")`),void F.warn(e.join(" "))}fe(new a.wA(`${i}-version`,(()=>({library:i,version:c})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve="firebase-heartbeat-database",He=1,Ce="firebase-heartbeat-store";let Me=null;function be(){return Me||(Me=y(Ve,He,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Me}async function ye(e){try{const c=await be(),t=await c.transaction(Ce).objectStore(Ce).get(xe(e));return t}catch(c){if(c instanceof i.ZR)F.warn(c.message);else{const e=me.create("idb-get",{originalErrorMessage:null===c||void 0===c?void 0:c.message});F.warn(e.message)}}}async function Le(e,c){try{const t=await be(),a=t.transaction(Ce,"readwrite"),n=a.objectStore(Ce);await n.put(c,xe(e)),await a.done}catch(t){if(t instanceof i.ZR)F.warn(t.message);else{const e=me.create("idb-set",{originalErrorMessage:null===t||void 0===t?void 0:t.message});F.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=1024,Se=2592e6;class ke{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new _e(c),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,c;const t=this.container.getProvider("platform-logger").getImmediate(),a=t.getPlatformInfoString(),n=Ne();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(c=this._heartbeatsCache)||void 0===c?void 0:c.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const c=new Date(e.date).valueOf(),t=Date.now();return t-c<=Se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const c=Ne(),{heartbeatsToSend:t,unsentEntries:a}=Ae(this._heartbeatsCache.heartbeats),n=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=c,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,c=we){const t=[];let a=e.slice();for(const n of e){const e=t.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),Fe(t)>c){e.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Fe(t)>c){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class _e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ye(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Fe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){fe(new a.wA("platform-logger",(e=>new k(e)),"PRIVATE")),fe(new a.wA("heartbeat",(e=>new ke(e)),"PRIVATE")),ge(A,_,e),ge(A,_,"esm2017"),ge("fire-js","")}Ee("")},7142:function(e,c,t){t.d(c,{H0:function(){return s},wA:function(){return n}});var a=t(223);class n{constructor(e,c,t){this.name=e,this.instanceFactory=c,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const e=new a.BH;if(this.instancesDeferred.set(c,e),this.isInitialized(c)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:c});t&&e.resolve(t)}catch(t){}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const t=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),a=null!==(c=null===e||void 0===e?void 0:e.optional)&&void 0!==c&&c;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(n){if(a)return null;throw n}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(c){}for(const[e,t]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:a});t.resolve(e)}catch(c){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:t,options:c});for(const[n,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(n);t===e&&i.resolve(a)}return a}onInit(e,c){var t;const a=this.normalizeInstanceIdentifier(c),n=null!==(t=this.onInitCallbacks.get(a))&&void 0!==t?t:new Set;n.add(e),this.onInitCallbacks.set(a,n);const i=this.instances.get(a);return i&&e(i,a),()=>{n.delete(e)}}invokeOnInitCallbacks(e,c){const t=this.onInitCallbacks.get(c);if(t)for(const n of t)try{n(e,c)}catch(a){}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:r(e),options:c}),this.instances.set(e,t),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch(a){}return t||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function r(e){return e===i?void 0:e}function o(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){const c=this.getProvider(e.name);c.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new l(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,c,t){t.d(c,{Yd:function(){return s},in:function(){return n}});t(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a.KN)(n,i,"app")},1066:function(e,c,t){t.d(c,{ET:function(){return Jt},hJ:function(){return rt},oe:function(){return Kt},JU:function(){return ot},PL:function(){return Zt},ad:function(){return tt},IO:function(){return Ot},r7:function(){return Xt},ar:function(){return Dt}});t(560),t(4224),t(1121),t(7133),t(3429);var a=t(7077),n=t(7142),i=t(5168),l=t(223);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}r.UNAUTHENTICATED=new r(null),r.GOOGLE_CREDENTIALS=new r("google-credentials-uid"),r.FIRST_PARTY=new r("first-party-uid"),r.MOCK_USER=new r("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let o="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s=new i.Yd("@firebase/firestore");function f(e,...c){if(s.logLevel<=i["in"].DEBUG){const t=c.map(m);s.debug(`Firestore (${o}): ${e}`,...t)}}function u(e,...c){if(s.logLevel<=i["in"].ERROR){const t=c.map(m);s.error(`Firestore (${o}): ${e}`,...t)}}function d(e,...c){if(s.logLevel<=i["in"].WARN){const t=c.map(m);s.warn(`Firestore (${o}): ${e}`,...t)}}function m(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return function(e){return JSON.stringify(e)}(e)}catch(c){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const c=`FIRESTORE (${o}) INTERNAL ASSERTION FAILED: `+e;throw u(c),new Error(c)}function h(e,c){e||p()}function v(e,c){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="ok",g="cancelled",V="unknown",H="invalid-argument",C="deadline-exceeded",M="not-found",b="permission-denied",y="unauthenticated",L="resource-exhausted",x="failed-precondition",w="aborted",S="out-of-range",k="unimplemented",N="internal",A="unavailable";class _ extends l.ZR{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable((()=>c(r.UNAUTHENTICATED)))}shutdown(){}}class P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable((()=>c(this.token.user)))}shutdown(){this.changeListener=null}}class T{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(h("string"==typeof e.accessToken),new F(e.accessToken,new r(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,c){}shutdown(){}}class I{constructor(e,c,t){this.t=e,this.i=c,this.o=t,this.type="FirstParty",this.user=r.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class B{constructor(e,c,t){this.t=e,this.i=c,this.o=t}getToken(){return Promise.resolve(new I(this.t,this.i,this.o))}start(e,c){e.enqueueRetryable((()=>c(r.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e){this.h=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(h("string"==typeof e.token),new R(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,c){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,c,t,a,n,i,l,r,o){this.databaseId=e,this.appId=c,this.persistenceKey=t,this.host=a,this.ssl=n,this.forceLongPolling=i,this.autoDetectLongPolling=l,this.longPollingOptions=r,this.useFetchStreams=o}}class D{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new D("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof D&&e.projectId===this.projectId&&e.database===this.database}}class U{constructor(e,c,t){void 0===c?c=0:c>e.length&&p(),void 0===t?t=e.length-c:t>e.length-c&&p(),this.segments=e,this.offset=c,this.len=t}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach((e=>{c.push(e)})):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,t=this.limit();c<t;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const t=Math.min(e.length,c.length);for(let a=0;a<t;a++){const t=e.get(a),n=c.get(a);if(t<n)return-1;if(t>n)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class j extends U{construct(e,c,t){return new j(e,c,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const t of e){if(t.indexOf("//")>=0)throw new _(H,`Invalid segment (${t}). Paths must not contain // in them.`);c.push(...t.split("/").filter((e=>e.length>0)))}return new j(c)}static emptyPath(){return new j([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(e,c,t){return new q(e,c,t)}static isValidIdentifier(e){return $.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){const c=[];let t="",a=0;const n=()=>{if(0===t.length)throw new _(H,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(t),t=""};let i=!1;for(;a<e.length;){const c=e[a];if("\\"===c){if(a+1===e.length)throw new _(H,"Path has trailing escape character: "+e);const c=e[a+1];if("\\"!==c&&"."!==c&&"`"!==c)throw new _(H,"Path has invalid escape sequence: "+e);t+=c,a+=2}else"`"===c?(i=!i,a++):"."!==c||i?(t+=c,a++):(n(),a++)}if(n(),i)throw new _(H,"Unterminated ` in path: "+e);return new q(c)}static emptyPath(){return new q([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(j.fromString(e))}static fromName(e){return new G(j.fromString(e).popFirst(5))}static empty(){return new G(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===j.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,c){return j.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new j(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,c,t){if(!t)throw new _(H,`Function ${e}() cannot be called with an empty ${c}.`)}function Z(e){if(!G.isDocumentKey(e))throw new _(H,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function X(e){if(G.isDocumentKey(e))throw new _(H,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function K(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const c=function(e){return e.constructor?e.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return"function"==typeof e?"a function":p()}function J(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new _(H,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=K(e);throw new _(H,`Expected type '${c.name}', but it was: ${t}`)}}return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const c={};return void 0!==e.timeoutSeconds&&(c.timeoutSeconds=e.timeoutSeconds),c
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let ee=null;function ce(){return null===ee?ee=function(){return 268435456+Math.round(2147483648*Math.random())}():ee++,"0x"+ee.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function te(e){return null==e}function ae(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,le;function re(e){if(void 0===e)return u("RPC_ERROR","HTTP error has no status"),V;switch(e){case 200:return z;case 400:return x;case 401:return y;case 403:return b;case 404:return M;case 409:return w;case 416:return S;case 429:return L;case 499:return g;case 500:return V;case 501:return k;case 503:return A;case 504:return C;default:return e>=200&&e<300?z:e>=400&&e<500?x:e>=500&&e<600?N:V}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(le=ie||(ie={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";class oe extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const c=e.ssl?"https":"http",t=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.m=c+"://"+e.host,this.A=`projects/${t}/databases/${a}`,this.T="(default)"===this.databaseId.database?`project_id=${t}`:`project_id=${t}&database_id=${a}`}get P(){return!1}R(e,c,t,a,n){const i=ce(),l=this.I(e,c);f("RestConnection",`Sending RPC '${e}' ${i}:`,l,t);const r={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(r,a,n),this.p(e,l,r,t).then((c=>(f("RestConnection",`Received RPC '${e}' ${i}: `,c),c)),(c=>{throw d("RestConnection",`RPC '${e}' ${i} failed with error: `,c,"url: ",l,"request:",t),c}))}g(e,c,t,a,n,i){return this.R(e,c,t,a,n)}V(e,c,t){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),c&&c.headers.forEach(((c,t)=>e[t]=c)),t&&t.headers.forEach(((c,t)=>e[t]=c))}I(e,c){const t=ne[e];return`${this.m}/v1/${c}:${t}`}}{constructor(e,c){super(e),this.F=c}v(e,c){throw new Error("Not supported by FetchConnection")}async p(e,c,t,a){var n;const i=JSON.stringify(a);let l;try{l=await this.F(c,{method:"POST",headers:t,body:i})}catch(e){const c=e;throw new _(re(c.status),"Request failed with error: "+c.statusText)}if(!l.ok){let e=await l.json();Array.isArray(e)&&(e=e[0]);const c=null===(n=null==e?void 0:e.error)||void 0===n?void 0:n.message;throw new _(re(l.status),`Request failed with error: ${null!=c?c:l.statusText}`)}return l.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){const c="undefined"!=typeof self&&(self.crypto||self.msCrypto),t=new Uint8Array(e);if(c&&"function"==typeof c.getRandomValues)c.getRandomValues(t);else for(let a=0;a<e;a++)t[a]=Math.floor(256*Math.random());return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let t="";for(;t.length<20;){const a=se(40);for(let n=0;n<a.length;++n)t.length<20&&a[n]<c&&(t+=e.charAt(a[n]%e.length))}return t}}function ue(e,c){return e<c?-1:e>c?1:0}function de(e,c,t){return e.length===c.length&&e.every(((e,a)=>t(e,c[a])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let c=0;for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c++;return c}function pe(e,c){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c(t,e[t])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new he("Invalid base64 string: "+e):e}}(e);return new ve(c)}static fromUint8Array(e){const c=function(e){let c="";for(let t=0;t<e.length;++t)c+=String.fromCharCode(e[t]);return c}(e);return new ve(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const c=new Uint8Array(e.length);for(let t=0;t<e.length;t++)c[t]=e.charCodeAt(t);return c}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const ze=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(e){if(h(!!e),"string"==typeof e){let c=0;const t=ze.exec(e);if(h(!!t),t[1]){let e=t[1];e=(e+"000000000").substr(0,9),c=Number(e)}const a=new Date(e);return{seconds:Math.floor(a.getTime()/1e3),nanos:c}}return{seconds:Ve(e.seconds),nanos:Ve(e.nanos)}}function Ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function He(e){return"string"==typeof e?ve.fromBase64String(e):ve.fromUint8Array(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new _(H,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new _(H,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new _(H,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(H,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),t=Math.floor(1e6*(e-1e3*c));return new Ce(c,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){var c,t;return"server_timestamp"===(null===(t=((null===(c=null==e?void 0:e.mapValue)||void 0===c?void 0:c.fields)||{}).__type__)||void 0===t?void 0:t.stringValue)}function be(e){const c=e.mapValue.fields.__previous_value__;return Me(c)?be(c):c}function ye(e){const c=ge(e.mapValue.fields.__local_write_time__.timestampValue);return new Ce(c.seconds,c.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={fields:{__type__:{stringValue:"__max__"}}};function xe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Me(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
  * @license
  * Copyright 2022 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(e)?9007199254740991:10:p()}function we(e,c){if(e===c)return!0;const t=xe(e);if(t!==xe(c))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return ye(e).isEqual(ye(c));case 3:return function(e,c){if("string"==typeof e.timestampValue&&"string"==typeof c.timestampValue&&e.timestampValue.length===c.timestampValue.length)return e.timestampValue===c.timestampValue;const t=ge(e.timestampValue),a=ge(c.timestampValue);return t.seconds===a.seconds&&t.nanos===a.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(e,c){return He(e.bytesValue).isEqual(He(c.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(e,c){return Ve(e.geoPointValue.latitude)===Ve(c.geoPointValue.latitude)&&Ve(e.geoPointValue.longitude)===Ve(c.geoPointValue.longitude)}(e,c);case 2:return function(e,c){if("integerValue"in e&&"integerValue"in c)return Ve(e.integerValue)===Ve(c.integerValue);if("doubleValue"in e&&"doubleValue"in c){const t=Ve(e.doubleValue),a=Ve(c.doubleValue);return t===a?ae(t)===ae(a):isNaN(t)&&isNaN(a)}return!1}(e,c);case 9:return de(e.arrayValue.values||[],c.arrayValue.values||[],we);case 10:return function(e,c){const t=e.mapValue.fields||{},a=c.mapValue.fields||{};if(me(t)!==me(a))return!1;for(const n in t)if(t.hasOwnProperty(n)&&(void 0===a[n]||!we(t[n],a[n])))return!1;return!0}(e,c);default:return p()}}function Se(e,c){return void 0!==(e.values||[]).find((e=>we(e,c)))}function ke(e,c){if(e===c)return 0;const t=xe(e),a=xe(c);if(t!==a)return ue(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(e.booleanValue,c.booleanValue);case 2:return function(e,c){const t=Ve(e.integerValue||e.doubleValue),a=Ve(c.integerValue||c.doubleValue);return t<a?-1:t>a?1:t===a?0:isNaN(t)?isNaN(a)?0:-1:1}(e,c);case 3:return Ne(e.timestampValue,c.timestampValue);case 4:return Ne(ye(e),ye(c));case 5:return ue(e.stringValue,c.stringValue);case 6:return function(e,c){const t=He(e),a=He(c);return t.compareTo(a)}(e.bytesValue,c.bytesValue);case 7:return function(e,c){const t=e.split("/"),a=c.split("/");for(let n=0;n<t.length&&n<a.length;n++){const e=ue(t[n],a[n]);if(0!==e)return e}return ue(t.length,a.length)}(e.referenceValue,c.referenceValue);case 8:return function(e,c){const t=ue(Ve(e.latitude),Ve(c.latitude));return 0!==t?t:ue(Ve(e.longitude),Ve(c.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(e,c){const t=e.values||[],a=c.values||[];for(let n=0;n<t.length&&n<a.length;++n){const e=ke(t[n],a[n]);if(e)return e}return ue(t.length,a.length)}(e.arrayValue,c.arrayValue);case 10:return function(e,c){if(e===Le&&c===Le)return 0;if(e===Le)return 1;if(c===Le)return-1;const t=e.fields||{},a=Object.keys(t),n=c.fields||{},i=Object.keys(n);a.sort(),i.sort();for(let l=0;l<a.length&&l<i.length;++l){const e=ue(a[l],i[l]);if(0!==e)return e;const c=ke(t[a[l]],n[i[l]]);if(0!==c)return c}return ue(a.length,i.length)}(e.mapValue,c.mapValue);default:throw p()}}function Ne(e,c){if("string"==typeof e&&"string"==typeof c&&e.length===c.length)return ue(e,c);const t=ge(e),a=ge(c),n=ue(t.seconds,a.seconds);return 0!==n?n:ue(t.nanos,a.nanos)}function Ae(e,c){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`}}function _e(e){return!!e&&"arrayValue"in e}function Fe(e){return!!e&&"nullValue"in e}function Ee(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Pe(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return pe(e.mapValue.fields,((e,t)=>c.mapValue.fields[e]=Te(t))),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let t=0;t<(e.arrayValue.values||[]).length;++t)c.arrayValue.values[t]=Te(e.arrayValue.values[t]);return c}return Object.assign({},e)}class Ie{constructor(e,c){this.position=e,this.inclusive=c}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{}class Re extends Be{constructor(e,c,t){super(),this.field=e,this.op=c,this.value=t}static create(e,c,t){return e.isKeyField()?"in"===c||"not-in"===c?this.createKeyFieldInFilter(e,c,t):new We(e,c,t):"array-contains"===c?new $e(e,t):"in"===c?new qe(e,t):"not-in"===c?new Ge(e,t):"array-contains-any"===c?new Ye(e,t):new Re(e,c,t)}static createKeyFieldInFilter(e,c,t){return"in"===c?new De(e,t):new Ue(e,t)}matches(e){const c=e.data.field(this.field);return"!="===this.op?null!==c&&this.matchesComparison(ke(c,this.value)):null!==c&&xe(this.value)===xe(c)&&this.matchesComparison(ke(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends Be{constructor(e,c){super(),this.filters=e,this.op=c,this.D=null}static create(e,c){return new Oe(e,c)}matches(e){return function(e){return"and"===e.op}(this)?void 0===this.filters.find((c=>!c.matches(e))):void 0!==this.filters.find((c=>c.matches(e)))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce(((e,c)=>e.concat(c.getFlattenedFilters())),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class We extends Re{constructor(e,c,t){super(e,c,t),this.key=G.fromName(t.referenceValue)}matches(e){const c=G.comparator(e.key,this.key);return this.matchesComparison(c)}}class De extends Re{constructor(e,c){super(e,"in",c),this.keys=je("in",c)}matches(e){return this.keys.some((c=>c.isEqual(e.key)))}}class Ue extends Re{constructor(e,c){super(e,"not-in",c),this.keys=je("not-in",c)}matches(e){return!this.keys.some((c=>c.isEqual(e.key)))}}function je(e,c){var t;return((null===(t=c.arrayValue)||void 0===t?void 0:t.values)||[]).map((e=>G.fromName(e.referenceValue)))}class $e extends Re{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return _e(c)&&Se(c.arrayValue,this.value)}}class qe extends Re{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return null!==c&&Se(this.value.arrayValue,c)}}class Ge extends Re{constructor(e,c){super(e,"not-in",c)}matches(e){if(Se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return null!==c&&!Se(this.value.arrayValue,c)}}class Ye extends Re{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!_e(c)||!c.arrayValue.values)&&c.arrayValue.values.some((e=>Se(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,c="asc"){this.field=e,this.dir=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xe(e)}static min(){return new Xe(new Ce(0,0))}static max(){return new Xe(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,c){this.comparator=e,this.root=c||Qe.EMPTY}insert(e,c){return new Ke(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const t=this.comparator(e,c.key);if(0===t)return c.value;t<0?c=c.left:t>0&&(c=c.right)}return null}indexOf(e){let c=0,t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(0===a)return c+t.left.size;a<0?t=t.left:(c+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((c,t)=>(e(c,t),!1)))}toString(){const e=[];return this.inorderTraversal(((c,t)=>(e.push(`${c}:${t}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Je(this.root,e,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Je(this.root,e,this.comparator,!0)}}class Je{constructor(e,c,t,a){this.isReverse=a,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=c?t(e.key,c):1,c&&a&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,c,t,a,n){this.key=e,this.value=c,this.color=null!=t?t:Qe.RED,this.left=null!=a?a:Qe.EMPTY,this.right=null!=n?n:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,t,a,n){return new Qe(null!=e?e:this.key,null!=c?c:this.value,null!=t?t:this.color,null!=a?a:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,t){let a=this;const n=t(e,a.key);return a=n<0?a.copy(null,null,null,a.left.insert(e,c,t),null):0===n?a.copy(null,c,null,null,null):a.copy(null,null,null,null,a.right.insert(e,c,t)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let t,a=this;if(c(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,c),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===c(e,a.key)){if(a.right.isEmpty())return Qe.EMPTY;t=a.right.min(),a=a.copy(t.key,t.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,c))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1,Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,c,t,a,n){return this}insert(e,c,t){return new Qe(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((c,t)=>(e(c),!1)))}forEachInRange(e,c){const t=this.data.getIteratorFrom(e[0]);for(;t.hasNext();){const a=t.getNext();if(this.comparator(a.key,e[1])>=0)return;c(a.key)}}forEachWhile(e,c){let t;for(t=void 0!==c?this.data.getIteratorFrom(c):this.data.getIterator();t.hasNext();)if(!e(t.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new cc(this.data.getIterator())}getIteratorFrom(e){return new cc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach((e=>{c=c.add(e)})),c}isEqual(e){if(!(e instanceof ec))return!1;if(this.size!==e.size)return!1;const c=this.data.getIterator(),t=e.data.getIterator();for(;c.hasNext();){const e=c.getNext().key,a=t.getNext().key;if(0!==this.comparator(e,a))return!1}return!0}toArray(){const e=[];return this.forEach((c=>{e.push(c)})),e}toString(){const e=[];return this.forEach((c=>e.push(c))),"SortedSet("+e.toString()+")"}copy(e){const c=new ec(this.comparator);return c.data=e,c}}class cc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new tc([])}unionWith(e){let c=new ec(q.comparator);for(const t of this.fields)c=c.add(t);for(const t of e)c=c.add(t);return new tc(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return de(this.fields,e.fields,((e,c)=>e.isEqual(c)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.value=e}static empty(){return new ac({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let t=0;t<e.length-1;++t)if(c=(c.mapValue.fields||{})[e.get(t)],!Pe(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=Te(c)}setAll(e){let c=q.emptyPath(),t={},a=[];e.forEach(((e,n)=>{if(!c.isImmediateParentOf(n)){const e=this.getFieldsMap(c);this.applyChanges(e,t,a),t={},a=[],c=n.popLast()}e?t[n.lastSegment()]=Te(e):a.push(n.lastSegment())}));const n=this.getFieldsMap(c);this.applyChanges(n,t,a)}delete(e){const c=this.field(e.popLast());Pe(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let t=0;t<e.length;++t){let a=c.mapValue.fields[e.get(t)];Pe(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},c.mapValue.fields[e.get(t)]=a),c=a}return c.mapValue.fields}applyChanges(e,c,t){pe(c,((c,t)=>e[c]=t));for(const a of t)delete e[a]}clone(){return new ac(Te(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,c,t,a,n,i,l){this.key=e,this.documentType=c,this.version=t,this.readTime=a,this.createTime=n,this.data=i,this.documentState=l}static newInvalidDocument(e){return new nc(e,0,Xe.min(),Xe.min(),Xe.min(),ac.empty(),0)}static newFoundDocument(e,c,t,a){return new nc(e,1,c,Xe.min(),t,a,0)}static newNoDocument(e,c){return new nc(e,2,c,Xe.min(),Xe.min(),ac.empty(),0)}static newUnknownDocument(e,c){return new nc(e,3,c,Xe.min(),Xe.min(),ac.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(Xe.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ac.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ac.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof nc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,c=null,t=[],a=[],n=null,i=null,l=null){this.path=e,this.collectionGroup=c,this.orderBy=t,this.filters=a,this.limit=n,this.startAt=i,this.endAt=l,this.C=null}}function lc(e,c=null,t=[],a=[],n=null,i=null,l=null){return new ic(e,c,t,a,n,i,l)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,c=null,t=[],a=[],n=null,i="F",l=null,r=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=t,this.filters=a,this.limit=n,this.limitType=i,this.startAt=l,this.endAt=r,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function oc(e){return null!==e.collectionGroup}function sc(e){const c=v(e);if(null===c.S){c.S=[];const e=new Set;for(const n of c.explicitOrderBy)c.S.push(n),e.add(n.field.canonicalString());const t=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc",a=function(e){let c=new ec(q.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(c=c.add(e.field))}))})),c}(c);a.forEach((a=>{e.has(a.canonicalString())||a.isKeyField()||c.S.push(new Ze(a,t))})),e.has(q.keyField().canonicalString())||c.S.push(new Ze(q.keyField(),t))}return c.S}function fc(e){const c=v(e);return c.N||(c.N=uc(c,sc(e))),c.N}function uc(e,c){if("F"===e.limitType)return lc(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map((e=>{const c="desc"===e.dir?"asc":"desc";return new Ze(e.field,c)}));const t=e.endAt?new Ie(e.endAt.position,e.endAt.inclusive):null,a=e.startAt?new Ie(e.startAt.position,e.startAt.inclusive):null;return lc(e.path,e.collectionGroup,c,e.filters,e.limit,t,a)}}function dc(e,c){const t=e.filters.concat([c]);return new rc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),t,e.limit,e.limitType,e.startAt,e.endAt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mc(e,c){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ae(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(c)?function(e){return{integerValue:""+e}}(c):function(e,c){if(e.useProto3Json){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(c)?"-0":c}}(e,c)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this._=void 0}}class hc extends pc{}class vc extends pc{constructor(e){super(),this.elements=e}}class zc extends pc{constructor(e){super(),this.elements=e}}class gc extends pc{constructor(e,c){super(),this.serializer=e,this.q=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new Vc}static exists(e){return new Vc(void 0,e)}static updateTime(e){return new Vc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Hc{}class Cc extends Hc{constructor(e,c,t,a=[]){super(),this.key=e,this.value=c,this.precondition=t,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Mc extends Hc{constructor(e,c,t,a,n=[]){super(),this.key=e,this.data=c,this.fieldMask=t,this.precondition=a,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}class bc extends Hc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yc extends Hc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),xc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),wc=(()=>{const e={and:"AND",or:"OR"};return e})();class Sc{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function kc(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Nc(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function Ac(e,c){return kc(e,c.toTimestamp())}function _c(e){return h(!!e),Xe.fromTimestamp(function(e){const c=ge(e);return new Ce(c.seconds,c.nanos)}(e))}function Fc(e,c){return function(e){return new j(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(c).canonicalString()}function Ec(e,c){return Fc(e.databaseId,c.path)}function Pc(e,c){const t=function(e){const c=j.fromString(e);return h(Gc(c)),c}(c);if(t.get(1)!==e.databaseId.projectId)throw new _(H,"Tried to deserialize key from different project: "+t.get(1)+" vs "+e.databaseId.projectId);if(t.get(3)!==e.databaseId.database)throw new _(H,"Tried to deserialize key from different database: "+t.get(3)+" vs "+e.databaseId.database);return new G(function(e){return h(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t))}function Tc(e,c){return Fc(e.databaseId,c)}function Ic(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bc(e,c,t){return{name:Ec(e,c),fields:t.value.mapValue.fields}}function Rc(e,c){let t;if(c instanceof Cc)t={update:Bc(e,c.key,c.value)};else if(c instanceof bc)t={delete:Ec(e,c.key)};else if(c instanceof Mc)t={update:Bc(e,c.key,c.data),updateMask:qc(c.fieldMask)};else{if(!(c instanceof yc))return p();t={verify:Ec(e,c.key)}}return c.fieldTransforms.length>0&&(t.updateTransforms=c.fieldTransforms.map((e=>function(e,c){const t=c.transform;if(t instanceof hc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(t instanceof vc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:t.elements}};if(t instanceof zc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:t.elements}};if(t instanceof gc)return{fieldPath:c.field.canonicalString(),increment:t.q};throw p()}(0,e)))),c.precondition.isNone||(t.currentDocument=function(e,c){return void 0!==c.updateTime?{updateTime:Ac(e,c.updateTime)}:void 0!==c.exists?{exists:c.exists}:p()}(e,c.precondition)),t}function Oc(e,c){const t={structuredQuery:{}},a=c.path;null!==c.collectionGroup?(t.parent=Tc(e,a),t.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(t.parent=Tc(e,a.popLast()),t.structuredQuery.from=[{collectionId:a.lastSegment()}]);const n=function(e){if(0!==e.length)return $c(Oe.create(e,"and"))}(c.filters);n&&(t.structuredQuery.where=n);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:jc(e.field),direction:Wc(e.dir)}}(e)))}(c.orderBy);i&&(t.structuredQuery.orderBy=i);const l=function(e,c){return e.useProto3Json||te(c)?c:{value:c}}(e,c.limit);return null!==l&&(t.structuredQuery.limit=l),c.startAt&&(t.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(c.startAt)),c.endAt&&(t.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(c.endAt)),t}function Wc(e){return Lc[e]}function Dc(e){return xc[e]}function Uc(e){return wc[e]}function jc(e){return{fieldPath:e.canonicalString()}}function $c(e){return e instanceof Re?function(e){if("=="===e.op){if(Ee(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NAN"}};if(Fe(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ee(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NOT_NAN"}};if(Fe(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jc(e.field),op:Dc(e.op),value:e.value}}}(e):e instanceof Oe?function(e){const c=e.getFilters().map((e=>$c(e)));return 1===c.length?c[0]:{compositeFilter:{op:Uc(e.op),filters:c}}}(e):p()}function qc(e){const c=[];return e.fields.forEach((e=>c.push(e.canonicalString()))),{fieldPaths:c}}function Gc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(e){return new Sc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zc extends class{}{constructor(e,c,t,a){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=t,this.serializer=a,this.J=!1}Y(){if(this.J)throw new _(x,"The client has already been terminated.")}R(e,c,t){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,n])=>this.connection.R(e,c,t,a,n))).catch((e=>{throw"FirebaseError"===e.name?(e.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(V,e.toString())}))}g(e,c,t,a){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,i])=>this.connection.g(e,c,t,n,i,a))).catch((e=>{throw"FirebaseError"===e.name?(e.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(V,e.toString())}))}terminate(){this.J=!0}}async function Xc(e,c){const t=v(e),a=Ic(t.serializer)+"/documents",n={writes:c.map((e=>Rc(t.serializer,e)))};await t.R("Commit",a,n)}async function Kc(e,c){const t=v(e),a=Oc(t.serializer,fc(c));return(await t.g("RunQuery",a.parent,{structuredQuery:a.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,c,t){const a=Pc(e,c.name),n=_c(c.updateTime),i=c.createTime?_c(c.createTime):Xe.min(),l=new ac({mapValue:{fields:c.fields}}),r=nc.newFoundDocument(a,n,i,l);return t&&r.setHasCommittedMutations(),t?r.setHasCommittedMutations():r}(t.serializer,e.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jc=new Map;function Qc(e){if(e._terminated)throw new _(x,"The client has already been terminated.");if(!Jc.has(e)){f("ComponentProvider","Initializing Datastore");const c=function(e){return new oe(e,fetch.bind(null))}(function(e,c,t,a){return new W(e,c,t,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,Q(a.experimentalLongPollingOptions),a.useFetchStreams)}
/**
      * @license
      * Copyright 2018 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e._databaseId,e.app.options.appId||"",e._persistenceKey,e._freezeSettings())),t=Yc(e._databaseId),a=function(e,c,t,a){return new Zc(e,c,t,a)}(e._authCredentials,e._appCheckCredentials,c,t);Jc.set(e,a)}return Jc.get(e)}class et{constructor(e){var c,t;if(void 0===e.host){if(void 0!==e.ssl)throw new _(H,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(c=e.ssl)||void 0===c||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(H,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}!function(e,c,t,a){if(!0===c&&!0===a)throw new _(H,`${e} and ${t} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q(null!==(t=e.experimentalLongPollingOptions)&&void 0!==t?t:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new _(H,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new _(H,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new _(H,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,c){return e.timeoutSeconds===c.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ct{constructor(e,c,t,a){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=t,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new et({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(x,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(x,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new et(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new E;switch(e.type){case"firstParty":return new B(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new _(H,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const c=Jc.get(e);c&&(f("ComponentProvider","Removing Datastore"),Jc.delete(e),c.terminate())}(this),Promise.resolve()}}function tt(e,c){const t="object"==typeof e?e:(0,a.Mq)(),n="string"==typeof e?e:c||"(default)",i=(0,a.qX)(t,"firestore/lite").getImmediate({identifier:n});if(!i._initialized){const e=(0,l.P0)("firestore");e&&at(i,...e)}return i}function at(e,c,t,a={}){var n;const i=(e=J(e,ct))._getSettings(),o=`${c}:${t}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&d("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),a.mockUserToken){let c,t;if("string"==typeof a.mockUserToken)c=a.mockUserToken,t=r.MOCK_USER;else{c=(0,l.Sg)(a.mockUserToken,null===(n=e._app)||void 0===n?void 0:n.options.projectId);const i=a.mockUserToken.sub||a.mockUserToken.user_id;if(!i)throw new _(H,"mockUserToken must contain 'sub' or 'user_id' field!");t=new r(i)}e._authCredentials=new P(new F(c,t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(e,c,t){this.converter=c,this._query=t,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class it{constructor(e,c,t){this.converter=c,this._key=t,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class lt extends nt{constructor(e,c,t){super(e,c,function(e){return new rc(e)}(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new G(e))}withConverter(e){return new lt(this.firestore,e,this._path)}}function rt(e,c,...t){if(e=(0,l.m9)(e),Y("collection","path",c),e instanceof ct){const a=j.fromString(c,...t);return X(a),new lt(e,null,a)}{if(!(e instanceof it||e instanceof lt))throw new _(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=e._path.child(j.fromString(c,...t));return X(a),new lt(e.firestore,null,a)}}function ot(e,c,...t){if(e=(0,l.m9)(e),1===arguments.length&&(c=fe.newId()),Y("doc","path",c),e instanceof ct){const a=j.fromString(c,...t);return Z(a),new it(e,null,new G(a))}{if(!(e instanceof it||e instanceof lt))throw new _(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=e._path.child(j.fromString(c,...t));return Z(a),new it(e.firestore,e instanceof lt?e.converter:null,new G(a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(ve.fromBase64String(e))}catch(e){throw new _(H,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new st(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(...e){for(let c=0;c<e.length;++c)if(0===e[c].length)throw new _(H,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new _(H,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new _(H,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=/^__.*__$/;class pt{constructor(e,c,t){this.data=e,this.fieldMask=c,this.fieldTransforms=t}toMutation(e,c){return null!==this.fieldMask?new Mc(e,this.data,this.fieldMask,c,this.fieldTransforms):new Cc(e,this.data,c,this.fieldTransforms)}}class ht{constructor(e,c,t){this.data=e,this.fieldMask=c,this.fieldTransforms=t}toMutation(e,c){return new Mc(e,this.data,this.fieldMask,c,this.fieldTransforms)}}function vt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class zt{constructor(e,c,t,a,n,i){this.settings=e,this.databaseId=c,this.serializer=t,this.ignoreUndefinedProperties=a,void 0===n&&this.X(),this.fieldTransforms=n||[],this.fieldMask=i||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new zt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var c;const t=null===(c=this.path)||void 0===c?void 0:c.child(e),a=this.et({path:t,nt:!1});return a.it(e),a}st(e){var c;const t=null===(c=this.path)||void 0===c?void 0:c.child(e),a=this.et({path:t,nt:!1});return a.X(),a}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return _t(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return void 0!==this.fieldMask.find((c=>e.isPrefixOf(c)))||void 0!==this.fieldTransforms.find((c=>e.isPrefixOf(c.field)))}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(vt(this.tt)&&mt.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class gt{constructor(e,c,t){this.databaseId=e,this.ignoreUndefinedProperties=c,this.serializer=t||Yc(e)}lt(e,c,t,a=!1){return new zt({tt:e,methodName:c,ct:t,path:q.emptyPath(),nt:!1,_t:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vt(e){const c=e._freezeSettings(),t=Yc(e._databaseId);return new gt(e._databaseId,!!c.ignoreUndefinedProperties,t)}function Ht(e,c,t,a,n,i={}){const l=e.lt(i.merge||i.mergeFields?2:0,c,t,n);St("Data must be an object, but it was:",l,a);const r=xt(a,l);let o,s;if(i.merge)o=new tc(l.fieldMask),s=l.fieldTransforms;else if(i.mergeFields){const e=[];for(const a of i.mergeFields){const n=kt(c,a,t);if(!l.contains(n))throw new _(H,`Field '${n}' is specified in your field mask but missing from your input data.`);Ft(e,n)||e.push(n)}o=new tc(e),s=l.fieldTransforms.filter((e=>o.covers(e.field)))}else o=null,s=l.fieldTransforms;return new pt(new ac(r),o,s)}class Ct extends ut{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ct}}function Mt(e,c,t,a){const n=e.lt(1,c,t);St("Data must be an object, but it was:",n,a);const i=[],r=ac.empty();pe(a,((e,a)=>{const o=At(c,e,t);a=(0,l.m9)(a);const s=n.st(o);if(a instanceof Ct)i.push(o);else{const e=Lt(a,s);null!=e&&(i.push(o),r.set(o,e))}}));const o=new tc(i);return new ht(r,o,n.fieldTransforms)}function bt(e,c,t,a,n,i){const r=e.lt(1,c,t),o=[kt(c,a,t)],s=[n];if(i.length%2!=0)throw new _(H,`Function ${c}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let l=0;l<i.length;l+=2)o.push(kt(c,i[l])),s.push(i[l+1]);const f=[],u=ac.empty();for(let m=o.length-1;m>=0;--m)if(!Ft(f,o[m])){const e=o[m];let c=s[m];c=(0,l.m9)(c);const t=r.st(e);if(c instanceof Ct)f.push(e);else{const a=Lt(c,t);null!=a&&(f.push(e),u.set(e,a))}}const d=new tc(f);return new ht(u,d,r.fieldTransforms)}function yt(e,c,t,a=!1){return Lt(t,e.lt(a?4:3,c))}function Lt(e,c){if(wt(e=(0,l.m9)(e)))return St("Unsupported field value:",c,e),xt(e,c);if(e instanceof ut)return function(e,c){if(!vt(c.tt))throw c.ut(`${e._methodName}() can only be used with update() and set()`);if(!c.path)throw c.ut(`${e._methodName}() is not currently supported inside arrays`);const t=e._toFieldTransform(c);t&&c.fieldTransforms.push(t)}(e,c),null;if(void 0===e&&c.ignoreUndefinedProperties)return null;if(c.path&&c.fieldMask.push(c.path),e instanceof Array){if(c.settings.nt&&4!==c.tt)throw c.ut("Nested arrays are not supported");return function(e,c){const t=[];let a=0;for(const n of e){let e=Lt(n,c.ot(a));null==e&&(e={nullValue:"NULL_VALUE"}),t.push(e),a++}return{arrayValue:{values:t}}}(e,c)}return function(e,c){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mc(c.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const t=Ce.fromDate(e);return{timestampValue:kc(c.serializer,t)}}if(e instanceof Ce){const t=new Ce(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:kc(c.serializer,t)}}if(e instanceof dt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof st)return{bytesValue:Nc(c.serializer,e._byteString)};if(e instanceof it){const t=c.databaseId,a=e.firestore._databaseId;if(!a.isEqual(t))throw c.ut(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:Fc(e.firestore._databaseId||c.databaseId,e._key.path)}}throw c.ut(`Unsupported field value: ${K(e)}`)}(e,c)}function xt(e,c){const t={};return function(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}(e)?c.path&&c.path.length>0&&c.fieldMask.push(c.path):pe(e,((e,a)=>{const n=Lt(a,c.rt(e));null!=n&&(t[e]=n)})),{mapValue:{fields:t}}}function wt(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ce||e instanceof dt||e instanceof st||e instanceof it||e instanceof ut)}function St(e,c,t){if(!wt(t)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(t)){const a=K(t);throw"an object"===a?c.ut(e+" a custom object"):c.ut(e+" "+a)}}function kt(e,c,t){if((c=(0,l.m9)(c))instanceof ft)return c._internalPath;if("string"==typeof c)return At(e,c);throw _t("Field path arguments must be of type string or ",e,!1,void 0,t)}const Nt=new RegExp("[~\\*/\\[\\]]");function At(e,c,t){if(c.search(Nt)>=0)throw _t(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,t);try{return new ft(...c.split("."))._internalPath}catch(a){throw _t(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,t)}}function _t(e,c,t,a,n){const i=a&&!a.isEmpty(),l=void 0!==n;let r=`Function ${c}() called with invalid data`;t&&(r+=" (via `toFirestore()`)"),r+=". ";let o="";return(i||l)&&(o+=" (found",i&&(o+=` in field ${a}`),l&&(o+=` in document ${n}`),o+=")"),new _(H,r+e+o)}function Ft(e,c){return e.some((e=>e.isEqual(c)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,c,t,a,n){this._firestore=e,this._userDataWriter=c,this._key=t,this._document=a,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Pt(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(It("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c)}}}class Pt extends Et{data(){return super.data()}}class Tt{constructor(e,c){this._docs=c,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,c){this._docs.forEach(e,c)}}function It(e,c){return"string"==typeof c?At(e,c):c instanceof ft?c._internalPath:c._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{}class Rt extends Bt{}function Ot(e,c,...t){let a=[];c instanceof Bt&&a.push(c),a=a.concat(t),function(e){const c=e.filter((e=>e instanceof Ut)).length,t=e.filter((e=>e instanceof Wt)).length;if(c>1||c>0&&t>0)throw new _(H,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(a);for(const n of a)e=n._apply(e);return e}class Wt extends Rt{constructor(e,c,t){super(),this._field=e,this._op=c,this._value=t,this.type="where"}static _create(e,c,t){return new Wt(e,c,t)}_apply(e){const c=this._parse(e);return qt(e._query,c),new nt(e.firestore,e.converter,dc(e._query,c))}_parse(e){const c=Vt(e.firestore),t=function(e,c,t,a,n,i,l){let r;if(n.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new _(H,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){$t(l,i);const c=[];for(const t of l)c.push(jt(a,e,t));r={arrayValue:{values:c}}}else r=jt(a,e,l)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||$t(l,i),r=yt(t,c,l,"in"===i||"not-in"===i);return Re.create(n,i,r)}(e._query,"where",c,e.firestore._databaseId,this._field,this._op,this._value);return t}}function Dt(e,c,t){const a=c,n=It("where",e);return Wt._create(n,a,t)}class Ut extends Bt{constructor(e,c){super(),this.type=e,this._queryConstraints=c}static _create(e,c){return new Ut(e,c)}_parse(e){const c=this._queryConstraints.map((c=>c._parse(e))).filter((e=>e.getFilters().length>0));return 1===c.length?c[0]:Oe.create(c,this._getOperator())}_apply(e){const c=this._parse(e);return 0===c.getFilters().length?e:(function(e,c){let t=e;const a=c.getFlattenedFilters();for(const n of a)qt(t,n),t=dc(t,n)}(e._query,c),new nt(e.firestore,e.converter,dc(e._query,c)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function jt(e,c,t){if("string"==typeof(t=(0,l.m9)(t))){if(""===t)throw new _(H,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oc(c)&&-1!==t.indexOf("/"))throw new _(H,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const a=c.path.child(j.fromString(t));if(!G.isDocumentKey(a))throw new _(H,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Ae(e,new G(a))}if(t instanceof it)return Ae(e,t._key);throw new _(H,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${K(t)}.`)}function $t(e,c){if(!Array.isArray(e)||0===e.length)throw new _(H,`Invalid Query. A non-empty array is required for '${c.toString()}' filters.`)}function qt(e,c){const t=function(e,c){for(const t of e)for(const e of t.getFlattenedFilters())if(c.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(c.op));if(null!==t)throw t===c.op?new _(H,`Invalid query. You cannot use more than one '${c.op.toString()}' filter.`):new _(H,`Invalid query. You cannot use '${c.op.toString()}' filters with '${t.toString()}' filters.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,c,t){let a;return a=e?t&&(t.merge||t.mergeFields)?e.toFirestore(c,t):e.toFirestore(c):c,a}class Yt extends class{convertValue(e,c="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(He(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw p()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const t={};return pe(e,((e,a)=>{t[e]=this.convertValue(a,c)})),t}convertGeoPoint(e){return new dt(Ve(e.latitude),Ve(e.longitude))}convertArray(e,c){return(e.values||[]).map((e=>this.convertValue(e,c)))}convertServerTimestamp(e,c){switch(c){case"previous":const t=be(e);return null==t?null:this.convertValue(t,c);case"estimate":return this.convertTimestamp(ye(e));default:return null}}convertTimestamp(e){const c=ge(e);return new Ce(c.seconds,c.nanos)}convertDocumentKey(e,c){const t=j.fromString(e);h(Gc(t));const a=new D(t.get(1),t.get(3)),n=new G(t.popFirst(5));return a.isEqual(c)||u(`Document ${n} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),n}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const c=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,c)}}function Zt(e){(function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new _(k,"limitToLast() queries require specifying at least one orderBy() clause")})((e=J(e,nt))._query);const c=Qc(e.firestore),t=new Yt(e.firestore);return Kc(c,e._query).then((c=>{const a=c.map((c=>new Pt(e.firestore,t,c.key,c,e.converter)));return"L"===e._query.limitType&&a.reverse(),new Tt(e,a)}))}function Xt(e,c,t,...a){const n=Vt((e=J(e,it)).firestore);let i;return i="string"==typeof(c=(0,l.m9)(c))||c instanceof ft?bt(n,"updateDoc",e._key,c,t,a):Mt(n,"updateDoc",e._key,c),Xc(Qc(e.firestore),[i.toMutation(e._key,Vc.exists(!0))])}function Kt(e){return Xc(Qc((e=J(e,it)).firestore),[new bc(e._key,Vc.none())])}function Jt(e,c){const t=ot(e=J(e,lt)),a=Gt(e.converter,c),n=Ht(Vt(e.firestore),"addDoc",t._key,a,null!==t.converter,{});return Xc(Qc(e.firestore),[n.toMutation(t._key,Vc.exists(!1))]).then((()=>t))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){!function(e){o=e}(`${a.Jn}_lite`),(0,a.Xd)(new n.wA("firestore/lite",((e,{instanceIdentifier:c,options:t})=>{const a=e.getProvider("app").getImmediate(),n=new ct(new T(e.getProvider("auth-internal")),new O(e.getProvider("app-check-internal")),function(e,c){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(H,'"projectId" not provided in firebase.initializeApp.');return new D(e.options.projectId,c)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(a,c),a);return t&&n._setSettings(t),n}),"PUBLIC").setMultipleInstances(!0)),(0,a.KN)("firestore-lite","4.4.0",""),(0,a.KN)("firestore-lite","4.4.0","esm2017")}()},2483:function(e,c,t){t.d(c,{PO:function(){return R},p7:function(){return cc}});t(560);var a=t(3396),n=t(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const a=2.4,n=.2126729,i=.7151522,l=.072175,r=.55,o=.58,s=.57,f=.62,u=.03,d=1.45,m=5e-4,p=1.25,h=1.25,v=.078,z=12.82051282051282,g=.06,V=.001;function H(e,c){const t=(e.r/255)**a,H=(e.g/255)**a,C=(e.b/255)**a,M=(c.r/255)**a,b=(c.g/255)**a,y=(c.b/255)**a;let L,x=t*n+H*i+C*l,w=M*n+b*i+y*l;if(x<=u&&(x+=(u-x)**d),w<=u&&(w+=(u-w)**d),Math.abs(w-x)<m)return 0;if(w>x){const e=(w**r-x**o)*p;L=e<V?0:e<v?e-e*z*g:e-g}else{const e=(w**f-x**s)*h;L=e>-V?0:e>-v?e-e*z*g:e+g}return 100*L}var C=t(6033),M=t(131);const b=.20689655172413793,y=e=>e>b**3?Math.cbrt(e):e/(3*b**2)+4/29,L=e=>e>b?e**3:3*b**2*(e-4/29);function x(e){const c=y,t=c(e[1]);return[116*t-16,500*(c(e[0]/.95047)-t),200*(t-c(e[2]/1.08883))]}function w(e){const c=L,t=(e[0]+16)/116;return[.95047*c(t+e[1]/500),c(t),1.08883*c(t-e[2]/200)]}const S=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],k=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,N=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],A=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function _(e){const c=Array(3),t=k,a=S;for(let n=0;n<3;++n)c[n]=Math.round(255*(0,M.uZ)(t(a[n][0]*e[0]+a[n][1]*e[1]+a[n][2]*e[2])));return{r:c[0],g:c[1],b:c[2]}}function F(e){let{r:c,g:t,b:a}=e;const n=[0,0,0],i=A,l=N;c=i(c/255),t=i(t/255),a=i(a/255);for(let r=0;r<3;++r)n[r]=l[r][0]*c+l[r][1]*t+l[r][2]*a;return n}function E(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function P(e){return E(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const T=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,I={rgb:(e,c,t,a)=>({r:e,g:c,b:t,a:a}),rgba:(e,c,t,a)=>({r:e,g:c,b:t,a:a}),hsl:(e,c,t,a)=>O({h:e,s:c,l:t,a:a}),hsla:(e,c,t,a)=>O({h:e,s:c,l:t,a:a}),hsv:(e,c,t,a)=>R({h:e,s:c,v:t,a:a}),hsva:(e,c,t,a)=>R({h:e,s:c,v:t,a:a})};function B(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,C.Kd)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&T.test(e)){const{groups:c}=e.match(T),{fn:t,values:a}=c,n=a.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(e)/100:parseFloat(e)));return I[t](...n)}if("string"===typeof e){let c=e.startsWith("#")?e.slice(1):e;[3,4].includes(c.length)?c=c.split("").map((e=>e+e)).join(""):[6,8].includes(c.length)||(0,C.Kd)(`'${e}' is not a valid hex(a) color`);const t=parseInt(c,16);return(isNaN(t)||t<0||t>4294967295)&&(0,C.Kd)(`'${e}' is not a valid hex(a) color`),Y(c)}if("object"===typeof e){if((0,M.e$)(e,["r","g","b"]))return e;if((0,M.e$)(e,["h","s","l"]))return R(U(e));if((0,M.e$)(e,["h","s","v"]))return R(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function R(e){const{h:c,s:t,v:a,a:n}=e,i=e=>{const n=(e+c/60)%6;return a-a*t*Math.max(Math.min(n,4-n,1),0)},l=[i(5),i(3),i(1)].map((e=>Math.round(255*e)));return{r:l[0],g:l[1],b:l[2],a:n}}function O(e){return R(U(e))}function W(e){if(!e)return{h:0,s:1,v:1,a:1};const c=e.r/255,t=e.g/255,a=e.b/255,n=Math.max(c,t,a),i=Math.min(c,t,a);let l=0;n!==i&&(n===c?l=60*(0+(t-a)/(n-i)):n===t?l=60*(2+(a-c)/(n-i)):n===a&&(l=60*(4+(c-t)/(n-i)))),l<0&&(l+=360);const r=0===n?0:(n-i)/n,o=[l,r,n];return{h:o[0],s:o[1],v:o[2],a:e.a}}function D(e){const{h:c,s:t,v:a,a:n}=e,i=a-a*t/2,l=1===i||0===i?0:(a-i)/Math.min(i,1-i);return{h:c,s:l,l:i,a:n}}function U(e){const{h:c,s:t,l:a,a:n}=e,i=a+t*Math.min(a,1-a),l=0===i?0:2-2*a/i;return{h:c,s:l,v:i,a:n}}function j(e){let{r:c,g:t,b:a,a:n}=e;return void 0===n?`rgb(${c}, ${t}, ${a})`:`rgba(${c}, ${t}, ${a}, ${n})`}function $(e){return j(R(e))}function q(e){const c=Math.round(e).toString(16);return("00".substr(0,2-c.length)+c).toUpperCase()}function G(e){let{r:c,g:t,b:a,a:n}=e;return`#${[q(c),q(t),q(a),void 0!==n?q(Math.round(255*n)):""].join("")}`}function Y(e){e=K(e);let[c,t,a,n]=(0,M.yo)(e,2).map((e=>parseInt(e,16)));return n=void 0===n?n:n/255,{r:c,g:t,b:a,a:n}}function Z(e){const c=Y(e);return W(c)}function X(e){return G(R(e))}function K(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,M.qy)((0,M.qy)(e,6),8,"F")),e}function J(e,c){const t=x(F(e));return t[0]=t[0]+10*c,_(w(t))}function Q(e,c){const t=x(F(e));return t[0]=t[0]-10*c,_(w(t))}function ee(e){const c=B(e);return F(c)[1]}function ce(e,c){const t=ee(e),a=ee(c),n=Math.max(t,a),i=Math.min(t,a);return(n+.05)/(i+.05)}function te(e){const c=Math.abs(H(B(0),B(e))),t=Math.abs(H(B(16777215),B(e)));return t>Math.min(c,50)?"#fff":"#000"}},6033:function(e,c,t){t.d(c,{Kd:function(){return n},N6:function(){return i},Rn:function(){return l}});var a=t(3396);function n(e){(0,a.ZK)(`Vuetify: ${e}`)}function i(e){(0,a.ZK)(`Vuetify error: ${e}`)}function l(e,c){c=Array.isArray(c)?c.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${c.at(-1)}'`:`'${c}'`,(0,a.ZK)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${c} instead.`)}},1107:function(e,c,t){t.d(c,{aZ:function(){return o},d4:function(){return f},ev:function(){return s}});var a=t(6107),n=t(3396),i=t(6033),l=t(131),r=t(3766);function o(e){if(e._setup=e._setup??e.setup,!e.name)return(0,i.Kd)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,r.U)(e.props??{},e.name)();const c=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,l.ei)(e,c)},e.props._as=String,e.setup=function(c,t){const n=(0,a.Xz)();if(!n.value)return e._setup(c,t);const{props:i,provideSubDefaults:l}=(0,a.Vn)(c,c._as??e.name,n),r=e._setup(i,t);return l(),r}}return e}function s(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return c=>(e?o:n.aZ)(c)}function f(e,c){return c.props=e,c}},7514:function(e,c,t){t.d(c,{BL:function(){return l},FN:function(){return i},sq:function(){return s}});var a=t(3396),n=t(131);function i(e,c){const t=(0,a.FN)();if(!t)throw new Error(`[Vuetify] ${e} ${c||"must be called from inside a setup function"}`);return t}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const c=i(e).type;return(0,n.mA)(c?.aliasName||c?.name)}let r=0,o=new WeakMap;function s(){const e=i("getUid");if(o.has(e))return o.get(e);{const c=r++;return o.set(e,c),c}}s.reset=()=>{r=0,o=new WeakMap}},2385:function(e,c,t){t.d(c,{BR:function(){return a},VB:function(){return l},cu:function(){return n},sR:function(){return i}});const a="undefined"!==typeof window,n=a&&"IntersectionObserver"in window,i=a&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),l=a&&"EyeDropper"in window},131:function(e,c,t){t.d(c,{An:function(){return P},B0:function(){return te},CE:function(){return S},DC:function(){return K},Do:function(){return M},Ds:function(){return I},Ee:function(){return j},F7:function(){return A},FT:function(){return T},Kn:function(){return H},Ku:function(){return se},L7:function(){return le},M9:function(){return k},MT:function(){return g},Ob:function(){return w},PU:function(){return X},RA:function(){return $},S3:function(){return J},Sk:function(){return W},XE:function(){return U},XP:function(){return y},Y5:function(){return E},ZT:function(){return oe},_g:function(){return fe},as:function(){return ce},bY:function(){return G},dc:function(){return ie},dr:function(){return ae},e$:function(){return L},ef:function(){return ne},ei:function(){return x},kb:function(){return V},keyValues:function(){return b},mA:function(){return q},oJ:function(){return ee},pC:function(){return R},q9:function(){return Q},qF:function(){return z},qy:function(){return O},uZ:function(){return B},vO:function(){return v},vX:function(){return C},vZ:function(){return h},xb:function(){return re},yo:function(){return D}});t(560);var a=t(4870),n=t(3396),i=t(7139),l=t(2385);function r(e,c,t){o(e,c),c.set(e,t)}function o(e,c){if(c.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function s(e,c,t){var a=d(e,c,"set");return f(e,a,t),t}function f(e,c,t){if(c.set)c.set.call(e,t);else{if(!c.writable)throw new TypeError("attempted to set read only private field");c.value=t}}function u(e,c){var t=d(e,c,"get");return m(e,t)}function d(e,c,t){if(!c.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return c.get(e)}function m(e,c){return c.get?c.get.call(e):c.value}function p(e,c,t){const a=c.length-1;if(a<0)return void 0===e?t:e;for(let n=0;n<a;n++){if(null==e)return t;e=e[c[n]]}return null==e||void 0===e[c[a]]?t:e[c[a]]}function h(e,c){if(e===c)return!0;if(e instanceof Date&&c instanceof Date&&e.getTime()!==c.getTime())return!1;if(e!==Object(e)||c!==Object(c))return!1;const t=Object.keys(e);return t.length===Object.keys(c).length&&t.every((t=>h(e[t],c[t])))}function v(e,c,t){return null!=e&&c&&"string"===typeof c?void 0!==e[c]?e[c]:(c=c.replace(/\[(\w+)\]/g,".$1"),c=c.replace(/^\./,""),p(e,c.split("."),t)):t}function z(e,c,t){if(!0===c)return void 0===e?t:e;if(null==c||"boolean"===typeof c)return t;if(e!==Object(e)){if("function"!==typeof c)return t;const a=c(e,t);return"undefined"===typeof a?t:a}if("string"===typeof c)return v(e,c,t);if(Array.isArray(c))return p(e,c,t);if("function"!==typeof c)return t;const a=c(e,t);return"undefined"===typeof a?t:a}function g(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,t)=>c+t))}function V(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${c}`:void 0}function H(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function C(e){if(e&&"$el"in e){const c=e.$el;return c?.nodeType===Node.TEXT_NODE?c.nextElementSibling:c}return e}const M=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),b=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function y(e){return Object.keys(e)}function L(e,c){return c.every((c=>e.hasOwnProperty(c)))}function x(e,c){const t={},a=new Set(Object.keys(e));for(const n of c)a.has(n)&&(t[n]=e[n]);return t}function w(e,c,t){const a=Object.create(null),n=Object.create(null);for(const i in e)c.some((e=>e instanceof RegExp?e.test(i):e===i))&&!t?.some((e=>e===i))?a[i]=e[i]:n[i]=e[i];return[a,n]}function S(e,c){const t={...e};return c.forEach((e=>delete t[e])),t}function k(e,c){const t={};return c.forEach((c=>t[c]=e[c])),t}const N=/^on[^a-z]/,A=e=>N.test(e),_=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],F=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function E(e){return e.isComposing&&F.includes(e.key)}function P(e){const[c,t]=w(e,[N]),a=S(c,_),[n,i]=w(t,["class","style","id",/^data-/]);return Object.assign(n,c),Object.assign(i,a),[n,i]}function T(e){return null==e?[]:Array.isArray(e)?e:[e]}function I(e,c){let t=0;const n=function(){for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];clearTimeout(t),t=setTimeout((()=>e(...i)),(0,a.SU)(c))};return n.clear=()=>{clearTimeout(t)},n.immediate=e,n}function B(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(c,Math.min(t,e))}function R(e){const c=e.toString().trim();return c.includes(".")?c.length-c.indexOf(".")-1:0}function O(e,c){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+t.repeat(Math.max(0,c-e.length))}function W(e,c){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return t.repeat(Math.max(0,c-e.length))+e}function D(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const t=[];let a=0;while(a<e.length)t.push(e.substr(a,c)),a+=c;return t}function U(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(e<c)return`${e} B`;const t=1024===c?["Ki","Mi","Gi"]:["k","M","G"];let a=-1;while(Math.abs(e)>=c&&a<t.length-1)e/=c,++a;return`${e.toFixed(1)} ${t[a]}B`}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const a={};for(const n in e)a[n]=e[n];for(const n in c){const i=e[n],l=c[n];H(i)&&H(l)?a[n]=j(i,l,t):Array.isArray(i)&&Array.isArray(l)&&t?a[n]=t(i,l):a[n]=l}return a}function $(e){return e.map((e=>e.type===n.HY?$(e.children):e)).flat()}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(q.cache.has(e))return q.cache.get(e);const c=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return q.cache.set(e,c),c}function G(e,c){if(!c||"object"!==typeof c)return[];if(Array.isArray(c))return c.map((c=>G(e,c))).flat(1);if(Array.isArray(c.children))return c.children.map((c=>G(e,c))).flat(1);if(c.component){if(Object.getOwnPropertySymbols(c.component.provides).includes(e))return[c.component];if(c.component.subTree)return G(e,c.component.subTree).flat(1)}return[]}q.cache=new Map;var Y=new WeakMap,Z=new WeakMap;class X{constructor(e){r(this,Y,{writable:!0,value:[]}),r(this,Z,{writable:!0,value:0}),this.size=e}push(e){u(this,Y)[u(this,Z)]=e,s(this,Z,(u(this,Z)+1)%this.size)}values(){return u(this,Y).slice(u(this,Z)).concat(u(this,Y).slice(0,u(this,Z)))}}function K(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function J(e){const c=(0,a.qj)({}),t=(0,n.Fl)(e);return(0,n.m0)((()=>{for(const e in t.value)c[e]=t.value[e]}),{flush:"sync"}),(0,a.BK)(c)}function Q(e,c){return e.includes(c)}function ee(e){return e[2].toLowerCase()+e.slice(3)}const ce=()=>[Function,Array];function te(e,c){return c="on"+(0,i.kC)(c),!!(e[c]||e[`${c}Once`]||e[`${c}Capture`]||e[`${c}OnceCapture`]||e[`${c}CaptureOnce`])}function ae(e){for(var c=arguments.length,t=new Array(c>1?c-1:0),a=1;a<c;a++)t[a-1]=arguments[a];if(Array.isArray(e))for(const n of e)n(...t);else"function"===typeof e&&e(...t)}function ne(e){let c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${c?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(t)]}function ie(e,c,t){let a,n=e.indexOf(document.activeElement);const i="next"===c?1:-1;do{n+=i,a=e[n]}while((!a||null==a.offsetParent||!(t?.(a)??1))&&n<e.length&&n>=0);return a}function le(e,c){const t=ne(e);if(c)if("first"===c)t[0]?.focus();else if("last"===c)t.at(-1)?.focus();else if("number"===typeof c)t[c]?.focus();else{const a=ie(t,c);a?a.focus():le(e,"next"===c?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||t[0]?.focus()}function re(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function oe(){}function se(e,c){const t=l.BR&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${c})`);if(!t)return null;try{return!!e&&e.matches(c)}catch(a){return null}}function fe(e){return e.some((e=>!(0,n.lA)(e)||e.type!==n.sv&&(e.type!==n.HY||fe(e.children))))?e:null}},3766:function(e,c,t){function a(e,c){return t=>Object.keys(e).reduce(((a,n)=>{const i="object"===typeof e[n]&&null!=e[n]&&!Array.isArray(e[n]),l=i?e[n]:{type:e[n]};return a[n]=t&&n in t?{...l,default:t[n]}:l,c&&!a[n].source&&(a[n].source=c),a}),{})}t.d(c,{U:function(){return a}})}}]);
//# sourceMappingURL=chunk-vendors.1641ddd5.js.map