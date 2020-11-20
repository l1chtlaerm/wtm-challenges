const assert = require("assert");
const modulos = require("../lib/postres");
const Postre = modulos.Postre;
const Pastel = modulos.Pastel;


describe("Postre", () => {
    let postreSano = new Postre("Manzana", 200);
    let postreCalorico = new Postre("Flan con Crema", 500);  
  it("Debe haber un getter para nombre", () => {
    assert.deepStrictEqual(postreSano.nombre, "Manzana");
    assert.deepStrictEqual(postreCalorico.nombre, "Flan con Crema");
  });
  it("Debe haber un getter para calorias", () => {
    assert.deepStrictEqual(postreSano.calorias, 200);
    assert.deepStrictEqual(postreCalorico.calorias, 500);
  });
  it("Un postre es saludable si está debajo de 300 calorías", () => {
    assert.deepStrictEqual(postreSano.saludable(), true);
    assert.deepStrictEqual(postreCalorico.saludable(), false);
  });
  it("Todos los postres son deliciosos", () => {
    assert.deepStrictEqual(postreSano.delicioso, true);
    assert.deepStrictEqual(postreCalorico.delicioso, true);
  });
  it("Las variables deben haber sido declaradas con underscores en el constructor", () => {
    assert.deepStrictEqual(postreSano._nombre, "Manzana");
    assert.deepStrictEqual(postreCalorico._nombre, "Flan con Crema");
    assert.deepStrictEqual(postreSano._calorias, 200);
    assert.deepStrictEqual(postreCalorico._calorias, 500);
  });
  it("La funcion calcularCalorias debe devolver el número de calorias para el número de porciones provisto", () => {
    assert.deepStrictEqual(postreSano.calcularCalorias(4), 800);
    assert.deepStrictEqual(postreCalorico.calcularCalorias(3), 1500);
  });
  it("Debe haber un setter para nombre", () => {
    postreSano.nombre = "Manzanilla"
    postreCalorico.nombre = "Flan"
    assert.deepStrictEqual(postreSano.nombre, "Manzanilla");
    assert.deepStrictEqual(postreCalorico.nombre, "Flan");  
  });
  it("Debe haber un setter para calorias", () => {
    postreSano.calorias = 420
    postreCalorico.calorias = 1337
    assert.deepStrictEqual(postreSano.calorias, 420);
    assert.deepStrictEqual(postreCalorico.calorias, 1337); 
  });
});


describe("Pastel", () => {
  let bizcochuelo = new Pastel("Bizcochuelo", 600, "Vainilla");
  let selvaNegra = new Pastel("Selva Negra", 500, "Chocolate");  
  it("Debe heredar de Postre", () => {
    assert.deepStrictEqual(bizcochuelo instanceof Postre, true);
    assert.deepStrictEqual(selvaNegra instanceof Postre, true); 
  });
  it("Debe heredar todo salvo el constructor y los getters de sabor y delicioso", () => {
    assert.deepStrictEqual(Object.getOwnPropertyNames(Pastel.prototype), ['constructor', 'sabor', 'delicioso']);
  });
  it("Debe ser parte de su propia clase Pastel", () => {
    assert.deepStrictEqual(bizcochuelo instanceof Pastel, true);
    assert.deepStrictEqual(bizcochuelo instanceof Pastel, true); 
  });
  it("Debe tener sus propias reglas para deliciosidad", () => {
    assert.deepStrictEqual(bizcochuelo.delicioso, true);
    assert.deepStrictEqual(selvaNegra.delicioso, false); 
  });
  it("Debe tener un getter para sabor", () => {
    assert.deepStrictEqual(bizcochuelo.sabor, "Vainilla");
    assert.deepStrictEqual(selvaNegra.sabor, "Chocolate"); 
  });
  it("La variable sabor debe haber sido declarada con underscore en el constructor", () => {
    assert.deepStrictEqual(bizcochuelo._sabor, "Vainilla");
    assert.deepStrictEqual(selvaNegra._sabor, "Chocolate");
  });
});

