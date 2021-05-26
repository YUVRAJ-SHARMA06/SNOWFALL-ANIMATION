const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, snow1,snow2,snow3,snow4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var snowCreatedFrame=0;
var bgImg;

function setup(){
    createCanvas(430,430);
    
    engine = Engine.create();
    world = engine.world;

    bgImg = loadImage("sprites/snow1.jpg");
    

    //creating drops
    if(frameCount % 5000 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new snowflake(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    
    background(bgImg); 
    Engine.update(engine);
    //creating thunder
    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();
    
}