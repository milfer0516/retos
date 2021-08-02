const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});
/* cuando se haga el evento click en el btn va ha aplicar toggle( que lo que es que si no esta la crea y si esta la elimina )focus generalmmete se utiliza para enfocar un elemento es comun en formularios */
