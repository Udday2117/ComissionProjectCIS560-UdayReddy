const  calculateCommissionFunction  = require('../CalculateComission');

describe(
    'classifyTriangle: Required input conditions -  See readme for more details', () =>

    {
    test('should classify an Equilateral triangle', () => {
        const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);

        expect(totalSales).toBe(300);
        expect(commission).toBe(30);
        
    })
});
