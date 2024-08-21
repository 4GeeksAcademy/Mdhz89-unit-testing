// app.js file content
console.log("Hello World")

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const FromDollarToYen = function(valueInDollar){

let valueInYen = valueInDollar * 147.0;

return valueInYen;

}

const FromYenToPound = function (valueInYen) {

    let valueInPound = valueInYen * 0.56

    return valueInPound
}

const sum = (a,b)  => {
    return a + b
}
console.log(sum(7,3));

module.exports = {sum, fromEuroToDollar, FromDollarToYen, FromYenToPound};
