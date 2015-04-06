BasicGame.crimeSceneMain = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    this.BG;
    //Items are named from left to right and top to bottom.  
    //Items 1-3 are the top items and 4-6 are the bottom.
    this.drinkingGlass;
    this.doorKnob;
    this.gun;
    this.newspaper;
    this.paperDoc;
    this.sodaCan;
    this.text = '';

};

BasicGame.crimeSceneMain.prototype = {

	create: function () {
        this.BG = this.add.image(0,0,'crimeScene');
        this.BG.tint = 0x9999FF;
        this.drinkingGlass = this.add.image(629,573, 'Table_Glass');
        this.tweenGlass = this.add.tween(this.drinkingGlass).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);
        this.doorKnob = this.add.image(446,302, 'Door_Knob');
        this.tweenKnob = this.add.tween(this.doorKnob).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);;
        this.gun = this.add.image(604, 830, 'Table_Gun');
        this.tweenGun = this.add.tween(this.gun).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);;
        this.newspaper = this.add.image(855,446, 'Table_Newspaper');
        this.paperTween = this.add.tween(this.newspaper).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);;
        this.paperDoc = this.add.image(424, 630, 'Table_Card');
        this.docTween = this.add.tween(this.paperDoc).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);;
        this.sodaCan = this.add.image(525,561, 'Table_Can');
        this.canTween = this.add.tween(this.sodaCan).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1, true);
        // Enable Input for the images
        this.drinkingGlass.inputEnabled = true;
        this.doorKnob.inputEnabled = true;
        this.gun.inputEnabled = true;
        this.newspaper.inputEnabled = true;
        this.paperDoc.inputEnabled = true;
        this.sodaCan.inputEnabled = true;
        // On input, run the function listed in the parameter
        this.drinkingGlass.events.onInputDown.add(this.startGlassLevel,this);
        this.doorKnob.events.onInputDown.add(this.startKnobLevel, this);
        this.gun.events.onInputDown.add(this.startWeaponLevel, this);
        this.newspaper.events.onInputDown.add(this.startPaperLevel, this);
        this.paperDoc.events.onInputDown.add(this.startpostCardLevel, this);
        this.sodaCan.events.onInputDown.add(this.startCanLevel, this);
		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        //this shows how many stages have been completeds
        

	},

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        //Statements to check if other levels have been completed
        
        /*******************************************
        
        Okay, so this is how the update function works in Phaser.
        
        "is intended to update positions, physics, scores, to manage user inputs, to invoke collision callbacks, to kill or revive objects, 
        and so on. It's the heart of your game really. Remember, unless drawing graphics by your own, you don't have to code object rendering, 
        Phaser does it for you on the object creation order basis."
        Source:
        https://github.com/photonstorm/phaser/wiki/Phaser-General-postCardation-:-States
        
        The update function is where all the live updates would go once the main items have been created.  
        I'm using this to check if the student/player has completed the states and replacing the click images with red, non-clickable images.
        This is my first time using Phaser, so I'm actually not replacing the sprite using the statements I have created, but simply placing
        them on top of the other.  There is probably a better way to do this, but as of now, this is how I'm getting it to work.  It will
        really matter when asset management becomes a factor if the game gets larger.  
        In the same statements, I am ensuring that the images are not clickable via boolean var.
        
        You can do this with anything.  If you want the user to do something and provoke a function in the state, you want to put them in the update 
        function usually.  
        
        ********************************************/
         if (BasicGame.crimeCounter === 1) //checks to see if the levels were cleared
        {
            this.startIntermission();
        }
        
         if (BasicGame.glassLevelComplete === true) 
         { 
            this.drinkingGlass.inputEnabled = false; //user can no longer access stage
            this.drinkingGlass.destroy(); 
        }
        if (BasicGame.knobLevelComplete === true) 
        {
            this.doorKnob.inputEnabled = false; //user can no longer access stage
            this.doorKnob.destroy();
        }
        if (BasicGame.weaponLevelComplete === true)
        {
            this.gun.inputEnabled  = false;
            this.gun.destroy();
        }
        if (BasicGame.paperLevelComplete === true)
        {
            this.newspaper.inputEnabled = false;
            this.newspaper.destroy();
        }
        if (BasicGame.postCardLevelComplete === true)
        {
            this.paperDoc.inputEnabled = false;
            this.paperDoc.destroy();
        }
        if (BasicGame.canLevelComplete === true)
        {
            this.sodaCan.inputEnabled = false;
            this.sodaCan.destroy();
        }
       

	},

	startGlassLevel: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go to the next state.
		this.state.start('glassLevel');

	},
    startKnobLevel: function (pointer) {
        //	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

	    //	Then let's go to the next state.
		this.state.start('knobLevel');
    },
    startWeaponLevel: function (pointer) {
         //	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

	    //	Then let's go to the next state.
        this.state.start('weaponLevel');

},
    startPaperLevel: function (pointer) {
        this.state.start('paperLevel');
        
},
    startpostCardLevel: function (pointer) {
        this.state.start('postCardLevel');
},
    startCanLevel: function (pointer) {
        this.state.start('canLevel');
},
    startIntermission: function(pointer) {
        this.state.start('intermission');
},
    
}
