(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"FilesQuery",function(){return o});a(84);var n=a(0),r=a.n(n),i=(a(191),a(205));a(196);t.default=function(e){var t=e.data;return console.log(t.pages.edges),r.a.createElement(i.a,null,r.a.createElement("div",{style:{minHeight:"80vh",margin:"3rem auto",maxWidth:600}},r.a.createElement("h1",null,"all files"),r.a.createElement("br",null),r.a.createElement("ol",null,t.pages.edges.map(function(e,t){var a=e.node,n=parseInt(a.relativePath.split("/")[0])||"not specified";return r.a.createElement("li",{key:t},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:30}},r.a.createElement("strong",null,a.modifiedTime),r.a.createElement("small",null,"product date: ",n),r.a.createElement("small",null,"instance: ",a.sourceInstanceName),r.a.createElement("small",null,"filepath: ",a.relativePath)))}))))};var o="3806057751"},191:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return M}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return L});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(189),l=a.n(u);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var c=a(200),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var s=a(33);a.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),L=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function M(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}L.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},195:function(e,t,a){"use strict";a.d(t,"b",function(){return d}),a.d(t,"a",function(){return s});a(32),a(218);var n=a(204),r=a.n(n),i=a(0),o=a.n(i),u=a(191),l=a(211),c=a.n(l),d=function(e){var t=e.href,a=e.text,n=e.type,i=void 0===n?"default":n,l=e.selected,d=r()(e,["href","text","type","selected"]),s=c.a.link+" "+c.a[i]+" text-shadow-animation";return s=l===t?s+" "+c.a.selected:s,o.a.createElement(u.Link,{to:t,style:{textDecoration:"none"}},o.a.createElement("span",Object.assign({className:s},d),a))},s=function(e){var t=e.href,a=e.text,n=e.type,i=void 0===n?"default":n,u=e.selected,l=r()(e,["href","text","type","selected"]),d=c.a.link+" "+c.a[i]+" text-shadow-animation";return d=u===t?d+" "+c.a.selected:d,o.a.createElement("a",{href:t,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferer"},o.a.createElement("span",Object.assign({className:d},l),a))}},196:function(e,t,a){"use strict";var n=a(221),r=a.n(n),i=a(222),o=a.n(i),u=new r.a(o.a);u.rhythm,u.scale},200:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},205:function(e,t,a){"use strict";var n=a(206),r=a(0),i=a.n(r),o=a(4),u=a.n(o),l=a(191),c=(a(220),a(208)),d=a.n(c),s=(a(209),a(210)),m=a.n(s),L=a(195),M=a(212),j=a.n(M),y=function(e){var t=e.selected;return i.a.createElement("div",{className:j.a.navbar},i.a.createElement(L.b,{href:"/projects",text:"Our works",type:"header",selected:t}),i.a.createElement(L.b,{href:"/pricing",text:"Our prices",type:"header",selected:t}),i.a.createElement(L.b,{href:"/about",text:"Who we are",type:"header",selected:t}),i.a.createElement(L.b,{href:"/contact",text:"get started",type:"cta",selected:t}))},x=(a(196),a(213)),g=a.n(x),f=a(214),N=a.n(f),h=function(){return i.a.createElement("div",{className:g.a.default},i.a.createElement(l.Link,{to:"/",style:{textDecoration:"none",color:"black"}},i.a.createElement("img",{className:g.a.titleFont+" text-shadow-animation",src:N.a,alt:"THE INITIATIVE"})))},I=function(e){var t=e.selected;return i.a.createElement("div",{className:m.a.headerDiv+" header-global"},i.a.createElement("div",{className:m.a.header},i.a.createElement(h,null),i.a.createElement(y,{selected:t})))},E=a(215),p=a.n(E),v=function(e){var t=e.selected;return"home"!==t&&"/contact"!==t?i.a.createElement("div",{className:p.a.footer+" footer-global"},i.a.createElement("div",{className:p.a.footerBar},"Let us build your brand with you.",i.a.createElement(L.b,{href:"/contact",text:"get started."}))):null},D=function(e){var t=e.children,a=e.current;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){var n=d.a.mainDiv+" ";return"home"===a&&(n+=d.a.homepageFrame),i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{siteTitle:e.site.siteMetadata.title,selected:a}),i.a.createElement("div",{className:d.a.mainBody},i.a.createElement("div",{className:n},i.a.createElement("div",{className:d.a.innerDiv},t))),i.a.createElement(v,{height:170,selected:a}))},data:n})};D.propTypes={children:u.a.node.isRequired};t.a=D},206:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative"}}}}},207:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(59),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},208:function(e,t,a){e.exports={mainBody:"Layout-module--mainBody--1pOFw",mainDiv:"Layout-module--mainDiv--yiqIv",homepageFrame:"Layout-module--homepageFrame--2C0Yx",innerDiv:"Layout-module--innerDiv--1kO70"}},209:function(e,t,a){},210:function(e,t,a){e.exports={headerDiv:"Header-module--headerDiv--fQQJo",header:"Header-module--header--umFYf"}},211:function(e,t,a){e.exports={link:"Link-module--link--vl_cu",selected:"Link-module--selected--1aoKm",cta:"Link-module--cta--3JiLd",default:"Link-module--default----gUQ",header:"Link-module--header--1-zUM",secondary:"Link-module--secondary--162bU"}},212:function(e,t,a){e.exports={navbar:"Navbar-module--navbar--2n-uP"}},213:function(e,t,a){e.exports={default:"Title-module--default--2J_F_",titleFont:"Title-module--titleFont--3Y6d2"}},214:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODguOTkgNTEuNyI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTEyMy41Mi4xNGgyLjcyVjUxLjJoLTIuODZMMTA3LjY1LDguODQsMTA3LDl2NDIuMmwtMi43Ni4xMlYuMTFoMy4wN2wxNS42LDQyLC42Mi0uMDdaIi8+PHBhdGggZD0iTTI3LjgyLDUxLjE3SDI1LjA1Vi4xNUwyNy43NSwwdjI0SDQzLjg3Vi4xNWgzdjUxSDQ0VjI3LjA5SDI3LjgyWiIvPjxwYXRoIGQ9Ik0xOTAuNzEsMGgzLjM4YzMuNywxNyw3LjM5LDMzLjkzLDExLjEzLDUxLjExaC0zLjA4cS0xLjUxLTYuODgtMy4wOC0xNEgxODUuNTdjLTEsNC42MS0yLDkuMjgtMywxNC4wOWgtM1ptNy44MiwzNC4wOWMtMi05LjYxLTQtMTktNS45MS0yOC4zM2wtLjYsMC01Ljg5LDI4LjMxWiIvPjxwYXRoIGQ9Ik0yNTQuNCw1MS43aC0zLjA2Yy0zLjUzLTE3LjA4LTcuMDgtMzQuMjEtMTAuNjctNTEuNTRoMy4xNHE0LjM4LDIyLjA4LDguNzYsNDQuMmwuNzIsMHE0LjQtMjIuMTIsOC44MS00NC4zaDNaIi8+PHBhdGggZD0iTTI3NC43NCwyNC4xNWgxMi42Yy4wOCwxLC4xMywxLjY2LjIxLDIuNjhIMjc0Ljc4VjQ4LjUyaDE0LjA4Yy4wNSwxLC4wOSwxLjc1LjEzLDIuNjNIMjcxLjc2Vi4xNGgxNi45MVYyLjgySDI3NC43NFoiLz48cGF0aCBkPSJNNTUuNy4xM0g3Mi40M1YyLjg0SDU4LjZWMjRINzEuMjNsLjM0LDIuNzhINTguNjR2MjEuNkg3Mi43OGwuMjQsMi43SDU1LjdaIi8+PHBhdGggZD0iTTAsMi44OFYuMTRIMTkuNGwuMTIsMi42MUgxMS4xN1Y1MS4xN0g4LjIyVjIuODhaIi8+PHBhdGggZD0iTTE1Mi42LDIuODJoLTguMjZWLjE0aDE5LjM1VjIuNzhoLTguMVY1MS4xN2gtM1oiLz48cGF0aCBkPSJNMjEzLjYzLDIuODRoLTguMjlMMjA1LjE3LjE1aDE5LjU4TDIyNSwyLjc2aC04LjM5VjUxLjE3aC0zWiIvPjxwYXRoIGQ9Ik0xMzguMzMsNTEuMTdoLTIuOVYuMTZoMi45WiIvPjxwYXRoIGQ9Ik05Mi4xOS4xNGgyLjY3djUxSDkyLjE5WiIvPjxwYXRoIGQ9Ik0xNjkuODQuMTFsMi40OC0uMVY1MS4xOWgtMi40OFoiLz48cGF0aCBkPSJNMjMwLjg3LjExaDIuNTdWNTEuMTZoLTIuNTdaIi8+PC9nPjwvZz48L3N2Zz4="},215:function(e,t,a){e.exports={footer:"Footer-module--footer--3JHPX",footerBar:"Footer-module--footerBar--2zH_R"}}}]);
//# sourceMappingURL=component---src-pages-all-files-js-4aa4478d7c332ead1999.js.map