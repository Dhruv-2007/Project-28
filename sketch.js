const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;

function preload(){
	boyImg = loadImage("boy.png");
	backgroundImg = loadImage("background.jpg");
}

function setup(){
	createCanvas(1350, 600);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(190,490);
	boy.addImage(boyImg);
	boy.scale = 0.4;

	tree = new Tree(900,350,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(900,250,25);
	mango2 = new Mango(800,200,25);
	mango3 = new Mango(800,280,25);
	mango4 = new Mango(1000,250,25);
	mango5 = new Mango(670,300,25);
        mango6 = new Mango(700,200,25);

	stone = new Stone(240,500,25);

	slingshot = new Sling(stone.body,{x:240,y:470});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  background(backgroundImg);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();

  slingshot.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  drawSprites();

  textSize(30);
  fill("cyan");
  stroke("black");
  strokeWeight(6);
  text("Press Space for another try!",200,50);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function detectCollision(body1,body2){
	mangoBodyPosition=body2.body.position
	stoneBodyPosition=body1.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=body2.r+body1.r){
		Matter.Body.setStatic(body2.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:240,y:470})
		slingshot.attach(stone.body);
	}
}
