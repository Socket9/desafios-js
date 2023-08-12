// const testList = [
// 	{name: "001", capital: 150000, deadline: 30, interestRate: 0.15},
// 	{name: "002", capital: 300000, deadline: 180, interestRate: 0.10},
// 	{name: "003", capital: 485000, deadline: 60, interestRate: 0.23},
// ]



const creditOffers = getCreditOffers();

const listOfInterestGenerated = getInterestgenerated(creditOffers);

const bestOffer = findBestOffer(listOfInterestGenerated);

showOffer(bestOffer);