//* ToLocaleString a un Date con parámetros:

const day1 = new Date(1991, 05, 03);

let options1 = {
  weekday: "short",
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

const toLocaleConParams1 = (date) => {
  console.log(
    "To LocaleDateString with Parametres: ",
    date.toLocaleDateString("es", options1)
  );
};

toLocaleConParams1(day1);

//*

const day2 = new Date(1991, 05, 03, 11);

let options2 = {
  weekday: "short",
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
};

const toLocaleConParams2 = (date) => {
  console.log(
    "To LocaleDateString with Parametres: ",
    date.toLocaleDateString("es", options2)
  );
};

toLocaleConParams2(day2);

//*

const day3 = new Date(1991, 05, 03, 11);

let options3 = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
};

const toLocaleConParams3 = (date) => {
  console.log(
    "To LocaleDateString with Parametres: ",
    date.toLocaleDateString("es", options3)
  );
};

toLocaleConParams3(day3);
