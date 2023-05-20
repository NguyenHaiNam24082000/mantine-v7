(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7423],{88018:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/icons",function(){return o(65663)}])},65663:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return I}});var t=o(85893),r=o(11151),i=o(34940),s=o(25263),c=o(67294),d=(0,o(54764).Z)("brand-mantine","IconBrandMantine",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4",key:"svg-1"}],["path",{d:"M14 9h-2",key:"svg-2"}],["path",{d:"M14 15h-2",key:"svg-3"}],["path",{d:"M10 12h.01",key:"svg-4"}]]),h=o(46393);let l=`
import { rem } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: rem(80), height: rem(80) }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`,a={type:"code",component:function(){return c.createElement(d,{style:{width:(0,h.h)(80),height:(0,h.h)(80)},stroke:1.5,color:"var(--mantine-color-blue-filled)"})},centered:!0,code:l};var u=o(43406),p=Object.defineProperty,m=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,j=(e,n,o)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,w=(e,n)=>{for(var o in n||(n={}))x.call(n,o)&&j(e,o,n[o]);if(m)for(var o of m(n))f.call(n,o)&&j(e,o,n[o]);return e},b=(e,n)=>{var o={};for(var t in e)x.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&m)for(var t of m(e))0>n.indexOf(t)&&f.call(e,t)&&(o[t]=e[t]);return o};function g(e){var{size:n,style:o}=e,t=b(e,["size","style"]);return c.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",style:w({width:(0,h.h)(n),height:(0,h.h)(n)},o)},t),c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),c.createElement("path",{d:"M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6"}),c.createElement("path",{d:"M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3"}))}let y=`
import { Button } from '@mantine/core';
import { AddressBookIcon } from './AddressBookIcon';

function Demo() {
  return <Button leftSection={<AddressBookIcon size={18} />}>Demo</Button>;
}
`,k=`
import { rem } from '@mantine/core';

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}
`,v={type:"code",component:function(){return c.createElement(u.z,{leftSection:c.createElement(g,{size:18})},"Demo")},centered:!0,code:[{fileName:"AddressBookIcon.tsx",code:k,language:"tsx"},{fileName:"Demo.tsx",code:y,language:"tsx"}]},M=(0,i.A)(s.us.Icons);function z(e){let n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",code:"code",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"icons-libraries-with-mantine",children:"Icons libraries with Mantine"}),"\n",(0,t.jsx)(n.p,{children:"You can use any icons library with Mantine components, most popular options are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://feathericons.com/",children:"Feather icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://icons.radix-ui.com/",children:"Radix icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://react-icons.github.io/react-icons/",children:"react-icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://fontawesome.com/v5/docs/web/use-with/react",children:"Font Awesome"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tabler-icons",children:"Tabler icons"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"})," are used in Mantine demos, documentation\nand some ",(0,t.jsx)(n.code,{children:"@mantine/"})," packages depend on them. If you do not know which icons library\nto use, we recommend ",(0,t.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"icons-size",children:"Icons size"}),"\n",(0,t.jsxs)(n.p,{children:["Most of the icons libraries support ",(0,t.jsx)(n.code,{children:"size"})," prop (or similar ",(0,t.jsx)(n.code,{children:"width"})," and ",(0,t.jsx)(n.code,{children:"height"})," props) which allows to change\nicon width and height. Usually it is a number in pixels. All Mantine components use ",(0,t.jsx)(n.a,{href:"/styles/rem",children:"rem"}),"\nunits – components are scaled based on user preferences and ",(0,t.jsx)(n.code,{children:"font-size"})," of the root element. If you want to\nsupport this feature in your application, set icon width and height in ",(0,t.jsx)(n.a,{href:"/styles/rem",children:"rem"})," units with ",(0,t.jsx)(n.code,{children:"style"})," prop."]}),"\n",(0,t.jsx)(o,{data:a}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"rem units in size prop"})}),"\n",(0,t.jsxs)(n.p,{children:["Icons ",(0,t.jsx)(n.code,{children:"size"})," prop is usually converted to ",(0,t.jsx)(n.code,{children:"width"})," and ",(0,t.jsx)(n.code,{children:"height"})," props under the hood.\nIf you set ",(0,t.jsx)(n.code,{children:"size={16}"})," it will be converted to ",(0,t.jsx)(n.code,{children:'width="16"'})," and ",(0,t.jsx)(n.code,{children:'height="16"'})," attributes\non svg element."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use rem units in ",(0,t.jsx)(n.code,{children:"size"})," prop: ",(0,t.jsx)(n.code,{children:'size="1rem"'})," will be converted to ",(0,t.jsx)(n.code,{children:'width="1rem"'})," and ",(0,t.jsx)(n.code,{children:'height="1rem"'}),",\nbut it is not recommended as it is prohibited by SVG standard – some browsers (Firefox) will show warning in console."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"custom-icons",children:"Custom icons"}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to use icons as React components. In this case you will be able to use\n",(0,t.jsx)(n.code,{children:"currentColor"})," in ",(0,t.jsx)(n.code,{children:"fill"})," and ",(0,t.jsx)(n.code,{children:"stroke"})," prop. This will change icon color based on the context\nit is used in."]}),"\n",(0,t.jsx)(o,{data:v})]})}var I=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(M,Object.assign({},e,{children:(0,t.jsx)(z,e)}))}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=88018)}),_N_E=e.O()}]);