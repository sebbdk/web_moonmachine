import"./compat.module-BUAWlI2n.js";import{u as e}from"./jsxRuntime.module-ByLYBOty.js";import{M as t}from"./index-BK_79shM.js";import{useMDXComponents as o}from"./index-GSsdXuhh.js";import{b as r}from"./preact.module-CMRueUcp.js";import"./iframe-BiqADdmP.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";function l(i){const n=Object.assign({h1:"h1",h3:"h3",p:"p",ul:"ul",li:"li",strong:"strong"},o(),i.components);return e(r,{children:[e(t,{title:"Readme/Logs"}),`
`,e(n.h1,{id:"dev-logs",children:"Dev Logs"}),`
`,e(n.h3,{id:"-seb-friday-18-october-2024",children:[e("hr",{})," Seb, Friday 18. October 2024"]}),`
`,e(n.p,{children:"Working on the plane on my way to Italy for a short vacation today."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Finished misc click scene interactions for scene 2"}),`
`,e(n.li,{children:"Made a generalized method to handle clicks"}),`
`,e(n.li,{children:"Solved how to make invisible interaction areas"}),`
`]}),`
`,e(n.p,{children:`I've left the interactions areas on, the migrated ones will have a blue square on them. The areas can be disabled by disabling debugging later on.
The green areas are interaction areas not yet migrated.`}),`
`,e(n.p,{children:"I plan to make one for swipe etc. too."}),`
`,e(n.p,{children:`Ran into a really odd thing, all the green interaction squares are 224x378 in size, despite clearly being different in size.
Some how whe ni use this number to defined their size the click area is the appropriate size.`}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Found a way to simplify the click helper, the magic number is no longer needed"}),`
`]}),`
`,e(n.p,{children:"Adobe black magic fuckery i guess."}),`
`,e(n.h3,{id:"-seb-thursday-17-october-2024",children:[e("hr",{})," Seb, Thursday 17. October 2024"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Finished Migrating generic scene methods for scene 4-10"}),`
`]}),`
`,e(n.p,{children:"Some of the code is located in the Sc0X.as files, so scenes like scene 9 need more work."}),`
`,e(n.p,{children:"Most of the code for the custom interactions looks like it just needs some simple AS to JS porting."}),`
`,e(n.p,{children:"I should make a generic for swipe and click and also find away to expose the cursor position for the drag code."}),`
`,e(n.p,{children:"(Also need to find out Accelerometer access for the shake)"}),`
`,e(n.h3,{id:"-seb-wednesday-16-october-2024",children:[e("hr",{})," Seb, Wednesday 16. October 2024"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Made following scenes traversable",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scene 1"}),`
`,e(n.li,{children:"Scene 3"}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:`Slow day, i realized quite a few of the first scenes have click actions.
Maybe i can/should generalize this into the injectable class.`}),`
`,e(n.h3,{id:"-seb-tuesday-15-october-2024",children:[e("hr",{})," Seb, Tuesday 15. October 2024"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"The server managing the website was frozen, it is now functional again."}),`
`,e(n.li,{children:["The first 10 scenes and the chapter scenes have been added",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"They are none functional, but will load and run their animations"}),`
`]}),`
`]}),`
`,e(n.li,{children:["Implemented an AudioManager and removed the global hacks",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"This fixes the bug where audio would stop working on navigation."}),`
`]}),`
`]}),`
`,e(n.li,{children:"Made the scene music play (the volume needs adjusting)"}),`
`,e(n.li,{children:["Loading will take longer now, this is because all the sounds are now preloaded",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["An optimization later could be to preload only the first few voice lines",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"This wont matter when this becomes an app."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:"I updated the milestones status and made come clarifications to existing ones"}),`
`]}),`
`,e(n.p,{children:"This pretty much completes the goals i made for the week so i'm adding to the scope."}),`
`,e(n.p,{children:[e(n.strong,{children:"Updated week 3 goals"}),":"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Migrate first 10 scenes badly (they just need to load basically) - DONE"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Implement none POC/hacked sound manager for SFX, scene music and Voice. - DONE"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Fix/generalize how scenes are loaded more better.  - DONE"}),`
`]}),`
`,e(n.li,{children:"Implement basic actions for scene 0->10 (excluding mini games)"}),`
`,e(n.li,{children:"POC Compile into an iOS app and test on real tablet"}),`
`,e(n.li,{children:"Simplify scene configuration"}),`
`,e(n.li,{children:"Setup a toggle to disable sound during development"}),`
`]}),`
`,e(n.h3,{id:"-seb-monday-14-october-2024",children:[e("hr",{})," Seb, Monday 14. October 2024"]}),`
`,e(n.p,{children:"I finished the basic milestones plan along with some initial dates for when things should be completed."}),`
`,e(n.p,{children:"I also setup this log to document the status of the project."}),`
`,e(n.p,{children:"For now this is mostly for my self and the game designer to reference but this may change in the future."}),`
`,e(n.p,{children:[e(n.strong,{children:"Week 3 goals"}),":"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Migrate first 10 scenes badly (they just need to load basically)"}),`
`,e(n.li,{children:"Implement none POC/hacked sound manager for SFX, scene music and Voice."}),`
`,e(n.li,{children:"Fix/generalize how scenes are loaded more better"}),`
`]})]})}function b(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}export{b as default};
