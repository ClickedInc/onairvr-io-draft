webpackJsonp([0xb636e7fcccd2],{84:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(12),d=n(o),i=a(59),s=function(e){var t=e.classes;return r.default.createElement("div",{className:t.container},r.default.createElement("div",{className:t.divider}))},u={container:{maxWidth:function(e){var t=e.maxWidth,a=void 0===t?i.layoutMaxWidth:t;return a},margin:"0 auto"},divider:{width:function(e){var t=e.width,a=void 0===t?"50%":t;return a},height:function(e){var t=e.stroke,a=void 0===t?1:t;return a},margin:"0 auto",backgroundColor:function(e){var t=e.color,a=void 0===t?"black":t;return a}}};t.default=(0,d.default)(u)(s),e.exports=t.default},21:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),d=n(o),i=a(50),s=n(i),u=function(e){var t=e.children,a=e.to,n=l(e,["children","to"]),o=/^\/(?!\/)/.test(a);return o?d.default.createElement(s.default,r({to:a},n),t):d.default.createElement("a",r({href:a},n),t)};t.default=u,e.exports=t.default},230:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(1),r=n(l),o=a(12),d=n(o),i=a(36),s=n(i),u=a(57),c=n(u),m=a(58),f=n(m),h=a(21),p=n(h),g=a(84),v=n(g),w={sectionProducts:{marginBottom:"1.8rem",display:"flex",flexDirection:"column",alignItems:"center","& > h3":{marginBottom:"4rem"}},products:{display:"flex",flexWrap:"wrap",justifyContent:"center"},product:{display:"inline-flex",flexDirection:"column",alignItems:"center","& h3":{fontSize:"1.58rem",marginBottom:"1rem"}},links:{display:"inline-flex",margin:"0 2.8rem"},sectionDemos:{paddingBottom:"10rem",display:"flex",flexDirection:"column",alignItems:"center","& > h3":{marginBottom:"6rem"}},demo:{margin:"1.88rem 0",width:"90%",display:"flex",flexWrap:"wrap",justifyContent:"center"},thumbnail:{width:"20%",margin:"0 0.94rem 1rem 0"},detail:{width:"30%",flexGrow:2,margin:"0 0.94rem"},title:{width:"100%",display:"inline-flex",flexWrap:"wrap",alignItems:"center","& h3":{margin:"0.5rem 0 0.5rem 0",fontSize:"1.59rem"}},download:{marginLeft:"auto","& > button":{fontSize:"0.94rem",width:"7.12em",height:"1.44em",border:"none",color:"#F4FFF6",backgroundColor:"#3F3F3F",borderRadius:"0.7em"}},"@media only screen and (max-width: 768px)":{demo:{flexDirection:"column",alignItems:"center"},thumbnail:{width:"100%"},detail:{width:"100%"}}};t.default=(0,d.default)(w)(function(e){var t=e.classes,a=e.data,n=[{name:a.contents.downloads.products.client,links:[{sizes:a.imageOculus.childImageSharp.sizes,to:a.contents.downloads.products.urlOculus},{sizes:a.imageGoogleVR.childImageSharp.sizes,to:a.contents.downloads.products.urlGoogleVR}]},{name:a.contents.downloads.products.server,links:[{sizes:a.imageUnity.childImageSharp.sizes,to:a.contents.downloads.products.urlUnity},{sizes:a.imageUE4.childImageSharp.sizes,to:a.contents.downloads.products.urlUE4}]}].map(function(e,a){return r.default.createElement("div",{key:a,className:t.product},r.default.createElement("h3",null,e.name),r.default.createElement("div",{className:t.links},e.links.map(function(e,t){return r.default.createElement(p.default,{key:t,to:e.to},r.default.createElement(s.default,{style:{width:"8.82rem"},sizes:e.sizes}))})))}),l=a.demos.edges.map(function(e,n){var l=void 0;return a.thumbnails.edges.some(function(t){return e.node.frontmatter.thumbnail===t.node.name&&(l=t.node.childImageSharp.sizes,!0)}),r.default.createElement("div",{key:n,className:t.demo},r.default.createElement(s.default,{outerWrapperClassName:t.thumbnail,sizes:l}),r.default.createElement("div",{className:t.detail},r.default.createElement("div",{className:t.title},r.default.createElement("h3",null,e.node.frontmatter.title),r.default.createElement(p.default,{className:t.download,to:e.node.frontmatter.download},r.default.createElement("button",null,"Download"))),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.html}})))});return r.default.createElement("div",null,r.default.createElement(c.default,{sizesBackground:a.imageBackground.childImageSharp.sizes},r.default.createElement("h1",null,a.contents.downloads.title),r.default.createElement("p",null,a.contents.downloads.description)),r.default.createElement(f.default,{className:t.sectionProducts},r.default.createElement("h3",null,a.contents.downloads.products.header),r.default.createElement("div",{className:t.products},n)),r.default.createElement(v.default,{width:"90%"}),r.default.createElement(f.default,{className:t.sectionDemos},r.default.createElement("h3",null,a.contents.downloads.demos.header),l))});t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-downloads-js-aabc3e1a91f1eb4ebf39.js.map