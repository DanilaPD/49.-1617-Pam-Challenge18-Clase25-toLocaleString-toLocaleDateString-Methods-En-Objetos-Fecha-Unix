//* Métodos en objetos:

let auto1 = {
  marca: "Toyota",
  color: "rosa chicle",
  puertas: 5,
  calidad: "excelente",
  conviene: true,

  carDescription1: function () {
    console.log(
      `El nombre de la marca es ${this.marca}, el color de esta unidad es ${
        this.color
      }. Tiene ${this.puertas} puertas, la calidad es ${
        this.calidad
      }. Si te estás preguntando si te conviene ir por este modelo de auto, la respuesta es ${
        this.conviene === true ? "sí, por supuesto" : "no, la verdad que no"
      }.`
    );
  },
};

auto1.carDescription1();

//!

let auto2 = new Object({
  marca: "Toyota",
  color: "rosa chicle",
  puertas: 5,
  calidad: "excelente",
});

console.log(auto2);
console.log(typeof auto2, auto2);

//*

auto2["min"] = "20km/h";
console.log(auto2);

//*

const velocidadMax = () => {
  auto2.max = "200km/h";
  console.log(auto2);
};

velocidadMax();

//*

auto2.arranca = "Arranca y con todos los átomos";
console.log(auto2);
