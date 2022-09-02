"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[231],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=r,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return t?a.createElement(u,i(i({ref:n},d),{},{components:t})):a.createElement(u,i({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(2081),r=(t(9496),t(9613));const o={},i="pending",l={unversionedId:"pending/readme",id:"pending/readme",title:"pending",description:"pending({ effects: [] })",source:"@site/../src/pending/readme.md",sourceDirName:"pending",slug:"/pending/",permalink:"/methods/pending/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/pending/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"or",permalink:"/methods/or/"},next:{title:"reset",permalink:"/methods/reset/"}},s={},p=[{value:"<code>pending({ effects: [] })</code>",id:"pending-effects--",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>pending({ domain })</code>",id:"pending-domain-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Strategy",id:"strategy",level:2},{value:"Example",id:"example-2",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pending"},"pending"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { pending } from 'patronum';\n// or\nimport { pending } from 'patronum/pending';\n")),(0,r.kt)("h2",{id:"pending-effects--"},(0,r.kt)("inlineCode",{parentName:"h2"},"pending({ effects: [] })")),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"This overload allows to read pending state of passed effects. It is usef when\nyou want to show loading state of the whole application."),(0,r.kt)("h3",{id:"formulae"},"Formulae"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"$inProcess = pending({ effects: [fx1, fx2], of: Strategy });\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"effects")," pending state, result will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"of")," parameter selects strategy")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"effects")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(Array<Effect<any, any, any>>)")," - array of any effects"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"of")," ",(0,r.kt)("inlineCode",{parentName:"li"},'("some" | "every")')," \u2014 Optional. Select strategy of combining pendings\nof differents effects. Default ",(0,r.kt)("inlineCode",{parentName:"li"},'"some"'))),(0,r.kt)("admonition",{title:"since",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"of")," argument was added since patronum 1.1.0")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$inProcess")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," - Store with boolean state")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEffect } from 'effector';\nimport { pending } from 'patronum/pending';\n\nconst loadFirst = createEffect(() => Promise.resolve(null));\nconst loadSecond = createEffect(() => Promise.resolve(2));\nconst $processing = pending({ effects: [loadFirst, loadSecond] });\n\n$processing.watch((processing) => console.info(`processing: ${processing}`));\n// => processing: false\n\nloadFirst();\nloadSecond();\n// => processing: true\n")),(0,r.kt)("h2",{id:"pending-domain-"},(0,r.kt)("inlineCode",{parentName:"h2"},"pending({ domain })")),(0,r.kt)("admonition",{title:"since",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"patronum 1.1.0")),(0,r.kt)("h3",{id:"motivation-1"},"Motivation"),(0,r.kt)("p",null,"This overload allows to read pending state of created effects in the domain. It\nis usef when you want to show loading state of the whole application."),(0,r.kt)("h3",{id:"formulae-1"},"Formulae"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"$inProcess = pending({ domain, of: Strategy });\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When an effect created in the ",(0,r.kt)("inlineCode",{parentName:"li"},"domain")," in pending state, result will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"of")," parameter selects strategy")),(0,r.kt)("h3",{id:"arguments-1"},"Arguments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"domain")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(Domain)")," - Effector domain with at least one effect"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"of")," ",(0,r.kt)("inlineCode",{parentName:"li"},'("some" | "every")')," \u2014 Optional. Select strategy of combining pendings\nof differents effects. Default ",(0,r.kt)("inlineCode",{parentName:"li"},'"some"'))),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$inProcess")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," - Store with boolean state")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createDomain } from 'effector';\nimport { pending } from 'patronum/pending';\n\nconst app = createDomain();\nconst loadFirst = app.createEffect(() => Promise.resolve(null));\nconst loadSecond = app.createEffect(() => Promise.resolve(2));\nconst $processing = pending({ domain: app });\n\n$processing.watch((processing) => console.info(`processing: ${processing}`));\n// => processing: false\n\nloadFirst();\nloadSecond();\n// => processing: true\n")),(0,r.kt)("h2",{id:"strategy"},"Strategy"),(0,r.kt)("p",null,"There available two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"some")," \u2014 default strategy when ",(0,r.kt)("inlineCode",{parentName:"li"},"of")," parameter is not provided. At least one\neffect must be in pending state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"every")," \u2014 each effect must be in pending state.")),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEffect } from 'effector';\nimport { pending } from 'patronum/pending';\n\nconst loadFirst = createEffect(() => Promise.resolve(null));\nconst loadSecond = createEffect(() => Promise.resolve(2));\n\nconst $pending = pending({ effects: [loadFirst, loadSecond], of: 'every' });\n\n// When no effects is loading, $pending will be true\n\n// If only one is loading, also will be false\nloadFirst();\n\n// But after running the second effect, $pending will be true\nloadSecond();\n\n$pending.watch(console.log); // true\n")))}c.isMDXComponent=!0}}]);