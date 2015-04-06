var BasicGame = {
    
    /************************************************************
    
    This is where global variables will be initialized.  You will call them
    in other states/stages using BasicGame.varName.
    
    Pay close attention to the syntax Phaser uses for Global variables.
    
    varName: value,
    Counters:
    crimeCounter: keeps up with the User's process in the Crime Scene only.
    labCounter: keeps up with the User's process in the Lab Scene only.
    
    ************************************************************/
    
    crimeCounter: 0,
    labCounter: 0,
    glassLevelComplete: false,
    knobLevelComplete: false,
    weaponLevelComplete: false,
    newspaperLevelComplete: false,
    postCardLevelComplete: false,
    canLevelComplete: false,
    canLabComplete: false,
    gunLabComplete: false,
    newspaperComplete: false,
    documentLabComplete: false,
    
};


BasicGame.Boot = function (game) {
     
    this.game = game;
},

BasicGame.Boot.prototype = {
    preload : function () {
//        Redudant code. Dunno why Lynda initialized here. Put this in        
//        Preloader.js
//        this.load.image('sky', 'assets/sky.png');
//        this.load.image('firstaid', 'assets/firstaid.png');
//        this.load.image('diamond', 'assets/diamond.png');
    },
    
    create: function () {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 800;
    this.scale.minHeight = 600;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.stage.forcePortrait = false; //Force landscape in browser
    this.scale.setScreenSize(true);
    
    this.input.addPointer(); //correspond to the 1 pointer
    this.stage.backgroundColor = '#ffffff'; 
    this.state.start('Preloader'); //starts the Preloader.js file
}
}

    