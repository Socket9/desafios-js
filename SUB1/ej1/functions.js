// FUNCTIONS

const getValue = (msg) => {
  let value;
  do {
    value = Number(prompt(msg));
  } while (!value || value < 0);
  return value;
};

const getBreakevenPoint = (fixedCost, salePrice, variableCost) => {
	let breakevenPoint = fixedCost / (salePrice - variableCost);
	return breakevenPoint;
}

