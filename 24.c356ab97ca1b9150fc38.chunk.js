(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3e3cdbb4fdd8a5e8dc6c":function(e,t,r){"use strict";r.r(t);var n=r("8af190b70a6bc55c6f1b"),a=r.n(n),c=(r("8a2d1b95e05b6a321e74"),r("d7dd51e1bf6bfc2c9c3d")),i=r("ab039aecd4a1d4fedc0e"),o=r("a28fc3c963a1d4d1a2e5"),f=r("ab4cb61bcb2dc161defb"),d=r("adc20f99e57c573c589c"),s=r("d95b0cf107403b178365"),u=r("7edf83707012a871cdfb"),l={},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,(function(){t.type}))},p=function(e){return e.certificatesPage||l},v=function(){return Object(o.a)(p,(function(e){return e}))},h=regeneratorRuntime.mark(g);function g(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),h)}var y,m=Object(i.defineMessages)({header:{id:"".concat("app.containers.CertificatesPage",".header"),defaultMessage:"This is the CertificatesPage container!"}}),w=r("ec15def0234cb7c142a8");Object(i.defineMessages)({header:{id:"".concat("app.components.Certificates",".header"),defaultMessage:"This is the Certificates component!"}});function j(e,t,r,n){y||(y="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),1===c)t.children=n;else if(c>1){for(var i=new Array(c),o=0;o<c;o++)i[o]=arguments[o+3];t.children=i}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:y,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}w.Typography.Title;var O,P=function(e){var t=e.info;return a.a.createElement(a.a.Fragment,null,j(w.List,{dataSource:t,renderItem:function(e){return j(w.List.Item,{},void 0,j(w.List.Item.Meta,{title:j("a",{href:e.url,target:"_BLANK",style:{width:"100%"}},void 0,e.title),description:e.issuer}))}}))};function k(e,t,r,n){O||(O="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),1===c)t.children=n;else if(c>1){for(var i=new Array(c),o=0;o<c;o++)i[o]=arguments[o+3];t.children=i}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:O,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function S(e){return Object(s.a)({key:"certificatesPage",reducer:b}),Object(d.a)({key:"certificatesPage",saga:g}),k("div",{},void 0,a.a.createElement(i.FormattedMessage,m.header),k(P,{info:e.info}))}r.d(t,"CertificatesPage",(function(){return S}));var M=Object(o.b)({certificatesPage:v()});var C=Object(c.connect)(M,(function(e){return{dispatch:e}}));t.default=Object(f.compose)(C)(S)}}]);