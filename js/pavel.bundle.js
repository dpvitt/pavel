!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.pavel=e()}}(function(){return function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=n[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){(function(n,r,o,i,u,a,s,f,l){function d(){function e(){return console.log("called the test method"),!0}return{testMethod:e,carousel:c}}t.exports=d;var c=e("./modules/carousel.js")}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_49114eb1.js","/")},{"./modules/carousel.js":2,"1YiZ5S":6,buffer:3}],2:[function(e,t,n){(function(e,n,r,o,i,u,a,s,f){t.exports=function(){console.log("carousel has loaded!")}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/modules/carousel.js","/modules")},{"1YiZ5S":6,buffer:3}],3:[function(e,t,n){(function(t,r,o,i,u,a,s,f,l){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=j(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=Y(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=Y(e.length)}var u;o._useTypedArrays?u=o._augment(new Uint8Array(i)):(u=this,u.length=i,u._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)u._set(e);else if(Z(e))for(a=0;i>a;a++)o.isBuffer(e)?u[a]=e.readUInt8(a):u[a]=e[a];else if("string"===r)u.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;i>a;a++)u[a]=0;return u}function d(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var u=t.length;K(u%2===0,"Invalid hex string"),r>u/2&&(r=u/2);for(var a=0;r>a;a++){var s=parseInt(t.substr(2*a,2),16);K(!isNaN(s),"Invalid hex string"),e[n+a]=s}return o._charsWritten=2*a,a}function c(e,t,n,r){var i=o._charsWritten=R(q(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=R(O(t),e,n,r);return i}function g(e,t,n,r){return h(e,t,n,r)}function p(e,t,n,r){var i=o._charsWritten=R(P(t),e,n,r);return i}function y(e,t,n,r){var i=o._charsWritten=R(J(t),e,n,r);return i}function w(e,t,n){return 0===t&&n===e.length?Q.fromByteArray(e):Q.fromByteArray(e.slice(t,n))}function b(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;n>i;i++)e[i]<=127?(r+=X(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+X(o)}function m(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;n>o;o++)r+=String.fromCharCode(e[o]);return r}function v(e,t,n){return m(e,t,n)}function E(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r);for(var o="",i=t;n>i;i++)o+=W(e[i]);return o}function I(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function B(e,t,n,r){r||(K("boolean"==typeof n,"missing or invalid endian"),K(void 0!==t&&null!==t,"missing offset"),K(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],o>t+1&&(i|=e[t+1]<<8)):(i=e[t]<<8,o>t+1&&(i|=e[t+1])),i}}function A(e,t,n,r){r||(K("boolean"==typeof n,"missing or invalid endian"),K(void 0!==t&&null!==t,"missing offset"),K(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(o>t+2&&(i=e[t+2]<<16),o>t+1&&(i|=e[t+1]<<8),i|=e[t],o>t+3&&(i+=e[t+3]<<24>>>0)):(o>t+1&&(i=e[t+1]<<16),o>t+2&&(i|=e[t+2]<<8),o>t+3&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function _(e,t,n,r){r||(K("boolean"==typeof n,"missing or invalid endian"),K(void 0!==t&&null!==t,"missing offset"),K(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=B(e,t,n,!0),u=32768&i;return u?-1*(65535-i+1):i}}function L(e,t,n,r){r||(K("boolean"==typeof n,"missing or invalid endian"),K(void 0!==t&&null!==t,"missing offset"),K(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=A(e,t,n,!0),u=2147483648&i;return u?-1*(4294967295-i+1):i}}function U(e,t,n,r){return r||(K("boolean"==typeof n,"missing or invalid endian"),K(t+3<e.length,"Trying to read beyond buffer length")),V.read(e,t,n,23,4)}function S(e,t,n,r){return r||(K("boolean"==typeof n,"missing or invalid endian"),K(t+7<e.length,"Trying to read beyond buffer length")),V.read(e,t,n,52,8)}function C(e,t,n,r,o){o||(K(void 0!==t&&null!==t,"missing value"),K("boolean"==typeof r,"missing or invalid endian"),K(void 0!==n&&null!==n,"missing offset"),K(n+1<e.length,"trying to write beyond buffer length"),z(t,65535));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,2);a>u;u++)e[n+u]=(t&255<<8*(r?u:1-u))>>>8*(r?u:1-u)}function k(e,t,n,r,o){o||(K(void 0!==t&&null!==t,"missing value"),K("boolean"==typeof r,"missing or invalid endian"),K(void 0!==n&&null!==n,"missing offset"),K(n+3<e.length,"trying to write beyond buffer length"),z(t,4294967295));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,4);a>u;u++)e[n+u]=t>>>8*(r?u:3-u)&255}function T(e,t,n,r,o){o||(K(void 0!==t&&null!==t,"missing value"),K("boolean"==typeof r,"missing or invalid endian"),K(void 0!==n&&null!==n,"missing offset"),K(n+1<e.length,"Trying to write beyond buffer length"),G(t,32767,-32768));var i=e.length;n>=i||(t>=0?C(e,t,n,r,o):C(e,65535+t+1,n,r,o))}function M(e,t,n,r,o){o||(K(void 0!==t&&null!==t,"missing value"),K("boolean"==typeof r,"missing or invalid endian"),K(void 0!==n&&null!==n,"missing offset"),K(n+3<e.length,"Trying to write beyond buffer length"),G(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?k(e,t,n,r,o):k(e,4294967295+t+1,n,r,o))}function x(e,t,n,r,o){o||(K(void 0!==t&&null!==t,"missing value"),K("boolean"==typeof r,"missing or invalid endian"),K(void 0!==n&&null!==n,"missing offset"),K(n+3<e.length,"Trying to write beyond buffer length"),H(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||V.write(e,t,n,r,23,4)}function N(e,t,n,r,o){o||(K(void 0!==t&&null!==t,"missing value"),K("boolean"==typeof r,"missing or invalid endian"),K(void 0!==n&&null!==n,"missing offset"),K(n+7<e.length,"Trying to write beyond buffer length"),H(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||V.write(e,t,n,r,52,8)}function j(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function F(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function Y(e){return e=~~Math.ceil(+e),0>e?0:e}function D(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function Z(e){return D(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function W(e){return 16>e?"0"+e.toString(16):e.toString(16)}function q(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(127>=r)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&57343>=r&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}}return t}function O(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function J(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function P(e){return Q.toByteArray(e)}function R(e,t,n,r){for(var o=0;r>o&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function X(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function z(e,t){K("number"==typeof e,"cannot write a non-number as a number"),K(e>=0,"specified a negative value for writing an unsigned value"),K(t>=e,"value is larger than maximum value for type"),K(Math.floor(e)===e,"value has a fractional component")}function G(e,t,n){K("number"==typeof e,"cannot write a non-number as a number"),K(t>=e,"value larger than maximum allowed value"),K(e>=n,"value smaller than minimum allowed value"),K(Math.floor(e)===e,"value has a fractional component")}function H(e,t,n){K("number"==typeof e,"cannot write a non-number as a number"),K(t>=e,"value larger than maximum allowed value"),K(e>=n,"value smaller than minimum allowed value")}function K(e,t){if(!e)throw new Error(t||"Failed assertion")}var Q=e("base64-js"),V=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=q(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=P(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(K(D(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var u=e[n];u.copy(r,i),i+=u.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n),n>i&&(n=i)):n=i,r=String(r||"utf8").toLowerCase();var u;switch(r){case"hex":u=d(this,e,t,n);break;case"utf8":case"utf-8":u=c(this,e,t,n);break;case"ascii":u=h(this,e,t,n);break;case"binary":u=g(this,e,t,n);break;case"base64":u=p(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":u=y(this,e,t,n);break;default:throw new Error("Unknown encoding")}return u},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=E(r,t,n);break;case"utf8":case"utf-8":o=b(r,t,n);break;case"ascii":o=m(r,t,n);break;case"binary":o=v(r,t,n);break;case"base64":o=w(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=I(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){K(r>=n,"sourceEnd < sourceStart"),K(t>=0&&t<e.length,"targetStart out of bounds"),K(n>=0&&n<i.length,"sourceStart out of bounds"),K(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var u=r-n;if(100>u||!o._useTypedArrays)for(var a=0;u>a;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+u),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=F(e,n,0),t=F(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),u=0;r>u;u++)i[u]=this[u+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){return t||(K(void 0!==e&&null!==e,"missing offset"),K(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},o.prototype.readUInt16LE=function(e,t){return B(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return B(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return A(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(K(void 0!==e&&null!==e,"missing offset"),K(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return _(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return _(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return L(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return U(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return U(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return S(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return S(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(K(void 0!==e&&null!==e,"missing value"),K(void 0!==t&&null!==t,"missing offset"),K(t<this.length,"trying to write beyond buffer length"),z(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(K(void 0!==e&&null!==e,"missing value"),K(void 0!==t&&null!==t,"missing offset"),K(t<this.length,"Trying to write beyond buffer length"),G(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){N(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){N(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),K("number"==typeof e&&!isNaN(e),"value is not a number"),K(n>=t,"end < start"),n!==t&&0!==this.length){K(t>=0&&t<this.length,"start out of bounds"),K(n>=0&&n<=this.length,"end out of bounds");for(var r=t;n>r;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;t>r;r++)if(e[r]=W(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;n>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var $=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=$.get,e.set=$.set,e.write=$.write,e.toString=$.toString,e.toLocaleString=$.toString,e.toJSON=$.toJSON,e.copy=$.copy,e.slice=$.slice,e.readUInt8=$.readUInt8,e.readUInt16LE=$.readUInt16LE,e.readUInt16BE=$.readUInt16BE,e.readUInt32LE=$.readUInt32LE,e.readUInt32BE=$.readUInt32BE,e.readInt8=$.readInt8,e.readInt16LE=$.readInt16LE,e.readInt16BE=$.readInt16BE,e.readInt32LE=$.readInt32LE,e.readInt32BE=$.readInt32BE,e.readFloatLE=$.readFloatLE,e.readFloatBE=$.readFloatBE,e.readDoubleLE=$.readDoubleLE,e.readDoubleBE=$.readDoubleBE,e.writeUInt8=$.writeUInt8,e.writeUInt16LE=$.writeUInt16LE,e.writeUInt16BE=$.writeUInt16BE,e.writeUInt32LE=$.writeUInt32LE,e.writeUInt32BE=$.writeUInt32BE,e.writeInt8=$.writeInt8,e.writeInt16LE=$.writeInt16LE,e.writeInt16BE=$.writeInt16BE,e.writeInt32LE=$.writeInt32LE,e.writeInt32BE=$.writeInt32BE,e.writeFloatLE=$.writeFloatLE,e.writeFloatBE=$.writeFloatBE,e.writeDoubleLE=$.writeDoubleLE,e.writeDoubleBE=$.writeDoubleBE,e.fill=$.fill,e.inspect=$.inspect,e.toArrayBuffer=$.toArrayBuffer,e}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"1YiZ5S":6,"base64-js":4,buffer:3,ieee754:5}],4:[function(e,t,n){(function(e,t,r,o,i,u,a,s,f){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===d?62:t===u||t===c?63:a>t?-1:a+10>t?t-a+26+26:f+26>t?t-f:s+26>t?t-s+26:void 0}function n(e){function n(e){f[d++]=e}var r,i,u,a,s,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;s="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,f=new o(3*e.length/4-s),u=s>0?e.length-4:e.length;var d=0;for(r=0,i=0;u>r;r+=4,i+=3)a=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===s?(a=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&a)):1===s&&(a=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(a>>8&255),n(255&a)),f}function r(e){function t(e){return l.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,u=e.length%3,a="";for(r=0,i=e.length-u;i>r;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=n(o);switch(u){case 1:o=e[e.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),u="/".charCodeAt(0),a="0".charCodeAt(0),s="a".charCodeAt(0),f="A".charCodeAt(0),d="-".charCodeAt(0),c="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"1YiZ5S":6,buffer:3}],5:[function(e,t,n){(function(e,t,r,o,i,u,a,s,f){n.read=function(e,t,n,r,o){var i,u,a=8*o-r-1,s=(1<<a)-1,f=s>>1,l=-7,d=n?o-1:0,c=n?-1:1,h=e[t+d];for(d+=c,i=h&(1<<-l)-1,h>>=-l,l+=a;l>0;i=256*i+e[t+d],d+=c,l-=8);for(u=i&(1<<-l)-1,i>>=-l,l+=r;l>0;u=256*u+e[t+d],d+=c,l-=8);if(0===i)i=1-f;else{if(i===s)return u?NaN:(h?-1:1)*(1/0);u+=Math.pow(2,r),i-=f}return(h?-1:1)*u*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var u,a,s,f=8*i-o-1,l=(1<<f)-1,d=l>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,g=r?1:-1,p=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,u=l):(u=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-u))<1&&(u--,s*=2),t+=u+d>=1?c/s:c*Math.pow(2,1-d),t*s>=2&&(u++,s/=2),u+d>=l?(a=0,u=l):u+d>=1?(a=(t*s-1)*Math.pow(2,o),u+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,o),u=0));o>=8;e[n+h]=255&a,h+=g,a/=256,o-=8);for(u=u<<o|a,f+=o;f>0;e[n+h]=255&u,h+=g,u/=256,f-=8);e[n+h-g]|=128*p}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"1YiZ5S":6,buffer:3}],6:[function(e,t,n){(function(e,n,r,o,i,u,a,s,f){function l(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=l,e.addListener=l,e.once=l,e.off=l,e.removeListener=l,e.removeAllListeners=l,e.emit=l,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{"1YiZ5S":6,buffer:3}]},{},[1])(1)});