// Cargar nombre del plan
const getName = msg => {
    let name;
    const regEx = /^[a-zA-Z0-9\s]*$/
    do {
      name = prompt(msg);
    } while (!name && regEx.test(name));
    return name.toUpperCase();
};

// Cargar valor FLOAT
const getFloatValue = msg => {
    let value;
    do {
      value = Number(prompt(msg));
    } while (!value || value < 0 || value > 9999999);
    return value;
};

// Cargar valor ENTERO
const getDeadline = msg => {
    let value;
    do {
      value = Number(prompt(msg));
    } while (!value || !Number.isInteger(value) || value < 0 || value > 365 || value % 30 != 0);
    return value;
};

// Cargar porcentaje de comisión
const getPercentage = msg => {
    let percentage;
    do {
      percentage = Number(prompt(msg));
    } while (!percentage || percentage < 0 || percentage > 100);
    return percentage / 100;
};

// Cargar opcion (1 o 2) para continuar o cancelar la carga de empleados
const getBool = msg => {
    let value;
    do {
      value = Number(prompt(msg));
    } while (!value || !Number.isInteger(value) || value < 1 || value > 2);
    return value === 1 ? true : false;
  };

const getCreditOffers = () => {
    const arr = [];
    // const creditOffer = {};
    let continueVar = true;

    while(continueVar){
        // Creo un objeto oferta
        const creditOffer = {
            name: getName("Nombre del plan: "),
            capital: getFloatValue("Capital: "),
            deadline: getDeadline("Plazo: "),
            interestRate: getPercentage("Tasa de interes(15, 20, 25): ")  // Se pone porcentaje en decimal: 15% = 0.15, en la formula del enunciado no aclaraaa.
        }

        // Guardo la oferta en el array auxiliar
        arr.push(creditOffer);
        
        // Pregunto si quiero cargar otra oferta
        continueVar = getBool("Desea cargar otro plan? (1.Si | 2.No):");
    }
    
    return arr;
}

// Generar lista con los intereses generados según las ofertas cargadas
const getInterestgenerated = offerList => {
    const listOfInterestGenerated = []

    // Recorro la lista de ofertas para calcular el interes generado de cada una
    offerList.forEach(offer => {

        // Calculo el interes generado
        let interestGenerated = (offer.capital * offer.deadline * offer.interestRate) / 100;

        // Cargo los datos en un objeto
        interestGeneratedByTheOffer = {
            name: offer.name,
            interestGenerated: interestGenerated
        }

        listOfInterestGenerated.push(interestGeneratedByTheOffer);
    });

    return listOfInterestGenerated;
}

const findBestOffer = list => {
    let bestOffer = list[0];
    list.forEach(element => {
        if(bestOffer.interestGenerated < element.interestGenerated){
            bestOffer = element;
        }
    })
    return bestOffer;
}

const showOffer = (offer) => {
    alert(`La mejor oferta es:
            Nombre: ${offer.name}
            Intereses generados: $${offer.interestGenerated}`)
}