(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2623:e=>{e.exports={style:{fontFamily:"'__Russo_One_a58bd4', '__Russo_One_Fallback_a58bd4'",fontWeight:400,fontStyle:"normal"},className:"__className_a58bd4"}},3152:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(5480),r(2029),r(5866);var n=r(3191),s=r(8716),a=r(7922),o=r.n(a),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"D:\\Программирование\\rs-school\\sk85web-REACT2024Q3\\class-components\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"D:\\Программирование\\rs-school\\sk85web-REACT2024Q3\\class-components\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\Программирование\\rs-school\\sk85web-REACT2024Q3\\class-components\\src\\app\\page.tsx"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8754:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5609:(e,t,r)=>{Promise.resolve().then(r.bind(r,775))},9209:(e,t,r)=>{Promise.resolve().then(r.bind(r,6813))},4542:function(e,t){var r,n,s;n=[],void 0!==(s="function"==typeof(r=function(){"use strict";function t(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){o(n.response,t,r)},n.onerror=function(){console.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,a,o){var i=s.URL||s.webkitURL,l=document.createElement("a");a=a||e.name||"download",l.download=a,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?n(l):r(l.href)?t(e,a,o):n(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){n(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,s,a){if(s=s||e.name||"download","string"!=typeof e){var o;navigator.msSaveOrOpenBlob((void 0===(o=a)?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),s)}else if(r(e))t(e,s,a);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){n(i)})}}:function(e,r,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,r,n);var i="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l||a)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,p=u.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});s.saveAs=o.saveAs=o,e.exports=o})?r.apply(t,n):r)&&(e.exports=s)},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(1174),s=r(8374),a=r(326),o=s._(r(7577)),i=n._(r(962)),l=n._(r(815)),c=r(3078),d=r(5248),u=r(1206);r(576);let p=r(131),h=n._(r(6820)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,s,a,o){let i=null==e?void 0:e.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:s,height:i,width:l,decoding:c,className:d,style:u,fetchPriority:p,placeholder:h,loading:f,unoptimized:v,fill:x,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:w,sizesInput:C,onLoad:_,onError:S,...P}=e;return(0,a.jsx)("img",{...P,...g(p),loading:f,width:l,height:i,decoding:c,"data-nimg":x?"fill":"1",className:d,style:u,sizes:s,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,h,b,y,j,v,C))},[r,h,b,y,j,S,v,C,t]),onLoad:e=>{m(e.currentTarget,h,b,y,j,v,C)},onError:e=>{w(!0),"empty"!==h&&j(!0),S&&S(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),n=(0,o.useContext)(u.ImageConfigContext),s=(0,o.useMemo)(()=>{let e=f||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:l}=e,m=(0,o.useRef)(i);(0,o.useEffect)(()=>{m.current=i},[i]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[b,y]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!1),{props:C,meta:_}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:s,blurComplete:b,showAltText:j});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{...C,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),_.priority?(0,a.jsx)(x,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return i}}),r(576);let n=r(380),s=r(5248);function a(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function i(e,t){var r;let i,l,c,{src:d,sizes:u,unoptimized:p=!1,priority:h=!1,loading:f,className:m,quality:g,width:v,height:x,fill:b=!1,style:y,overrideSrc:j,onLoad:w,onLoadingComplete:C,placeholder:_="empty",blurDataURL:S,fetchPriority:P,layout:E,objectFit:k,objectPosition:N,lazyBoundary:O,lazyRoot:A,...R}=e,{imgConf:M,showAltText:I,blurComplete:T,defaultLoader:D}=t,$=M||s.imageConfigDefault;if("allSizes"in $)i=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t);i={...$,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let z=R.loader||D;delete R.loader,delete R.srcSet;let L="__next_img_default"in z;if(L){if("custom"===i.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!u&&(u=t)}let U="",q=o(v),B=o(x);if("object"==typeof(r=d)&&(a(r)||void 0!==r.src)){let e=a(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,U=e.src,!b){if(q||B){if(q&&!B){let t=q/e.width;B=Math.round(e.height*t)}else if(!q&&B){let t=B/e.height;q=Math.round(e.width*t)}}else q=e.width,B=e.height}}let F=!h&&("lazy"===f||void 0===f);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,F=!1),i.unoptimized&&(p=!0),L&&d.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(p=!0),h&&(P="high");let G=o(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:N}:{},I?{}:{color:"transparent"},y),W=T||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:B,blurWidth:l,blurHeight:c,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+_+'")',V=W?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:s,quality:a,sizes:o,loader:i}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>i({config:t,src:r,quality:a,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:i({config:t,src:r,quality:a,width:l[d]})}}({config:i,src:d,unoptimized:p,width:q,quality:G,sizes:u,loader:z});return{props:{...R,loading:F?"lazy":f,fetchPriority:P,width:q,height:B,decoding:"async",className:m,style:{...H,...V},sizes:J.sizes,srcSet:J.srcSet,src:j||J.src},meta:{unoptimized:p,priority:h,placeholder:_,fill:b}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return u}});let n=r(1174),s=r(8374),a=r(326),o=s._(r(7577)),i=n._(r(8003)),l=r(3484),c=r(1157),d=r(8710);function u(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let h=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return s=>{let a=!0,o=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){o=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=s.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return(0,a.jsx)(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:s,blurDataURL:a,objectFit:o}=e,i=n?40*n:t,l=s?40*s:r,c=i&&l?"viewBox='0 0 "+i+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return i}});let n=r(1174),s=r(3078),a=r(2481),o=n._(r(6820));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=a.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(7577),s=()=>{},a=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeContext:()=>b,default:()=>y});var n=r(326),s=r(6465),a=r.n(s),o=r(7577);r(3824);var i=r(5842),l=r(8860);let c=(0,l.oM)({name:"search",initialState:{value:""},reducers:{setValue:(e,t)=>{e.value=t.payload}}}),{setValue:d}=c.actions,u=c.reducer;var p=r(4685),h=r(5735),f=r(5263);let m=(0,l.xC)({reducer:{search:u,card:p.ZP,ui:h.ZP,[f.ao.reducerPath]:f.ao.reducer},middleware:e=>e().concat(f.ao.middleware)}),g=({children:e})=>n.jsx(i.zt,{store:m,children:e});var v=r(7107);r(3968);class x extends o.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){let{hasError:e}=this.state;if(e)return(0,n.jsxs)("div",{children:[n.jsx("h1",{children:"Something went wrong."}),n.jsx("button",{className:"reload-btn",type:"button",onClick:()=>window.location.reload(),children:"Reload page"})]});let{children:t}=this.props;return t}}let b=(0,o.createContext)({theme:v.yU.DARK,setTheme:()=>{}});function y({children:e}){let[t,r]=(0,o.useState)(v.yU.DARK);return n.jsx("html",{lang:"en",children:n.jsx(b.Provider,{value:{theme:t,setTheme:r},children:(0,n.jsxs)(x,{children:[n.jsx("head",{children:n.jsx("title",{children:"Star Wars"})}),n.jsx("body",{className:a().className,children:n.jsx(g,{children:n.jsx("main",{id:"root",children:e})})})]})})})}},6813:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L});var n=r(326),s=r(7577),a=r(5842),o=r(9404),i=r.n(o),l={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function c(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return l[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var d=function(){return(d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r},p=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var s=document.createElement("style");document.head.appendChild(s);var a=s.sheet,o="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(o,0),n}("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");let h=function(e){var t=e.loading,r=e.color,n=void 0===r?"#000000":r,a=e.speedMultiplier,o=e.cssOverride,i=e.size,l=void 0===i?35:i,h=u(e,["loading","color","speedMultiplier","cssOverride","size"]),f=d({background:"transparent !important",width:c(l),height:c(l),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(p," ").concat(.75/(void 0===a?1:a),"s 0s infinite linear"),animationFillMode:"both"},void 0===o?{}:o);return void 0===t||t?s.createElement("span",d({style:f},h)):null};r(4540);var f=r(7107),m=r(9029),g=r.n(m);r(6698);var v=r(775),x=r(4685);r(9347);let b=({isSelected:e=!1})=>n.jsx("span",{className:"heart-icon",children:n.jsx("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:e?"#20207f":"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z",stroke:e?"#20207f":"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),y=({card:e})=>{let{theme:t}=(0,s.useContext)(v.ThemeContext),r=(0,a.I0)(),{selectedCards:o}=(0,a.v9)(e=>e.card),i=(0,s.useMemo)(()=>{let t=e.url.split("/").filter(Boolean);return t[t.length-1]},[e]),l=e=>{r((0,x.JV)(e))},c=e=>{r((0,x.q2)(e))},d=o.some(t=>t.name===e.name);return(0,n.jsxs)("div",{"data-testid":"card-item",className:`card__item card__item_${t} `,onClick:()=>l(i),children:[n.jsx("span",{className:"card__item-select-block",onClick:t=>{t.preventDefault(),t.stopPropagation(),c(e)},children:n.jsx(b,{isSelected:d})}),n.jsx("h2",{className:"card__title",children:e.name}),(0,n.jsxs)("div",{className:"card__content",children:[(0,n.jsxs)("p",{className:"card__description",children:["Hi! My name is ",e.name,". I was born in ",e.birth_year," year. My gender is"," ",e.gender]}),n.jsx(g(),{className:"card__item-img",src:`https://starwars-visualguide.com/assets/img/characters/${i}.jpg`,alt:e.name,width:200,height:300})]})]})};var j=r(5263);let w={colors:{dark:f.yU.DARK,light:f.yU.LIGHT}},C=(0,s.createContext)(w),_=()=>(0,s.useContext)(C),S=()=>{let{currentPage:e}=(0,a.v9)(e=>e.ui),t=_(),r=(0,a.I0)(),{data:o,isLoading:l,error:c}=(0,j.PA)({query:"",currentPage:e}),d=o?.results||[];return((0,s.useEffect)(()=>{d.length>0&&r((0,x.eJ)(d))},[d,e,r]),l)?n.jsx(h,{color:"#3498db",size:50}):c?n.jsx("div",{children:"Error loading cards"}):d.length&&!l?n.jsx("div",{className:"result",children:d.map(t=>n.jsx(i(),{className:"card-link",href:`/?frontpage=${e}&details=${t.name}`,children:n.jsx(y,{card:t})},t.name))}):n.jsx("h3",{className:`title_${t}`,children:"Nothing was founded"})};var P=r(2623),E=r.n(P),k=r(7389);r(7869);let N=e=>{let[t,r]=(0,s.useState)("");return(0,s.useEffect)(()=>{},[e]),(0,s.useEffect)(()=>{localStorage.setItem(e,t)},[e,t]),[t,r]};var O=r(5735);let A=()=>{let{theme:e}=(0,s.useContext)(v.ThemeContext),t=(0,k.useRouter)(),r=(0,a.I0)(),{currentPage:o}=(0,a.v9)(e=>e.ui),[i,l]=N(f.bK),[c,d]=(0,s.useState)(i),{data:u,error:p}=(0,j.PA)({query:i,currentPage:o});(0,s.useEffect)(()=>{u&&r((0,x.eJ)(u.results))},[u,r]);let h=()=>{let e=c?.trim();l(e),r((0,O.D4)(1)),t.push(`?search=${e}&page=${o}`)};if(p)throw Error("test error");return(0,n.jsxs)("div",{className:"search",children:[n.jsx("input",{type:"text",value:c||"",onChange:e=>{let{value:t}=e.target;d(t)},placeholder:"Search...",onKeyDown:e=>{"Enter"===e.key&&h()},className:`search-input theme-${e}`}),n.jsx("button",{type:"button",onClick:h,className:`theme-${e} search-btn`,children:"Search"})]})};r(9052);let R=()=>{let{setTheme:e}=(0,s.useContext)(v.ThemeContext),[t,r]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:"theme-switch-container",children:[n.jsx("input",{type:"checkbox",className:"theme-switch-checkbox",id:"theme-switch",checked:t,onChange:()=>{let n=t?f.yU.DARK:f.yU.LIGHT;r(!t),e(n)}}),(0,n.jsxs)("label",{className:"theme-switch-label",htmlFor:"theme-switch",children:[(0,n.jsxs)("div",{className:"theme-icons-block",children:[n.jsx("span",{className:"theme-switch-icon",children:"\uD83C\uDF19"}),n.jsx("span",{className:"theme-switch-icon",children:"☀️"})]}),n.jsx("div",{className:"theme-switch-ball"})]})]})};r(4996);let M=()=>{let{theme:e}=(0,s.useContext)(v.ThemeContext),t=(0,a.I0)();return(0,n.jsxs)("div",{children:[n.jsx("h1",{className:`${E().className} header__title header__title_${e}`,children:"Star Wars World"}),(0,n.jsxs)("div",{className:"search-field",children:[n.jsx(A,{}),n.jsx("button",{type:"button",onClick:()=>{throw t((0,O.nB)(!0)),Error()},className:`theme-${e} error-btn`,children:"Throw Error"}),n.jsx(R,{})]})]})};r(9643);let I=()=>{let e=(0,k.useRouter)(),{theme:t}=(0,s.useContext)(v.ThemeContext),{currentPage:r}=(0,a.v9)(e=>e.ui),o=(0,a.I0)(),{data:i,isLoading:l}=(0,j.PA)({query:"",currentPage:r}),c=i?Math.ceil(i.count/f.PS):0,d=t=>{o((0,O.D4)(t)),e.push(`?page=${t}`)};return(0,n.jsxs)("div",{className:"pagination",children:[n.jsx("button",{type:"button",className:`nav-button theme-${t}`,onClick:()=>d(1),disabled:1===r||l,children:"First"}),n.jsx("button",{type:"button",className:`nav-button theme-${t}`,onClick:()=>d(r-1),disabled:1===r||l,children:"Prev"}),(()=>{let e=[];for(let s=1;s<=c;s++)e.push(n.jsx("button",{type:"button",className:`page-button theme-${t} ${s===r?"active":""}`,onClick:()=>d(s),children:s},s));return e})(),n.jsx("button",{type:"button",className:`nav-button theme-${t}`,onClick:()=>d(r+1),disabled:r===c||l,children:"Next"}),n.jsx("button",{type:"button",className:`nav-button theme-${t}`,onClick:()=>d(c),disabled:r===c||l,children:"Last"})]})};var T=r(4542);r(5633);let D=({text:e,onClick:t})=>{let{theme:r}=(0,s.useContext)(v.ThemeContext);return n.jsx("button",{type:"button",onClick:t,className:`flayoutBtn theme-${r}`,children:e})};r(9061);let $=()=>{let{theme:e}=(0,s.useContext)(v.ThemeContext),{selectedCards:t}=(0,a.v9)(e=>e.card),r=(0,a.I0)(),[o,i]=(0,s.useState)(!1);if((0,s.useEffect)(()=>{t.length>0?i(!0):i(!1)},[t]),0===t.length)return null;let l=e=>{let t=e.split("/");return t[t.length-3]};return n.jsx("div",{className:"flayout",children:(0,n.jsxs)("div",{className:`flayout-wrapper  theme-${e} ${o?"show":""}`,children:[n.jsx("h2",{children:1===t.length?"1 hero is selected":`${t.length} heroes are selected`}),(0,n.jsxs)("div",{className:"flayout__btns",children:[n.jsx(D,{text:"Unselect All",onClick:()=>{r((0,x.q2)([]))}}),n.jsx(D,{text:"Download",onClick:()=>{let e=t.map(e=>{let{name:t,url:r,...n}=e;return`${t}, ${r}, ${JSON.stringify(n)}`}).join("\n"),r=t.length>0?l(t[0].url):"items",n=new Blob([e],{type:"text/csv;charset=utf-8;"}),s=`${t.length}_${r}.csv`;(0,T.saveAs)(n,s)}})]})]})})};r(7830);let z=()=>{let e=(0,a.I0)(),t=(0,k.useRouter)(),{cardId:r}=(0,a.v9)(e=>e.card),{currentPage:s}=(0,a.v9)(e=>e.ui),{data:o,isLoading:i,error:l}=(0,j.p8)(r);if(i)return n.jsx(h,{color:"#3498db",size:50});if(l)return n.jsx("div",{className:"detail-card-info",children:"Something went wrong"});if(!o)return n.jsx("div",{className:"detail-card-info",children:"Detail info not found."});let c=o.url.split("/")[5];return(0,n.jsxs)("div",{className:"detail-card-info",children:[n.jsx("div",{className:"detail-card-info-close",children:n.jsx("button",{type:"button",onClick:()=>{e((0,x.JV)(null)),t.push(`?page=${s}`)},"aria-label":"Close",children:"X"})}),(0,n.jsxs)("div",{className:"detail-header",children:[n.jsx(g(),{src:`https://starwars-visualguide.com/assets/img/characters/${c}.jpg`,alt:o.name,width:500,height:500}),n.jsx("h2",{className:"detail-info-name",children:o.name})]}),(0,n.jsxs)("div",{className:"detail-content",children:[n.jsx("h3",{children:"BioCard:"}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Height:"})," ",o.height]}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Mass:"})," ",o.mass]}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Hair color:"})," ",o.hair_color]}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Skin color:"})," ",o.skin_color]}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Eye color:"})," ",o.eye_color]}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Birth year:"})," ",o.birth_year]}),(0,n.jsxs)("div",{children:[n.jsx("strong",{children:"Created:"})," ",o.created]})]})]})},L=()=>{let e=(0,s.useRef)(null),t=(0,a.I0)(),{cardId:r,selectedCards:o}=(0,a.v9)(e=>e.card);return(0,n.jsxs)("div",{className:"app",children:[n.jsx(M,{}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("div",{className:"results-field",ref:e,onClick:r=>{r.target===e.current&&t((0,x.JV)(null))},children:[n.jsx(S,{}),n.jsx(I,{}),o&&n.jsx($,{})]}),r&&n.jsx(z,{})]})]})}},5263:(e,t,r)=>{"use strict";r.d(t,{PA:()=>i,ao:()=>o,p8:()=>l});var n=r(9119),s=r(7509),a=r(7107);let o=(0,n.LC)({reducerPath:"cardAPI",baseQuery:(0,s.ni)({baseUrl:a._n}),endpoints:e=>({getAllCards:e.query({query:({query:e,currentPage:t})=>({url:"/people/",params:{search:e,page:t}})}),getCardById:e.query({query:e=>({url:`/people/${e}/`})})})}),{useGetAllCardsQuery:i,useGetCardByIdQuery:l}=o},4685:(e,t,r)=>{"use strict";r.d(t,{JV:()=>s,ZP:()=>i,eJ:()=>o,q2:()=>a});let n=(0,r(8860).oM)({name:"card",initialState:{cardId:null,selectedCards:[],cards:[]},reducers:{setCardId:(e,t)=>{e.cardId=t.payload},setSelectedCards:(e,t)=>{if(Array.isArray(t.payload))e.selectedCards=t.payload;else{let r=t.payload,n=e.selectedCards.findIndex(({name:e})=>r.name===e);-1!==n?e.selectedCards.splice(n,1):e.selectedCards.push(t.payload)}},setCards:(e,t)=>{e.cards=t.payload}}}),{setCardId:s,setSelectedCards:a,setCards:o}=n.actions,i=n.reducer},5735:(e,t,r)=>{"use strict";r.d(t,{D4:()=>s,ZP:()=>o,nB:()=>a});let n=(0,r(8860).oM)({name:"ui",initialState:{hasError:!1,currentPage:1},reducers:{setHasError:(e,t)=>{e.hasError=t.payload},setCurrentPage:(e,t)=>{e.currentPage=t.payload}}}),{setCurrentPage:s,setHasError:a}=n.actions,o=n.reducer},7107:(e,t,r)=>{"use strict";r.d(t,{PS:()=>o,_n:()=>s,bK:()=>n,yU:()=>a});let n="searchQuery",s="https://swapi.dev/api/",a={LIGHT:"light",DARK:"dark"},o=10},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,ThemeContext:()=>i,__esModule:()=>a,default:()=>l});var n=r(8570);let s=(0,n.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\layout.tsx`),{__esModule:a,$$typeof:o}=s;s.default;let i=(0,n.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\layout.tsx#ThemeContext`),l=(0,n.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\layout.tsx#default`)},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});var n=r(8570);let s=(0,n.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\page.tsx`),{__esModule:a,$$typeof:o}=s;s.default;let i=(0,n.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\page.tsx#default`)},3824:()=>{},6698:()=>{},7830:()=>{},3968:()=>{},9061:()=>{},4996:()=>{},9347:()=>{},9643:()=>{},4540:()=>{},7869:()=>{},5633:()=>{},9052:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[245,404],()=>r(3152));module.exports=n})();