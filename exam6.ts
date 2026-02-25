function tribonacci(seed: number[], count: number): number[] {
	if (count <= 0) return [];

	const result: number[] = [];

	for (let i = 0; i < seed.length && result.length < count; i++) {
		result.push(seed[i]);
	}

	while (result.length < count) {
		const window = result.slice(-3);
		const next = window.reduce((sum, v) => sum + v, 0);
		result.push(next);
	}

	return result;
}

export { tribonacci };

