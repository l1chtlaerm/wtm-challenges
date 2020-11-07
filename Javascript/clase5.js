/*
this // keyword 'esto' que es autoreferencial
getter // obtener
setter // fijar o fijador

const robot = {
    modelo: 'T-850',
    afiliacion: 'Skynet',
    encendido: false,
    buscarASarahConnor () {
        console.log(`Soy el modelo ${this.modelo}, y debo eliminar a Sarah Connor`)
    },
    saludo: () => {
        console.log(`Soy ${this.modelo}, necesito tu ropa, tus botas y tu motocicleta`)
    }
}

// https://developer.mozilla.org/es/docs/Glossary/Global_object
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

robot.buscarASarahConnor();
robot.saludo();

robot.modelo = "T-1000"

robot.buscarASarahConnor()

const produccionEnMasa = (modelo, afiliacion, encendido) => {
    return {
        modelo,
        afiliacion,
        encendido,
        buscarASarahConnor () {
            console.log(`Soy el modelo ${this.modelo}, y debo eliminar a Sarah Connor`);
        }
    }
}

const t1000 = produccionEnMasa("T-1000", "Skynet", false)

// console.log(t1000);

const estacionDeCarga = {
    _name: "Shell",
    _capacidadDeRobot: 120,
    _activa: true,
    _lugaresDeCarga: ["Lento", "Mediano", "Rapido"],

    set capacidadDeRobot(nuevaCapacidad) {
        if (typeof nuevaCapacidad === 'number') {
            this._capacidadDeRobot = nuevaCapacidad
        } else {
            console.log("Este valor no es numérico")
        }
    },
    get capacidadDeRobot() {
        return this._capacidadDeRobot;
    }
}

const cuentaBancaria = {
    _monto: 100
}

cuentaBancaria._monto = 300000000

console.log(estacionDeCarga.capacidadDeRobot);

const persona = {
    // no modificar las propiedades que comienzan con _ por favor!
    _nombre: "Juan",
    _apellido: "Carlos",
    _edad: 45,
    _intereses: {
        hobbies: "Futbol",
        ocupacion: "Programador"
    },
    get nombreCompleto() {
        if (this._nombre && this._apellido) {
            return `${this._nombre} ${this._apellido}`
        } else {
            return "Falta el nombre o el apellido."
        }
    },
    set edad(edadNueva) {
        if (typeof edadNueva === 'number') {
            this._edad = edadNueva;
        } else {
            console.log("El valor no es un número");
        }
    }
}

// console.log(persona.nombreCompleto);

// persona.edad = 44;

// console.log(persona._edad);

// const { hobbies } = persona._intereses;

// console.log(hobbies);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object 

const keysPersona = Object.keys(persona);

// console.log(keysPersona);

const entriesPersona = Object.entries(persona);

// console.log(entriesPersona);

const nuevaPersona = Object.assign({sexo: "masculino", vivo: true}, persona)

// console.log(nuevaPersona);

console.log(persona.hasOwnProperty('sexo'));
console.log(nuevaPersona.hasOwnProperty('sexo'));
*/
