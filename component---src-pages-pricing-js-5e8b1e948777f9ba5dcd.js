(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(436),l=a.n(i),c=a(204),o=a(217);t.default=function(){return r.a.createElement(c.a,{current:"/pricing"},r.a.createElement(o.a,{title:"pricing",keywords:["prices","pricing","package"]}),r.a.createElement("div",{className:l.a.frame},r.a.createElement("h1",{className:l.a.pageTitle},"Our prices"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h5",null,"The services we provide :"),r.a.createElement("p",null,"Brand Design Consultation",r.a.createElement("br",null),"Website Hosting",r.a.createElement("br",null),"Static",r.a.createElement("sup",{className:"text-highlight"},"#")," Website Design + 2 Iterations",r.a.createElement("span",{className:"text-highlight"},"*")),r.a.createElement("br",null),r.a.createElement("h5",null,"For how much :"),r.a.createElement("p",null,"300 USD",r.a.createElement("span",{className:"text-highlight"},"*")),r.a.createElement("br",null),r.a.createElement("h5",null,"What will you get :"),r.a.createElement("p",null,"2 page static website",r.a.createElement("sup",{className:"text-highlight"},"#"),r.a.createElement("br",null),"Mobile/Tablet friendly Responsive Design",r.a.createElement("br",null),"Custom website design",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",{className:"text-highlight"},"*"),r.a.createElement("i",null,r.a.createElement("small",null," Prices may vary with additional features")),r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("sup",{className:"text-highlight"},"#")),r.a.createElement("i",null,r.a.createElement("small",null," Feature-rich websites available upon request"))))))}},190:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(189),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(196),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),g=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},193:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return d});a(32),a(219);var n=a(216),r=a.n(n),i=a(0),l=a.n(i),c=a(190),o=a(211),u=a.n(o),s=function(e){var t=e.href,a=e.text,n=e.type,i=void 0===n?"default":n,o=e.selected,s=r()(e,["href","text","type","selected"]),d=u.a.link+" "+u.a[i]+" text-shadow-animation";return d=o===t?d+" "+u.a.selected:d,l.a.createElement(c.Link,{to:t,style:{textDecoration:"none"}},l.a.createElement("span",Object.assign({className:d},s),a))},d=function(e){var t=e.href,a=e.text,n=e.type,i=void 0===n?"default":n,c=e.selected,o=r()(e,["href","text","type","selected"]),s=u.a.link+" "+u.a[i]+" text-shadow-animation";return s=c===t?s+" "+u.a.selected:s,l.a.createElement("a",{href:t,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferer"},l.a.createElement("span",Object.assign({className:s},o),a))}},194:function(e,t,a){"use strict";var n=a(221),r=a.n(n),i=a(222),l=a.n(i),c=new r.a(l.a);c.rhythm,c.scale},196:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},204:function(e,t,a){"use strict";var n=a(205),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(190),u=(a(220),a(207)),s=a.n(u),d=(a(208),a(209),a(210)),m=a.n(d),g=a(193),p=a(212),y=a.n(p),h=function(e){var t=e.selected;return i.a.createElement("div",{className:y.a.navbar},i.a.createElement(g.b,{href:"/projects",text:"Our works",type:"header",selected:t}),i.a.createElement(g.b,{href:"/pricing",text:"Our prices",type:"header",selected:t}),i.a.createElement(g.b,{href:"/about",text:"Who we are",type:"header",selected:t}),i.a.createElement(g.b,{href:"/contact",text:"get started",type:"cta",selected:t}))},L=(a(194),a(213)),M=a.n(L),f=a(214),j=a.n(f),E=function(){return i.a.createElement("div",{className:M.a.default},i.a.createElement(o.Link,{to:"/",style:{textDecoration:"none",color:"black"}},i.a.createElement("img",{className:M.a.titleFont+" text-shadow-animation",src:j.a,alt:"THE INITIATIVE"})))},x=function(e){var t=e.selected;return i.a.createElement("div",{className:m.a.headerDiv+" header-global"},i.a.createElement("div",{className:m.a.header},i.a.createElement(E,null),i.a.createElement(h,{selected:t})))},N=a(215),I=a.n(N),v=function(e){var t=e.selected;return["home","/contact","/payments","/success"].filter(function(e){return t===e}).length>0?null:i.a.createElement("div",{className:I.a.footer+" footer-global"},i.a.createElement("div",{className:I.a.footerBar},"Let us build your brand with you.",i.a.createElement(g.b,{href:"/contact",text:"get started."})))},w=function(e){var t=e.children,a=e.current;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){var n=s.a.mainDiv+" ";return"home"===a&&(n+=s.a.homepageFrame),i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{siteTitle:e.site.siteMetadata.title,selected:a}),i.a.createElement("div",{className:s.a.mainBody},i.a.createElement("div",{className:n},i.a.createElement("div",{className:s.a.innerDiv},t))),i.a.createElement(v,{height:170,selected:a}))},data:n})};w.propTypes={children:c.a.node.isRequired};t.a=w},205:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative"}}}}},206:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(59),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},207:function(e,t,a){e.exports={mainBody:"Layout-module--mainBody--1pOFw",mainDiv:"Layout-module--mainDiv--yiqIv",homepageFrame:"Layout-module--homepageFrame--2C0Yx",innerDiv:"Layout-module--innerDiv--1kO70"}},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){e.exports={headerDiv:"Header-module--headerDiv--fQQJo",header:"Header-module--header--umFYf"}},211:function(e,t,a){e.exports={link:"Link-module--link--vl_cu",selected:"Link-module--selected--1aoKm",cta:"Link-module--cta--3JiLd",default:"Link-module--default----gUQ",inverted:"Link-module--inverted--3yvbU Link-module--default----gUQ",header:"Link-module--header--1-zUM",secondary:"Link-module--secondary--162bU"}},212:function(e,t,a){e.exports={navbar:"Navbar-module--navbar--2n-uP"}},213:function(e,t,a){e.exports={default:"Title-module--default--2J_F_",titleFont:"Title-module--titleFont--3Y6d2"}},214:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODguOTkgNTEuNyI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTEyMy41Mi4xNGgyLjcyVjUxLjJoLTIuODZMMTA3LjY1LDguODQsMTA3LDl2NDIuMmwtMi43Ni4xMlYuMTFoMy4wN2wxNS42LDQyLC42Mi0uMDdaIi8+PHBhdGggZD0iTTI3LjgyLDUxLjE3SDI1LjA1Vi4xNUwyNy43NSwwdjI0SDQzLjg3Vi4xNWgzdjUxSDQ0VjI3LjA5SDI3LjgyWiIvPjxwYXRoIGQ9Ik0xOTAuNzEsMGgzLjM4YzMuNywxNyw3LjM5LDMzLjkzLDExLjEzLDUxLjExaC0zLjA4cS0xLjUxLTYuODgtMy4wOC0xNEgxODUuNTdjLTEsNC42MS0yLDkuMjgtMywxNC4wOWgtM1ptNy44MiwzNC4wOWMtMi05LjYxLTQtMTktNS45MS0yOC4zM2wtLjYsMC01Ljg5LDI4LjMxWiIvPjxwYXRoIGQ9Ik0yNTQuNCw1MS43aC0zLjA2Yy0zLjUzLTE3LjA4LTcuMDgtMzQuMjEtMTAuNjctNTEuNTRoMy4xNHE0LjM4LDIyLjA4LDguNzYsNDQuMmwuNzIsMHE0LjQtMjIuMTIsOC44MS00NC4zaDNaIi8+PHBhdGggZD0iTTI3NC43NCwyNC4xNWgxMi42Yy4wOCwxLC4xMywxLjY2LjIxLDIuNjhIMjc0Ljc4VjQ4LjUyaDE0LjA4Yy4wNSwxLC4wOSwxLjc1LjEzLDIuNjNIMjcxLjc2Vi4xNGgxNi45MVYyLjgySDI3NC43NFoiLz48cGF0aCBkPSJNNTUuNy4xM0g3Mi40M1YyLjg0SDU4LjZWMjRINzEuMjNsLjM0LDIuNzhINTguNjR2MjEuNkg3Mi43OGwuMjQsMi43SDU1LjdaIi8+PHBhdGggZD0iTTAsMi44OFYuMTRIMTkuNGwuMTIsMi42MUgxMS4xN1Y1MS4xN0g4LjIyVjIuODhaIi8+PHBhdGggZD0iTTE1Mi42LDIuODJoLTguMjZWLjE0aDE5LjM1VjIuNzhoLTguMVY1MS4xN2gtM1oiLz48cGF0aCBkPSJNMjEzLjYzLDIuODRoLTguMjlMMjA1LjE3LjE1aDE5LjU4TDIyNSwyLjc2aC04LjM5VjUxLjE3aC0zWiIvPjxwYXRoIGQ9Ik0xMzguMzMsNTEuMTdoLTIuOVYuMTZoMi45WiIvPjxwYXRoIGQ9Ik05Mi4xOS4xNGgyLjY3djUxSDkyLjE5WiIvPjxwYXRoIGQ9Ik0xNjkuODQuMTFsMi40OC0uMVY1MS4xOWgtMi40OFoiLz48cGF0aCBkPSJNMjMwLjg3LjExaDIuNTdWNTEuMTZoLTIuNTdaIi8+PC9nPjwvZz48L3N2Zz4="},215:function(e,t,a){e.exports={footer:"Footer-module--footer--3JHPX",footerBar:"Footer-module--footerBar--2zH_R"}},217:function(e,t,a){"use strict";var n=a(218),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(223),u=a.n(o),s=a(190);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("link",{href:"https://aftertheflood.github.io/sparks/styles/font-faces.css",rel:"stylesheet"}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},218:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative",description:"we help build your digital presence",author:"@panzerstadt, @mayojich"}}}}},436:function(e,t,a){e.exports={frame:"pricing-module--frame--Im9YG",pageTitle:"pricing-module--pageTitle--3yWpo"}}}]);
//# sourceMappingURL=component---src-pages-pricing-js-5e8b1e948777f9ba5dcd.js.map