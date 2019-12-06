//1
function suma(value1, value2) {
    return console.log(value1 + value2)
}
//2
AnonimSuma = function (value1, value2) { return console.log(value1 + value2) }
//3
var ArrowSuma = (value1, value2) => { suma(value1, value2) };
//4
function suma() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return console.log(result);
}
//5
function Constructor() {
    this.a;
    this.b;
    this.suma = function (a, b) {
        return console.log(this.a + this.b)
    }
}
//6
function Suma() {
    return function (a,b) { return console.log(a + b) };
}
//7
function Factorial(value) {
    if (value <= 1) return 1;
    else return value * Factorial(value - 1)
}
//8
function Print(value) {
    console.log(value);
}
function Factorial(value, callback) {
    if (value <= 1) return 1;
    else value * Factorial(value - 1);
}
//9
function ConstructorSetGet(){
    var value1 =0;
    this.value = function(amount){
    if (!arguments.length) return value1;
    if (value1 < 0) {throw new Error("Значение должно быть положительным");}
    }
    value1=amount;
};



