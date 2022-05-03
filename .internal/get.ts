import baseGet from "./baseGet";

/**
 *
 * Gets the values at `path` of `object`. If the resolved values if `undefined`, the `defaultValue` is returned in its place.
 *
 * @since 1.0.0
 * @category Object
 * @param {object} obj - The object to query.
 * @param {Array|string} path - The path of the property to get.
 * @param {*} [defaultValue] - The value returned for `undefined` resolved values.
 * @returns {any} - Returns the resolved value.
 * @see has,hasIn,set,unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c') --> 3
 *
 * get(object, ['a', '0', 'b', 'c']) --> 3
 *
 * get(object, 'a.b.c', 'default') --> 'default'
 */

function get(obj: object, path: Array<any> | string, defaultValue?: any): any {
  const res = obj === null ? undefined : baseGet(obj, path);
  return res === undefined ? defaultValue : res;
}

export default get;
