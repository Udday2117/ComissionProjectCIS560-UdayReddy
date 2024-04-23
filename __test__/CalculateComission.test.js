const  calculateCommissionFunction  = require('../CalculateComission');

describe(
    'Required input conditions -  See readme for more details', () =>

    {
    test('Test Case 1: Valid Range', () => {
        const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);

        expect(totalSales).toBe(1000);
        expect(commission).toBe(100);
        
    })


    test('Test Case 2: Expect sales to exceed limits', () => {
        expect(() => calculateCommissionFunction(71, 81, 91)).toThrow("Sales quantities exceed maximum limits.");
    });

    test('Test Case 3: Expect sales to exceed limits', () => {
        expect(() => calculateCommissionFunction(71, 1, 1)).toThrow("Sales quantities exceed maximum limits.");
    });

    test('Test Case 4: Expect sales to exceed limits', () => {
        expect(() => calculateCommissionFunction(71, 81, 1)).toThrow("Sales quantities exceed maximum limits.");
    });

    test('Test Case 5: Expect sales to exceed limits', () => {
        expect(() => calculateCommissionFunction(1, 81, 1)).toThrow("Sales quantities exceed the maximum limits.");
    });

    test('Test Case 6: Expect sales to exceed the limits', () => {
        expect(() => calculateCommissionFunction(1, 81, 91)).toThrow("Sales quantities exceed the maximum limits.");
    });

    test('Test Case 7: Expect sales to exceed limits', () => {
        expect(() => calculateCommissionFunction(1, 1, 91)).toThrow("Sales quantities exceed maximum limits.");
    });



    test('Test Case 8: Expect sales NOT to exceed limits', () => {
        const [totalSales, commission] = calculateCommissionFunction(1, 1, 1);
        expect(totalSales).toBe(100); // Adjust according to your product costs
        expect(commission).toBe(10);  // Adjust according to your commission rate
    });

    test('Test Case 9: Expect sales NOT to exceed limits', () => {
        const [totalSales, commission] = calculateCommissionFunction(70, 80, 90);
        expect(totalSales).toBe(7800); // Adjust according to your product costs
        expect(commission).toBe(1560);  // Adjust according to your commission rate
    });

    test('Test Case 10: Expect sales NOT to exceed limits', () => {
        const [totalSales, commission] = calculateCommissionFunction(15, 15, 15);
        expect(totalSales).toBe(1500); // Adjust according to your product costs
        expect(commission).toBe(225);  // Adjust according to your commission rate
    });

});
