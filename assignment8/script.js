// let skill = [{
//     skillName: "HTML",
//     uniqueNo: 1,
// },
// {
//     skillName: "CSS",
//     uniqueNo: 2,
// },
// {
//     skillName: "JavaScript",
//     uniqueNo: 3,
// }
// ];

// for (let i of skillList) {
//     document.write(skillList[0]);
// }

// let inpu = document.createElement("input");
// inpu.type = "checkbox";
// inpu.id = "chkid";

// let lab = document.createElement("li");
// lab.setAttribute = ("for", "label");
// lab.id = "labid";

let ulist = document.getElementById("ulid");

function labelf(labid) {
    let l = document.getElementById("labid");

    l.classList.toggle("selected");

}

function chkb(skill) {

    let c = "checkbox" + skill.uniqueNo;
    let l1 = "label" + skill.uniqueNo;

    let list = document.createElement("li");

    ulist.appendChild(list);
    let d = document.createElement("checkbox");
    d.setAttribute = ("for", "checkbox");
    d.id = "checkid";
}




















// var a = document.getElementById("html");
// var b = document.getElementById("css");
// var c = document.getElementById("javascript");

// function htm() {
//     a.style.color = "green"
// }

