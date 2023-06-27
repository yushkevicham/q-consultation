"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[574,678,974],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7896),o=(n(2784),n(876)),a=n(8970),p=n(4799);const i={sidebar_label:"Deployment",sidebar_position:4},s="Deployment",l={unversionedId:"dev/setup-and-deployment/deployment",id:"dev/setup-and-deployment/deployment",title:"Deployment",description:"Step 1: Make a production build application",source:"@site/docs/dev/setup-and-deployment/deployment.md",sourceDirName:"dev/setup-and-deployment",slug:"/dev/setup-and-deployment/deployment",permalink:"/q-consultation/dev/setup-and-deployment/deployment",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/dev/setup-and-deployment/deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Deployment",sidebar_position:4},sidebar:"docPagesSidebar",previous:{title:"Project structure",permalink:"/q-consultation/dev/setup-and-deployment/project-structure"},next:{title:"\ud83d\udd27 Development",permalink:"/q-consultation/dev/development"}},c={},d=[{value:"Step 1: Make a production build application",id:"step-1-make-a-production-build-application",level:2},{value:"Step 2: Start API Server",id:"step-2-start-api-server",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"step-1-make-a-production-build-application"},"Step 1: Make a production build application"),(0,o.kt)(a.default,{components:n.components,mdxType:"RunBuild"}),(0,o.kt)("h2",{id:"step-2-start-api-server"},"Step 2: Start API Server"),(0,o.kt)(p.default,{components:n.components,mdxType:"RunStartApi"}))}m.isMDXComponent=!0},8970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7896),o=(n(2784),n(876));const a={},p=void 0,i={unversionedId:"snippets/scripts/build",id:"snippets/scripts/build",title:"build",description:"This command creates a production build",source:"@site/docs/snippets/scripts/build.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/build",permalink:"/q-consultation/snippets/scripts/build",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/build.md",tags:[],version:"current",frontMatter:{}},s={},l=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:l};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")))),(0,o.kt)("p",null,"This command creates a production build"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," directory for the provider and client packages"),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," directory for the api package")),(0,o.kt)("p",null,"See the section about ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/deployment"},"deployment")," for more information."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to use HTTPS on the server, otherwise video calls will not work for you.")))}y.isMDXComponent=!0},4799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7896),o=(n(2784),n(876));const a={},p=void 0,i={unversionedId:"snippets/scripts/start-api",id:"snippets/scripts/start-api",title:"start-api",description:"Runs the API server in a production mode.",source:"@site/docs/snippets/scripts/start-api.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/start-api",permalink:"/q-consultation/snippets/scripts/start-api",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/start-api.md",tags:[],version:"current",frontMatter:{}},s={},l=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:l};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Runs the API server in a production mode."),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:api\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start:api\n")))),(0,o.kt)("p",null,"The API server will run on port 4000."),(0,o.kt)("p",null,"See the section about ",(0,o.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Guides/Recommendations/"},"deployment")," for more information."))}y.isMDXComponent=!0}}]);