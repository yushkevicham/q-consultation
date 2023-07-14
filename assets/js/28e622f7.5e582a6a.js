"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[675,8,318,487,884,678,974,256,375],{876:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var a=n(2784);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,s(s({ref:e},l),{},{components:n})):a.createElement(g,s({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5059:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>v,frontMatter:()=>m,metadata:()=>k,toc:()=>f});var a=n(7896),o=(n(2784),n(876)),r=n(1440),s=n(8970),i=n(4799),p=n(7242),c=n(6065),l=n(4519),d=n(8118),u=n(1471);const m={sidebar_label:"Scripts",sidebar_position:1},g="Scripts",k={unversionedId:"dev/setup-and-deployment/scripts",id:"dev/setup-and-deployment/scripts",title:"Scripts",description:"Run application in development mode",source:"@site/docs/dev/setup-and-deployment/scripts.md",sourceDirName:"dev/setup-and-deployment",slug:"/dev/setup-and-deployment/scripts",permalink:"/q-consultation/dev/setup-and-deployment/scripts",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/dev/setup-and-deployment/scripts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Scripts",sidebar_position:1},sidebar:"docPagesSidebar",previous:{title:"\ud83d\ude80 Quick Start Guide",permalink:"/q-consultation/dev/quick-start"},next:{title:"Configurations",permalink:"/q-consultation/dev/setup-and-deployment/configurations"}},b={},f=[{value:"Run application in development mode",id:"run-application-in-development-mode",level:3},{value:"Make a production build application",id:"make-a-production-build-application",level:3},{value:"Start API Server",id:"start-api-server",level:3},{value:"Start of documentation development",id:"start-of-documentation-development",level:3},{value:"Start Integration Pages",id:"start-integration-pages",level:3},{value:"Run code linting",id:"run-code-linting",level:3},{value:"Run configuration creation",id:"run-configuration-creation",level:3},{value:"Run schema upload",id:"run-schema-upload",level:3}],y={toc:f};function v(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scripts"},"Scripts"),(0,o.kt)("h3",{id:"run-application-in-development-mode"},"Run application in development mode"),(0,o.kt)(r.default,{components:n.components,mdxType:"RunDev"}),(0,o.kt)("h3",{id:"make-a-production-build-application"},"Make a production build application"),(0,o.kt)(s.default,{components:n.components,mdxType:"RunBuild"}),(0,o.kt)("h3",{id:"start-api-server"},"Start API Server"),(0,o.kt)(i.default,{components:n.components,mdxType:"RunStartApi"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Before launching the server API, it is necessary to make an ",(0,o.kt)("a",{parentName:"p",href:"#make-a-production-build-application"},"application build"))),(0,o.kt)("h3",{id:"start-of-documentation-development"},"Start of documentation development"),(0,o.kt)(p.default,{components:n.components,mdxType:"RunStartDoc"}),(0,o.kt)("h3",{id:"start-integration-pages"},"Start Integration Pages"),(0,o.kt)(c.default,{components:n.components,mdxType:"RunStartPages"}),(0,o.kt)("h3",{id:"run-code-linting"},"Run code linting"),(0,o.kt)(l.default,{components:n.components,mdxType:"RunLint"}),(0,o.kt)("h3",{id:"run-configuration-creation"},"Run configuration creation"),(0,o.kt)(d.default,{components:n.components,mdxType:"RunInitConfig"}),(0,o.kt)("h3",{id:"run-schema-upload"},"Run schema upload"),(0,o.kt)(u.default,{components:n.components,mdxType:"RunInitSchema"}))}v.isMDXComponent=!0},8970:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/build",id:"snippets/scripts/build",title:"build",description:"This command creates a production build",source:"@site/docs/snippets/scripts/build.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/build",permalink:"/q-consultation/snippets/scripts/build",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/build.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")))),(0,o.kt)("p",null,"This command creates a production build"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," directory for the provider and client packages"),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," directory for the api package")),(0,o.kt)("p",null,"See the section about ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/deployment"},"deployment")," for more information."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to use HTTPS on the server, otherwise video calls will not work for you.")))}g.isMDXComponent=!0},1440:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/dev",id:"snippets/scripts/dev",title:"dev",description:"The app is using self-signed certificate since WebRTC supports only HTTPS connection so your web-browser will likely warn you about untrusted certificate. Feel free to skip this warning.",source:"@site/docs/snippets/scripts/dev.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/dev",permalink:"/q-consultation/snippets/scripts/dev",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/dev.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The app is using self-signed certificate since WebRTC supports only HTTPS connection so your web-browser will likely warn you about untrusted certificate. Feel free to skip this warning.")),(0,o.kt)("p",null,"To start the application in a development mode, run the following command in the project folder:"),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")))),(0,o.kt)("p",null,"The application will automatically open in the browser after running script."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provider: ",(0,o.kt)("a",{parentName:"li",href:"https://localhost:3000"},"https://localhost:3000")),(0,o.kt)("li",{parentName:"ul"},"Client: ",(0,o.kt)("a",{parentName:"li",href:"https://localhost:3001"},"https://localhost:3001")),(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:4000"},"http://localhost:4000"))),(0,o.kt)("p",null,"The page will reload if you make edits."))}g.isMDXComponent=!0},8118:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/init-config",id:"snippets/scripts/init-config",title:"init-config",description:"You can create a configuration file by running this command and following the instructions in the terminal:",source:"@site/docs/snippets/scripts/init-config.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/init-config",permalink:"/q-consultation/snippets/scripts/init-config",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/init-config.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create a configuration file by running this command and following the instructions in the terminal:"),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run init:config\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init:config\n")))))}g.isMDXComponent=!0},1471:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/init-schema",id:"snippets/scripts/init-schema",title:"init-schema",description:"You can add the schema automatically by running this command and following the instructions in the terminal:",source:"@site/docs/snippets/scripts/init-schema.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/init-schema",permalink:"/q-consultation/snippets/scripts/init-schema",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/init-schema.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can add the schema automatically by running this command and following the instructions in the terminal:"),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run init:schema\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init:schema\n")))))}g.isMDXComponent=!0},4519:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/lint",id:"snippets/scripts/lint",title:"lint",description:"This will run code linting using eslint which will analyze code to find problematic patterns or code that doesn't adhere to certain style guidelines.",source:"@site/docs/snippets/scripts/lint.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/lint",permalink:"/q-consultation/snippets/scripts/lint",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/lint.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run lint\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint\n")))),(0,o.kt)("p",null,"This will run code linting using ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org"},"eslint")," which will analyze code to find problematic patterns or code that doesn't adhere to certain style guidelines."))}g.isMDXComponent=!0},4799:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/start-api",id:"snippets/scripts/start-api",title:"start-api",description:"Runs the API server in a production mode.",source:"@site/docs/snippets/scripts/start-api.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/start-api",permalink:"/q-consultation/snippets/scripts/start-api",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/start-api.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Runs the API server in a production mode."),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:api\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start:api\n")))),(0,o.kt)("p",null,"The API server will run on port 4000."),(0,o.kt)("p",null,"See the section about ",(0,o.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Guides/Recommendations/"},"deployment")," for more information."))}g.isMDXComponent=!0},7242:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/start-doc",id:"snippets/scripts/start-doc",title:"start-doc",description:"To develop documentation, you can use the following command:",source:"@site/docs/snippets/scripts/start-doc.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/start-doc",permalink:"/q-consultation/snippets/scripts/start-doc",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/start-doc.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To develop documentation, you can use the following command:"),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:doc\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start:doc\n")))))}g.isMDXComponent=!0},6065:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const r={},s=void 0,i={unversionedId:"snippets/scripts/start-pages",id:"snippets/scripts/start-pages",title:"start-pages",description:"This script allows you to run integration pages on .",source:"@site/docs/snippets/scripts/start-pages.md",sourceDirName:"snippets/scripts",slug:"/snippets/scripts/start-pages",permalink:"/q-consultation/snippets/scripts/start-pages",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/snippets/scripts/start-pages.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=l("Tabs"),u=l("TabItem"),m={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:pages\n"))),(0,o.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start:pages\n")))),(0,o.kt)("p",null,"This script allows you to run integration pages on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),"."),(0,o.kt)("p",null,"You can read more about how to work with integration pages here: ",(0,o.kt)("a",{parentName:"p",href:"/dev/development/integration-pages"},"Integration page")))}g.isMDXComponent=!0}}]);