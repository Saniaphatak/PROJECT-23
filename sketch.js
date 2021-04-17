//create variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//load the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//defining the package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	//defining the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//defining the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//create package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //positioning the dropbox
 	boxPosition=width/2-100
 	boxY=610;

	// define and create leftside of the dropbox
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

	 // define and create base of the dropbox
 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

	// define and create rightside of the dropbox
 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //positioning packagaeBody with packageSprite
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //move the helicopter and package with left arrow
  if(keyCode == LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x-10;
	  Matter.Body.translate(packageBody, {x:-10,y:0});
  }
  //move the helicopter and package with right arrow
  if(keyCode == RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+10;
	Matter.Body.translate(packageBody, {x:10,y:0});
}
//drop the package with down key
if(keyCode == DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
}
  
  drawSprites();
  
  
 
}
