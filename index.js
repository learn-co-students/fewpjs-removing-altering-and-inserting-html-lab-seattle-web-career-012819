document.querySelector("main#main").remove();

let body = document.querySelector("body");

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerText = "is the champion";
console.log(newHeader.innerHTML === "is the champion");
body.appendChild(newHeader);
