//Will not be used this time around.  Perhaps for future iterations?

BasicGame.glassLab = function(game) {
this.background;
this.can;
this.gun;
this.postCard;
this.ninhydrin;
this.superglue; 
};

BasicGame.glassLab.prototype = {
    
    create: function () {
    //this is where all your assets need to be called to be in the main menu
        this.background = this.add.image(0,0,'labScene');
        this.can = this.add.sprite(344, 380, 'Lab_Can');
        this.gun = this.add.sprite(544, 436, 'Lab_Gun');
        this.newspaper = this.add.sprite(744, 436, 'Lab_Paper');
        this.postCard = this.add.sprite(944, 436, 'Lab_Card');
        
        this.ninhydrin = this.add.sprite(750, 600, 'Use_Ninhydrin');
        this.superglue = this.add.sprite(200, 600, 'Use_Superglue');
        
        
        //Enable input on the items
        this.ninhydrin.inputEnabled = true;
        this.superglue.inputEnabled = true;
        this.superglue.events.onInputDown.add(this.useSuperGlue, this);
        this.ninhydrin.events.onInputDown.add(this.useNinhydrin, this);
        
        //Text for the response
        this.response = this.add.text(0,this.world.centerY+300, '', { font: "24px Arial", wordWrap: true, wordWrapWidth: 500, fill: '#fffff' });
    },
    
    update: function () {
        if(BasicGame.gunLabComplete === true){
            this.gunPrint.alpha = 1;
            this.gun.destroy();
        }
        if(BasicGame.canLabComplete === true){
            this.can.destroy();
        }
        if(BasicGame.paperLabComplete === true) {
            this.newspaper.destroy();
        }
        if(BasicGame.documentLabCompelte === true) {
            this.postCard.destroy();
        }
    },
    
    useSuperGlue: function () {},
    
    useNinhydrin: function () {},
     returnToLab: function () {
        this.state.start('labSceneMain');
    },
    
}