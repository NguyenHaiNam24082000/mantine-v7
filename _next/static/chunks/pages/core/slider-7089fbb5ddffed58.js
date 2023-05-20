(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5752],{4032:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return a(99286)}])},99286:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return eW}});var t=a(85893),n=a(11151),r=a(34940),i=a(25263),o=a(67294),s=a(24138),u=Object.defineProperty,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,l,a)=>l in e?u(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,h=(e,l)=>{for(var a in l||(l={}))c.call(l,a)&&b(e,a,l[a]);if(d)for(var a of d(l))m.call(l,a)&&b(e,a,l[a]);return e};let p=`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,f={type:"configurator",component:function(e){return o.createElement(s.i,h({defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]},e))},code:p,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var x=a(94873),v=a(35179),y=a(45266),g=a(55487),j=a(61408),w=a(4597),S=a(84789),k=a(38889),E=a(12326),V=a(89641),O=a(75144),T=a(35577),z=a(89123),C=a(9149),D=a(95553),A=a(71350),R=a(94975),P=a(46393),L=Object.defineProperty,M=Object.defineProperties,F=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,B=(e,l,a)=>l in e?L(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,W=(e,l)=>{for(var a in l||(l={}))N.call(l,a)&&B(e,a,l[a]);if(I)for(var a of I(l))_.call(l,a)&&B(e,a,l[a]);return e},H=(e,l)=>M(e,F(l)),Z=(e,l)=>{var a={};for(var t in e)N.call(e,t)&&0>l.indexOf(t)&&(a[t]=e[t]);if(null!=e&&I)for(var t of I(e))0>l.indexOf(t)&&_.call(e,t)&&(a[t]=e[t]);return a};let $=(0,D.Z)((e,{size:l,color:a,thumbSize:t,radius:n})=>({root:{"--slider-size":(0,A.ap)(l,"slider-size"),"--slider-color":(0,R.p)(a,e),"--slider-radius":(0,A.H5)(n),"--slider-thumb-size":void 0!==t?(0,P.h)(t):"calc(var(--slider-size) * 2)"}})),K={size:"md",radius:"xl",min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},X=(0,O.d)((e,l)=>{let a=(0,T.w)("RangeSlider",K,e),{classNames:t,styles:n,value:r,onChange:i,onChangeEnd:s,size:u,min:d,max:c,minRange:m,maxRange:b,step:h,precision:p,defaultValue:f,name:x,marks:O,label:D,labelTransitionProps:A,labelAlwaysOn:R,thumbFromLabel:P,thumbToLabel:L,showLabelOnHover:M,thumbChildren:F,disabled:I,unstyled:N,scale:_,inverted:B,className:X,style:Y,vars:U}=a,G=Z(a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","minRange","maxRange","step","precision","defaultValue","name","marks","label","labelTransitionProps","labelAlwaysOn","thumbFromLabel","thumbToLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars"]),J=(0,z.y)({name:"Slider",props:a,classes:V.Z,classNames:t,className:X,styles:n,style:Y,vars:U,varsResolver:$}),{dir:q}=(0,C.gm)(),[Q,ee]=(0,o.useState)(-1),[el,ea]=(0,o.useState)(!1),[et,en]=(0,v.C)({value:r,defaultValue:f,finalValue:[d,c],onChange:i}),er=(0,o.useRef)(et),ei=(0,o.useRef)([]),eo=(0,o.useRef)(void 0),es=[(0,k.b)({value:et[0],min:d,max:c}),(0,k.b)({value:et[1],min:d,max:c})],eu=e=>{en(e),er.current=e};(0,o.useEffect)(()=>{Array.isArray(r)&&(er.current=r)},Array.isArray(r)?[r[0],r[1]]:[null,null]);let ed=(e,l,a)=>{let t=[...er.current];t[l]=e,0===l&&(e>t[1]-(m-1e-9)&&(t[1]=Math.min(e+m,c)),e>(c-(m-1e-9)||d)&&(t[l]=er.current[l]),t[1]-e>b&&(t[1]=e+b)),1===l&&(e<t[0]+m&&(t[0]=Math.max(e-m,d)),e<t[0]+m&&(t[l]=er.current[l]),e-t[0]>b&&(t[0]=e-b)),eu(t),a&&(null==s||s(er.current))},ec=e=>{if(!I){let l=(0,E.i)({value:e,min:d,max:c,step:h,precision:p});ed(l,eo.current,!1)}},{ref:em,active:eb}=(0,y.r)(({x:e})=>ec(e),{onScrubEnd:()=>null==s?void 0:s(er.current)},q),eh=e=>{em.current.focus();let l=em.current.getBoundingClientRect(),a=function(e){if("TouchEvent"in window&&e instanceof window.TouchEvent){let l=e.touches[0];return l.clientX}return e.clientX}(e.nativeEvent),t=(0,E.i)({value:a-l.left,max:c,min:d,step:h,containerWidth:l.width}),n=Math.abs(et[0]-t)>Math.abs(et[1]-t)?1:0;eo.current="ltr"===q?n:1===n?0:1},ep=()=>1!==Q&&0!==Q?(ee(0),0):Q,ef=e=>{if(!I)switch(e.key){case"ArrowUp":{e.preventDefault();let l=ep();ei.current[l].focus(),ed(Math.min(Math.max(er.current[l]+h,d),c),l,!0);break}case"ArrowRight":{e.preventDefault();let l=ep();ei.current[l].focus(),ed(Math.min(Math.max("rtl"===q?er.current[l]-h:er.current[l]+h,d),c),l,!0);break}case"ArrowDown":{e.preventDefault();let l=ep();ei.current[l].focus(),ed(Math.min(Math.max(er.current[l]-h,d),c),l,!0);break}case"ArrowLeft":{e.preventDefault();let l=ep();ei.current[l].focus(),ed(Math.min(Math.max("rtl"===q?er.current[l]+h:er.current[l]-h,d),c),l,!0)}}},ex={max:c,min:d,size:u,labelTransitionProps:A,labelAlwaysOn:R,onBlur:()=>ee(-1)},ev=Array.isArray(F);return o.createElement(g.Y,{value:{getStyles:J}},o.createElement(j.l,H(W({},G),{size:u,ref:l,disabled:I}),o.createElement(w.f,{offset:es[0],marksOffset:et[0],filled:es[1]-es[0],marks:O,inverted:B,min:d,max:c,value:et[1],disabled:I,containerProps:{ref:em,onMouseEnter:M?()=>ea(!0):void 0,onMouseLeave:M?()=>ea(!1):void 0,onTouchStartCapture:eh,onTouchEndCapture:()=>{eo.current=-1},onMouseDownCapture:eh,onMouseUpCapture:()=>{eo.current=-1},onKeyDownCapture:ef}},o.createElement(S.b,H(W({},ex),{value:_(et[0]),position:es[0],dragging:eb,label:"function"==typeof D?D(_(et[0])):D,ref:e=>{ei.current[0]=e},thumbLabel:P,onMouseDown:()=>void(eo.current=0),onFocus:()=>ee(0),showLabelOnHover:M,isHovered:el,disabled:I}),ev?F[0]:F),o.createElement(S.b,H(W({},ex),{thumbLabel:L,value:_(et[1]),position:es[1],dragging:eb,label:"function"==typeof D?D(_(et[1])):D,ref:e=>{ei.current[1]=e},onMouseDown:()=>void(eo.current=1),onFocus:()=>ee(1),showLabelOnHover:M,isHovered:el,disabled:I}),ev?F[1]:F)),o.createElement("input",{type:"hidden",name:`${x}_from`,value:et[0]}),o.createElement("input",{type:"hidden",name:`${x}_to`,value:et[1]})))});X.displayName="@mantine/core/RangeSlider";let Y=`
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
`,U={type:"code",component:function(){return o.createElement(x.x,{maw:400,mx:"auto"},o.createElement(s.i,{defaultValue:60,disabled:!0}),o.createElement(X,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]}))},code:Y};var G=a(77048);let J=`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`,q={type:"code",component:function(){let[e,l]=(0,o.useState)(50),[a,t]=(0,o.useState)(50);return o.createElement(x.x,{maw:400,mx:"auto"},o.createElement(s.i,{value:e,onChange:l,onChangeEnd:t}),o.createElement(G.x,{mt:"md",size:"sm"},"onChange value: ",o.createElement("b",null,e)),o.createElement(G.x,{mt:5,size:"sm"},"onChangeEnd value: ",o.createElement("b",null,a)))},code:J},Q=`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,ee={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(G.x,{size:"sm"},"No label"),o.createElement(s.i,{defaultValue:40,label:null}),o.createElement(G.x,{size:"sm",mt:"xl"},"Formatted label"),o.createElement(s.i,{defaultValue:40,label:e=>`${e} \xb0C`}),o.createElement(G.x,{size:"sm",mt:"xl"},"Label always visible"),o.createElement(s.i,{defaultValue:40,labelAlwaysOn:!0}),o.createElement(G.x,{size:"sm",mt:"xl"},"Custom label transition"),o.createElement(s.i,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}}))},code:Q,centered:!0,maxWidth:400},el=`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,ea=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],et={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(G.x,null,"Decimal step"),o.createElement(s.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),o.createElement(G.x,{mt:"md"},"Step matched with marks"),o.createElement(s.i,{defaultValue:50,label:e=>ea.find(l=>l.value===e).label,step:25,marks:ea,styles:{markLabel:{display:"none"}}}))},code:el,centered:!0,maxWidth:400},en=`
import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`,er={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return o.createElement(o.Fragment,null,o.createElement(s.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),o.createElement(s.i,{defaultValue:40,marks:e,mb:32}),o.createElement(X,{defaultValue:[20,80],marks:e,mb:32}))},code:en,centered:!0,maxWidth:400};var ei=Object.defineProperty,eo=Object.defineProperties,es=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,em=(e,l,a)=>l in e?ei(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,eb=(e,l)=>{for(var a in l||(l={}))ed.call(l,a)&&em(e,a,l[a]);if(eu)for(var a of eu(l))ec.call(l,a)&&em(e,a,l[a]);return e},eh=(e,l)=>eo(e,es(l));let ep=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,ef={type:"configurator",component:function(e){return o.createElement(s.i,eh(eb({},e),{defaultValue:20}))},code:ep,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var ex=a(1002),ev=(0,a(54764).Z)("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let ey=`
import { Slider, RangeSlider, rem } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
`,eg={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{thumbChildren:o.createElement(ex.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,P.h)(2),padding:(0,P.h)(3)}}}),o.createElement(X,{mt:"xl",styles:{thumb:{borderWidth:(0,P.h)(2),padding:(0,P.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[o.createElement(ex.Z,{size:"1rem",stroke:1.5,key:"1"}),o.createElement(ev,{size:"1rem",stroke:1.5,key:"2"})]}))},code:ey,maxWidth:400,centered:!0},ej=`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`;function ew(e){let l=["KB","MB","GB","TB"],a=0,t=e;for(;t>=1024&&a<l.length-1;)a+=1,t/=1024;return`${t} ${l[a]}`}let eS=e=>2**e,ek={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{scale:eS,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:ew}),o.createElement(X,{mt:50,scale:eS,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:ew}))},code:ej,centered:!0,maxWidth:400},eE=`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,eV={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{inverted:!0,defaultValue:80}),o.createElement(X,{inverted:!0,defaultValue:[40,80],mt:"xl"}))},code:eE,centered:!0,maxWidth:400};var eO=a(1287),eT=Object.defineProperty,ez=Object.getOwnPropertySymbols,eC=Object.prototype.hasOwnProperty,eD=Object.prototype.propertyIsEnumerable,eA=(e,l,a)=>l in e?eT(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,eR=(e,l)=>{for(var a in l||(l={}))eC.call(l,a)&&eA(e,a,l[a]);if(ez)for(var a of ez(l))eD.call(l,a)&&eA(e,a,l[a]);return e};let eP=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,eL={type:"styles-api",data:eO.a,component:function(e){return o.createElement(s.i,eR({marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0},e))},code:eP,centered:!0,maxWidth:400};var eM={track:"mantine-ZJRFk4x",mark:"mantine-nEZPdgE",markLabel:"mantine-syGJJ1c",thumb:"mantine-OaLcDe8"};let eF=`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
`,eI=`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: rem(6px);
  height: rem(6px);
  border-radius: rem(6px);
  transform: translateX(rem(-3px)) translateY(rem(-2px));
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: rem(5px);
  margin-top: 0;
}

.thumb {
  height: rem(16px);
  width: rem(16px);
  background-color: var(--mantine-color-white);
  border-width: rem(1px);
  box-shadow: var(--mantine-shadow-sm);
}
`,eN={type:"code",component:function(){return o.createElement(x.x,{maw:400,pt:15,pb:20,mx:"auto"},o.createElement(s.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:eM}))},code:[{fileName:"Demo.tsx",code:eF,language:"tsx"},{fileName:"Demo.module.css",code:eI,language:"css"}]},e_=(0,r.A)(i.us.Slider);function eB(e){let l=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,n.ah)(),e.components),{Demo:a,StylesApiSelectors:r,KeyboardEventsTable:i}=l;return a||eH("Demo",!0),i||eH("KeyboardEventsTable",!0),r||eH("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:f}),"\n",(0,t.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(l.p,{children:["Controlled ",(0,t.jsx)(l.code,{children:"Slider"}),":"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Controlled ",(0,t.jsx)(l.code,{children:"RangeSlider"}),":"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(l.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(a,{data:U}),"\n",(0,t.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,t.jsx)(a,{data:q}),"\n",(0,t.jsx)(l.h2,{id:"control-label",children:"Control label"}),"\n",(0,t.jsx)(l.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,t.jsx)(l.code,{children:"f => f"})]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,t.jsx)(l.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,t.jsx)(a,{data:ee}),"\n",(0,t.jsx)(l.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,t.jsx)(a,{data:et}),"\n",(0,t.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,t.jsxs)(l.p,{children:["Add any number of marks to slider by setting ",(0,t.jsx)(l.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,t.jsx)(l.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,t.jsx)(a,{data:er}),"\n",(0,t.jsx)(l.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,t.jsx)(a,{data:ef}),"\n",(0,t.jsx)(l.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,t.jsx)(a,{data:eg}),"\n",(0,t.jsx)(l.h2,{id:"scale",children:"Scale"}),"\n",(0,t.jsxs)(l.p,{children:["You can use the ",(0,t.jsx)(l.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,t.jsxs)(l.p,{children:["In the following demo, the value ",(0,t.jsx)(l.code,{children:"x"})," represents the value ",(0,t.jsx)(l.code,{children:"2^x"}),". Increasing ",(0,t.jsx)(l.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,t.jsx)(l.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(a,{data:ek}),"\n",(0,t.jsx)(l.h2,{id:"inverted",children:"Inverted"}),"\n",(0,t.jsxs)(l.p,{children:["You can invert the track with the ",(0,t.jsx)(l.code,{children:"inverted"})," prop:"]}),"\n",(0,t.jsx)(a,{data:eV}),"\n",(0,t.jsx)(r,{component:"Slider"}),"\n",(0,t.jsx)(a,{data:eL}),"\n",(0,t.jsxs)(l.p,{children:["Example of using ",(0,t.jsx)(l.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,t.jsx)(l.code,{children:"Slider"})," styles:"]}),"\n",(0,t.jsx)(a,{data:eN}),"\n",(0,t.jsx)(l.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"Slider"})," and ",(0,t.jsx)(l.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,t.jsx)(l.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,t.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"Slider"})," and ",(0,t.jsx)(l.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"Thumbs are focusable"}),"\n",(0,t.jsx)(l.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,t.jsx)(l.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'import { Slider, RangeSlider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider thumbFromLabel="First thumb aria-label" thumbToLabel="Second thumb aria-label" />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(l.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(i,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}var eW=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(e_,Object.assign({},e,{children:(0,t.jsx)(eB,e)}))};function eH(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1002:function(e,l,a){"use strict";a.d(l,{Z:function(){return t}});var t=(0,a(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=4032)}),_N_E=e.O()}]);