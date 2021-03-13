var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(850,400);

  //backgroundImage=createSprite(425,200,850,400)
  //backgroundImage.shapeColor="blue"

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
background("cyan")



  if(playerCount === 4){
    game.update(1);
    //backgroundImage.visible=false;
    //backgroundImg=createSprite(425,200,850,400)
    //backgroundImg.shapeColor="yellow"
  }
  
  if(gameState === 1){
    clear();
    background("yellow")
    game.play();
    
  }

  drawSprites();
}
