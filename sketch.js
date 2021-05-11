const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;
var chain;
var gameState = "on slingshot";

function preload() {
	
	dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(610, 463, 50, 200);
	dustbin2 = new Dustbin(400, 463, 50, 200);
	dustbin3 = new Dustbin(505.5, 583, 260, 50);
	ground = new Ground(200, 580, 3000, 50);
	paper = new Paper(65, 540, 75);
    rope =new Chain(paper.body,{x:200,y:200});
}


function draw() {
	background("red");
	Engine.update(engine);
	rectMode(CENTER);
	background(255);
	
	
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	rope.display();
	image(dustbinImg,505,430,200,238);

}

function mouseDragged(){
	//if(gameState!=="launched"){
	  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
	//}
  }
  
  function mouseReleased() 
  {
	rope.fly();
	//gameState = "launched";
  }
  
  function keyPressed() {
	if(keyCode === 32) {
		rope.attach(paper.body);
		//gameState = "on slingshot";
	}
  }
