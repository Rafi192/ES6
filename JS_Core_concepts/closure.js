function outerFunc(N) {
  return function (x) {
    return x + N;
  };
}

const innerFunc = outerFunc(5);
console.log(innerFunc);

// What happens step by step?

// Call outerFunc(5)

// N = 5 is stored in the lexical environment for that call.

// outerFunc returns the inner function:
// function (x) { return x + N; }

// Assign to innerFunc

// Now innerFunc is that returned function.

// But it’s not just the plain function code — it remembers the environment where N = 5.

// That “remembering” is what we call a closure.




