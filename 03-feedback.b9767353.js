function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=y();if(b(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?m(e):(o=r=void 0,u)}function h(){var e=y(),n=b(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(S,t),s?m(e):u}(l);if(d)return f=setTimeout(S,t),m(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=O(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},h.flush=function(){return void 0===f?u:T(y())},h}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const S=document.querySelector(".feedback-form"),T="feedback-form-state";S.addEventListener("input",e(t)((function(e){x={email:h.value,message:w.value},localStorage.setItem(T,JSON.stringify(x))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T),console.log(x)}));const{email:h,message:w}=S.elements;!function(){const e=JSON.parse(localStorage.getItem(T));e&&(h.value=e.email,w.value=e.message)}();let x=JSON.parse(localStorage.getItem(T))||{};
//# sourceMappingURL=03-feedback.b9767353.js.map
