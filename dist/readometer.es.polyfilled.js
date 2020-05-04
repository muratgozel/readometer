import t from"event-emitter-object";import e from"visibility-state-listener";import{domkit as n,typekit as r,objectkit as i,functionkit as o,validationkit as c}from"basekits";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(t,e){return t(e={exports:{}},e.exports),e.exports}var u=function(t){return t&&t.Math==Math&&t},a=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof l&&l)||Function("return this")(),f=function(t){try{return!!t()}catch(t){return!0}},h=!f((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),p={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,d={f:g&&!p.call({1:2},1)?function(t){var e=g(this,t);return!!e&&e.enumerable}:p},v=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m={}.toString,y=function(t){return m.call(t).slice(8,-1)},b="".split,E=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==y(t)?b.call(t,""):Object(t)}:Object,S=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},x=function(t){return E(S(t))},w=function(t){return"object"==typeof t?null!==t:"function"==typeof t},T=function(t,e){if(!w(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!w(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!w(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!w(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},I={}.hasOwnProperty,O=function(t,e){return I.call(t,e)},_=a.document,j=w(_)&&w(_.createElement),A=function(t){return j?_.createElement(t):{}},N=!h&&!f((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),R=Object.getOwnPropertyDescriptor,P={f:h?R:function(t,e){if(t=x(t),e=T(e,!0),N)try{return R(t,e)}catch(t){}if(O(t,e))return v(!d.f.call(t,e),t[e])}},M=function(t){if(!w(t))throw TypeError(String(t)+" is not an object");return t},C=Object.defineProperty,F={f:h?C:function(t,e,n){if(M(t),e=T(e,!0),M(n),N)try{return C(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},k=h?function(t,e,n){return F.f(t,e,v(1,n))}:function(t,e,n){return t[e]=n,t},L=function(t,e){try{k(a,t,e)}catch(n){a[t]=e}return e},D=a["__core-js_shared__"]||L("__core-js_shared__",{}),U=Function.toString;"function"!=typeof D.inspectSource&&(D.inspectSource=function(t){return U.call(t)});var V,W,$,G=D.inspectSource,H=a.WeakMap,Y="function"==typeof H&&/native code/.test(G(H)),B=s((function(t){(t.exports=function(t,e){return D[t]||(D[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),K=0,X=Math.random(),z=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++K+X).toString(36)},q=B("keys"),J=function(t){return q[t]||(q[t]=z(t))},Q={},Z=a.WeakMap;if(Y){var tt=new Z,et=tt.get,nt=tt.has,rt=tt.set;V=function(t,e){return rt.call(tt,t,e),e},W=function(t){return et.call(tt,t)||{}},$=function(t){return nt.call(tt,t)}}else{var it=J("state");Q[it]=!0,V=function(t,e){return k(t,it,e),e},W=function(t){return O(t,it)?t[it]:{}},$=function(t){return O(t,it)}}var ot,ct,lt={set:V,get:W,has:$,enforce:function(t){return $(t)?W(t):V(t,{})},getterFor:function(t){return function(e){var n;if(!w(e)||(n=W(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},st=s((function(t){var e=lt.get,n=lt.enforce,r=String(String).split("String");(t.exports=function(t,e,i,o){var c=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||O(i,"name")||k(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==a?(c?!s&&t[e]&&(l=!0):delete t[e],l?t[e]=i:k(t,e,i)):l?t[e]=i:L(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||G(this)}))})),ut=a,at=function(t){return"function"==typeof t?t:void 0},ft=function(t,e){return arguments.length<2?at(ut[t])||at(a[t]):ut[t]&&ut[t][e]||a[t]&&a[t][e]},ht=Math.ceil,pt=Math.floor,gt=function(t){return isNaN(t=+t)?0:(t>0?pt:ht)(t)},dt=Math.min,vt=function(t){return t>0?dt(gt(t),9007199254740991):0},mt=Math.max,yt=Math.min,bt=function(t){return function(e,n,r){var i,o=x(e),c=vt(o.length),l=function(t,e){var n=gt(t);return n<0?mt(n+e,0):yt(n,e)}(r,c);if(t&&n!=n){for(;c>l;)if((i=o[l++])!=i)return!0}else for(;c>l;l++)if((t||l in o)&&o[l]===n)return t||l||0;return!t&&-1}},Et={includes:bt(!0),indexOf:bt(!1)}.indexOf,St=function(t,e){var n,r=x(t),i=0,o=[];for(n in r)!O(Q,n)&&O(r,n)&&o.push(n);for(;e.length>i;)O(r,n=e[i++])&&(~Et(o,n)||o.push(n));return o},xt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wt=xt.concat("length","prototype"),Tt={f:Object.getOwnPropertyNames||function(t){return St(t,wt)}},It={f:Object.getOwnPropertySymbols},Ot=ft("Reflect","ownKeys")||function(t){var e=Tt.f(M(t)),n=It.f;return n?e.concat(n(t)):e},_t=function(t,e){for(var n=Ot(e),r=F.f,i=P.f,o=0;o<n.length;o++){var c=n[o];O(t,c)||r(t,c,i(e,c))}},jt=/#|\.prototype\./,At=function(t,e){var n=Rt[Nt(t)];return n==Mt||n!=Pt&&("function"==typeof e?f(e):!!e)},Nt=At.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},Rt=At.data={},Pt=At.NATIVE="N",Mt=At.POLYFILL="P",Ct=At,Ft=P.f,kt=function(t,e){var n,r,i,o,c,l=t.target,s=t.global,u=t.stat;if(n=s?a:u?a[l]||L(l,{}):(a[l]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(c=Ft(n,r))&&c.value:n[r],!Ct(s?r:l+(u?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;_t(o,i)}(t.sham||i&&i.sham)&&k(o,"sham",!0),st(n,r,o,t)}},Lt=Array.isArray||function(t){return"Array"==y(t)},Dt=function(t){return Object(S(t))},Ut=function(t,e,n){var r=T(e);r in t?F.f(t,r,v(0,n)):t[r]=n},Vt=!!Object.getOwnPropertySymbols&&!f((function(){return!String(Symbol())})),Wt=Vt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,$t=B("wks"),Gt=a.Symbol,Ht=Wt?Gt:Gt&&Gt.withoutSetter||z,Yt=function(t){return O($t,t)||(Vt&&O(Gt,t)?$t[t]=Gt[t]:$t[t]=Ht("Symbol."+t)),$t[t]},Bt=Yt("species"),Kt=function(t,e){var n;return Lt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Lt(n.prototype)?w(n)&&null===(n=n[Bt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Xt=ft("navigator","userAgent")||"",zt=a.process,qt=zt&&zt.versions,Jt=qt&&qt.v8;Jt?ct=(ot=Jt.split("."))[0]+ot[1]:Xt&&(!(ot=Xt.match(/Edge\/(\d+)/))||ot[1]>=74)&&(ot=Xt.match(/Chrome\/(\d+)/))&&(ct=ot[1]);var Qt=ct&&+ct,Zt=Yt("species"),te=function(t){return Qt>=51||!f((function(){var e=[];return(e.constructor={})[Zt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ee=Yt("isConcatSpreadable"),ne=Qt>=51||!f((function(){var t=[];return t[ee]=!1,t.concat()[0]!==t})),re=te("concat"),ie=function(t){if(!w(t))return!1;var e=t[ee];return void 0!==e?!!e:Lt(t)};kt({target:"Array",proto:!0,forced:!ne||!re},{concat:function(t){var e,n,r,i,o,c=Dt(this),l=Kt(c,0),s=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?c:arguments[e],ie(o)){if(s+(i=vt(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,s++)n in o&&Ut(l,s,o[n])}else{if(s>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Ut(l,s++,o)}return l.length=s,l}});var oe=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},ce=[].push,le=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,c=5==t||o;return function(l,s,u,a){for(var f,h,p=Dt(l),g=E(p),d=function(t,e,n){if(oe(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}(s,u,3),v=vt(g.length),m=0,y=a||Kt,b=e?y(l,v):n?y(l,0):void 0;v>m;m++)if((c||m in g)&&(h=d(f=g[m],m,p),t))if(e)b[m]=h;else if(h)switch(t){case 3:return!0;case 5:return f;case 6:return m;case 2:ce.call(b,f)}else if(i)return!1;return o?-1:r||i?i:b}},se={forEach:le(0),map:le(1),filter:le(2),some:le(3),every:le(4),find:le(5),findIndex:le(6)},ue=Object.defineProperty,ae={},fe=function(t){throw t},he=se.filter,pe=te("filter"),ge=function(t,e){if(O(ae,t))return ae[t];e||(e={});var n=[][t],r=!!O(e,"ACCESSORS")&&e.ACCESSORS,i=O(e,0)?e[0]:fe,o=O(e,1)?e[1]:void 0;return ae[t]=!!n&&!f((function(){if(r&&!h)return!0;var t={length:-1};r?ue(t,1,{enumerable:!0,get:fe}):t[1]=1,n.call(t,i,o)}))}("filter");kt({target:"Array",proto:!0,forced:!pe||!ge},{filter:function(t){return he(this,t,arguments.length>1?arguments[1]:void 0)}});var de,ve=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return M(n),function(t){if(!w(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),me=function(t,e,n){var r,i;return ve&&"function"==typeof(r=e.constructor)&&r!==n&&w(i=r.prototype)&&i!==n.prototype&&ve(t,i),t},ye=Object.keys||function(t){return St(t,xt)},be=h?Object.defineProperties:function(t,e){M(t);for(var n,r=ye(e),i=r.length,o=0;i>o;)F.f(t,n=r[o++],e[n]);return t},Ee=ft("document","documentElement"),Se=J("IE_PROTO"),xe=function(){},we=function(t){return"<script>"+t+"<\/script>"},Te=function(){try{de=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Te=de?function(t){t.write(we("")),t.close();var e=t.parentWindow.Object;return t=null,e}(de):((e=A("iframe")).style.display="none",Ee.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(we("document.F=Object")),t.close(),t.F);for(var n=xt.length;n--;)delete Te.prototype[xt[n]];return Te()};Q[Se]=!0;var Ie=Object.create||function(t,e){var n;return null!==t?(xe.prototype=M(t),n=new xe,xe.prototype=null,n[Se]=t):n=Te(),void 0===e?n:be(n,e)},Oe="[\t\n\v\f\r                　\u2028\u2029\ufeff]",_e=RegExp("^"+Oe+Oe+"*"),je=RegExp(Oe+Oe+"*$"),Ae=function(t){return function(e){var n=String(S(e));return 1&t&&(n=n.replace(_e,"")),2&t&&(n=n.replace(je,"")),n}},Ne={start:Ae(1),end:Ae(2),trim:Ae(3)},Re=Tt.f,Pe=P.f,Me=F.f,Ce=Ne.trim,Fe=a.Number,ke=Fe.prototype,Le="Number"==y(Ie(ke)),De=function(t){var e,n,r,i,o,c,l,s,u=T(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=Ce(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(c=(o=u.slice(2)).length,l=0;l<c;l++)if((s=o.charCodeAt(l))<48||s>i)return NaN;return parseInt(o,r)}return+u};if(Ct("Number",!Fe(" 0o1")||!Fe("0b1")||Fe("+0x1"))){for(var Ue,Ve=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Ve&&(Le?f((function(){ke.valueOf.call(n)})):"Number"!=y(n))?me(new Fe(De(e)),n,Ve):De(e)},We=h?Re(Fe):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$e=0;We.length>$e;$e++)O(Fe,Ue=We[$e])&&!O(Ve,Ue)&&Me(Ve,Ue,Pe(Fe,Ue));Ve.prototype=ke,ke.constructor=Ve,st(a,"Number",Ve)}var Ge=Ne.trim,He=a.parseFloat,Ye=1/He("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-1/0?function(t){var e=Ge(String(t)),n=He(e);return 0===n&&"-"==e.charAt(0)?-0:n}:He;kt({target:"Number",stat:!0,forced:Number.parseFloat!=Ye},{parseFloat:Ye});var Be=function(){var t=M(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Ke(t,e){return RegExp(t,e)}var Xe,ze,qe={UNSUPPORTED_Y:f((function(){var t=Ke("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:f((function(){var t=Ke("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Je=RegExp.prototype.exec,Qe=String.prototype.replace,Ze=Je,tn=(Xe=/a/,ze=/b*/g,Je.call(Xe,"a"),Je.call(ze,"a"),0!==Xe.lastIndex||0!==ze.lastIndex),en=qe.UNSUPPORTED_Y||qe.BROKEN_CARET,nn=void 0!==/()??/.exec("")[1];(tn||nn||en)&&(Ze=function(t){var e,n,r,i,o=this,c=en&&o.sticky,l=Be.call(o),s=o.source,u=0,a=t;return c&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),a=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(s="(?: "+s+")",a=" "+a,u++),n=new RegExp("^(?:"+s+")",l)),nn&&(n=new RegExp("^"+s+"$(?!\\s)",l)),tn&&(e=o.lastIndex),r=Je.call(c?n:o,a),c?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:tn&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),nn&&r&&r.length>1&&Qe.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var rn=Ze;kt({target:"RegExp",proto:!0,forced:/./.exec!==rn},{exec:rn});var on=Yt("species"),cn=!f((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),ln="$0"==="a".replace(/./,"$0"),sn=Yt("replace"),un=!!/./[sn]&&""===/./[sn]("a","$0"),an=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),fn=Yt("match"),hn=Yt("species"),pn=function(t){return function(e,n){var r,i,o=String(S(e)),c=gt(n),l=o.length;return c<0||c>=l?t?"":void 0:(r=o.charCodeAt(c))<55296||r>56319||c+1===l||(i=o.charCodeAt(c+1))<56320||i>57343?t?o.charAt(c):r:t?o.slice(c,c+2):i-56320+(r-55296<<10)+65536}},gn={codeAt:pn(!1),charAt:pn(!0)}.charAt,dn=function(t,e,n){return e+(n?gn(t,e).length:1)},vn=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==y(t))throw TypeError("RegExp#exec called on incompatible receiver");return rn.call(t,e)},mn=[].push,yn=Math.min,bn=!f((function(){return!RegExp(4294967295,"y")}));!function(t,e,n,r){var i=Yt(t),o=!f((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),c=o&&!f((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[on]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!o||!c||"replace"===t&&(!cn||!ln||un)||"split"===t&&!an){var l=/./[i],s=n(i,""[t],(function(t,e,n,r,i){return e.exec===rn?o&&!i?{done:!0,value:l.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:ln,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:un}),u=s[0],a=s[1];st(String.prototype,t,u),st(RegExp.prototype,i,2==e?function(t,e){return a.call(t,this,e)}:function(t){return a.call(t,this)})}r&&k(RegExp.prototype[i],"sham",!0)}("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r,i,o=String(S(this)),c=void 0===n?4294967295:n>>>0;if(0===c)return[];if(void 0===t)return[o];if(!w(r=t)||!(void 0!==(i=r[fn])?i:"RegExp"==y(r)))return e.call(o,t,c);for(var l,s,u,a=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=new RegExp(t.source,f+"g");(l=rn.call(p,o))&&!((s=p.lastIndex)>h&&(a.push(o.slice(h,l.index)),l.length>1&&l.index<o.length&&mn.apply(a,l.slice(1)),u=l[0].length,h=s,a.length>=c));)p.lastIndex===l.index&&p.lastIndex++;return h===o.length?!u&&p.test("")||a.push(""):a.push(o.slice(h)),a.length>c?a.slice(0,c):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=S(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var c=M(t),l=String(this),s=function(t,e){var n,r=M(t).constructor;return void 0===r||null==(n=M(r)[hn])?e:oe(n)}(c,RegExp),u=c.unicode,a=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(bn?"y":"g"),f=new s(bn?c:"^(?:"+c.source+")",a),h=void 0===i?4294967295:i>>>0;if(0===h)return[];if(0===l.length)return null===vn(f,l)?[l]:[];for(var p=0,g=0,d=[];g<l.length;){f.lastIndex=bn?g:0;var v,m=vn(f,bn?l:l.slice(g));if(null===m||(v=yn(vt(f.lastIndex+(bn?0:g)),l.length))===p)g=dn(l,g,u);else{if(d.push(l.slice(p,g)),d.length===h)return d;for(var y=1;y<=m.length-1;y++)if(d.push(m[y]),d.length===h)return d;g=p=v}}return d.push(l.slice(p)),d}]}),!bn);var En=[].slice,Sn=function(t){return function(e,n){var r=arguments.length>2,i=r?En.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};kt({global:!0,bind:!0,forced:/MSIE .\./.test(Xt)},{setTimeout:Sn(a.setTimeout),setInterval:Sn(a.setInterval)});var xn={default:180,ar:138,ch:158,nl:202,en:228,fi:161,fr:195,de:179,iw:187,it:188,jp:193,pl:166,pt:181,ru:184,sl:180,sp:218,sv:199,tr:166};function wn(){t.call(this,{}),this.isWindowVisible=!0,this.visibilityStateListener=e(),this.visibilityStateListener.start(),this.visibilityStateListener.emitter.on("update",function(){this.isWindowVisible="visible"==this.visibilityStateListener.getState()}.bind(this))}wn.prototype=Object.create(t.prototype),wn.prototype.constructor=wn,wn.prototype.clearMemory=function(t){this.element=t,this.progress=0,this.reading=!1,this.readingTime=0,this.targetReadingTime=0,this.milestones=[],this.absMilestones=[],this.distance=this.getElementDistanceFromTop(this.element),this.hasScroll=null,this.viewport=n.getViewportDimensions(),this.lastTimestamp=0,this.timeInterval=null},wn.prototype.start=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if(r.isDOMElement(t)){this.clearMemory(t);var c=i.getProp(xn,n,"default"),l=this.element.innerText.split(" ").filter((function(t){return t.length>1}));this.targetReadingTime=Math.floor(l.length/c*60);var s=this.element.scrollHeight,u=this.element.clientHeight;this.hasScroll=s!==u;for(var a=this.viewport.height<u?this.viewport.height:u,f=this.hasScroll?0:this.distance,h=1;h<=Math.floor(s/a);h++)this.milestones.push(f+a*h);return(this.hasScroll||u>this.viewport.height)&&this.milestones.push(f+s),this.absMilestones=[].concat(this.milestones),this.onScroll(),this.hasScroll?this.element.onscroll=o.debounce(this.onScroll.bind(this),300):window.onscroll=o.debounce(this.onScroll.bind(this),300),this.timeInterval=setInterval((function(){return e.checkReadingTime()}),1e3),this}},wn.prototype.onScroll=function(){if(this.checkReadingTime()&&0!==this.milestones.length){var t=document.documentElement.scrollTop||document.body.scrollTop||0,e=this.viewport.height<this.element.clientHeight?this.viewport.height:this.element.clientHeight;(this.hasScroll?this.element.scrollTop+e:t+this.viewport.height)>=this.milestones[0]&&(this.milestones.shift(),this.checkProgress())}},wn.prototype.checkReadingTime=function(){var t=document.documentElement.scrollTop||document.body.scrollTop||0,e=this.distance-t,n=this.viewport.height-e>0,r=this.distance+this.element.clientHeight-t>0,i=!0===n&&!0===r&&!0===this.isWindowVisible,o=this.getTimestamp();return i?!1===this.reading?(this.lastTimestamp=o,this.reading=!0):!0===this.reading&&(this.readingTime+=o-this.lastTimestamp,this.lastTimestamp=o):!0===this.reading&&(this.readingTime+=o-this.lastTimestamp,this.reading=!1),this.checkProgress(),i},wn.prototype.checkProgress=function(){var t=Number.parseFloat((this.absMilestones.length-this.milestones.length)/this.absMilestones.length*100),e=this.targetReadingTime,n=Math.ceil(this.readingTime/e*100),r=0;r=n>=t?t:t>=75&&n>=75||t>=50&&n>=50?n:0,this.progress!==r&&r>this.progress&&(this.progress=r,this.emit("progress",Math.ceil(this.progress)),100===Math.ceil(this.progress)&&(clearInterval(this.timeInterval),this.timeInterval=null,this.hasScroll?this.element.onscroll=null:window.onscroll=null))},wn.prototype.getTimestamp=function(){return Math.ceil(Date.now()/1e3)},wn.prototype.getElementDistanceFromTop=function(t){for(var e=t.offsetTop,n=t.parentElement;c.isNotEmpty(n);)e+=n.offsetTop,n=n.parentElement;return e};export default wn;
