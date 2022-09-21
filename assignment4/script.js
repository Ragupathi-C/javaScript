var a = document.getElementById("red");
var b = document.getElementById("yellow");
var c = document.getElementById("green");
var d = document.getElementById("stop");
var e = document.getElementById("ready");
var f = document.getElementById("go");

function stop() {
    a.style.backgroundColor = "red";
    c.style.backgroundColor = "grey";
    d.style.backgroundColor = "red";
    f.style.backgroundColor = "grey";
}
function ready() {
    b.style.backgroundColor = "yellow";
    a.style.backgroundColor = "grey";
    e.style.backgroundColor = "yellow";
    d.style.backgroundColor = "grey";
}
function go() {
    c.style.backgroundColor = "green";
    b.style.backgroundColor = "grey";
    f.style.backgroundColor = "green";
    e.style.backgroundColor = "grey";
}