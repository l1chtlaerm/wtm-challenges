/*
const arrayPrincipal = [1, 2, 3, 5];
const arraySecundario = [35, 2, 6, 4, 5];

for (let i = 0; i < arrayPrincipal.length; i++) {
    // console.log(`Elemento ${i} de arrayPrincipal`);
    for (let j = 0; j < arraySecundario.length; j++) {
        // console.log(`Elemento ${j} de arraySecundario`);
        if (arrayPrincipal[i] === arraySecundario[j]) {
            console.log(`Comparando ${arrayPrincipal[i]} con ${arraySecundario[j]}`);
            console.log(`El valor de la posición ${i} del arrayPrincipal es igual al valor de la posición ${j} del arraySecundario`);
            console.log("");
        }
    }
};

Para guardar cambios en nuestro repositorio de git:

git status // muestra los archivos que han cambiado
git add . // agrega todos los archivos con cambios
git commit -m "su mensaje" // "compromete" los cambios agregados en el paso anterior
git push origin main // manda los cambios a su repositorio de github

git pull upstream main -X ours // trae los cambios en el repositorio padre de challenges

let array = [
    ["Peras", "Manzanas", "Bananas"],
    [1, 2, 3],
    ["Hola", "Como", "Va"]
]

for (let i = 0; i < array.length; i++) {
    console.log(`\n\nIteracion externa, i=${i}`);
    for (let j = 0; j < array[i].length; j++) {
        console.log(`** Iteración interna, j=${j}`);
        console.log(`**** array[${i}][${j}] = ${array[i][j]}`);
    }
};

let contador = 1;
while (contador <= 10) {
    console.log(`${contador} elefante(s) se balanceaban sobre la tela de una araña`);
    console.log(`Como veia que resistia fueron a llamar a otro elefante`);
    contador++
};

Math.floor(Math.random() * 100)

let k = 1;

do {
    console.log(k);
    k++;
} while (k < 5);

let diaDeAdopcion = Math.floor(Math.random() * 365);

for (let i = 1; i <= 365; i++) {
    console.log(`Visité el refugio en el día ${i}`)
    if (i === diaDeAdopcion) {
        break;
    }
}

console.log("Adoptamos un perro")
*/

let persona = {
    nombre: "Pablo",
    ocupacion: "Programador",
    edad: 29,
    cansado: false
};

persona.cansado = true;

if (persona.cansado === true) {
    console.log("Se termina la clase")
} else {
    console.log("Aún les queda sufrir")
};