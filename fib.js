const { performance } = require('perf_hooks')

function fib(n, memo = []) {
    if (memo[n]) return memo[n]
    if (n <= 2) return 1

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}

let start = performance.now()
console.log(fib(500));
let end = performance.now()
console.log(end - start)
