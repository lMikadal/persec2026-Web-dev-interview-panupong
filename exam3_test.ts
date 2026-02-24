import { autocomplete } from './exam3.ts';

type TestCase = {
	search: string;
	items: string[];
	maxResult: number;
	expected: string[];
};

const cases: TestCase[] = [
	{
		search: 'th',
		items: ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
		maxResult: 2,
		expected: ['Think', 'Mother'],
	},
	{
		search: 'bb',
		items: ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
		maxResult: 2,
		expected: [],
	},
	{
		search: 'bb',
		items: ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
		maxResult: 2,
		expected: [],
	},
	{
		search: 'th',
		items: [],
		maxResult: 2,
		expected: [],
	},
	{
		search: 'Mother',
		items: ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
		maxResult: 0,
		expected: [],
	},
	{
		search: 'th',
		items: ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
		maxResult: -1,
		expected: [],
	},
];

function arraysEqual(a: string[], b: string[]): boolean {
	if (a.length !== b.length) return false;
	return a.every((v, i) => v === b[i]);
}

function runTests() {
	let passed = 0;

	for (const { search, items, maxResult, expected } of cases) {
		const actual = autocomplete(search, items, maxResult);

		if (arraysEqual(actual, expected)) {
			console.log(
				`PASS: autocomplete("${search}", [${items.map((x) => `"${x}"`).join(', ')}], ${maxResult}) => [${actual.join(', ')}]`,
			);
			passed++;
		} else {
			console.error(
				`FAIL: autocomplete("${search}", ...) => [${actual.join(', ')}], expected [${expected.join(', ')}]`,
			);
		}
	}

	console.log(`\n${passed}/${cases.length} tests passed`);
}

runTests();
