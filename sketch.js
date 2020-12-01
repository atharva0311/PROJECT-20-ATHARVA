var car , wall;
var speed , weight;
var carimage,wallimage;

function preload()
{
  carimage = loadImage("car.jpg")
  wallimage = loadImage("wall.jpg")
}

function setup() 
{
  createCanvas(800,400);
 
   car = createSprite(100, 200, 50, 50);
   car.addImage("carimage",carimage);

   wall = createSprite (700,200,100,100);
   wall.addImage("wallimage",wallimage);

}

function draw() {
  background(255,255,255);  



  drawSprites();
}