
/* function to change between images*/
function changePhoto(e) {
    var mainDiv = document.getElementById("mainDiv");
    var image = mainDiv.childNodes[1];
    image.setAttribute("src", e.src);
    var allImages = document.getElementsByClassName("img");
    for (var i = 0; i <= images.length; i++) {
        allImages[i].style.opacity = "1";
    }
    e.style.opacity = "0.7";
}

/* function to change player 1 score*/
function player1Score() {
    var player1 = document.getElementById("player1");
    var currentValue = player1.innerText;

    var result = document.getElementById("result");
    if (result.innerText == "") {
        if (currentValue < 5) {
            currentValue++;
            player1.innerText = currentValue;
        }
        if (currentValue == 5) {
            var result = document.getElementById("result");
            result.innerText = "player1 is winner";
        }
    }
}

/* function to change player 2 score*/
function player2Score() {
    var player2 = document.getElementById("player2");
    var currentValue = player2.innerText;

    var result = document.getElementById("result");
    if (result.innerText == "") {
        if (currentValue < 5) {
            currentValue++;
            player2.innerText = currentValue;
        }
        if (currentValue == 5) {
            var result = document.getElementById("result");
            result.innerText = "player2 is winner";
        }
    }
}

/* function to reset score to 0*/
function reset() {
    var player1 = document.getElementById("player1");
    player1.innerText = 0;
    var player2 = document.getElementById("player2");
    player2.innerText = 0;
    var result = document.getElementById("result");
    result.innerText = "";
}


/* start slide show*/
var sliderContent = document.getElementById("box");
var images = ['1', '2', '3', '4'];
var size = images.length;

/* function to get next image*/
function nextImage() {
    if (size < images.length) {
        size++;
    }
    else {
        size = 1;
    }
    sliderContent.setAttribute("src", "images/" + images[size - 1] + ".jpg");
}

/* function to get previous image*/
function previousImage() {
    if (size <= images.length && size > 1) {
        size--;
    }
    else {
        size = images.length;
    }
    sliderContent.setAttribute("src", "images/" + images[size - 1] + ".jpg");
}

/* end slide show*/


/* function to make digital hour*/
function digitalHour() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }
    var time = hour + " " + ":" + " " + minute + " " + ":" + " " + second;
    document.getElementById("clock").innerText = time;
    setTimeout(digitalHour, 1000);
}

digitalHour();


