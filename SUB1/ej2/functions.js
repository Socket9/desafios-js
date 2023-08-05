// FUNCTIONS

const getValue = (msg) => {
  let value;
  do {
    value = Number(prompt(msg));
  } while (!value || value < 0);
  return value;
};

const getAmount = (totalAmount, percentage) => {
  let processedAmount = totalAmount * percentage;
  return processedAmount;
};

const showAmounts = (totalAmount,necessaryExpenses,optionalExpenses,moneyToInvest) => {
  alert(`Monto total ingresado: $${totalAmount}
         Monto para gastos necesarios: $${necessaryExpenses}
         Monto para gastos opcionales: $${optionalExpenses}
         Monto para ahorro/inversiones: $${moneyToInvest}`);
};
