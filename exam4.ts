function intToRoman(num: number): string {
	if (num <= 0 || !Number.isInteger(num)) {
		throw new Error('intToRoman expects a positive integer');
	}

	const values = [
		1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
	];
	const symbols = [
		'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',
	];

	let n = num;
	let result = '';

	for (let i = 0; i < values.length && n > 0; i++) {
		while (n >= values[i]) {
			result += symbols[i];
			n -= values[i];
		}
	}

	return result;
}

function romanToInt(roman: string): number {
	if (!roman) {
		throw new Error('romanToInt expects a non-empty string');
	}

	const s = roman.toUpperCase();
	const map: Record<string, number> = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		const current = map[s[i]];
		const next = i + 1 < s.length ? map[s[i + 1]] : 0;

		if (current === undefined) {
			throw new Error(`Invalid Roman numeral character: ${s[i]}`);
		}

		if (current < next) {
			total -= current;
		} else {
			total += current;
		}
	}

	return total;
}

export { intToRoman, romanToInt };
