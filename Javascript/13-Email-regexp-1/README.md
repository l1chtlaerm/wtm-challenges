## Validando correos parte 1

Este ejercicio hace uso de expresiones regulares o [RegExp](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp). El objetivo es que implementen la función `emailValido` dentro de `lib/email_valido.js`, la cual recibe un parámetro `email` (del tipo `String`) y devuelve un `Boolean`: `true` si el correo provisto es válido, `false` si no lo es. Por ejemplo:

- `valid('pablo.worldtechmakers.org')` debe retornar `false`
- `valid('pablo@worldtechmakers.org')` debe retornar `true`

Pueden abrir el archivo de tests `test/test.js` para ver cuáles correos son válidos y cuáles no. Les recuerdo que pueden buscar herramientas para probar expresiones regulares, yo recomiendo [rubular](http://rubular.com/) aunque es para Ruby o [RegExr](https://regexr.com/) que permite agregar JavaScript a la sintaxis.

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
