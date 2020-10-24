function setup() {
  createCanvas(400,300);
  wall=createSprite(200, 100, 400, 10);
  wall.shapeColor="white";
  wall1=createSprite(200, 200, 400, 10);
  wall1.shapeColor="white";

  block=createSprite(370,50,15,50);
  block1=createSprite(370,150,15,50);
  block2=createSprite(370,250,15,50);

  ball=createSprite(50,50,10,10);
  ball.shapeColor="white";
  ball.velocityX=5;
  ball1=createSprite(50,150,10,10);
  ball1.velocityX=8;
  ball1.shapeColor="white";
  ball2=createSprite(50,250,10,10);
  ball2.velocityX=10;
  ball2.shapeColor="white";
}

function draw() {
background(0,0,0);  
if(isTouching(ball,block)){
  ball.shapeColor="lime";
  ball.velocityX=0;
}
else{
  ball.shapeColor="white";
}

if(isTouching(ball1,block1)){
  ball1.shapeColor="yellow";
  ball1.velocityX=0;
}
else{
  ball1.shapeColor="white";
}

if(isTouching(ball2,block2)){
  ball2.shapeColor="red";
  ball2.velocityX=0;
}
else{
  ball2.shapeColor="white";
}
  drawSprites();
}

function isTouching(ball,block){
  if (ball.x - block.x < block.width/2 + ball.width/2
    && block.x - ball.x < block.width/2 + ball.width/2
    && ball.y - block.y < block.height/2 + ball.height/2
    && block.y - block.y < block.height/2 + ball.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

function isTouching(ball1,block1){
  if (ball1.x - block1.x < block1.width/2 + ball1.width/2
    && block1.x - ball1.x < block1.width/2 + ball1.width/2
    && ball1.y - block1.y < block1.height/2 + ball1.height/2
    && block1.y - block1.y < block1.height/2 + ball1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

function isTouching(ball2,block2){
  if (ball2.x - block2.x < block2.width/2 + ball2.width/2
    && block2.x - ball2.x < block2.width/2 + ball2.width/2
    && ball2.y - block2.y < block2.height/2 + ball2.height/2
    && block2.y - block2.y < block2.height/2 + ball2.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}