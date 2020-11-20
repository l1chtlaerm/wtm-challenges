// let string = "hola hola hoala hola holA hola"

// console.log(string.match(/hola/i))

// let censura = "Pablo es un mal docente. La verdad que nunca vi una clase tan mal dada."

// console.log(censura)
// console.log(censura.replace(/mal/g, "bien"))

// let espacios = "Hola      esto    tiene    muchos   espacios, no?"

// console.log(espacios)
// console.log(espacios.replace(/\b\s{2,}\b/g, " "))

let frase = "hola mundo, como estan hoy?"
function capitalizar(string) {
    return string.split(/ /).map(elemento => {
        return elemento.replace(/^./, function (x) { return x.toUpperCase()})
    }).join(" ")
}
function capitalizar2(string) {
    return string.replace(/\b./g, x=>x.toUpperCase())
}
console.log(capitalizar(frase));
console.log(capitalizar2(frase));

https://regexone.com/