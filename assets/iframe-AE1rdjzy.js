const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.stories-D73yB69_.js","./index.module-CbW1K7X8.js","./preact.module-CMRueUcp.js","./index-DRElefvR.js","./_commonjsHelpers-C4iS2aBk.js","./hooks.module-34yJetoY.js","./index-Bekg6CyK.js","./index.stories-obNoeCus.js","./docs-zo4rzNwO.js","./compat.module-406MNTy2.js","./jsxRuntime.module-ByLYBOty.js","./index-B493LSdS.js","./index-DrFu-skq.js","./index-CCzSbuHY.js","./log-CFhQtu4o.js","./index.stories-BlcFuPKc.js","./index-BHUpNa43.js","./index.stories-BH0qWOIw.js","./index-B20Ep4Xc.js","./index.stories-6T2q74tJ.js","./entry-preview-SowHmsRl.js","./preview-BEBQg86I.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-BrwuyT1O.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const R="modulepreload",P=function(n,c){return new URL(n,c).href},p={},t=function(c,l,u){let e=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(l.map(_=>{if(_=P(_,u),_ in p)return;p[_]=!0;const m=_.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(!!u)for(let a=i.length-1;a>=0;a--){const d=i[a];if(d.href===_&&(!m||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${f}`))return;const s=document.createElement("link");if(s.rel=m?"stylesheet":R,m||(s.as="script"),s.crossOrigin="",s.href=_,E&&s.setAttribute("nonce",E),document.head.appendChild(s),m)return new Promise((a,d)=>{s.addEventListener("load",a),s.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${_}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return c().catch(r)})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,O=T({page:"preview"});w.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const L={"./src/stories/demos/accelerometer/index.stories.ts":async()=>t(()=>import("./index.stories-D73yB69_.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/stories/demos/gyroscope/index.stories.ts":async()=>t(()=>import("./index.stories-obNoeCus.js"),__vite__mapDeps([7,1,2,3,4,5,6]),import.meta.url),"./src/stories/docs.mdx":async()=>t(()=>import("./docs-zo4rzNwO.js"),__vite__mapDeps([8,9,2,5,10,11,4,12,13]),import.meta.url),"./src/stories/log.mdx":async()=>t(()=>import("./log-CFhQtu4o.js"),__vite__mapDeps([14,9,2,5,10,11,4,12,13]),import.meta.url),"./src/stories/scenes/scene_gui/menu/index.stories.ts":async()=>t(()=>import("./index.stories-BlcFuPKc.js"),__vite__mapDeps([15,1,2,3,4,16,9,5]),import.meta.url),"./src/stories/scenes/scene_gui/storyteller/index.stories.ts":async()=>t(()=>import("./index.stories-BH0qWOIw.js"),__vite__mapDeps([17,18,3,4,2,16,9,5]),import.meta.url),"./src/stories/scenes/scene_loader/index.stories.ts":async()=>t(()=>import("./index.stories-6T2q74tJ.js"),__vite__mapDeps([19,1,2,3,4,5,18,16,9]),import.meta.url)};async function y(n){return L[n]()}const{composeConfigs:I,PreviewWeb:v,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const n=await Promise.all([t(()=>import("./entry-preview-SowHmsRl.js"),__vite__mapDeps([20,2,12]),import.meta.url),t(()=>import("./entry-preview-docs-DbzIP2u-.js"),[],import.meta.url),t(()=>import("./preview-9VE75SGJ.js"),[],import.meta.url),t(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([21,12]),import.meta.url),t(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([22,12]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([23,12]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),t(()=>import("./preview-BrwuyT1O.js"),__vite__mapDeps([24,4]),import.meta.url),t(()=>import("./preview-CrNpXb23.js"),[],import.meta.url)]);return I(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:y,getProjectAnnotations:A});export{t as _};
