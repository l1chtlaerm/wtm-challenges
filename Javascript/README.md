## Javascript

Bienvenidos a Javascript! Javascript es un [lenguaje orientado a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos) que se utiliza principalmente como lenguaje Front-End en navegadores de internet gracias a su estandarización por ECMAScript para su uso en la web. Esto permite que los sitios web tengan comportamiento dinámico sin necesidad de realizar un request al servidor por cada click del usuario.

Javascript también está creciendo en popularidad el uso del mismo para mantener aplicaciones Back-End mediante [Node.js](https://nodejs.org/es/).

A continuación les dejo una lista de conceptos importantes para que puedan consultar:

**console.log()**

El método console.log() se utiliza para imprimir mensajes en la terminal o consola. También puede ser utilizado para imprimir objetos u otra información o hacer debugging (en inglés significa eliminar errores o problemas de funcionamiento en un programa o código de computadora) manual.

``` javascript
console.log('Hello World!');
// Esto imprimirá 'Hello World!' en nuestra terminal
```
**Números**

Los números son un [tipo de dato primitivo](https://developer.mozilla.org/es/docs/Glossary/Primitivo). Esto incluye a todos los números enteros (o Integers en inglés) y números decimales (Floats en inglés).

``` javascript
let cantidad = 6;
let precio = 4.99;
console.log(precio * cantidad);
// Imprimirá 29.94 en nuestra terminal
```

**Métodos**

Los métodos retornan información acerca de un objeto, y se llaman agregando a un objeto un punto ., el nombre del método, y paréntesis.

``` javascript
// Devuelve un número float entre 0 y 1
Math.random();
``` 

**Librerías**

Las librerías contienen métodos que pueden llamarse como si fuesen objetos o variables ya creadas de la misma manera que lo expuesto en el punto anterior, donde *Math* no es un objeto, sino una librería de funciones matemáticas.

**Math.floor() y Math.ceil()**

La función Math.floor() devolverá el Integer más grande mayor o igual al número provisto, mientras que la función Math.ceil() hará lo opuesto. En términos cotidianos, son funciones que redondean para arriba o para abajo un número float.

``` javascript
console.log(Math.floor(5.95)); 
// Devolverá: 5
console.log(Math.ceil(5.95)); 
// Devolverá: 6
```

**Strings o cadenas de texto**

Los [Strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String) son [tipos de datos primitivos](https://developer.mozilla.org/es/docs/Glossary/Primitivo). Los mismos comprenden cualquier agrupación de caracteres envueltos en comillas simples `''` o dobles `""`.

``` javascript
let simples = '¿Dónde está mi elefante?';
let dobles = "Dónde está mi elefante?";
```

**String.length**

La propiedad .length de un String retorna el número de caracteres que componen dicha cadena.

``` javascript
let message = 'good nite';
console.log(message.length);
// Prints: 9

console.log('howdy'.length);
// Prints: 5
```

**Booleans o tipo de dato lógico booleano**

Los booleanos (definición derivada de George Boole, un matemático/lógico) son otro [tipo de dato primitivo](https://developer.mozilla.org/es/docs/Glossary/Primitivo). Sólo pueden ser `true` o `false`.

``` javascript
let estudiandoHoy = true;
```

**Objetos en Javascript, métodos y funciones**

Todo en JavaScript es un objeto: una función es un objeto, un Array es un objeto, una variable es un objeto. La principal diferencia entre un método y una función es que un método tiene un "receptor", mientras que las funciones no lo tienen. Hay algunos tecnicismos detrás de esto pero a efectos prácticos iniciales tomenlo como literal.

``` javascript
unObjeto.unMetodo(); // unObjeto es un receptor, mientras que .unMetodo() es un método
unaFuncion(argumentos); // unaFuncion() es una función sin receptor
```

**Comentarios en el código**

En JavaScript pueden realizarse comentarios de una línea (comienzan con //) o de líneas múltiples (comienzan con /* y finalizan con */). Pueden utilizarse indistintamente, pero recomiendo utilizar comentarios de líneas múltiples cuando necesiten comentar un bloque completo de código que no quieren que se ejecute sin tener que eliminarlo, o bien textos largos.

``` javascript
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Curabitur faucibus risus ac tellus accumsan tristique. 
Curabitur placerat aliquet purus at sodales. 
Mauris vestibulum enim et purus imperdiet, ac ultricies turpis feugiat. 
Nulla hendrerit commodo nibh, vitae eleifend turpis.
*/
// Lorem ipsum, conocido por ser el relleno de párrafos de developers que aún no tienen contenido para sus sitios.
```

**Null o Nulo**

Null es un [tipo de dato primitivo](https://developer.mozilla.org/es/docs/Glossary/Primitivo). El mismo representa una ausencia de valor intencional. En código es representado por el objeto `null`.

``` javascript
let x = null;
```
