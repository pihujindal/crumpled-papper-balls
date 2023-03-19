const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1,button2

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(650,570,1300,20);
  right = new Ground(1100,485,20,150);
  left = new Ground(850,485,20,150);

 


  var balloptions={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball=Bodies.circle(200,100,20,balloptions)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  ground.show();
  
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:75,y:-85})  }
}

