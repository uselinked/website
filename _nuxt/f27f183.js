(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10],{385:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete t.options._Ctor}},390:function(t,e,n){"use strict";var r=n(385),l=n.n(r);e.default=l.a},391:function(t,e,n){"use strict";n.r(e);var r={props:{error:{type:Object,default:function(){}}}},l=n(20),o=n(390),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$props.error?n("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[n("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),n("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[t._v("\n    "+t._s(t.$props.error.resettingIn)+"\n  ")])],1):t._e()}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},397:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"maintainer":{"title":"Maintainer","subline":"The head behind the project."},"lovely_contributors":"Contributors","thanks":"Thanks to the awesome people that have contributed to linked."},"de":{"maintainer":{"title":"Maintainer","subline":"Der Kopf hinter dem Projekt."},"lovely_contributors":"Mitwirkende","thanks":"Vielen Dank an alle, die zu linked beigetragen haben."}}'),delete t.options._Ctor}},409:function(t,e,n){"use strict";var r=n(397),l=n.n(r);e.default=l.a},424:function(t,e,n){"use strict";n.r(e);n(16),n(5);var r={props:{contributors:{type:Array,default:null},error:{type:Object,default:null}},computed:{getMaintainer:function(){return this.$props.contributors.filter((function(t){return"lostdesign"===t.login}))[0]}}},l=n(20),o=n(409),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.contributors?n("div",{staticClass:"space-y-4 sm:space-y-8 mt-12"},[n("div",{staticClass:"space-y-4 sm:space-y-8"},[n("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v("\n          "+t._s(t.$t("maintainer.title"))+"\n        ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("maintainer.subline")))])]),t._v(" "),n("a",{ref:"norel noopener",staticClass:"\n          inline-flex\n          flex-col\n          m-0\n          mb-6\n          sm:mb-0 sm:m-4\n          md:m-6\n          lg:m-8\n          space-y-4\n        ",attrs:{target:"_blank",href:t.getMaintainer.html_url}},[n("img",{staticClass:"\n            mx-auto\n            h-24\n            w-24\n            md:h-20 md:w-20\n            rounded-full\n            lg:w-24 lg:h-24\n          ",attrs:{src:t.getMaintainer.avatar_url,alt:t.getMaintainer.login+" profile image"}}),t._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"text-center font-medium lg:text-sm"},[n("h3",{staticClass:"text-base font-bold"},[t._v(t._s(t.getMaintainer.login))]),t._v(" "),n("p",{staticClass:"text-xs text-linked"},[t._v("\n              "+t._s(t.getMaintainer.contributions)+" commits\n            ")])])])])]),t._v(" "),n("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v("\n        "+t._s(t.$t("lovely_contributors"))+"\n      ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("thanks")))])]),t._v(" "),n("ul",{staticClass:"flex flex-wrap",attrs:{role:"list"}},[t._l(t.$props.contributors,(function(e){return["lostdesign"!==e.login?n("a",{key:e.login,ref:"norel noopener",refInFor:!0,staticClass:"\n            basis-1/2\n            sm:basis-1/3\n            md:basis-1/5\n            lg:basis-1/6\n            xl:basis-1/12\n            flex flex-col\n            justify-center\n            grow\n            shrink-0\n            self-center\n            items-center\n            m-0\n            mb-6\n            sm:mb-0 sm:m-4\n            md:m-6\n            lg:m-8\n            space-y-4\n          ",attrs:{target:"_blank",href:e.html_url}},[n("li",[n("img",{staticClass:"\n                mx-auto\n                h-24\n                w-24\n                md:h-20 md:w-20\n                rounded-full\n                lg:w-24 lg:h-24\n              ",attrs:{src:e.avatar_url,alt:e.login+" profile image"}}),t._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"text-center font-medium lg:text-sm"},[n("h3",{staticClass:"text-base font-bold"},[t._v(t._s(e.login))]),t._v(" "),n("p",{staticClass:"text-xs text-linked"},[t._v("\n                  "+t._s(e.contributions)+" commit"+t._s(1===e.contributions?"":"s")+"\n                ")])])])])]):t._e()]}))],2)]):t._e(),t._v(" "),t.error?n("github-error",{attrs:{error:t.error}}):t._e()],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{GithubError:n(391).default})}}]);