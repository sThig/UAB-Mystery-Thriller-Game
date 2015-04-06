BasicGame.Preloader = function(game) {

};

BasicGame.Preloader.prototype = {
    
    preload: function() {
    this.load.image('text_bg','assets/text_background.png');
    this.load.image('crimeScene', 'assets/Crime_Scene/Crime_Background.png');
    this.load.image('crimeSceneFull', 'assets/linvilleCrimeSceneFinal-Crime.png');
    this.load.image('Title_Screen','assets/Title.jpg');
    this.load.image('background','assets/background.jpg');
    this.load.image('labScene', 'assets/Lab/linville-lab-empty.png');
    this.load.image('Patrick','assets/Characters/Patrick.png');
    this.load.image('Patrick_small', 'assets/Characters/Patrick_small.png');
    this.load.image('Veronica','assets/Characters/Veronica.png');
    this.load.image('Veronica_small', 'assets/Characters/Veronica_small.png');
    this.load.image('Helen','assets/Characters/Helen.png');
    this.load.image('Helen_small', 'assets/Characters/Helen_small.png');
    //Items that are analyzed
    this.load.image('Back', 'assets/buttons/back.png');
    this.load.image('Next', 'assets/buttons/next.png');
    //Items that the player must locate in the canvas
    this.load.image('Table_Can', 'assets/Crime_Scene/table_can.png');
    this.load.image('Table_Gun', 'assets/Crime_Scene/table_gun.png');
    this.load.image('Table_Newspaper', 'assets/Crime_Scene/table_newspaper.png');
    this.load.image('Table_Glass', 'assets/Crime_Scene/table_glass.png');
    this.load.image('Table_Card', 'assets/Crime_Scene/table_card.png');
    this.load.image('Door_Knob', 'assets/Crime_Scene/door_knob.png');
    this.load.image('Lab_Can', 'assets/Lab/lab_can.png');
    this.load.image('Lab_Gun', 'assets/Lab/lab_gun.png');
    this.load.image('Lab_Card', 'assets/Lab/lab_document.png');
    this.load.image('Lab_Glass', 'assets/Lab/lab_glass.png');
    this.load.image('Lab_Paper', 'assets/Lab/lab_paper.png');
    // Function Buttons
    this.load.image('Use_Powder', 'assets/buttons/Powder/Initial.png');
    this.load.image('Use_Superglue', 'assets/buttons/Superglue/Initial.png');
    this.load.image('Use_Ninhydrin', 'assets/buttons/Ninhydrin/Initial.png');
    this.load.image('Use_Collect', 'assets/buttons/Collect/Initial.png');
    // Incorrect Function Buttons
    this.load.image('Incorrect_Powder', 'assets/buttons/Powder/Incorrect.png');
    this.load.image('Incorrect_Superglue', 'assets/buttons/Superglue/Incorrect.png');
    this.load.image('Incorrect_Ninhydrin', 'assets/buttons/Ninhydrin/Incorrect.png');
    this.load.image('Incorrect_Collect', 'assets/buttons/Collect/Incorrect.png');
    // Correct Function Buttons
    this.load.image('Correct_Powder', 'assets/buttons/Powder/Correct.png');
    this.load.image('Correct_Superglue', 'assets/buttons/Superglue/Correct.png');
    this.load.image('Correct_Ninhydrin', 'assets/buttons/Ninhydrin/Correct.png');
    this.load.image('Correct_Collect', 'assets/buttons/Collect/Correct.png');
    //Fingerprints
    this.load.image('Patrick_Print', 'assets/fingerprints/arch.png');
    this.load.image('Helen_Print', 'assets/fingerprints/whorl.png');
    this.load.image('Veronica_Print','assets/fingerprints/loop.png');
   
    },  
    
create: function () {

},
    
update: function() {
    this.ready = true;
    this.state.start('Title');
}
    
};