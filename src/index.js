module.exports = function zeros(expression) {
	let fact = expression.split('*'),
		fiveCount = 0,
		twoСount = 0;

	fact.forEach((f) => {
		let step = f.indexOf('!!') == -1 ? 1 : 2;
		let num =  f.slice(0, f.indexOf('!'));

		for (let i = 0; i < num; num -= step) {

			let n = num;

			while (true) {
				if ( n % 5 == 0) {
					n /= 5;
					fiveCount++;
				} else if (n % 2 == 0) {
					n /= 2;
					twoСount++;
				} else {
					break;
				}
			}

		}
	});

	return Math.min(fiveCount, twoСount);
}