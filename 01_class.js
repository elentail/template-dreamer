class Stack {
  #arr;
  constructor(arr = []) {
    if (!Array.isArray(arr)) {
      throw TypeError(`${arr} is not an array`);
    }
    this.#arr = arr;
  }
  isEmpty() {
    return this.#arr.length == 0;
  }

  push(value) {
    this.#arr.push(value);
  }
  pop() {
    return this.#arr.pop();
  }
  entries() {
    return [...this.#arr];
  }
}

class Queue {}

const stack1 = new Stack();
stack1.push(1);
stack1.push(5);
stack1.push(7);

while (!stack1.isEmpty()) {
  console.log(stack1.pop());
}

const response = async () => {
  return await fetch('www.google.com');
};
console.log(response());
