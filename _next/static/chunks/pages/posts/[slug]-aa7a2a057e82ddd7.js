(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0!==(n=(function(){return s}).apply(t,[]))&&(e.exports=n)}()},7484:function(e){var t,n,r,s,a,i,c,o,l,u,d,h,f,m,x,p,g,j,y,v,b;e.exports=(t="millisecond",n="second",r="minute",s="hour",a="week",i="month",c="quarter",o="year",l="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(x={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},p=function(e){return e instanceof v},g=function e(t,n,r){var s;if(!t)return m;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(s=a),n&&(x[a]=n,s=a);var i=t.split("-");if(!s&&i.length>1)return e(i[0])}else{var c=t.name;x[c]=t,s=c}return!r&&s&&(m=s),s||!r&&m},j=function(e,t){if(p(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new v(n)},(y={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,i),a=n-s<0,c=t.clone().add(r+(a?-1:1),i);return+(-(r+(n-s)/(a?s-c:c-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:i,y:o,w:a,d:"day",D:l,h:s,m:r,s:n,ms:t,Q:c})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,y.i=p,y.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},b=(v=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e)}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(e,t){var n=j(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return j(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<j(e)},f.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var c=this,u=!!y.u(t)||t,d=y.p(e),h=function(e,t){var n=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?n:n.endOf("day")},f=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,x=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case o:return u?h(1,0):h(31,11);case i:return u?h(1,x):h(0,x+1);case a:var j=this.$locale().weekStart||0,v=(m<j?m+7:m)-j;return h(u?p-v:p+(6-v),x);case"day":case l:return f(g+"Hours",0);case s:return f(g+"Minutes",1);case r:return f(g+"Seconds",2);case n:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,a){var c,u=y.p(e),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[i]=d+"Month",c[o]=d+"FullYear",c[s]=d+"Hours",c[r]=d+"Minutes",c[n]=d+"Seconds",c[t]=d+"Milliseconds",c)[u],f="day"===u?this.$D+(a-this.$W):a;if(u===i||u===o){var m=this.clone().set(l,1);m.$d[h](f),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[y.p(e)]()},f.add=function(e,t){var c,l=this;e=Number(e);var u=y.p(t),d=function(t){var n=j(l);return y.w(n.date(n.date()+Math.round(t*e)),l)};if(u===i)return this.set(i,this.$M+e);if(u===o)return this.set(o,this.$y+e);if("day"===u)return d(1);if(u===a)return d(7);var h=((c={})[r]=6e4,c[s]=36e5,c[n]=1e3,c)[u]||1,f=this.$d.getTime()+e*h;return y.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var r=e||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),a=this.$H,i=this.$m,c=this.$M,o=n.weekdays,l=n.months,d=n.meridiem,f=function(e,n,s,a){return e&&(e[n]||e(t,r))||s[n].slice(0,a)},m=function(e){return y.s(a%12||12,e,"0")},x=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(h,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return c+1;case"MM":return y.s(c+1,2,"0");case"MMM":return f(n.monthsShort,c,l,3);case"MMMM":return f(l,c);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(n.weekdaysMin,t.$W,o,2);case"ddd":return f(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return y.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return x(a,i,!0);case"A":return x(a,i,!1);case"m":return String(i);case"mm":return y.s(i,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,l){var u,d=this,h=y.p(t),f=j(e),m=(f.utcOffset()-this.utcOffset())*6e4,x=this-f,p=function(){return y.m(d,f)};switch(h){case o:u=p()/12;break;case i:u=p();break;case c:u=p()/3;break;case a:u=(x-m)/6048e5;break;case"day":u=(x-m)/864e5;break;case s:u=x/36e5;break;case r:u=x/6e4;break;case n:u=x/1e3;break;default:u=x}return l?u:y.a(u)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=g(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,j.prototype=b,[["$ms",t],["$s",n],["$m",r],["$H",s],["$W","day"],["$M",i],["$y",o],["$D",l]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),j.extend=function(e,t){return e.$i||(e(t,v,j),e.$i=!0),j},j.locale=g,j.isDayjs=p,j.unix=function(e){return j(1e3*e)},j.en=x[m],j.Ls=x,j.p={},j)},3852:function(e,t,n){var r,s;e.exports=(r=n(7484),s={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var n=100*e+t;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}},(r&&"object"==typeof r&&"default"in r?r:{default:r}).default.locale(s,null,!0),s)},592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(5115)}])},3352:function(e,t,n){"use strict";n.d(t,{W:function(){return c}});var r=n(5893),s=n(4298),a=n.n(s),i=n(4696);let c=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(i.qh)}),(0,r.jsx)(a(),{id:"google-analytics",children:"\n        window.dataLayer = window.dataLayer || []; \n        function gtag(){dataLayer.push(arguments);} \n        gtag('js', new Date());\n\n        gtag('config', '".concat(i.qh,"');\n        ")})]})},9782:function(e,t,n){"use strict";var r=n(5893);t.Z=e=>{let{name:t,picture:n}=e;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:t}),(0,r.jsx)("div",{className:"text-xl font-bold",children:t})]})}},6935:function(e,t,n){"use strict";var r=n(5893);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},9519:function(e,t,n){"use strict";n.d(t,{y:function(){return o}});var r=n(5893),s=n(4184),a=n.n(s),i=n(1664),c=n.n(i);let o=e=>{let{title:t,src:n,slug:s}=e,i=(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t),className:a()("max-h-screen max-w-full object-center shadow-sm",{"hover:shadow-lg transition-shadow duration-200":s})});return(0,r.jsx)("div",{className:"flex flex-row justify-center sm:mx-0",children:s?(0,r.jsx)(c(),{as:"/posts/".concat(s),href:"/posts/[slug]","aria-label":t,children:i}):i})}},6269:function(e,t,n){"use strict";var r=n(5893),s=n(7484),a=n.n(s);n(3852),t.Z=e=>{let{dateString:t}=e;return(0,r.jsx)("time",{dateTime:t,children:a()(t).locale("zh-cn").format("YYYY/MMMM/DD dddd")})}},2264:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),s=n(3352),a=n(6935),i=n(5675),c=n.n(i);let o=e=>{let{name:t,iconPath:n,url:s,openNewTab:a=!0}=e;return(0,r.jsx)("a",{href:s,target:a?"_blank":null,title:t,className:"m-2 h-16 w-16 rounded-full border-2 border-transparent p-4 transition-colors duration-200 hover:border-orange-700/70",children:(0,r.jsx)(c(),{src:n,alt:t,width:38,height:38,className:""})})};var l=()=>(0,r.jsx)("footer",{className:"border-t border-neutral-200 bg-neutral-50",children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center py-20 md:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-wrap justify-center py-2",children:[(0,r.jsx)("a",{href:"https://poemcn.github.io",target:"_blank",title:"儿童古诗词",className:"btn-tertiary font-normal text-black",children:"儿童诗词"}),(0,r.jsx)("a",{href:"/",className:"btn-tertiary text-black",title:"幸福之旅",children:"人生如旅"})]}),(0,r.jsxs)("div",{className:"flex flex-1 flex-wrap justify-center py-2",children:[(0,r.jsx)(o,{name:"Youtube",iconPath:"/assets/youtube.svg",url:"https://www.youtube.com/@JoyfulJourney."}),(0,r.jsx)(o,{name:"抖音",iconPath:"/assets/tiktok.svg",url:"https://www.douyin.com/user/MS4wLjABAAAAd70-XotKke70ms6C4Lh-1FuXLPbjb9tlZPBjt-iMhjQ"}),(0,r.jsx)(o,{name:"JoyfulJourney",iconPath:"/assets/joyfuljourney.svg",openNewTab:!1,url:"/"})]})]})})}),u=n(6077),d=e=>{let{preview:t,children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{}),(0,r.jsx)(s.W,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:n})}),(0,r.jsx)(l,{})]})}},6077:function(e,t,n){"use strict";var r=n(5893),s=n(9008),a=n.n(s),i=n(4696);t.Z=()=>(0,r.jsxs)(a(),{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:i.jG}),(0,r.jsx)("meta",{property:"og:image",content:i.vC})]})},2348:function(e,t,n){"use strict";n.d(t,{R:function(){return c},k:function(){return i}});var r=n(5893),s=n(1664),a=n.n(s);let i=e=>{let{props:t,classNames:n="btn-tertiary"}=e;return(0,r.jsxs)(a(),{as:"/tags/".concat(t.tag),href:"/tags/[slug]",title:"标签","aria-label":"标签",className:n,children:[t.tag," ",t.count&&(0,r.jsx)("small",{children:t.count})]})},c=e=>{let{tags:t}=e;return(0,r.jsx)("div",{className:"flex flex-wrap gap-2 md:gap-3",children:t.split("#").map(e=>e.trim()).filter(e=>e).map(e=>(0,r.jsx)(i,{props:{tag:e},classNames:"btn-tertiary m-0 p-0 text-sm font-normal"},e))})}},4696:function(e,t,n){"use strict";n.d(t,{jG:function(){return a},qh:function(){return s},vC:function(){return r}});let r="/joyfuljourney.svg",s="G-P0GKHKS8BL",a="JoyfulJourney 幸福之旅"},7789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(3352),a=n(6077);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(s.W,{}),(0,r.jsx)("section",{className:"flex min-h-screen items-center p-16 dark:bg-gray-900 dark:text-gray-100",children:(0,r.jsx)("div",{className:"container mx-auto my-8 flex flex-col items-center justify-center px-5",children:(0,r.jsxs)("div",{className:"max-w-md text-center",children:[(0,r.jsxs)("h2",{className:"mb-8 text-9xl font-extrabold dark:text-gray-600",children:[(0,r.jsx)("span",{className:"sr-only",children:"Error"}),"404"]}),(0,r.jsx)("p",{className:"text-2xl font-semibold md:text-3xl",children:"页面找不到了"}),(0,r.jsx)("p",{className:"mb-8 mt-4 dark:text-gray-400",children:(0,r.jsx)("a",{className:"btn-tertiary",href:"/",children:"去主页面看看吧"})}),(0,r.jsx)("a",{rel:"noopener noreferrer",href:"/",className:"btn-primary font-bold",children:"返回主页"})]})})})]})}},5115:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return O}});var r=n(5893),s=n(1163),a=n(6935),i=n(3932),c=n.n(i);let o=e=>{let{content:t}=e;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:"prose  ".concat(c().markdown),dangerouslySetInnerHTML:{__html:t}})})};var l=n(1664),u=n.n(l),d=()=>(0,r.jsxs)("h2",{className:"mb-20 mt-8 font-bold leading-tight tracking-tight md:tracking-tighter",children:[(0,r.jsx)(u(),{href:"/",className:"hover:underline",children:"JoyfulJourney"}),"."]}),h=n(9782),f=n(6269),m=n(9519),x=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:"mb-12 text-center leading-tight tracking-tighter md:text-left md:leading-none",children:t})},p=n(2348),g=e=>{let{title:t,coverImage:n,date:s,tags:a,author:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{children:t}),(0,r.jsx)("div",{className:"hidden md:mb-12 md:block",children:(0,r.jsx)(h.Z,{name:i.name,picture:i.picture})}),(0,r.jsx)("div",{className:"mb-8 sm:mx-0 md:mb-16",children:(0,r.jsx)(m.y,{title:t,src:n})}),(0,r.jsxs)("div",{className:"mx-auto max-w-2xl",children:[(0,r.jsx)("div",{className:"mb-6 block md:hidden",children:(0,r.jsx)(h.Z,{name:i.name,picture:i.picture})}),(0,r.jsx)("div",{className:"mb-2 text-base",children:(0,r.jsx)(f.Z,{dateString:s})}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)(p.R,{tags:a})})]})]})},j=n(2264),y=n(9008),v=n.n(y),b=n(4184),w=n.n(b);let _=e=>{let{title:t,src:n}=e;return(0,r.jsx)("div",{className:"sm:mx-0 pb-2",children:(0,r.jsx)("iframe",{className:w()("shadow-sm w-full aspect-video"),src:n,title:t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})};var $=n(5675),M=n.n($);let k=e=>"https://www.youtube.com/embed/".concat(e),N=e=>"https://www.douyin.com/video/".concat(e),Y=e=>{let{postVideo:t}=e;return t.douyinId||t.youtubeId?(0,r.jsxs)("div",{className:"mx-auto max-w-2xl",children:[t.youtubeId&&(0,r.jsx)(_,{src:k(t.youtubeId),title:"Youtube"}),t.douyinId&&(0,r.jsx)("div",{className:"flex flex-col items-center py-16",children:(0,r.jsxs)("a",{href:N(t.douyinId),target:"_blank",className:"mb-6 border border-black bg-black px-12 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8",children:[(0,r.jsx)(M(),{src:"/assets/tiktok.svg",alt:"抖音",width:38,height:38,className:"inline pr-4"}),"去抖音观看该视频"]})})]}):null};var S=n(7789),D=n(4696),L=!0;function O(e){let{post:t,morePosts:n,preview:i}=e,c=(0,s.useRouter)(),l="".concat(t.title," | ").concat(D.jG);return c.isFallback||(null==t?void 0:t.slug)?(0,r.jsx)(j.Z,{preview:i,children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d,{}),c.isFallback?(0,r.jsx)(x,{children:"Loading…"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)(v(),{children:[(0,r.jsx)("title",{children:l}),(0,r.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,r.jsx)(g,{title:t.title,coverImage:t.coverImage,date:t.date,tags:t.tags,author:t.author}),t.video&&(0,r.jsx)(Y,{postVideo:t.video}),(0,r.jsx)(o,{content:t.content})]})})]})}):(0,r.jsx)(S.default,{})}},3932:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[316,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);