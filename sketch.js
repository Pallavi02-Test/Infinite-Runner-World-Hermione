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

  createCanvas(2000, 2000);

  image(track, 0, -displayHeight*4, displayWidth*5, displayHeight);

  player = createSprite (150, 110, 10, 10);
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

  var rect1 = createSprite(250, 0, 865, 10);
  var rect2 = createSprite(250, 180, 865, 7);

  if(gameState === PLAY){

  //COLLISION START
  if(player.isTouching(rect1)){
    player.velocityX = 0;
    player.velocityY = 0;
    player.x = 150;
    player.y = 110;
  }
  if(player.isTouching(rect2)){
    player.velocityX = 0;
    player.velocityY = 0;
    player.x = 150;
    player.y = 110;
  }
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

  }

  drawSprites();

}