const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

console.log(open);

open.addEventListener("click", () => container.classList.add("show-nav"));
/* cuando se cumpla el evento click le agregamos a la const open la class 
= show-nav */
close.addEventListener("click", () => container.classList.remove("show-nav"));
