const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = " we love programming";
let idx = 1; /* por que es una por una de las letras  */
let speed = 300 / speedEl.value;
/* es el tiempo en milisegundos /por el valor en la velocidad en este caso era de 1  que tan rapido aparece el mensaje*/

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    /*  a el texto lo vamos a cambiar por  nuestra variable text con un corte que inicia en 0 y termina en la variable idx */

    idx++;
    /*  cuando idx sea menor a la longitud del texto esta se va a igualar a sero y asi sera el slice  */
    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
    /*   esta funcion haece algo en este caso write text y el segundo valor es la velocidad en este caso es otra variable */
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

/* cuando se hace el evento click  target hace referencia al objeto que se le envio el evento */

/* e es objeto que represetna el evento, y uno de sus atributos es el target, que viene a ser el elemento que recibió el evento. */

/* const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)  
 */
