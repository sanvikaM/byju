
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  //  when ARROW is pressed

  if (keyIsDown(RIGHT_ARROW)) {
    background("red")
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    background("blue");
  }
 
  if (keyIsDown(UP_ARROW)) {
    background("orange");
   }

  if (keyIsDown(DOWN_ARROW)) {
    background("green");
  }
  
  drawSprites();
}

