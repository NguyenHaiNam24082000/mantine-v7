(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7319],{69575:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/default-props",function(){return o(27946)}])},27946:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return T}});var t=o(85893),r=o(11151),s=o(34940),c=o(25263),i=o(67294),p=o(39242),a=o(43406),l=o(49441),u=o(74378);let d=`
import { MantineProvider, Button, Group, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineProvider>
  );
}
`,m=(0,p.j)({components:{Button:a.z.extend({defaultProps:{color:"cyan",variant:"outline"}})}}),h={type:"code",component:function(){return i.createElement(l.M2,{theme:m},i.createElement(u.Z,null,i.createElement(a.z,null,"Default button"),i.createElement(a.z,{color:"red",variant:"filled"},"Button with props")))},centered:!0,code:d};var f=o(35577);let P=`
import { useProps, MantineThemeProvider, createTheme } from '@mantine/core';

interface CustomComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<CustomComponentProps> = {
  color: 'red',
};

function CustomComponent(props: CustomComponentProps) {
  const { color, children } = useProps('CustomComponent', defaultProps, props);
  return <div style={{ color }}>{children}</div>;
}

const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: 'green',
      },
    },
  },
});

function Demo() {
  return (
    <div>
      <CustomComponent>Default color</CustomComponent>

      <MantineThemeProvider theme={theme}>
        <CustomComponent>Provider color</CustomComponent>
        <CustomComponent color="blue">Prop color</CustomComponent>
      </MantineThemeProvider>
    </div>
  );
}
`,v={color:"red"};function x(e){let{color:n,children:o}=(0,f.w)("CustomComponent",v,e);return i.createElement("div",{style:{color:n}},o)}let j=(0,p.j)({components:{CustomComponent:{defaultProps:{color:"green"}}}}),C={type:"code",component:function(){return i.createElement("div",null,i.createElement(x,null,"Default color"),i.createElement(l.M2,{theme:j},i.createElement(x,null,"Provider color"),i.createElement(x,{color:"blue"},"Prop color")))},code:P},b=(0,s.A)(c.us.DefaultProps);function M(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"default-props",children:"Default props"}),"\n",(0,t.jsxs)(n.p,{children:["You can define default props for every Mantine component by setting ",(0,t.jsx)(n.code,{children:"theme.components"}),".\nThese props will be used by default by all components of your application unless they are overridden by component props:"]}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"default-props-with-mantinethemeprovider",children:"Default props with MantineThemeProvider"}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.a,{href:"/theming/mantine-provider#mantinethemeprovider",children:"MantineThemeProvider"})," to define default props\nfor a part of your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineThemeProvider, Button, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      defaultProps: {\n        color: 'cyan',\n        variant: 'outline',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <>\n      <MantineThemeProvider theme={theme}>\n        <AppPart />\n      </MantineThemeProvider>\n\n      <AnotherAppPart />\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"default-props-for-compound-components",children:"Default props for compound components"}),"\n",(0,t.jsxs)(n.p,{children:["Some components like ",(0,t.jsx)(n.a,{href:"/core/menu/",children:"Menu"})," and ",(0,t.jsx)(n.a,{href:"/core/tabs/",children:"Tabs"})," have associated compound components:\n",(0,t.jsx)(n.code,{children:"Menu.Item"}),", ",(0,t.jsx)(n.code,{children:"Tabs.List"}),", etc.. You can add default props to these components by omitting the dot from component name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, Menu, Tabs } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        components: {\n          MenuItem: Menu.Item.extend({\n            defaultProps: { color: 'red' },\n          }),\n\n          TabsList: Tabs.List.extend({\n            defaultProps: {\n              justify: 'center',\n            },\n          }),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"useprops-hook",children:"useProps hook"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"useProps"})," hook to add default props support to any custom component.\n",(0,t.jsx)(n.code,{children:"useProps"})," accepts three arguments:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"component name (string) – it is used to connect component with theme"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaultProps"})," – default props on component level – these props are used when default props are not defined on theme"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"props"})," – props passed to component"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:C})]})}var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(b,Object.assign({},e,{children:(0,t.jsx)(M,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=69575)}),_N_E=e.O()}]);