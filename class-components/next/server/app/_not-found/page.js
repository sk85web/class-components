(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>i}),r(7352),r(5866),r(2029);var s=r(3191),n=r(8716),o=r(7922),a=r.n(o),l=r(5231),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);r.d(t,d);let i=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"D:\\Программирование\\rs-school\\sk85web-REACT2024Q3\\class-components\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},8754:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5609:(e,t,r)=>{Promise.resolve().then(r.bind(r,775))},775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeContext:()=>g,default:()=>_});var s=r(326),n=r(6465),o=r.n(n),a=r(7577);r(3824);var l=r(5842),d=r(8860);let i=(0,d.oM)({name:"search",initialState:{value:""},reducers:{setValue:(e,t)=>{e.value=t.payload}}}),{setValue:c}=i.actions,u=i.reducer;var p=r(4685),h=r(5735),f=r(5263);let x=(0,d.xC)({reducer:{search:u,card:p.ZP,ui:h.ZP,[f.ao.reducerPath]:f.ao.reducer},middleware:e=>e().concat(f.ao.middleware)}),m=({children:e})=>s.jsx(l.zt,{store:x,children:e});var y=r(7107);r(3968);class P extends a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){let{hasError:e}=this.state;if(e)return(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Something went wrong."}),s.jsx("button",{className:"reload-btn",type:"button",onClick:()=>window.location.reload(),children:"Reload page"})]});let{children:t}=this.props;return t}}let g=(0,a.createContext)({theme:y.yU.DARK,setTheme:()=>{}});function _({children:e}){let[t,r]=(0,a.useState)(y.yU.DARK);return s.jsx("html",{lang:"en",children:s.jsx(g.Provider,{value:{theme:t,setTheme:r},children:(0,s.jsxs)(P,{children:[s.jsx("head",{children:s.jsx("title",{children:"Star Wars"})}),s.jsx("body",{className:o().className,children:s.jsx(m,{children:s.jsx("main",{id:"root",children:e})})})]})})})}},5263:(e,t,r)=>{"use strict";r.d(t,{PA:()=>l,ao:()=>a,p8:()=>d});var s=r(9119),n=r(7509),o=r(7107);let a=(0,s.LC)({reducerPath:"cardAPI",baseQuery:(0,n.ni)({baseUrl:o._n}),endpoints:e=>({getAllCards:e.query({query:({query:e,currentPage:t})=>({url:"/people/",params:{search:e,page:t}})}),getCardById:e.query({query:e=>({url:`/people/${e}/`})})})}),{useGetAllCardsQuery:l,useGetCardByIdQuery:d}=a},4685:(e,t,r)=>{"use strict";r.d(t,{JV:()=>n,ZP:()=>l,eJ:()=>a,q2:()=>o});let s=(0,r(8860).oM)({name:"card",initialState:{cardId:null,selectedCards:[],cards:[]},reducers:{setCardId:(e,t)=>{e.cardId=t.payload},setSelectedCards:(e,t)=>{if(Array.isArray(t.payload))e.selectedCards=t.payload;else{let r=t.payload,s=e.selectedCards.findIndex(({name:e})=>r.name===e);-1!==s?e.selectedCards.splice(s,1):e.selectedCards.push(t.payload)}},setCards:(e,t)=>{e.cards=t.payload}}}),{setCardId:n,setSelectedCards:o,setCards:a}=s.actions,l=s.reducer},5735:(e,t,r)=>{"use strict";r.d(t,{D4:()=>n,ZP:()=>a,nB:()=>o});let s=(0,r(8860).oM)({name:"ui",initialState:{hasError:!1,currentPage:1},reducers:{setHasError:(e,t)=>{e.hasError=t.payload},setCurrentPage:(e,t)=>{e.currentPage=t.payload}}}),{setCurrentPage:n,setHasError:o}=s.actions,a=s.reducer},7107:(e,t,r)=>{"use strict";r.d(t,{PS:()=>a,_n:()=>n,bK:()=>s,yU:()=>o});let s="searchQuery",n="https://swapi.dev/api/",o={LIGHT:"light",DARK:"dark"},a=10},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return n},notFound:function(){return s}});let r="NEXT_NOT_FOUND";function s(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return o}});let s=r(6399),n="next/dist/client/components/parallel-route-default.js";function o(){(0,s.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,ThemeContext:()=>l,__esModule:()=>o,default:()=>d});var s=r(8570);let n=(0,s.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\layout.tsx`),{__esModule:o,$$typeof:a}=n;n.default;let l=(0,s.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\layout.tsx#ThemeContext`),d=(0,s.createProxy)(String.raw`D:\Программирование\rs-school\sk85web-REACT2024Q3\class-components\src\app\layout.tsx#default`)},3824:()=>{},3968:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[245],()=>r(8401));module.exports=s})();