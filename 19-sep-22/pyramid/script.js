let i, j, x = "";
for (i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        x += " ";
    }
    for (j = 1; j <= i; j++) {
        x += "*";
    }
    for (j = 1; j < i; j++) {
        x += "*";
    }
    for (j = 5; j >= i; j--) {
        x += " ";
    }
    x += "\n";
}
console.log(x);