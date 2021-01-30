var player;

var ob1;
var ob2;
var ob3;
var ob4;
var ob5;

var enemy1;
var enemy2;

var score = 0;

var PLAY = 1;
var END = 0;
gameState = PLAY;

var bg;

var objGroup;

function setup(){

  createCanvas(displayWidth*3,displayHeight-100);

  //image(track, 0, -displayHeight*4, displayWidth*5, displayHeight);

  player = createSprite (150,400,50,50);
  player.addImage (playerIMG);
  player.scale = 0.05;

}

function preload(){
  playerIMG = loadImage("Hermione.png");
  ob1IMG = loadImage("timeturner.png");
  ob2IMG = loadImage("wand.png");
  ob3IMG = loadImage("broom.jpg");
  ob4IMG = loadImage("nextob.jpg");
  ob5IMG = loadImage("lastobject.jpg");
  track = loadImage("bg.jpg");

  objGroup = new Group;
}

function draw(){

  background(track);

 

  if(gameState === PLAY){

  //COLLISION START
  
  //COLLISION END

    if (objGroup.isTouching(player)){
        score = score + 1;
    }

  if (keyWentDown (UP_ARROW)){
    player.velocityY = -5;
  }

   if (keyWentDown (DOWN_ARROW)){
    player.velocityY = 5;
  }
  if(keyWentDown("w")){
    player.x = player.x +50;
  }


  }

  drawSprites();

}
