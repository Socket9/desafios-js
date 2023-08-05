// MAIN

let fixedCost = getValue("Ingrese los costos fijos: ");
let salePrice = getValue("Ingrese el precio de venta: ");
let variableCost = getValue("Ingrese los costos variables: ");

let breakevenPoint = getBreakevenPoint(fixedCost,salePrice, variableCost);

alert(`El punto de equilibrio es ${breakevenPoint.toFixed(2)}`);