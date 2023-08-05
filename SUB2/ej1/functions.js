// FUNCTIONS

const getValue = (msg) => {
  let value;
  do {
    value = Number(prompt(msg));
  } while (!value || value < 0 || value > 100);
  return value;
};

const isAdult = age => age >= 18; 

const showMessage = age => {
  alert(isAdult(age) ? "Bienvenido!" : "No puede ingresar porque es menor de 18 años.");
}