"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalculatorService;
(function (CalculatorService) {
    function add() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var sum = 0;
        numbers.forEach(function (number) { return (sum += number); });
        return sum;
    }
    CalculatorService.add = add;
    function substract(a, b) {
        return a - b;
    }
    CalculatorService.substract = substract;
    function multiply(a, b) {
        return a * b;
    }
    CalculatorService.multiply = multiply;
})(CalculatorService = exports.CalculatorService || (exports.CalculatorService = {}));
