const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ground;
var stand1,stand2;
var polygon;
var slingshot;
var polyImg;

function preload(){
  polyImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(710,200,250,10);
   
  //level one
  blocka1 = new Block(300,275,30,40);
  blocka2 = new Block(330,275,30,40);
  blocka3 = new Block(360,275,30,40);
  blocka4 = new Block(390,275,30,40);
  blocka5 = new Block(420,275,30,40);
  blocka6 = new Block(450,275,30,40);
  blocka7 = new Block(480,275,30,40);
  //level two
  blocka8 = new Block(330,235,30,40);
  blocka9 = new Block(360,235,30,40);
  blocka10 = new Block(390,235,30,40);
  blocka11 = new Block(420,235,30,40);
  blocka12 = new Block(450,235,30,40);
  //level three
  blocka13 = new Block(360,195,30,40);
  blocka14 = new Block(390,195,30,40);
  blocka15 = new Block(420,195,30,40);
  //level four
  blocka16 = new Block(390,155,30,40);

  //level one
  blockb1 = new Block(620,175,30,40);
  blockb2 = new Block(650,175,30,40);
  blockb3 = new Block(680,175,30,40);
  blockb4 = new Block(710,175,30,40);
  blockb5 = new Block(740,175,30,40);
  blockb6 = new Block(770,175,30,40);
  blockb7 = new Block(800,175,30,40);
  //level two
  blockb8 = new Block(650,135,30,40);
  blockb9 = new Block(680,135,30,40);
  blockb10 = new Block(710,135,30,40);
  blockb11 = new Block(740,135,30,40);
  blockb12 = new Block(770,135,30,40);
  //level three
  blockb13 = new Block(680,95,30,40);
  blockb14 = new Block(710,95,30,40);
  blockb15 = new Block(740,95,30,40);
  //level four
  blockb16 = new Block(710,55,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(polygon, {x:200, y:200});
}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");  

  ground.display();
  stand1.display();  
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  fill("skyblue");
  blocka1.display();
  blocka2.display();
  blocka3.display();
  blocka4.display();
  blocka5.display();
  blocka6.display();
  blocka7.display();
  fill("pink");
  blocka8.display();
  blocka9.display();
  blocka10.display();
  blocka11.display();
  blocka12.display();
  fill("turquoise");
  blocka13.display();
  blocka14.display();
  blocka15.display();
  fill("grey");
  blocka16.display();

  fill("skyblue");
  blockb1.display();
  blockb2.display();
  blockb3.display();
  blockb4.display();
  blockb5.display();
  blockb6.display();
  blockb7.display();
  fill("pink");
  blockb8.display();
  blockb9.display();
  blockb10.display();
  blockb11.display();
  blockb12.display();
  fill("turquoise");
  blockb13.display();
  blockb14.display();
  blockb15.display();
  fill("grey");
  blockb16.display();

  slingShot.display();

  imageMode(CENTER);
  image(polyImg, polygon.position.x, polygon.position.y, 40, 40);
  
  drawSprites;
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
