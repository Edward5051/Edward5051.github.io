(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),o=n(862);t.default=void 0;var r=o(n(7294)),a=n(1689),s=n(2441),d=n(5749),l={};function p(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var c=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.asPath||"/",c=r.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=i(t,2),r=n[0],s=n[1];return{href:r,as:e.as?(0,a.resolveHref)(o,e.as):s||r}}),[o,e.href,e.as]),m=c.href,u=c.as,f=e.children,h=e.replace,x=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var y=r.Children.only(f),w=y&&"object"===typeof y&&y.ref,v=(0,d.useIntersection)({rootMargin:"200px"}),k=i(v,2),_=k[0],j=k[1],C=r.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);(0,r.useEffect)((function(){var e=j&&t&&(0,a.isLocalURL)(m),i="undefined"!==typeof b?b:n&&n.locale,o=l[m+"%"+u+(i?"%"+i:"")];e&&!o&&p(n,m,u,{locale:i})}),[u,m,j,b,t,n]);var I={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,s,d){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),t[o?"replace":"push"](n,i,{shallow:r,locale:d,scroll:s}))}(e,n,m,u,h,x,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(m)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(n,m,u,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var z="undefined"!==typeof b?b:n&&n.locale,N=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(u,z,n&&n.locales,n&&n.domainLocales);I.href=N||(0,a.addBasePath)((0,a.addLocale)(u,z,n&&n.defaultLocale))}return r.default.cloneElement(y,I)};t.default=c},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,d=(0,o.useRef)(),l=(0,o.useState)(!1),p=i(l,2),c=p[0],m=p[1],u=(0,o.useCallback)((function(e){d.current&&(d.current(),d.current=void 0),n||c||e&&e.tagName&&(d.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:i}),n}(n),o=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),s.delete(o))}}(e,(function(e){return e&&m(e)}),{rootMargin:t}))}),[n,t,c]);return(0,o.useEffect)((function(){if(!a&&!c){var e=(0,r.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[c]),[u,c]};var o=n(7294),r=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},1127:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var i=n(5893),o=(n(7294),n(9163)),r=o.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-6qzy6y-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),a=o.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-6qzy6y-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),s=o.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-6qzy6y-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),d=o.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-6qzy6y-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),l=(o.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-6qzy6y-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-6qzy6y-5"})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-6qzy6y-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"})),o.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-6qzy6y-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-6qzy6y-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),o.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-6qzy6y-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Boxes",componentId:"vuq5bz-0"})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ","{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ","{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Box",componentId:"vuq5bz-1"})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ","{height:210px;}@media ","{height:135px;padding:16px;}@media ","{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.h5.withConfig({displayName:"AcomplishmentsStyles__BoxNum",componentId:"vuq5bz-2"})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:28px;line-height:32px;}@media ","{font-size:24px;line-height:26px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"AcomplishmentsStyles__BoxText",componentId:"vuq5bz-3"})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:20px;};@media ","{font-size:10px;line-height:14px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__Join",componentId:"vuq5bz-4"})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ","{display:flex;justify-content:center;padding-bottom:64px;}@media ","{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.h5.withConfig({displayName:"AcomplishmentsStyles__JoinText",componentId:"vuq5bz-5"})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ","{line-height:32px;font-size:20px;};@media ","{font-size:16px;line-height:24px;margin:0 0 16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"AcomplishmentsStyles__IconContainer",componentId:"vuq5bz-6"})(["display:flex;@media ","{width:160px;justify-content:space-between;}"],(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"pbjia3-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md}))),p=function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r,{row:!0,nopadding:!0,children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(a,{main:!0,center:!0,children:["Welcome To ",(0,i.jsx)("br",{}),"Emmanuel Danladi's personal portfolio"]}),(0,i.jsx)(s,{children:"I am a web developer / web designer, I've created multiple websites with the use of my MERN stack knowledge."})]})})})},c=o.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"l76idc-0"})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]),m=o.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"l76idc-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),u=o.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"l76idc-2"})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ","{width:100%;}"],(function(e){return e.theme.breakpoints.sm})),f=o.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"l76idc-3"})(["text-align:center;z-index:20;width:100%;"]),h=o.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"l76idc-4"})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:",";"],(function(e){return e.title?"3rem":"2rem"})),x=o.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"l76idc-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]),g=(o.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"l76idc-6"})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]),o.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"l76idc-7"})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ","{padding:.3rem}"],(function(e){return e.theme.breakpoints.sm}))),b=(o.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"l76idc-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),o.default.a.withConfig({displayName:"ProjectsStyles__ExternalLinks",componentId:"l76idc-9"})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]),o.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"l76idc-10"})(["display:flex;justify-content:space-around;padding:2rem;"])),y=o.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"l76idc-11"})(["color:#d8bfbf;font-size:1.5rem;"]),w=[{title:"MERN Memories",description:"Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",image:"/images/1.png",tags:["Mongo","Express","React","Node"],source:"https://google.com",visit:"https://google.com",id:0},{title:"E-Commerce",description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",image:"/images/2.png",tags:["React","JavaScript"],source:"https://google.com",visit:"https://google.com",id:1},{title:"WebRTC App",description:"This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",image:"/images/3.jpg",tags:["React","WebRTC"],source:"https://google.com",visit:"https://google.com",id:2},{title:"Unichat",description:"This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",image:"/images/4.jpg",tags:["React","ChatEngine","Firebase"],source:"https://google.com",visit:"https://google.com",id:3}],v=function(){return(0,i.jsxs)(r,{nopadding:!0,id:"projects",children:[(0,i.jsx)(d,{}),(0,i.jsx)(a,{main:!0,children:"Projects"}),(0,i.jsx)(m,{children:w.map((function(e,t){return(0,i.jsxs)(u,{children:[(0,i.jsx)(c,{src:e.image}),(0,i.jsxs)(f,{children:[(0,i.jsx)(h,{title:!0,children:e.title}),(0,i.jsx)(x,{})]}),(0,i.jsx)(g,{className:"card-info",children:e.description}),(0,i.jsxs)("div",{children:[(0,i.jsx)(f,{children:"Stack"}),(0,i.jsx)(b,{children:e.tags.map((function(e,t){return(0,i.jsx)(y,{children:e},t)}))})]})]},t)}))})]})},k=n(859),_=(o.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-1ehw0pq-0"})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),o.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-1ehw0pq-1"})(["width:100%;"]),o.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-1ehw0pq-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),j=o.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-1ehw0pq-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),C=o.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-1ehw0pq-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),I=o.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-1ehw0pq-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),z=o.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-1ehw0pq-6"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),N=(o.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-1ehw0pq-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,i.jsxs)(r,{id:"tech",children:[(0,i.jsx)(d,{divider:!0}),(0,i.jsx)(a,{children:"Technologies"}),(0,i.jsx)(s,{children:"I've worked with a range a of technologies in the web development world. From Back-end To Design"}),(0,i.jsxs)(_,{children:[(0,i.jsxs)(z,{children:[(0,i.jsx)("picture",{children:(0,i.jsx)(k.GR$,{size:"3rem"})}),(0,i.jsxs)(j,{children:[(0,i.jsx)(C,{children:"Front-End"}),(0,i.jsxs)(I,{children:["Experience with ",(0,i.jsx)("br",{}),"React.js"]})]})]}),(0,i.jsxs)(z,{children:[(0,i.jsx)("picture",{children:(0,i.jsx)(k.BwW,{size:"3rem"})}),(0,i.jsxs)(j,{children:[(0,i.jsx)(C,{children:"Back-End"}),(0,i.jsxs)(I,{children:["Experience with ",(0,i.jsx)("br",{}),"Node and Databases"]})]})]}),(0,i.jsxs)(z,{children:[(0,i.jsx)("picture",{children:(0,i.jsx)(k.MSM,{size:"3rem"})}),(0,i.jsxs)(j,{children:[(0,i.jsx)(C,{children:"UI/UX"}),(0,i.jsxs)(I,{children:["Experience with ",(0,i.jsx)("br",{}),"tools like Figma"]})]})]})]}),(0,i.jsx)(d,{colorAlt:!0})]})}),S=(o.default.ul.withConfig({displayName:"TimeLineStyles__CarouselContainer",componentId:"vs8qb6-0"})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ","{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"TimeLineStyles__CarouselMobileScrollNode",componentId:"vs8qb6-1"})(["@media ","{display:flex;min-width:","}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.final?"120%;":"min-content"})),o.default.div.withConfig({displayName:"TimeLineStyles__CarouselItem",componentId:"vs8qb6-2"})(["background:#0F1624;border-radius:3px;max-width:196px;@media ","{max-width:124px;}@media ","{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;",";}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.active===e.index?"opacity: 1":"opacity: 0.5"})),o.default.h4.withConfig({displayName:"TimeLineStyles__CarouselItemTitle",componentId:"vs8qb6-3"})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ","{font-size:20px;line-height:28px;margin-bottom:4px;}@media ","{font-size:16px;line-height:24px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.svg.withConfig({displayName:"TimeLineStyles__CarouselItemImg",componentId:"vs8qb6-4"})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ","{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"],(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"TimeLineStyles__CarouselItemText",componentId:"vs8qb6-5"})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ","{font-size:12px;line-height:18px;padding-right:32px;}@media ","{font-size:10px;line-height:16px;padding-right:0;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtons",componentId:"vs8qb6-6"})(["width:288px;display:none;visibility:hidden;@media ","{display:flex;visibility:visible;margin-bottom:48px;}"],(function(e){return e.theme.breakpoints.sm})),o.default.button.withConfig({displayName:"TimeLineStyles__CarouselButton",componentId:"vs8qb6-7"})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:",";transform:",";&:focus{outline:none;}"],(function(e){return e.active===e.index?"1":".33"}),(function(e){return e.active===e.index?"scale(1.6)":"scale(1)"})),o.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtonDot",componentId:"vs8qb6-8"})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]),n(2821)),F=n(1649),T=o.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),L=o.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-1"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),E=o.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),q=(o.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),o.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-4"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm}))),D=(o.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-9w0vkp-5"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,o.default)(F.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-9w0vkp-6"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),o.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-7"})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"])),P=o.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1ifsifd-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),R=o.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1ifsifd-1"})(["font-size:18px;line-height:30px;color:rgba(250,245,233,1);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),B=o.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1ifsifd-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),M=o.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1ifsifd-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),O=o.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1ifsifd-4"})(["color:rgba(250,245,233,1);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),A=o.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1ifsifd-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),H=o.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1ifsifd-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),G=o.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1ifsifd-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),U=o.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1ifsifd-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(250,245,233,1);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),W=function(){return(0,i.jsxs)(P,{children:[(0,i.jsxs)(H,{children:[(0,i.jsxs)(G,{children:[(0,i.jsx)(U,{children:"Call"}),(0,i.jsx)(R,{href:"tel:08058185936",children:"08058185936"})]}),(0,i.jsxs)(G,{children:[(0,i.jsx)(U,{children:"Email"}),(0,i.jsx)(R,{href:"mailto:edante12345678@gmail.com",children:"edante12345678@gmail.com"})]})]}),(0,i.jsxs)(B,{children:[(0,i.jsx)(M,{children:(0,i.jsx)(O,{children:"I'm not interested in a lot of things, but when I am, I am"})}),(0,i.jsxs)(A,{children:[(0,i.jsx)(D,{href:"https://google.com",children:(0,i.jsx)(S.RrF,{size:"3rem"})}),(0,i.jsx)(D,{href:"https://google.com",children:(0,i.jsx)(S._iD,{size:"3rem"})}),(0,i.jsx)(D,{href:"https://google.com",children:(0,i.jsx)(S.t0C,{size:"3rem"})})]})]})]})},J=n(1664),K=function(){return(0,i.jsx)("div",{children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(J.default,{href:"#projects",children:(0,i.jsx)(q,{children:"Projects"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(J.default,{href:"#tech",children:(0,i.jsx)(q,{children:" Technologies"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(J.default,{href:"#about",children:(0,i.jsx)(q,{children:" About"})})})]}),(0,i.jsxs)(E,{children:[(0,i.jsx)(D,{href:"https://github.com/Edward5051",target:"blank",rel:"noopener noreferrer",children:(0,i.jsx)(S.RrF,{size:"3rem"})}),(0,i.jsx)(D,{href:"https://www.linkedin.com/in/emmanuel-danladi-9206201b0/",target:"blank",rel:"noopener noreferrer",children:(0,i.jsx)(S._iD,{size:"3rem"})}),(0,i.jsx)(D,{href:"https://www.instagram.com/emmanuel.danladi.5051/",target:"blank",rel:"noopener noreferrer",children:(0,i.jsx)(S.t0C,{size:"3rem"})})]})]})})},X=o.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"mzu455-0"})(["max-width:1280px;width:100%;margin:auto;"]),Y=function(e){var t=e.children;return(0,i.jsxs)(X,{children:[(0,i.jsx)(K,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(W,{})]})},V=function(){return(0,i.jsxs)(Y,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(v,{}),(0,i.jsx)(N,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1127)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=i.createContext&&i.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};function d(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),d(e.child))}))}function l(e){return function(t){return i.createElement(p,a({attr:a({},e.attr)},t),d(e.child))}}function p(e){var t=function(t){var n,o=e.attr,r=e.size,d=e.title,l=s(e,["attr","size","title"]),p=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return void 0!==r?i.createElement(r.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[866,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);