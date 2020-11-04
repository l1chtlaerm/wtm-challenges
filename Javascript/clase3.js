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