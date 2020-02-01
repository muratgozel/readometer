const EventEmitter=require("event-emitter-object");function createVisibilityStateListener(a={}){function b(){const a=h[l];a!=f.value&&(f.value=a,e.emit("update"))}function c(){"visible"!=f.value&&(f.value="visible",e.emit("update"))}function d(){"hidden"!=f.value&&(f.value="hidden",e.emit("update"))}const e=new EventEmitter({}),f={started:!1,value:"visible"},g=a.hasOwnProperty("window")?a.window:window,h=a.hasOwnProperty("document")?a.document:document,i=["webkit","ms","o","moz","khtml"].filter(a=>a+"Hidden"in h),j=i&&0<i.length?i[0]:"",k=j+(0<j.length?"H":"h")+"idden",l=j+(0<j.length?"V":"v")+"isibilityState",m=k in h?"modern":h.addEventListener?"focus-blur":"focus-blur-ie";return{emitter:e,start:function(){!0===f.started||("modern"==m?h.addEventListener(j+"visibilitychange",b,0):"focus-blur"==m?(g.addEventListener("focus",c,!0),g.addEventListener("blur",d,!0)):"focus-blur-ie"==m&&(h.attachEvent("onfocusin",c),h.attachEvent("onfocusout",d)),f.started=!0)},pause:function(){!1===f.started||("modern"==m?h.removeEventListener(j+"visibilitychange",b,1):"focus-blur"==m?(g.removeEventListener("focus",c,!0),g.removeEventListener("blur",d,!0)):"focus-blur-ie"==m&&(h.detachEvent("onfocusin",c),h.detachEvent("onfocusout",d)),f.started=!1)},getState:function(){return f.value}}}module.exports=createVisibilityStateListener;