(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(205),o=a(217),l=function(e){var t=e.children,a={page:{zIndex:-1,height:"80vh",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:"0 20px 50px 0",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},dummyContent:{fontSize:12,display:"inline-block",textAlign:"left",lineHeight:2,height:49,verticalAlign:"middle",marginTop:-30}};return r.a.createElement("div",{style:a.page},r.a.createElement("div",{style:{height:200}},r.a.createElement("h1",{style:a.text},"project goals"),r.a.createElement("p",{style:a.dummyContent},"website: ",r.a.createElement("strong",null,'"gib me data i gib you finished webpage"'),r.a.createElement("br",null),'you: "ok. ╮(. ❛ ᴗ ❛.) ╭"',r.a.createElement("br",null),"website: . . .. ...ᕕ( ᐛ )ᕗ",r.a.createElement("br",null),"you: ",r.a.createElement("span",{style:{fontSize:"2em"}},"[")," ʕ •ᴥ•ʔ"," ",r.a.createElement("span",{style:{fontSize:"2em"}},"]"),"╯ʳᵃʷʳʳʳ__ _へ__(‾◡◝ )>")),t)};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement(l,null))}},191:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return y});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(189),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(200),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),y=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}y.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},195:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return d});a(32),a(219);var n=a(204),r=a.n(n),i=a(0),o=a.n(i),l=a(191),c=a(212),u=a.n(c),s=function(e){var t=e.href,a=e.text,n=e.type,i=void 0===n?"default":n,c=e.selected,s=r()(e,["href","text","type","selected"]),d=u.a.link+" "+u.a[i]+" text-shadow-animation";return d=c===t?d+" "+u.a.selected:d,o.a.createElement(l.Link,{to:t,style:{textDecoration:"none"}},o.a.createElement("span",Object.assign({className:d},s),a))},d=function(e){var t=e.href,a=e.text,n=e.type,i=void 0===n?"default":n,l=e.selected,c=r()(e,["href","text","type","selected"]),s=u.a.link+" "+u.a[i]+" text-shadow-animation";return s=l===t?s+" "+u.a.selected:s,o.a.createElement("a",{href:t,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferer"},o.a.createElement("span",Object.assign({className:s},c),a))}},196:function(e,t,a){"use strict";var n=a(222),r=a.n(n),i=a(223),o=a.n(i),l=new r.a(o.a);l.rhythm,l.scale},200:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},205:function(e,t,a){"use strict";var n=a(206),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(191),u=(a(221),a(208)),s=a.n(u),d=(a(209),a(210),a(211)),m=a.n(d),y=a(195),g=a(213),p=a.n(g),L=function(e){var t=e.selected;return i.a.createElement("div",{className:p.a.navbar},i.a.createElement(y.b,{href:"/projects",text:"Our works",type:"header",selected:t}),i.a.createElement(y.b,{href:"/pricing",text:"Our prices",type:"header",selected:t}),i.a.createElement(y.b,{href:"/about",text:"Who we are",type:"header",selected:t}),i.a.createElement(y.b,{href:"/contact",text:"get started",type:"cta",selected:t}))},f=(a(196),a(214)),M=a.n(f),x=a(215),j=a.n(x),h=function(){return i.a.createElement("div",{className:M.a.default},i.a.createElement(c.Link,{to:"/",style:{textDecoration:"none",color:"black"}},i.a.createElement("img",{className:M.a.titleFont+" text-shadow-animation",src:j.a,alt:"THE INITIATIVE"})))},N=function(e){var t=e.selected;return i.a.createElement("div",{className:m.a.headerDiv+" header-global"},i.a.createElement("div",{className:m.a.header},i.a.createElement(h,null),i.a.createElement(L,{selected:t})))},E=a(216),I=a.n(E),v=function(e){var t=e.selected;return"home"!==t&&"/contact"!==t?i.a.createElement("div",{className:I.a.footer+" footer-global"},i.a.createElement("div",{className:I.a.footerBar},"Let us build your brand with you.",i.a.createElement(y.b,{href:"/contact",text:"get started."}))):null},w=function(e){var t=e.children,a=e.current;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){var n=s.a.mainDiv+" ";return"home"===a&&(n+=s.a.homepageFrame),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{siteTitle:e.site.siteMetadata.title,selected:a}),i.a.createElement("div",{className:s.a.mainBody},i.a.createElement("div",{className:n},i.a.createElement("div",{className:s.a.innerDiv},t))),i.a.createElement(v,{height:170,selected:a}))},data:n})};w.propTypes={children:l.a.node.isRequired};t.a=w},206:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative"}}}}},207:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(59),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},208:function(e,t,a){e.exports={mainBody:"Layout-module--mainBody--1pOFw",mainDiv:"Layout-module--mainDiv--yiqIv",homepageFrame:"Layout-module--homepageFrame--2C0Yx",innerDiv:"Layout-module--innerDiv--1kO70"}},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){e.exports={headerDiv:"Header-module--headerDiv--fQQJo",header:"Header-module--header--umFYf"}},212:function(e,t,a){e.exports={link:"Link-module--link--vl_cu",selected:"Link-module--selected--1aoKm",cta:"Link-module--cta--3JiLd",default:"Link-module--default----gUQ",inverted:"Link-module--inverted--3yvbU Link-module--default----gUQ",header:"Link-module--header--1-zUM",secondary:"Link-module--secondary--162bU"}},213:function(e,t,a){e.exports={navbar:"Navbar-module--navbar--2n-uP"}},214:function(e,t,a){e.exports={default:"Title-module--default--2J_F_",titleFont:"Title-module--titleFont--3Y6d2"}},215:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODguOTkgNTEuNyI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTEyMy41Mi4xNGgyLjcyVjUxLjJoLTIuODZMMTA3LjY1LDguODQsMTA3LDl2NDIuMmwtMi43Ni4xMlYuMTFoMy4wN2wxNS42LDQyLC42Mi0uMDdaIi8+PHBhdGggZD0iTTI3LjgyLDUxLjE3SDI1LjA1Vi4xNUwyNy43NSwwdjI0SDQzLjg3Vi4xNWgzdjUxSDQ0VjI3LjA5SDI3LjgyWiIvPjxwYXRoIGQ9Ik0xOTAuNzEsMGgzLjM4YzMuNywxNyw3LjM5LDMzLjkzLDExLjEzLDUxLjExaC0zLjA4cS0xLjUxLTYuODgtMy4wOC0xNEgxODUuNTdjLTEsNC42MS0yLDkuMjgtMywxNC4wOWgtM1ptNy44MiwzNC4wOWMtMi05LjYxLTQtMTktNS45MS0yOC4zM2wtLjYsMC01Ljg5LDI4LjMxWiIvPjxwYXRoIGQ9Ik0yNTQuNCw1MS43aC0zLjA2Yy0zLjUzLTE3LjA4LTcuMDgtMzQuMjEtMTAuNjctNTEuNTRoMy4xNHE0LjM4LDIyLjA4LDguNzYsNDQuMmwuNzIsMHE0LjQtMjIuMTIsOC44MS00NC4zaDNaIi8+PHBhdGggZD0iTTI3NC43NCwyNC4xNWgxMi42Yy4wOCwxLC4xMywxLjY2LjIxLDIuNjhIMjc0Ljc4VjQ4LjUyaDE0LjA4Yy4wNSwxLC4wOSwxLjc1LjEzLDIuNjNIMjcxLjc2Vi4xNGgxNi45MVYyLjgySDI3NC43NFoiLz48cGF0aCBkPSJNNTUuNy4xM0g3Mi40M1YyLjg0SDU4LjZWMjRINzEuMjNsLjM0LDIuNzhINTguNjR2MjEuNkg3Mi43OGwuMjQsMi43SDU1LjdaIi8+PHBhdGggZD0iTTAsMi44OFYuMTRIMTkuNGwuMTIsMi42MUgxMS4xN1Y1MS4xN0g4LjIyVjIuODhaIi8+PHBhdGggZD0iTTE1Mi42LDIuODJoLTguMjZWLjE0aDE5LjM1VjIuNzhoLTguMVY1MS4xN2gtM1oiLz48cGF0aCBkPSJNMjEzLjYzLDIuODRoLTguMjlMMjA1LjE3LjE1aDE5LjU4TDIyNSwyLjc2aC04LjM5VjUxLjE3aC0zWiIvPjxwYXRoIGQ9Ik0xMzguMzMsNTEuMTdoLTIuOVYuMTZoMi45WiIvPjxwYXRoIGQ9Ik05Mi4xOS4xNGgyLjY3djUxSDkyLjE5WiIvPjxwYXRoIGQ9Ik0xNjkuODQuMTFsMi40OC0uMVY1MS4xOWgtMi40OFoiLz48cGF0aCBkPSJNMjMwLjg3LjExaDIuNTdWNTEuMTZoLTIuNTdaIi8+PC9nPjwvZz48L3N2Zz4="},216:function(e,t,a){e.exports={footer:"Footer-module--footer--3JHPX",footerBar:"Footer-module--footerBar--2zH_R"}},217:function(e,t,a){"use strict";var n=a(218),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(229),u=a.n(c),s=a(191);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{href:"https://aftertheflood.github.io/sparks/styles/font-faces.css",rel:"stylesheet"}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},218:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative",description:"we help build your digital presence",author:"@panzerstadt, @mayojich"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-bf1cdf16cbc01a2c0d2a.js.map