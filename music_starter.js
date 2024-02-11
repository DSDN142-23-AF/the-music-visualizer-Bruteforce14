let firstRun = true;
let land;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 if (firstRun){
  rectMode(CENTER);
  land = loadImage('Newfoundland and Labrador.png');

  firstRun = false

 }
 
  background(87, 196, 255);
  fill(77, 70, 54);
  rect(0,600,width*2,height/4);
  image(land,0,0);
  textFont('Lobster'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
   // other bar is white
   let otherY = 500;
   let otherYP = otherY + other;
   let otherYN = otherY - other;
   strokeWeight(other/10);
   fill(0, 98, 122);
   beginShape();
   curveVertex(-50,700);
   curveVertex(-50,otherYP);
   curveVertex(0,otherYP);
   curveVertex(100,otherYN);
   curveVertex(200,otherYP);
   curveVertex(300,otherYN);
   curveVertex(400,otherYP);
   curveVertex(500,otherYN);
   curveVertex(600,otherYP);
   curveVertex(700,otherYN);
   curveVertex(800,otherYP);
   curveVertex(900,otherYN);
   curveVertex(1000,otherYP);
   curveVertex(1100,otherYN);
   curveVertex(1200,otherYP);
   curveVertex(1300,otherYN);
   curveVertex(1400,otherYP);
   curveVertex(1500,otherYN);
   curveVertex(1600,otherYP);
   curveVertex(1650,otherYP);
   curveVertex(1650,700);
   endShape(CLOSE);

   // bass bar is blue
   let bassY = 600;
   let bassYP = bassY - bass;
   let bassYN = bassY + bass;
   strokeWeight(bass/10);
   fill(1, 68, 84);
   rect(bar_pos_x-5, height / 2 + 4 * bar_spacing, width+50, bar_height+2*bass);
   beginShape();
   curveVertex(-50,800);
   curveVertex(-50,bassYP);
   curveVertex(75,bassYN);
   curveVertex(175,bassYP);
   curveVertex(275,bassYN);
   curveVertex(375,bassYP);
   curveVertex(475,bassYN);
   curveVertex(575,bassYP);
   curveVertex(675,bassYN);
   curveVertex(775,bassYP);
   curveVertex(875,bassYN);
   curveVertex(975,bassYP);
   curveVertex(1075,bassYN);
   curveVertex(1175,bassYP);
   curveVertex(1275,bassYN);
   curveVertex(1375,bassYP);
   curveVertex(1475,bassYN);
   curveVertex(1575,bassYP);
   curveVertex(1650,bassYP);
   curveVertex(1650,800);
   endShape(CLOSE);
    
   
   
   // drum bar is green
   let drumY = 700;
   let drumS = drum;
   let drumYP = drumY + drum;
   let drumYN = drumY - drumS;
   stroke(255);
   strokeWeight(drum/10);
   fill(0, 35, 43);
   beginShape();
   curveVertex(-50,900);
   curveVertex(-50,drumYP);
   curveVertex(0,drumYP);
   curveVertex(100,drumYN);
   curveVertex(200,drumYP);
   curveVertex(300,drumYN);
   curveVertex(400,drumYP);
   curveVertex(500,drumYN);
   curveVertex(600,drumYP);
   curveVertex(700,drumYN);
   curveVertex(800,drumYP);
   curveVertex(900,drumYN);
   curveVertex(1000,drumYP);
   curveVertex(1100,drumYN);
   curveVertex(1200,drumYP);
   curveVertex(1300,drumYN);
   curveVertex(1400,drumYP);
   curveVertex(1500,drumYN);
   curveVertex(1600,drumYP);
   curveVertex(1650,drumYP);
   curveVertex(1650,900);
   endShape(CLOSE);

 
   // display "words"
   strokeWeight(vocal/10);
   textAlign(CENTER);
   textSize(vocal);
   textFont('Lobster');
   text(words, width/2, height/5);
}

function drawSpray(x,y,inst){
   let morphdropY = []
   for(let i = 0; i <=dropStartY.length; i++ ){
   morphdropY[i] = map(6,  0 , 1, y+1, y+50)
   }
   let morphDropX = []
   for(let i = 0; i <=dropStartX.length; i++ ){
   morphDropX[i] = map(6,  0 , 1,x+1,x+10)
stroke(255);
fill(255);
beginShape();
curveVertex();
   }
}