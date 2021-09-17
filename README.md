# QuizBox Vision

QuizBox Vision es un juego de preguntas y respuestas, como tantos otros. Sin embargo, en este juego, se ponen muchas más cosas en juego!! Bueno, en realidad no, pero quedaba bien para el resúmen.

![imagen](https://user-images.githubusercontent.com/48001346/132267141-bb9779cd-3c67-4e54-a318-3d636436e2a2.png)

## Definición funcional

El juego consiste en 10 preguntas las cuales pueden ser verdadero/falso o multiple choice.

Por cada pregunta, es necesario mostrar los siguientes campos:

- Pregunta
- Categoría
- Dificultad
- Posibles respuestas

Al seleccionar la respuesta, muestra si la misma fue correcta o no. No es necesario mostrar cuál era la respuesta correcta.

Al finalizar el juego, se muestra el puntaje obtenido. El mismo se calcula de la
siguiente manera:

- Respuesta correcta (verdadero/falso): _5 puntos_
- Respuesta correcta (multiple choice): _10 puntos_
- Respuesta incorrecta: _0 puntos_

## Definiciones técnicas

- Todos los datos necesarios para el juego, están en [la siguiente API](https://opentdb.com/api.php?amount=10)
- El juego puede realizarse en React web o React Native.
- Cada pregunta debe presentarse en una pantalla distinta de la aplicación.

## Extras

Además de cumplir con las funcionalidades requeridas, la aplicación cuenta con un botón que permite reiniciar el juego una vez finalizadas todas las preguntas.

## Uso

Para utilizar el proyecto es necesario clonar el repositorio:

`git clone https://github.com/livchits/blackbox-challenge.git`

Instalar las dependencias:

`npm install`

Y ejecutar:

`npm run dev`

La aplicación se puede probar en [el siguiente link](https://quiz-app.onrender.com/).

## Tecnologías utilizadas

- React
- TypeScript
- SASS
- CSS Modules
- Vite.js

La UI está levemente inspirada en [este diseño](https://dribbble.com/shots/6508352-Quiz-App-UI-Oma).
