//* Pasar el método para agregar elementos con parámetros:

let vacaciones = new Object({
  option1: "montañas",
  option2: "playas",
  option3: "sierras",
  option4: "lagos",
});

const addOption = () => {
  vacaciones.option5 = "bosque";
  console.log(vacaciones);
};

addOption();
