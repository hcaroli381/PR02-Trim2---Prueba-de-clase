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
const btnPiedra = document.querySelector("#btnPiedra");
const btnPapel = document.querySelector("#btnPapel");
const btnTijera = document.querySelector("#btnTijera");
const btnReiniciar = document.querySelector("#btnReiniciarPPT");
const total = document.querySelector("#totalPPT");
const mensaje = document.querySelector("#mensajePPT");
const ganadas = document.querySelector("#ganadasPPT");
const perdidas = document.querySelector("#perdidasPPT");
const empates = document.querySelector("#empatadasPPT");
const eleccionJugadorDom = document.querySelector("#eleccionJugador");
const eleccionMaquinaDom = document.querySelector("#eleccionMaquina");
const listaHistorialPPT = document.querySelector("#listaHistorialPPT");
let eleccionJugador;
let contadorEmpates = 0;
let contadorGanadas = 0;
let contadorPerdidas = 0;
let historialResultados = [];

// TODO: Funciones del juego
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function eleccionIA() {
    let eleccion;
    eleccion = getRandomInt(3);
    return eleccion;
}
function determinarGanador(eleccionJ, eleccionIa) {
    
    if ((eleccionJ == 0 && eleccionIa == 2)||(eleccionJ == 1 && eleccionIa == 0)||(eleccionJ == 2 && eleccionIa == 1)) {
        mensaje.innerHTML = "Victoria!!";
        contadorGanadas++;
        
    } else if (eleccionJ == eleccionIa) {
        mensaje.innerHTML = "Empate!";
        contadorEmpates++;
       
    }else{
        mensaje.innerHTML = "Derrota!!";
        contadorPerdidas++;
      
    }
}
function mostrarEleccion(eleccion) {
    let eleccionString = "";
    if (eleccion == 0) {
        eleccionString = "Piedra";
    } else if (eleccion == 1) {
        eleccionString = "Papel";
    } else {
        eleccionString = "Tijera";
    }
    return eleccionString;
}
function actualizarEstadisticas() {
    ganadas.innerHTML = `${contadorGanadas}`;
    total.innerHTML = `${contadorGanadas+contadorEmpates+contadorPerdidas}`;
    perdidas.innerHTML = `${contadorPerdidas}`;
    empates.innerHTML = `${contadorEmpates}`;
}
function borrarHistorial() {
    contadorGanadas = 0;
    contadorEmpates = 0;
    contadorPerdidas = 0;
    eleccionJugadorDom.innerHTML = "";
    eleccionMaquinaDom.innerHTML = "";
    mensaje.innerHTML = "";
    actualizarEstadisticas();
    localStorage.removeItem("historialPartidas");
    location.reload();
}
function actualizarHistorial() {
    const jugador = mostrarEleccion(eleccionJugador);
    const maquina = mostrarEleccion(eleccionIA());
    let resultado;
    const jsonHistorial = { "jugador": jugador, "maquina": maquina, "resultado" : resultado };
    const lsHistorialStr = localStorage.getItem("historialPartidas");
    let lsHistorialJSON = [];
    if (lsHistorialStr != null) {
        lsHistorialJSON = JSON.parse(lsHistorialStr);
    }
    lsHistorialJSON.push(jsonHistorial);
    listarHistorial(jsonHistorial);
    localStorage.setItem("historialPartidas", JSON.stringify(lsHistorialJSON));

}
function listarHistorial(historial) {
    listaHistorialPPT.innerHTML += `Jugador : ${historial.jugador} Maquina :${historial.maquina} Resultado : ${historial.resultado}`;

}
// TODO: Eventos del juego
btnPiedra.addEventListener('click', () => {
    let eleccionMaquina;
    eleccionJugador = 0; 
    eleccionMaquina = eleccionIA();
    eleccionJugadorDom.innerHTML = `${mostrarEleccion(eleccionJugador)}`;
    eleccionMaquinaDom.innerHTML = `${mostrarEleccion(eleccionMaquina)}`;
    determinarGanador(eleccionJugador, eleccionMaquina);
    actualizarEstadisticas();
    actualizarHistorial();
});
btnPapel.addEventListener('click', () => {
    let eleccionMaquina;
    eleccionJugador = 1; 
    eleccionMaquina = eleccionIA();
    eleccionJugadorDom.innerHTML = `${mostrarEleccion(eleccionJugador)}`;
        eleccionMaquinaDom.innerHTML = `${mostrarEleccion(eleccionMaquina)}`;
    determinarGanador(eleccionJugador, eleccionMaquina);
    actualizarEstadisticas();
    actualizarHistorial();
});
btnTijera.addEventListener('click', () => {
    let eleccionMaquina;
    eleccionJugador = 2; 
    eleccionMaquina = eleccionIA();
    eleccionJugadorDom.innerHTML = `${mostrarEleccion(eleccionJugador)}`;
        eleccionMaquinaDom.innerHTML = `${mostrarEleccion(eleccionMaquina)}`;
    determinarGanador(eleccionJugador, eleccionMaquina);
    actualizarEstadisticas();
    actualizarHistorial();
});
btnReiniciar.addEventListener('click', () => {
    borrarHistorial();
});