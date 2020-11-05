const assert = require("assert");
const saludo = require("../lib/saludo");

describe("saludo", () => {
  it("Debe devolver un saludo apropiado para Giuseppe de Italia", () => {
    assert.deepStrictEqual(saludo("italiano", "Giuseppe"), "Benvenuto, Giuseppe!");
  });
  it("Debe devolver un saludo apropiado para Erin de Irlanda", () => {
    assert.deepStrictEqual(saludo("irlandes", "Erin"), "Failte, Erin!");
  });
  it("Debe devolver un saludo en Español por defecto si el idioma provisto no está en la lista", () => {
    assert.deepStrictEqual(saludo("mapuche", "Akwen"), "Bienvenido, Akwen!");
  });
});
