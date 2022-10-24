function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  textSize(20)
  text("X:"+mouseX+" Y:"+mouseY,50,50)
  ellipse(0,0,400)//臉
  ellipse(0,0,200,100)//鼻子橢圓
  ellipse(-40,0,30)//左鼻孔
  ellipse(40,0,30)//右鼻孔
  ellipse(-80,-80,60)//左眼
  ellipse(80,-80,60)//右眼
  pop()

}
