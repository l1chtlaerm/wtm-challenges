## Conversión

El objetivo inicial de este ejercicio es sencillo: implementen la función `conversion`, que recibe un Array, y debe devolver un Objeto con los elementos del Array como valores del mismo y las posiciones en el Array como los keys del objeto. Por ejemplo:

``` javascript
conversion(["Pablo", "Rafa", "Yuli", "Mabel"])
// returns {0: "Pablo", 1: "Rafa", 2: "Yuli", 3: "Mabel"}
```

Recomendaciones: darle una leída a la documentación de [ForEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach) y a la documentación acerca de [Funciones](https://developer.mozilla.org/es/docs/Glossary/Funci%C3%B3n) con sus respectivas referencias técnicas. Verán que escribí las funciones con otra sintaxis que no es la que veníamos utilizando. ¿En qué se diferencia una función tradicional de una función de flecha en JavaScript?

Ahora, para la **segunda parte**: verán que la función `conversion` tiene un segundo parámetro llamado callback que es opcional (recuerden que si un parámetro está igualado a un valor el mismo se considera opcional). ¿Qué es una función callback? En palabras del glosario de MDN, es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. Más información en [este link](https://developer.mozilla.org/es/docs/Glossary/Callback_function).

La idea es la siguiente: hay otras dos funciones implementadas: `keyConverter` y `keyMultiplier`. Cuando se pasa estas funciones como callback de la función `conversion` las mismas deben operar por sobre el valor de los keys del objeto que devuelve la función. Si no se las pasa, el objeto devuelto debe ser idéntico al que ya pasa el primer test. Por ejemplo:

``` javascript
conversion(["Pablo", "Rafa", "Yuli", "Mabel"], keyConverter)
// returns {"key#0": "Pablo", "key#1": "Rafa", "key#2": "Yuli", "key#3": "Mabel"}
conversion(["Pablo", "Rafa", "Yuli", "Mabel"], keyMultiplier)
// returns {0: "Pablo", 2: "Rafa", 4: "Yuli", 6: "Mabel"}
```

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
