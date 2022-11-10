//mmk to usd | 2100mmk = 1usd


const rates = {
    usd : 2100,
    eur : 2108,
    sgd : 1490
}

//from usd to mmk
function usdToMMK (inputUSD){
    return (inputUSD*rates.usd)+ " MMK";
}


//from any currency to mmk
function toMMK (inputAmount, fromCurrency){
    return (inputAmount * rates[fromCurrency])+ " MMK";
}

//from mmk to any currency  
function toCurrency(inputMMK, currency){
    return (inputMMK / rates[currency])+ currency
}

//from any currency to any currency
//500 to ? usd
//500sgd => mmk => usd

function toAnyCurrency(inputAmount, fromCurrency, toCurrency){
    let mmk = inputAmount * rates[fromCurrency];
    let result = mmk / rates[toCurrency];
    return result+toCurrency;
}


// console.log(usdToMMK(1000))
// console.log(toMMK(200,"usd"))
// console.log(toMMK(200,"eur"))
// console.log(toMMK(200,"sgd"))
// console.log(toCurrency(25000,"usd"))
// console.log(toCurrency(25000,"eur"))
// console.log(toCurrency(25000,"sgd"))

console.log(toAnyCurrency(500,"sgd","usd"))
console.log(toAnyCurrency(1,"sgd","sgd"))
console.log(toAnyCurrency(500,"eur","usd"))