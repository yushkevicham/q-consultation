"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[396],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7896),i=(n(2784),n(876));const o={sidebar_label:"OpenAI",sidebar_position:1},r="OpenAI",p={unversionedId:"dev/development/api/openai",id:"dev/development/api/openai",title:"OpenAI",description:"The OpenAI can be applied to virtually any task",source:"@site/docs/dev/development/api/openai.md",sourceDirName:"dev/development/api",slug:"/dev/development/api/openai",permalink:"/q-consultation/dev/development/api/openai",draft:!1,editUrl:"https://github.com/QuickBlox/q-consultation/tree/master/packages/documentation/docs/dev/development/api/openai.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"OpenAI",sidebar_position:1},sidebar:"docPagesSidebar",previous:{title:"API application",permalink:"/q-consultation/dev/development/api/"},next:{title:"Provider & Client application",permalink:"/q-consultation/dev/development/provider-and-client"}},s={},l=[{value:"Completion",id:"completion",level:2},{value:"Create completion",id:"create-completion",level:3},{value:"Chat",id:"chat",level:2},{value:"Create chat completion",id:"create-chat-completion",level:3},{value:"Audio",id:"audio",level:2},{value:"Create transcription",id:"create-transcription",level:3},{value:"Create translation",id:"create-translation",level:3},{value:"Images",id:"images",level:2},{value:"Embeddings",id:"embeddings",level:2},{value:"Files",id:"files",level:2},{value:"Fine-tunes",id:"fine-tunes",level:2},{value:"Moderations",id:"moderations",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openai"},"OpenAI"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/"},"OpenAI")," can be applied to virtually any task\nthat involves understanding or generating natural language, code, or images.\nWe use the capabilities of OpenAI for semantic search for providers,\ncreating transcription for videos, generating text at prompt."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/completion/prompt-design"},"prompt")," is essentially how you \u201cprogram\u201d the model,\nusually by providing some instructions or a few examples.\nThe completions and chat completions can be used for virtually any task including content or code generation,\nsummarization, expansion, conversation, creative writing, style transfer, and more."),(0,i.kt)("p",null,"The OpenAI is powered by a set of models with different capabilities and price points.\nGPT-4 is latest and most powerful model.\nGPT-3.5-Turbo is the model that powers ChatGPT and is optimized for conversational formats.\nTo learn more about models and what else we offer, visit ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/models"},"models documentation"),"."),(0,i.kt)("p",null,"With OpenAI integrated into Q-Consultation Lite,\ndevelopers now have access to a wide range of advanced AI features and capabilities.\nLet's dive into how to use this integration."),(0,i.kt)("p",null,"To work with the OpenAI API, we use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openai"},"OpenAI Node.js Library"),".\nIn the application, we have implemented our own service that uses this library and has the same API.\nThis server is already configured for use with ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io"},"Fastify"),", so we advise you to use it.\nWe also implement all cases for working with OpenAI in this service in the file\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/QuickBlox/q-consultation/blob/master/packages/api/src/services/openai/integration.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"packages/api/src/services/openai/integration.ts")),"."),(0,i.kt)("h2",{id:"completion"},"Completion"),(0,i.kt)("p",null,"Given a prompt, the model will return one or more predicted completions,\nand can also return the probabilities of alternative tokens at each position."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available models"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-davinci-003")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-davinci-002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-curie-001")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-babbage-001")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-ada-001"))),(0,i.kt)("h3",{id:"create-completion"},"Create completion"),(0,i.kt)("p",null,"Creates a completion for the provided prompt and parameters."),(0,i.kt)("p",null,"To work with Create completion, we use our own OpenAI service with the method ",(0,i.kt)("inlineCode",{parentName:"p"},"openAIApi.createChatCompletion"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Usage example"',title:'"Usage','example"':!0},"import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\nimport { openAIApi } from '@/services/openai'\n\nexport const completionSchema = {\n  tags: ['OpenAI Example'],\n  summary: 'OpenAI completion example',\n  body: Type.Object({\n    prompt: Type.String(),\n  }),\n  response: {\n    200: Type.Object({\n      text: Type.String(),\n    ),\n  },\n  security: [{ apiKey: [] }] as Security,\n}\n\nconst completion: FastifyPluginAsyncTypebox = async (fastify) => {\n  fastify.post(\n    '/completion',\n    {\n      schema: completionSchema,\n      onRequest: fastify.verify(\n        fastify.BearerToken,\n      ),\n    },\n    async (request) => {\n      const { prompt } = request.body\n      const { data } = await openAIApi.createCompletion({\n        model: 'text-davinci-003',\n        prompt,\n      })\n      const text = data.choices[0]?.text\n\n      return {\n        text,\n      }\n    },\n  )\n}\n\nexport default completion\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/completions/create?lang=node.js"},"OpenAI API reference on Create completion")," to learn more.")),(0,i.kt)("h2",{id:"chat"},"Chat"),(0,i.kt)("p",null,"Given a list of messages describing a conversation, the model will return a response."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available models"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt-4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt-4-0314")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt-4-32k")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt-4-32k-0314")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt-3.5-turbo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt-3.5-turbo-0301"))),(0,i.kt)("h3",{id:"create-chat-completion"},"Create chat completion"),(0,i.kt)("p",null,"Creates a model response for the given chat conversation."),(0,i.kt)("p",null,"To work with Create chat completion, we use our own OpenAI service with the method ",(0,i.kt)("inlineCode",{parentName:"p"},"openAIApi.createChatCompletion"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Usage example"',title:'"Usage','example"':!0},"import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\nimport { openAIApi } from '@/services/openai'\n\nexport const chatCompletionSchema = {\n  tags: ['OpenAI Example'],\n  summary: 'OpenAI chat completion example',\n  body: Type.Object({\n    prompt: Type.String(),\n  }),\n  response: {\n    200: Type.Object({\n      text: Type.String(),\n    ),\n  },\n  security: [{ apiKey: [] }] as Security,\n}\n\nconst chatCompletion: FastifyPluginAsyncTypebox = async (fastify) => {\n  fastify.post(\n    '/chat-completion',\n    {\n      schema: chatCompletionSchema,\n      onRequest: fastify.verify(\n        fastify.BearerToken,\n      ),\n    },\n    async (request) => {\n      const { prompt } = request.body\n      const { data } = await openAIApi.createChatCompletion({\n        model: 'gpt-3.5-turbo',\n        temperature: 0.5,\n        messages: [\n          {\n            role: 'system',\n            content: 'You are a helpful assistant.',\n          },\n          {\n            role: 'user',\n            content: prompt,\n          },\n        ],\n      })\n      const text = data?.choices?.[0].message?.content\n\n      return {\n        text,\n      }\n    },\n  )\n}\n\nexport default chatCompletion\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create?lang=node.js"},"OpenAI API reference on Create chat completion")," to learn more.")),(0,i.kt)("h2",{id:"audio"},"Audio"),(0,i.kt)("p",null,"Learn how to turn audio into text."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available models"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"whisper-1")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Related guide"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/speech-to-text"},"Speech to text")),(0,i.kt)("h3",{id:"create-transcription"},"Create transcription"),(0,i.kt)("p",null,"Transcribes audio into the input language."),(0,i.kt)("p",null,"To work with Create transcription, we use our own OpenAI service with methods ",(0,i.kt)("inlineCode",{parentName:"p"},"createTranscriptionWithTime")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"openAIApi.createTranscription"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"createTranscriptionWithTime")," is designed to get the transcription with time for an audio file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Internal Type"',title:'"Internal','Type"':!0},"const createTranscriptionWithTime: (audio: File) => Promise<\n  {\n    start: string\n    end: string\n    text: string\n  }[]\n>\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Usage example"',title:'"Usage','example"':!0},"import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\nimport { MultipartFile } from '@/models'\nimport { createTranscriptionWithTime } from '@/services/openai'\n\nexport const transcriptionSchema = {\n  tags: ['OpenAI Example'],\n  summary: 'OpenAI transcription example',\n  consumes: ['multipart/form-data'],\n  body: Type.Object({\n    audio: MultipartFile,\n  }),\n  response: {\n    200: Type.Object({\n      transcription: Type.Array(\n        Type.Object({\n          start: Type.String(),\n          end: Type.String(),\n          text: Type.String(),\n        }),\n      ),\n    ),\n  },\n  security: [{ apiKey: [] }] as Security,\n}\n\nconst transcription: FastifyPluginAsyncTypebox = async (fastify) => {\n  fastify.post(\n    '/transcription',\n    {\n      schema: transcriptionSchema,\n      onRequest: fastify.verify(\n        fastify.BearerToken,\n      ),\n    },\n    async (request) => {\n      const { audio } = request.body\n      const data = await createTranscriptionWithTime(audio)\n\n      return {\n        transcription: data,\n      }\n    },\n  )\n}\n\nexport default transcription\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"openAIApi.createTranscription")," is designed to get the transcription in different formats (default json) for an audio file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Usage example"',title:'"Usage','example"':!0},"import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\nimport { MultipartFile } from '@/models'\nimport { openAIApi } from '@/services/openai'\n\nexport const transcriptionSchema = {\n  tags: ['OpenAI Example'],\n  summary: 'OpenAI transcription example',\n  consumes: ['multipart/form-data'],\n  body: Type.Object({\n    audio: MultipartFile,\n  }),\n  response: {\n    200: Type.Object({\n      transcription: Type.String(),\n    ),\n  },\n  security: [{ apiKey: [] }] as Security,\n}\n\nconst transcription: FastifyPluginAsyncTypebox = async (fastify) => {\n  fastify.post(\n    '/transcription',\n    {\n      schema: transcriptionSchema,\n      onRequest: fastify.verify(\n        fastify.BearerToken,\n      ),\n    },\n    async (request) => {\n      const { audio } = request.body\n      const { data } = await await openAIApi.createTranscription(\n        audio,\n        'whisper-1',\n      )\n\n      return {\n        transcription: data.text\n      }\n    },\n  )\n}\n\nexport default transcription\n")),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create?lang=node.js"},"OpenAI API reference on Create transcription")," to learn more.")))),(0,i.kt)("h3",{id:"create-translation"},"Create translation"),(0,i.kt)("p",null,"Transcribes audio into the input language."),(0,i.kt)("p",null,"To work with Create translation, you can use our own OpenAI service with the method ",(0,i.kt)("inlineCode",{parentName:"p"},"openAIApi.createTranslation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Usage example"',title:'"Usage','example"':!0},"import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\nimport { MultipartFile } from '@/models'\nimport { openAIApi } from '@/services/openai'\n\nexport const translationSchema = {\n  tags: ['OpenAI Example'],\n  summary: 'OpenAI translation example',\n  consumes: ['multipart/form-data'],\n  body: Type.Object({\n    audio: MultipartFile,\n  }),\n  response: {\n    200: Type.Object({\n      text: Type.String(),\n    ),\n  },\n  security: [{ apiKey: [] }] as Security,\n}\n\nconst translation: FastifyPluginAsyncTypebox = async (fastify) => {\n  fastify.post(\n    '/translation',\n    {\n      schema: translationSchema,\n      onRequest: fastify.verify(\n        fastify.BearerToken,\n      ),\n    },\n    async (request) => {\n      const { audio } = request.body\n      const { data } = await await openAIApi.createTranslation(\n        audio,\n        'whisper-1',\n      )\n\n      return data\n    },\n  )\n}\n\nexport default translation\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are not currently using Create translation, but you can read the\n",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create?lang=node.js"},"OpenAI API reference on Create translation")," to learn more.")),(0,i.kt)("h2",{id:"images"},"Images"),(0,i.kt)("p",null,"Given a prompt and/or an input image, the model will generate a new image."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are not currently using Generate images, but you can use our own OpenAI service to implement this."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Related guide"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/images?lang=node.js"},"Image generation")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"API reference"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/images?lang=node.js"},"Images"))),(0,i.kt)("h2",{id:"embeddings"},"Embeddings"),(0,i.kt)("p",null,"Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available models"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-embedding-ada-002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-search-ada-doc-001"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are not currently using Embeddings, but you can use our own OpenAI service to implement this."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Related guide"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings"},"Embeddings")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"API reference"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/embeddings/create?lang=node.js"},"Create embeddings"))),(0,i.kt)("h2",{id:"files"},"Files"),(0,i.kt)("p",null,"Files are used to upload documents that can be used with features like ",(0,i.kt)("a",{parentName:"p",href:"#fine-tunes"},"Fine-tuning"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are not currently using Files, but you can use our own OpenAI service to implement this."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"API reference"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/files?lang=node.js"},"Files"))),(0,i.kt)("h2",{id:"fine-tunes"},"Fine-tunes"),(0,i.kt)("p",null,"Manage fine-tuning jobs to tailor a model to your specific training data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available models"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"davinci")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curie")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"babbage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ada"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are not currently using Fine-tunes, but you can use our own OpenAI service to implement this."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Related guide"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/fine-tuning"},"Fine-tune models")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"API reference"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/fine-tunes/create?lang=node.js"},"Fine-tunes"))),(0,i.kt)("h2",{id:"moderations"},"Moderations"),(0,i.kt)("p",null,"Given a input text, outputs if the model classifies it as violating OpenAI's content policy."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available models"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-moderation-stable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text-moderation-latest"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We are not currently using Moderations, but you can use our own OpenAI service to implement this."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Related guide"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/moderation"},"Moderations")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"API reference"),": ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/moderations/create?lang=node.js"},"Create moderation"))))}c.isMDXComponent=!0}}]);