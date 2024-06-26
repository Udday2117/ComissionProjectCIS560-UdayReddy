function calculateCommissionFunction(lockQty, stockQty, barrelQty) {
    // Product costs
    const lockCost = 45;
    const stockCost = 30;
    const barrelCost = 25;

    // Sales limits
    const maxLocks = 70;
    const maxStocks = 80;
    const maxBarrels = 90;

    // Calculate total sales
    const totalSales = lockQty * lockCost + stockQty * stockCost + barrelQty * barrelCost;

    // Check if sales exceed any limits
    if (lockQty > maxLocks || stockQty > maxStocks || barrelQty > maxBarrels) {
        throw new Error("Sales quantities exceed the maximum limits.");
    }

    // Commission rates
    let commissionRate;
    if (totalSales <= 1000) {
        commissionRate = 0.1;
    } else if (totalSales <= 1800) {
        commissionRate = 0.15;
    } else {
        commissionRate = 0.2;
    }

    // Calculate commission
    const commission = totalSales * commissionRate;

    return [totalSales, commission];
}

module.exports = calculateCommissionFunction;
