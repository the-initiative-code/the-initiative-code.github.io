(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(189),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(200),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var c=a(33);a.d(t,"parsePath",function(){return c.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},195:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"a",function(){return c});a(32),a(218);var i=a(204),r=a.n(i),n=a(0),o=a.n(n),s=a(191),l=a(211),d=a.n(l),u=function(e){var t=e.href,a=e.text,i=e.type,n=void 0===i?"default":i,l=e.selected,u=r()(e,["href","text","type","selected"]),c=d.a.link+" "+d.a[n]+" text-shadow-animation";return c=l===t?c+" "+d.a.selected:c,o.a.createElement(s.Link,{to:t,style:{textDecoration:"none"}},o.a.createElement("span",Object.assign({className:c},u),a))},c=function(e){var t=e.href,a=e.text,i=e.type,n=void 0===i?"default":i,s=e.selected,l=r()(e,["href","text","type","selected"]),u=d.a.link+" "+d.a[n]+" text-shadow-animation";return u=s===t?u+" "+d.a.selected:u,o.a.createElement("a",{href:t,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferer"},o.a.createElement("span",Object.assign({className:u},l),a))}},196:function(e,t,a){"use strict";var i=a(221),r=a.n(i),n=a(222),o=a.n(n),s=new r.a(o.a);s.rhythm,s.scale},200:function(e,t,a){var i;e.exports=(i=a(207))&&i.default||i},205:function(e,t,a){"use strict";var i=a(206),r=a(0),n=a.n(r),o=a(4),s=a.n(o),l=a(191),d=(a(220),a(208)),u=a.n(d),c=(a(209),a(210)),f=a.n(c),p=a(195),h=a(212),m=a.n(h),g=function(e){var t=e.selected;return n.a.createElement("div",{className:m.a.navbar},n.a.createElement(p.b,{href:"/projects",text:"Our works",type:"header",selected:t}),n.a.createElement(p.b,{href:"/pricing",text:"Our prices",type:"header",selected:t}),n.a.createElement(p.b,{href:"/about",text:"Who we are",type:"header",selected:t}),n.a.createElement(p.b,{href:"/contact",text:"get started",type:"cta",selected:t}))},y=(a(196),a(213)),L=a.n(y),M=a(214),j=a.n(M),v=function(){return n.a.createElement("div",{className:L.a.default},n.a.createElement(l.Link,{to:"/",style:{textDecoration:"none",color:"black"}},n.a.createElement("img",{className:L.a.titleFont+" text-shadow-animation",src:j.a,alt:"THE INITIATIVE"})))},w=function(e){var t=e.selected;return n.a.createElement("div",{className:f.a.headerDiv+" header-global"},n.a.createElement("div",{className:f.a.header},n.a.createElement(v,null),n.a.createElement(g,{selected:t})))},b=a(215),E=a.n(b),I=function(e){var t=e.selected;return"home"!==t&&"/contact"!==t?n.a.createElement("div",{className:E.a.footer+" footer-global"},n.a.createElement("div",{className:E.a.footerBar},"Let us build your brand with you.",n.a.createElement(p.b,{href:"/contact",text:"get started."}))):null},x=function(e){var t=e.children,a=e.current;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){var i=u.a.mainDiv+" ";return"home"===a&&(i+=u.a.homepageFrame),n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{siteTitle:e.site.siteMetadata.title,selected:a}),n.a.createElement("div",{className:u.a.mainBody},n.a.createElement("div",{className:i},n.a.createElement("div",{className:u.a.innerDiv},t))),n.a.createElement(I,{height:170,selected:a}))},data:i})};x.propTypes={children:s.a.node.isRequired};t.a=x},206:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative"}}}}},207:function(e,t,a){"use strict";a.r(t);a(32);var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(59),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},208:function(e,t,a){e.exports={mainBody:"Layout-module--mainBody--1pOFw",mainDiv:"Layout-module--mainDiv--yiqIv",homepageFrame:"Layout-module--homepageFrame--2C0Yx",innerDiv:"Layout-module--innerDiv--1kO70"}},209:function(e,t,a){},210:function(e,t,a){e.exports={headerDiv:"Header-module--headerDiv--fQQJo",header:"Header-module--header--umFYf"}},211:function(e,t,a){e.exports={link:"Link-module--link--vl_cu",selected:"Link-module--selected--1aoKm",cta:"Link-module--cta--3JiLd",default:"Link-module--default----gUQ",inverted:"Link-module--inverted--3yvbU Link-module--default----gUQ",header:"Link-module--header--1-zUM",secondary:"Link-module--secondary--162bU"}},212:function(e,t,a){e.exports={navbar:"Navbar-module--navbar--2n-uP"}},213:function(e,t,a){e.exports={default:"Title-module--default--2J_F_",titleFont:"Title-module--titleFont--3Y6d2"}},214:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODguOTkgNTEuNyI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTEyMy41Mi4xNGgyLjcyVjUxLjJoLTIuODZMMTA3LjY1LDguODQsMTA3LDl2NDIuMmwtMi43Ni4xMlYuMTFoMy4wN2wxNS42LDQyLC42Mi0uMDdaIi8+PHBhdGggZD0iTTI3LjgyLDUxLjE3SDI1LjA1Vi4xNUwyNy43NSwwdjI0SDQzLjg3Vi4xNWgzdjUxSDQ0VjI3LjA5SDI3LjgyWiIvPjxwYXRoIGQ9Ik0xOTAuNzEsMGgzLjM4YzMuNywxNyw3LjM5LDMzLjkzLDExLjEzLDUxLjExaC0zLjA4cS0xLjUxLTYuODgtMy4wOC0xNEgxODUuNTdjLTEsNC42MS0yLDkuMjgtMywxNC4wOWgtM1ptNy44MiwzNC4wOWMtMi05LjYxLTQtMTktNS45MS0yOC4zM2wtLjYsMC01Ljg5LDI4LjMxWiIvPjxwYXRoIGQ9Ik0yNTQuNCw1MS43aC0zLjA2Yy0zLjUzLTE3LjA4LTcuMDgtMzQuMjEtMTAuNjctNTEuNTRoMy4xNHE0LjM4LDIyLjA4LDguNzYsNDQuMmwuNzIsMHE0LjQtMjIuMTIsOC44MS00NC4zaDNaIi8+PHBhdGggZD0iTTI3NC43NCwyNC4xNWgxMi42Yy4wOCwxLC4xMywxLjY2LjIxLDIuNjhIMjc0Ljc4VjQ4LjUyaDE0LjA4Yy4wNSwxLC4wOSwxLjc1LjEzLDIuNjNIMjcxLjc2Vi4xNGgxNi45MVYyLjgySDI3NC43NFoiLz48cGF0aCBkPSJNNTUuNy4xM0g3Mi40M1YyLjg0SDU4LjZWMjRINzEuMjNsLjM0LDIuNzhINTguNjR2MjEuNkg3Mi43OGwuMjQsMi43SDU1LjdaIi8+PHBhdGggZD0iTTAsMi44OFYuMTRIMTkuNGwuMTIsMi42MUgxMS4xN1Y1MS4xN0g4LjIyVjIuODhaIi8+PHBhdGggZD0iTTE1Mi42LDIuODJoLTguMjZWLjE0aDE5LjM1VjIuNzhoLTguMVY1MS4xN2gtM1oiLz48cGF0aCBkPSJNMjEzLjYzLDIuODRoLTguMjlMMjA1LjE3LjE1aDE5LjU4TDIyNSwyLjc2aC04LjM5VjUxLjE3aC0zWiIvPjxwYXRoIGQ9Ik0xMzguMzMsNTEuMTdoLTIuOVYuMTZoMi45WiIvPjxwYXRoIGQ9Ik05Mi4xOS4xNGgyLjY3djUxSDkyLjE5WiIvPjxwYXRoIGQ9Ik0xNjkuODQuMTFsMi40OC0uMVY1MS4xOWgtMi40OFoiLz48cGF0aCBkPSJNMjMwLjg3LjExaDIuNTdWNTEuMTZoLTIuNTdaIi8+PC9nPjwvZz48L3N2Zz4="},215:function(e,t,a){e.exports={footer:"Footer-module--footer--3JHPX",footerBar:"Footer-module--footerBar--2zH_R"}},216:function(e,t,a){"use strict";var i=a(217),r=a(0),n=a.n(r),o=a(4),s=a.n(o),l=a(228),d=a.n(l),u=a(191);function c(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return n.a.createElement(u.StaticQuery,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:i})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c;var f="1025518380"},217:function(e){e.exports={data:{site:{siteMetadata:{title:"The Initiative",description:"we help build your digital presence",author:"@panzerstadt, @mayojich"}}}}},223:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),o=i(a(58)),s=i(a(204)),l=i(a(190)),d=i(a(0)),u=i(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+s+l+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,L=e.backgroundColor,M=e.Tag,j="boolean"==typeof L?"lightgray":L,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),b={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(h){var E=h;return d.default.createElement(M,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},d.default.createElement(M,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&d.default.createElement(y,(0,l.default)({src:E.base64},b)),E.tracedSVG&&d.default.createElement(y,(0,l.default)({src:E.tracedSVG},b)),j&&d.default.createElement(M,{title:t,style:{backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,E.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),d.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),d.default.createElement(y,{alt:a,title:t,src:E.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},E))}}))}if(m){var I=m,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete x.display,d.default.createElement(M,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},b)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},b)),j&&d.default.createElement(M,{title:t,style:{backgroundColor:j,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(d.default.Component);L.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var M=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});L.propTypes={resolutions:M,sizes:j,fixed:M,fluid:j,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string};var v=L;t.default=v},251:function(e,t,a){var i=a(24).f,r=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in r||a(16)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=2-e2cd79fb3ffae4954138.js.map