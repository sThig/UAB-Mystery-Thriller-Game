BasicGame.Thanks = function(game) {
this.background;
this.text;
};
BasicGame.Thanks.prototype = {
    
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.text = this.add.text(0,this.world.centerY+100, 'Thanks for playing! If you would like to play again, refresh this page. If you have any questions or concerns, contact your professor, Dr. Linville. \nThis game was developed using the Phaser Javascript Framework. \nProgrammer: Jeremy Nelson\nDesigners: Tierra Andrews and Scott Thigpen.', { font: "24px Helvetica", wordWrap: true, wordWrapWidth: 1000, align: 'left',fill: '#ffffff'});
    },
}
