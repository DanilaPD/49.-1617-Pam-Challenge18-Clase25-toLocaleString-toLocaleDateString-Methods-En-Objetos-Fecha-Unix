//* Object description con "function" y con "arrow":

//!

// Con Function:
const gatoA = {
  raza: "pointer",
  nombre: "Dulce",
  color: "gris",
  edad: 10,
  patas: 4,
  cola: 1,
  castrado: true,

  description1A: function () {
    console.log(
      `Este gato se llama ${this.nombre}, es de color ${this.color}, tiene ${
        this.edad
      } años, ${this.patas} patas y ${this.cola} cola. Es un ${this.raza} y ${
        this.castrado === true ? "está castrado" : "no está castrado"
      }.`
    );
  },
};

gatoA.description1A();

//*

// Con arrow:
const gatoB = {
  raza: "pointer",
  nombre: "Dulce",
  color: "gris",
  edad: 10,
  patas: 4,
  cola: 1,
  castrado: true,

  description1B: function () {
    const gatoB = () => {
      console.log(
        `Este gato se llama ${this.nombre}, es de color ${this.color}, tiene ${
          this.edad
        } años, ${this.patas} patas y ${this.cola} cola. Es un ${this.raza} y ${
          this.castrado === true ? "está castrado" : "no está castrado"
        }.`
      );
    };
    gatoB();
  },
};

gatoB.description1B();

//!

// Con Function:
const hotelA = {
  nombre: "Peace",
  color: "violeta",
  habitaciones: 100,
  pileta: 2,
  comedor: 1,
  cines: 5,

  description2A: function () {
    console.log(
      `Este marravilloso hotel se llama ${this.nombre}. Lo vas a reconocer a simple vista porque es ${this.color}. Tiene más de ${this.habitaciones} habitaciones, ${this.pileta} piletas, ${this.comedor} comedor y ${this.cines} cines. Vení, no te lo pierdas.`
    );
  },
};

hotelA.description2A();

//*

// Con arrow:
const hotelB = {
  nombre: "Peace",
  color: "violeta",
  habitaciones: 100,
  pileta: 2,
  comedor: 1,
  cines: 5,

  description2B: function () {
    const hotelB = () => {
      console.log(
        `Este marravilloso hotel se llama ${this.nombre}. Lo vas a reconocer a simple vista porque es ${this.color}. Tiene más de ${this.habitaciones} habitaciones, ${this.pileta} piletas, ${this.comedor} comedor y ${this.cines} cines. Vení, no te lo pierdas.`
      );
    };
    hotelB();
  },
};

hotelB.description2B();

//!

// Con Function:
const computadoraA = {
  marca: "Hp",
  color1: "rosa",
  color2: "turquesa",
  calidad: "buenísima",
  precio: "accesible",
  conviene: true,

  description3A: function () {
    console.log(
      `El nombre de la marca de esta fabulosa computadora es ${
        this.marca
      }; la que se puede observar en la imagen es ${
        this.color1
      }, pero también viene en ${this.color2}. La calidad de la misma es ${
        this.calidad
      } y el precio es súper ${this.precio}. ¿Acaso es una buena compra? ${
        this.conviene === true ? "Desde luego" : "No lo creo"
      }.`
    );
  },
};

computadoraA.description3A();

//*

// Con arrow:
const computadoraB = {
  marca: "Hp",
  color1: "rosa",
  color2: "turquesa",
  calidad: "buenísima",
  precio: "accesible",
  conviene: true,

  description3B: function () {
    const computadoraB = () => {
      console.log(
        `El nombre de la marca de esta fabulosa computadora es ${
          this.marca
        }; la que se puede observar en la imagen es ${
          this.color1
        }, pero también viene en ${this.color2}. La calidad de la misma es ${
          this.calidad
        } y el precio es súper ${this.precio}. ¿Acaso es una buena compra? ${
          this.conviene === true ? "Desde luego" : "No lo creo"
        }.`
      );
    };
    computadoraB();
  },
};

computadoraB.description3B();
