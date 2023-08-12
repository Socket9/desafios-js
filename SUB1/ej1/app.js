// Acumulador de variaciones
let totalVariation = 0;

// YEAR FORM
const yearForm = document.getElementById("yearForm");

// MAIN FORM
const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");
const totalVariationElement = document.getElementById("totalVariation");

yearForm.addEventListener("submit", setYear);
form.addEventListener("submit", loadRegister);
