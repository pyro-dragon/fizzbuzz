// Check initialisation
QUnit.test( "Initialisation", function( assert ) {
    assert.ok( processor !== undefined, "Passed!" );
});

// Test constructor
QUnit.test( "Constructor executed", function( assert ) {
    assert.ok( processor.resultsString === "" , "Passed!" );
});

// Test calculateFizz()
QUnit.test( "calculateFizz() for true", function( assert ) {
    assert.ok( processor.calculateFizz(18) === true , "Passed!" );
});
QUnit.test( "calculateFizz() for false", function( assert ) {
    assert.ok( processor.calculateFizz(14) === false , "Passed!" );
});

// Test calculateBuzz()
QUnit.test( "calculateBuzz() for true", function( assert ) {
    assert.ok( processor.calculateBuzz(45) === true , "Passed!" );
});
QUnit.test( "calculateBuzz() for false", function( assert ) {
    assert.ok( processor.calculateBuzz(44) === false , "Passed!" );
});

// Test calculateFizzBuzz()
QUnit.test( "calculateFizzBuzz() for correct argument count", function( assert ) {
    assert.ok( processor.calculateFizzBuzz(18) === false , "Passed!" );
});
QUnit.test( "calculateFizzBuzz() for correct argument type", function( assert ) {
    assert.ok( processor.calculateFizzBuzz("45", true) === false , "Passed!" );
});
QUnit.test( "calculateFizzBuzz() for valid argument number range", function( assert ) {
    assert.ok( processor.calculateFizzBuzz(-45, 103) === false , "Passed!" );
});

var correctString = "First value: 1   Second value: 1 <br />First value: 2   Second value: 2 <br />First value: 3   Second value: 3 Fizz<br />First value: 4    <br />First value: 5    Buzz<br />";
QUnit.test( "calculateFizzBuzz() for positive outcome", function( assert ) {
    assert.ok( processor.calculateFizzBuzz(5, 3) === correctString , "Passed!" );
});
