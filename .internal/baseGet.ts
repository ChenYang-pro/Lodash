import castPath from "./castPath";
import toKey from "../../.internal/toKey";
/**
 *
 * The base implementation of `get` without support for defalut values.
 *
 * @private
 * @param {object} obj -The object to query.
 * @param {Array | string} path - The path of the property to get.
 * @returns {*} - Returns the resolved value.
 */

function baseGet(obj: object, path: Array<string> | string): any {
  path = castPath(path, obj);

  let idx = 0;
  const length = path.length;

  while (obj != null && idx < length) {
    obj = obj[toKey(path[idx++])];
  }
  return idx && idx === length ? obj : undefined;
}

export default baseGet;
