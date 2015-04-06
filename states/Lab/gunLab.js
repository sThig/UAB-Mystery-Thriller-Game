/******************************************************************
    
    This Level covers Slides 36 through 37.  
    
    Item: Gun.
    Details: Clear, non-porous item.  
    Fingerprints? Suspect's fingerprint.
    Superglue at Lab.
    
 ******************************************************************/

BasicGame.gunLab = function(game) {
this.background;
this.can;
this.gun;
this.newspaper;
this.postCard;
this.response;
this.textBG;
this.veronicaPrint;
this.paperPrint;
this.printAppear;
};

BasicGame.gunLab.prototype = {

    create: function () {
    
      //this is where all your assets need to be called to be in the main menu
        this.background = this.add.image(0,0,'labScene');
        this.can = this.add.sprite(344, 380, 'Lab_Can');
        this.gun = this.add.sprite(544, 436, 'Lab_Gun');
        this.newspaper = this.add.sprite(744, 436, 'Lab_Paper');
        this.postCard = this.add.sprite(944, 436, 'Lab_Card');
        this.textBG = this.add.sprite(350, 680,'text_bg');
        this.paperPrint = this.add.sprite(944,-15,'Helen_Print');
        this.paperPrint.alpha = 0; 
        this.veronicaPrint = this.add.sprite(544, -10,'Veronica_Print');
        this.veronicaPrint.alpha = 0;
        
        this.can.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.postCard.tint = 0x9999FF;
        
        //Enable input on the items
        ninhydrin = this.add.sprite(800, 550, 'Use_Ninhydrin');
        superglue = this.add.sprite(300, 550, 'Use_Superglue');
        returnBack = this.add.sprite(0,0,'Back');
        
        //Enable input on the items
        ninhydrin.inputEnabled = true;
        superglue.inputEnabled = true;
        returnBack.inputEnabled = true;
        superglue.events.onInputDown.add(this.useSuperGlue, this);
        ninhydrin.events.onInputDown.add(this.useNinhydrin, this);
        returnBack.events.onInputDown.add(this.returnToLab,this);

                
        //Text for the response
        this.response = this.add.text(400,700, 'Which fingerprinting process is best for this piece of evidence?', { font: "24px Helvetica", align: 'Left', wordWrap: true, wordWrapWidth: this.textBG.width-100, fill: '#ffffff' });
    
    },
    
    update: function () {
        if(BasicGame.gunLabComplete === true){
            this.gun.destroy();
        }
        if(BasicGame.canLabComplete === true){
            this.can.destroy();
        }
        if(BasicGame.paperLabComplete === true) {
            this.paperPrint.alpha = 1;
            this.newspaper.destroy();
        }
        if(BasicGame.documentLabComplete === true) {
            this.postCard.destroy();
        }
    },
    
    useSuperGlue: function (response) {
    BasicGame.labCounter++;
    BasicGame.gunLabComplete = true;
    superglue.loadTexture('Correct_Superglue');
    returnBack.loadTexture('Next');
    this.response.setText("Good idea!  Super glue fuming works on non-porous items.  A white print appears on the gun.  You dust, tape lift, and photograph the fumed print.");
    this.printAppear = this.add.tween(this.veronicaPrint).to({alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
    superglue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
    },
    
    useNinhydrin: function (response) {
    ninhydrin.loadTexture('Incorrect_Ninhydrin');
    this.response.setText("The gun is a nonporous item.  Ninhydrin works best on porous items, like paper.");
    },
    
    returnToLab: function() {
        this.state.start('labSceneMain');
    },
}