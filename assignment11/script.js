let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
// var main = document.getElementById("maindiv");
var titl = document.getElementById("hdiv");
titl.textContent = recipeObj.title;
// main.appendChild(titl);

var imgdiv = document.getElementById("imgdiv");
var imgid = document.getElementById("imgid");
imgid.src = recipeObj.imgSrc;
imgid.classList.add("w-50");
imgdiv.appendChild(imgid);
// main.appendChild(imgdiv);






var ingredientdiv = document.getElementById("ingrediv");
var ulist = document.getElementById("ulid");

ulist.appendChild(list);

var ingredient = recipeObj.ingredients;

for (let i of ingredient) {
    var list = document.createElement("li");
    list.textContent = i;

    ulist.appendChild(li);
}


