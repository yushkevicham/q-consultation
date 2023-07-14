"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[566,913,730,907],{876:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var i=n(2784);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(f,r(r({ref:e},c),{},{components:n})):i.createElement(f,r({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2703:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=n(7896),a=(n(2784),n(876)),o=n(4258),r=n(2235),s=n(7282);const l={sidebar_label:"\ud83d\udc4b Introduction",sidebar_position:1,slug:"/"},p="Welcome to the Q-Consultation Lite Developer Docs!",c={unversionedId:"dev/intro",id:"dev/intro",title:"Welcome to the Q-Consultation Lite Developer Docs!",description:"This documentation contains all technical documentation related to the setup, deployment, update and customization of your Q-Consultation Lite application.",source:"@site/docs/dev/intro.md",sourceDirName:"dev",slug:"/",permalink:"/q-consultation/",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/dev/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\ud83d\udc4b Introduction",sidebar_position:1,slug:"/"},sidebar:"docPagesSidebar",next:{title:"\ud83d\ude80 Quick Start Guide",permalink:"/q-consultation/dev/quick-start"}},u={},m=[{value:"Features list",id:"features-list",level:2},{value:"Interface",id:"interface",level:2},{value:"How to contribute",id:"how-to-contribute",level:2},{value:"License",id:"license",level:2}],d={toc:m};function f(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-the-q-consultation-lite-developer-docs"},"Welcome to the Q-Consultation Lite Developer Docs!"),(0,a.kt)("p",null,"This documentation contains all technical documentation related to the setup, deployment, update and customization of your ",(0,a.kt)("strong",{parentName:"p"},"Q-Consultation Lite")," application."),(0,a.kt)("admonition",{title:"Can't wait to start using Q-Consultation Lite?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can directly head to the ",(0,a.kt)("a",{parentName:"p",href:"/q-consultation/dev/quick-start"},"Quick Start"),"!")),(0,a.kt)("p",null,"Q-Consultation is a web application for online chat and video consultations. The app provides code to build a secure means to hold virtual private meetings and video calls and messaging across a multitude of use cases including telehealth, recruitment, social engagement, finance, online education, e-commerce, and more. The application is built on ",(0,a.kt)("strong",{parentName:"p"},"React JS")," and consists of three major parts: QuickBlox back-end and two web applications for ",(0,a.kt)("a",{parentName:"p",href:"#client-application-interface"},"Client")," and ",(0,a.kt)("a",{parentName:"p",href:"#provider-application-interface"},"Provider"),"."),(0,a.kt)("admonition",{title:"Compatibility",type:"tip"},(0,a.kt)(r.default,{components:n.components,mdxType:"Compatibility"})),(0,a.kt)("h2",{id:"features-list"},"Features list"),(0,a.kt)(o.default,{components:n.components,mdxType:"FeaturesList"}),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)(s.default,{components:n.components,mdxType:"Interface"}),(0,a.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,a.kt)("p",null,"See more information at ",(0,a.kt)("a",{parentName:"p",href:"/q-consultation/dev/contributing"},"CONTRIBUTING")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QuickBlox/q-consultation/blob/master/LICENSE"},"LICENSE")," file for licensing information."))}f.isMDXComponent=!0},2235:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7896),a=(n(2784),n(876));const o={},r=void 0,s={unversionedId:"snippets/compatibility",id:"snippets/compatibility",title:"compatibility",description:"Operating system compatibility:",source:"@site/docs/snippets/compatibility.md",sourceDirName:"snippets",slug:"/snippets/compatibility",permalink:"/q-consultation/snippets/compatibility",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/compatibility.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Operating system compatibility"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows 10"),(0,a.kt)("li",{parentName:"ul"},"macOS Mojave"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu LTS/Debian 9.x")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Browser compatibility:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chrome (Desktop & Mobile): 109+"),(0,a.kt)("li",{parentName:"ul"},"Firefox (Desktop & Mobile): 109+"),(0,a.kt)("li",{parentName:"ul"},"Safari (Desktop & Mobile): 16.3+"),(0,a.kt)("li",{parentName:"ul"},"Opera (Desktop): 95+"),(0,a.kt)("li",{parentName:"ul"},"Edge (Desktop): 109+")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Please note that Q-Consultation Lite may work on other browsers and operating systems, but these are not tested, not officially supported at this time.")))}u.isMDXComponent=!0},4258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7896),a=(n(2784),n(876));const o={},r=void 0,s={unversionedId:"snippets/features-list",id:"snippets/features-list",title:"features-list",description:"Communication features:",source:"@site/docs/snippets/features-list.md",sourceDirName:"snippets",slug:"/snippets/features-list",permalink:"/q-consultation/snippets/features-list",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/features-list.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Communication features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Real-time Chat & Messaging"),(0,a.kt)("li",{parentName:"ul"},"Video & audio calling"),(0,a.kt)("li",{parentName:"ul"},"File sharing"),(0,a.kt)("li",{parentName:"ul"},"Call recording"),(0,a.kt)("li",{parentName:"ul"},"Camera Input selection"),(0,a.kt)("li",{parentName:"ul"},"Private chat rooms"),(0,a.kt)("li",{parentName:"ul"},"Screen Sharing")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User Management features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User authentication"),(0,a.kt)("li",{parentName:"ul"},"Real-time customer queue"),(0,a.kt)("li",{parentName:"ul"},"Virtual waiting & meeting rooms"),(0,a.kt)("li",{parentName:"ul"},"Customer and provider profiles"),(0,a.kt)("li",{parentName:"ul"},"Invitation sharing by link, email, & text"),(0,a.kt)("li",{parentName:"ul"},"Capture user data, add, share, send notes, and share files"),(0,a.kt)("li",{parentName:"ul"},"Appointment, message, and call history")))}u.isMDXComponent=!0},7282:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7896),a=(n(2784),n(876));const o={},r=void 0,s={unversionedId:"snippets/interface",id:"snippets/interface",title:"interface",description:"Client application interface",source:"@site/docs/snippets/interface.md",sourceDirName:"snippets",slug:"/snippets/interface",permalink:"/q-consultation/snippets/interface",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/interface.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Client application interface",id:"client-application-interface",level:3},{value:"Provider application interface",id:"provider-application-interface",level:3}],c=(u="Image",function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var u;const m={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"client-application-interface"},"Client application interface"),(0,a.kt)(c,{src:"/img/snippets/001.png",caption:"Main screen",mdxType:"Image"}),(0,a.kt)(c,{src:"/img/snippets/002.png",caption:"Waiting room",mdxType:"Image"}),(0,a.kt)(c,{src:"/img/snippets/003.png",caption:"Video call",mdxType:"Image"}),(0,a.kt)("h3",{id:"provider-application-interface"},"Provider application interface"),(0,a.kt)(c,{src:"/img/snippets/004.png",caption:"Main screen",mdxType:"Image"}),(0,a.kt)(c,{src:"/img/snippets/005.png",caption:"Video call",mdxType:"Image"}))}d.isMDXComponent=!0}}]);