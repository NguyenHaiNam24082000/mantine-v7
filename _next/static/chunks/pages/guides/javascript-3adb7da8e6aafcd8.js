(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6530],{15202:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/javascript",function(){return t(4465)}])},4465:function(e,n,t){"use strict";t.r(n);var o=t(85893),i=t(11151),r=t(34940),s=t(25263);let a=(0,r.A)(s.us.JavaScript);function p(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-with-javascript",children:"Usage with JavaScript"}),"\n",(0,o.jsx)(n.h2,{id:"is-it-possible-to-use-mantine-with-javascript",children:"Is it possible to use Mantine with JavaScript?"}),"\n",(0,o.jsxs)(n.p,{children:["Yes, it is possible to use all ",(0,o.jsx)(n.code,{children:"@mantine/*"})," packages (as well as all other npm packages) with JavaScript.\n",(0,o.jsx)(n.code,{children:"@mantine/*"})," packages are written in TypeScript and have type definitions, so you will get some the benefits\nof TypeScript (like autocompletion in your IDE) when using them with JavaScript."]}),"\n",(0,o.jsx)(n.h2,{id:"transforming-demos-code-to-javascript",children:"Transforming demos code to JavaScript"}),"\n",(0,o.jsx)(n.p,{children:"All demos in Mantine documentation are written in TypeScript. In most cases there is no difference between\nTypeScript and JavaScript code – you do not have to do anything."}),"\n",(0,o.jsxs)(n.p,{children:["To transform TypeScript code to JavaScript you can use ",(0,o.jsx)(n.a,{href:"https://www.typescriptlang.org/play?jsx=1&preserveValueImports=false#code/Q",children:"TypeScript playground"}),"\n– paste demo code into the playground and all types will be removed. Note that you will also need\nto remove type imports from the code."]}),"\n",(0,o.jsx)(n.p,{children:"Example of transformed code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// TypeScript code\nimport { Button, ButtonProps } from '@mantine/core';\n\ninterface MyButtonProps extends ButtonProps {\n  myProp: string;\n}\n\nfunction MyButton({ myProp, ...others }: MyButtonProps) {\n  return <Button {...others} />;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// JavaScript code\nimport { Button } from '@mantine/core';\n\nfunction MyButton({ myProp, ...others }) {\n  return <Button {...others} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"should-mantine-be-used-with-javascript",children:"Should Mantine be used with JavaScript?"}),"\n",(0,o.jsx)(n.p,{children:"It is recommended to use Mantine with TypeScript, it does not require deep knowledge of TypeScript\nand will make your code more robust and easier to maintain. For example, you will get type errors\nwhen you pass invalid props to components or when you use non-existing props. TypeScript will also\nhelp you during migration to new versions of Mantine – you will get type errors when props/components\nthat you have in your code are removed/renamed/changed."}),"\n",(0,o.jsxs)(n.p,{children:["If you are not familiar with TypeScript yet, using Mantine with TypeScript will be a great opportunity\nto learn it. You can use any of ",(0,o.jsx)(n.a,{href:"/getting-started",children:"templates"})," to get started – all of them include\nTypeScript support out of the box."]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(a,Object.assign({},e,{children:(0,o.jsx)(p,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=15202)}),_N_E=e.O()}]);