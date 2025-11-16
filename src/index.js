/**
 * Compute the factorial of a number.
 * @returns {number} the factorial of n
 * @param {number} n
 */
export function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5));
