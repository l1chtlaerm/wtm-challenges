## El reino animal, la herencia y los módulos

¡Roar! (Que ridículo). Para este ejercicio vamos a estar creando varias clases que van a heredar su comportamiento de la clase `Animal` que se encuentra en `padre.js`. Como soy una buena persona esa clase ya está definida. 

Los objetivos son definir las clases que están en `herencia.js` según las especificaciones que les voy a dar y además lograr que todos los archivos estén intercomunicados entre si (incluyendo el archivo de los tests!)

**Gato:**

1) Debe aceptar los siguientes argumentos: `nombre, edad, estado`
2) Debe tener una `presentacion` que diga `Soy *nombre*, no necesito presentarme, aliméntame humano`
3) Siempre debe tener 4 extremidades y debe ser de `especie: gato`

**Perro:**

1) Debe aceptar los siguientes argumentos: `nombre, edad, especie, estado, dueno`
2) Siempre debe tener 4 extremidades
3) Debe tener un método `saludarDueno` que no toma ningún argumento y devuelve "Hola *nombredeldueño*"

**Pez:**

1) Debe aceptar los siguientes argumentos: `nombre, edad, estado, especie`
2) Debe tener siempre cero extremidades

Notas: ya sé que dueño va con Ñ, pero a Javascript no le gusta el caracter. No hace falta que definan las variables de cada clase con _ adelante porque hice los tests antes de cambiarlas y me da flojera.

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
