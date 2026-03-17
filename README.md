
# Examen práctico de JavaScript

## Mini Arcade Web: 3 juegos en 1

### Duración

**Máximo 2 horas**

### Material entregado

Se proporciona al alumnado:

* `index.html`
* `style.css`
* `app.js` vacío

El HTML y el CSS ya están preparados. El trabajo del examen consiste en completar la funcionalidad en **JavaScript** de almenos uno de los juegos.

### Selección de juegos a implementar

La aplicación contiene **tres juegos independientes**:

1. **Adivina el número**
2. **Siete y medio contra la máquina**
3. **Piedra, papel o tijera**

Debes implementar **al menos uno de los juegos**.

Puedes elegir libremente qué juego o juegos implementar. Antes de comenzar, analiza la dificultad de cada uno y decide cómo organizar tu tiempo.

Los juegos son **independientes entre sí**, por lo que pueden desarrollarse por separado.

### Consideraciones sobre la calificación

* Si se implementa **un solo juego correctamente**, la calificación máxima posible será **7 puntos**.
* Si se implementan **dos juegos correctamente**, se podrá optar a la **calificación máxima del examen (10 puntos)**.

No es necesario implementar los tres juegos.

### Normas generales

* Debes usar únicamente **JavaScript**, sin librerías externas.
* Debes mantener una estructura de código clara y ordenada.
* Se valorará dividir el programa en funciones.
* Debes trabajar con los elementos del DOM ya preparados en el HTML.

---

# 1. Juego: Adivina el número

La máquina debe generar un número aleatorio entre **1 y 100**.

## Requisitos

* Al cargar la página, se genera un número secreto.

* El usuario escribe un número en el cuadro de texto.

* Al pulsar el botón de comprobar:
  * si el número introducido es menor, se mostrará un mensaje indicándolo
  * si es mayor, se mostrará un mensaje indicándolo
  * si es correcto, se mostrará un mensaje de acierto

* Debe mostrarse también el número de intentos realizados.

* Debe existir un botón para comenzar una **nueva partida**:

  * genera un nuevo número secreto
  * reinicia intentos
  * limpia mensajes y campo de entrada

## Validaciones

* Solo se aceptan números entre 1 y 100.
* Si el dato introducido no es un número válido o está fuera del rango 1-100, debe mostrarse un mensaje de error.
* Si el número introducido está repetido, mostrar también una advertencia y no tenerlo en cuenta para el número de intentos *(aconsejable almacenar los números introducidos en un array para validarlo)*
* Si el número introducido no es el número secreto, debe indicarse si el número oculto es inferior o superior con un mensaje dando pistas:
   - El número es MAYOR/MENOR... Frío, frío *(si la diferencia absoluta entre ambos números es superior a 20)*
   - El número es MAYOR/MENOR... Caliente! Caliente *(si la diferencia absoluta entre ambos números está entre 10 y 20)*
   - El número es MAYOR/MENOR... Te quemas!!! *(si la diferencia absoluta entre ambos números es inferior a 10)*

## Ayuda

* Para generar el número aleatorio entre 1 y 100 puedes usar estas dos funciones:
   - [Math.random](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
   - [Math.ceil](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

---

# 2. Juego: Siete y medio contra la máquina

En este juego, el jugador compite contra la máquina intentando acercarse a **7,5** sin pasarse.

## Reglas simplificadas

* Se utiliza la baraja española con los palos Oros, Espadas, Copas y Bastos *(O, E, C, B)*. Cada palo trae 10 cartas.
* Las cartas pueden valer:
  * del **1 al 7**, su valor numérico (1, 2, 3, 4, 5, 6 y 7)
  * **0,5**, simulando sota, caballo o rey (J, Q, K)
* El jugador comienza con puntuación 0.
* La máquina comienza con puntuación 0.
* El jugador puede:
  * **pedir carta**
  * **plantarse**
* La máquina jugará automáticamente cuando el jugador se plante o se pase.
* La máquina siempre se planta cuando llega a **6 o más**.

## Requisitos

### Pedir carta

Al pulsar el botón correspondiente:

* se obtiene una carta aleatoria
* se suma su valor a la puntuación del jugador
* se muestra:
  * la carta obtenida
  * la puntuación actual del jugador

* si el jugador supera 7,5:
  * la partida termina
  * se informa de que el jugador pierde

### Plantarse

Al pulsar el botón de plantarse:

* el jugador ya no roba más cartas
* la máquina comienza a jugar automáticamente
* la máquina roba cartas hasta que:
  * llegue a 6 o más, o
  * se pase de 7,5

### Resultado

Al terminar la partida, deben mostrarse en pantalla los puntos y cartas del jugador y la máquina usando las imágenes proporcionadas en la carpeta `assets`, además del siguiente mensaje final:
   * Gana el jugador!!
   * Gana la máquina!!
   * Empate!!

Si el jugador o la máquina se pasa, no se muestra el mensaje de puntos finales, sino el mensaje correspondiente:
   * El jugador se pasa!!
   * La máquina se pasa!!

### Nueva partida

Debe existir un botón para reiniciar este juego:

* puntuaciones a 0
* mensajes vacíos
* nueva partida lista para comenzar

### Ayuda

* Crear dos arrays para la baraja de cartas, una para los palos (O, E, C y B) y otra para las cartas (1...7, J, Q y K)
* Crear otros dos arrays para las cartas del jugador y máquina.
* Usar las imágenes de las cartas que se adjuntan en la carpeta `assets`.

---

# 3. Juego: Piedra, papel o tijera

El usuario jugará contra la máquina.

## Requisitos

* Deben existir tres botones:
  * Piedra
  * Papel
  * Tijera

* Al pulsar uno de ellos:
  * el jugador realiza su elección
  * la máquina elige aleatoriamente una opción
  * se muestra el resultado de la ronda:
    * gana jugador
    * gana máquina
    * empate

## Historial con arrays

Cada partida debe guardarse en un **array** con información similar a esta:

```javascript
{
  jugador: "Piedra",
  maquina: "Tijera",
  resultado: "Ganada"
}
```

## Mostrar historial

En pantalla debe verse una lista con el historial de partidas jugadas.

## Estadísticas

Debe mostrarse:

* número total de partidas
* número de victorias del jugador
* número de derrotas
* número de empates

## localStorage

El historial y las estadísticas deben conservarse al recargar la página usando `localStorage`.

## Reinicio

Debe existir un botón para borrar el historial y las estadísticas del juego.

---

# Estructura HTML base

[index.html](index.html)

---

# CSS base

[style.css](style.css)

---

# Plantilla fichero JS

[app.js](app.js)
