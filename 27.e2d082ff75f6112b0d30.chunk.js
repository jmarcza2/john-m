(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"50000135d617e0bd5358":function(e,n,r){"use strict";r.r(n);var a=r("8af190b70a6bc55c6f1b"),t=r.n(a),o=(r("8a2d1b95e05b6a321e74"),r("d7dd51e1bf6bfc2c9c3d")),c=r("ab039aecd4a1d4fedc0e"),l=r("a28fc3c963a1d4d1a2e5"),i=r("ab4cb61bcb2dc161defb"),f=r("adc20f99e57c573c589c"),d=r("d95b0cf107403b178365"),u=r("7edf83707012a871cdfb"),s={},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,(function(){n.type}))},b=function(e){return e.skillsPage||s},p=function(){return Object(l.a)(b,(function(e){return e}))},h=regeneratorRuntime.mark(y);function y(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),h)}var m,g=Object(c.defineMessages)({header:{id:"".concat("app.containers.SkillsPage",".header"),defaultMessage:"These skills where exported from LinkedIn, the values are not fully accurate and the values are fake!!!"}}),k=r("ec15def0234cb7c142a8");function w(e,n,r,a){m||(m="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),1===o)n.children=a;else if(o>1){for(var c=new Array(o),l=0;l<o;l++)c[l]=arguments[l+3];n.children=c}if(n&&t)for(var i in t)void 0===n[i]&&(n[i]=t[i]);else n||(n=t||{});return{$$typeof:m,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}var S=w("span",{},void 0,"Not real numbers...");var j,O=function(e){var n=function(e){return e<=10?{scale:10,val:Math.ceil(e)}:e<=60?{scale:10,val:Math.ceil(60-e)}:void 0},r=function(e){return n(e).val};return w("div",{},void 0,w(k.List,{itemLayout:"horizontal",dataSource:e.info,renderItem:function(e){return w(k.List.Item,{},void 0,w(k.Tag,{color:"geekblue"},void 0,e.name),w(k.Rate,{count:(a=e.level,n(a).scale),value:r(e.level),defaultValue:e.level}),S);var a}}))};function P(e,n,r,a){j||(j="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),1===o)n.children=a;else if(o>1){for(var c=new Array(o),l=0;l<o;l++)c[l]=arguments[l+3];n.children=c}if(n&&t)for(var i in t)void 0===n[i]&&(n[i]=t[i]);else n||(n=t||{});return{$$typeof:j,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}function M(e){return Object(d.a)({key:"skillsPage",reducer:v}),Object(f.a)({key:"skillsPage",saga:y}),P("div",{},void 0,t.a.createElement(c.FormattedMessage,g.header),P(O,{info:e.info}))}r.d(n,"SkillsPage",(function(){return M}));var L=Object(l.b)({skillsPage:p()});var $=Object(o.connect)(L,(function(e){return{dispatch:e}}));n.default=Object(i.compose)($)(M)}}]);