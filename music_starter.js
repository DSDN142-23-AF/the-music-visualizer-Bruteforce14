
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, width, bar_height+2*drum);
  
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, width, bar_height+2*bass);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}

function drawDrumwave(x,y,s,mStroke,mFill){
  stroke(mstroke)
  fill(mfill)
  strokeWeight(2)
  beginShape ();
  vertex(x-s/50*25,y+s/50*25);
  vertex(x-s/50*17,y+s/50*19);
  vertex(x+s/50*14,y-s/50*11);
  vertex(x+s/50*18,y-s/50*8);
  vertex(x+s/50*19,y-s/50*9);
  vertex(x+s/50*15,y-s/50*12);
  vertex(x+s/50*15,y-s/50*13);
  vertex(x+s/50*22,y-s/50*20);
  vertex(x+s/50*23,y-s/50*20);
  vertex(x+s/50*25,y-s/50*25);
  vertex(x+s/50*20,y-s/50*23);
  vertex(x+s/50*20,y-s/50*22);
  vertex(x+s/50*13,y-s/50*15);
  vertex(x+s/50*12,y-s/50*15);
  vertex(x+s/50*9,y-s/50*19);
  vertex(x+s/50*8,y-s/50*18);
  vertex(x+s/50*11,y-s/50*14);
  vertex(x-s/50*19,y+s/50*17);
  endShape(CLOSE);
}