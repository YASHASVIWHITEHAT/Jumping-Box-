var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //create 4 different surfaces
    gameObject1 = createSprite(550,500,100,30);
    gameObject1.shapeColor = "green";
    gameObject2 = createSprite(390,500,100,30);
    gameObject2.shapeColor = "red";
    gameObject3 = createSprite(250,500,100,30);
    gameObject3.shapeColor = "purple";
    gameObject4 = createSprite(100,500,100,30);
    gameObject4.shapeColor = "blue";
    



    //create box sprite and give velocity
    whiteBox= createSprite(random(20,750),450,50,50)
    whiteBox.shapeColor = "white";
    whiteBox.velocityY = 4;
    whiteBox.velocityX = 5;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    whiteBox.bounceOff(edges)
    if(gameObject1.isTouching(whiteBox) && whiteBox.bounceOff(gameObject1)){
        whiteBox.shapeColor="green";    
        music.play();
    }
    if(gameObject2.isTouching(whiteBox) && whiteBox.bounceOff(gameObject2)){
        whiteBox.shapeColor="blue";
        music.play();
    }
    if(gameObject3.isTouching(whiteBox) && whiteBox.bounceOff(gameObject3)){
        whiteBox.shapeColor="red";
        music.play();
    }
    if(gameObject4.isTouching(whiteBox) && whiteBox.bounceOff(gameObject4)){
        whiteBox.shapeColor="yellow";
        music.play();
    }

   drawSprites()

    //add condition to check if box touching surface and make it box
}
