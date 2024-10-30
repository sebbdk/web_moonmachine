import"./compat.module-406MNTy2.js";import{u as n}from"./jsxRuntime.module-ByLYBOty.js";import{M as o}from"./index-xo-dYbtn.js";import{useMDXComponents as r}from"./index-CCzSbuHY.js";import{b as c}from"./preact.module-CMRueUcp.js";import"./hooks.module-34yJetoY.js";import"./iframe-BW77MChf.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DrFu-skq.js";function i(l){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",ul:"ul",li:"li",h3:"h3"},r(),l.components);return n(c,{children:[n(o,{title:"Readme"}),`
`,n(e.h1,{id:"sofus--the-moonmachine",children:"Sofus & the Moonmachine"}),`
`,n(e.p,{children:"If you found this then congrats, you are currently looking at the restoration project for Sofus & the Moonmachine!"}),`
`,n(e.p,{children:`The project is still in the early phases, but a contact email for feedback will be added later.
Meanwhile, feel free to look around.`}),`
`,n(e.p,{children:`The game was originally made in Flash CS and Flex builder and released back around ~2016.
The aim of this project is to build a web port that can run as a native app on iOS and Android.`}),`
`,n(e.h2,{id:"current-project-status",children:"Current project status:"}),`
`,n(e.p,{children:["See the milestones ",n(e.a,{href:"/docs/readme-logs--docs",children:"or the dev logs"})," for more details."]}),`
`,n(e.h2,{id:"milestones",children:"Milestones:"}),`
`,n(e.p,{children:["The currently worked on milestones are marked in ",n("span",{style:"color:blue",children:"blue"}),", completed ones are marked in ",n("span",{style:"color:green",children:"green"})," and done but may need more work are ",n("span",{style:"color:orange",children:"orange"}),"."]}),`
`,n(e.p,{children:n(e.strong,{children:"The project is split into 3 major milestones"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Feature complete (October 2024)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"POC Stuff / Prototyping"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"First 10 scenes migrated (excluding mini games)"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Architecture stabilized"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"iOS And Android building with Capacitor"}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:["Content complete (November 2024)",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"All scenes complete"}),`
`,n(e.li,{children:"All mini games complete"}),`
`,n(e.li,{children:"The game should be completable"}),`
`,n(e.li,{children:"All UI should be implemented"}),`
`,n(e.li,{children:"i18n / basic English language version working"}),`
`,n(e.li,{children:"Closed alpha release to Android and iOS (moved from October, requires some administrative work from)"}),`
`]}),`
`]}),`
`,n(e.li,{children:["Interaction complete (December 2024)",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"All the bonus touch interactions and effects should be implemented"}),`
`,n(e.li,{children:"Known bugs from November should be fixed"}),`
`,n(e.li,{children:"Closed beta release to iOS"}),`
`,n(e.li,{children:"Closed beta release to Android"}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"This means release is scheduled in January/February 2025 depending on how development goes."}),`
`,n(e.h3,{id:"more-detailed-milestones",children:"More detailed milestones:"}),`
`,n(e.p,{children:n(e.strong,{children:"Basic scenes:"})}),`
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
`,n(e.p,{children:n(e.strong,{children:"Architecture:"})}),`
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
`,n(e.li,{children:[`
`,n("span",{style:"color:orange",children:"Drag & Drop logic (got it, but it's not generalized)"}),`
`]}),`
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
`,n(e.p,{children:n(e.strong,{children:"Misc:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["i18n",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Find english language files"}),`
`,n(e.li,{children:"Implement language selector"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"POC stuff + "}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Compile and run as iOS app"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Compile and run as Android app"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Accelerometer/Gyroscope testing"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"iOS"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Android"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
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
`,n(e.p,{children:n(e.strong,{children:"Known missing minigames interactions (all none optional interactions):"})}),`
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
`,n(e.li,{children:[`
`,n("span",{style:"color:green",children:"Scene 10 Fix racer puzzle"}),`
`]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Known Bugs:"})}),`
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
`,n(e.li,{children:"Multiple scenes seem to have problem with animation paths once exported to canvas (probably a createjs issue...)"}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Scene 1-10 status:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Scene 0 - Done"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: orange",children:"Scene 1 - Mostly done"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Can forward to early?"}),`
`,n(e.li,{children:"The flyer background interactable animation is broken on export"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Missing background interactables"}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Scene 2 - Done"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: orange",children:"Scene 3 - Mostly Done"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Animation error, Sofus glitches for a second when he turns towards the end of the scene"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Scene 4 - Done"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: orange",children:"Scene 5 - Mostly Done"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Can next too much on Fly"}),`
`,n(e.li,{children:"The fly animation does not execute properly when exported"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: orange",children:"Scene 6 - Mostly done"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Animation error, lit fuse light does not follow the fuse"}),`
`,n(e.li,{children:"Animation error, Sofus flies out of the rocket when in flies"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Scene 7 - Untouched (rocket game)"}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"Scene 8 - done"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"The background city light animations only show when debug is enabled - FIXED"}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"There is a playSound error in terminal when scene is run - FIXED"}),`
`]}),`
`]}),`
`]}),`
`,n(e.li,{children:["Scene 9 - Untouched (shake tablet)",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"There is an animation error when the scene starts (possibly a loop code issue?)"}),`
`,n(e.li,{children:"Needs a POC of the accelerometer access (R&D says it should be possible)"}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n("span",{style:"color: orange",children:"Scene 10 - Mostly Done (assemble racer)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n("span",{style:"color: green",children:"There are some loopFrom related errors in the terminal when run"}),`
`]}),`
`,n(e.li,{children:"Animation Error, the hat transfer animation towards the end freezes"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"early-completed-milestones-stuff-from-before-proper-planning",children:"Early completed Milestones (stuff from before proper planning):"}),`
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
`]})]})}function f(l={}){const{wrapper:e}=Object.assign({},r(),l.components);return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}export{f as default};
