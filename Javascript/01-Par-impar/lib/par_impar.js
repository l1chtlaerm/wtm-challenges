const parImpar = (number) => {
  let perro = new String;
  if ( number % 2 === 0 ) { 
    perro = 'par';
  } else if (typeof(number) === "boolean") {
    perro = 'no es un numero';
  } else if (typeof(number) === "string") {
    perro = 'no es un numero';
  } else {
    perro = 'impar';
  };
  console.log(typeof(number));
  return perro;
};

module.exports = parImpar; // No remover
