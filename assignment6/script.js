function additem() {
    var a = document.getElementById("inpid");
    var b = document.createElement("li");
    var c = document.getElementById("ulid");
    b.textContent = a.value;
    a.value = "";
    c.appendChild(b);


}