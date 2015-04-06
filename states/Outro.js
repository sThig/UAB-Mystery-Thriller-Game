BasicGame.Outro = function (game) {
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
};
BasicGame.Outro.prototype = {
    create: function () {
         startBG = this.add.image(0,0, 'background');
        this.goNext = this.add.image(120,710, 'Next'); 
        this.veronica = this.add.sprite(911, 192,'Veronica');
        this.veronica.alpha = 0;
        this.text = this.add.text(0,this.world.centerY+100, '', { font: "24px Helvetica", wordWrap: true, wordWrapWidth: 500, align: 'left',fill: '#ffffff'});
        this.text.setText("After analyzing the fingerprints. You prove that Veronica is a prime suspect in the case.");
        
    },
    update: function() {
         this.goNext.inputEnabled = true;
        this.goNext.events.onInputDown.add(this.enableClick,this);
        
            if (this.counter === 1)
             {
            this.text.setText("Patrick broke up with Veronica over 4 months ago.");
            this.fadein = this.add.tween(this.veronica).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
             }
            if (this.counter === 2)
        {
            this.text.setText("She never let go of their relationship and heard that he was dating a new woman.");
        }
            if (this.counter === 3)
        {
            this.text.setText("After steaking out his apartment for two days, she finally saw that the rumors were true.");
        }
            if (this.counter === 4)
        {
            this.text.setText("With her gun in hand, she walked into his apartment, they had an argument, and she shot him dead.");
        }
            if (this.counter === 5)
        {
            this.text.setText("Veronica turned herself in less than 48 hours after the murder.");
        }
            if (this.counter === 6) 
        {
            this.state.start("Thanks");
        }
    },
    enableClick: function () {
        this.counter++;
    },
}

