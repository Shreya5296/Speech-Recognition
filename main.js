x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
draw_ellipse = "";
draw_flower = "";


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "The System Is Listning Please Speak"
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognised as " + content;

    if (content == "circle") {
        x = Math.floor(Math.random() * 1000);
        y = Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML = "Started Drawing Circle";
        draw_circle = "set";
    }

    if (content == "rectangle") {
        x = Math.floor(Math.random() * 1000);
        y = Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        draw_rect = "set";
    }

    if (content == "square") {
        x = Math.floor(Math.random() * 1000);
        y = Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML = "Started Drawing Square";
        draw_square = "set";
    }

    if (content == "ellipse") {
        x = Math.floor(Math.random() * 1000);
        y = Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML = "Started Drawing Ellipse";
        draw_ellipse = "set";
    }

    if (content == "flower") {
        x = Math.floor(Math.random() * 1000);
        y = Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML = "Started Drawing Flower";
        draw_flower = "set";
    }
}

function setup() {
    canvas = createCanvas(1200, 650)
}

function draw() {
    if (draw_circle == "set") {
        r = Math.floor(Math.random() * 200);
        circle(x, y, r);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
        draw_circle = "";
    }

    if (draw_rect == "set") {
        w = Math.floor(Math.random(40, 80) * 250);
        h = Math.floor(Math.random(10, 50) * 200);
        rect(x, y, w, h);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
        draw_rect = "";
    }

    if (draw_square == "set") {
        side = Math.floor(Math.random(10, 50) * 200);
        rect(x, y, side, side);
        document.getElementById("status").innerHTML = "Square Is Drawn";
        draw_square = "";
    }

    if (draw_ellipse == "set") {
        ellipse(x, y, 120, 80);
        document.getElementById("status").innerHTML = "Ellipse Is Drawn";
        draw_ellipse = "";
    }

    if (draw_flower == "set") {
        translate(x, y);
        noStroke();
        for (let i = 0; i < 10; i++) {
            ellipse(0, 30, 20, 80);
            rotate(PI / 5);
        }
        document.getElementById("status").innerHTML = "Flower Is Drawn";
        draw_flower = "";
    }

}