(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{379:function(t,e,r){r(16),r(11),r(17),r(6),r(19),r(15),r(20);var n=r(63),o=r(64),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(21),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,h=void 0===f?[]:f,v=data.class,O=data.staticClass,style=data.style,d=data.staticStyle,w=data.attrs,y=void 0===w?{}:w,_=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,O],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},y)},_),h.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",fill:"currentColor"}})]))}}},380:function(t,e,r){"use strict";r.r(e);var n=r(165),o=r.n(n),c=r(379),l=r.n(c),f={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:o.a,IconExternal:l.a}},h=r(23),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:t.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Check on Github")]),t._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,r){"use strict";r.r(e);var n={props:{error:{type:Object,default:function(){}}}},o=r(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error?r("div",{staticClass:"bg-linked-700 text-white p-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),r("p",{staticClass:"mb-8 text-2xl"},[t._v(t._s(t.error.message))]),t._v(" "),r("goto-github",{attrs:{page:t.error.fallbackUrl}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GotoGithub:r(380).default})}}]);