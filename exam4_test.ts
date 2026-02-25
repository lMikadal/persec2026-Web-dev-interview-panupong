import { intToRoman, romanToInt } from './exam4.ts';

type IntToRomanCase = {
	value: number;
	expected: string;
};

type RomanToIntCase = {
	value: string;
	expected: number;
};

const intCases: IntToRomanCase[] = [
	{ value: 1, expected: 'I' },
	{ value: 4, expected: 'IV' },
	{ value: 9, expected: 'IX' },
	{ value: 40, expected: 'XL' },
	{ value: 90, expected: 'XC' },
	{ value: 400, expected: 'CD' },
	{ value: 900, expected: 'CM' },
	{ value: 68, expected: 'LXVIII' },
	{ value: 109, expected: 'CIX' },
	{ value: 1989, expected: 'MCMLXXXIX' },
	{ value: 2000, expected: 'MM' },
];

const romanCases: RomanToIntCase[] = [
	{ value: 'I', expected: 1 },
	{ value: 'IV', expected: 4 },
	{ value: 'IX', expected: 9 },
	{ value: 'XL', expected: 40 },
	{ value: 'XC', expected: 90 },
	{ value: 'CD', expected: 400 },
	{ value: 'CM', expected: 900 },
	{ value: 'LXVIII', expected: 68 },
	{ value: 'CIX', expected: 109 },
	{ value: 'MCMLXXXIX', expected: 1989 },
	{ value: 'MM', expected: 2000 },
];

function runIntToRomanTests() {
	let passed = 0;

	for (const { value, expected } of intCases) {
		const actual = intToRoman(value);
		if (actual === expected) {
			console.log(`PASS: intToRoman(${value}) => "${actual}"`);
			passed++;
		} else {
			console.error(
				`FAIL: intToRoman(${value}) => "${actual}", expected "${expected}"`,
			);
		}
	}

	console.log(`\nintToRoman: ${passed}/${intCases.length} tests passed\n`);
}

function runRomanToIntTests() {
	let passed = 0;

	for (const { value, expected } of romanCases) {
		const actual = romanToInt(value);
		if (actual === expected) {
			console.log(`PASS: romanToInt("${value}") => ${actual}`);
			passed++;
		} else {
			console.error(
				`FAIL: romanToInt("${value}") => ${actual}, expected ${expected}`,
			);
		}
	}

	console.log(`\nromanToInt: ${passed}/${romanCases.length} tests passed\n`);
}


function runTests() {
	runIntToRomanTests();
	runRomanToIntTests();
}

runTests();
