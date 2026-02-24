function autocomplete(
	search: string,
	items: string[],
	maxResult: number,
): string[] {
	if (maxResult <= 0) return [];

	const lower = search.toLowerCase();
	const filtered = items.filter((item) =>
		item.toLowerCase().includes(lower),
	);

	const getPriority = (item: string): number => {
		const s = item.toLowerCase();
		const i = s.indexOf(lower);

		if (i === 0) return 0;
		if (i + lower.length === s.length) return 2;

		return 1;
	};

	filtered.sort((a, b) => getPriority(a) - getPriority(b));

	return filtered.slice(0, maxResult);
}

export { autocomplete };
