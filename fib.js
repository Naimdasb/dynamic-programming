const { performance } = require('perf_hooks')

function fib(n) {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2);
}

function fibMemo(n, memo = []) {
    if (memo[n]) return memo[n]
    if (n <= 2) return 1

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}

function fibTab(n) {
    let numbers = Array(n + 1).fill(0);
    numbers[1] = 1;

    for (let i = 0; i <= n; i++) {
        numbers[i + 1] += numbers[i]
        numbers[i + 2] += numbers[i]
    }

    return numbers[n]
}

let start = performance.now()
console.log(fib(5));
let end = performance.now()
console.log(end - start)

let startMemo = performance.now()
console.log(fibMemo(5));
let endMemo = performance.now()
console.log(endMemo - startMemo)

let startTab = performance.now()
console.log(fibTab(50))
let endTab = performance.now()
console.log(endTab - startTab)

