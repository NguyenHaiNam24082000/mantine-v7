(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2007],{85156:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/redwood",function(){return s(887)}])},887:function(e,n,s){"use strict";s.r(n);var o=s(85893),r=s(11151),t=s(34940),i=s(25263);let d=(0,t.A)(i.us.Redwood);function l(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",strong:"strong"},(0,r.ah)(),e.components),{PackagesInstallation:s,InstallScript:t}=n;return t||a("InstallScript",!0),s||a("PackagesInstallation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-with-redwoodjs",children:"Usage with RedwoodJS"}),"\n",(0,o.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,o.jsxs)(n.p,{children:["Follow ",(0,o.jsx)(n.a,{href:"https://remix.run/",children:"Redwood getting started guide"})," guide to\ncreate new Redwood application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn create redwood-app my-redwood-project\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Note that it is recommended to use ",(0,o.jsx)(n.code,{children:"yarn"})," instead of ",(0,o.jsx)(n.code,{children:"npm"})," to install dependencies."]})}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.code,{children:"web"})," directory before installing dependencies:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd web\n"})}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,o.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,o.jsx)(t,{packages:"postcss postcss-preset-mantine postcss-simple-vars postcss-loader",dev:!0}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"postcss.config.js"})," file in ",(0,o.jsx)(n.code,{children:"web"})," directory with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"web/config/webpack.config.js"})," file with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"/** @returns {import('webpack').Configuration} Webpack Configuration */\nmodule.exports = (config) => {\n  const stylesRules = ['\\\\.css$', '\\\\.module\\\\.css$', '\\\\.scss$', '\\\\.module\\\\.scss$'];\n\n  config.module.rules[0].oneOf.forEach((rule) => {\n    if (stylesRules.includes(rule.test.source)) {\n      rule.use.push('postcss-loader');\n    }\n  });\n\n  return config;\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Add styles imports, ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," and ",(0,o.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"}),"\nto ",(0,o.jsx)(n.code,{children:"web/src/App.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { MantineProvider, ColorSchemeScript } from '@mantine/core';\n\nimport { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';\nimport { RedwoodApolloProvider } from '@redwoodjs/web/apollo';\n\nimport FatalErrorPage from 'src/pages/FatalErrorPage';\nimport Routes from 'src/Routes';\n\nconst App = () => (\n  <FatalErrorBoundary page={FatalErrorPage}>\n    <RedwoodProvider titleTemplate=\"%PageTitle | %AppTitle\">\n      <ColorSchemeScript />\n      <MantineProvider>\n        <RedwoodApolloProvider>\n          <Routes />\n        </RedwoodApolloProvider>\n      </MantineProvider>\n    </RedwoodProvider>\n  </FatalErrorBoundary>\n);\n\nexport default App;\n"})}),"\n",(0,o.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn rw dev\n"})})]})}function a(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,Object.assign({},e,{children:(0,o.jsx)(l,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=85156)}),_N_E=e.O()}]);