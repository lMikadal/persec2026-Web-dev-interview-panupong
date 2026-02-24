import { isValidBrackets } from './exam1.ts';

type TestCase = {
	input: string;
	expected: boolean;
};

const cases: TestCase[] = [
	{ input: '()', expected: true },
	{ input: '([]]', expected: false },
	{ input: '([{}])', expected: true },
	{ input: '([[{}]]]', expected: false },
	{ input: ')', expected: false },
	{ input: '(]}])', expected: false },
	{ input: '([)]', expected: false },
	{ input: '{', expected: false },
	{ input: '}{', expected: false },
	{ input: '{}1', expected: false },
	{ input: '1{}', expected: false },
	{ input: '{}[]()', expected: true },
	{ input: '{([}])', expected: false },
	{ input: '{{{}}}', expected: true },
	{ input: '', expected: true },
];

function runTests() {
	let passed = 0;

	for (const { input, expected } of cases) {
		const actual = isValidBrackets(input);

		if (actual === expected) {
			console.log(`PASS: "${input}" => ${actual}`);
			passed++;
		} else {
			console.error(`FAIL: "${input}" => ${actual}, expected ${expected}`);
		}
	}

	console.log(`\n${passed}/${cases.length} tests passed`);
}

runTests();