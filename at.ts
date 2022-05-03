import baseAt from "./.internal/baseAt";
import baseFlatten from "./.internal/baseFlatten";

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @since 1.0.0
 * @category Object
 * @param {object} obj - The object to iterate over.
 * @param {...(string|string[])} [path] - The property paths to pick.
 * @returns {Array} - Returns the picked values.
 *
 * @example
 *
 * const obj = { a: [{ b: { c: 3 } }, 4] };
 * 
 * at(object, ['a[0].b.c', 'a[1]']) --> [3,4]
 *
 */

const at = (obj:object, ...path: string[]): Array<any> => baseAt(obj, baseFlatten(path, 1))
export default at;
