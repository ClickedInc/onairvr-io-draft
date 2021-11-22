webpackJsonp([35783957827783],{85:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(13),i=n(o),c=a(59),u=function(e){var t=e.classes;return l.default.createElement("div",{className:t.container},l.default.createElement("div",{className:t.divider}))},d={container:{maxWidth:function(e){var t=e.maxWidth,a=void 0===t?c.layoutMaxWidth:t;return a},margin:"0 auto"},divider:{width:function(e){var t=e.width,a=void 0===t?"50%":t;return a},height:function(e){var t=e.stroke,a=void 0===t?1:t;return a},margin:"0 auto",backgroundColor:function(e){var t=e.color,a=void 0===t?"black":t;return a}}};t.default=(0,i.default)(d)(u),e.exports=t.default},226:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var l=a(1),o=n(l),i=a(13),c=n(i),u=a(36),d=(n(u),function(e){var t=e.classes,a=e.children;r(e,["classes","children"]);return o.default.createElement("div",{className:t.container},a)}),s={container:{width:function(e){var t=e.width,a=void 0===t?"21.2rem":t;return a},height:function(e){var t=e.height,a=void 0===t?"20rem":t;return a},display:"inline-flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& h1":{fontFamily:["Noto Sans SemiBold","sans-serif"],fontSize:"1.53rem",fontWeight:"normal",marginBottom:0},"& p":{fontSize:"1.06rem"},"& a":{color:"#3F3F3F",textDecoration:"none"}}};t.default=(0,c.default)(s)(d),e.exports=t.default},21:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),i=n(o),c=a(50),u=n(c),d=function(e){var t=e.children,a=e.to,n=r(e,["children","to"]),o=/^\/(?!\/)/.test(a);return o?i.default.createElement(u.default,l({to:a},n),t):i.default.createElement("a",l({href:a},n),t)};t.default=d,e.exports=t.default},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=a(1),l=n(r),o=a(13),i=n(o),c=a(36),u=n(c),d=a(57),s=n(d),m=a(58),f=n(m),h=a(21),p=n(h),g=a(226),v=n(g),E=a(85),x=n(E),w="73.85rem",y={buttonRect:{width:"21em",height:"3.67em",border:"none",backgroundColor:"#43AAFF"},section:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"1.06rem","& h4":{textAlign:"center"},"& p":{width:"78%",textAlign:"center",lineHeight:1.3}},diagram:{width:"100%",margin:"5rem 0 10rem 0"},sectionFeatures:{display:"flex",flexWrap:"wrap",justifyContent:"center"},contacts:{display:"flex",flexWrqp:"wrap",justifyContent:"center",margin:"2rem 0"}};t.default=(0,i.default)(y)(function(e){var t=e.classes,a=e.data,n=l.default.createElement(s.default,{taller:!0,maxWidth:w,sizesBackground:a.imageBackground.childImageSharp.sizes,justifyContent:"center"},l.default.createElement("h1",null,a.contents.home.title),l.default.createElement("p",null,a.contents.home.description),l.default.createElement(p.default,{to:"/downloads"},l.default.createElement("button",{className:t.buttonRect,type:"button"},a.contents.home.download))),r=a.contents.home.feature.map(function(e,t){var n=void 0;return a.imageFeatures.edges.some(function(t,a){return t.node.name===e.name&&(n=t.node.childImageSharp.sizes,!0)}),n?l.default.createElement(v.default,{key:t},l.default.createElement(u.default,{style:{width:"6.47rem"},sizes:n}),l.default.createElement("h1",null,e.header),l.default.createElement("p",null,e.description)):null}),o=l.default.createElement(f.default,{className:t.sectionFeatures,maxWidth:w},r),i=l.default.createElement(f.default,{className:t.section,maxWidth:w},l.default.createElement("h4",null,a.contents.home.howworks.header),l.default.createElement("p",null,a.contents.home.howworks.description),l.default.createElement(u.default,{outerWrapperClassName:t.diagram,sizes:a.imageHowWorks.childImageSharp.sizes})),c=l.default.createElement(s.default,{taller:!0,maxWidth:w,sizesBackground:a.imageMoving.childImageSharp.sizes,justifyContent:"center",boxShadow:"none"},l.default.createElement("h1",null,a.contents.home.moving.header),l.default.createElement("p",null,a.contents.home.moving.description),l.default.createElement(p.default,{to:"/usecase"},l.default.createElement("button",{className:t.buttonRect,type:"button"},a.contents.home.moving.usecase))),d=[{name:"contact@onairvr.io",to:"mailto:contact@onairvr.io",sizes:a.imageContactMail.childImageSharp.sizes},{name:"www.clicked.co.kr",to:"http://clicked.co.kr",sizes:a.imageContactSite.childImageSharp.sizes}].map(function(e,t){return l.default.createElement(v.default,{key:t,width:"12.4rem",height:"12rem"},l.default.createElement(p.default,{to:e.to},l.default.createElement(u.default,{sizes:e.sizes}),l.default.createElement("p",null,e.name)))}),m=l.default.createElement(f.default,{className:t.section,maxWidth:w},l.default.createElement("h4",null,a.contents.home.contact.header),l.default.createElement("p",null,a.contents.home.contact.description),l.default.createElement("div",{className:t.contacts},d));return l.default.createElement("div",null,n,o,l.default.createElement(x.default,{maxWidth:w}),i,c,m)});t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-8f2aed8b7c9085d1d44f.js.map