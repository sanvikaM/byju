var sea,ship,seaImg,shipImg;

function preload(){
 //code to add animation to ship 
  shipImg = loadAnimation("ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,400);
  background("blue");

  // Moving background
  sea=createSprite(0,0,2000,800)
  sea.addImage(seaImg);
  sea.x = 400
  sea.y = 200
  sea.velocityX = -2;

  // Create ship
  ship = createSprite(150,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.3;
}

function draw() {
  //code to reset the background

  if(sea.x < -600){
    sea.x = 400;
  }
 
 
 drawSprites();