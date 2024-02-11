let firstRun = true;
let land;
let sky;
let font;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 if (firstRun){
  rectMode(CENTER);
  land = loadImage('Newfoundland and Labrador.png'); // some coast line base on newfoundland and labrador
  sky = loadImage('Skybox.png'); // a gradient that represents the sunrise and sunset
  font = loadFont('Shrikhand-Regular.ttf')
  firstRun = false

 }
 let skyY = map(counter,0,song.duration(),0,4800) //moves the sky up so at the start of the song the sun rises and at the end it sets
 let eigth = song.duration()/8; // 1/8 the song duration for sunrise sun set

 let skyF = 255
 if (counter<eigth) {
   skyF = map(counter,0,eigth,0,255) // fades the light in from dark in the 1st 1/8th
 };
 if (counter>eigth*7){
   skyF=map(counter,eigth*7,song.duration(),255,0) // fades the light out to dark in the last 1/8th
};
 
  background(0);
  fill(77, 70, 54); // a brown colour that matches my drawn land
  image(sky,0,0-skyY);
  rect(0,600,width*2,height/4); //covers the bottom of the land 
  image(land,0,0);
  textFont(font);
  rectMode(CENTER)
  textSize(24);

 
   // other wave is the lightest blue close to the land
   let otherY = 500;
   let otherYP = otherY + other; // so half the crests move down with the beat
   let otherYN = otherY - other; // so half the crests move up with the beat
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

   if (other>75 && other<90){ // creates a little droplet at the crest of the high wave if the bass is between 75 and 90
      drawSpray(100,otherYN-20);
      drawSpray(300,otherYN-20);
      drawSpray(500,otherYN-20);
      drawSpray(700,otherYN-20);
      drawSpray(900,otherYN-20);
      drawSpray(1100,otherYN-20);
      drawSpray(1300,otherYN-20);
      drawSpray(1500,otherYN-20);

   } 

   // bass bar is blue
   let bassY = 600;
   let bassYP = bassY - bass; // so half the crests move up with the beat
   let bassYN = bassY + bass; // so half the crests move down with the beat
   strokeWeight(bass/10);
   fill(1, 68, 84);
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
    
   if (bass>65 && bass<90){ // creates a little droplet at the crest of the high wave if the bass is between 65 and 90
      drawSpray(175,bassYP-20);
      drawSpray(375,bassYP-20);
      drawSpray(575,bassYP-20);
      drawSpray(775,bassYP-20);
      drawSpray(975,bassYP-20);
      drawSpray(1175,bassYP-20);
      drawSpray(1375,bassYP-20);
      drawSpray(1575,bassYP-20);
   }
   
   // drum bar is green
   let drumY = 700;
   let drumS = drum;
   let drumYP = drumY + drum; // so half the crests move down with the beat
   let drumYN = drumY - drumS; // so half the crests move up with the beat
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

   if (drum>60 && drum<90){ // creates a little droplet at the crest of the high wave if the bass is between 60 and 90
      drawSpray(100,drumYN-20);
      drawSpray(300,drumYN-20);
      drawSpray(500,drumYN-20);
      drawSpray(700,drumYN-20);
      drawSpray(900,drumYN-20);
      drawSpray(1100,drumYN-20);
      drawSpray(1300,drumYN-20);
      drawSpray(1500,drumYN-20);

   } 
 
   // display "words"
   stroke(255);
   fill(0, 35, 43);
   strokeWeight(vocal/10);
   textAlign(CENTER);
   textSize(vocal);
   textFont(font);
   text(words, width/2, height/5);
   fill(0,0,26,255-skyF);
   strokeWeight(noStroke)
   rect(width/2,height/2,width,height)
}

function drawSpray(x,y){ // creates a little droplet to be placed at wave crests
let dropStartY=y; // was supposed to make the droplets move but didnt. didnt have time to remove as the variable is used now
let dropStartX=x;

   let morphDropY = 0;
   for(let i = 0; i <=dropStartY.length; i++ ){
   morphDropY = map(6,  0 , 1, y+1, y+50)
   }
   let morphDropX = 0;
   for(let i = 0; i <=dropStartX.length; i++ ){
   morphDropX = map(6,  0 , 1,x+1,x+10)
   }
strokeWeight(1);
stroke(255);
fill(255);
beginShape();
curveVertex(x+morphDropX,y+morphDropY+16);
curveVertex(x+morphDropX-2,y+morphDropY+14);
curveVertex(x+morphDropX-6,y+morphDropY-9);
curveVertex(x+morphDropX,y+morphDropY-16);
curveVertex(x+morphDropX+6,y+morphDropY-9);
curveVertex(x+morphDropX+2,y+morphDropY+14);
curveVertex(x+morphDropX,y+morphDropY+16);
endShape(CLOSE);

beginShape();
curveVertex(x+morphDropX-4,y+morphDropY+17);
curveVertex(x+morphDropX-6,y+morphDropY+16.5);
curveVertex(x+morphDropX-20,y+morphDropY+4);
curveVertex(x+morphDropX-20,y+morphDropY-3.5);
curveVertex(x+morphDropX-13.4,y+morphDropY-2.4);
curveVertex(x+morphDropX-3.5,y+morphDropY+15);
curveVertex(x+morphDropX-4,y+morphDropY+17);
endShape(CLOSE);

beginShape();
curveVertex(x+morphDropX+4,y+morphDropY+16.5);
curveVertex(x+morphDropX+3.5,y+morphDropY+14);
curveVertex(x+morphDropX+13,y+morphDropY-4.5);
curveVertex(x+morphDropX+21,y+morphDropY-6);
curveVertex(x+morphDropX+22,y+morphDropY+1.5);
curveVertex(x+morphDropX+6,y+morphDropY+16);
curveVertex(x+morphDropX+4,y+morphDropY+16.5);
endShape(CLOSE);
   }
