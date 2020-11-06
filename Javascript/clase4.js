/*
scope // Lugares donde podemos acceder o referenciar una variable dentro de nuestro código
const monitor = "SyncMaster TA550";

const partesDeComputadora = () => {
    let monitor = "SyncMaster 9000";
    let procesador = "Intel I5 2770k";
    return monitor;
}

console.log(monitor);
console.log(partesDeComputadora());
console.log(monitor);

array.forEach(element => {
    instagram + element
});

const estaLloviendo = (estado) => {
    let clima = "Está soleado";
    if (estado) {
        clima = "Está lloviendo";
        console.log(clima);
    }
    console.log(clima);
}

estaLloviendo(true);

const alumno = {
    nombre: "Rafael Arango",
    edad: 15,
    desempeño: "Bueno"
}

alumno.hijos = 2;
alumno.edad = 26;
delete alumno.desempeño;

CREATE // Crear
READ // Leer
UPDATE // Actualizar
DELETE // Borrar

console.log(alumno);

const string = {
    length () {
        
    }
}

console.log("Pablo".length);

let automovil = {
    color: "Rojo",
    funcionamiento: "Bien gracias",
    encendido () {
        console.log("Arrancando");
    },
    apagar () {
        console.log("Al cabo que ni estaba funcionando");
    },
    autopartes: {
        ruedas: 4,
        ABS: "No",
        airbags: "No, en este auto morimos como hombres"
    },
    ocupantes: ["Pablo", "Jose", "Carla"]
}

// console.log(automovil.color);
// automovil.encendido();

console.log(automovil.ocupantes[2]);

const motocicleta = {
    ruedas: 2,
    color: "verde"
}
const motocicleta2 = {
    ruedas: 2,
    pasajeros: 3
}

// console.log(motocicleta)
// console.log(motocicleta2)

const pintarMotocicleta = (objeto) => {
    objeto.color = "Rojo";
};

pintarMotocicleta(motocicleta)
pintarMotocicleta(motocicleta2)

// console.log(motocicleta2)
// console.log(motocicleta);

let naveespacial = {
    tripulacion: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Pablo', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 


for (let tripulante in naveespacial.tripulacion) {
    console.log(tripulante)
    console.log(naveespacial.tripulacion[tripulante].name);
}

const alimentos = {
    "Cuarto de libra": 1200,
    "Coca Cola Grande": 600,
    "Papas Fritas Grandes": 1600
}

const calorias = (hamburguesa, acompañamiento, bebida) => {
    return 1200+600+1600
}

calorias("Cuarto de libra", "Coca Cola Grande", "Papas Fritas Grandes");
*/

