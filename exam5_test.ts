import { sortDigitsDesc } from './exam5.ts';

type TestCase = {
	input: number;
	expected: number;
};

const cases: TestCase[] = [
	{ input: 3008, expected: 8300 },
	{ input: 1989, expected: 9981 },
	{ input: 2679, expected: 9762 },
	{ input: 9163, expected: 9631 },
	{ input: 1, expected: 1 },
	{ input: 10, expected: 10 },
	{ input: 1010, expected: 1100 },
];

function runTests() {
	let passed = 0;

	for (const { input, expected } of cases) {
		const actual = sortDigitsDesc(input);

		if (actual === expected) {
			console.log(`PASS: sortDigitsDesc(${input}) => ${actual}`);
			passed++;
		} else {
			console.error(
				`FAIL: sortDigitsDesc(${input}) => ${actual}, expected ${expected}`,
			);
		}
	}

	console.log(`\n${passed}/${cases.length} tests passed`);
}

runTests();

