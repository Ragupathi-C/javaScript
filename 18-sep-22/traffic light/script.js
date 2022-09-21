let a = document.getElementById("btn1");

let b = document.getElementById("btn2");

let c = document.getElementById("btn3");

function start() {
    a.style.backgroundColor = "red";
}

function ready() {
    a.style.backgroundColor = "white"
    b.style.backgroundColor = "yellow";
}

function go() {
    b.style.backgroundColor = "white"
    c.style.backgroundColor = "green";
}

function reset() {
    a.style.backgroundColor = "grey";
    b.style.backgroundColor = "grey";
    c.style.backgroundColor = "grey";
}