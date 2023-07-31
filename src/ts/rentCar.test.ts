import { calculateTotalRentCar } from "./rentCar";

// Jest Test

let day: number;
let price: number ;
let expectedTotal: number;
let total: number;

beforeEach(() => {
    price = 40;
    // You can set the price in beforeEach if needed
    // For now, we are keeping it as 40
});

describe('calculateTotalRentCar', () => {
    test('should return the correct total when day is greater than or equal to 7', () => {
        day = 10;
        expectedTotal = day * price - 50;
        total = calculateTotalRentCar(day, price);
        expect(total).toBe(expectedTotal);
    });

    test('should return the correct total when day is greater than or equal to 3 but less than 7', () => {
        day = 5;
        expectedTotal = day * price - 20;
        total = calculateTotalRentCar(day, price);
        expect(total).toBe(expectedTotal);
    });

    test('should return the correct total when day is less than 3', () => {
        day = 2;
        expectedTotal = day * price;
        total = calculateTotalRentCar(day, price);
        expect(total).toBe(expectedTotal);
    });
});
