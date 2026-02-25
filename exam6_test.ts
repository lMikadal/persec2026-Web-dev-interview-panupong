import { tribonacci } from './exam6.ts';

type TestCase = {
	seed: number[];
	count: number;
	expected: number[];
};

const cases: TestCase[] = [
	{
		seed: [1, 1, 1],
		count: 6,
		expected: [1, 1, 1, 3, 5, 9],
	},
	{
		seed: [2, 3, 1],
		count: 6,
		expected: [2, 3, 1, 6, 10, 17],
	},
	{
		seed: [1, 3, 5],
		count: 5,
		expected: [1, 3, 5, 9, 17],
	},
	{
		seed: [2, 2, 2],
		count: 3,
		expected: [2, 2, 2],
	},
	{
		seed: [10, 10, 10],
		count: 4,
		expected: [10, 10, 10, 30],
	},
	{
		seed: [],
		count: 5,
		expected: [0, 0, 0, 0, 0],
	},
	{
		seed: [5],
		count: 5,
		expected: [5, 5, 10, 20, 35],
	},
	{
		seed: [5, 2],
		count: 5,
		expected: [5, 2, 7, 14, 23],
	},
	{
		seed: [3, 4, 1],
		count: 1,
		expected: [3],
	},
	{
		seed: [3, 4, 1],
		count: 0,
		expected: [],
	},
];

function arraysEqual(a: number[], b: number[]): boolean {
	if (a.length !== b.length) return false;
	return a.every((v, i) => v === b[i]);
}

function runTests() {
	let passed = 0;

	for (const { seed, count, expected } of cases) {
		const actual = tribonacci(seed, count);

		if (arraysEqual(actual, expected)) {
			console.log(
				`PASS: tribonacci([${seed.join(', ')}], ${count}) => [${actual.join(', ')}]`,
			);
			passed++;
		} else {
			console.error(
				`FAIL: tribonacci([${seed.join(', ')}], ${count}) => [${actual.join(', ')}], expected [${expected.join(', ')}]`,
			);
		}
	}

	console.log(`\n${passed}/${cases.length} tests passed`);
}

runTests();

