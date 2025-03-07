const limit = require('v8')?.getHeapStatistics().heap_size_limit;

console.log('heap_size_limit:', limit);
