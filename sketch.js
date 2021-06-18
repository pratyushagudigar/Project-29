const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygon_img;
var ground;
var stand,stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, 
block14, block15, block16 , block17, block18; 
var slingShot;

function preload(){

    polygon_img = loadImage("polygon.png");
}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(700,300,250,20);
    stand2 = new Ground(1000,190,250,20);

    block1 = new Block(700,270,40,40);
    block2 = new Block(660,270,40,40);
    block3 = new Block(620,270,40,40);
    block4 = new Block(740,270,40,40);
    block5 = new Block(780,270,40,40);
    block6 = new Block(740,230,40,40);
    block7 = new Block(700,230,40,40);
    block8 = new Block(660,230,40,40);
    block9 = new Block(700,190,40,40);

    block10 = new Block(1000,160,40,40);
    block11 = new Block(960,160,40,40);
    block12 = new Block(920,160,40,40);
    block13 = new Block(1040,160,40,40);
    block14 = new Block(1080,160,40,40);
    block15 = new Block(1000,120,40,40);
    block16 = new Block(960,120,40,40);
    block17 = new Block(1040,120,40,40);
    block18 = new Block(1000,80,40,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

 slingShot = new SlingShot(this.polygon,{x:100,y:200});
 

}
function draw(){
    background(0);
    Engine.update(engine);

textSize(27);
fill("orange");
text("Drag the hexagonal stone and release it, to launch towards the blocks",200,50);

    ground.display();
    stand.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
 
 image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
 imageMode(CENTER);
 
 slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
   // Matter.Body.applyForce(polygon.body,polygon.body.position, {x: 700,y: -20});

}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}
