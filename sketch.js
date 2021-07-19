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
rocket_Image = loadImage("rocket.png");

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
  rocket = createSprite(100,100,30,30);
  rocket.shapeColor = "grey";
  rocket.addImage(rocket_Image);

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
  text('Daniel', 100, 200);

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
    sky.y = 200;
  }
  sky.velocityY = 1;
  if (keyDown (UP_ARROW)){
    rocket.y -= 10;
  }
  if (keyDown (DOWN_ARROW)){
      rocket.y += 10;
  }
  if (keyDown (RIGHT_ARROW)){
    translate(200, 200);
    rotate(angle);
  }
  if (keyDown (LEFT_ARROW)){
          rocket.x -= 10;
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
    obstacle.velocityY = 5;
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

 