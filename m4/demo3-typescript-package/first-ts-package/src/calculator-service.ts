export namespace CalculatorService {
    export function add(...numbers: number[]): number {
        let sum = 0;
        numbers.forEach(number => (sum += number));
        return sum;
    }

    export function substract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}
