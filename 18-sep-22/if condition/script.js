let a = document.getElementById("para");
a.style.textAlign = "center";
a.style.fontSize = "70px";


function increase() {
    let pv = a.textContent;
    let uv = parseInt(pv) + 1;

    if (uv > 0) {
        a.style.color = "green";
    }
    a.textContent = uv;
}
function decrease() {
    let pv = a.textContent;
    let uv = parseInt(pv) - 1;

    if (uv < 0) {
        a.style.color = "red";
    }
    a.textContent = uv;
}
function reset() {

    a.textContent = 0;
    a.style.color = "black"
}

