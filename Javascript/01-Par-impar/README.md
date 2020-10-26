#### ***Importante: Instalar ESlint***

Ingresar a [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y hacer click en **Install**.

Para qué? ESlint les marcará automáticamente errores de sintaxis o de estilo en su editor de texto.

## Specs

Let's start with a very simple algorithm. Open the `lib/even_or_odd.js` file. Implement the `evenOrOdd` function which takes one parameter `number` (of type `Number`) and returns a `String`:

- `"even"` if the number is even (0, 2, 4, etc.)
- `"odd"` if the number is odd (1, 3, 5, etc.)

**⚠️ Warning**: In JavaScript, you need to **explicitly** write the `return` keyword, otherwise [the function will return `undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return#Syntax)! The only exception to this rule is when you use a one-liner arrow function with [implicit return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Function_body).

 _Hint: remember the Ruby modulo operator? It also exists in JavaScript and might be useful!_

Run `rake` to check your style and the correctness of your function!

Once the first exercise is all green (style + tests), **please commit and push** 🙏

## About the testing setup

Open the `Rakefile` in Sublime Text. You will find two tasks:

- `eslint`, a [JavaScript linter](http://eslint.org/), the equivalent of Rubocop in the Ruby world.
- `mocha`, a [JavaScript testing framework](https://mochajs.org), the equivalent of Rspec in the Ruby world.

These two commands are run from the `node_modules` folder. It was created by running `yarn install` in the `04-FrontEnd` folder (`cd ../..`), reading the `package.json` file (open it!).
