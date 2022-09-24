let firstnumber = document.getElementById("fval");
let secondnumber = document.getElementById("sval");
let userinput = document.getElementById("inid");
let result = document.getElementById("message");

let smessage = "Congratulations";
let lmessage = "Sorry!you lose";
let imge = document.getElementById("imgid");
imge.style.width = "30%"
imge.style.margin = "20vh auto auto 30vw";
let maindiv = document.getElementById("maindiv");
maindiv.style.margin = "5vh auto auto 35vw";
function reset() {
    let firstrandom = Math.random() * 100;
    let secondtrandom = Math.random() * 100;

    firstnumber.textContent = Math.ceil(firstrandom);
    secondnumber.textContent = Math.ceil(secondtrandom);
    userinput.value = "";
    result.textContent = "";
    result.style.backgroundColor = "white";
}
reset();

function check() {
    let frandominteger = parseInt(firstnumber.textContent);
    let srandominteger = parseInt(secondnumber.textContent);
    let userinteger = parseInt(userinput.value);

    let sumoftwo = frandominteger + srandominteger;

    if (sumoftwo == userinteger) {
        result.textContent = smessage;
        result.style.backgroundColor = "teal";
        result.style.color = "white";
        result.classList.add("mt-2", "text-center");
        result.style.width = "43%"
        result.style.marginLeft = "25%"
        result.style.padding = "2% 10% 2% 10%"
    }
    else {
        result.textContent = lmessage;
        result.style.backgroundColor = "red"
        result.style.color = "white";
        result.style.width = "43%"
        result.style.marginLeft = "25%"
        result.classList.add("mt-2", "w-10", "text-center");
        result.style.padding = "2% 10% 2% 10%"
    }
}
