const imgs = 
["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");
bgImage.src = chosenImage;;

// document.body.appendChild(bgImage);

const h2 = document.querySelector("#clock");
document.body.insertBefore(bgImage, h2);