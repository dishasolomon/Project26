var render,engine,world;
var dustbin,paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(1200,650);
	paper = new Paper(200,270,10);
	ground = new Ground(width/2,670,1600,20);

	slingshot = new Slingshot(paper.body,{x: 200, y: 250});

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  }
	)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0,0,255);

  paper.display();
  ground.display();
  dustbin.display();

  slingshot.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-10});
	}
}

function mouseDragged(){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



