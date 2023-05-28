(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2450],{63704:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/collapse",function(){return n(61166)}])},61166:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i=n(85893),o=n(11151),s=n(34940),a=n(25263),r=n(67294),l=n(78901),c=n(94873),u=n(74378),h=n(43406),d=n(59312),m=n(56763),p=n(73935),g=n(9045),f=n(382);function b(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let w="undefined"!=typeof window&&window.requestAnimationFrame;var x=n(49441),j=n(83422),E=n(35577);let y={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},k=(0,r.forwardRef)((e,t)=>{let n=(0,E.w)("Collapse",y,e),{children:i,in:o,transitionDuration:s,transitionTimingFunction:a,style:l,onTransitionEnd:u,animateOpacity:h}=n,k=(0,d._T)(n,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),T=(0,x.rZ)(),O=(0,m.J)(),v=!!T.respectReducedMotion&&O,C=v?0:s,B=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:n=()=>{},opened:i}){let o=(0,r.useRef)(null),s={display:"none",height:0,overflow:"hidden"},[a,l]=(0,r.useState)(i?{}:s),c=e=>{(0,p.flushSync)(()=>l(e))},u=e=>{c(t=>Object.assign(Object.assign({},t),e))};function h(n){let i=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*Math.pow(t,.25)+t/5)*10)}(n);return{transition:`height ${i}ms ${t}`}}(0,g.l)(()=>{"function"==typeof w&&(i?w(()=>{u({willChange:"height",display:"block",overflow:"hidden"}),w(()=>{let e=b(o);u(Object.assign(Object.assign({},h(e)),{height:e}))})}):w(()=>{let e=b(o);u(Object.assign(Object.assign({},h(e)),{willChange:"height",height:e})),w(()=>u({height:0,overflow:"hidden"}))}))},[i]);let m=e=>{if(e.target===o.current&&"height"===e.propertyName){if(i){let e=b(o);e===a.height?c({}):u({height:e}),n()}else 0===a.height&&(c(s),n())}};return function(e={}){var{style:t={},refKey:n="ref"}=e,s=(0,d._T)(e,["style","refKey"]);let r=s[n];return Object.assign(Object.assign({"aria-hidden":!i},s),{[n]:(0,f.lq)(o,r),onTransitionEnd:m,style:Object.assign(Object.assign({boxSizing:"border-box"},t),a)})}}({opened:o,transitionDuration:C,transitionTimingFunction:a,onTransitionEnd:u});return 0===C?o?r.createElement(c.x,Object.assign({},k),i):null:r.createElement(c.x,Object.assign({},B(Object.assign({style:(0,j.c)(l,T),ref:t},k))),r.createElement("div",{style:{opacity:o||!h?1:0,transition:h?`opacity ${C}ms ${a}`:"none"}},i))});k.displayName="@mantine/core/Collapse";var T=n(77048);let O=`
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
`,v={type:"code",code:O,component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return r.createElement(c.x,{maw:400,mx:"auto"},r.createElement(u.Z,{justify:"center",mb:5},r.createElement(h.z,{onClick:t},"Toggle content")),r.createElement(k,{in:e},r.createElement(T.x,null,"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")))}},C=`
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
`,B={type:"code",code:C,component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return r.createElement(c.x,{maw:400,mx:"auto"},r.createElement(u.Z,{justify:"center",mb:5},r.createElement(h.z,{onClick:t},"Toggle with linear transition")),r.createElement(k,{in:e,transitionDuration:1e3,transitionTimingFunction:"linear"},r.createElement(T.x,null,"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")))}};function _(e){var{children:t,buttonProps:n}=e,i=(0,d._T)(e,["children","buttonProps"]);let[o,s]=(0,r.useState)(!1);return r.createElement(c.x,{maw:400,mx:"auto",mt:"md"},r.createElement(h.z,Object.assign({onClick:()=>s(e=>!e),mb:5},n)),r.createElement(k,Object.assign({in:o},i),t))}let D="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.",q={type:"code",component:function(){return r.createElement(_,{buttonProps:{children:"Root collapse"}},r.createElement(T.x,{mt:"md",size:"lg",fw:700},"This collapse contains another collapse"),r.createElement(T.x,{mt:"xs"},D),r.createElement(_,{buttonProps:{variant:"outline",children:"Inner collapse"}},r.createElement(T.x,{mt:"md",size:"lg",fw:700},"This collapse is inside another collapse"),r.createElement(T.x,{mt:"xs"},D)))}},F=(0,s.A)(a.us.Collapse);function N(e){let t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:v}),"\n",(0,i.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,i.jsx)(t.p,{children:"Set following props to control transition:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"transitionDuration"})," – duration in ms"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"transitionTimingFunction"})," – timing function (ease, linear, etc.), defaults to ",(0,i.jsx)(t.code,{children:"ease"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"onTransitionEnd"})," – called when transition ends (both open and close)"]}),"\n"]}),"\n",(0,i.jsx)(n,{data:B}),"\n",(0,i.jsx)(t.h2,{id:"nested-collapse-components",children:"Nested Collapse components"}),"\n",(0,i.jsx)(n,{data:q})]})}var P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(F,Object.assign({},e,{children:(0,i.jsx)(N,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=63704)}),_N_E=e.O()}]);