(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5244],{32940:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/burger",function(){return r(91269)}])},91269:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var o=r(85893),i=r(11151),t=r(34940),s=r(25263),c=r(67294),l=r(78901),a=r(99425);let d=`
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
`,u={type:"configurator",component:function(e){let[n,{toggle:r}]=(0,l.q)();return c.createElement(a.O,Object.assign({},e,{opened:n,onClick:r,"aria-label":"Toggle navigation"}))},code:d,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"}]},p=(0,t.A)(s.us.Burger);function g(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components),{Demo:r,GetElementRef:t}=n;return r||m("Demo",!0),t||m("GetElementRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Burger"})," component renders open/close menu button.\nSet ",(0,o.jsx)(n.code,{children:"opened"})," and ",(0,o.jsx)(n.code,{children:"onClick"})," props to control Burger state.\nIf ",(0,o.jsx)(n.code,{children:"opened"})," prop is set, cross will be rendered, otherwise – burger."]}),"\n",(0,o.jsx)(r,{data:u}),"\n",(0,o.jsx)(t,{component:"Burger",refType:"button"}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"Burger"})," accessible for screen readers, you need to either set ",(0,o.jsx)(n.code,{children:"aria-label"})," or\nuse ",(0,o.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Burger, VisuallyHidden } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Burger aria-label=\"Toggle navigation\" />\n\n      <Burger>\n        <VisuallyHidden>Toggle navigation</VisuallyHidden>\n      </Burger>\n    </>\n  );\n}\n"})})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,Object.assign({},e,{children:(0,o.jsx)(g,e)}))};function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=32940)}),_N_E=e.O()}]);