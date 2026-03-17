// -------------------------------------
// Gestión de pestañas (NO MODIFICAR)
// -------------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

for (const button of tabButtons) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.tab;

        for (const tabButton of tabButtons) {
            tabButton.classList.remove("active");
        }

        for (const panel of panels) {
            panel.classList.remove("active");
        }

        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
}

// -------------------------------------
// 1. Adivina el número
// -------------------------------------

// TODO: Variables del juego
const numeroRecibido = document.querySelector("#inputNumero");
let numeroAleatorio = getRandomInt(101);
const btnComprobar = document.querySelector("#btnComprobarNumero");
const btnNuevaPartida = document.querySelector("#btnReiniciarNumero");
const resultado = document.querySelector(".mensaje");
const intentos = document.querySelector("#intentosNumero");
let contador = 0;
let arrayValidador = [0];
// TODO: Funciones del juego
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function validar(numeroRecibido) {
    let boolVal;
    if (numeroRecibido < 1 || numeroRecibido > 100) {
        resultado.innerHTML = "Numero fuera de rango!!( 1 - 100)";
        boolVal = false;
        return boolVal;
    } else {
        return true;
    }
}
function validarRepetidos() {
    let repetidos = 0;
    console.log(arrayValidador);
    for (let i = 0; i < arrayValidador.length; i++) {
        if (arrayValidador[i] == numeroRecibido.value) {
            repetidos++;
            
        } 
     
    }

    if (repetidos > 0) {
        resultado.innerHTML = "Ya has intentado adivinar ese numero!!";
        return false;
    } else {
        arrayValidador.push(numeroRecibido.value);
        return true;
    }
  
       
}


// TODO: Eventos del juego
btnComprobar.addEventListener('click', () => {
    console.log(numeroAleatorio);
       
      
        if (validar(numeroRecibido.value) && validarRepetidos()) {
            console.log(numeroAleatorio);

            if (numeroRecibido.value != numeroAleatorio) {
                const diferencia = Math.abs(numeroRecibido.value - numeroAleatorio);
                if (diferencia >= 20) {
                    resultado.innerHTML = "Frio, frio...";
                } else if (diferencia > 10 && diferencia < 20) {
                    resultado.innerHTML = "Caliente, caliente..";
                } else if (diferencia >= 1 && diferencia <= 10) {
                    resultado.innerHTML = "Te quemas!!";
                }
                contador++;
                intentos.innerHTML = `${contador}`;
            } else {
                resultado.innerHTML = `Muy bien!! El número era el ${numeroAleatorio}`;
                
            }
            
        }
   
});
btnNuevaPartida.addEventListener('click', () => {
    let nuevoAleatorio = getRandomInt(101);
    numeroAleatorio = nuevoAleatorio;
    numeroRecibido.value = 0;
    contador = 0;
    arrayValidador = [];
    location.reload();
});

// -------------------------------------
// 2. Siete y medio
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego


// -------------------------------------
// 3. Piedra, papel o tijera
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego
