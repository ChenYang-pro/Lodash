/**
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n - The number of calls at which `func` is no longer invoked.
 * @param {Function} func - The function to restrict.
 * @returns {Function} - Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList)) --> Allows adding up to 4 contacts to the list.
 */

function before(n: number, func: Function): Function {
  let res: Function;
  if (typeof func !== "function") {
    throw new TypeError("Expected a function.");
  }
  return function (...args: any) {
    if (--n > 0) {
      res = func.apply(this, args);
    }
    if (n <= 1) {
      func = undefined;
    }
    return res;
  };
}

export default before;
