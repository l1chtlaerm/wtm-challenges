## No me gusta el chocolate :(

¿Para qué necesitamos la herencia? Para evitar repetir la misma lógica en distintos lugares de nuestro código. Si hay muchas clases que comparten el mismo comportamiento, es posible que heredar de una clase padre sea lo más práctico.

Teniendo esto en cuenta, implementaremos dos clases: la clase `Postre` y la clase `Pastel`.

**Postre** debe tener:

1) Getters y setters para `nombre` y `calorías` (calorias es Number, no String)
2) Un método `calcularCalorias` que reciba el número de porciones y devuelva el total de calorías para esa cantidad de porciones
3) Un método `saludable` que debe devolver `true` sólo si el postre tiene menos de 300 calorías
4) Un getter `delicioso` que debe ser verdadero para todos los postres 

**Pastel** debe:

1) Heredar de `postre`
2) Recibir una nueva variable `sabor`, accesible a través de un getter `sabor`
3) Modificar `delicioso` para que devuelva `false` si el sabor es "Chocolate" (debe ser verdadero para todos los demás casos)

No hay ejemplos en este ejercicio, entren a los tests, mirenlos y corranlos en la consola!

**Importante**: recuerden declarar las propiedades en el constructor con _ y configurar getters y setters según sea necesario porque lo voy a estar evaluando! También tengan en cuenta que donde se pide una `funcion` no se está pidiendo un `getter`! Pueden servir para lo mismo pero los tests están esperando una función o un getter, según corresponda.

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
