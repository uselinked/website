(window.webpackJsonp=window.webpackJsonp||[]).push([[7,11],{387:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},388:function(t,e,r){r(15),r(10),r(16),r(5),r(18),r(14),r(19);var n=r(45),o=r(46),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(17),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,y=data.attrs,O=void 0===y?{}:y,w=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},O)},w),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{fill:"currentColor",d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"}})]))}}},389:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"released":"released {date}"},"de":{"released":"{date} veröffentlicht"}}'),delete t.options._Ctor}},392:function(t,e,r){"use strict";r.r(e);var n=r(169),o=r.n(n),c=r(388),l=r.n(c),f={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:o.a,IconExternal:l.a}},d=r(20),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:t.$props.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Check on Github")]),t._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,r){r(15),r(10),r(16),r(5),r(18),r(14),r(19);var n=r(45),o=r(46),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(17),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,y=data.attrs,O=void 0===y?{}:y,w=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},O)},w),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{fill:"currentColor",d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}})]))}}},402:function(t,e,r){"use strict";var n=r(3),o=r(2),c=r(4),l=r(69),f=r(387),d=r(262),h=r(6),v=o.RangeError,m=o.String,y=Math.floor,O=c(d),w=c("".slice),_=c(1..toFixed),x=function(t,e,r){return 0===e?r:e%2==1?x(t,e-1,r*t):x(t*t,e/2,r)},j=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=y(n/1e7)},S=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=y(r/t),r=r%t*1e7},C=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+O("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:h((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!h((function(){_({})}))},{toFixed:function(t){var e,r,n,o,c=f(this),d=l(t),data=[0,0,0,0,0,0],h="",y="0";if(d<0||d>20)throw v("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return m(c);if(c<0&&(h="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*x(2,69,1))-69)<0?c*x(2,-e,1):c/x(2,e,1),r*=4503599627370496,(e=52-e)>0){for(j(data,0,r),n=d;n>=7;)j(data,1e7,0),n-=7;for(j(data,x(10,n,1),0),n=e-1;n>=23;)S(data,1<<23),n-=23;S(data,1<<n),j(data,1,1),S(data,2),y=C(data)}else j(data,0,r),j(data,1<<-e,0),y=C(data)+O("0",d);return y=d>0?h+((o=y.length)<=d?"0."+O("0",d-o)+y:w(y,0,o-d)+"."+w(y,o-d)):h+y}})},403:function(t,e,r){"use strict";var n=r(389),o=r.n(n);e.default=o.a},404:function(t,e,r){"use strict";r.r(e);r(402),r(26),r(70),r(47),r(50),r(5),r(16),r(24);var n=r(386),o=r(393),c={props:{release:{type:Object,required:!0}},methods:{getHumanFileSize:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e?1e3:1024;if(Math.abs(t)<n)return t+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=-1,c=Math.pow(10,r);do{t/=n,++u}while(Math.round(Math.abs(t)*c)/c>=n&&u<o.length-1);return t.toFixed(r)+" "+o[u]},getOperatingSystemName:function(t){var e=t.split(".");return e[0].includes("Setup")?"Windows Installer":{dmg:"MacOS",exe:"Windows Portable",deb:"Debian",AppImage:"Linux",rpm:"Fedora",pacman:"Arch"}[e[e.length-1]]},sumArray:function(t){return 0===t.length?0:t.reduce((function(t,e){return t+e}))},daysSince:function(t){return n.DateTime.fromISO(t).toRelative({locale:this.$i18n.locale})},localeDate:function(t){return n.DateTime.fromISO(t).setLocale(this.$i18n.locale).toLocaleString({day:"numeric",month:"long",year:"numeric"})},getFilteredAssets:function(t){return t.filter((function(t){return!t.name.includes(".yml")})).filter((function(t){return!t.name.includes(".blockmap")})).filter((function(t){return!t.name.includes(".zip")}))}},components:{DownloadIcon:r.n(o).a}},l=c,f=r(20),d=r(403),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"block space-y-4 md:space-y-0 md:flex justify-between items-center mb-12"},[r("p",[r("span",{staticClass:"text-md rounded bg-linked text-white py-1 px-2 mr-4"},[t._v("Version "+t._s(t.$props.release.name))]),t._v(" "),r("i18n",{staticClass:"text-gray-600",attrs:{path:"released",tag:"span"},scopedSlots:t._u([{key:"date",fn:function(){return[t._v("\n          "+t._s(t.daysSince(t.$props.release.published_at))+"\n        ")]},proxy:!0}])})],1),t._v(" "),r("goto-github",{attrs:{page:t.$props.release.html_url}})],1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"},[t._l(t.getFilteredAssets(t.$props.release.assets),(function(e){return[r("a",{key:e.id,staticClass:"bg-gray-50 border-gray-200 border-2 p-4 md:p-8 rounded-lg flex items-center space-x-4 group hover:border-linked hover:text-bright-pink",attrs:{href:e.browser_download_url}},[r("download-icon",{staticClass:"w-5 h-5"}),t._v(" "),r("div",[r("h2",{staticClass:"text-xl"},[t._v(t._s(t.getOperatingSystemName(e.name)))]),t._v(" "),r("p",{staticClass:"text-xs"},[t._v(t._s(t.getHumanFileSize(e.size))+" • "+t._s(e.name))])])],1)]}))],2)])}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{GotoGithub:r(392).default})}}]);