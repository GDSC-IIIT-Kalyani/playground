function setup() {
  createCanvas(400, 400);
}

let score=0;
let x=10,y=10,w=13,h=18;
function draw() 
{
  background(220);
  
  textSize(30);
  fill(100,0,0)
  text(score,330,10, 70, 80);
  
  fill(100,0,190)
  ellipse(x, y, w, h)
  
  fill(0,30,0)
   rect(mouseX-20,350,50)
  
  y=y+2;
  if(y>380)
    {
    y=0;
      if(abs(mouseX-x)<=40)
        score=score+1;
      
    x=random(400)
      
    }
}
