BasicGame.Title = function (game) {
 this.background;
 this.text;
};

BasicGame.Title.prototype = {
    
    create: function () {
    this.background = this.add.sprite(0,0,'Title_Screen');
    this.text = this.add.text(this.world.centerX,700, 'Click anywhere to start', { font: "24px Helvetica", fill: '#ffffff' });
    this.background.inputEnabled = true;
    this.background.events.onInputDown.add(this.startGame, this);
    },
    update: function () {
},
    startGame: function() {
        this.state.start('Menu');
    },
}