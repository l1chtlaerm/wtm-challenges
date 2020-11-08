const assert = require("assert");
const nuevoUsuario = require("../lib/nuevo_usuario");

let usuario = nuevoUsuario("jeancarlos@microsoft.com", 47, "Jean");
let usuario2 = nuevoUsuario("pablo@microsoft.c", 29, "Pablo", "Andrizzi");

describe("nuevoUsuario 1", () => {
  it("debe retornar el nombre correctamente", () => {
    assert.strictEqual(usuario._nombre, "Jean");
  });
  it("debe retornar undefined para la propiedad apellido", () => {
    assert.strictEqual(usuario._apellido, undefined);
  });
  it("debe retornar 'Falta nombre o apellido' para nombreCompleto", () => {
    assert.strictEqual(usuario.nombreCompleto, "Falta nombre o apellido");
  });
  it("no debe permitir la asignación de un valor a nombreCompleto", () => {
    usuario.nombreCompleto = "Otracosa"
    assert.strictEqual(usuario.nombreCompleto, "Falta nombre o apellido");
  });
  it("debe retornar el correo adecuadamente", () => {
    assert.strictEqual(usuario._email, "jeancarlos@microsoft.com");
  });
});

describe("nuevoUsuario 2", () => {
  it("debe retornar el nombre correctamente", () => {
    assert.strictEqual(usuario2._nombre, "Pablo");
  });
  it("debe retornar el apellido correctamente", () => {
    assert.strictEqual(usuario2._apellido, "Andrizzi");
  });
  it("debe retornar el nombre completo correctamente", () => {
    assert.strictEqual(usuario2.nombreCompleto, "Pablo Andrizzi");
  });
  it("no debe permitir la asignación de un valor a nombreCompleto", () => {
    usuario.nombreCompleto = "Otracosa"
    assert.strictEqual(usuario2.nombreCompleto, "Pablo Andrizzi");
  });
  it("debe retornar 'no es un correo válido' si el mismo no lo es", () => {
    assert.strictEqual(usuario2._email, "no es un correo válido");
  });
});

