 /******************************************************************
    
    This Level covers Slides 18 through 21.  
    
    Item: Can
    Details: Complex Background, removable, non-porous item.  
    Fingerprints? No.
    Collect? Yes.
    Fume? At lab.
    
 ******************************************************************/
    
BasicGame.canLevel = function(game) {
 this.bg;
 this.textBG;
 this.drinkingGlass;
 this.doorKnob;
 this.gun;
 this.newspaper;
 this.paperDoc;
 this.sodaCan;//image for the level
 this.returnBack; //return to the Menu
 
};
BasicGame.canLevel.prototype = {
    
   create: function () {
       
        //adding the images to the canvas
        this.bg = this.add.image(0,0,'crimeScene');
        this.drinkingGlass = this.add.image(629,573, 'Table_Glass');
        this.doorKnob = this.add.image(446,302, 'Door_Knob');
        this.gun = this.add.image(604, 830, 'Table_Gun');
        this.newspaper = this.add.image(855,446, 'Table_Newspaper');
        this.paperDoc = this.add.image(424, 630, 'Table_Card');
        this.sodaCan = this.add.image(525,561, 'Table_Can');
        this.textBG = this.add.sprite(this.world.centerX+95,700,'text_bg');
        
       
       //Adding a tint to all other objects to give the game a more focused feel
        this.bg.tint = 0x9999FF;
        this.drinkingGlass.tint = 0x9999FF;
        this.doorKnob.tint = 0x9999FF;
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.paperDoc.tint = 0x9999FF;
       
       //images for buttons
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
        // collect.events.onInputDown.addOnce(this.incorrectResponseThree,this);

        
        //How the text will look
        this.response = this.add.text(this.world.centerX+200,this.world.centerY+275, 'Which fingerprinting process is best for this piece of evidence?', { font: "24px Helvetica", align: 'left', wordWrap: true, wordWrapWidth: this.textBG.width-100, fill: '#ffffff' });
        
    },
    update: function () {
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
   returnToMenu: function (pointer) {
         this.state.start('crimeSceneMain');   
    },
    
    usePowder: function () {
        powder.loadTexture('Incorrect_Powder');
        this.response.setText("A brush and black powder is good for processing nonporous items, but this soda can has a complex background that would not provide good contrast.  Try something else.");
    },
    useSuperGlue: function () {
       glue.loadTexture('Incorrect_Superglue');
       this.response.setText("You are unable to fume with superglue at the crime scene. Try something else.");
    },
    
    useNinhydrin: function () {
      ninhydrin.loadTexture('Incorrect_Ninhydrin');
      this.response.setText("Ninhydrin works best on porous items.  Besides, you would not be able to apply ninhydrin to an item at the crime scene.  Try something else.");
        
    },
    collectItem: function () {   
     //  This will stop the user from visiting the other options
    //  Also, it will stop them from clicking option 1 and incrementing the crimeCounter by an infinite amount
    BasicGame.crimeCounter++;
    collect.loadTexture('Correct_Collect');
    returnBack.loadTexture('Next');
    powder.inputEnabled = false;
    glue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
    collect.inputEnabled = false;
    BasicGame.canLevelComplete = true;
    this.response.setText("Good idea!  The soda can be removed from the crime scene and this nonporous item with a patterned background can more easily be processed back at the lab. Click Next to continue.");
    },


}