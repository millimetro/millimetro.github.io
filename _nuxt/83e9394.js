(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{267:function(e,t,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("75bc6991",content,!0,{sourceMap:!1})},272:function(e,t,n){"use strict";n(267)},273:function(e,t,n){var l=n(36)(!1);l.push([e.i,"@media(max-width:768px){.eyz-web{display:none}}@media(min-width:768px){.eyz-mobile{display:none}}.eyz-mobile,.eyz-web{height:100vh}.eyz-eyes{position:relative;top:50%;transform:translateY(-50%);width:100%;text-align:center}.eyz-eyes .eyz-eye{width:240px;height:120px;background:#f5f5f5;display:inline-block;margin:40px;border-radius:100%;position:relative;overflow:hidden}.eyz-eyes .eyz-ball{width:70px;height:70px;background:#000;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;border:15px solid #00f}",""]),e.exports=l},280:function(e,t,n){"use strict";n.r(t);var l={mounted:function(){var e=document.getElementsByClassName("eyz-ball");document.onmousemove=function(){for(var t=100*event.clientX/window.innerWidth+"%",n=100*event.clientY/window.innerHeight+"%",i=0;;i++)e[i].style.left=t,e[i].style.top=n,e[i].style.transform="translate(-"+t+", -"+n+")"}}},o=(n(272),n(15)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"eyz-web"},[n("div",{staticClass:"eyz-eyes"},[n("div",{staticClass:"eyz-eye"},[n("div",{staticClass:"eyz-ball"})]),e._v(" "),n("div",{staticClass:"eyz-eye"},[n("div",{staticClass:"eyz-ball"})])])]),e._v(" "),n("div",{staticClass:"eyz-mobile"},[n("div",{staticClass:"eyz-eyes"},[n("div",{staticClass:"eyz-eye"},[n("div",{staticClass:"eyz-ball"})])])])])}],!1,null,null,null);t.default=component.exports},284:function(e,t,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("01de4806",content,!0,{sourceMap:!1})},295:function(e,t,n){"use strict";n(284)},296:function(e,t,n){var l=n(36)(!1);l.push([e.i,"@media(max-width:768px){.eye-main p,.eye-testino h2{font-size:12px;text-transform:uppercase}}.eye-main{display:flex;height:100vh;width:100%;flex-direction:column;text-align:center;justify-content:center}.eye-main p{font-size:16px;text-transform:lowercase;color:#fff}.eye-testino h2{font-size:50px;text-transform:uppercase;color:#fff}",""]),e.exports=l},312:function(e,t,n){"use strict";n.r(t);var l={components:{Eyz:n(280).default},mounted:function(){gsap.from(".eye-main",1,{y:"100",opacity:0,ease:Expo.easeInOut,delay:0,stagger:0})}},o=(n(295),n(15)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"eye-main"},[n("Eyz"),e._v(" "),n("div",{staticClass:"eye-testino"})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Eyz:n(280).default})}}]);