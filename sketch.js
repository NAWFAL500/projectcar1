function setup(){
  createCanvas(1400,400)
  
  
  wall = createSprite(1380,200,20,120)
  wall.shapeColor="silver"
  
  carGroup = new Group();
}



function draw(){
  background("black")
  
  
   if (frameCount %100 === 0){
   var car = createSprite(8,200,20,20);
   car.velocityX = 20;
  car.shapeColor="green"
  carGroup.add(car)
   }    
   
  if(carGroup.collide(wall)){
     
     carGroup.destroyEach();
     
     
     }
  
  
  
  text("my formula",700,200)
  text("0.5*1000*40*40/22500",700,200+11)
  text("=35",700,211+13)
  
  
  
  
  
  
  drawSprites();
  
}