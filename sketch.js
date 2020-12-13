var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(800,400);
  thickness=Math.round(random(22,83));
  speed=Math.round(random(223,321));
  bullet=createSprite(200,200,50,50);
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
  wall=createSprite(700,200,thickness,height/2);
}

function collision(object1,object2){
 if(object1.x-object2.x<(object1.width+object2.width)/2){
    return true;
  }
  else{
    return false;
  }
}

function draw() {

  background("black");  
  
  if(collision(wall,bullet)){
    bullet.velocityX=0;
  
     var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
     console.log(damage);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
}