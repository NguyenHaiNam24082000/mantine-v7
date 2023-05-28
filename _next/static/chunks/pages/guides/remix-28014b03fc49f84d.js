(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3540],{67936:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/remix",function(){return s(87452)}])},87452:function(e,n,s){"use strict";s.r(n);var i=s(85893),t=s(11151),r=s(34940),o=s(25263);let a=(0,r.A)(o.us.Remix);function l(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",em:"em"},(0,t.ah)(),e.components),{PackagesInstallation:s,InstallScript:r}=n;return r||c("InstallScript",!0),s||c("PackagesInstallation",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"usage-with-remix",children:"Usage with Remix"}),"\n",(0,i.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,i.jsxs)(n.p,{children:["Follow ",(0,i.jsx)(n.a,{href:"https://remix.run/",children:"Remix getting started guide"})," guide to create new Remix application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx create-remix@latest\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,i.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,i.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,i.jsx)(r,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"postcss.config.js"})," file at the root of your application with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Enable PostCSS in Remix ",(0,i.jsx)(n.code,{children:"remix.config.js"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  postcss: true,\n  // ... other options\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Add styles imports, ",(0,i.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," and ",(0,i.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"})," to ",(0,i.jsx)(n.code,{children:"app/root.tsx"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { cssBundleHref } from '@remix-run/css-bundle';\nimport type { LinksFunction } from '@remix-run/node';\nimport { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';\nimport { MantineProvider, ColorSchemeScript } from '@mantine/core';\n\nexport const links: LinksFunction = () => [\n  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),\n];\n\nexport default function App() {\n  return (\n    <html lang=\"en\">\n      <head>\n        <meta charSet=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n        <Meta />\n        <Links />\n        <ColorSchemeScript />\n      </head>\n      <body>\n        <MantineProvider>\n          <Outlet />\n          <ScrollRestoration />\n          <Scripts />\n          <LiveReload />\n        </MantineProvider>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hydration-mismatch",children:"Hydration mismatch"}),"\n",(0,i.jsx)(n.p,{children:"Remix is known to have hydration mismatches when using some browser extensions that inject\nextra markup into the generated page, for example Google Translate, apollo dev tools,\nLanguageTool, etc. If you are experiencing hydration mismatches, try disabling browser extensions."}),"\n",(0,i.jsxs)(n.p,{children:["Related issues in Remix repository: ",(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/issues/6394",children:"Issue"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/issues/6418",children:"Issue"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/issues/6026",children:"Issue"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Because of this issue, you may see the following errors in the console depending on your setup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:'Warning: Prop "data-mantine-script" did not match. Server: "null" Client: "true"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["Warning: Expected server HTML to contain a matching ",(0,i.jsx)(n.code,{children:"<link>"})," in ",(0,i.jsx)(n.code,{children:"<head>"}),"."]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Error: Hydration failed because the initial UI does not match what was rendered on the server."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Uncaught Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, Remix team ",(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/issues/6026#issuecomment-1507256309",children:"is not planning"}),"\nto fix this issue. If you are experiencing hydration mismatches, try opening the same page in\nincognito mode (usually extensions are disabled in incognito mode) or disabling browser extensions."]})]})}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(a,Object.assign({},e,{children:(0,i.jsx)(l,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=67936)}),_N_E=e.O()}]);