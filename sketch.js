
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var  bubbles=[];
var back,backImg;
var point;
var dangerImg; 
var enemy=[];
var score=0;
function preload(){
  backImg=loadImage("rainbow background.jpg")
}
function setup() {
 createCanvas(displayWidth,displayHeight)
 engine = Engine.create();
  world = engine.world;
  back = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  back.addImage(backImg)
  back.scale=5
point=createSprite(displayWidth/2,displayWidth,20,20);
}

function draw() {
  background("pink");
  fill("black");
  textSize(24);
  text("Bubble Pop Antistress game",displayWidth/2,20);
  text("this is balloon pop game ",50,50);
  text("in the next part of this game player can pop the bubbles",50,125);

 point.x=mouseX;
 point.y=mouseY;
 /* if (bubbles.touches(point)){
    bubbles.destroyEach();
    
    point.velocityX = 0;
    score = score+1 
  }*/
  
 
  drawSprites();
  if(frameCount%60===0){
    bubbles.push(new Buble(random(0,displayWidth),10,100));
  }
  for(var h = 0;h<bubbles.length;h++){
    bubbles[h].display();
  }
  if(frameCount%100===0){
    enemy.push(new Enemy(random(0,displayWidth),10,100));
  }
  for(var j = 0;j<enemy.length;j++){
   enemy[j].display();
  }
  textSize(24);
  fill("black");
  stroke(0)
  text("Bubble Pop Antistress game",displayWidth/2-100,20);
  text("This is balloon pop game ",20,50);
  text("In the next part of this game player can pop the bubbles",20,100);

  text("Score: "+score,displayWidth-125,100)
  Engine.update(engine);
}
