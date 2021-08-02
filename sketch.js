var start = 0;
var LEVEL1 = 1;
var LEVEL2 = 2;
var LEVEL3 = 3;
var end = 4;

var gameState = 0;

var obstacle;
var rocket, rocketAnimation
var background_Image
var sky, sky_Image

var score = 0;
let angle = 0;


var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7;


function preload(){
background_Image = loadImage("background_Space.jpg");
rocket_Still = loadAnimation("spacecraft1.png");
rocket_Move = loadAnimation("spacecraft2.png");
rocket_Right = loadAnimation("spacecraft3.png");
rocket_Left = loadAnimation("spacecraft4.png");
obstacle1 = loadImage("1.png")
obstacle2 = loadImage("2.png")
obstacle3 = loadImage("3.png")
obstacle4 = loadImage("4.png")
obstacle5 = loadImage("5.png")
obstacle6 = loadImage("6.png")
obstacle7 = loadImage("7.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight-111);
  rocket = createSprite(displayWidth/2,displayHeight/2,30,30);
  rocket.shapeColor = "grey";
  rocket.addAnimation("still", rocket_Still);
  rocket.addAnimation("move", rocket_Move);
  rocket.addAnimation("right", rocket_Right);
  rocket.addAnimation("left", rocket_Left);
  rocket.scale = 0.4

  sky = createSprite(1100,500,displayWidth,displayHeight);
  sky.addImage(background_Image);
  sky.scale = 1;

  let color1 = color(17, 255, 0);

  angleMode(RADIANS);

  //create the button for the start level
  start = createButton("Start");
  start.position(300,200);
  start.style('background-color', color1);
  start.style('font-size', '40px');
  start.style('font-family', 'Architects Daughter');
  start.style('border-radius','40px');
  start.style('border-width','10px');
  start.style('border-color','white');
  start.style('border-style','outset double outset double');

  obstacleGroup = new Group();



}

function draw() {
background(0);

if(gameState === 0){
  background(0);
  //display the game name
  strokeWeight(5);
  stroke("blue");
  textSize(100);
  textFont('Architects Daughter');
  fill("pink");
  text('Asterioid Escape', 700 , 200);

  strokeWeight(5);
  stroke("white");
  textSize(20);
  textFont('Verdana');
  fill("black")
  text('Instructions: 1. Use the arrow keys to initiate speed change on all axis', 700, 300)
  text('2. Press "Space" to stop and start engine ', 700, 400)
  text('3. Pass 10 obstacles without coliding to reach the next level', 700, 500)
  sky.visible = false;
  rocket.visible = false;
 
  
  start.mousePressed(()=>{
    gameState = 1;
  })


}

if(gameState === 1){
  start.hide();
  sky.visible = true;
  rocket.visible = true;
  
  
  
  
  if(obstacleGroup.y < rocket.y){
    score++
  }

  fill('white');
  textSize(50);
  text("Score: " + score, 100, 300)

  

  if(sky.y > displayHeight){
    sky.y = displayHeight/2;

  }
  if(sky.y < 0){
    sky.y = displayHeight/2;
  }
  if(sky.x > displayWidth){
    sky.x = displayWidth/2;
    
  }
  if(sky.x < 0){
    sky.x = displayWidth/2;
    
  }
  
  if (keyDown (UP_ARROW)){
    sky.velocityY += 0.1;
    rocket.changeAnimation("move", rocket_Move);
    //obstacleGroup.setVelocityYEach(sky.velocityY);
  }
 
  if (keyDown (DOWN_ARROW)){
    sky.velocityY -= 0.1;
    rocket.changeAnimation("still", rocket_Still);
    //obstacleGroup.setVelocityYEach(sky.velocityY);
  }
  if (keyDown (RIGHT_ARROW)){
        sky.velocityX -= 0.1;
        rocket.changeAnimation("right", rocket_Right);
        //obstacleGroup.setVelocityXEach(sky.velocityX);
  }
  if (keyDown (LEFT_ARROW)){
      sky.velocityX += 0.1;
      rocket.changeAnimation("left", rocket_Left);
      //obstacleGroup.setVelocityXEach(sky.velocityX);
  }
  rocket.depth = rocket.depth + 1;
  
  createAsteroid();
}

/*
if(gameState === 2){
  sky.velocityY = 2;
  if (keyDown (UP_ARROW)){
    rocket.y -= 10;
    }
    
  if (keyDown (DOWN_ARROW)){
      rocket.y += 10;
      }
  if (keyDown (RIGHT_ARROW)){
        rocket.x += 10;
      }
  if (keyDown (LEFT_ARROW)){
          rocket.x -= 10;
      }
}

if(gameState === 3){
  sky.velocityY = 4;
  if (keyDown (UP_ARROW)){
    rocket.y -= 10;
    }
    
  if (keyDown (DOWN_ARROW)){
      rocket.y += 10;
      }
  if (keyDown (RIGHT_ARROW)){
        rocket.x += 10;
      }
  if (keyDown (LEFT_ARROW)){
          rocket.x -= 10;
      }
}



if(sky.y > displayHeight){
  sky.y = 200;
}

if (keyDown (UP_ARROW)){
rocket.y -= 10;
}

if (keyDown (DOWN_ARROW)){
  rocket.y += 10;
  }
if (keyDown (RIGHT_ARROW)){
    rocket.x += 10;
  }
if (keyDown (LEFT_ARROW)){
      rocket.x -= 10;
  }
*/


 
drawSprites();
}


function createAsteroid(){
  if(frameCount % 60 === 0){
    obstacle = createSprite(300, -50);
    obstacle.veloctiyY = 15;
    obstacle.x = Math.round(random(60, 1900))

    var rand = Math.round(random(1,6));

    switch(rand){
    case 1: obstacle.addImage(obstacle1);
    break;
    case 2: obstacle.addImage(obstacle2);
    break;
    case 3: obstacle.addImage(obstacle3);
    break;
    case 4: obstacle.addImage(obstacle4);
    break;
    case 5: obstacle.addImage(obstacle5);
    break;
    case 6: obstacle.addImage(obstacle6);
    break;
    case 7: obstacle.addImage(obstacle7);
    break;
    default: break;      
    }
    obstacle.scale = 0.4;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}

 