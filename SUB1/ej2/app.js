// MAIN

const necessaryExpensesPercentage = 0.5;
const optionalExpensesPercentage = 0.3;
const moneyToInvestPercentage = 0.2;

let totalAmount = getValue("Ingrese el monto total: ");
let necessaryExpenses = getAmount(totalAmount, necessaryExpensesPercentage);
let optionalExpenses = getAmount(totalAmount, optionalExpensesPercentage);
let moneyToInvest = getAmount(totalAmount, moneyToInvestPercentage);

showAmounts(totalAmount, necessaryExpenses, optionalExpenses, moneyToInvest);
