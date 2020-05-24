const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygonimg;
var backimg;
function preload(){
  polygonimg=loadImage("polygon.png");
  backimg=loadImage("space.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  block1 = new Block(300,275,30,50);
  block2 = new Block(330,275,30,50);
  block3 = new Block(360,275,30,50);
  block4 = new Block(390,275,30,50);
  block5 = new Block(420,275,30,50);
  block6 = new Block(450,275,30,50);
  block7 = new Block(480,275,30,50);
  block8 = new Block(330,235,30,50);
  block9 = new Block(360,235,30,50);
  block10 = new Block(390,235,30,50);
  block11 = new Block(420,235,30,50);
  block12 = new Block(450,235,30,50);
  block13 = new Block(360,195,30,50);
  block14 = new Block(390,195,30,50);
  block15 = new Block(420,195,30,50);
  block16 = new Block(390,155,30,50);
  blocks1 = new Block(640,175,30,50);
  blocks2 = new Block(670,175,30,50);
  blocks3 = new Block(700,175,30,50);
  blocks4 = new Block(730,175,30,50);
  blocks5 = new Block(760,175,30,50);
  blocks6 = new Block(670,135,30,50);
  blocks7 = new Block(700,135,30,50);
  blocks8 = new Block(730,135,30,50);
  blocks9 = new Block(700,95,30,50);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(backimg); 
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(5);
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("yellow");
  block13.display();
  block14.display();
  block15.display();
  fill("turquoise");
  block16.display();
  fill("blue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("yellow");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("red")
  blocks9.display();
  fill("green");

  imageMode(CENTER)
  image(polygonimg ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}