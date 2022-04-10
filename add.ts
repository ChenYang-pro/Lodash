import createMathOperation from "../.internal/createMathOperation";

/**
 * Add two numbers or string.
 * @since 0.1.0
 * @category Math
 * @type {function add(number, number): number}
 * @param {number} augend - 被加数
 * @param {number} added - 加数
 * @returns {number} - 返回结果
 *
 * add(6,4) return 10;
 */

const add: Function = createMathOperation(
  (augend: number, added: number) => augend + added,
  0
);

export default add;
