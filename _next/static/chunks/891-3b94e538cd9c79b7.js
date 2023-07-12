(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{4184:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&t.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0!==(n=(function(){return s}).apply(e,[]))&&(t.exports=n)}()},7484:function(t){var e,n,r,s,i,a,c,u,o,l,d,f,h,m,x,g,p,j,y,v,$;t.exports=(e="millisecond",n="second",r="minute",s="hour",i="week",a="month",c="quarter",u="year",o="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(x={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},g=function(t){return t instanceof v},p=function t(e,n,r){var s;if(!e)return m;if("string"==typeof e){var i=e.toLowerCase();x[i]&&(s=i),n&&(x[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var c=e.name;x[c]=e,s=c}return!r&&s&&(m=s),s||!r&&m},j=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},(y={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,a),i=n-s<0,c=e.clone().add(r+(i?-1:1),a);return+(-(r+(n-s)/(i?s-c:c-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:u,w:i,d:"day",D:o,h:s,m:r,s:n,ms:e,Q:c})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=p,y.i=g,y.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},$=(v=function(){function t(t){this.$L=p(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return j(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<j(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var c=this,l=!!y.u(e)||e,d=y.p(t),f=function(t,e){var n=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf("day")},h=function(t,e){return y.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,x=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case u:return l?f(1,0):f(31,11);case a:return l?f(1,x):f(0,x+1);case i:var j=this.$locale().weekStart||0,v=(m<j?m+7:m)-j;return f(l?g-v:g+(6-v),x);case"day":case o:return h(p+"Hours",0);case s:return h(p+"Minutes",1);case r:return h(p+"Seconds",2);case n:return h(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,i){var c,l=y.p(t),d="set"+(this.$u?"UTC":""),f=((c={}).day=d+"Date",c[o]=d+"Date",c[a]=d+"Month",c[u]=d+"FullYear",c[s]=d+"Hours",c[r]=d+"Minutes",c[n]=d+"Seconds",c[e]=d+"Milliseconds",c)[l],h="day"===l?this.$D+(i-this.$W):i;if(l===a||l===u){var m=this.clone().set(o,1);m.$d[f](h),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,e){var c,o=this;t=Number(t);var l=y.p(e),d=function(e){var n=j(o);return y.w(n.date(n.date()+Math.round(e*t)),o)};if(l===a)return this.set(a,this.$M+t);if(l===u)return this.set(u,this.$y+t);if("day"===l)return d(1);if(l===i)return d(7);var f=((c={})[r]=6e4,c[s]=36e5,c[n]=1e3,c)[l]||1,h=this.$d.getTime()+t*f;return y.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),i=this.$H,a=this.$m,c=this.$M,u=n.weekdays,o=n.months,d=n.meridiem,h=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},m=function(t){return y.s(i%12||12,t,"0")},x=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return y.s(e.$y,4,"0");case"M":return c+1;case"MM":return y.s(c+1,2,"0");case"MMM":return h(n.monthsShort,c,o,3);case"MMMM":return h(o,c);case"D":return e.$D;case"DD":return y.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(i);case"HH":return y.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return x(i,a,!0);case"A":return x(i,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(e.$s);case"ss":return y.s(e.$s,2,"0");case"SSS":return y.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,o){var l,d=this,f=y.p(e),h=j(t),m=(h.utcOffset()-this.utcOffset())*6e4,x=this-h,g=function(){return y.m(d,h)};switch(f){case u:l=g()/12;break;case a:l=g();break;case c:l=g()/3;break;case i:l=(x-m)/6048e5;break;case"day":l=(x-m)/864e5;break;case s:l=x/36e5;break;case r:l=x/6e4;break;case n:l=x/1e3;break;default:l=x}return o?l:y.a(l)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return x[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,j.prototype=$,[["$ms",e],["$s",n],["$m",r],["$H",s],["$W","day"],["$M",a],["$y",u],["$D",o]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),j.extend=function(t,e){return t.$i||(t(e,v,j),t.$i=!0),j},j.locale=p,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=x[m],j.Ls=x,j.p={},j)},3852:function(t,e,n){var r,s;t.exports=(r=n(7484),s={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}},(r&&"object"==typeof r&&"default"in r?r:{default:r}).default.locale(s,null,!0),s)},9782:function(t,e,n){"use strict";var r=n(5893);e.Z=t=>{let{name:e,picture:n}=t;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:e}),(0,r.jsx)("div",{className:"text-xl font-bold",children:e})]})}},6935:function(t,e,n){"use strict";var r=n(5893);e.Z=t=>{let{children:e}=t;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:e})}},9519:function(t,e,n){"use strict";n.d(e,{y:function(){return u}});var r=n(5893),s=n(4184),i=n.n(s),a=n(1664),c=n.n(a);let u=t=>{let{title:e,src:n,slug:s}=t,a=(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(e),className:i()("max-h-screen max-w-full object-center shadow-sm",{"hover:shadow-lg transition-shadow duration-200":s})});return(0,r.jsx)("div",{className:"flex flex-row justify-center sm:mx-0",children:s?(0,r.jsx)(c(),{as:"/posts/".concat(s),href:"/posts/[slug]","aria-label":e,children:a}):a})}},6269:function(t,e,n){"use strict";var r=n(5893),s=n(7484),i=n.n(s);n(3852),e.Z=t=>{let{dateString:e}=t;return(0,r.jsx)("time",{dateTime:e,children:i()(e).locale("zh-cn").format("YYYY/MMMM/DD dddd")})}},9042:function(t,e,n){"use strict";var r=n(5893);e.Z=()=>(0,r.jsxs)("section",{className:"mb-16 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between",children:[(0,r.jsx)("h1",{className:"font-bold leading-tight tracking-tighter md:pr-8",children:"幸福之旅"}),(0,r.jsx)("a",{href:"/",className:"mt-5 text-center text-lg md:pl-8 md:text-left",children:"JoyfulJourney"})]})},2264:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893),s=n(6935),i=n(5675),a=n.n(i);let c=t=>{let{name:e,iconPath:n,url:s,openNewTab:i=!0}=t;return(0,r.jsx)("a",{href:s,target:i?"_blank":null,title:e,className:"m-2 h-16 w-16 rounded-full border-2 border-transparent p-4 transition-colors duration-200 hover:border-orange-700/70",children:(0,r.jsx)(a(),{src:n,alt:e,width:38,height:38,className:""})})};var u=()=>(0,r.jsx)("footer",{className:"border-t border-neutral-200 bg-neutral-50",children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center py-20 md:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-wrap justify-center py-2",children:[(0,r.jsx)("a",{href:"https://poemcn.github.io",target:"_blank",title:"儿童古诗词",className:"btn-tertiary font-normal text-black",children:"儿童诗词"}),(0,r.jsx)("a",{href:"/",className:"btn-tertiary text-black",title:"幸福之旅",children:"人生如旅"})]}),(0,r.jsxs)("div",{className:"flex flex-1 flex-wrap justify-center py-2",children:[(0,r.jsx)(c,{name:"Youtube",iconPath:"/assets/youtube.svg",url:"https://www.youtube.com/@JoyfulJourney."}),(0,r.jsx)(c,{name:"抖音",iconPath:"/assets/tiktok.svg",url:"https://www.douyin.com/user/MS4wLjABAAAAd70-XotKke70ms6C4Lh-1FuXLPbjb9tlZPBjt-iMhjQ"}),(0,r.jsx)(c,{name:"JoyfulJourney",iconPath:"/assets/joyfuljourney.svg",openNewTab:!1,url:"/"})]})]})})}),o=n(6077),l=t=>{let{preview:e,children:n}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:n})}),(0,r.jsx)(u,{})]})}},6077:function(t,e,n){"use strict";var r=n(5893),s=n(9008),i=n.n(s),a=n(4696);e.Z=()=>(0,r.jsxs)(i(),{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:a.jG}),(0,r.jsx)("meta",{property:"og:image",content:a.vC}),(0,r.jsx)("script",{src:"https://www.googletagmanager.com/gtag/js?id=".concat(a.qh)}),(0,r.jsx)("script",{id:"google-analytics",children:"\n        window.dataLayer = window.dataLayer || []; \n        function gtag(){dataLayer.push(arguments);} \n        gtag('js', new Date()); \n        gtag('config', '".concat(a.qh,"');\n        ")})]})},5961:function(t,e,n){"use strict";n.d(e,{$:function(){return f},G:function(){return d}});var r=n(5893),s=n(9782),i=n(6269),a=n(9519),c=n(1664),u=n.n(c),o=n(2348);let l=t=>{let{slug:e,excerpt:n}=t;return(0,r.jsx)(u(),{as:"/posts/".concat(e),href:"/posts/[slug]",className:"a-tertiary",children:n})},d=t=>{let{post:e}=t,{slug:n,title:c,coverImage:u,date:d,excerpt:f,author:h}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(a.y,{slug:n,title:c,src:u})}),(0,r.jsx)("h3",{className:"mb-3 leading-snug",children:(0,r.jsx)(l,{slug:n,excerpt:c})}),(0,r.jsx)("div",{className:"mb-2 text-base",children:(0,r.jsx)(i.Z,{dateString:d})}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(o.R,{tags:e.tags})}),(0,r.jsx)("p",{className:"mb-4 leading-relaxed",children:(0,r.jsx)(l,{slug:n,excerpt:f})}),(0,r.jsx)(s.Z,{name:h.name,picture:h.picture})]})},f=t=>{let{post:e}=t,{title:n,coverImage:c,date:u,excerpt:d,author:f,slug:h}=e;return(0,r.jsxs)("section",{children:[(0,r.jsx)("div",{className:"mb-5 md:mb-8",children:(0,r.jsx)(a.y,{title:n,src:c,slug:h})}),(0,r.jsxs)("div",{className:"mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"mb-4 leading-tight",children:(0,r.jsx)(l,{slug:h,excerpt:n})}),(0,r.jsx)("div",{className:"mb-2 text-base",children:(0,r.jsx)(i.Z,{dateString:u})}),(0,r.jsx)("div",{className:"mb-4 md:mb-0",children:(0,r.jsx)(o.R,{tags:e.tags})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-4 leading-relaxed",children:(0,r.jsx)(l,{slug:h,excerpt:d})}),(0,r.jsx)(s.Z,{name:f.name,picture:f.picture})]})]})]})}},2348:function(t,e,n){"use strict";n.d(e,{R:function(){return c},k:function(){return a}});var r=n(5893),s=n(1664),i=n.n(s);let a=t=>{let{props:e,classNames:n="btn-tertiary"}=t;return(0,r.jsxs)(i(),{as:"/tags/".concat(e.tag),href:"/tags/[slug]",title:"标签","aria-label":"标签",className:n,children:[e.tag," ",e.count&&(0,r.jsx)("small",{children:e.count})]})},c=t=>{let{tags:e}=t;return(0,r.jsx)("div",{className:"flex flex-wrap gap-2 md:gap-3",children:e.split("#").map(t=>t.trim()).filter(t=>t).map(t=>(0,r.jsx)(a,{props:{tag:t},classNames:"btn-tertiary m-0 p-0 text-sm font-normal"},t))})}},4696:function(t,e,n){"use strict";n.d(e,{jG:function(){return i},qh:function(){return s},vC:function(){return r}});let r="/joyfuljourney.svg",s="G-P0GKHKS8BL",i="JoyfulJourney 幸福之旅"}}]);