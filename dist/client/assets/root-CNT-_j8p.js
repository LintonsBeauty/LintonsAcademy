import{w as ee}from"./with-props-BGqgUz1f.js";import{n as te,o as ne,r as re,l as h,M as ae,L as ie,S as oe,p as ue,O as se}from"./chunk-D52XG6IA-6zk5tNpU.js";var E={},L={},q={},k;function le(){return k||(k=1,function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var y=function(){for(var A=arguments.length,O=new Array(A),w=0;w<A;w++)O[w]=arguments[w];if(typeof window<"u"){var o;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(o=window).gtag.apply(o,O)}},b=y;c.default=b}(q)),q}var T={},H;function fe(){return H||(H=1,function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=w;var y=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function b(o){return o.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(u,f,s){return f>0&&f+u.length!==s.length&&u.search(y)>-1&&s.charAt(f-2)!==":"&&(s.charAt(f+u.length)!=="-"||s.charAt(f-1)==="-")&&s.charAt(f-1).search(/[^\s-]/)<0?u.toLowerCase():u.substr(1).search(/[A-Z]|\../)>-1?u:u.charAt(0).toUpperCase()+u.substr(1)})}function P(o){return typeof o=="string"&&o.indexOf("@")!==-1}var A="REDACTED (Potential Email Address)";function O(o){return P(o)?(console.warn("This arg looks like an email address, redacting."),A):o}function w(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=o||"";return u&&(s=b(o)),f&&(s=O(s)),s}}(T)),T}var Q;function ce(){return Q||(Q=1,function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=c.GA4=void 0;var y=w(le()),b=w(fe()),P=["eventCategory","eventAction","eventLabel","eventValue","hitType"],A=["title","location"],O=["page","hitType"];function w(r){return r&&r.__esModule?r:{default:r}}function o(r,e){if(r==null)return{};var t=u(r,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function u(r,e){if(r==null)return{};var t={},n=Object.keys(r),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(t[a]=r[a]);return t}function f(r){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(r)}function s(r){return C(r)||S(r)||x(r)||G()}function G(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function C(r){if(Array.isArray(r))return j(r)}function M(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function _(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?M(Object(t),!0).forEach(function(n){d(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function U(r,e){return K(r)||X(r,e)||x(r,e)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(r,e){if(r){if(typeof r=="string")return j(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(r,e)}}function j(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function X(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,a,i,l,g=[],p=!0,m=!1;try{if(i=(t=t.call(r)).next,e!==0)for(;!(p=(n=i.call(t)).done)&&(g.push(n.value),g.length!==e);p=!0);}catch(v){m=!0,a=v}finally{try{if(!p&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(m)throw a}}return g}}function K(r){if(Array.isArray(r))return r}function Y(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,D(n.key),n)}}function J(r,e,t){return e&&Z(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function d(r,e,t){return e=D(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function D(r){var e=N(r,"string");return f(e)==="symbol"?e:String(e)}function N(r,e){if(f(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(f(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var R=function(){function r(){var e=this;Y(this,r),d(this,"reset",function(){e.isInitialized=!1,e._testMode=!1,e._currentMeasurementId,e._hasLoadedGA=!1,e._isQueuing=!1,e._queueGtag=[]}),d(this,"_gtag",function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];e._testMode||e._isQueuing?e._queueGtag.push(n):y.default.apply(void 0,n)}),d(this,"_loadGA",function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!e._hasLoadedGA){var i=document.createElement("script");i.async=!0,i.src="".concat(a,"?id=").concat(t),n&&i.setAttribute("nonce",n),document.body.appendChild(i),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},e._hasLoadedGA=!0}}),d(this,"_toGtagOptions",function(t){if(t){var n={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},a=Object.entries(t).reduce(function(i,l){var g=U(l,2),p=g[0],m=g[1];return n[p]?i[n[p]]=m:i[p]=m,i},{});return a}}),d(this,"initialize",function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!t)throw new Error("Require GA_MEASUREMENT_ID");var a=typeof t=="string"?[{trackingId:t}]:t;e._currentMeasurementId=a[0].trackingId;var i=n.gaOptions,l=n.gtagOptions,g=n.nonce,p=n.testMode,m=p===void 0?!1:p,v=n.gtagUrl;if(e._testMode=m,m||e._loadGA(e._currentMeasurementId,g,v),e.isInitialized||(e._gtag("js",new Date),a.forEach(function(I){var F=_(_(_({},e._toGtagOptions(_(_({},i),I.gaOptions))),l),I.gtagOptions);Object.keys(F).length?e._gtag("config",I.trackingId,F):e._gtag("config",I.trackingId)})),e.isInitialized=!0,!m){var W=s(e._queueGtag);for(e._queueGtag=[],e._isQueuing=!1;W.length;){var z=W.shift();e._gtag.apply(e,s(z)),z[0]==="get"&&(e._isQueuing=!0)}}}),d(this,"set",function(t){if(!t){console.warn("`fieldsObject` is required in .set()");return}if(f(t)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(t).length===0&&console.warn("empty `fieldsObject` given to .set()"),e._gaCommand("set",t)}),d(this,"_gaCommandSendEvent",function(t,n,a,i,l){e._gtag("event",n,_(_({event_category:t,event_label:a,value:i},l&&{non_interaction:l.nonInteraction}),e._toGtagOptions(l)))}),d(this,"_gaCommandSendEventParameters",function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];if(typeof n[0]=="string")e._gaCommandSendEvent.apply(e,s(n.slice(1)));else{var i=n[0],l=i.eventCategory,g=i.eventAction,p=i.eventLabel,m=i.eventValue;i.hitType;var v=o(i,P);e._gaCommandSendEvent(l,g,p,m,v)}}),d(this,"_gaCommandSendTiming",function(t,n,a,i){e._gtag("event","timing_complete",{name:n,value:a,event_category:t,event_label:i})}),d(this,"_gaCommandSendPageview",function(t,n){if(n&&Object.keys(n).length){var a=e._toGtagOptions(n),i=a.title,l=a.location,g=o(a,A);e._gtag("event","page_view",_(_(_(_({},t&&{page_path:t}),i&&{page_title:i}),l&&{page_location:l}),g))}else t?e._gtag("event","page_view",{page_path:t}):e._gtag("event","page_view")}),d(this,"_gaCommandSendPageviewParameters",function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];if(typeof n[0]=="string")e._gaCommandSendPageview.apply(e,s(n.slice(1)));else{var i=n[0],l=i.page;i.hitType;var g=o(i,O);e._gaCommandSendPageview(l,g)}}),d(this,"_gaCommandSend",function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var i=typeof n[0]=="string"?n[0]:n[0].hitType;switch(i){case"event":e._gaCommandSendEventParameters.apply(e,n);break;case"pageview":e._gaCommandSendPageviewParameters.apply(e,n);break;case"timing":e._gaCommandSendTiming.apply(e,s(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(i));break;default:console.warn("Send command doesn't exist: ".concat(i))}}),d(this,"_gaCommandSet",function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];typeof n[0]=="string"&&(n[0]=d({},n[0],n[1])),e._gtag("set",e._toGtagOptions(n[0]))}),d(this,"_gaCommand",function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];switch(t){case"send":e._gaCommandSend.apply(e,a);break;case"set":e._gaCommandSet.apply(e,a);break;default:console.warn("Command doesn't exist: ".concat(t))}}),d(this,"ga",function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];if(typeof n[0]=="string")e._gaCommand.apply(e,n);else{var i=n[0];e._gtag("get",e._currentMeasurementId,"client_id",function(l){e._isQueuing=!1;var g=e._queueGtag;for(i({get:function(v){return v==="clientId"?l:v==="trackingId"?e._currentMeasurementId:v==="apiVersion"?"1":void 0}});g.length;){var p=g.shift();e._gtag.apply(e,s(p))}}),e._isQueuing=!0}return e.ga}),d(this,"event",function(t,n){if(typeof t=="string")e._gtag("event",t,e._toGtagOptions(n));else{var a=t.action,i=t.category,l=t.label,g=t.value,p=t.nonInteraction,m=t.transport;if(!i||!a){console.warn("args.category AND args.action are required in event()");return}var v={hitType:"event",eventCategory:(0,b.default)(i),eventAction:(0,b.default)(a)};l&&(v.eventLabel=(0,b.default)(l)),typeof g<"u"&&(typeof g!="number"?console.warn("Expected `args.value` arg to be a Number."):v.eventValue=g),typeof p<"u"&&(typeof p!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):v.nonInteraction=p),typeof m<"u"&&(typeof m!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(m)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),v.transport=m)),e._gaCommand("send",v)}}),d(this,"send",function(t){e._gaCommand("send",t)}),this.reset()}return J(r,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),r}();c.GA4=R;var $=new R;c.default=$}(L)),L}var V;function ge(){return V||(V=1,function(c){function y(o){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},y(o)}Object.defineProperty(c,"__esModule",{value:!0}),c.default=c.ReactGAImplementation=void 0;var b=A(ce());function P(o){if(typeof WeakMap!="function")return null;var u=new WeakMap,f=new WeakMap;return(P=function(G){return G?f:u})(o)}function A(o,u){if(o&&o.__esModule)return o;if(o===null||y(o)!=="object"&&typeof o!="function")return{default:o};var f=P(u);if(f&&f.has(o))return f.get(o);var s={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in o)if(S!=="default"&&Object.prototype.hasOwnProperty.call(o,S)){var C=G?Object.getOwnPropertyDescriptor(o,S):null;C&&(C.get||C.set)?Object.defineProperty(s,S,C):s[S]=o[S]}return s.default=o,f&&f.set(o,s),s}var O=b.GA4;c.ReactGAImplementation=O;var w=b.default;c.default=w}(E)),E}var de=ge();const pe=te(de),me="/assets/favicon-H1OfEtK8.ico",ve="/assets/index-CqQFYzHR.css",we=()=>[{rel:"stylesheet",href:ve},{rel:"icon",type:"image/png",href:me}];function _e({children:c}){const y=ne();return re.useEffect(()=>{pe.send({hitType:"pageview",page:y.pathname+y.search})},[y]),h.jsxs("html",{lang:"en",children:[h.jsxs("head",{children:[h.jsx("meta",{charSet:"utf-8"}),h.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),h.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-25Y1HDVXXB"}),h.jsx("script",{dangerouslySetInnerHTML:{__html:`
          window.dataLayer = window.dataLayer || [] function gtag(){' '}
          {dataLayer.push(arguments)}
          gtag('js', new Date()) gtag('config', 'G-25Y1HDVXXB')`}}),h.jsx(ae,{}),h.jsx(ie,{})]}),h.jsxs("body",{children:[c,h.jsx(oe,{}),h.jsx(ue,{})]})]})}const be=ee(function(){return h.jsx(se,{})});export{_e as Layout,be as default,we as links};
