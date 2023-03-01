"use strict";(self.webpackChunkWebResume=self.webpackChunkWebResume||[]).push([[3446],{3446:(Z,p,h)=>{h.r(p),h.d(p,{startInputShims:()=>E});var A=h(5861),L=h(8416),v=h(5730);const D=new WeakMap,w=(e,n,t,s=0,o=!1)=>{D.has(e)!==t&&(t?R(e,n,s,o):N(e,n))},P=e=>e===e.getRootNode().activeElement,R=(e,n,t,s=!1)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,s&&(r.disabled=!0),o.appendChild(r),D.set(e,r);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${i}px,${t}px,0) scale(0)`},N=(e,n)=>{const t=D.get(e);t&&(D.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},I="input, textarea, [no-blur], [contenteditable]",H=function(){var e=(0,A.Z)(function*(n,t,s,o,r,c=!1){if(!s&&!o)return;const i=((e,n,t)=>{var s;return((e,n,t,s)=>{const o=e.top,r=e.bottom,c=n.top,d=c+15,S=.75*Math.min(n.bottom,s-t)-r,l=d-o,m=Math.round(S<0?-S:l>0?-l:0),_=Math.min(m,o-c),u=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,u)),scrollPadding:t,inputSafeY:4-(o-d)}})((null!==(s=e.closest("ion-item,[ion-item]"))&&void 0!==s?s:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,s||o,r);if(s&&Math.abs(i.scrollAmount)<4)t.focus();else if(w(n,t,!0,i.inputSafeY,c),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let d;const f=function(){var l=(0,A.Z)(function*(){void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",f),s&&(yield(0,L.c)(s,0,i.scrollAmount,i.scrollDuration)),w(n,t,!1,i.inputSafeY),t.focus()});return function(){return l.apply(this,arguments)}}(),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",f)};if(s){const l=yield(0,L.g)(s);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",f),void(d=setTimeout(f,1e3))}f()}});return function(t,s,o,r,c){return e.apply(this,arguments)}}(),B="$ionPaddingTimer",C=(e,n)=>{var t,s;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(s=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===s?void 0:s.tagName))return;const o=(0,L.f)(e);if(null===o)return;const r=o[B];r&&clearTimeout(r),n>0?o.style.setProperty("--keyboard-offset",`${n}px`):o[B]=setTimeout(()=>{o.style.setProperty("--keyboard-offset","0px")},120)},E=(e,n)=>{const t=document,s="ios"===n,o="android"===n,r=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",s),d=e.getBoolean("inputBlurring",s),f=e.getBoolean("scrollPadding",!0),S=Array.from(t.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,m=new WeakMap,_=function(){var u=(0,A.Z)(function*(a){yield new Promise(y=>(0,v.c)(a,y));const T=a.shadowRoot||a,b=T.querySelector("input")||T.querySelector("textarea"),g=(0,L.f)(a),x=g?null:a.closest("ion-footer");if(b){if(g&&i&&!l.has(a)){const y=((e,n,t)=>{if(!t||!n)return()=>{};const s=i=>{P(n)&&w(e,n,i)},o=()=>w(e,n,!1),r=()=>s(!0),c=()=>s(!1);return(0,v.a)(t,"ionScrollStart",r),(0,v.a)(t,"ionScrollEnd",c),n.addEventListener("blur",o),()=>{(0,v.b)(t,"ionScrollStart",r),(0,v.b)(t,"ionScrollEnd",c),n.addEventListener("ionBlur",o)}})(a,b,g);l.set(a,y)}if("date"!==b.type&&"datetime-local"!==b.type&&(g||x)&&c&&!m.has(a)){const y=((e,n,t,s,o,r=!1)=>{let c;const i=f=>{c=(0,v.p)(f)},d=f=>{if(!c)return;const S=(0,v.p)(f);!((e,n,t)=>{if(n&&t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o>e*e}return!1})(6,c,S)&&!P(n)&&H(e,n,t,s,o,r)};return e.addEventListener("touchstart",i,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",i,!0),e.removeEventListener("touchend",d,!0)}})(a,b,g,x,r,o);m.set(a,y)}}});return function(T){return u.apply(this,arguments)}}();d&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",c=>{if(n)return void(n=!1);const i=t.activeElement;if(!i||i.matches(I))return;const d=c.target;d!==i&&(d.matches(I)||d.closest(I)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})(),f&&(e=>{const n=document;n.addEventListener("focusin",o=>{C(o.target,e)}),n.addEventListener("focusout",o=>{C(o.target,0)})})(r);for(const u of S)_(u);t.addEventListener("ionInputDidLoad",u=>{_(u.detail)}),t.addEventListener("ionInputDidUnload",u=>{(u=>{if(i){const a=l.get(u);a&&a(),l.delete(u)}if(c){const a=m.get(u);a&&a(),m.delete(u)}})(u.detail)})}}}]);