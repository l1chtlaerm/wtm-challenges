/*
// Operador cortocircuito
let numero = 0;
let nombre = "Pablo";

let cortocircuito = numero || nombre;

console.log(cortocircuito);

const array = ["Lunes", "Martes", "Miércoles"]

console.log(array);

array[0] = "Sabado"

console.log(array);

array.push("Jueves", "Viernes", "Domingo")

console.log(array);

console.log(array[array.length - 1]);

array[array.length - 2] = null

console.log(array);

array.forEach(dia => {
    console.log(`El valor ${dia} está en la posición ${array.indexOf(dia)}`);
});

console.log("");
console.log(array.pop());
console.log(array);

array.unshift("Lunes");

console.log(array);

array.shift()

console.log(array);

// array.pop() remueve y devuelve el último elemento de un array
// array.push() agrega valores al final de un array
// array.shift() remueve y devuelve el primer elemento de un array
// array.unshift() agrega valores al principio de un array

const semana = ["Domingo", "Lunes", "Martes", 
               "Miércoles", "Jueves", "Viernes", "Sábado"]

console.log(semana.slice(1,6));

const array2 = [semana, "Pablo", "Carlos", 4]

console.log(array2[0][1]);

// escribir una funcion que reciba un numero y que genere un array
// con todos los números consecutivos del 1 hasta ese numero como
// valores en el mismo.

const hello = (numero) => {
  const array = [];
  for(let contador = 1; contador <= numero; contador++){
    array[contador] = contador;
  }
  array.shift();
  return array;
};

console.log(hello(5));

// escribir una función que recibirá un array de numeros enteros
// y un número entero.
// la función debe hallar la enesima potencia de un número del array
// donde N es el número de la potencia y la posición en el array
// del número a elevar.

const enesimaPotencia = (...args) => {
    console.log(args);
    return args[0][args[1]] ** args[1]    
};

const arrayPotencia = [1, 6, 3, 25, 5, 6]
const numeroPotencia = 4

console.log(enesimaPotencia(arrayPotencia, numeroPotencia));

const arraynumerico = [1, 2, 3, 4]

const arrayInvertido = (array) => {
    const resultado = [];
    for(let contador = array.length - 1; contador >= 0; contador--) {
        resultado.push(array[contador]);
    }
    return resultado;
};

console.log(arrayInvertido(arraynumerico));
*/

const array = [];
