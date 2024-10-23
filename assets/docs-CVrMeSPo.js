import"./compat.module-BUAWlI2n.js";import{u as e}from"./jsxRuntime.module-ByLYBOty.js";import{M as c}from"./index-CUA9QfWy.js";import{useMDXComponents as r}from"./index-GSsdXuhh.js";import{b as o}from"./preact.module-CMRueUcp.js";import"./iframe-siRSgInk.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";function i(l){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ul:"ul",li:"li",h3:"h3"},r(),l.components);return e(o,{children:[e(c,{title:"Readme"}),`
`,e(n.h1,{id:"sofus--the-moonmachine",children:"Sofus & the Moonmachine"}),`
`,e(n.p,{children:"If you found this then congrats, you are currently looking at the restoration project for Sofus & the Moonmachine!"}),`
`,e(n.p,{children:`The project is still in the early phases, but a contact email for feedback will be added later.
Meanwhile, feel free to look around.`}),`
`,e(n.p,{children:`The game was originally made in Flash CS and Flex builder and released back around ~2016.
The aim of this project is to build a web port that can run as a native app on iOS and Android.`}),`
`,e(n.h2,{id:"current-project-status",children:"Current project status:"}),`
`,e(n.p,{children:["See the milestones ",e(n.a,{href:"/docs/readme-logs--docs",children:"or the dev logs"})," for more details."]}),`
`,e(n.h2,{id:"milestones",children:"Milestones:"}),`
`,e(n.p,{children:["The currently worked on milestones are marked in ",e("span",{style:"color:blue",children:"blue"})," and completed ones are marked in ",e("span",{style:"color:green",children:"green"})]}),`
`,e(n.p,{children:"The project is split into 3 major milestones"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color:blue",children:"Feature complete (October 2024) + "}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"POC Stuff / Prototyping"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"First 10 scenes migrated (excluding mini games)"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Architecture stabilized"}),`
`]}),`
`,e(n.li,{children:"Basic closed test release to Android and iOS"}),`
`]}),`
`]}),`
`,e(n.li,{children:["Content complete (November 2024)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"All scenes complete"}),`
`,e(n.li,{children:"All mini games complete"}),`
`,e(n.li,{children:"The game should be completable"}),`
`,e(n.li,{children:"All UI should be implemented"}),`
`,e(n.li,{children:"i18n / basic English language version working"}),`
`]}),`
`]}),`
`,e(n.li,{children:["Interaction complete (December 2024)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"All the bonus touch interactions and effects should be implemented"}),`
`,e(n.li,{children:"Known bugs from November should be fixed"}),`
`,e(n.li,{children:"Closed beta test released to iOS"}),`
`,e(n.li,{children:"Closed beta test released to Android"}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"This means release is scheduled in January/February 2025 depending on how development goes."}),`
`,e(n.h3,{id:"more-detailed-milestones",children:"More detailed milestones:"}),`
`,e(n.p,{children:"Basic scenes:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Create a demo with the first 10 scenes (no counting any minigames) +"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Basic non functional demo (without API migration)"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"API migrations on first 10 scenes"}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:"Setup hidden repo with last 10 scenes"}),`
`,e(n.li,{children:"Add none essentiel background interactables in scenes"}),`
`,e(n.li,{children:"Re-implement Maze game"}),`
`,e(n.li,{children:"Re-implement Rocket game"}),`
`]}),`
`,e(n.p,{children:"Architecture:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color:blue",children:"Basics +"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Sound"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Sound manager"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"SFX"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Voice"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Music"}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:" Load scenes in a consistent way"}),`
`]}),`
`,e(n.li,{children:"Simplify scene configuration"}),`
`,e(n.li,{children:"Proceed to next scene when scene is done"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Mock missing general actions"}),`
`]}),`
`,e(n.li,{children:["UI / Menu's",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Animated loading screen"}),`
`,e(n.li,{children:"Scroll up Menu"}),`
`,e(n.li,{children:"Scene menu (back/forward etc.)"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["General actions",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Drag & Drop logic"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Swipe logic"}),`
`]}),`
`,e(n.li,{children:"Screen shake"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Click"}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["Architecture review/cleanup",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"After Basics"}),`
`,e(n.li,{children:"After 10 scenes"}),`
`,e(n.li,{children:"After general actions"}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"Misc:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["i18n",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Find english language files"}),`
`,e(n.li,{children:"Implement language selector"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:blue",children:"POC stuff + "}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Compile and run as iOS app"}),`
`,e(n.li,{children:"Compile and run as Android app"}),`
`,e(n.li,{children:"Accelerometer test"}),`
`,e(n.li,{children:["Test release",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Setup iOS store app"}),`
`,e(n.li,{children:"Setup Android store app"}),`
`,e(n.li,{children:["Release for test",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"iOS"}),`
`,e(n.li,{children:"Android"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"Known missing minigames interactions (all none optional interactions):"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scene 03 Poke part to shake out bug"}),`
`,e(n.li,{children:"Scene 04 push parts to pickup"}),`
`,e(n.li,{children:"Scene 05 Drag parts to build rocket"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Scene 06 Rocket swipe it to go"}),`
`]}),`
`,e(n.li,{children:"Scene 07 Rocket game"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Scene 08 Swipe away fire"}),`
`]}),`
`,e(n.li,{children:"Scene 09 Shake iPad to get part down"}),`
`,e(n.li,{children:"Scene 10 Fix racer puzzle"}),`
`]}),`
`,e(n.p,{children:"Known Bugs:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"How to hide mouse interaction areas (currently createjs ignores invisible click areas)- Fixed"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"When switching between scenes the sound stops working until you reload the page - Fixed"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"How to grab the right movie clip instance? (instance_1??) - Fixed"}),`
`]}),`
`,e(n.li,{children:"The used fonts are not the correct ones everywhere"}),`
`,e(n.li,{children:"Scene music does not loop"}),`
`,e(n.li,{children:"What is up with playSound2? (second channel to avoid overlap??)"}),`
`,e(n.li,{children:"In scene 6 it looks like Sofus is falling out of the rocket when it is launched (probably a broken tween)"}),`
`]}),`
`,e(n.h3,{id:"early-completed-milestones",children:"Early completed Milestones:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Fix scaling layout"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Setup beta.themoonmachine.dk as a link to this site"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Basic scene manager for walking through normal scene interactions"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"Basic application architecture and technical plan"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color:green",children:"POC, is this even possible???"}),`
`]}),`
`]})]})}function y(l={}){const{wrapper:n}=Object.assign({},r(),l.components);return n?e(n,Object.assign({},l,{children:e(i,l)})):i(l)}export{y as default};
