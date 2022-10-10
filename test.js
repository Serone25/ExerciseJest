/*// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum (14 ,9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/

const { fromEuroToDollar, fromYentoPound, fromDollarToYen } = require('./app.js')
test("One euro should be 1.2 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106,58 yens", function(){
     // hago mi comparacion (la prueba)
    expect(fromDollarToYen(100)).toBe(10658);
})

test("159'875 Yens should be 1 Pound", function(){
    // hago mi comparacion (la prueba)
    expect(fromYentoPound(159.875)).toBe(1);
})