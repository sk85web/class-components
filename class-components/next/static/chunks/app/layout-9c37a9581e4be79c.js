(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5971:function(e,r,t){Promise.resolve().then(t.bind(t,1640))},1640:function(e,r,t){"use strict";t.r(r),t.d(r,{ThemeContext:function(){return g},default:function(){return P}});var n=t(7437),a=t(1034),s=t.n(a),c=t(2265);t(3054);var u=t(1444),d=t(2351);let o=(0,d.oM)({name:"search",initialState:{value:""},reducers:{setValue:(e,r)=>{e.value=r.payload}}}),{setValue:i}=o.actions;var l=o.reducer,h=t(8101),f=t(8439),p=t(4815);let y=(0,d.xC)({reducer:{search:l,card:h.ZP,ui:f.ZP,[p.ao.reducerPath]:p.ao.reducer},middleware:e=>e().concat(p.ao.middleware)});var m=e=>{let{children:r}=e;return(0,n.jsx)(u.zt,{store:y,children:r})},C=t(108);t(9211);class x extends c.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,r){console.error("Uncaught error:",e,r)}render(){let{hasError:e}=this.state;if(e)return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Something went wrong."}),(0,n.jsx)("button",{className:"reload-btn",type:"button",onClick:()=>window.location.reload(),children:"Reload page"})]});let{children:r}=this.props;return r}constructor(e){super(e),this.state={hasError:!1}}}let g=(0,c.createContext)({theme:C.yU.DARK,setTheme:()=>{}});function P(e){let{children:r}=e,[t,a]=(0,c.useState)(C.yU.DARK);return(0,c.useEffect)(()=>{let e=document.getElementById("root");e&&(e.className=t===C.yU.DARK?"dark":"light")},[t]),(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)(g.Provider,{value:{theme:t,setTheme:a},children:(0,n.jsxs)(x,{children:[(0,n.jsx)("head",{children:(0,n.jsx)("title",{children:"Star Wars"})}),(0,n.jsx)("body",{className:s().className,children:(0,n.jsx)(m,{children:(0,n.jsx)("main",{id:"root",children:r})})})]})})})}},4815:function(e,r,t){"use strict";t.d(r,{PA:function(){return u},ao:function(){return c},p8:function(){return d}});var n=t(8507),a=t(6074),s=t(108);let c=(0,n.LC)({reducerPath:"cardAPI",baseQuery:(0,a.ni)({baseUrl:s._n}),endpoints:e=>({getAllCards:e.query({query:e=>{let{query:r,currentPage:t}=e;return{url:"/people/",params:{search:r,page:t}}}}),getCardById:e.query({query:e=>({url:"/people/".concat(e,"/")})})})}),{useGetAllCardsQuery:u,useGetCardByIdQuery:d}=c},8101:function(e,r,t){"use strict";t.d(r,{JV:function(){return a},eJ:function(){return c},q2:function(){return s}});let n=(0,t(2351).oM)({name:"card",initialState:{cardId:null,selectedCards:[],cards:[]},reducers:{setCardId:(e,r)=>{e.cardId=r.payload},setSelectedCards:(e,r)=>{if(Array.isArray(r.payload))e.selectedCards=r.payload;else{let t=r.payload,n=e.selectedCards.findIndex(e=>{let{name:r}=e;return t.name===r});-1!==n?e.selectedCards.splice(n,1):e.selectedCards.push(r.payload)}},setCards:(e,r)=>{e.cards=r.payload}}}),{setCardId:a,setSelectedCards:s,setCards:c}=n.actions;r.ZP=n.reducer},8439:function(e,r,t){"use strict";t.d(r,{D4:function(){return a},nB:function(){return s}});let n=(0,t(2351).oM)({name:"ui",initialState:{hasError:!1,currentPage:1},reducers:{setHasError:(e,r)=>{e.hasError=r.payload},setCurrentPage:(e,r)=>{e.currentPage=r.payload}}}),{setCurrentPage:a,setHasError:s}=n.actions;r.ZP=n.reducer},108:function(e,r,t){"use strict";t.d(r,{PS:function(){return c},_n:function(){return a},bK:function(){return n},yU:function(){return s}});let n="searchQuery",a="https://swapi.dev/api/",s={LIGHT:"light",DARK:"dark"},c=10},3054:function(){},9211:function(){}},function(e){e.O(0,[21,808,971,23,744],function(){return e(e.s=5971)}),_N_E=e.O()}]);