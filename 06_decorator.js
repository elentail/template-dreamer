//https://wonism.github.io/what-is-decorator/
// ./node_modules/.bin/babel-node main.js
// .babelrc
/*
{
  "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]
}
*/

const logger = (msg) => (target, property, descriptor) => {
  const method = descriptor.value;

  // do NOT use arrow function in here. to bind `this`
  descriptor.value = function (...args) {
    console.log('[LOG]', msg);
    return method.apply(this, args);
  };

  return descriptor;
};

const readOnly = (target, property, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @logger('call getFullName method on Person')
  @readOnly
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// create instance
const p = new Person('John', 'Doe');
console.log(p.getFullName());
