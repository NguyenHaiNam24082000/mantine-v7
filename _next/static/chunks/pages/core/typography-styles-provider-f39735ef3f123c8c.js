(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6753],{63279:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/typography-styles-provider",function(){return o(56483)}])},56483:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var a=o(85893),r=o(11151),i=o(34940),n=o(25263),s=o(67294),l=o(94873),h=o(12705);let d=`
<h1>Example article</h1>
<p>This is example article from <a href="https://css-tricks.com/your-team-is-not-them/">CSS-Tricks website</a> written by <a href="https://css-tricks.com/author/sdrasner/">Sarah Drasner</a>. It is used as an example to showcase real world styles of TypographyStylesProvider component, please read full article on <a href="https://css-tricks.com/your-team-is-not-them/">CSS-Tricks website</a>.</p>
<h2>Article itself</h2>
<p>Let’s talk for a moment about how we talk about our teams. This might not seem like something that needs a whole article dedicated to it, but it’s actually quite crucial. The way that we refer to our teams sends signals: to stakeholders, to your peers, to the team itself, and even to ourselves. In addressing how we speak about our teams, we’ll also talk about accountability.</p>
<p>I have noticed shared similarities in those folks I consider good managers whose teams deliver well, and those who don’t. It starts with how they communicate about their teams.</p>
<h3>Your team is “we”</h3>
<p>There can be a perception that as a manager of an organization you are in control at all times. Part of that control can invariably be perceived as how you appear to be in charge, are competent, or how you personally perform. Due to that, some bad behaviors can arise- not due to malice, but due to fear. For this reason, it can be tempting to take credit for success and avoid credit when there is failure.</p>
<p>The irony is that the more that you try to hold on to these external perceptions, the more it will slip away. Why? <strong>Because the problems you are solving as a manager really aren’t about&nbsp;<em>you</em>.</strong></p>
<p><strong>Your team is “we”.</strong> You are a driving force of that team, no matter how high up the hierarchy chain. What happens on that team is your responsibility. When you speak about your org, you should include yourself in the statement.</p>
<p>When your team succeeds in something though, then you can praise them and leave yourself out of it. Here’s an example:</p>
<p><em>They really pulled this project over the line, despite the incredibly tight project timeline. Everyone showed up and was driven throughout the engagement. They did a fantastic job.</em></p>
<p>However, if the team failed at something, the pronoun is then <strong>I</strong>:</p>
<p><em>I didn’t recognize how tight this turnaround was and failed to prioritize the team’s time well. I need to reconvene with everyone so we can come up with a better plan.</em></p>
<p>And never, ever <strong>them</strong>:</p>
<p><em>They didn’t adhere to this tight timeline. They just weren’t able to get this project over the line.</em></p>
<p>Do you see how the last example shirks responsibility for what occurred? Too often I will hear managers relieve themselves of their duties when shit hits the fan, and that is exactly when a manager needs to step up, and dive in to the problems that <strong>are their responsibility</strong>.</p>
<h3>The wider organization</h3>
<p>There is another piece of this too, and it impacts how your team operates. It’s that your job is not to be the ambassador of who you manage and think of every other group as separate. You&#39;re part of a larger system. A company is composed of groups, but those groups can only be successful if they’re working together, not if they are protecting their own org at all costs.</p>
<p>I admit I didn’t fully understand the depth of this until I read Patrick Lencioni’s <a href="https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529/"><em>The Advantage</em></a> thanks to Dalia Havens, a peer at Netlify. In the book, Lencioni talks about how organizational health, not “being smart”, as the biggest key to success. Plenty of smart people with good ideas build companies and see them fail. <strong>Success lies in being able to work together.</strong></p>
<p>Fundamentally, other groups at the company are not separate from your group, rather that you’re all part of one whole. <strong>The Leadership Team is also a team, and should be treated as <em>your team</em>. How you speak about this team is equally important.</strong></p>
<p>As such, when we talk about successes and failures of any groups, these should also be shared. There should be a sense that you’re all working towards a common goal together, and every group contributes to it. Within a leadership team there should be trust and vulnerability to own their part so that the whole organization can operate at its best.</p>
`,p=`
import { TypographyStylesProvider } from '@mantine/core';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}
`,m={type:"code",code:p,component:function(){return s.createElement(l.x,{maw:560,mx:"auto"},s.createElement(h.l,null,s.createElement("div",{dangerouslySetInnerHTML:{__html:d}})))}},u=`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<hr />
<p><a href="https://mantine.dev">Mantine link</a></p>
<p>Lorem ipsum, dolor sitamet consectetur adipisicing elit. Provident omnis laudantium itaque quisquam est, magnam harum, cum molestias necessitatibus obcaecati quod esse debitis velit nemo dolores deserunt. Quia, iure doloremque.</p>
<img src="https://images.unsplash.com/photo-1485219309265-6cda6f90a076?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" alt="Unsplash image" />
<ul>
  <li>list item - 1</li>
  <li>list item - 2</li>
  <li>list item - 3</li>
  <li>list item - 4</li>
