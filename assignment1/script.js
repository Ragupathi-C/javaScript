var a = document.getElementById("onBulb");
var b = document.getElementById("catOn");
var c = document.getElementById("bgc");

var d = document.getElementById("onBtn");
var e = document.getElementById("offBtn");
function on() {
    a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    b.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    d.style.backgroundColor = "green";
    e.style.backgroundColor = "white";

}
function off() {
    a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    b.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    e.style.backgroundColor = "red";
    d.style.backgroundColor = "white";

}