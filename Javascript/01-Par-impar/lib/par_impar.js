const parImpar = (number) => {
  // Esta función debe devolver "par" si el número es par, "impar" si no lo es
  const result = (number % 2 === 0 ? "par" : "impar");
  return result;
};

module.exports = parImpar; // No remover
