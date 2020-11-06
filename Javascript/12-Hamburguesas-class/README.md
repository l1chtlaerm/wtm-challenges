## ¿Quiere agrandar su combo?

Estaremos creando una clase "Combo" que funcionará como una orden genérica de comidas rápidas. La idea es que cuando se cree una instancia del objeto "Combo" podremos pasarle un parámetro que modifique la orden, y el método "descripcion" debe devolver las condiciones especiales que pasamos al combo, más el contenido básico del mismo: una hamburguesa. Ej:

``` javascript
combo1 = new Combo();
combo2 = new Combo("Coca Cola Grande");

combo1.descripcion // returns "Hamburguesa";
combo2.descripcion // returns "Hamburguesa con Coca Cola Grande";
```

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
