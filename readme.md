# Sofus & the Moonmachine - web edition

## Migration notes

Exported scene is a CreateJS scene, so we can use those API's

Here are some stuff i have not thought through yet

 * Need to make a new sound manager (based on CreateJS)
 * All the scene scripts need to be redone
	* Hidden buttons (or 0 opacity) are not clickable in CreateJS, need a fix for this
	* Need a scene library script to handle repeat, playsound, screenshake, etc.
		* Need to make a full list of these
 * A few scenes have custom script/games that need to be rewritten
	* @TODO, Make a list
 * We need a GUI to show the written text as in the original game
 * We need a new menu screen made


# POC todo:

 * Load and play a sound (fx. the background music)
 * Create a simple library function to play the voice lines
    * Will require a book manager and next logic
 * Hook up the cursor keys to go back/forward in the scene
 * Add in most of the scene 2 onclick etc. interactions
