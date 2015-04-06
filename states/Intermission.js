BasicGame.Intermission = function(game) {
    this.background;
    this.text;
    this.promptText;
    this.timer;
    this.counter = 0;
    this.knobPrint;
    this.glassPrint;
    this.veronica;
    this.helen;
    this.timer;
}

BasicGame.Intermission.prototype = {
    
create: function() {
    this.background = this.add.image(0,0,'background');
    this.goNext = this.add.sprite(120, 720,'Next');
    
    //Text
    this.text = this.add.text(50,this.world.centerY+150, 'You found a lot of clues to this case, including two fingerprints.', { font: '24px Helvetica', wordWrap: true, wordWrapWidth: 500, align: 'left',fill: '#ffffff' });
    this.text.setShadow(0, 0, 'rgba(0, 0, 0, 2)', 0);
    //Fingerprints
    this.knobPrint = this.add.image(50, this.world.centerY-200, 'Veronica_Print');
    this.glassPrint = this.add.image(250, this.world.centerY-200, 'Patrick_Print');
    this.helen = this.add.image(1007,455,'Helen_small');
    this.veronica = this.add.image(1007, 25, 'Veronica_small');
    this.goNext.inputEnabled = true;
    this.goNext.events.onInputDown.add(this.enableClick,this);
    
    //Items Opacity
    this.knobPrint.alpha = 0;
    this.glassPrint.alpha = 0;
    this.veronica.alpha = 0;
    this.helen.alpha = 0;
},
update: function() {

        if (this.counter === 8) 
        {
           
             this.state.start('labSceneMain');
            
        }    
            else if (this.counter === 1)
             {
            this.text.setText("Here is the Fingerprint from the front door knob.");
            this.knobPrintFade = this.add.tween(this.knobPrint).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
             }
            else if (this.counter === 2)
        {
            this.text.setText("Here is the Fingerprint from the drinking glass.");
            this.glassPrintFade = this.add.tween(this.glassPrint).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
            else if (this.counter === 3)
        {
            this.text.setText("You picked up a gun, newspaper, postcard, and a can for further analysis");
        }
        else if(this.counter === 4) {
            this.text.setText("After collecting your evidence, your forensic artist drew two descriptions(based on an explanation of a neighbor) of the two women that left Patrick's apartment on the day of his untimely death.");
        }
        else if(this.counter === 5) {
            this.text.setText("Here is the portrait of the woman who left the apartment at approximately 7:18 P.M. Police have identified her as Veronica Johnson, Patrick's ex-girlfriend. She has a criminal record for stalking and harassment charges.");
            this.fade = this.add.tween(this.veronica).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
        else if(this.counter === 6) {
         this.text.setText("Here is a drawing of the woman that left the apartment approximately 4 hours before Patrick's death. Neighbors assumed that it was his new girlfriend, Helen Williams.");   
            this.fade = this.add.tween(this.helen).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
            else if (this.counter === 7)
        {
            this.text.setText("There are many questions and few pieces of evidence. Let’s head over to the lab and analyze the items for more fingerprints.");
        }
           
},
enableClick: function () {
    this.counter++;
    
},
fadeToLab: function () {
    this.fadein = this.add.tween(this.world).to( { alpha: 0}, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
    this.state.start('labSceneMain');
    
},
returnToLab: function() {
    this.state.start('labSceneMain');
},
}