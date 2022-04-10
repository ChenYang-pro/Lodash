import baseToString from "./baseToString";

/**
 * Create a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator 计算函数。
 * @param {number} defaultVal undefied 时的参数。
 * @returns {Function} 返回新的操作函数。
 */

import baseToNumber from "../../.internal/baseToNumber";

function createMathOperation(operator: Function, defaultVal: any): Function {
  return (value: any, other: any) => {
    if (value === undefined && other === undefined) {
      return defaultVal;
    }
    if (value === undefined && other !== undefined) {
      return value;
    }
    if (value !== undefined && other === undefined) {
      return other;
    }
    if (typeof value === "string" || typeof other === "string") {
      value = baseToString(value);
      other = baseToString(other);
    } else {
      value = baseToNumber(value);
      other = baseToNumber(other);
    }
    return operator(value, other);
  };
}

export default createMathOperation;
