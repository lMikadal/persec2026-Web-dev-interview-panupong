function sortArray(input: string[]): string[] {
	return [...input].sort((a, b) => {
		const parse = (value: string) => {
			let i = 0;

			while (i < value.length && !/\d/.test(value[i])) {
				i++;
			}

			const prefix = value.slice(0, i);

			let j = i;
			while (j < value.length && /\d/.test(value[j])) {
				j++;
			}

			const numPart = value.slice(i, j);
			const num = numPart === '' ? 0 : Number(numPart);

			return { prefix, num };
		};

		const pa = parse(a);
		const pb = parse(b);

		if (pa.prefix < pb.prefix) return -1;
		if (pa.prefix > pb.prefix) return 1;

		if (pa.num < pb.num) return -1;
		if (pa.num > pb.num) return 1;

		return 0;
	});
}

export { sortArray };

