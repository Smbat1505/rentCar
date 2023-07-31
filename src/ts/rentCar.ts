export const calculateTotalRentCar = (day: number, price: number): number => {
    let total: number;

    switch (true) {
        case day >= 7:
            const sale = 50;
            total = day * price - sale;
            break;
        case day >= 3:
            const sale2 = 20;
            total = day * price - sale2;
            break;
        default:
            total = day * price;
            break;
    }

    return total;
}