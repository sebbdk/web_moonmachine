import"./compat.module-BUAWlI2n.js";import{u as n}from"./jsxRuntime.module-ByLYBOty.js";import{M as c}from"./index-BN4lFo8w.js";import{useMDXComponents as r}from"./index-GSsdXuhh.js";import{b as o}from"./preact.module-CMRueUcp.js";import"./iframe-BdDZq4Us.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";function i(l){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ul:"ul",li:"li",h3:"h3"},r(),l.components);return n(o,{children:[n(c,{title:"Readme"}),`
`,n(e.h1,{id:"sofus--the-moonmachine",children:"Sofus & the Moonmachine"}),`
`,n(e.p,{children:"If you found this then congrats, you are currently looking at the restoration project for Sofus & the Moonmachine!"}),`
`,n(e.p,{children:`The project is still in the early phases, but a contact email for feedback will be added later.
Meanwhile, feel free to look around.`}),`
`,n(e.p,{children:`The game was originally made in Flash CS and Flex builder and released back around ~2016.
The aim of this project is to build a web port that can run as a native app on iOS and Android.`}),`
`,n(e.h2,{id:"current-project-status",children:"Current project status:"}),`
`,n(e.p,{children:["See the milestones ",n(e.a,{href:"/docs/readme-logs--docs",children:"or the dev logs"})," for more details."]}),`
`,n(e.h2,{id:"milestones",children:"Milestones:"}),`
`,n(e.p,{children:["The currently worked on milestones are marked in ",n("span",{style:"color:blue",children:"blue"})," and completed ones are marked in ",n("span",{style:"color:green",children:"green"})]}),`
`,n(e.p,{children:"The project is split into 3 major milestones"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:blue",children:"Feature complete (October 2024) + "}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"POC Stuff / Prototyping"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"First 10 scenes migrated (excluding mini games)"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Architecture stabilized"}),`
`]}),`
`,n(e.li,{children:"Basic closed test release to Android and iOS"}),`
`]}),`
`]}),`
`,n(e.li,{children:["Content complete (November 2024)",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"All scenes complete"}),`
`,n(e.li,{children:"All mini games complete"}),`
`,n(e.li,{children:"The game should be completable"}),`
`,n(e.li,{children:"All UI should be implemented"}),`
`,n(e.li,{children:"i18n / basic English language version working"}),`
`]}),`
`]}),`
`,n(e.li,{children:["Interaction complete (December 2024)",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"All the bonus touch interactions and effects should be implemented"}),`
`,n(e.li,{children:"Known bugs from November should be fixed"}),`
`,n(e.li,{children:"Closed beta test released to iOS"}),`
`,n(e.li,{children:"Closed beta test released to Android"}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"This means release is scheduled in January/February 2025 depending on how development goes."}),`
`,n(e.h3,{id:"more-detailed-milestones",children:"More detailed milestones:"}),`
`,n(e.p,{children:"Basic scenes:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Create a demo with the first 10 scenes (no counting any minigames) +"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Basic non functional demo (without API migration)"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"API migrations on first 10 scenes"}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:"Setup hidden repo with last 10 scenes"}),`
`,n(e.li,{children:"Add none essentiel background interactables in scenes"}),`
`,n(e.li,{children:"Re-implement Maze game"}),`
`,n(e.li,{children:"Re-implement Rocket game"}),`
`]}),`
`,n(e.p,{children:"Architecture:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:blue",children:"Basics +"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Sound"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Sound manager"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"SFX"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Voice"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Music"}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:" Load scenes in a consistent way"}),`
`]}),`
`,n(e.li,{children:"Simplify scene configuration"}),`
`,n(e.li,{children:"Proceed to next scene when scene is done"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Mock missing general actions"}),`
`]}),`
`,n(e.li,{children:["UI / Menu's",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Animated loading screen"}),`
`,n(e.li,{children:"Scroll up Menu"}),`
`,n(e.li,{children:"Scene menu (back/forward etc.)"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:["General actions",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Drag & Drop logic"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Swipe logic"}),`
`]}),`
`,n(e.li,{children:"Screen shake"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Click"}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:["Architecture review/cleanup",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"After Basics"}),`
`,n(e.li,{children:"After 10 scenes"}),`
`,n(e.li,{children:"After general actions"}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"Misc:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["i18n",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Find english language files"}),`
`,n(e.li,{children:"Implement language selector"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:blue",children:"POC stuff + "}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Compile and run as iOS app"}),`
`,n(e.li,{children:"Compile and run as Android app"}),`
`,n(e.li,{children:"Accelerometer test"}),`
`,n(e.li,{children:["Test release",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Setup iOS store app"}),`
`,n(e.li,{children:"Setup Android store app"}),`
`,n(e.li,{children:["Release for test",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"iOS"}),`
`,n(e.li,{children:"Android"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"Known missing minigames interactions (all none optional interactions):"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Scene 03 Poke part to shake out bug"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Scene 04 push parts to pickup"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Scene 05 Drag parts to build rocket"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Scene 06 Rocket swipe it to go"}),`
`]}),`
`,n(e.li,{children:"Scene 07 Rocket game"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Scene 08 Swipe away fire"}),`
`]}),`
`,n(e.li,{children:"Scene 09 Shake iPad to get part down"}),`
`,n(e.li,{children:"Scene 10 Fix racer puzzle"}),`
`]}),`
`,n(e.p,{children:"Known Bugs:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"How to hide mouse interaction areas (currently createjs ignores invisible click areas)- Fixed"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"When switching between scenes the sound stops working until you reload the page - Fixed"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"How to grab the right movie clip instance? (instance_1??) - Fixed"}),`
`]}),`
`,n(e.li,{children:"The used fonts are not the correct ones everywhere"}),`
`,n(e.li,{children:"Scene music does not loop"}),`
`,n(e.li,{children:"What is up with playSound2? (second channel to avoid overlap??)"}),`
`,n(e.li,{children:"In scene 6 it looks like Sofus is falling out of the rocket when it is launched (probably a broken tween)"}),`
`]}),`
`,n(e.h3,{id:"early-completed-milestones",children:"Early completed Milestones:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Fix scaling layout"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Setup beta.themoonmachine.dk as a link to this site"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Basic scene manager for walking through normal scene interactions"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Basic application architecture and technical plan"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"POC, is this even possible???"}),`
`]}),`
`]})]})}function y(l={}){const{wrapper:e}=Object.assign({},r(),l.components);return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}export{y as default};
