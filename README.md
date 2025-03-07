# Reproduction Steps

1. Install nx globally:
	* npm install -g nx
2. Run nx directly via:
	* nx run example:build
	* Notice the heap_size_limit is 8640266240 B (~8 GiB)
3. Run nx with npm via:
	* npm run nx run example:build
	* Notice the heap_size_limit is 4345298944 B (~4 GiB)
3. Run nx with npx via:
	* npx nx run example:build
	* Notice the heap_size_limit is 4345298944 B (~4 GiB)
