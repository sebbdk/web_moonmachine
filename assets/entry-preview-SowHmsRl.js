import{_ as s,p as f,b as c,B as d}from"./preact.module-CMRueUcp.js";import{d as l}from"./index-DrFu-skq.js";var{h:u}=f,C=(e,r)=>{let{id:n,component:t}=r;if(!t)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return u(t,{...e})},p;function m(e,r){c?d(e,r):p=d(e,r,p)}var h=({showError:e,name:r,title:n,storyFn:t,canvasElement:a})=>s(t,null)||(e({title:`Expecting a Preact element from the story: "${r}" of "${n}".`,description:l`
        Did you forget to return the Preact element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `}),null);function w({storyFn:e,title:r,name:n,showMain:t,showError:a,forceRemount:i},o){i&&m(null,o),t(),m(s(h,{name:n,title:r,showError:a,storyFn:e,canvasElement:o}),o)}var x={renderer:"preact"};export{x as parameters,C as render,w as renderToCanvas};
