(window.webpackJsonp=window.webpackJsonp||[]).push([[22,11,12,14],{383:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"-ml-1.5 mb-4 p-1 text-4xl sm:text-5xl lg:text-6xl font-bold"},[t._v("\n  "+t._s(t.$props.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete t.options._Ctor}},386:function(t,e,r){r(15),r(10),r(17),r(5),r(19),r(14),r(20);var n=r(45),l=r(46),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(18),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,h=void 0===d?[]:d,f=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,w=void 0===x?{}:x,_=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},w)},_),h.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",fill:"currentColor"}})]))}}},388:function(t,e,r){"use strict";var n=r(384),l=r.n(n);e.default=l.a},389:function(t,e,r){"use strict";r.r(e);var n={props:{error:{type:Object,default:function(){}}}},l=r(21),o=r(388),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$props.error?r("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),r("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[t._v("\n    "+t._s(t.$props.error.resettingIn)+"\n  ")])],1):t._e()}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},390:function(t,e,r){"use strict";r.r(e);var n=r(168),l=r.n(n),o=r(386),c=r.n(o),d={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:l.a,IconExternal:c.a}},h=r(21),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:t.$props.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Check on Github")]),t._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,r){r(15),r(10),r(17),r(5),r(19),r(14),r(20);var n=r(45),l=r(46),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(18),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,h=void 0===d?[]:d,f=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,w=void 0===x?{}:x,_=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},w)},_),h.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z",fill:"currentColor"}})]))}}},392:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return h}));var n=r(7),l=(r(49),r(393),r(5),r(385)),o="latest",c=function(t){var e=Number(t.headers.get("x-ratelimit-used"));if(!t.ok&&60===e){var r=l.DateTime.fromSeconds(Number(t.headers.get("x-ratelimit-reset"))).toRelative({locale:"en-US"});return{error:!0,resettingIn:r,message:"You've exceeded the request count for the Github API, please retry ".concat(r,".")}}return{error:!1}},d=function(t){return t===o?o:"tags/v".concat(t)},h=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,l,h,f,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.length>0&&void 0!==v[0]?v[0]:o,r=null,n="https://github.com/lostdesign/linked/releases/".concat(d(e)),l="https://api.github.com/repos/lostdesign/linked/releases/".concat(d(e)),t.prev=4,t.next=7,fetch(l);case 7:if(h=t.sent,!(f=c(h)).error){t.next=12;break}throw r=f,new Error(f.message);case 12:return t.next=14,h.json();case 14:return t.t0=t.sent,t.t1=r,t.t2=n,t.abrupt("return",{release:t.t0,error:t.t1,fallbackUrl:t.t2});case 20:return t.prev=20,t.t3=t.catch(4),t.abrupt("return",{release:null,error:r,fallbackUrl:n});case 23:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(){return t.apply(this,arguments)}}()},462:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(49),r(5),r(51),r(25),r(391)),o=r.n(l),c=r(168),d=r.n(c),h=r(392),f=r(385),v=r(431),m={components:{IconDownload:o.a,IconGithub:d.a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,t.prev=1,t.next=4,fetch("https://api.github.com/repos/lostdesign/linked/releases?per_page=100");case 4:if(r=t.sent,!(n=Object(h.a)(r)).error){t.next=9;break}throw e=n,new Error(n.message);case 9:return t.next=11,r.json();case 11:return l=t.sent,o=l.map((function(t){var e;return{id:t.id,name:t.name,tag:t.tag_name,body:Object(v.marked)(null!==(e=t.body)&&void 0!==e?e:""),url:t.html_url,published_at:t.published_at,prerelease:t.prerelease}})),t.abrupt("return",{releaseList:o,error:null});case 16:return t.prev=16,t.t0=t.catch(1),t.abrupt("return",{releaseList:null,error:e});case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))()},methods:{getLocaleDate:function(t){return f.DateTime.fromISO(t).setLocale(this.$i18n.locale).toLocaleString({day:"2-digit",month:"short",year:"2-digit"})}}},x=r(21),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("content-wrapper",{staticClass:"pt-16"},[r("page-heading",{attrs:{title:"Changelog"}}),t._v(" "),r("div",{staticClass:"flow-root mt-12"},[r("ul",{staticClass:"-mb-8",attrs:{role:"list"}},[t._l(t.releaseList,(function(e,n){return t.releaseList?[r("li",{key:n},[r("div",{staticClass:"relative pb-8"},[t.releaseList.length-1!==n?r("span",{staticClass:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 hidden md:block",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),r("div",{staticClass:"relative flex space-x-0 md:space-x-3"},[r("icon-github",{staticClass:"h-8 w-8 rounded-full bg-linked 400 flex items-center justify-center ring-8 ring-white text-white hidden md:block"}),t._v(" "),r("div",{staticClass:"min-w-0 flex-1 block md:flex justify-between space-x-0 md:space-x-4"},[r("div",[r("div",{staticClass:"flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-3 sm:space-y-0 mb-2 sm:mb-0"},[r("nuxt-link",{staticClass:"link-hover",attrs:{to:t.localePath("/download/"+e.name)}},[r("span",{staticClass:"text-3xl font-bold text-gray-900"},[t._v(t._s(e.name))])]),t._v(" "),r("nuxt-link",{staticClass:"flex items-center space-x-2 link-hover",attrs:{to:t.localePath("/download/"+e.name)}},[r("icon-download",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Download")])],1),t._v(" "),r("goto-github",{attrs:{page:"https://github.com/lostdesign/linked/releases/"+e.tag}})],1),t._v(" "),r("div",{staticClass:"text-lg font-regular whitespace-nowrap text-gray-500 block md:hidden"},[r("time",{attrs:{datetime:t.getLocaleDate(e.published_at)}},[t._v(t._s(t.getLocaleDate(e.published_at)))])]),t._v(" "),r("article",{staticClass:"mt-4 mb-6 prose prose-sm md:prose-base",staticStyle:{"max-width":"100%!important"},domProps:{innerHTML:t._s(e.body)}})]),t._v(" "),r("div",{staticClass:"text-lg font-regular text-right whitespace-nowrap text-gray-500 hidden md:block"},[r("time",{attrs:{datetime:t.getLocaleDate(e.published_at)}},[t._v(t._s(t.getLocaleDate(e.published_at)))])])])],1)])])]:t._e()}))],2)]),t._v(" "),r("github-error",{attrs:{error:t.error}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:r(383).default,GotoGithub:r(390).default,GithubError:r(389).default,ContentWrapper:r(243).default})}}]);