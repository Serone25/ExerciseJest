/*const sum =(a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum };*/

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

/*function fromEuroToDollar(euro){
    let dollar = euro * 1.2;
    return dollar;
}
module.exports = {fromEuroToDollar};*/

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yenes
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    // convertimos el valor a Libras
    let valueInPound = valueInYen / (127.9/0.8)   //159.875;
    // retornamos el valor
    return valueInPound;
}
module.exports = {fromEuroToDollar,fromYentoPound,fromDollarToYen};