// Expresiones regulares

// Delimitador: //

// Basico: 
// /a/ => a
// /ab/ => a directamente seguido de b

// Cuantificadores:
// /abc?/ => ab seguido de 0 veces o una vez c
// /abc*/ => ab seguido de 0 veces o infinitas veces c
// ab 
// abc
// abccccccccccccccc
// abd // esto da falso

// /abc+/ => ab seguido de una vez o infinitas veces c
// /abc{4}/ => ab seguido de cuatro veces c

// Agrupados:

// /(abc)/

// abcfkjghfkabcghkgjabc

// /(abc)+/ => una o infinitas veces abc
// /(a|b)c/ => ac O bc

// Rangos:
 
// /./ => cualquier caracter
// /[aY7]/ => a O Y (mayuscula) O 7
// /[0-9]/ => cualquier caracter numérico
// /[a-zA-Z]/ => cualquier caracter alfabético
// /[^a-c]/ => cualquier caracter SALVO a, b o c

// /\d/ => lo mismo que /[0-9]/
// /\w/ => lo mismo que /[a-zA-Z0-9_]/
// /\W/ => lo mismo que /[^a-zA-Z0-9_]/
// /\s/ => cualquier tipo de espacio en blanco (sea un espacio literal, una tabulación, un salto de línea, etcétera) 

// Anclajes: 
// /^abc/ => da verdadero si el string comienza con abc
// abcdef // sería verdadero
// fabcdef // sería falso
// /abc$/ => da verdaero si el string finaliza con abc
// defabc // sería verdadero
// abcdef // sería falso
// /^abc$/ => sólo contiene abc
// abc // sería verdadero
// /\b/ => límite de la palabra (o sea que la expresión regular busca únicamente expresiones que comiencen o terminen en la palabra)

// Modificadores:

// /hola/i => va a ser verdadero para hola, hOlA, HOLA, Hola, holA
// /hola.mundo/m => va a ser verdadero para "hola mundo" o para "hola\nmundo"

// +pp (ccc) nnnnnnn
// p = codigo de país
// c = codigo de ciudad
// n = el numero

// +57 (1) 5551234


const numeroValido = (string) => {
    return string.match(/(^\+57) (\(\d{1,3}\)) (\d{7})$/)
}

console.log(numeroValido("+57 (1) 5551234"))
console.log(numeroValido("e+57 (1) 5551234"))
console.log(numeroValido("+57 (1) 5551234e"))

