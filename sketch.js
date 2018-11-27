var value = 0;
var X;
var Y;
var Z;
var R;
var w=0;
var h=0;
var ww ;
var wh;




function setup() {

  createCanvas(windowWidth, windowHeight);


}





function draw() {
  ww = windowWidth;
  wh = windowHeight;
  X = random(0,windowWidth);
  Y = random(0,windowWidth);
  Z = random(0,windowWidth);
  R = random(0,11);
  background(X,Z,Y);


  fill(100);
  triangle(X, X/R, Y, Y/X, Z, Z*R);
  triangle(Z, Z/R, Y, Y/Z, X,X*R);
	ellipse(X*R,Y/R,Z-R,Z);
  ellipse(Z*R,X/R,Y-R,Y);

  if(keyCode === DELETE){

    noLoop();
    }
if(mouseIsPressed){
	fill('#000000');
  textSize(50);

  text('"DELETE"',ww/(3.5),wh/2,ww,wh);

}

  //keyTyped when to pused???
  //change random to mouse X,Y??
  //a way to stop and restart the image??
  //a way to clear it all.
  // use if and else to kill the image
}

function mousePressed(){
   fill(100);
    background(100);
    fill(X,Y,Z);
  text('Good Night',ww/2,wh/2,ww,wh);

}
function keyPressed(){
   if(key==='t'){
    background('#000000');
  }
}
