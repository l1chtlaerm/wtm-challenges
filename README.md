# wtm-challenges
Bootcamp challenges! Cada carpeta tiene desafíos asociados según las distintas herramientas que estaremos viendo en el curso. 

En primera instancia deben hacer tres cosas:

1. Hacer click en el botón **Fork** en la esquina superior derecha de este repositorio. Esto generará una copia de este repositorio en su cuenta de GitHub.

2. Clonar el repositorio a su computadora desde la terminal en la carpeta que estén utilizando para guardar sus proyectos. El comando que deben correr es:

``` bash
git clone git@github.com:***sunombredeusuario***/wtm-challenges.git
```
3. Ingresar al repositorio clonado y correr el siguiente comando:

``` bash
git remote add upstream git@github.com:worldtechmakers/wtm-challenges.git
```

Esto habilitará que puedan correr un comando para tener los desafíos actualizados ya que iremos agregando nuevos con el correr de los días. El comando es el siguiente:

``` bash
git pull upstream main
```

#### ***Importante: Instalar ESlint***

Ingresar a [este sitio](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y hacer click en **Install**.

Para qué? ESlint les marcará automáticamente errores de sintaxis o de estilo en Visual Studio Code. Es posible que ya lo tengan.

Utilizaremos Mocha como testing framework para los ejercicios. Esto hará que puedan autosustentarse en los desafíos más técnicos y también se introduzcan en **Test Driven Development**. 

¿Qué es **TDD**? Para un primer contacto recomiendo consultar [el siguiente sitio](https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/). 

¿Cómo testear los desafíos? desde la carpeta principal de cada desafío deben correr el siguiente comando:

``` bash
npx mocha
```

También es importante que corran el comando 'yarn install' desde esta misma carpeta en su terminal para que se generen las distintas dependencias de los desafíos.
