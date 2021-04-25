var a,b

function setup() {
  createCanvas(800,400);
  a = createSprite(100, 200, 50, 150);
  b = createSprite(600, 200, 150, 50);
  b.shapeColor = "Pink"
  a.shapeColor = "Pink"
}

function draw() {
  background("Blue");  
  drawSprites();
  b.x = mouseX
  b.y = mouseY
  console.log(b.x-a.x)
 if(b.x-a.x < a.width/2 + b.width/2 && a.x-b.x < a.width/2 + b.width/2  && b.y-a.y < a.height/2 + b.height/2 
  && a.y-b.y < a.height/2 + b.height/2){
 b.shapeColor = "Red"
 a.shapeColor = "Green"
 }
 else{
   b.shapeColor = "Pink"
   a.shapeColor = "Pink"
 }
}