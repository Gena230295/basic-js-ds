const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.myNewArr = [];
  }
  push(ind) {
    this.myNewArr.push(ind);
  }

  pop() {
    return this.myNewArr.pop();
  }

  peek() {
    return this.myNewArr[this.myNewArr.length - 1];
  }
}

module.exports = {
  Stack,
};
