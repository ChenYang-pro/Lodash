/**
 * The base implementation of `flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array - The array to flatten.
 * @param {number} depth - The maximum recursion depth.
 * @param {Function} [predicate=isFlattenable] - The function invoked per iteration.
 * @param {boolean} isStrict - Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] - The initial result value.
 * @returns {Array} - Returns the new flattened array.
 */

import isFlattenable from "../../.internal/isFlattenable";

function baseFlatten(
  array: Array<any>,
  depth: number,
  predicate: Function,
  isStrict: boolean,
  result: Array<any>
): Array<any> {
  predicate || (predicate = isFlattenable);
  result || (result = []);
  if (array === null) {
    return result;
  }
  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        result.push(...value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

export default baseFlatten;