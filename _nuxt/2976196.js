(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{407:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Articles"},"de":{"title":"Artikel"}}'),delete t.options._Ctor}},430:function(t,e,n){"use strict";var l=n(407),o=n.n(l);e.default=o.a},463:function(t,e,n){"use strict";n.r(e);var l=n(7),o=(n(49),n(386)),r={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.app,e.next=3,n("/articles/".concat(l.i18n.locale)).where({published:!0}).sortBy("date","desc").fetch();case 3:return e.t0=e.sent,e.abrupt("return",{posts:e.t0});case 5:case"end":return e.stop()}}),e)})))()},methods:{relativeDate:function(t){return o.DateTime.fromISO(t).toRelative({locale:"en-US"})}}},c=n(20),f=n(430),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-wrapper",{staticClass:"pt-16"},[n("div",{staticClass:"flex flex-col items-center px-5 py-8 mx-auto sm:px-6 lg:px-8"},[n("div",{staticClass:"flex flex-col mb-12"},[n("div",{staticClass:"w-full"},[n("h1",{staticClass:"text-4xl sm:text-5xl lg:text-6xl font-bold w-full mb-8"},[t._v("\n          linked blog.\n        ")]),t._v(" "),n("p",[t._v("Some insights, thoughts and ideas in the space of daily journaling, building an app, and stories around linked.")])])]),t._v(" "),t._l(t.posts,(function(e){return[n("div",{staticClass:"w-full max-w-3xl flex flex-col items-center pb-6 mx-auto my-4 sm:flex-row"},[n("div",{staticClass:"flex flex-grow text-center sm:text-left sm:mt-0 space-x-6"},[n("img",{staticClass:"w-full h-48 object-cover rounded-lg w-2/5",attrs:{src:e.image,alt:""}}),t._v(" "),n("div",{staticClass:"space-y-4 w-3/5"},[n("div",{staticClass:"mt-6"},[n("h3",{staticClass:"text-sm text-gray-400 mb-2"},[t._v(t._s(t.relativeDate(e.date)))]),t._v(" "),n("h2",{staticClass:"text-2xl font-bold"},[t._v(t._s(e.title))])]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("nuxt-link",{staticClass:"block",attrs:{to:t.localePath("/blog/"+e.slug)}},[t._v("read more")])],1)])])]}))],2)])}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{ContentWrapper:n(244).default})}}]);