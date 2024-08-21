// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 147 yenes", function () {
    const { FromDollarToYen } = require('./app.js');

    const yenes = FromDollarToYen(1); // Convertir 1 dólar a yenes

    const expected = 2 * 147.00; // Valor esperado en yenes

    expect(FromDollarToYen(2)).toBe(294.00) // Comparar el valor convertido con el valor esperado
});

test("One yen should be 0.56 punds", function () {
    const{FromYenToPound} = require('./app.js');

    const pounds = FromYenToPound(1);

    const expected = 6 * 0.56;

    expect(FromYenToPound(6)).toBe(3.3600000000000003)
})