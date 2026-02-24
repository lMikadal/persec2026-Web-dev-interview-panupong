import { sortArray } from './exam2.ts';

type TestCase = {
	input: string[];
	expected: string[];
};

const cases: TestCase[] = [
	{
		input: ['TH19', 'SG20', 'TH2'],
		expected: ['SG20', 'TH2', 'TH19'],
	},
	{
		input: ['TH10', 'TH3Netflix', 'TH1', 'TH7'],
		expected: ['TH1', 'TH3Netflix', 'TH7', 'TH10'],
	},
	{
		input: ['EN01', 'TH01', 'EN2', 'TH3', 'EN30', 'EN04'],
		expected: ['EN01', 'EN2', 'EN04', 'EN30', 'TH01', 'TH3'],
	},
	{
		input: ['01', '10', '2', '3', '30', '04'],
		expected: ['01', '2', '3', '04', '10', '30'],
	},
	{
		input: ['SG', 'THN', 'SG', 'THA', 'TH'],
		expected: ['SG', 'SG', 'TH', 'THA', 'THN'],
	},
];

function arraysEqual(a: string[], b: string[]): boolean {
	if (a.length !== b.length) return false;
	return a.every((v, i) => v === b[i]);
}

function runTests() {
	let passed = 0;

	for (const { input, expected } of cases) {
		const actual = sortArray(input);

		if (arraysEqual(actual, expected)) {
			console.log(`PASS: [${input.join(', ')}] => [${actual.join(', ')}]`);
			passed++;
		} else {
			console.error(
				`FAIL: [${input.join(', ')}] => [${actual.join(
					', ',
				)}], expected [${expected.join(', ')}]`,
			);
		}
	}

	console.log(`\n${passed}/${cases.length} tests passed`);
}

runTests();

