import{a as le}from"./_commonjsHelpers-BosuxZz1.js";import{p as Ue,_ as Ze}from"./preact.module-CMRueUcp.js";import{h as Je}from"./htm.module-DZ2fi12m.js";import{R as D,x as Qe}from"./compat.module-BpC84Er0.js";const Ve=le(Ue),Xe=le(Je);var tr,rt,gt=Ve,er=((rt=Xe)&&typeof rt=="object"&&"default"in rt?rt.default:rt).bind(gt.h);gt.h,gt.render,gt.Component,tr=er;var $=function(){return $=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},$.apply(this,arguments)};function ot(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var v="-ms-",st="-moz-",m="-webkit-",ge="comm",At="rule",Kt="decl",rr="@import",me="@keyframes",nr="@layer",ye=Math.abs,Ut=String.fromCharCode,Ft=Object.assign;function sr(t,e){return _(t,0)^45?(((e<<2^_(t,0))<<2^_(t,1))<<2^_(t,2))<<2^_(t,3):0}function ve(t){return t.trim()}function j(t,e){return(t=e.exec(t))?t[0]:t}function f(t,e,r){return t.replace(e,r)}function mt(t,e,r){return t.indexOf(e,r)}function _(t,e){return t.charCodeAt(e)|0}function H(t,e,r){return t.slice(e,r)}function O(t){return t.length}function Se(t){return t.length}function nt(t,e){return e.push(t),t}function or(t,e){return t.map(e).join("")}function ee(t,e){return t.filter(function(r){return!j(r,e)})}var Et=1,K=1,be=0,k=0,A=0,Q="";function _t(t,e,r,n,s,o,i,c){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:Et,column:K,length:i,return:"",siblings:c}}function G(t,e){return Ft(_t("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function W(t){for(;t.root;)t=G(t.root,{children:[t]});nt(t,t.siblings)}function ir(){return A}function ar(){return A=k>0?_(Q,--k):0,K--,A===10&&(K=1,Et--),A}function N(){return A=k<be?_(Q,k++):0,K++,A===10&&(K=1,Et++),A}function Y(){return _(Q,k)}function yt(){return k}function $t(t,e){return H(Q,t,e)}function Gt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cr(t){return Et=K=1,be=O(Q=t),k=0,[]}function ur(t){return Q="",t}function Tt(t){return ve($t(k-1,Lt(t===91?t+2:t===40?t+1:t)))}function fr(t){for(;(A=Y())&&A<33;)N();return Gt(t)>2||Gt(A)>3?"":" "}function pr(t,e){for(;--e&&N()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return $t(t,yt()+(e<6&&Y()==32&&N()==32))}function Lt(t){for(;N();)switch(A){case t:return k;case 34:case 39:t!==34&&t!==39&&Lt(A);break;case 40:t===41&&Lt(t);break;case 92:N();break}return k}function hr(t,e){for(;N()&&t+A!==57;)if(t+A===84&&Y()===47)break;return"/*"+$t(e,k-1)+"*"+Ut(t===47?t:N())}function dr(t){for(;!Gt(Y());)N();return $t(t,k)}function lr(t){return ur(vt("",null,null,null,[""],t=cr(t),0,[0],t))}function vt(t,e,r,n,s,o,i,c,a){for(var u=0,p=0,d=i,g=0,l=0,b=0,C=1,R=1,x=1,w=0,S="",I=s,E=o,y=n,h=S;R;)switch(b=w,w=N()){case 40:if(b!=108&&_(h,d-1)==58){mt(h+=f(Tt(w),"&","&\f"),"&\f",ye(u?c[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:h+=Tt(w);break;case 9:case 10:case 13:case 32:h+=fr(b);break;case 92:h+=pr(yt()-1,7);continue;case 47:switch(Y()){case 42:case 47:nt(gr(hr(N(),yt()),e,r,a),a);break;default:h+="/"}break;case 123*C:c[u++]=O(h)*x;case 125*C:case 59:case 0:switch(w){case 0:case 125:R=0;case 59+p:x==-1&&(h=f(h,/\f/g,"")),l>0&&O(h)-d&&nt(l>32?ne(h+";",n,r,d-1,a):ne(f(h," ","")+";",n,r,d-2,a),a);break;case 59:h+=";";default:if(nt(y=re(h,e,r,u,p,s,c,S,I=[],E=[],d,o),o),w===123)if(p===0)vt(h,e,y,y,I,o,d,c,E);else switch(g===99&&_(h,3)===110?100:g){case 100:case 108:case 109:case 115:vt(t,y,y,n&&nt(re(t,y,y,0,0,s,c,S,s,I=[],d,E),E),s,E,d,c,n?I:E);break;default:vt(h,y,y,y,[""],E,0,c,E)}}u=p=l=0,C=x=1,S=h="",d=i;break;case 58:d=1+O(h),l=b;default:if(C<1){if(w==123)--C;else if(w==125&&C++==0&&ar()==125)continue}switch(h+=Ut(w),w*C){case 38:x=p>0?1:(h+="\f",-1);break;case 44:c[u++]=(O(h)-1)*x,x=1;break;case 64:Y()===45&&(h+=Tt(N())),g=Y(),p=d=O(S=h+=dr(yt())),w++;break;case 45:b===45&&O(h)==2&&(C=0)}}return o}function re(t,e,r,n,s,o,i,c,a,u,p,d){for(var g=s-1,l=s===0?o:[""],b=Se(l),C=0,R=0,x=0;C<n;++C)for(var w=0,S=H(t,g+1,g=ye(R=i[C])),I=t;w<b;++w)(I=ve(R>0?l[w]+" "+S:f(S,/&\f/g,l[w])))&&(a[x++]=I);return _t(t,e,r,s===0?At:c,a,u,p,d)}function gr(t,e,r,n){return _t(t,e,r,ge,Ut(ir()),H(t,2,-2),0,n)}function ne(t,e,r,n,s){return _t(t,e,r,Kt,H(t,0,n),H(t,n+1,-1),n,s)}function we(t,e,r){switch(sr(t,e)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 4789:return st+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+st+t+v+t+t;case 5936:switch(_(t,e+11)){case 114:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return m+t+v+t+t;case 6165:return m+t+v+"flex-"+t+t;case 5187:return m+t+f(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return m+t+v+"flex-item-"+f(t,/flex-|-self/g,"")+(j(t,/flex-|baseline/)?"":v+"grid-row-"+f(t,/flex-|-self/g,""))+t;case 4675:return m+t+v+"flex-line-pack"+f(t,/align-content|flex-|-self/g,"")+t;case 5548:return m+t+v+f(t,"shrink","negative")+t;case 5292:return m+t+v+f(t,"basis","preferred-size")+t;case 6060:return m+"box-"+f(t,"-grow","")+m+t+v+f(t,"grow","positive")+t;case 4554:return m+f(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4200:if(!j(t,/flex-|baseline/))return v+"grid-column-align"+H(t,e)+t;break;case 2592:case 3360:return v+f(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,j(n.props,/grid-\w+-end/)})?~mt(t+(r=r[e].value),"span",0)?t:v+f(t,"-start","")+t+v+"grid-row-span:"+(~mt(r,"span",0)?j(r,/\d+/):+j(r,/\d+/)-+j(t,/\d+/))+";":v+f(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return j(n.props,/grid-\w+-start/)})?t:v+f(f(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(t)-1-e>6)switch(_(t,e+1)){case 109:if(_(t,e+4)!==45)break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+st+(_(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch",0)?we(f(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return f(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,c,a,u){return v+s+":"+o+u+(i?v+s+"-span:"+(c?a:+a-+o)+u:"")+t});case 4949:if(_(t,e+6)===121)return f(t,":",":"+m)+t;break;case 6444:switch(_(t,_(t,14)===45?18:11)){case 120:return f(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(_(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+v+"$2box$3")+t;case 100:return f(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(t,"scroll-","scroll-snap-")+t}return t}function wt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function mr(t,e,r,n){switch(t.type){case nr:if(t.children.length)break;case rr:case Kt:return t.return=t.return||t.value;case ge:return"";case me:return t.return=t.value+"{"+wt(t.children,n)+"}";case At:if(!O(t.value=t.props.join(",")))return""}return O(r=wt(t.children,n))?t.return=t.value+"{"+r+"}":""}function yr(t){var e=Se(t);return function(r,n,s,o){for(var i="",c=0;c<e;c++)i+=t[c](r,n,s,o)||"";return i}}function vr(t){return function(e){e.root||(e=e.return)&&t(e)}}function Sr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Kt:t.return=we(t.value,t.length,r);return;case me:return wt([G(t,{value:f(t.value,"@","@"+m)})],n);case At:if(t.length)return or(r=t.props,function(s){switch(j(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(G(t,{props:[f(s,/:(read-\w+)/,":"+st+"$1")]})),W(G(t,{props:[s]})),Ft(t,{props:ee(r,n)});break;case"::placeholder":W(G(t,{props:[f(s,/:(plac\w+)/,":"+m+"input-$1")]})),W(G(t,{props:[f(s,/:(plac\w+)/,":"+st+"$1")]})),W(G(t,{props:[f(s,/:(plac\w+)/,v+"input-$1")]})),W(G(t,{props:[s]})),Ft(t,{props:ee(r,n)});break}return""})}}var br={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},U=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",Ie="active",Ce="data-styled-version",Rt="6.1.13",Zt=`/*!sc*/
`,It=typeof window<"u"&&"HTMLElement"in window,wr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Ir={},Pt=Object.freeze([]),Z=Object.freeze({});function xe(t,e,r){return r===void 0&&(r=Z),t.theme!==r.theme&&t.theme||e||r.theme}var Ae=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xr=/(^-|-$)/g;function se(t){return t.replace(Cr,"-").replace(xr,"")}var Ar=/(a)(d)/gi,dt=52,oe=function(t){return String.fromCharCode(t+(t>25?39:97))};function Bt(t){var e,r="";for(e=Math.abs(t);e>dt;e=e/dt|0)r=oe(e%dt)+r;return(oe(e%dt)+r).replace(Ar,"$1-$2")}var jt,Ee=5381,q=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},_e=function(t){return q(Ee,t)};function $e(t){return Bt(_e(t)>>>0)}function Er(t){return t.displayName||t.name||"Component"}function Dt(t){return typeof t=="string"&&!0}var Re=typeof Symbol=="function"&&Symbol.for,Pe=Re?Symbol.for("react.memo"):60115,_r=Re?Symbol.for("react.forward_ref"):60112,$r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ke={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((jt={})[_r]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jt[Pe]=ke,jt);function ie(t){return("type"in(e=t)&&e.type.$$typeof)===Pe?ke:"$$typeof"in t?Pr[t.$$typeof]:$r;var e}var kr=Object.defineProperty,Nr=Object.getOwnPropertyNames,ae=Object.getOwnPropertySymbols,Or=Object.getOwnPropertyDescriptor,Tr=Object.getPrototypeOf,ce=Object.prototype;function Ne(t,e,r){if(typeof e!="string"){if(ce){var n=Tr(e);n&&n!==ce&&Ne(t,n,r)}var s=Nr(e);ae&&(s=s.concat(ae(e)));for(var o=ie(t),i=ie(e),c=0;c<s.length;++c){var a=s[c];if(!(a in Rr||r&&r[a]||i&&a in i||o&&a in o)){var u=Or(e,a);try{kr(t,a,u)}catch{}}}}return t}function J(t){return typeof t=="function"}function Jt(t){return typeof t=="object"&&"styledComponentId"in t}function M(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Mt(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function it(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Yt(t,e,r){if(r===void 0&&(r=!1),!r&&!it(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Yt(t[n],e[n]);else if(it(e))for(var n in e)t[n]=Yt(t[n],e[n]);return t}function Qt(t,e){Object.defineProperty(t,"toString",{value:e})}function at(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var jr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw at(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(e+1),a=(i=0,r.length);i<a;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Zt);return r},t}(),St=new Map,Ct=new Map,bt=1,lt=function(t){if(St.has(t))return St.get(t);for(;Ct.has(bt);)bt++;var e=bt++;return St.set(t,e),Ct.set(e,t),e},Dr=function(t,e){bt=e+1,St.set(t,e),Ct.set(e,t)},zr="style[".concat(U,"][").concat(Ce,'="').concat(Rt,'"]'),Fr=new RegExp("^".concat(U,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gr=function(t,e,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&t.registerName(e,n)},Lr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Zt),s=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var a=c.match(Fr);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(Dr(p,u),Gr(t,p,a[3]),t.getTag().insertRules(u,s)),s.length=0}else s.push(c)}}},ue=function(t){for(var e=document.querySelectorAll(zr),r=0,n=e.length;r<n;r++){var s=e[r];s&&s.getAttribute(U)!==Ie&&(Lr(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function Br(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Oe=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(c){var a=Array.from(c.querySelectorAll("style[".concat(U,"]")));return a[a.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(U,Ie),n.setAttribute(Ce,Rt);var i=Br();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},Mr=function(){function t(e){this.element=Oe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw at(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Yr=function(){function t(e){this.element=Oe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Wr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),fe=It,qr={isServer:!It,useCSSOMInjection:!wr},xt=function(){function t(e,r,n){e===void 0&&(e=Z),r===void 0&&(r={});var s=this;this.options=$($({},qr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&It&&fe&&(fe=!1,ue(this)),Qt(this,function(){return function(o){for(var i=o.getTag(),c=i.length,a="",u=function(d){var g=function(x){return Ct.get(x)}(d);if(g===void 0)return"continue";var l=o.names.get(g),b=i.getGroup(d);if(l===void 0||!l.size||b.length===0)return"continue";var C="".concat(U,".g").concat(d,'[id="').concat(g,'"]'),R="";l!==void 0&&l.forEach(function(x){x.length>0&&(R+="".concat(x,","))}),a+="".concat(b).concat(C,'{content:"').concat(R,'"}').concat(Zt)},p=0;p<c;p++)u(p);return a}(s)})}return t.registerId=function(e){return lt(e)},t.prototype.rehydrate=function(){!this.server&&It&&ue(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t($($({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Wr(s):n?new Mr(s):new Yr(s)}(this.options),new jr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(lt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(lt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(lt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Hr=/&/g,Kr=/^\s*\/\/.*$/gm;function Te(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Te(r.children,e)),r})}function Ur(t){var e,r,n,s=Z,o=s.options,i=o===void 0?Z:o,c=s.plugins,a=c===void 0?Pt:c,u=function(g,l,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(e):g},p=a.slice();p.push(function(g){g.type===At&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Hr,r).replace(n,u))}),i.prefix&&p.push(Sr),p.push(mr);var d=function(g,l,b,C){l===void 0&&(l=""),b===void 0&&(b=""),C===void 0&&(C="&"),e=C,r=l,n=new RegExp("\\".concat(r,"\\b"),"g");var R=g.replace(Kr,""),x=lr(b||l?"".concat(b," ").concat(l," { ").concat(R," }"):R);i.namespace&&(x=Te(x,i.namespace));var w=[];return wt(x,yr(p.concat(vr(function(S){return w.push(S)})))),w};return d.hash=a.length?a.reduce(function(g,l){return l.name||at(15),q(g,l.name)},Ee).toString():"",d}var Zr=new xt,Wt=Ur(),je=D.createContext({shouldForwardProp:void 0,styleSheet:Zr,stylis:Wt});je.Consumer;D.createContext(void 0);function qt(){return Qe(je)}var Jr=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=Wt);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Qt(this,function(){throw at(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wt),this.name+e.hash},t}(),Qr=function(t){return t>="A"&&t<="Z"};function pe(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Qr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var De=function(t){return t==null||t===!1||t===""},ze=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!De(o)&&(Array.isArray(o)&&o.isCss||J(o)?n.push("".concat(pe(s),":"),o,";"):it(o)?n.push.apply(n,ot(ot(["".concat(s," {")],ze(o),!1),["}"],!1)):n.push("".concat(pe(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in br||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function L(t,e,r,n){if(De(t))return[];if(Jt(t))return[".".concat(t.styledComponentId)];if(J(t)){if(!J(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return L(s,e,r,n)}var o;return t instanceof Jr?r?(t.inject(r,n),[t.getName(n)]):[t]:it(t)?ze(t):Array.isArray(t)?Array.prototype.concat.apply(Pt,t.map(function(i){return L(i,e,r,n)})):[t.toString()]}function Fe(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(J(r)&&!Jt(r))return!1}return!0}var Vr=_e(Rt),Xr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Fe(e),this.componentId=r,this.baseHash=q(Vr,r),this.baseStyle=n,xt.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=M(s,this.staticRulesId);else{var o=Mt(L(this.rules,e,r,n)),i=Bt(q(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}s=M(s,i),this.staticRulesId=i}else{for(var a=q(this.baseHash,n.hash),u="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")u+=d;else if(d){var g=Mt(L(d,e,r,n));a=q(a,g+p),u+=g}}if(u){var l=Bt(a>>>0);r.hasNameForId(this.componentId,l)||r.insertRules(this.componentId,l,n(u,".".concat(l),void 0,this.componentId)),s=M(s,l)}}return s},t}(),Vt=D.createContext(void 0);Vt.Consumer;var zt={};function tn(t,e,r){var n=Jt(t),s=t,o=!Dt(t),i=e.attrs,c=i===void 0?Pt:i,a=e.componentId,u=a===void 0?function(I,E){var y=typeof I!="string"?"sc":se(I);zt[y]=(zt[y]||0)+1;var h="".concat(y,"-").concat($e(Rt+y+zt[y]));return E?"".concat(E,"-").concat(h):h}(e.displayName,e.parentComponentId):a,p=e.displayName,d=p===void 0?function(I){return Dt(I)?"styled.".concat(I):"Styled(".concat(Er(I),")")}(t):p,g=e.displayName&&e.componentId?"".concat(se(e.displayName),"-").concat(e.componentId):e.componentId||u,l=n&&s.attrs?s.attrs.concat(c).filter(Boolean):c,b=e.shouldForwardProp;if(n&&s.shouldForwardProp){var C=s.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;b=function(I,E){return C(I,E)&&R(I,E)}}else b=C}var x=new Xr(r,g,n?s.componentStyle:void 0);function w(I,E){return function(y,h,V){var ct=y.attrs,Be=y.componentStyle,Me=y.defaultProps,Ye=y.foldedComponentIds,We=y.styledComponentId,qe=y.target,He=D.useContext(Vt),Ke=qt(),kt=y.shouldForwardProp||Ke.shouldForwardProp,Xt=xe(h,He,Me)||Z,T=function(ft,tt,pt){for(var et,B=$($({},tt),{className:void 0,theme:pt}),Ot=0;Ot<ft.length;Ot+=1){var ht=J(et=ft[Ot])?et(B):et;for(var F in ht)B[F]=F==="className"?M(B[F],ht[F]):F==="style"?$($({},B[F]),ht[F]):ht[F]}return tt.className&&(B.className=M(B.className,tt.className)),B}(ct,h,Xt),ut=T.as||qe,X={};for(var z in T)T[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&T.theme===Xt||(z==="forwardedAs"?X.as=T.forwardedAs:kt&&!kt(z,ut)||(X[z]=T[z]));var te=function(ft,tt){var pt=qt(),et=ft.generateAndInjectStyles(tt,pt.styleSheet,pt.stylis);return et}(Be,T),Nt=M(Ye,We);return te&&(Nt+=" "+te),T.className&&(Nt+=" "+T.className),X[Dt(ut)&&!Ae.has(ut)?"class":"className"]=Nt,X.ref=V,Ze(ut,X)}(S,I,E)}w.displayName=d;var S=D.forwardRef(w);return S.attrs=l,S.componentStyle=x,S.displayName=d,S.shouldForwardProp=b,S.foldedComponentIds=n?M(s.foldedComponentIds,s.styledComponentId):"",S.styledComponentId=g,S.target=n?s.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=n?function(E){for(var y=[],h=1;h<arguments.length;h++)y[h-1]=arguments[h];for(var V=0,ct=y;V<ct.length;V++)Yt(E,ct[V],!0);return E}({},s.defaultProps,I):I}}),Qt(S,function(){return".".concat(S.styledComponentId)}),o&&Ne(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function he(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var de=function(t){return Object.assign(t,{isCss:!0})};function Ge(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(J(t)||it(t))return de(L(he(Pt,ot([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?L(n):de(L(he(n,e)))}function Ht(t,e,r){if(r===void 0&&(r=Z),!e)throw at(1,e);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(e,r,Ge.apply(void 0,ot([s],o,!1)))};return n.attrs=function(s){return Ht(t,e,$($({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Ht(t,e,$($({},r),s))},n}var Le=function(t){return Ht(tn,t)},en=Le;Ae.forEach(function(t){en[t]=Le(t)});var rn=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=Fe(e),xt.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,s){var o=s(Mt(L(this.rules,r,n,s)),""),i=this.componentId+e;n.insertRules(i,i,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,s){e>2&&xt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,s)},t}();function cn(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=Ge.apply(void 0,ot([t],e,!1)),s="sc-global-".concat($e(JSON.stringify(n))),o=new rn(n,s),i=function(a){var u=qt(),p=D.useContext(Vt),d=D.useRef(u.styleSheet.allocateGSInstance(s)).current;return u.styleSheet.server&&c(d,a,u.styleSheet,p,u.stylis),D.useLayoutEffect(function(){if(!u.styleSheet.server)return c(d,a,u.styleSheet,p,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,a,u.styleSheet,p,u.stylis]),null};function c(a,u,p,d,g){if(o.isStatic)o.renderStyles(a,Ir,p,g);else{var l=$($({},u),{theme:xe(u,d,i.defaultProps)});o.renderStyles(a,l,p,g)}}return D.memo(i)}export{en as d,cn as f,tr as h};
