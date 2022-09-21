var a = document.getElementById("divid");

a.classList.add("text-center", "p-5", "bg-warning");

var b = document.createElement("input");
b.type = "checkbox";
b.id = "inpid";
a.appendChild(b);
var c = document.createElement("label");
c.setAttribute = ("for", "label");
c.textContent = "Click me!";
c.id = "lbid"
a.appendChild(c);
