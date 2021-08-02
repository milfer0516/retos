const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = load + "%";
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    /* la opacida va a ir de 1 a 0 al contador para que cuando la imagen este en 1 el este en 0 */
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

    function scale(number, inMin, inMax, outMin, outMax) {
        return (
            ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
        );
    }
}

/* link de referencia de la funcion scale donde inicia con numero que es nuestro contador del tiempo que queremos que utilize , cuando esta va de o a 100 quqeremos una opacidad de 1 a 0 esto funciona para el contador

https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */

/* blurriong difuminar : el metodo setinterval llama a la funcion blurring cada 3000 milisegundos "es muy rapido" y esta funcion le suma 1 al contador y esto lo haria para siempre pero al agregarle la condicion if se hace que si el valor de carga es mayor a 99 se detenga gracias a a funcion clear interval que detiene la funcion set interval cuando se cumpla la funcion*/

/* innertext accede al dom y remplasa loadText por load */
/* 
function blurring() {
    //Borrón
    console.log(load);

    if (load < 100) {
        load++;
        console.log(load);
    }
    esta condicion de if tambien se puede aplicar
} */
