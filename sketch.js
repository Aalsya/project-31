
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particle = [];
var plinkos = [];
var divisions = [];
var divh = 300; 

function setup() {
  createCanvas(480, 800);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new platform(240, 790, 480, 20);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  frameRate(100);

  ground.display();

  if (frameCount % 10 === 0) {
    particle.push(new pingpong(random(width/2-10, width/2+10), 10));
  }
  for (var j = 0; j < particle.length; j++) {
    particle[j].display();
  }

  for (var k = 0; k <= width; k=k+80) {
	divisions.push(new bars(k, height-divh/2, 10, divh));
  } for (var k = 0; k < divisions.length; k++) {
	  divisions[k].display();
  }

  for (var i = 50; i <= width; i=i+50) {
	  plinkos.push(new block(i, 100));
  } for (var i = 0; i < plinkos.length; i++) {
	  plinkos[i].display();
  }
  for (var i = 25; i <=width-10; i=i+50) {
	  plinkos.push(new block(i, 150));
  }

  for (var i = 50; i <= width; i=i+50) {
    plinkos.push(new block(i, 200));
  } for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var i = 25; i <=width-10; i=i+50) {
    plinkos.push(new block(i, 250));
  } for (var i = 0; i < plinkos.length; i=i+50) {
    plinkos[i].display();
  }

  for (var i = 50; i <= width; i=i+50) {
    plinkos.push(new block(i, 300));
  } for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var i = 25; i <=width-10; i=i+50) {
    plinkos.push(new block(i, 350));
  } for (var i = 0; i < plinkos.length; i=i+50) {
    plinkos[i].display();
  }

  for (var i = 50; i <= width; i=i+50) {
    plinkos.push(new block(i, 400));
  } for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var i = 25; i <=width-10; i=i+50) {
    plinkos.push(new block(i, 450));
  } for (var i = 0; i < plinkos.length; i=i+50) {
    plinkos[i].display();
  }
}