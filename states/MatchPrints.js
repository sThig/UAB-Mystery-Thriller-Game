BasicGame.MatchPrints = function(game) {
this.background;
this.patrickPrint;
this.helenPrint;
this.veronicaPrint;
this.patrickPortrait;
this.helenPortrait;
this.VeronicaPortrait;
this.textBG;
this.response;
this.goNext;
this.counter = 0;
};

BasicGame.MatchPrints.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.goNext = this.add.sprite(this.world.centerX,this.world.centerY,'Next');
        this.patrickPortrait = this.add.sprite(0,450,'Patrick_small');
        this.helenPortrait = this.add.sprite(533,450,'Helen_small');
        this.VeronicaPortrait = this.add.sprite(1066,450,'Veronica_small');
        this.patrickPrint = this.add.sprite(0,0,'Patrick_Print');
        this.helenPrint = this.add.sprite(200, 0, 'Helen_Print');
        this.veronicaPrint = this.add.sprite(400,0,'Veronica_Print');
        this.veronicaPrintTwo = this.add.sprite(600,0,'Veronica_Print');
        this.textBG = this.add.sprite(900,0,'text_bg');
        
        //enable input on the print sprites and allow drag
        this.helenPrint.inputEnabled = true;
        this.patrickPrint.inputEnabled = true;
        this.veronicaPrint.inputEnabled = true;
        this.veronicaPrintTwo.inputEnabled = true;
        this.patrickPrint.input.enableDrag();
        this.helenPrint.input.enableDrag();
        this.veronicaPrint.input.enableDrag();
        this.veronicaPrintTwo.input.enableDrag();
        this.patrickPrint.events.onDragStop.add(this.checkPatrick, this);
        this.helenPrint.events.onDragStop.add(this.checkHelen, this);
        this.veronicaPrint.events.onDragStop.add(this.checkVeronica, this);
        this.veronicaPrintTwo.events.onDragStop.add(this.checkVeronica, this);
        
        this.response = this.add.text(this.world.centerX, 300, '',{ font: "24px Helvetica", wordWrap: true, wordWrapWidth: 500, align: 'center', fill: '#ffffff'});
        this.text = this.add.text(920, 20,'We have 4 fingerprints let\'s see which fingerprints belong to Patrick. \nNote: Drag the each fingerprint and try to match them to the respected person.', {font: '24px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: this.textBG.width-100, fill:'#ffffff' });
        this.glassText = this.add.text(0, 300,'Glass fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: this.textBG.width-100, fill:'#ffffff'});
        this.paperText = this.add.text(180, 300,'Newspaper fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: this.textBG.width-100, fill:'#ffffff'});
        this.knobText = this.add.text(400, 300,'Door Knob fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: this.textBG.width-100, fill:'#ffffff'});
        this.gunText = this.add.text(630, 300,'Gun fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: this.textBG.width-100, fill:'#ffffff'});
    },

    update: function() {
        if(this.counter === 4) {
            this.state.start('Outro');
        }
        
        
        
    },
    checkPatrick: function () {
        if (this.patrickPrint.x < 533){
            if(this.patrickPrint.y >= this.world.centerY) {
            this.patrickPrint.destroy();
            this.counter++;
            this.response.setText("Correct! This print matches the deceased victim, Patrick Evans.");
            }
        }
            
            else if(this.patrickPrint.x >= 533 ) {
            this.response.setText("This print is from the glass and matches the victim.");
            this.patrickPrint.x = 0;
            this.patrickPrint.y = 0;
                  }
            

        
    },
    checkVeronica: function () {
        //Veronica's First Print, which is the doorknob
                if(this.veronicaPrint.x < 533) {
            if(this.veronicaPrint.y >= 450) {
            this.veronicaPrint.x = 400;
            this.veronicaPrint.y = 0;
            this.response.setText("This print does not match Patrick's print. Try someone else");
            }
        }
        if(this.veronicaPrint.x >=533) 
            if(this.veronicaPrint.x <= 1066) {
            if(this.veronicaPrint.y >= 450) {
                this.veronicaPrint.x = 400;
                this.veronicaPrint.y = 0;
                this.response.setText("This print does not match any records we have for Helen. Try another person. Doesn't this print look familiar to another print here?");
            }
        }
        else if(this.veronicaPrint.x >= 1068) {
                if(this.veronicaPrint.y >= 450) {
                this.veronicaPrint.destroy();
                this.counter++;
                this.response.setText("This print matches the prints on Veronica's record. Good work.");
            }
            }
        //Second Print, the gun.
        if(this.veronicaPrintTwo.x < 533) {
            if(this.veronicaPrintTwo.y >= 450) {
            this.veronicaPrintTwo.x = 600;
            this.veronicaPrintTwo.y = 0;
            this.response.setText("This print does not match Patrick's print. Try someone else");
            }
        }
        if(this.veronicaPrintTwo.x >=533) 
            if(this.veronicaPrintTwo.x <= 1066) {
            if(this.veronicaPrintTwo.y >= 450) {
                this.veronicaPrintTwo.x = 600;
                this.veronicaPrintTwo.y = 0;
                this.response.setText("This print does not match any records we have for Helen. Try another person. Doesn't this print look familiar to another print here?");
            }
        }
        if(this.veronicaPrintTwo.x >= 1068) {
                if(this.veronicaPrintTwo.y >= 450) {
                this.veronicaPrintTwo.destroy();
                this.counter++;
                this.response.setText("This print matches the prints on Veronica's record. It also matches the door knob's print. Good work.");
            }
            }
        
        
        
    },
    checkHelen: function () {
        //if user drops print on Patrick's instead of Helen.
        if(this.helenPrint.x < 533) {
            if(this.helenPrint.y >= 450) {
            this.helenPrint.x = 200;
            this.helenPrint.y = 0;
            this.response.setText("This print does not match Patrick's print. Try someone else");
            }
        }
        else if(this.helenPrint.x < 1068) {
            if(this.helenPrint.y < 450) {
                this.helenPrint.x = 200;
                this.helenPrint.y = 0;
        }
        }
            else if(this.helenPrint.x >= 1068) {
                if(this.helenPrint.y >= 450) {
                this.helenPrint.x = 200;
                this.helenPrint.y = 0;
                this.response.setText("This print does not match Veronica's records, try another person.");
            }
            }
        if(this.helenPrint.x >=533) 
            if(this.helenPrint.x <= 1066) {
            if(this.helenPrint.y >= 450) {
                this.helenPrint.destroy();
                this.response.setText("You got it right! The print from the newspaper belongs to the woman that neighbors know as Helen.");
            }
        }
},
}