function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background('black');
  angleMode(DEGREES);
  frameRate(12);

  //tutorial
  mouseval = false;
  textSize(32)
  textAlign(CENTER)
  fill('white')
  text("Click to grow",width/2,height/4);

  //gambo
  noFill()
  stroke('green')
  strokeWeight(50)
  let c1x = width/2-width/7;
  let c1y = height/2+height/4;
  let c2x = width/2-width/12;
  let c2y = height/2+height/12;
  bezier(width/2-width/9,height+5,c1x,c1y,c2x,c2y,width/2,height/2);

  noStroke();
  fill('white');
  ellipse(width/2,height/2,100);
}


function draw() {

  if (mouseIsPressed && mouseval === false){
    fill('black')
    rectMode(CENTER)
    rect(width/2,height/4, 600,200)
    mouseval = true;
  }

  let nmax = 100; //max width of piumetta
  let n = noise((frameCount+random(0,1)))*nmax;

  if (mouseIsPressed) {
    //gambetto
    stroke('white');
    strokeWeight(1);
    line(width/2,height/2,mouseX,mouseY);
    //piumetta
    noStroke();
    //noFill();
    fill('rgba(255,255,255,0.6)')
    strokeWeight(4);
    ellipse(mouseX,mouseY,n);}
}
