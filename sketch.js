const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    //step 3//

    //Position Bird and slingshot so that they come over 
    //at proper position
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



 //Step 1//
        //3 images are added to sprites directory to use them
        //to create catapult
        //As catapult doesnt interact with any object in the game
        //So we can keep it static 
        //We don't need to create body for this
        //load all images using loadImage and image()
        //function in p5.js
        

//step2//
        //place image in game using 
        //image() function in p5.js
        //check Teacher Activity 2

//step 3//

    //Position Bird and slingshot so that they come over 
    //at proper position

//step 4//

    //Give color to the lines of rubber band from 2 ends of cata pult

//step5//

    //line 1 drawn from one end of catapult to behind the bird


 //step 6//
    
        //The base of rubberband will still be behind the bird
        //even when the bird is pulled forward
        //Hence we have to use different lines at different end points
        //depending on the position of bird
        //with respect to catapult