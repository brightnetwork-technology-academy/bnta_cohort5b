const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const modulus = function (a, b) {
    return a % b;
};

const even = function (a) {
    return !modulus(a, 2);
};

const odd = function (a) {
    return modulus(a, 2);
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
