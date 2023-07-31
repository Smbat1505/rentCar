function rentCar(day) {
  let price = 40;
  let total;
  if (day >= 7) {
    let sale = 50;
    // let total;
    total = day * price - sale;
    return total;
    // console.log(day * 40 - 50);
  } else if (day >= 3) {
    let sale2 = 20;
    total = day * price - sale2;
    return total;
    // console.log(day * 40 - 20);
  } else {
    total = day * price;
    return total;
    // console.log(day * 40);
  }
}

const rentCarTotal = rentCar(20);

/* function rentCarPrice(rentCarTotal) {
	function  () {
		return `Price: \n day`
	}
} */

rentCar(8);
console.log(rentCar(8));
// rentCar();
