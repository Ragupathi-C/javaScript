let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

var titl = document.getElementById("hdiv");
titl.textContent = recipeObj.title;


var imgdiv = document.getElementById("imgdiv");
var imgid = document.getElementById("imgid");
imgid.src = recipeObj.imgSrc;
imgid.classList.add("w-50");
imgdiv.appendChild(imgid);




var ingrediv = document.getElementById("ingrediv")
ingrediv.classList.add("bg-info", "p-5");
ingrediv.style.width = "50%";

ingrediv.style.color = "white";
var ulist = document.getElementById("ulid");



var ingredient = recipeObj.ingredients;

for (let i of ingredient) {
    var list = document.createElement("li");

    list.textContent = i;

    ulist.appendChild(list);
}


