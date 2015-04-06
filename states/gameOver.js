BasicGame.gameOver = function(game) {
 this.background;
 this.image;
 this.text = '';
 
};
BasicGame.gameOver.prototype = {
    
    create: function () {
        background = this.add.image(0,0, 'crimeScene');
        image = this.add.sprite(this.world.centerX,this.world.centerY,'diamond');
        returnStar = this.add.image(0,0, 'star');
        returnStar.inputEnabled = true;
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
         text = this.add.text(this.world.centerX-100,this.world.centerY+30, 'Game Over', { fill: '#fffff' });
       
    },
     returnToMenu: function (pointer) {
        BasicGame.levelCounter = 0;
        BasicGame.diamondDone = true;
        BasicGame.aidDone = true;
         this.state.start('Preloader');   
        }
}