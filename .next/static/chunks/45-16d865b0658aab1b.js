(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{8792:function(t,e,i){"use strict";i.d(e,{default:function(){return n.a}});var s=i(5250),n=i.n(s)},8314:function(t,e,i){"use strict";var s=i(1811);function n(){}function r(){}r.resetWarningCache=n,t.exports=function(){function t(t,e,i,n,r,o){if(o!==s){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:n};return i.PropTypes=i,i}},4404:function(t,e,i){"use strict";t.exports=i(8314)()},1811:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},699:function(t,e,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(4090),n="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},r=s.useState,o=s.useEffect,l=s.useLayoutEffect,a=s.useDebugValue;function c(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!n(t,i)}catch(t){return!0}}var u=void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var i=e(),s=r({inst:{value:i,getSnapshot:e}}),n=s[0].inst,u=s[1];return l(function(){n.value=i,n.getSnapshot=e,c(n)&&u({inst:n})},[t,i,e]),o(function(){return c(n)&&u({inst:n}),t(function(){c(n)&&u({inst:n})})},[t]),a(i),i};e.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:u},220:function(t,e,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(4090),n=i(2362),r="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=n.useSyncExternalStore,l=s.useRef,a=s.useEffect,c=s.useMemo,u=s.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,i,s,n){var h=l(null);if(null===h.current){var p={hasValue:!1,value:null};h.current=p}else p=h.current;var f=o(t,(h=c(function(){function t(t){if(!a){if(a=!0,o=t,t=s(t),void 0!==n&&p.hasValue){var e=p.value;if(n(e,t))return l=e}return l=t}if(e=l,r(o,t))return e;var i=s(t);return void 0!==n&&n(e,i)?e:(o=t,l=i)}var o,l,a=!1,c=void 0===i?null:i;return[function(){return t(e())},null===c?void 0:function(){return t(c())}]},[e,i,s,n]))[0],h[1]);return a(function(){p.hasValue=!0,p.value=f},[f]),u(f),f}},2362:function(t,e,i){"use strict";t.exports=i(699)},9292:function(t,e,i){"use strict";t.exports=i(220)},8994:function(t){t.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},5217:function(t,e,i){"use strict";i.d(e,{pi:function(){return x}});var s=i(4090),n=new class{add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.callbacks.push({callback:t,priority:e}),this.callbacks.sort((t,e)=>t.priority-e.priority),()=>this.remove(t)}remove(t){this.callbacks=this.callbacks.filter(e=>{let{callback:i}=e;return t!==i})}constructor(){this.raf=t=>{requestAnimationFrame(this.raf);let e=t-this.now;this.now=t;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(t,e)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}},r=function(t,e,i){var s=null,n=null,r=function(){s&&(clearTimeout(s),n=null,s=null)},o=function(){if(!e)return t.apply(this,arguments);var o=this,l=arguments,a=i&&!s;if(r(),n=function(){t.apply(o,l)},s=setTimeout(function(){if(s=null,!a){var t=n;return n=null,t()}},e),a)return n()};return o.cancel=r,o.flush=function(){var t=n;r(),t&&t()},o};let o=t=>{let e;let i=new Set,s=(t,s)=>{let n="function"==typeof t?t(e):t;if(!Object.is(n,e)){let t=e;e=(null!=s?s:"object"!=typeof n||null===n)?n:Object.assign({},e,n),i.forEach(i=>i(e,t))}},n=()=>e,r={setState:s,getState:n,getInitialState:()=>o,subscribe:t=>(i.add(t),()=>i.delete(t)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}},o=e=t(s,n,r);return r},l=t=>t?o(t):o;var a=i(9292);let{useDebugValue:c}=s,{useSyncExternalStoreWithSelector:u}=a,h=!1,p=t=>t,f=t=>{"function"!=typeof t&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let e="function"==typeof t?l(t):t,i=(t,i)=>(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,i=arguments.length>2?arguments[2]:void 0;i&&!h&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),h=!0);let s=u(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,i);return c(s),s})(e,t,i);return Object.assign(i,e),i},d=t=>t?f(t):f;function m(){return(m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}let v=d(t=>({elements:[],addElement:e=>{t(t=>({elements:[...t.elements,e]}))},removeElement:e=>{t(t=>({elements:t.elements.filter(t=>t!==e)}))}})),g={emit(t){for(var e=arguments.length,i=Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];for(let e=0,s=this.events[t]||[],n=s.length;e<n;e++)s[e](...i)},events:{},on(t,e){var i;return((i=this.events)[t]||(i[t]=[])).push(e),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}}};function y(){let{ignoreTransform:t=!1,ignoreSticky:e=!0,lazy:i=!1,debounce:n=500,callback:o=()=>{}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[l,a]=(0,s.useState)(),[c,u]=(0,s.useState)({}),h=(0,s.useRef)({}),p=(0,s.useCallback)(t=>{let e=t.borderBoxSize[0].blockSize;h.current.width=t.borderBoxSize[0].inlineSize,h.current.height=e,o(h.current),i||u(m({},h.current))},[i]),[f]=function(){let{lazy:t=!1,debounce:e=500,box:i="border-box",callback:n=()=>{}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=(0,s.useRef)({}),[a,c]=(0,s.useState)({}),[u,h]=(0,s.useState)();(0,s.useEffect)(()=>{if(!u)return;let s=r(e=>{let[i]=e;l.current=i,n(i),t||c(i)},e,!0),o=new ResizeObserver(s);return o.observe(u,{box:i}),()=>{o.disconnect(),s.cancel()}},[u,t,e,i,...o]);let p=(0,s.useCallback)(()=>l.current,[]);return[h,t?p:a]}({lazy:!0,debounce:n,callback:p},[n,p]),d=v(t=>{let{elements:e}=t;return e}),y=(0,s.useCallback)(()=>{let s,n;if(l){if(e&&function t(e){"sticky"===getComputedStyle(e).position&&(e.style.setProperty("position","static"),e.dataset.sticky="true"),e.offsetParent&&t(e.offsetParent)}(l),t)s=function t(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=i+e.offsetTop;return e.offsetParent?t(e.offsetParent,s):s}(l),n=function t(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=i+e.offsetLeft;return e.offsetParent?t(e.offsetParent,s):s}(l);else{let t=l.getBoundingClientRect();s=t.top+function t(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=i+e.scrollTop;return e.offsetParent?t(e.offsetParent,s):s+window.scrollY}(l),n=t.left+function t(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=i+e.scrollLeft;return e.offsetParent?t(e.offsetParent,s):s+window.scrollX}(l)}e&&function t(e){var i;"true"===(null==e||null==(i=e.dataset)?void 0:i.sticky)&&(e.style.removeProperty("position"),e.dataset.sticky="true",delete e.dataset.sticky),e.parentNode&&t(e.parentNode)}(l),h.current.top=s,h.current.left=n,o(h.current),i||u(m({},h.current))}},[t,e,i,l]);(0,s.useEffect)(()=>{let t=r(y,n,!0),e=new ResizeObserver(t);return e.observe(document.body),d.forEach(t=>{e.observe(t)}),()=>{e.disconnect(),t.cancel()}},[d,n,y]);let S=(0,s.useCallback)(()=>h.current,[]);return(0,s.useEffect)(()=>g.on("resize",function(){if(!l)return;let t=l.getBoundingClientRect();h.current.width=t.width,h.current.height=t.height,y()}),[l,y]),[t=>{a(t),f(t)},i?S:c]}function S(t,e,i){return Math.max(t,Math.min(e,i))}y.observe=function(t){v.getState().addElement(t)},y.unobserve=function(t){v.getState().removeElement(t)},y.resize=function(){g.emit("resize")};class b{advance(t){var e,i,s,n;if(!this.isRunning)return;let r=!1;if(this.lerp)this.value=(i=this.value,s=this.to,(1-(n=1-Math.exp(-(60*this.lerp)*t)))*i+n*s),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=t;let e=S(0,this.currentTime/this.duration,1),i=(r=e>=1)?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}null===(e=this.onUpdate)||void 0===e||e.call(this,this.value,r),r&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,i){let{lerp:s=.1,duration:n=1,easing:r=t=>t,onStart:o,onUpdate:l}=i;this.from=this.value=t,this.to=e,this.lerp=s,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,null==o||o(),this.onUpdate=l}}class w{destroy(){var t,e;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(e=this.contentResizeObserver)||void 0===e||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}constructor({wrapper:t,content:e,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,i){var s;let t;let e=(s=this.resize,function(){let e=arguments,i=this;clearTimeout(t),t=setTimeout(function(){s.apply(i,e)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(e),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(e),this.contentResizeObserver.observe(this.content)}this.resize()}}class E{emit(t){for(var e=arguments.length,i=Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];let n=this.events[t]||[];for(let t=0,e=n.length;t<e;t++)n[t](...i)}on(t,e){var i;return(null===(i=this.events[t])||void 0===i?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}}off(t,e){var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}destroy(){this.events={}}constructor(){this.events={}}}class k{on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=2,normalizeWheel:s=!1}){this.onTouchStart=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,n=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:n},this.emitter.emit("scroll",{deltaX:s,deltaY:n,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i}=t;this.normalizeWheel&&(e=S(-100,e,100),i=S(-100,i,100)),e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.normalizeWheel=s,this.touchStart={x:null,y:null},this.emitter=new E,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}}class T{destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t){let{offset:e=0,immediate:i=!1,lock:s=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:o=!n&&this.options.lerp,onComplete:l=null,force:a=!1,programmatic:c=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):(null==t?void 0:t.nodeType)&&(i=t),i){if(this.options.wrapper!==window){let t=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}let s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=e,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=S(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(null==l||l(this));if(!c){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:n,easing:r,lerp:o,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(t,e)=>{this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==l||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var t;return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClass("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClass("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClass("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClass("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClass(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:a,easing:c=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:u=!a&&.1,infinite:h=!1,orientation:p="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:m=1,normalizeWheel:v=!1,autoResize:g=!0}={}){this.onVirtualScroll=t=>{let{deltaX:e,deltaY:i,event:s}=t;if(s.ctrlKey)return;let n=s.type.includes("touch"),r=s.type.includes("wheel");if(this.options.syncTouch&&n&&"touchstart"===s.type)return void this.reset();let o="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(0===e&&0===i||o)return;let l=s.composedPath();if((l=l.slice(0,l.indexOf(this.rootElement))).find(t=>{var e,i,s,o;return(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||n&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||r&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(o=t.classList)||void 0===o?void 0:o.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(this.isSmooth=this.options.syncTouch&&n||this.options.smoothWheel&&r,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();s.preventDefault();let a=i;"both"===this.options.gestureOrientation?a=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(a=e);let c=n&&this.options.syncTouch,u=n&&"touchend"===s.type&&Math.abs(a)>5;u&&(a=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+a,{programmatic:!1,...c?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()}},window.lenisVersion="1.0.34",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaMultiplier:l,duration:a,easing:c,lerp:u,infinite:h,gestureOrientation:f,orientation:p,touchMultiplier:d,wheelMultiplier:m,normalizeWheel:v,autoResize:g},this.animate=new b,this.emitter=new E,this.dimensions=new w({wrapper:t,content:e,autoResize:g}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=r||n,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new k(s,{touchMultiplier:d,wheelMultiplier:m,normalizeWheel:v}),this.virtualScroll.on("scroll",this.onVirtualScroll)}}var R=function(){for(var t,e,i=0,s="",n=arguments.length;i<n;i++)(t=arguments[i])&&(e=function t(e){var i,s,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e)){var r=e.length;for(i=0;i<r;i++)e[i]&&(s=t(e[i]))&&(n&&(n+=" "),n+=s)}else for(s in e)e[s]&&(n&&(n+=" "),n+=s)}return n}(t))&&(s&&(s+=" "),s+=e);return s},z=i(4404);function _(){return(_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}let C=(0,s.createContext)(),O=d(()=>({})),x=(0,s.forwardRef)((t,e)=>{let{children:i,root:r=!1,options:o={},autoRaf:l=!0,rafPriority:a=0,className:c,...u}=t,h=(0,s.useRef)(),p=(0,s.useRef)(),[f,d]=(0,s.useState)(),m=(0,s.useRef)([]),v=(0,s.useCallback)((t,e)=>{m.current.push({callback:t,priority:e}),m.current.sort((t,e)=>t.priority-e.priority)},[]),g=(0,s.useCallback)(t=>{m.current=m.current.filter(e=>e.callback!==t)},[]);(0,s.useImperativeHandle)(e,()=>({wrapper:h.current,content:p.current,lenis:f}),[f]),(0,s.useEffect)(()=>{let t=new T({...o,...!r&&{wrapper:h.current,content:p.current}});return d(t),()=>{t.destroy(),d(void 0)}},[r,JSON.stringify(o)]),function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,s.useEffect)(()=>{if(t)return n.add(t,e),()=>n.remove(t)},[t,e])}(t=>{l&&(null==f||f.raf(t))},a),(0,s.useEffect)(()=>{r&&f&&O.setState({lenis:f,addCallback:v,removeCallback:g})},[r,f,v,g]);let y=(0,s.useCallback)(t=>{for(let e=0;e<m.current.length;e++)m.current[e].callback(t)},[]);(0,s.useEffect)(()=>(null==f||f.on("scroll",y),()=>{null==f||f.off("scroll",y)}),[f,y]);let S=(0,s.useCallback)(()=>{h.current&&(h.current.className=R(null==f?void 0:f.className,c))},[f,c]);return(0,s.useEffect)(()=>(S(),null==f||f.on("className change",S),()=>{null==f||f.off("className change",S)}),[f,S]),s.createElement(C.Provider,{value:{lenis:f,addCallback:v,removeCallback:g}},r?i:s.createElement("div",_({ref:h,className:R(null==f?void 0:f.className,c)},u),s.createElement("div",{ref:p},i)))});x.displayName="ReactLenis",x.propTypes={children:z.node,root:z.bool,options:z.object,autoRaf:z.bool,rafPriority:z.number,className:z.string}},1348:function(t,e,i){"use strict";i.d(e,{M:function(){return v}});var s=i(4090),n=i(5526);function r(){let t=(0,s.useRef)(!1);return(0,n.L)(()=>(t.current=!0,()=>{t.current=!1}),[]),t}var o=i(1837),l=i(4561),a=i(2435);class c extends s.Component{getSnapshotBeforeUpdate(t){let e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){let t=this.props.sizeRef.current;t.height=e.offsetHeight||0,t.width=e.offsetWidth||0,t.top=e.offsetTop,t.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(t){let{children:e,isPresent:i}=t,n=(0,s.useId)(),r=(0,s.useRef)(null),o=(0,s.useRef)({width:0,height:0,top:0,left:0});return(0,s.useInsertionEffect)(()=>{let{width:t,height:e,top:s,left:l}=o.current;if(i||!r.current||!t||!e)return;r.current.dataset.motionPopId=n;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(n,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(e,"px !important;\n            top: ").concat(s,"px !important;\n            left: ").concat(l,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}},[i]),s.createElement(c,{isPresent:i,childRef:r,sizeRef:o},s.cloneElement(e,{ref:r}))}let h=t=>{let{children:e,initial:i,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:c,mode:h}=t,f=(0,a.h)(p),d=(0,s.useId)(),m=(0,s.useMemo)(()=>({id:d,initial:i,isPresent:n,custom:o,onExitComplete:t=>{for(let e of(f.set(t,!0),f.values()))if(!e)return;r&&r()},register:t=>(f.set(t,!1),()=>f.delete(t))}),c?void 0:[n]);return(0,s.useMemo)(()=>{f.forEach((t,e)=>f.set(e,!1))},[n]),s.useEffect(()=>{n||f.size||!r||r()},[n]),"popLayout"===h&&(e=s.createElement(u,{isPresent:n},e)),s.createElement(l.O.Provider,{value:m},e)};function p(){return new Map}var f=i(3856),d=i(9908);let m=t=>t.key||"",v=t=>{var e;let{children:i,custom:l,initial:a=!0,onExitComplete:c,exitBeforeEnter:u,presenceAffectsLayout:p=!0,mode:v="sync"}=t;(0,d.k)(!u,"Replace exitBeforeEnter with mode='wait'");let g=(0,s.useContext)(f.p).forceRender||function(){let t=r(),[e,i]=(0,s.useState)(0),n=(0,s.useCallback)(()=>{t.current&&i(e+1)},[e]);return[(0,s.useCallback)(()=>o.Wi.postRender(n),[n]),e]}()[0],y=r(),S=function(t){let e=[];return s.Children.forEach(t,t=>{(0,s.isValidElement)(t)&&e.push(t)}),e}(i),b=S,w=(0,s.useRef)(new Map).current,E=(0,s.useRef)(b),k=(0,s.useRef)(new Map).current,T=(0,s.useRef)(!0);if((0,n.L)(()=>{T.current=!1,function(t,e){t.forEach(t=>{let i=m(t);e.set(i,t)})}(S,k),E.current=b}),e=()=>{T.current=!0,k.clear(),w.clear()},(0,s.useEffect)(()=>()=>e(),[]),T.current)return s.createElement(s.Fragment,null,b.map(t=>s.createElement(h,{key:m(t),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:p,mode:v},t)));b=[...b];let R=E.current.map(m),z=S.map(m),_=R.length;for(let t=0;t<_;t++){let e=R[t];-1!==z.indexOf(e)||w.has(e)||w.set(e,void 0)}return"wait"===v&&w.size&&(b=[]),w.forEach((t,e)=>{if(-1!==z.indexOf(e))return;let i=k.get(e);if(!i)return;let n=R.indexOf(e),r=t;r||(r=s.createElement(h,{key:m(i),isPresent:!1,onExitComplete:()=>{w.delete(e);let t=Array.from(k.keys()).filter(t=>!z.includes(t));if(t.forEach(t=>k.delete(t)),E.current=S.filter(i=>{let s=m(i);return s===e||t.includes(s)}),!w.size){if(!1===y.current)return;g(),c&&c()}},custom:l,presenceAffectsLayout:p,mode:v},i),w.set(e,r)),b.splice(n,0,r)}),b=b.map(t=>{let e=t.key;return w.has(e)?t:s.createElement(h,{key:m(t),isPresent:!0,presenceAffectsLayout:p,mode:v},t)}),s.createElement(s.Fragment,null,w.size?b:b.map(t=>(0,s.cloneElement)(t)))}}}]);