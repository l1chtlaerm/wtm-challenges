## Políglotas

Digamos que tenemos un sitio web que está siendo muy exitoso, tanto que recibe visitantes de todo el mundo, por lo que nos pidieron que escribamos una función que devuelva un mensaje de bienvenida en el idioma del usuario para saludarlo.

Debemos implementar la función `saludo`, la cual recibirá dos Strings: el idioma y el nombre del usuario que estará ingresando a nuestro sitio. Por ejemplo:

``` javascript
saludo("italiano", "Giuseppe")
// returns "Benvenuto Giuseppe!"
saludo("quechua", "Roberto")
// returns "Bienvenido, Roberto!" (si el idioma no está en la lista, debe devolver por defecto la bienvenida en español)
```

La lista de idiomas es la siguiente:

```
ingles: 'Welcome',
checo: 'Vitejte',
danes: 'Velkomst',
holandes: 'Welkom',
estonio: 'Tere tulemast',
fines: 'Tervetuloa',
frances: 'Bienvenue',
aleman: 'Willkommen',
irlandes: 'Failte',
italiano: 'Benvenuto',
letón: 'Gaidits',
lituano: 'Laukiamas',
polaco: 'Witamy',
español: 'Bienvenido',
sueco: 'Valkommen',
galés: 'Croeso'
```

Tip: usar un Objeto de JS! 
¿Cómo vimos que podemos asignar un valor condicionalmente?

Recordatorio: el comando para correr los tests se debe ejecutar desde la raíz del ejercicio, y es `npx mocha`.
