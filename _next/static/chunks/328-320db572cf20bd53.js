(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{8030:function(e,t,n){"use strict";var r,o;n.d(t,{nh:function(){return j}});n(488);var a=n(7294),i=n(3935);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;f.__PlasmicFetcherRegistry=[];var d=globalThis;null==d.__PlasmicComponentRegistry&&(d.__PlasmicComponentRegistry=[]);var p,v,m=globalThis;function y(e,t){return h(e,t)}null==m.__PlasmicContextRegistry&&(m.__PlasmicContextRegistry=[]);var h=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return y(e,t)})):t&&(0,a.isValidElement)(t)&&"string"!==typeof t?(0,a.cloneElement)(t):t},_=globalThis,b=null!=(p=null==_||null==(v=_.__Sub)?void 0:v.setRepeatedElementFn)?p:function(e){h=e};var g=(0,a.createContext)(void 0);function w(e,t){if(t){for(var n,r=e,o=s(t.split("."));!(n=o()).done;){var a,i=n.value;r=null==(a=r)?void 0:a[i]}return r}}function E(){return(0,a.useContext)(g)}var O=globalThis;null==O.__PlasmicHostVersion&&(O.__PlasmicHostVersion="2");var C=[],S=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,C.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function L(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var R=0;var A=(0,a.createContext)(!1);function P(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,u=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,l=function(){var e=(0,a.useState)(0)[1];return(0,a.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,a.useLayoutEffect)((function(){return C.push(l),function(){var e=C.indexOf(l);e>=0&&C.splice(e,1)}}),[l]),(0,a.useEffect)((function(){u&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=L();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[u,n]),(0,a.useEffect)((function(){if(!u&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=L()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[u]),!n)return null;if(r||o){var c=document.querySelector("#plasmic-app.__wab_user-body");return c||((c=document.createElement("div")).id="plasmic-app",c.classList.add("__wab_user-body"),document.body.appendChild(c)),(0,i.createPortal)((0,a.createElement)(I,{key:""+R},(0,a.createElement)(A.Provider,{value:r},S.get())),c,"plasmic-app")}return u&&window.parent===window?(0,a.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var j=function(e){var t=e.enableWebpackHmr,n=(0,a.useState)(null),r=n[0],o=n[1];return(0,a.useEffect)((function(){o((0,a.createElement)(P,null))}),[]),(0,a.createElement)(a.Fragment,null,!t&&(0,a.createElement)(M,null),r)};null==O.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),O.__Sub={React:r||(r=n.t(a,2)),ReactDOM:o||(o=n.t(i,2)),setPlasmicRootNode:function(e){R++,S.set(e)},registerRenderErrorListener:function(e){return T.push(e),function(){var t=T.indexOf(e);t>=0&&T.splice(t,1)}},repeatedElement:y,setRepeatedElementFn:b,PlasmicCanvasContext:A,DataProvider:function(e){var t,n,r=e.name,o=e.data,i=e.children,l=null!=(t=E())?t:{};return r?a.createElement(g.Provider,{value:u({},l,(n={},n[r]=o,n))},i):a.createElement(a.Fragment,null,i)},useDataEnv:E,useSelector:function(e){return w(E(),e)},useSelectors:function(e){void 0===e&&(e={});var t=E();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,w(t,r))})))},applySelector:w});var T=[];var I=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){T.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,a.createElement)("div",null,"Error: ",""+this.state.error.message):this.props.children},r}(a.Component);function M(){return null}},488:function(){if("undefined"!==typeof window){if(window.parent!==window)try{window.__REACT_DEVTOOLS_GLOBAL_HOOK__=window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__}catch(t){}if(!window.__REACT_DEVTOOLS_GLOBAL_HOOK__){var e=new Map;window.__REACT_DEVTOOLS_GLOBAL_HOOK__={supportsFiber:!0,renderers:e,inject:function(t){e.set(e.size+1,t)},onCommitFiberRoot:function(){},onCommitFiberUnmount:function(){}}}window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion||(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion="1")}},413:function(e,t,n){"use strict";n.d(t,{nk:function(){return a}});n(8030);var r=globalThis;null==r.__PlasmicComponentRegistry&&(r.__PlasmicComponentRegistry=[]);var o=n(7294);var a=o.forwardRef((function(e,t){return o.createElement("video",Object.assign({ref:t},e))}))},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(6273),l=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,v=e.children,m=e.replace,y=e.shallow,h=e.scroll,_=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,g=o(c.useIntersection({rootMargin:"200px"}),2),w=g[0],E=g[1],O=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=E&&n&&u.isLocalURL(d),t="undefined"!==typeof _?_:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,E,_,n,r]);var C={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,r,d,p,m,y,h,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof _?_:r&&r.locale,L=r&&r.isLocaleDomain&&u.getDomainLocale(p,S,r&&r.locales,r&&r.domainLocales);C.href=L||u.addBasePath(u.addLocale(p,S,r&&r.defaultLocale))}return i.default.cloneElement(t,C)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],v=o(a.useState(t?t.current:null),2),m=v[0],y=v[1],h=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[h,d]};var a=n(7294),i=n(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},7575:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}}]);