let num = 5;
let x = ""
for (let inc = 1; inc <= num; inc++) {
    for (let j = 1; j <= inc; j++) {

        x += "*";
    }
    x += "\n";
}
for (let inc = 1; inc <= num - 1; inc++) {
    for (let j = 1; j <= num - inc; j++) {

        x += "*";
    }
    x += "\n";
}
console.log(x);