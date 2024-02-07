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
  rect(0,3*height/4,width*2,height/4);
  image(land,0,100);
  textFont('Lobster'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

   // drum bar is green
   stroke(255);
   strokeWeight(drum/10);
   fill(0, 35, 43);
   beginShape();
   curveVertex();
   endShape(CLOSE);
   rect(bar_pos_x-5, height / 2 + 3 * bar_spacing, width+50, bar_height+2*drum);
  
 
   // bass bar is blue
   strokeWeight(bass/10);
   fill(1, 68, 84);
   rect(bar_pos_x-5, height / 2 + 4 * bar_spacing, width+50, bar_height+2*bass);

 
   // other bar is white
   strokeWeight(other/10);
   fill(0, 98, 122);
   rect(bar_pos_x-5, height / 2 + 5 * bar_spacing, width+50, bar_height+2*other);

 
   // display "words"
   strokeWeight(vocal/10);
   textAlign(CENTER);
   textSize(vocal);
   textFont('Lobster');
   text(words, width/2, height/3);
}


