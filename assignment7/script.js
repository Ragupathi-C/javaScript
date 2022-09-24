var a = document.getElementById("checkBoxWithLabelContainer");
a.classList.add("p=5", "bg-info");

var b = document.createElement("input");

b.type = "checkbox";
b.id = "checkbox";

b.onclick = function () {
    onch();
}

a.appendChild(b);

var c = document.createElement("label");

function onch() {
    c.classList.toggle("strike-through");
}

c.setAttribute("for", "label");
c.id = "checkboxLabel";
c.textContent = "I am a label";

a.appendChild(c);




// <body>
//     <div class="p-5" id="checkBoxWithLabelContainer"></div>
// </body>

// css
// .checkbox-label {
//     font-family: "Roboto";
//     margin-left: 5px;
// }

// .strike-through {
//     text-decoration: line-through;
// }

// js
// let checkBoxWithLabelContainerEl (a)= document.getElementById("checkBoxWithLabelContainer");
// let checkboxId = "checkbox";
// let labelId = "checkboxLabel";

// function onCheckboxStatusChange() {
//     checkboxLabelEl.classList.toggle("strike-through");
// }

// let checkboxInputEl = document.createElement("input");
// checkboxInputEl.type = "checkbox"
// checkboxInputEl.id = checkboxId;

// checkboxInputEl.onclick = function() {
//     onCheckboxStatusChange();
// };
// checkBoxWithLabelContainer.appendChild(checkboxInputEl);

// let checkboxLabelEl = document.createElement("label");
// checkboxLabelEl.classList.add("checkbox-label")
// checkboxLabelEl.setAttribute("for", checkboxId)
// checkboxLabelEl.id = labelId;
// checkboxLabelEl.textContent = "i am Label";
// checkBoxWithLabelContainer.appendChild(checkboxLabelEl);

