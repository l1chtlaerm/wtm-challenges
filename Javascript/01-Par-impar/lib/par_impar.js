const parImpar = (number) => {
  // Esta función debe devolver "par" si el número es par, "impar" si no lo es
  if (typeof(number) != "number") {
    return 'no es un numero';
  } else {
    const result = (number % 2 === 0 ? "par" : "impar");
    return result;
  };
};

module.exports = parImpar; // No remover
