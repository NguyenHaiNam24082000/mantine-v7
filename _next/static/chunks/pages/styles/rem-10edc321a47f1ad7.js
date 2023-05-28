(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6962],{34270:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/rem",function(){return s(26903)}])},26903:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return x}});var r=s(85893),c=s(11151),o=s(34940),i=s(25263),t=s(67294),d=s(24138);let l=`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`,m={type:"code",component:function(){return(0,t.useEffect)(()=>()=>{document.documentElement.style.fontSize="100%"},[]),t.createElement(d.i,{defaultValue:100,min:70,max:130,onChange:e=>{document.documentElement.style.fontSize=`${e}%`}})},maxWidth:340,centered:!0,code:l},a=(0,o.A)(i.us.Rem);function h(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,c.ah)(),e.components),{Demo:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rem-em-and-px-units",children:"rem, em and px units"}),"\n",(0,r.jsx)(n.h2,{id:"rem-units",children:"rem units"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components use ",(0,r.jsx)(n.code,{children:"rem"})," units to apply size styles (",(0,r.jsx)(n.code,{children:"margin"}),", ",(0,r.jsx)(n.code,{children:"padding"}),", ",(0,r.jsx)(n.code,{children:"width"}),", etc.).\nBy default, ",(0,r.jsx)(n.code,{children:"1rem"})," is considered to be ",(0,r.jsx)(n.code,{children:"16px"})," as it is a default setting in most browsers.\nAll components scale based on the user's browser font-size settings or font-size of ",(0,r.jsx)(n.code,{children:"html"}),"/",(0,r.jsx)(n.code,{children:":root"}),"."]}),"\n",(0,r.jsx)(s,{data:m}),"\n",(0,r.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to change font-size of ",(0,r.jsx)(n.code,{children:":root"}),"/",(0,r.jsx)(n.code,{children:"html"})," element and preserve Mantine components sizes,\nset ",(0,r.jsx)(n.code,{children:"scale"})," on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," to the value of ",(0,r.jsx)(n.code,{children:"1 / htmlFontSize"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you set ",(0,r.jsx)(n.code,{children:"html"})," font-size to ",(0,r.jsx)(n.code,{children:"10px"})," and want to scale Mantine components accordingly, you need\nto set ",(0,r.jsx)(n.code,{children:"scale"})," to ",(0,r.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,r.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,r.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"em-units",children:"em units"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"em"})," units are used in media queries the same way as ",(0,r.jsx)(n.code,{children:"rem"})," units, but they are not affected by font-size specified on ",(0,r.jsx)(n.code,{children:"html"}),"/",(0,r.jsx)(n.code,{children:":root"})," element.\n",(0,r.jsx)(n.code,{children:"1em"})," is considered to be ",(0,r.jsx)(n.code,{children:"16px"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"px-conversions",children:"px conversions"}),"\n",(0,r.jsxs)(n.p,{children:["You can use numbers in some Mantine components props. Numbers are treated as ",(0,r.jsx)(n.code,{children:"px"})," and converted to ",(0,r.jsx)(n.code,{children:"rem"}),", for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { ColorSwatch } from \'@mantine/core\';\n\nfunction DemoPx() {\n  // Specify ColorSwatch size in px, it will be automatically converted to rem\n  // Width and height of ColorSwatch in this case will be 32px / 16 = 2rem\n  return <ColorSwatch color="#000" size={32} />;\n}\n\nfunction DemoRem() {\n  // This demo will have the same size as previous one\n  return <ColorSwatch color="#000" size="2rem" />;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The same conversion happens in ",(0,r.jsx)(n.a,{href:"/styles/style-props/",children:"style props"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  // width: calc(2rem * var(--mantine-scale))\n  // height: calc(1rem * var(--mantine-scale))\n  return <Box w={32} h={16} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rem-and-em-function",children:"rem and em function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package exports ",(0,r.jsx)(n.code,{children:"rem"})," and ",(0,r.jsx)(n.code,{children:"em"})," function that can be used to convert ",(0,r.jsx)(n.code,{children:"px"})," into ",(0,r.jsx)(n.code,{children:"rem"}),"/",(0,r.jsx)(n.code,{children:"em"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { rem, em } from '@mantine/core';\n\n// numbers and values in px are converted to rem\nrem(32); // -> calc(2rem * var(--mantine-scale))\nem(32); // -> 2em\nrem('16px'); // -> calc(1rem * var(--mantine-scale))\nem('16px'); // -> 1em\n\nrem('2rem'); // -> calc(2rem * var(--mantine-scale))\nem('2rem'); // -> 2rem\n\nrem('50%'); // -> 50%\nem('50%'); // -> 50%\n\nrem('5vh'); // -> 5vh\nem('5vh'); // -> 5vh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"convert-rem-to-px",children:"Convert rem to px"}),"\n",(0,r.jsxs)(n.p,{children:["To convert ",(0,r.jsx)(n.code,{children:"rem"}),"/",(0,r.jsx)(n.code,{children:"em"})," to ",(0,r.jsx)(n.code,{children:"px"})," use ",(0,r.jsx)(n.code,{children:"px"})," function exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { px } from '@mantine/core';\n\npx('2rem'); // -> 32\npx('10rem'); // -> 160\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remem-functions-in-css-files",children:"rem/em functions in css files"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"rem"})," and ",(0,r.jsx)(n.code,{children:"em"})," function in ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"css files"})," if\n",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," is installed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  font-size: rem(16px);\n\n  @media (min-width: em(320px)) {\n    font-size: rem(32px);\n  }\n}\n"})})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(h,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=34270)}),_N_E=e.O()}]);