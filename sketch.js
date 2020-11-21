
var monkey , monkey_running
var banana ,bananaImage,obstacleImage
var FoodGroup, obstacleGroup
var score = 0 ;
var gameState = "play";
var gameover ; 
var gameoverImg;
var ground ;
var bananascore = 0 ; 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  gameoverImg = loadImage("over.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,350,20,20);
  monkey.addAnimation( "monkeywalking",monkey_running);
  monkey.scale = 0.15;
  
  gameover = createSprite(200,200,10,10);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.2;
  gameover.visible = false ;
  
  ground = createSprite(200,400,400,5);
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  

  
}


function draw() {
  background(220);
  
  if (gameState === "play"){
    score = score + Math.round(getFrameRate()/60);
     spawnbanana();
     spawnObstacle();
    if(keyDown("space") && monkey.y>200){
    monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY +0.8;
  }
  
  if (monkey.isTouching(foodGroup)){
    bananascore = bananascore + 1 ;
    foodGroup.destroyEach();
  }
  if (monkey.isTouching(obstacleGroup)){
    gameState = "end";
  }
  
  if (gameState === "end"){
    ground.velocityX =0;
    monkey.velocityY = 0;
    obstacleGroup.destroyEach();
    foodGroup.destroyEach();
    
    monkey.visible = false;
    gameover.visible = true;
  
    
   
  }
  
  
  monkey.collide(ground)
  
 
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE :  " + score,250,50);  
  stroke("white");
  textSize(20);
  fill("white");
  text("BANANA :  " + bananascore,25,50);
}

function spawnObstacle(){
  
  if ( frameCount % 60 === 0 ){
  var obstacle = createSprite(400,370,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -6;
  obstacle.lifetime = 70;
  obstacle.scale = 0.15;
  obstacleGroup.add(obstacle);
  }
  }
function spawnbanana (){
  if(frameCount % 60 === 0){
    var banana = createSprite(600,Math.round(random (120,250)), 20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -10;
    banana.lifetime = 100;
  
    foodGroup.add(banana);
  }}




