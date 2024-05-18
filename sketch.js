function setup() {
  createCanvas(700, 400);

}
function preload(){
  GLYC = loadJSON("https://api.polygon.io/v1/open-close/GLYC/2023-01-09?adjusted=true&apiKey=Ji1WyGZN2L_1M0hvF0rJJr6pwn2644b2")
  SP = loadJSON("https://api.polygon.io/v1/open-close/SPY/2023-01-09?adjusted=true&apiKey=Ji1WyGZN2L_1M0hvF0rJJr6pwn2644b2")
  
}

function draw() {
  background('black')
  gp = (100 * GLYC.open / GLYC.close)-100
  spp = (100 * SP.open / SP.close)-100
  fill('cyan')
  text("with a final percentage of " + str(round(gp, 2)) + "% GLYC performed "+str(round(gp-spp, 2)) + "% better than the s&p500 yesterday", 0, 15)
}