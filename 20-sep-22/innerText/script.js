function check() {
    var a = document.getElementById("pwd").value;
    var b = document.getElementById("spid");
    var infy;
    if (a.length >= 5 && a.length <= 10) {
        infy = "Strong";
        b.style.color = "green";
    }

    else if (a.length >= 2 && a.length <= 4) {
        infy = "Weak";
        b.style.color = "red";
    }
    else if (a.length >= 11) {
        infy = "Size Exceeded";
        b.style.color = "blue";
    }
    else {
        infy = "very low";
    }
    b.innerText = infy;
}