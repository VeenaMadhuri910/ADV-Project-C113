function setup() {
    canvas = createCanvas(840 , 540);
    canvas.position(110 , 200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video,200,130,420,270);
    tint(tint_color);

    fill(255, 0, 0);
    stroke(0 , 0 , 0);
    circle(40, 40 , 70);
    circle(800, 500, 70);
    circle(800, 40, 70);
    circle(40, 500, 70);
    rect(70, 30, 700, 20);
    rect(70, 490, 700, 20);
    rect(790, 70, 20, 400);
    rect(30, 70, 20, 400);
}

function take_snapshot() {
    save("FilterSelfie.png");
}

function tint_fil() {
    tint_color = document.getElementById("color_name").value;
}