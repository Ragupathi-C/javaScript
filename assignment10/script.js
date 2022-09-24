let profileDetails = {

    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",

    name: "Ravi",

    age: 25

};
var backdiv = document.getElementById("maindiv");


var imge = document.getElementById("imgdiv");
imge.classList.add("imgdi")
imge.src = profileDetails.imgSrc;

backdiv.appendChild(imge);

var h1div = document.getElementById("h1id");
h1div.textContent = profileDetails.name;
h1div.style.color = "white";
backdiv.appendChild(h1div);

var ptag = document.createElement("p");
ptag.textContent = "age :" + profileDetails.age;
backdiv.classList.add("maindiv");
ptag.style.color = "white";


backdiv.appendChild(ptag);


























// var imge = document.createElement("img");

// var imgdiv = document.createElement("div");
// var h1id = document.getElementById("hdiv");
// h1id.textContent = details.name;

// imge.classList.add("w-50", "h-50");

// imge.src = details.imgSrc;
// backdiv.textContent = details.age

// backdiv.classList = ("maindiv");

// backdiv.appendChild(imge);

// backdiv.appendChild(details)

