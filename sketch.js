
var fixedRect;
var movingRect; 

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 100, 100);
  movingRect=createSprite(400,300,100,100);
  fixedRect.debug=true;
  movingRect.debug=true;
  
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}

function draw() {
  background(0); 
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY; 
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
   fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
   movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
    
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}