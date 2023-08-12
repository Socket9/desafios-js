// Cargar registro
const loadCashFlow = (event) => {
    event.preventDefault();
    // Obtengo los valores ingresados
    const cashFlow = {
        month: document.getElementById("month").value,
        income: Number(document.getElementById("income").value),
        outflow: Number(document.getElementById("outflow").value)
    }

    // Valido los valores ingresados
    if (cashFlowIsValid(cashFlow)) {
        // Creo una nueva fila "tr"
        const newRow = document.createElement("tr");

        // Creo los "td" para cada valor ingresado por input
        const monthItem = document.createElement("td");
        monthItem.innerText = cashFlow.month.toUpperCase();

        const incomeItem = document.createElement("td");
        incomeItem.innerText = cashFlow.income;

        const outflowItem = document.createElement("td");
        outflowItem.innerText = cashFlow.outflow;

        // Los agrego como hijos al "tr" creado anteriormente
        newRow.appendChild(monthItem);
        newRow.appendChild(incomeItem);
        newRow.appendChild(outflowItem);

        // Agrego la fila creada ya con los valores a la tabla
        tableBody.appendChild(newRow);

        // Actualizo la variación total con los valores cargados
        updateTotalVariation(cashFlow.income, cashFlow.outflow);

        // Reseteo el form
        form.reset();
    }
};

// Actualizar Variación Total
const updateTotalVariation = (income, outflow) => {
    const totalVarContainer = document.getElementById('totalVarContainer');
    let variation = income - outflow;
    totalVariation += variation;
    totalVariationElement.innerText = totalVariation.toFixed(2);

    if(totalVariation < 0){
        totalVarContainer.classList.remove('profitable');
        totalVarContainer.classList.add('unprofitable');
    }
    else{
        totalVarContainer.classList.remove('unprofitable');
        totalVarContainer.classList.add('profitable');
    }
};

// Setear año cargado
const setYear = (event) => {
    event.preventDefault();
    // Obtengo el valor del input
    const yearInputValue = document.getElementById("year");

    if (yearIsValid(yearInputValue.value)) {
        // Obtengo elemento "p" donde irá el valor
        const yearElement = document.getElementById("yearElement");
        // obtengo el boton de borrar año y el contenedor
        const yearBtn = document.getElementById("yearBtn");
        const yearContainer = document.getElementById("yearContainer");

        // Agrego al elemento p el valor obtenido del input
        yearElement.innerText = yearInputValue.value;

        // Reseteo el formunlario
        yearForm.reset();

        // Muestro el elemento en pantalla
        yearContainer.classList.remove("hide");
        yearContainer.classList.add("show");

        // Desactivo el input y el boton
        yearInputValue.classList.add("disabled");
        yearInputValue.placeholder = "";
        yearInputValue.readOnly = true;
        yearBtn.disabled = true;
    }
};

// Borrar año
const deleteYearBtn = (event) => {
    const yearInput = document.getElementById("year");
    const yearElement = document.getElementById("yearElement");
    const yearContainer = document.getElementById("yearContainer");

    yearContainer.classList.remove("show");
    yearContainer.classList.add("hide");
    yearInput.classList.remove("disabled");
    yearInput.placeholder = "Año";

    yearInput.readOnly = false;
    yearBtn.disabled = false;
};


/*
    FUNCION EJERCICIO 1 SUB 2
*/

const cashFlowIsProfitable = cashFlow => {
    if(cashFlow.income === cashFlow.outflow){
        return 0;
    }
    return cashFlow.income > cashFlow.outflow ? 1 : -1;
}


// VALIDACIONES

const cashFlowIsValid = (cashFlow) => {
    if(monthIsValid(cashFlow.month) && amountIsValid(cashFlow.income) && amountIsValid(cashFlow.outflow)){
        return true;
    }
    return false;
}

const monthIsValid = (str) => {
    const spanishValidMonth = [
        "enero",
        "febero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ];
    const englishValidMonth = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "octubre",
        "november",
        "december",
    ];
    return (
        spanishValidMonth.includes(str.trim().toLowerCase()) ||
        englishValidMonth.includes(str.trim().toLowerCase())
    );
};

const amountIsValid = (value) => {
    const intValue = value;
    return intValue != NaN && intValue > 0;
};

const yearIsValid = (str) => {
    const actualDate = new Date();
    const lowestYearAllowed = 2000;
    const number = Number(str);
    return number >= lowestYearAllowed && number <= actualDate.getFullYear();
};

