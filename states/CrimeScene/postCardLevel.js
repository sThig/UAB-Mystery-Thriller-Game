 /******************************************************************
    
    This Level covers Slides 26 through 29.  
    
    Item: Paper postCard.
    Details: Porous item.  
    Fingerprints? Yes.
    Collect? Yes.
    
 ******************************************************************/
    
BasicGame.postCardLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnBack; //return to the Menu
 this.textBG;
 
};
BasicGame.postCardLevel.prototype = {
    
   create: function () {
        //adding the images to the canvas
      //adding the images to the canvas
        this.BG = this.add.image(0,0,'crimeScene');
        this.drinkingGlass = this.add.image(629,573, 'Table_Glass');
        this.doorHandle = this.add.image(446,302, 'Door_Knob');
        this.gun = this.add.image(604, 830, 'Table_Gun');
        this.newspaper = this.add.image(855,446, 'Table_Newspaper');
        this.paperDoc = this.add.image(424, 630, 'Table_Card');
        this.sodaCan = this.add.image(525,561, 'Table_Can');
        this.textBG = this.add.sprite(this.world.centerX+95,700,'text_bg');

       
       //Adding a tint to all other objects to give the game a more focused feel
        this.BG.tint = 0x9999FF;
        this.drinkingGlass.tint = 0x9999FF;
        this.doorHandle.tint = 0x9999FF;
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.sodaCan.tint = 0x9999FF;       
        powder = this.add.sprite(this.world.centerX+400, this.world.centerY-300, 'Use_Powder');
        glue = this.add.sprite(this.world.centerX+400, this.world.centerY-220, 'Use_Superglue');
        ninhydrin = this.add.sprite(this.world.centerX+400, this.world.centerY-140, 'Use_Ninhydrin');
        collect = this.add.sprite(this.world.centerX+400, this.world.centerY-60, 'Use_Collect');
        returnBack = this.add.image(0,0, 'Back');
        
        //Input enabled for images
        returnBack.inputEnabled = true;
        powder.inputEnabled = true;
        glue.inputEnabled = true;
        ninhydrin.inputEnabled = true;
        collect.inputEnabled = true;  
        
        // When the user clicks on the image, return the method with the message
        returnBack.events.onInputDown.addOnce(this.returnToMenu,this);
        powder.events.onInputDown.addOnce(this.usePowder,this);
        glue.events.onInputDown.addOnce(this.useSuperGlue,this);
        ninhydrin.events.onInputDown.addOnce(this.useNinhydrin,this);
        collect.events.onInputDown.addOnce(this.collectItem,this);
       
        
        //How the text will look
        this.response = this.add.text(this.world.centerX+200,this.world.centerY+275, 'Which fingerprinting process is best for this piece of evidence?', { font: "24px Helvetica", wordWrap: true, wordWrapWidth: 500, fill: '#ffffff' });
        
    },
    update: function () {

         if (BasicGame.glassLevelComplete === true) 
         { 
            this.drinkingGlass.inputEnabled = false; //user can no longer access stage
            this.drinkingGlass.destroy(); 
        }
        if (BasicGame.knobLevelComplete === true) 
        {
            this.doorHandle.inputEnabled = false; //user can no longer access stage
            this.doorHandle.destroy();
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
   returnToMenu: function (pointer) {
         this.state.start('crimeSceneMain');   
    },
    
    usePowder: function () {  
      
    this.response.setText("Super glue works best on nonporous items.  Besides, you are not able to fume an item at the crime scene.  Try something else.");
    },
    
    useSuperGlue: function () {
    glue.loadTexture('Incorrect_Superglue');
    this.response.setText("Oils from fingerprints are absorbed into porous materials like paper.  A brush and black powder is not very good at developing prints on porous items.  Try something else.");
    },
    
    useNinhydrin: function () {
    ninhydrin.loadTexture("Incorrect_Ninhydrin");
    this.response.setText("Ninhydrin does work best on porous items, but ninhydrin is difficult to apply to items at the scene.  Try something else.");
        
    },
    collectItem: function () { 
         //  This will stop the user from visiting the other options
        //  Also, it will stop them from clicking option 1 and incrementing the crimeCounter by an infinite amount
    BasicGame.crimeCounter++;
    collect.loadTexture("Correct_Collect");
    returnBack.loadTexture('Next');
    powder.inputEnabled = false;
    glue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
    collect.inputEnabled = false;
    BasicGame.postCardLevelComplete = true;
    this.response.setText("Good idea!  The paper can be removed from the crime scene and this porous item can more easily be processed back at the lab. Click Next to continue.");
    },


}