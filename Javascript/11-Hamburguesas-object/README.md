## Hamburguesas 1

¿Tienen hambre? Yo si! Pero subo de peso muy fácil en cuarentena :( por lo que decidí que me ayuden a hacer una función que compute las calorías de un menú de comidas rápidas para saber cuánto estoy engordando con cada comida. 

La función `fastFood` recibirá tres parámetros String (hamburguesa, acompañamiento, bebida) y debe devolver la cantidad de calorías de todos los elementos. El objetivo es que construyan un Objeto *global* utilizando la información debajo y lo utilicen para computar las calorías dentro de la función.

```
Hamburguesa: 500
Hamburguesa con Queso: 550
Hamburguesa Vegana: 370
Nuggets de Pollo: 400
Papas Fritas: 300
Batatas Fritas: 400
Ensalada: 150
Coca Cola: 150
Sprite: 120
Jugo Natural: 40
```

De esta manera, nuestra función debe devolver algo como lo siguiente:

``` javascript
fastFood("Hamburguesa", "Papas Fritas", "Sprite")
// returns 920
```

¿Les dio bien? ¡Perfecto! Entonces ahora quiero implementar también la posibilidad de pasar varios **menúes** completos en lugar de tener que pasar cada uno de los elementos por separado. Por ejemplo?

```
Cajita Feliz: Hamburguesa con Queso, Papas Fritas, Coca Cola
Menú Saludable: Hamburguesa Vegana, Ensalada, Jugo Natural
Menú de Pollo: Nuggets de Pollo, Batatas Fritas, Sprite
```

Para esto, implementar la función `fastFood2` debe recibir como parámetro un array de órdenes y/o comidas y debe devolver un array donde en cada posición del mismo se encuentren las calorías incluídas. Por ejemplo:

``` javascript
fastFood2(["Hamburguesa", "Menú Saludable", "Sprite", "Menú de Pollo"])
// returns [500, 560, 120, 920]
```

**Restricciones:** no vale computar las calorías de los menúes de antemano y agregarlas al Objeto original! Hagan un nuevo Objeto.

Tips:
1) Recuerden lo visto acerca de nesting de objetos/arrays.
2) Recuerden que pueden llamar una función dentro de otra ;)
3) Si intentan acceder a un key de un objeto y ese key no existe dentro del objeto, recibirán *undefined* como respuesta. Pueden usarlo a su favor.


Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
