function setup() {
  createCanvas(800, 800); 
  // Sem o noLoop() para a animação do shake funcionar continuamente
  frameRate(12); // Reduzimos os frames por segundo para o tremor ser mais suave
}

function draw() {
  background(255); 
  
  let white = color(245, 245, 240);
  let red = color(238, 36, 0);      // Voltou à cor original sem o random
  let yellow = color(253, 219, 0);  
  let blue = color(32, 27, 113);    

  noStroke(); 
  
  fill(red);
  rect(0, 0, 360, 320); 
  
  fill(white);
  rect(360, 0, 440, 320);
  
  fill(white);
  rect(0, 320, 360, 200);
  
  fill(white);
  rect(360, 320, 440, 200);
  
  fill(yellow);
  rect(0, 520, 80, 280);
  
  fill(white);
  rect(80, 520, 280, 280);
  
  fill(blue);
  rect(360, 520, 240, 220);
  
  fill(white);
  rect(360, 740, 240, 60);
  
  fill(white);
  rect(600, 520, 200, 280);

  stroke(0);            
  strokeWeight(15);     
  strokeCap(SQUARE);    

  // SHAKE EFFECT (Tremor nas linhas)
  let shakeY = random(-1.5, 1.5); 
  let shakeX = random(-1.5, 1.5);

  // Linhas horizontais
  line(0, 320 + shakeY, 800, 320 + shakeY);   
  line(0, 520, 800, 520);   
  line(360, 740, 600, 740); 

  // Linhas verticais
  line(360 + shakeX, 0, 360 + shakeX, 800);   
  line(80, 520, 80, 800);   
  line(600, 520, 600, 800); 
}