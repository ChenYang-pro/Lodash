import get from './get'

/**
 * The base implementation of `at` without support for individual paths.
 * 
 * @private
 * @param {object} obj - The object to iterate over.
 * @param {string[]} paths - The property paths to pick.
 * @returns {Array} - Returns the picked elements.
 */

function baseAt(obj: object, paths: string[]): Array<any> {
  let idx = -1;
  const length = paths.length,
    res = new Array(length),
    skip = obj === null;

  while (++idx < length) {
    res[idx] = skip ? undefined : get(obj, paths[idx]);
  }
  return res;
}

export default baseAt;
