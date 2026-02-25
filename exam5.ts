function sortDigitsDesc(n: number): number {
	if (n <= 0 || !Number.isInteger(n)) {
		throw new Error('Input must be a positive integer');
	}

	const digits = String(n).split('');
	digits.sort((a, b) => Number(b) - Number(a));

	return Number(digits.join(''));
}

export { sortDigitsDesc };

