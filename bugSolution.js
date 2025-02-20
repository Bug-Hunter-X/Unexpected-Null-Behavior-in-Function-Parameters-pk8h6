function foo(a = 0, b = 0) {
  // Handle null or undefined values by using default parameters
  return a + b; 
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(1)); // 1
console.log(foo()); // 0