import"./compat.module-406MNTy2.js";import{u as e}from"./jsxRuntime.module-ByLYBOty.js";import{M as o}from"./index-Cc7Fclif.js";import{useMDXComponents as r}from"./index-CCzSbuHY.js";import{b as t}from"./preact.module-CMRueUcp.js";import"./hooks.module-34yJetoY.js";import"./iframe-D_GYF325.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DrFu-skq.js";function l(i){const n=Object.assign({h1:"h1",h3:"h3",p:"p",ul:"ul",li:"li",strong:"strong"},r(),i.components);return e(t,{children:[e(o,{title:"Readme/Logs"}),`
`,e(n.h1,{id:"dev-logs",children:"Dev Logs"}),`
`,e(n.h3,{id:"-seb-thursday-31-october-2024",children:[e("hr",{})," Seb, Thursday 31. October 2024"]}),`
`,e(n.p,{children:"Spooky scary skeletons, send shivers down your spine."}),`
`,e(n.p,{children:"Halloween is here, time to plan November."}),`
`,e(n.p,{children:"From the milestones but detailed a bit more:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Content complete (November 2024)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["All scenes complete (with no larger bugs)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scene 11-20 should be migrated"}),`
`]}),`
`]}),`
`,e(n.li,{children:["All mini games complete",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scene 11-20 minigames should be implemented"}),`
`,e(n.li,{children:"Scene 7 (rocket game) should be implemented"}),`
`,e(n.li,{children:"Scene 9 (shake part down) should be implemented"}),`
`]}),`
`]}),`
`,e(n.li,{children:"All UI should be implemented"}),`
`,e(n.li,{children:["i18n / basic English language version working",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Locate missing audio files in archives"}),`
`,e(n.li,{children:"Setup a language switcher"}),`
`]}),`
`]}),`
`,e(n.li,{children:["Closed alpha release to Android and iOS (moved from October, requires some administrative work from)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Solve the app registration with AppStore Connect"}),`
`,e(n.li,{children:"Solve the app registration with Google Play"}),`
`]}),`
`]}),`
`,e(n.li,{children:["The game should be completable",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"basically be able to next through to scene 20 and loop back to intro scene 0"}),`
`]}),`
`]}),`
`,e(n.li,{children:"Fix the broken animation guides"}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"The scope is mostly the same as originally planned, however i added a goal of fixing the animation guide bug, since it potentially is a time sink."}),`
`,e(n.p,{children:"I updated the milestones in the readme to reflect this."}),`
`,e(n.p,{children:"For this week, which is basically just today and tomorrow the focus will be to finish work on the rocket game and part shape."}),`
`,e(n.h3,{id:"-seb-wednesday-30-october-2024",children:[e("hr",{})," Seb, Wednesday 30. October 2024"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Tested Gyroscope and Accelerometer code on Android tablet"}),`
`,e(n.li,{children:e(n.strong,{children:"Finished major October milestone - huzzah!"})}),`
`]}),`
`,e(n.p,{children:"The POC code on Android worked without any issue and seemingly gave the same numbers as my iPhone did."}),`
`,e(n.p,{children:"This completes the October milestone, so time for a short retrospective."}),`
`,e(n.p,{children:"So far everything has gone as expected, but some highlights/noteworthy things are:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Migration of scene scripts better than expected"}),`
`,e(n.li,{children:"Performance seems more than adequate and this is without looking into performance optimization."}),`
`,e(n.li,{children:["Animations that use guides seem to have broken on export",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"It's probably a CreateJS issue, might be fixable, since i have the source"}),`
`,e(n.li,{children:["If it's not fixable, then the animations can probably be recreated without the guides",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"This is time consuming busywork, but i hope could be done in ~1 week if the bug cannot be fixed."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:"Gyroscope and Accelerometer were easy to access"}),`
`,e(n.li,{children:"The original Actionscript API's are mostly consistent with CrateJS making code migrations pretty easy"}),`
`,e(n.li,{children:["Storybook creates some performance issues that will not occur outside of storybook",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Mitigation has been implemented but it's still not perfect"}),`
`]}),`
`]}),`
`,e(n.li,{children:["Future support concerns",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"CreateJS is kinda old and not really maintained anymore from what i can see"}),`
`,e(n.li,{children:"We cannot rely on Adobe Animate forever"}),`
`,e(n.li,{children:["Optimally we would find a way to get the scenes in a data format instead of the generated javascript that Adobe Animate produces",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["The exported scene scripts include a bunch of variables describing the scene and animations for CreateJS",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"A tool could be made that converts this into a more generic data format"}),`
`,e(n.li,{children:"Alterntively, an extension ofr Adobe Animate could be made"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["Given how stable JS has been the past 10 years",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"I expect the current build would be able to run for the next 10 years without much modification"}),`
`,e(n.li,{children:["The risky/change-susceptible features are mainly related to",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"canvas drawing API (fixable since we have the CreateJS source)"}),`
`,e(n.li,{children:"Gyroscope/Accelerometer related code (API's are stil relatively new, fixes should be easy)"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:"All in all, my oppinion is that the game is stable for the next 10 years after completion"}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{id:"-seb-tuesday-29-october-2024",children:[e("hr",{})," Seb, Tuesday 29. October 2024"]}),`
`,e(n.p,{children:"Working on Gyroscope and Accelerometer demoing today."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Made a demo of Gyroscope for the rocket game and figured out how to do it"}),`
`,e(n.li,{children:"Made a demo of Accelerometer for shaking the tablet in scene 9 and figured out how to do it"}),`
`]}),`
`,e(n.p,{children:"Took a bit of time to do, debugging takes a while since i need to deploy to my phone every time i test."}),`
`,e(n.p,{children:"I only tested on iOS for now, i need to test this on my Android tablet, but i forgot it at home. So i will do this later."}),`
`,e(n.h3,{id:"-seb-monday-28-october-2024",children:[e("hr",{})," Seb, Monday 28. October 2024"]}),`
`,e(n.p,{children:"Time to focus on getting things running on mobile/tablet to meet the planned monthly milestones."}),`
`,e(n.p,{children:"Plan for today:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Setup mobile web build for ios/android"}),`
`]}),`
`,e(n.li,{children:"Setup ios store with a testflight build - postponed"}),`
`,e(n.li,{children:"Setup android app store with a test build - postponed"}),`
`]}),`
`,e(n.p,{children:`This is gonna take a bit, need to setup all the correct Java dependencies etc.
I'm choosing to use Capacitor, which is a replacement for Cordova made by the Ionic team.`}),`
`,e(n.p,{children:`Capacitor comes without all the Ionic crap on top.
So should be barebones enough to avoid all the modern framework trash while still being actively maintained.`}),`
`,e(n.p,{children:`I got both iOS and android building and serving the storybook site, next step is getting the Google play and AppStore connect setup for beta testing.
That will happen sometime during this month, we gotta figure out the practicals with our game designer first.`}),`
`,e(n.p,{children:"For now this is good, next up is accelerometer testing tomorrow and then the months milestones will have been met."}),`
`,e(n.h3,{id:"-seb-friday-25-october-2024",children:[e("hr",{})," Seb, Friday 25. October 2024"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Fixed some minor Typescript warnings"}),`
`,e(n.li,{children:"Fixed scene 10 speeder build game"}),`
`,e(n.li,{children:"Added the laser scene interactions in scene 10"}),`
`,e(n.li,{children:"Added missing background interactables to scene 1"}),`
`]}),`
`,e(n.p,{children:"I think there is a general bug on animations using paths. Some initial googling suggests it might be a createjs rounding error."}),`
`,e(n.p,{children:e(n.strong,{children:"Scene status / stuff i'm working on:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Scene 1-10 interactions",`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 0 - Done"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 1 - Mostly done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Can forward to early?"}),`
`,e(n.li,{children:"The flyer background interactable animation is broken on export"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Missing background interactables"}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 2 - Done"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 3 - Mostly Done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Animation error, Sofus glitches for a second when he turns towards the end of the scene"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 4 - Done"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 5 - Mostly Done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Can next too much on Fly"}),`
`,e(n.li,{children:"The fly animation does not execute properly when exported"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 6 - Mostly done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Animation error, lit fuse light does not follow the fuse"}),`
`,e(n.li,{children:"Animation error, Sofus flies out of the rocket when in flies"}),`
`]}),`
`]}),`
`,e(n.li,{children:"Scene 7 - Untouched (rocket game)"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 8 - done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"The background city light animations only show when debug is enabled - FIXED"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"There is a playSound error in terminal when scene is run - FIXED"}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["Scene 9 - Untouched (shake tablet)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"There is an animation error when the scene starts (possibly a loop code issue?)"}),`
`,e(n.li,{children:"Needs a POC of the accelerometer access (R&D says it should be possible)"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 10 - Mostly Done (assemble racer)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"There are some loopFrom related errors in the terminal when run"}),`
`]}),`
`,e(n.li,{children:"Animation Error, the hat transfer animation towards the end freezes"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["GUI",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Back & forward buttons"}),`
`,e(n.li,{children:"Better/dynamic scaling"}),`
`,e(n.li,{children:"Storyteller text formatting"}),`
`,e(n.li,{children:"Use Arrow key shortcuts instead of enter for back/forward"}),`
`]}),`
`]}),`
`,e(n.li,{children:"Scene transition/continue/load next scene when scene completes"}),`
`]}),`
`,e(n.h3,{id:"-seb-thursday-24-october-2024",children:[e("hr",{})," Seb, Thursday 24. October 2024"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Fixed touch interactions on mobile"}),`
`,e(n.li,{children:"Added missing tween animation when item is dropped in scene 5"}),`
`,e(n.li,{children:"Solved how hitArea and hit detection can be done simpler"}),`
`,e(n.li,{children:"Added missing scene interactions in scene 0"}),`
`,e(n.li,{children:"Added missing scene interactions in scene 3"}),`
`,e(n.li,{children:"Finished migrating scene 4"}),`
`,e(n.li,{children:"Fixed scene 8 bugs"}),`
`]}),`
`,e(n.p,{children:"Finally satisfied with the drag & drop for scene 5, i added the missing tween and also made sure touch interactions now work properly."}),`
`,e(n.p,{children:"Got a lot of scenes to playable today, the last simpler scene in this batch is the racer assembly game."}),`
`,e(n.p,{children:e(n.strong,{children:"Scene status / stuff i'm working on:"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Scene 1-10 interactions",`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 0 - Done"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 1 - Mostly done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Can forward to early?"}),`
`,e(n.li,{children:"Missing background interactables"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 2 - Done"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 3 - Mostly Done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Animation error, Sofus glitches for a second when he turns towards the end of the scene"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 4 - Done"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 5 - Mostly Done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Can next too much on Fly"}),`
`,e(n.li,{children:"The fly animation does not execute properly when exported"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: orange",children:"Scene 6 - Mostly done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Animation error, lit fuse light does not follow the fuse"}),`
`,e(n.li,{children:"Animation error, Sofus flies out of the rocket when in flies"}),`
`]}),`
`]}),`
`,e(n.li,{children:"Scene 7 - Untouched (rocket game)"}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"Scene 8 - done"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"The background city light animations only show when debug is enabled - FIXED"}),`
`]}),`
`,e(n.li,{children:[`
`,e("span",{style:"color: green",children:"There is a playSound error in terminal when scene is run - FIXED"}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["Scene 9 - Untouched (shake tablet)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"There is an animation error when the scene starts (possibly a loop code issue?)"}),`
`,e(n.li,{children:"Needs a POC of the accelerometer access (R&D says it should be possible)"}),`
`]}),`
`]}),`
`,e(n.li,{children:["Scene 10 - Untouched (assemble racer)",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"There are some loopFrom related errors in the terminal when run"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:["GUI",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Back & forward buttons"}),`
`,e(n.li,{children:"Better/dynamic scaling"}),`
`,e(n.li,{children:"Storyteller text formatting"}),`
`,e(n.li,{children:"Use Arrow key shortcuts instead of enter for back/forward"}),`
`]}),`
`]}),`
`,e(n.li,{children:"Scene transition/continue/load next scene when scene completes"}),`
`]}),`
`,e(n.h3,{id:"-seb-wednesday-23-october-2024",children:[e("hr",{})," Seb, Wednesday 23. October 2024"]}),`
`,e(n.p,{children:"Back from vacation and working on scene 5 continued from the work i did in the Airport this Monday."}),`
`,e(n.p,{children:"The hitTest and drag and drop is being tedious to get working since the API i am supposed to use for it is unclear."}),`
`,e(n.p,{children:"Got the basics working, hitTest is finicky but the way it works should be re-usable for the maze scene which is good news."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Got drag the assemble rocket minigame working, the scene still needs work."}),`
`,e(n.li,{children:"Found a way to get the Maze scene working as before by hit detection"}),`
`]}),`
`,e(n.h3,{id:"-seb-saturday-19-october-2024",children:[e("hr",{})," Seb, Saturday 19. October 2024"]}),`
`,e(n.p,{children:"Taking a break at the hotel and working a bit."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Added fire swipe to scene 8 and fixed the background interactables",`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Scene is practically done, just needs testing"}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"The swipe helped function came in clutch, made this really easy. :)"}),`
`,e(n.h3,{id:"-seb-friday-18-october-2024",children:[e("hr",{})," Seb, Friday 18. October 2024"]}),`
`,e(n.p,{children:"Working on the plane on my way to Italy for a short vacation today."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Finished misc click scene interactions for scene 2"}),`
`,e(n.li,{children:"Made a generalized method to handle clicks"}),`
`,e(n.li,{children:"Solved how to make invisible interaction areas"}),`
`,e(n.li,{children:"Fixed scene 6 click issues and added the rocket swipe"}),`
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
`]})]})}function y(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}export{y as default};
