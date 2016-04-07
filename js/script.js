var imageCount = 1;
var total = 3;

function prev() {
    var slider = [
        document.getElementById('slider-content1').textContent,
        document.getElementById('slider-content2').textContent,
        document.getElementById('slider-content3').textContent
    ]
    var image = document.getElementById('slideshow');
    var slide = document.getElementById('slider-content');
    imageCount = imageCount - 1;
    if (imageCount > total) {
        imageCount = 1;
    }
    if (imageCount < 1) {
        imageCount = total;
    }
    slide.innerHTML = slider[imageCount-1];
    image.src = "img/slider" + imageCount + ".jpg";
    slide.href = "#prev";
    clearInterval(time);
    time = window.setInterval(next , 3000);
}

function next() {
    var slider = [
        document.getElementById('slider-content1').textContent,
        document.getElementById('slider-content2').textContent,
        document.getElementById('slider-content3').textContent
    ]
    var image = document.getElementById('slideshow');
    var slide = document.getElementById('slider-content');
    imageCount = imageCount + 1;
    if (imageCount > total) {
        imageCount = 1;
    }
    if (imageCount < 1) {
        imageCount = total;
    }
    slide.innerHTML = slider[imageCount-1];
    image.src = "img/slider" + imageCount + ".jpg";

    
    slide.href= "#next";
    clearInterval(time);
    time = window.setInterval(next , 3000);
}


var time = window.setInterval( next , 3000);
