## Validando correos... Para un usuario!

Terminaron el ejercicio 13? Buenísimo! Ahora vamos a usar esa misma expresión regular dentro de una función `nuevoUsuario` que recibirá como parámetros:

1) `nombre`
2) `apellido`
3) `edad`
4) `email`  
(todos `String`, salvo `edad`) 

Y devolverá un `Objeto` con todas esas propiedades (recuerdan cómo tenemos que nombrarlas si no queremos que se modifiquen directamente? respeten la convención), pero con estos adicionales:

1) Un `nombreCompleto` no definido estáticamente que sólo deberá ejecutarse si se da un `nombre` && un `apellido` a la función (verán que en los parámetros de la función se especifica `nombre = undefined` y `apellido = undefined`, esto significa que la función puede recibir estos parámetros o no, son *opcionales*)
2) Un método que sólo almacene el correo si el mismo es válido según la expresión regular del ejercicio anterior. En caso de no ser válido, almacenar como email `"No es un correo válido"`

Ejemplos:

``` javascript
let usuario = nuevoUsuario("jeancarlos@microsoft.com", 47, "Jean"));
usuario._nombre // returns "Jean"
usuario._apellido // returns undefined
usuario.nombreCompleto // returns "Falta nombre o apellido"
usuario._email // returns "jeancarlos@microsoft.com"

let usuario2 = nuevoUsuario("pablo@microsoft.c", 29, "Pablo", "Andrizzi"));
usuario._nombre // returns "Pablo"
usuario._apellido // returns "Andrizzi"
usuario.nombreCompleto // returns "Pablo Andrizzi"
usuario._email // returns "No es un correo válido"
```

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
