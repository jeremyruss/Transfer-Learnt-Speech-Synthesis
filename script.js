const parallax = document.getElementById("container");

window.addEventListener("scroll", function() {
    var offset = window.pageYOffset;
    var pos = - offset * 0.1;
    document.body.style.backgroundPositionY = pos + "px";
});