const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella_man;
var thunder;

function preload(){
    thun1 = loadImage("images/thunderbolt/1.png");
    thun2 = loadImage("images/thunderbolt/2.png");
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    
    engine = Engine.create();
    world = engine.world;

    umbrella_man = new Umbrella(windowWidth/2, windowHeight-windowHeight/3);
}

function draw(){
    Engine.update(engine);

    background(0);

    umbrella_man.display();

    for(var i=0; i<maxDrops; i++){ 
        drops.push(new Drop(random(0,windowWidth), random(0,windowHeight)));
    } 
    
    //console.log(drops[1].body.position.y);

    for(var s=0; s<maxDrops; s++){
        drops[s].display(); 
        drops[s].rePos(); 
        //console.log(drops[s]);
    }

    rand = Math.round(random(1,4));

    if(frameCount%50===0){
        thunderFramePeriod = frameCount;
        thunder = createSprite(random(0, windowWidth), 50, 10, 10);
        switch(rand){
            case 1: thunder.addImage(thun1);
            break;
            case 2: thunder.addImage(thun2);
            break;
            default:break;
        }
        thunder.scale = random(0.3, 0.6);
    }
    if(frameCount%62===0){
        thunder.destroy();
    }

    drawSprites();
} 