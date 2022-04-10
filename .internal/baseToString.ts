/**
 * implement a toString().
 * Array.toString(): Array -> string.
 * Boolean.toString(): boolean value -> string.
 * Number.toString(): number -> string.
 * Symbol.toSting(): Symbol value -> string
 * toSting() used to convert number => sting,
 *
 * @private
 * @param {any} value - The value to process.
 * @returns {string} return string.
 *
 */

import isSymbol from "../../isSymbol";

const INFINITY = 1 / 0;
const symbolToString = Symbol.prototype.toString;

function baseToString(value: any): string {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    // Convert array to string.
    // Array.map() 对数组中每个元素都进行操作
    return `${value.map(baseToString)}`;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  const res = `${value}`;
  return res === "0" && 1 / value === -INFINITY ? "-0" : res;
}

export default baseToString;
