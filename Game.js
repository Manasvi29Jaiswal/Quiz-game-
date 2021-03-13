class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    push ()
    textSize(30);
    fill("black")
    text("Result of the Quiz", 300, 50)
    text("_ _ _ _ _ _ _ _ _ _", 300, 50)
    pop ();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
    var display_position = 250;
    var correctanswer = "2";
      for(var plr in allPlayers){
        if (correctanswer===allPlayers[plr].answer)
          fill("green")
          
        else
          fill("red");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 120,display_position)
      }
    }

  }
}