## How to run tests

From the project root:

```bash
make test-all
```

This executes:

```bash
npx ts-node exam1_test.ts
```

- **Run tests for a specific exam number (if added later)**

```bash
make test N=1
```