TS_NODE := npx ts-node
N := 1

.PHONY: test-all
test-all:
	$(TS_NODE) exam1_test.ts
	$(TS_NODE) exam2_test.ts
	$(TS_NODE) exam3_test.ts

.PHONY: test
test:
	$(TS_NODE) exam$(N)_test.ts

