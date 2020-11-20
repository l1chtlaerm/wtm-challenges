## Cubos y cuboides

¿Qué es un cuboide se estarán preguntando? Recomiendo leer [lo siguiente](https://es.wikipedia.org/wiki/Ortoedro) antes de avanzar con el ejercicio. La dificultad de este desafío está en cómo extender ciertas particularidades matemáticas a lo que ya sabemos de clases y herencia.

Estaremos definiendo dos clases: **Cuboide** y **Cubo**. En un **Cuboide** `base`, `profundidad` y `altura` pueden tener distinta `longitud`. Un cubo es un cuboide donde todos sus lados tienen la misma `longitud`. 

Teniendo en cuenta esto, la clase **Cuboide** debe tener:

1) Un constructor que reciba `base`, `profundidad` y `altura` y los almacene en los valores con underscore correspondientes
2) Un getter que devuelva el `volumen` del cuboide (el volumen de un cuboide se calcula con la fórmula `base * profundidad * altura`)
3) Un getter que devuelva la `superficie` del cuboide (la superficie de un cuboide se calcula con la fórmula `2 * (base * profundidad + profundidad * altura + altura * base)`)

La clase **Cubo** debe:

1) Recibir un sólo parámetro `base` en su constructor
2) Heredar los demás métodos de la clase **Cuboide**

Ejemplos:

``` javascript

let cuboide = new Cuboide(1, 2, 3)
let cubo = new Cubo(1)

cuboide._base           // returns 1
cuboide._profundidad    // returns 2
cuboide._altura         // returns 3
cuboide.volumen         // returns 6
cuboide.superficie      // returns 22

cubo._base              // returns 1
cubo._profundidad       // returns 1
cubo._altura            // returns 1
cubo.volumen            // returns 1
cubo.superficie         // returns 6
```

Tip: si usan `super` en el constructor del cubo probablemente su vida sea mucho más sencilla :)

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
