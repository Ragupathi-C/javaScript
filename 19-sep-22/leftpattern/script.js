// let n = 5;
// let x = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 5; j >= i; j--) {
//         x += " ";

//     }

//     for (let j = 1; j <= i; j++) {
//         x += "*";

//     }
//     x += "\n";


// }
// console.log(x);

// let i, j, k, n = 5, z = "";

// for (i = 1; i <= n; i++) {
//     for (j = n; j >= i; j--) {
//         z += " ";
//     }
//     for (k = 1; k <= i; k++) {
//         z += "* ";
//     }
//     z += "\n";
// }
// console.log(z);


let n = 5;
let x = "";

for (let i = 1; i <= n; i++) {
    for (let j = 5; j >= i; j--) {
        x += " ";
    }
    for (let j = 1; j <= i; j++) {
        x += "*";
    }
    // for (let j = 1; j < i; j++) {
    //     x += "*";
    // }
    // for (let j = 5; j >= i; j--) {
    //     x += " ";
    // }
    x += "\n";
    // for (let k = 1; k <= n; k++) {
    //     for (int l = 5; l >= k; l--) {
    //         x += " *";
    //     }
    //     for (int l = 1; j <= k; l++) {
    //         x += " ";
    //     }
    //     x += "\n";
    // }

}
console.log(x);