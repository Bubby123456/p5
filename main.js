function setup() {
    canvas=createCanvas(650,650);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw() {
    image(video,50,60,540,520);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    

    fill(255,215,0);
    stroke(255,215,0);
    rect(90,40,500,20);
    

    fill(255,0,0);
    circle(600,50,80);
    stroke(255,0,0);

    fill(255,215,0);
    stroke(255,215,0);
    rect(590,88,20,500);

    fill(255,0,0);
    stroke(255,0,0);
    circle(600,588,80);

    fill(255,215,0);
    stroke(255,215,0);
    rect(60,584,500,20);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,584,80);

    fill(255,215,0);
    stroke(255,215,0);
    rect(40,93,20,450);
}