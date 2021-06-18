const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var Snows = []
var maxSnow = 100
 
function preload(){
  backgroundImg = loadImage("snow3.jpg")
}




function setup() {

  createCanvas(1000,400);
  engine = Engine.create()
  world = engine.world
  for(var i=0;i<maxSnow;i++){
    Snows.push(new snow(random(0, 500),random(0, 500)))
  }
}

function draw() {
  background(backgroundImg); 
  for(var i=0;i<maxSnow;i++){
    Snows[i].display();
    Snows[i].update();
  }
  Engine.update(engine)
  drawSprites();
}