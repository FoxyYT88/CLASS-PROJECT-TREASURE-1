var path,boy,cash,diamonds,jewelry,sword,ded;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg,dedImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.gif");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  dedImg = loadImage("gameOver.png")
  
}

function setup(){
  
  createCanvas(400,580);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
ded = createSprite(200,290,50,50)
ded.addImage(dedImg)

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.7;
boy.setCollider("rectangle",0,0,80,80)
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  ded.visible = false;

  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/10;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        ded.visible = true;
       
        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
        // cashG.destroyEach();
        // diamondsG.destroyEach();
        // jewelryG.destroyEach();
        // swordGroup.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        if(gameState===END){ 
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        cashG.lifetime=-1
        diamondsG.lifetime=-1
        jewelryG.lifetime=-1
        swordGroup.lifetime=-1
      }

        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("RINGS: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.2;
  cash.velocityY = 3;
  cash.lifetime = 180;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.2;
  diamonds.velocityY = 3;
  diamonds.lifetime = 180;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.2;
  jewelry.velocityY = 3;
  jewelry.lifetime = 180;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.3;
  sword.velocityY = 3;
  sword.lifetime = 180;
  swordGroup.add(sword);
  }
}
