(window.webpackJsonp=window.webpackJsonp||[]).push([[21,10,11,13],{384:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},o=r(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"-ml-1.5 mb-4 p-1 text-4xl sm:text-5xl lg:text-6xl font-bold"},[t._v("\n  "+t._s(t.$props.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete t.options._Ctor}},388:function(t,e,r){r(15),r(10),r(16),r(5),r(18),r(14),r(19);var n=r(45),o=r(46),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(17),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,w=data.attrs,y=void 0===w?{}:w,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},y)},x),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{fill:"currentColor",d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"}})]))}}},390:function(t,e,r){"use strict";var n=r(385),o=r.n(n);e.default=o.a},391:function(t,e,r){"use strict";r.r(e);var n={props:{error:{type:Object,default:function(){}}}},o=r(20),c=r(390),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$props.error?r("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),r("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[t._v("\n    "+t._s(t.$props.error.resettingIn)+"\n  ")])],1):t._e()}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},392:function(t,e,r){"use strict";r.r(e);var n=r(169),o=r.n(n),c=r(388),l=r.n(c),f={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:o.a,IconExternal:l.a}},d=r(20),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:t.$props.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Check on Github")]),t._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,r){r(15),r(10),r(16),r(5),r(18),r(14),r(19);var n=r(45),o=r(46),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(17),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,w=data.attrs,y=void 0===w?{}:w,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},y)},x),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{fill:"currentColor",d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}})]))}}},394:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return O}));r(15),r(10),r(16),r(18),r(19);var n=r(23),o=r(7),c=(r(49),r(395),r(5),r(17),r(30),r(31),r(51),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(14),r(40),r(386));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d="latest",h=function(t){var e=Number(t.headers.get("x-ratelimit-used"));if(!t.ok&&60===e){var r=c.DateTime.fromSeconds(Number(t.headers.get("x-ratelimit-reset"))).toRelative({locale:"en-US"});return{error:!0,resettingIn:r,message:"You've exceeded the request count for the Github API, please retry ".concat(r,".")}}return{error:!1}},m=function(t){return t===d?d:"tags/v".concat(t)},v=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,f,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=v.length>1&&void 0!==v[1]?v[1]:d,n=null,o="https://github.com/lostdesign/linked/releases/".concat(m(r)),c="https://api.github.com/repos/lostdesign/linked/releases/".concat(m(r)),t.prev=4,t.next=7,fetch(c,{headers:{Authorization:"Bearer "+e}});case 7:if(l=t.sent,!(f=h(l)).error){t.next=12;break}throw n=f,new Error(f.message);case 12:return t.next=14,l.json();case 14:return t.t0=t.sent,t.t1=n,t.t2=o,t.abrupt("return",{release:t.t0,error:t.t1,fallbackUrl:t.t2});case 20:return t.prev=20,t.t3=t.catch(4),t.abrupt("return",{release:null,error:n,fallbackUrl:o});case 23:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(e){return t.apply(this,arguments)}}();function w(t,e,r){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://api.github.com/repos/".concat(e,"/").concat(r,"/contributors"),n));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=[{orgName:"lostdesign",repoName:"linked"},{orgName:"uselinked",repoName:"website"},{orgName:"uselinked",repoName:"discord"}];function O(t){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e?{headers:{Authorization:"Bearer ".concat(e)}}:{},t.next=3,Promise.all(x.map((function(t){return w(t.orgName,t.repoName,r)})));case 3:if(n=t.sent,!(o=n.reduceRight((function(t,e){return t.error?t:h(e)}),{error:!1})).error){t.next=7;break}return t.abrupt("return",{isRateLimited:o,contributors:[]});case 7:return t.next=9,Promise.all(n.map((function(t){return t.json()})));case 9:return c=t.sent,l=new Map,c.forEach((function(t){t.forEach((function(t){if("User"===t.type){var e=l.get(t.login);e?l.set(t.login,f(f({},t),{},{contributions:e.contributions+t.contributions})):l.set(t.login,t)}}))})),d=Array.from(l.values()),t.abrupt("return",{isRateLimited:o,contributors:d});case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},464:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(49),r(5),r(51),r(24),r(393)),c=r.n(o),l=r(169),f=r.n(l),d=r(394),h=r(386),m=r(431),v={components:{IconDownload:c.a,IconGithub:f.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$config.githubToken,n=null,e.prev=2,e.next=5,fetch("https://api.github.com/repos/lostdesign/linked/releases?per_page=100",{headers:{Authorization:"Bearer "+r}});case 5:if(o=e.sent,!(c=Object(d.a)(o)).error){e.next=10;break}throw n=c,new Error(c.message);case 10:return e.next=12,o.json();case 12:return l=e.sent,f=l.map((function(t){var e;return{id:t.id,name:t.name,tag:t.tag_name,body:Object(m.marked)(null!==(e=t.body)&&void 0!==e?e:""),url:t.html_url,published_at:t.published_at,prerelease:t.prerelease}})),e.abrupt("return",{releaseList:f,error:null});case 17:return e.prev=17,e.t0=e.catch(2),e.abrupt("return",{releaseList:null,error:n});case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))()},methods:{getLocaleDate:function(t){return h.DateTime.fromISO(t).setLocale(this.$i18n.locale).toLocaleString({day:"2-digit",month:"short",year:"2-digit"})}}},w=r(20),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("content-wrapper",{staticClass:"pt-16"},[r("page-heading",{attrs:{title:"Changelog"}}),t._v(" "),r("div",{staticClass:"flow-root mt-12"},[r("ul",{staticClass:"-mb-8",attrs:{role:"list"}},[t._l(t.releaseList,(function(e,n){return t.releaseList?[r("li",{key:n},[r("div",{staticClass:"relative pb-8"},[t.releaseList.length-1!==n?r("span",{staticClass:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 hidden md:block",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),r("div",{staticClass:"relative flex space-x-0 md:space-x-3"},[r("icon-github",{staticClass:"h-8 w-8 rounded-full bg-linked 400 flex items-center justify-center ring-8 ring-white text-white hidden md:block"}),t._v(" "),r("div",{staticClass:"min-w-0 flex-1 block md:flex justify-between space-x-0 md:space-x-4"},[r("div",[r("div",{staticClass:"flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-3 sm:space-y-0 mb-2 sm:mb-0"},[r("nuxt-link",{staticClass:"link-hover",attrs:{to:t.localePath("/download/"+e.name)}},[r("span",{staticClass:"text-3xl font-bold text-gray-900"},[t._v(t._s(e.name))])]),t._v(" "),r("nuxt-link",{staticClass:"flex items-center space-x-2 link-hover",attrs:{to:t.localePath("/download/"+e.name)}},[r("icon-download",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Download")])],1),t._v(" "),r("goto-github",{attrs:{page:"https://github.com/lostdesign/linked/releases/"+e.tag}})],1),t._v(" "),r("div",{staticClass:"text-lg font-regular whitespace-nowrap text-gray-500 block md:hidden"},[r("time",{attrs:{datetime:t.getLocaleDate(e.published_at)}},[t._v(t._s(t.getLocaleDate(e.published_at)))])]),t._v(" "),r("article",{staticClass:"mt-4 mb-6 prose prose-sm md:prose-base",staticStyle:{"max-width":"100%!important"},domProps:{innerHTML:t._s(e.body)}})]),t._v(" "),r("div",{staticClass:"text-lg font-regular text-right whitespace-nowrap text-gray-500 hidden md:block"},[r("time",{attrs:{datetime:t.getLocaleDate(e.published_at)}},[t._v(t._s(t.getLocaleDate(e.published_at)))])])])],1)])])]:t._e()}))],2)]),t._v(" "),r("github-error",{attrs:{error:t.error}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:r(384).default,GotoGithub:r(392).default,GithubError:r(391).default,ContentWrapper:r(244).default})}}]);