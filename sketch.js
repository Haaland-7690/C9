var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite (200,200,20,20)
}

function draw() 
{
  background(30);
  if (keyDown("right")) { 
    ball.x += 10
  }
  if (keyDown("left")) {
    ball.x -= 10
  }

  if (keyDown ( "UP_ARROW")) {
    ball.y -= 10
  }

  if (keyDown("DOWN_ARROW")) {
    ball.y += 10
  }

 drawSprites()
}




