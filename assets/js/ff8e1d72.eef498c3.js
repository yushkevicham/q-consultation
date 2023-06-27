"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[89],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7896),o=(n(2784),n(876));const a={sidebar_label:"Integration pages",sidebar_position:3},i="Integration pages",p={unversionedId:"dev/development/integration-pages",id:"dev/development/integration-pages",title:"Integration pages",description:"Integration pages are examples of how your application/website can interact with the Q-Consultation application.",source:"@site/docs/dev/development/integration-pages.md",sourceDirName:"dev/development",slug:"/dev/development/integration-pages",permalink:"/q-consultation/dev/development/integration-pages",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/dev/development/integration-pages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Integration pages",sidebar_position:3},sidebar:"docPagesSidebar",previous:{title:"Provider & Client application",permalink:"/q-consultation/dev/development/provider-and-client"},next:{title:"\ud83d\udcbb Contributing",permalink:"/q-consultation/dev/contributing"}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-pages"},"Integration pages"),(0,o.kt)("p",null,"Integration pages are examples of how your application/website can interact with the Q-Consultation application.\nNow the integration pages use links that lead to the provider's profile."),(0,o.kt)("p",null,"Link: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:3001/providers/[provider_id]")),(0,o.kt)("p",null,"In this link, you need to replace\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"[provider_id]")," with the id of the previously created provider."),(0,o.kt)("p",null,"To run the integration pages locally, you need to run the command: ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run pages"),"."),(0,o.kt)("p",null,"This command will run integration pages on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," ."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Currently, there are available two integration examples. The source code can be found in the 'packages' folder >> 'integration-pages' (/packages/integration-pages).")))}u.isMDXComponent=!0}}]);