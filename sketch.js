
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dground,tree,treeImg;
var boy, boyImg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1100, 650);


	engine = Engine.create();
	world = engine.world;

	dground = new Ground();
	stones = new Stone(100,460,50);
	mango1 = new Mango(600,290,42);
	mango2 = new Mango(855,325,42);
	mango3 = new Mango(670,250,42);
	mango4 = new Mango(730,200,42);
	mango5 = new Mango(710,320,42);
	mango6 = new Mango(700,250,42);
	mango7 = new Mango(825,170,42);
	mango8 = new Mango(800,260,42);
	mango9 = new Mango(940,220,42);
	mango10 = new Mango(980,305,42);

	attach= new Throw(stones.body,{x:100,y:465});

	tree = createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale = 0.125;

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(135,206,235));

  fill("black");
  textSize(18);


  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

}
function mouseDragged(){
    Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	attach.fly();
}
function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.launch(stones.body);
	}
}



