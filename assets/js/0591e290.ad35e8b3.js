"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[8],{876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7896),o=(r(2784),r(876));const a={},c=void 0,s={unversionedId:"snippets/scripts/start-doc",id:"snippets/scripts/start-doc",title:"start-doc",description:"To develop documentation, you can use the following command:",source:"@site/docs/snippets/scripts/start-doc.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/start-doc",permalink:"/q-consultation/snippets/scripts/start-doc",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/start-doc.md",tags:[],version:"current",frontMatter:{}},p={},i=[],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=l("Tabs"),d=l("TabItem"),m={toc:i};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To develop documentation, you can use the following command:"),(0,o.kt)(u,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(d,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:doc\n"))),(0,o.kt)(d,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start:doc\n")))))}f.isMDXComponent=!0}}]);