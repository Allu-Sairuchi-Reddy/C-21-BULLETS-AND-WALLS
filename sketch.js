
var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(100,200,100,17);
  bullet.shapeColor="orange";
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
}

function draw() {
  background("pink"); 

  if(hasCol(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
  
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCol(){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

