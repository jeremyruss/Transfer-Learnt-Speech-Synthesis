const parallax = document.getElementById("container");

window.addEventListener("scroll", function() {
    var offset = window.pageYOffset;
    var pos = - offset * 0.1;
    document.body.style.backgroundPositionY = pos + "px";
    console.log(window.screen.width);
});

window.onload = function () {
    width = this.innerWidth;
    if (width < 1400) {
        document.body.style.background = 'none';
        document.getElementById("container").style.width = width - 150 + "px";
        document.getElementById("container").style.marginRight = "50px";
    } else {
        document.body.style.background = "url('files/Boris.png') no-repeat right top fixed";
        document.getElementById("container").style.width = "1000px";
    }
}

window.addEventListener("resize", function() {
    width = this.innerWidth;
    if (width < 1400) {
        document.body.style.background = 'none';
        document.getElementById("container").style.width = width - 150 + "px";
        document.getElementById("container").style.marginRight = "50px";
    } else {
        document.body.style.background = "url('files/Boris.png') no-repeat right top fixed";
        document.getElementById("container").style.width = "1000px";
    }
});