</ul>

<ol>
  <li>list item - 1</li>
  <li>list item - 2</li>
  <li>list item - 3</li>
  <li>list item - 4</li>
</ol>

<blockquote>
  Life is like an npm install – you never know what you are going to get.
  <cite>– Forrest Gump</cite>
</blockquote>

<p>This is <code>code</code> and <mark>mark</mark> inside paragraph</p>

<pre>import React from 'react';
import { Avatar } from '@mantine/core';
import image from './image.png';

export function AvatarDemo() {
  return &lt;Avatar src={image} alt="it's me" /&gt;;
}</pre>

<table><thead><tr><th>Element position</th><th>Element name</th><th>Symbol</th><th>Atomic mass</th></tr></thead><tbody><tr><td>6</td><td>Carbon</td><td>C</td><td>12.011</td></tr><tr><td>7</td><td>Nitrogen</td><td>N</td><td>14.007</td></tr><tr><td>39</td><td>Yttrium</td><td>Y</td><td>88.906</td></tr><tr><td>56</td><td>Barium</td><td>Ba</td><td>137.33</td></tr><tr><td>58</td><td>Cerium</td><td>Ce</td><td>140.12</td></tr></tbody></table>`,c={type:"code",component:function(){return s.createElement(h.l,null,s.createElement("div",{dangerouslySetInnerHTML:{__html:u}}))}},y=(0,i.A)(n.us.TypographyStylesProvider);function g(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Mantine does not include typography global styles.\nUse ",(0,a.jsx)(t.code,{children:"TypographyStylesProvider"})," to add typography styles to your html content:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { TypographyStylesProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TypographyStylesProvider>\n      <div dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }} />\n    </TypographyStylesProvider>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(o,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"all-styles-demo",children:"All styles demo"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TypographyStylesProvider"})," includes styles for:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"paragraphs"}),"\n",(0,a.jsx)(t.li,{children:"headings"}),"\n",(0,a.jsx)(t.li,{children:"lists"}),"\n",(0,a.jsx)(t.li,{children:"blockquotes"}),"\n",(0,a.jsx)(t.li,{children:"tables"}),"\n",(0,a.jsx)(t.li,{children:"links"}),"\n",(0,a.jsx)(t.li,{children:"images"}),"\n",(0,a.jsx)(t.li,{children:"hr"}),"\n",(0,a.jsx)(t.li,{children:"code and pre"}),"\n"]}),"\n",(0,a.jsx)(o,{data:c})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(y,Object.assign({},e,{children:(0,a.jsx)(g,e)}))}},12705:function(e,t,o){"use strict";o.d(t,{l:function(){return p}});var a=o(59312),r=o(67294),i={root:"mantine-yPad50m"},n=o(75144),s=o(35577),l=o(89123),h=o(94873);let d={},p=(0,n.d)((e,t)=>{let o=(0,s.w)("TypographyStylesProvider",d,e),{classNames:n,className:p,style:m,styles:u,unstyled:c}=o,y=(0,a._T)(o,["classNames","className","style","styles","unstyled"]),g=(0,l.y)({name:"TypographyStylesProvider",classes:i,props:o,className:p,style:m,classNames:n,styles:u,unstyled:c});return r.createElement(h.x,Object.assign({ref:t},g("root"),y))});p.displayName="@mantine/core/TypographyStylesProvider"}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=63279)}),_N_E=e.O()}]);