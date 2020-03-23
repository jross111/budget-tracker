function squareSum(numbers) {
	numbers.forEach((el) => {
		let sum = 0;
		sum = sum + el * el;
		console.log(sum);
		let arrSum = (sum) => sum.reduce((a, b) => a + b, 0);
		console.log(arrSum, 1);
	});
}

squareSum([1, 2, 3]);
