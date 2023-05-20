(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5244],{32940:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/burger",function(){return r(91269)}])},91269:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var o=r(85893),t=r(11151),i=r(34940),c=r(25263),s=r(67294),l=r(78901),a=r(99425),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,n,r)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&b(e,r,n[r]);if(g)for(var r of g(n))h.call(n,r)&&b(e,r,n[r]);return e},j=(e,n)=>d(e,p(n));let y=`
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
`,x={type:"configurator",component:function(e){let[n,{toggle:r}]=(0,l.q)();return s.createElement(a.O,j(m({},e),{opened:n,onClick:r,"aria-label":"Toggle navigation"}))},code:y,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"}]},O=(0,i.A)(c.us.Burger);function w(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components),{Demo:r,GetElementRef:i}=n;return r||v("Demo",!0),i||v("GetElementRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Burger"})," component renders open/close menu button.\nSet ",(0,o.jsx)(n.code,{children:"opened"})," and ",(0,o.jsx)(n.code,{children:"onClick"})," props to control Burger state.\nIf ",(0,o.jsx)(n.code,{children:"opened"})," prop is set, cross will be rendered, otherwise – burger."]}),"\n",(0,o.jsx)(r,{data:x}),"\n",(0,o.jsx)(i,{component:"Burger",refType:"button"}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"Burger"})," accessible for screen readers, you need to either set ",(0,o.jsx)(n.code,{children:"aria-label"})," or\nuse ",(0,o.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Burger, VisuallyHidden } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Burger aria-label=\"Toggle navigation\" />\n\n      <Burger>\n        <VisuallyHidden>Toggle navigation</VisuallyHidden>\n      </Burger>\n    </>\n  );\n}\n"})})]})}var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(O,Object.assign({},e,{children:(0,o.jsx)(w,e)}))};function v(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=32940)}),_N_E=e.O()}]);