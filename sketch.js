var spaceImg, space;
var asteroidImg, asteroid, asteroidsGroup;
var rocket, rocketImg;
var gem1, gem2, gem3, gem4;
var gem1Image, gem2Image, gem3Image, gem4Image;
var gemsGroup;
var gameState = "play";
var score = 0;
function preload(){
  spaceImg = loadImage("bg.jpeg");
  asteroidImg = loadImage("as.png");
  rocketImg = loadImage("rocket.png");
  gem1Image = loadImage("gem1.png");
  gem2Image = loadImage("gem2.png");
  gem3Image = loadImage("gem3.png");
  gem4Image = loadImage("gem4.png");
  spaceSound = loadSound("062864_ese-24142.mp3");
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  rocket = createSprite(200, 200, 50, 50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);
  asteroidsGroup = new Group();
  gemsGroup = new Group();
  }


function draw() {
  background(200);
  console.log("INFINITE RUNNER GAME"); 
  if (gameState === "play"){
    if (keyDown("LEFT_ARROW")){
      rocket.x = rocket.x - 4;
    }
    if(keyDown("RIGHT_ARROW")){
      rocket.x = ghost.x + 4;
    }
    if (keyDown("enter")){
        spaceSound.play();
        rocket.velocityY = rocket.velocityY + 2;
    }
    rocket.velocityY = rocket.velocityY - 2;
    if (keyDown("space")){
      rocket.velocityY = -12;
    }
    ghost.velocityY = ghost.velocityY + 0.9;
    if(space.y > 450){
      space.y = 300
    }
    spawnAsteroids();
    spawnGems()
    if (asteroidsGroup.isTouching(rocket)){
      rocket.velocityY = 0;
      gameState = "end";
    }
    if (gemsGroup.isTouching(rocket)){
        score = score + 1;
        text("SCORE :- "+score,300, 20)
    }
    if (rocket.y >= 580){
        gameState = "end";
    }
    drawSprites();8
  if (gameState === "end"){
    fill("magenta");
    stroke("blue");
    textSize(50);
    text("GAME OVER", 300, 300);
  }
}
}
function spawnAsteroids(){
    if (frameCount %180 === 0){
      asteroid = createSprite(260, 39);
      asteroid.x = Math.round(random(140, 430));
      asteroid.addImage(asteroidImage);
      obstacle.velocityY = 1;
      asteroid.lifeTime = 870;
      asteroidsGroup.add(asteroid);
    }
  }
  function spawnGems(){
    if (frameCount %180 === 0){
      gem1 = createSprite(260, 39);
      gem2 = createSprite(220, 49);
      gem3 = createSprite(210, 59);
      gem4 = createSprite(290, 89);
      gem1.x = Math.round(random(140, 430));
      gem2.x = Math.round(random(140, 430));
      gem3.x = Math.round(random(140, 430));
      gem4.x = Math.round(random(140, 430));
      gem1.addImage(gem1Image);
      gem2.addImage(gem2Image);
      gem3.addImage(gem3Image);
      gem4.addImage(gem4Image);
      gem1.lifeTime = 870;
      gem2.lifeTime = 870;
      gem3.lifeTime = 870;
      gem4.lifeTime = 870;
      gemsGroup.add(gem1);
      gemsGroup.add(gem2);
      gemsGroup.add(gem3);
      gemsGroup.add(gem4);
    }
  }