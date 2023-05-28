(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7316],{76344:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/responsive",function(){return s(31890)}])},31890:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return D}});var o=s(85893),i=s(11151),t=s(34940),a=s(25263),r=s(5037),c=s(67294),l={demo:"mantine-yXMBj1Z"};let d=`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,m=`
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`,p={type:"code",component:function(){return c.createElement("div",{className:l.demo},"Demo")},code:[{fileName:"Demo.module.css",code:m,language:"css"},{fileName:"Demo.tsx",code:d,language:"tsx"}]};var u=s(31577),h={"input-mobile":"mantine-QbbTXV2","input-desktop":"mantine-SbIOWb4"};let x=`
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}
`,f=`
.input-mobile {
  @media (min-width: em(750px)) {
    display: none;
  }
}

.input-desktop {
  display: none;

  @media (min-width: em(750px)) {
    display: block;
  }
}
`,b={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(u.o,{label:"My input",placeholder:"My input",size:"xs",className:h["input-mobile"]}),c.createElement(u.o,{label:"My input",placeholder:"My input",size:"xl",className:h["input-desktop"]}))},code:[{fileName:"Demo.tsx",code:x,language:"tsx"},{fileName:"Demo.module.css",code:f,language:"css"}]};var j=s(46393),y=s(41283),g=s(43406),k=s(18248);let v=`
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`,w={type:"code",component:function(){let e=(0,k.a)(`(max-width: ${(0,j.em)(750)})`);return c.createElement(y.u,{label:e?"Mobile":"Desktop"},c.createElement(g.z,null,"Hover me"))},code:v},M=(0,t.A)(a.us.ResponsiveStyles);function N(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,i.ah)(),e.components),{Demo:s,DataTable:t,InstallScript:a}=n;return t||q("DataTable",!0),s||q("Demo",!0),a||q("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,o.jsx)(n.h2,{id:"media-queries",children:"Media queries"}),"\n",(0,o.jsx)(s,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"configure-breakpoints",children:"Configure breakpoints"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.breakpoints"})," are used in all responsive Mantine components. Breakpoints are expected to be set in ",(0,o.jsx)(n.code,{children:"em"})," units.\nYou can configure these values with ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  breakpoints: {\n    xs: '30em',\n    sm: '48em',\n    md: '64em',\n    lg: '74em',\n    xl: '90em',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.breakpoints"})," values:"]}),"\n",(0,o.jsx)(t,{head:["Breakpoint","Viewport width"],data:Object.keys(r.t.breakpoints).map(e=>[e,"".concat(r.t.breakpoints[e])])}),"\n",(0,o.jsx)(n.h2,{id:"breakpoints-variables-in-css-modules",children:"Breakpoints variables in CSS modules"}),"\n",(0,o.jsxs)(n.p,{children:["It is not possible to use CSS variables inside media queries – these values cannot be dynamically\ngenerated by ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),". To use Mantine theme breakpoints\nin your ",(0,o.jsx)(n.code,{children:".css"})," files, you will need ",(0,o.jsx)(n.code,{children:"postcss-simple-vars"})," package:"]}),"\n",(0,o.jsx)(a,{dev:!0,packages:"postcss-simple-vars"}),"\n",(0,o.jsxs)(n.p,{children:["Add it to your ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"PostCSS config"})," in ",(0,o.jsx)(n.code,{children:"postcss.config.js"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then you will be able to access these variables in your ",(0,o.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".demo {\n  @media (max-width: $mantine-breakpoint-xs) {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"@media (max-width: 36em) {\n  .demo {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Dynamic breakpoints are not supported"})}),"\n",(0,o.jsxs)(n.p,{children:["Values that are defined in ",(0,o.jsx)(n.code,{children:"postcss-simple-vars"})," config are static and\nare not connected to the ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," – if values change,\nyou will need to update them manually in both theme override and postcss config."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"component-size-based-on-media-query",children:"Component size based on media query"}),"\n",(0,o.jsxs)(n.p,{children:["Some components support ",(0,o.jsx)(n.code,{children:"size"})," prop, which changes various aspects of component appearance.\n",(0,o.jsx)(n.code,{children:"size"})," prop is not responsive – it is not possible to define different component sizes for different\nscreen sizes. Instead, you can render multiple components with different sizes and show/hide them\nbased on media query:"]}),"\n",(0,o.jsx)(s,{data:b}),"\n",(0,o.jsx)(n.h2,{id:"use-media-query-hook",children:"use-media-query hook"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," to change some of component props\nbased on media query. Note that this approach is not recommended for most of the cases if you have\nssr in your application (you use Next.js, Remix, Gatsby or any other framework that includes ssr)\nas it may cause hydration mismatch. If you do not have ssr in your application (for example, if you use Vite),\nthen you can safely use this hook to change props of components or conditionally render components\nbased on hook return value."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," can be safely used to change props of components that are not rendered\non server side (modals, tooltips, etc.). In the following example, it is safe to use ",(0,o.jsx)(n.code,{children:"useMediaQuery"})," hook to\nchange ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," props as it is not rendered on server side:"]}),"\n",(0,o.jsx)(s,{data:w})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(M,Object.assign({},e,{children:(0,o.jsx)(N,e)}))};function q(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=76344)}),_N_E=e.O()}]);