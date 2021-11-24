//* Transformando una fecha UNIX con un ToLocaleDateString:

const d1 = new Date(1637717183);
let text = d1.toLocaleDateString();

console.log(d1);

//*

let d2 = new Date(1637717183).toLocaleDateString("es-AR");

console.log(d2);
