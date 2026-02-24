function isValidBrackets(input: string): boolean {
	const stack: string[] = [];
	const pairs: Record<string, string> = {
		')': '(',
		']': '[',
		'}': '{',
	};

	for (const ch of input) {
		if (ch === '(' || ch === '[' || ch === '{') {
			stack.push(ch);
		} else if (ch === ')' || ch === ']' || ch === '}') {
			const expectedOpen = pairs[ch];
			const last = stack.pop();

			if (last !== expectedOpen) {
				return false;
			}
		} else {
			return false;
		}
	}

	return stack.length === 0;
}

export { isValidBrackets };