(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(438),i=a.n(l),c=a(209),s=a(210),u="sku_EbbNcAGW78YUXY",o="sku_Ebc7E9vpWYFxZV";t.default=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],l=Object(n.useState)(),m=l[0],d=l[1];return Object(n.useEffect)(function(){window.Stripe("pk_live_PBQQ1XC37eg0LXG6Ws28i6po",{betas:["checkout_beta_4"]});var e=window.Stripe("pk_test_UI8KatjjVPUDJs4gnuuat3VZ",{betas:["checkout_beta_4"]});d(e)},[]),Object(n.useEffect)(function(){t&&m.redirectToCheckout({items:[{sku:t.sku,quantity:1}],successUrl:"https://the-initiative-code.github.io/success",cancelUrl:"https://the-initiative-code.github.io/pricing"}).then(function(e){e.error&&(document.getElementById("error-message").textContent=e.error.message),a(!1)}).catch(function(e){alert(e)})},[t]),r.a.createElement(c.a,{current:"/payments"},r.a.createElement(s.a,{title:"payments"}),r.a.createElement("div",{className:i.a.frame},r.a.createElement("div",{className:i.a.paymentsFrame},r.a.createElement("h1",{className:i.a.pageTitle},"Payment"," ",r.a.createElement("small",null,r.a.createElement("i",null,"(beta)"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h5",null,"So you've spoken with us",r.a.createElement("span",{className:"text-highlight"},"*")," ","and agreed upon a price.",r.a.createElement("sup",{className:"text-highlight"},"#")),r.a.createElement("p",null,"Brand Design Consultation",r.a.createElement("br",null),"Website Hosting",r.a.createElement("br",null),"Website Design + 2 Iterations"),r.a.createElement("br",null),r.a.createElement("h4",null,"Please pick an option :"),r.a.createElement("br",null),r.a.createElement("p",null,"50% upfront with 50% upon completion"),r.a.createElement("button",{className:i.a.submitPay,onClick:function(){return a({sku:u})}},"Pay Upfront 150 USD"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("span",{className:"text-highlight"},r.a.createElement("strong",null,"Full"))," ","amount of 300 USD"),r.a.createElement("button",{className:i.a.submitPay,onClick:function(){return a({sku:o})}},"Pay Full 300 USD"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",{className:"text-highlight"},"*")),r.a.createElement("i",null,r.a.createElement("small",null," ","Actually, if you haven't been in contact with us yet, please speak to us first."," ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("sup",{className:"text-highlight"},"#")),r.a.createElement("i",null,r.a.createElement("small",null,"Of course, we are fans of free money,",r.a.createElement("br",null)," but just we want to make sure you're knowingly doing so. *wink"))))))}},192:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(32),s=a.n(c);a.d(t,"a",function(){return s.a});a(196);var u=r.a.createContext({}),o=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},194:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return m});a(34),a(212);var n=a(84),r=a.n(n),l=a(0),i=a.n(l),c=a(192),s=a(218),u=a.n(s),o=function(e){var t=e.href,a=e.text,n=e.type,l=void 0===n?"default":n,s=e.selected,o=r()(e,["href","text","type","selected"]),m=u.a.link+" "+u.a[l]+" text-shadow-animation";return m=s===t?m+" "+u.a.selected:m,i.a.createElement(c.a,{to:t,style:{textDecoration:"none"}},i.a.createElement("span",Object.assign({className:m},o),a))},m=function(e){var t=e.href,a=e.text,n=e.type,l=void 0===n?"default":n,c=e.selected,s=r()(e,["href","text","type","selected"]),o=u.a.link+" "+u.a[l]+" text-shadow-animation";return o=c===t?o+" "+u.a.selected:o,i.a.createElement("a",{href:t,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferer"},i.a.createElement("span",Object.assign({className:o},s),a))}},195:function(e,t,a){"use strict";var n=a(220),r=a.n(n),l=a(221),i=a.n(l),c=new r.a(i.a);c.rhythm,c.scale},196:function(e,t,a){var n;e.exports=(n=a(204))&&n.default||n},203:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative"}}}}},204:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(58),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},205:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODguOTkgNTEuNyI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTEyMy41Mi4xNGgyLjcyVjUxLjJoLTIuODZMMTA3LjY1LDguODQsMTA3LDl2NDIuMmwtMi43Ni4xMlYuMTFoMy4wN2wxNS42LDQyLC42Mi0uMDdaIi8+PHBhdGggZD0iTTI3LjgyLDUxLjE3SDI1LjA1Vi4xNUwyNy43NSwwdjI0SDQzLjg3Vi4xNWgzdjUxSDQ0VjI3LjA5SDI3LjgyWiIvPjxwYXRoIGQ9Ik0xOTAuNzEsMGgzLjM4YzMuNywxNyw3LjM5LDMzLjkzLDExLjEzLDUxLjExaC0zLjA4cS0xLjUxLTYuODgtMy4wOC0xNEgxODUuNTdjLTEsNC42MS0yLDkuMjgtMywxNC4wOWgtM1ptNy44MiwzNC4wOWMtMi05LjYxLTQtMTktNS45MS0yOC4zM2wtLjYsMC01Ljg5LDI4LjMxWiIvPjxwYXRoIGQ9Ik0yNTQuNCw1MS43aC0zLjA2Yy0zLjUzLTE3LjA4LTcuMDgtMzQuMjEtMTAuNjctNTEuNTRoMy4xNHE0LjM4LDIyLjA4LDguNzYsNDQuMmwuNzIsMHE0LjQtMjIuMTIsOC44MS00NC4zaDNaIi8+PHBhdGggZD0iTTI3NC43NCwyNC4xNWgxMi42Yy4wOCwxLC4xMywxLjY2LjIxLDIuNjhIMjc0Ljc4VjQ4LjUyaDE0LjA4Yy4wNSwxLC4wOSwxLjc1LjEzLDIuNjNIMjcxLjc2Vi4xNGgxNi45MVYyLjgySDI3NC43NFoiLz48cGF0aCBkPSJNNTUuNy4xM0g3Mi40M1YyLjg0SDU4LjZWMjRINzEuMjNsLjM0LDIuNzhINTguNjR2MjEuNkg3Mi43OGwuMjQsMi43SDU1LjdaIi8+PHBhdGggZD0iTTAsMi44OFYuMTRIMTkuNGwuMTIsMi42MUgxMS4xN1Y1MS4xN0g4LjIyVjIuODhaIi8+PHBhdGggZD0iTTE1Mi42LDIuODJoLTguMjZWLjE0aDE5LjM1VjIuNzhoLTguMVY1MS4xN2gtM1oiLz48cGF0aCBkPSJNMjEzLjYzLDIuODRoLTguMjlMMjA1LjE3LjE1aDE5LjU4TDIyNSwyLjc2aC04LjM5VjUxLjE3aC0zWiIvPjxwYXRoIGQ9Ik0xMzguMzMsNTEuMTdoLTIuOVYuMTZoMi45WiIvPjxwYXRoIGQ9Ik05Mi4xOS4xNGgyLjY3djUxSDkyLjE5WiIvPjxwYXRoIGQ9Ik0xNjkuODQuMTFsMi40OC0uMVY1MS4xOWgtMi40OFoiLz48cGF0aCBkPSJNMjMwLjg3LjExaDIuNTdWNTEuMTZoLTIuNTdaIi8+PC9nPjwvZz48L3N2Zz4="},209:function(e,t,a){"use strict";var n=a(203),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(192),u=(a(213),a(214)),o=a.n(u),m=(a(215),a(216),a(217)),d=a.n(m),E=a(194),g=a(219),j=a.n(g),M=function(e){var t=e.selected;return l.a.createElement("div",{className:j.a.navbar},l.a.createElement(E.b,{href:"/projects",text:"Our works",type:"header",selected:t}),l.a.createElement(E.b,{href:"/pricing",text:"Our prices",type:"header",selected:t}),l.a.createElement(E.b,{href:"/about",text:"Who we are",type:"header",selected:t}),l.a.createElement(E.b,{href:"/contact",text:"get started",type:"cta",selected:t}))},y=(a(195),a(222)),p=a.n(y),h=a(205),L=a.n(h),N=function(){return l.a.createElement("div",{className:p.a.default},l.a.createElement(s.a,{to:"/",style:{textDecoration:"none",color:"black"}},l.a.createElement("img",{className:p.a.titleFont+" text-shadow-animation",src:L.a,alt:"THE INITIATIVE"})))},x=function(e){var t=e.selected;return l.a.createElement("div",{className:d.a.headerDiv+" header-global"},l.a.createElement("div",{className:d.a.header},l.a.createElement(N,null),l.a.createElement(M,{selected:t})))},f=a(223),I=a.n(f),w=function(e){var t=e.selected;return["home","/contact","/payments","/success"].filter(function(e){return t===e}).length>0?null:l.a.createElement("div",{className:I.a.footer+" footer-global"},l.a.createElement("div",{className:I.a.footerBar},"Let us build your brand with you.",l.a.createElement(E.b,{href:"/contact",text:"get started."})))},b=function(e){var t=e.children,a=e.current;return l.a.createElement(s.b,{query:"755544856",render:function(e){var n=o.a.mainDiv+" ";return"home"===a&&(n+=o.a.homepageFrame),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{siteTitle:e.site.siteMetadata.title,selected:a}),l.a.createElement("div",{className:o.a.mainBody},l.a.createElement("div",{className:n},l.a.createElement("div",{className:o.a.innerDiv},t))),l.a.createElement(w,{height:170,selected:a}))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b},210:function(e,t,a){"use strict";var n=a(211),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(224),u=a.n(s),o=a(192);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return l.a.createElement(o.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},l.a.createElement("link",{href:"https://aftertheflood.github.io/sparks/styles/font-faces.css",rel:"stylesheet"}))},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},211:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative",description:"we help build your digital presence",author:"@panzerstadt, @mayojich"}}}}}}]);
//# sourceMappingURL=component---src-pages-payments-js-eda30eb5f90871472219.js.map