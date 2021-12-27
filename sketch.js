var birdImg,bird
var gunImg,gun
var bulletImg,bullet
var targetImg,target
var pigeon,pigeonImg
var sparrow,sparrowImg
var birdGroup
var pigeonGroup
var sparrowGroup
var bulletGroup


var score=0;

function preload() {
  birdImg=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png","bird9.png","bird10.png",)
  gunImg=loadImage("gun.png")
  bulletImg=loadImage("bullet.png")
  target=loadImage("target.jpeg")
  pigeonImg=loadAnimation("pigeon.png","pigeon2.png","pigeon3.png","pigeon4.png","pigeon5.png","pigeon6.png","pigeon7.png","pigeon8.png")
  sparrowImg=loadAnimation("sparrow1.png","sparrow2.png","sparrow3.png","sparrow4.png","sparrow5.png","sparrow6.png","sparrow7.png","sparrow8.png",)
}

function setup() {
  createCanvas(2000,800);
  bird=createSprite(1600, 200, 50, 50);
  bird.addAnimation("bird",birdImg)
  gun=createSprite(200,350,50,50)
  gun.scale=0.5;
  gun.addImage("gun",gunImg)
  birdGroup=new Group();
pigeonGroup=new Group();
sparrowGroup=new Group();
bulletGroup=new Group();
  

}

function draw() {
  background(255,255,255);
  //background.addImage("target",targetImg)
  gun.y=mouseY
  text("Score: "+ score, 500,50);
  //if(bullet.isTouching(birdGroup)) {
   //  score+1
  //}
  // if(bullet.isTouching(pigeonGroup)) {
  //   score+2
  // }
  // if(bullet.isTouching(sparrowGroup)){
  //   score+3
  //   console.log("hey")
  // }
   

  spawnBirds();
  spawnPigeon();
  spawnSparrow();
 //Score();
  drawSprites();
}
function keyPressed(){
  if(keyCode===32) {
    bullet=createSprite(380,300,50,50)
    bullet.addImage("bullet",bulletImg)
    bullet.scale=0.3;
    bullet.velocityX=7
    bullet.y=gun.y
    bulletGroup.add(bullet);
}
}
function spawnBirds(){
if(frameCount % 60 === 0) {
  bird=createSprite(1600, 200, 50, 50);
  bird.addAnimation("bird",birdImg)
  if(bullet.isTouching(bird)){
    score+=1
  }
  bird.velocityX=random(-1,-10)
bird.velocityY=random(7,-9)
console.log(bird)
console.log(bird.velocityX)
console.log(bird.velocityY)
birdGroup.add(bird);
}

}
function spawnPigeon(){
  if(frameCount % 70 === 0) {
    pigeon=createSprite(1600, 200, 50, 50);
    pigeon.addAnimation("pigeon",pigeonImg)
    pigeon.velocityX=random(-1,-10)
  pigeon.velocityY=random(7,-9)
  console.log(pigeon)
  console.log(pigeon.velocityX)
  console.log(pigeon.velocityY)
  pigeonGroup.add(pigeon);
}
}
function spawnSparrow(){
  if(frameCount % 80 === 0) {
    sparrow=createSprite(1600, 200, 50, 50);
    sparrow.addAnimation("sparrow",sparrowImg)
    sparrow.velocityX=random(-1,-10)
  sparrow.velocityY=random(7,-9)
  sparrowGroup.add(sparrow);
}
}


