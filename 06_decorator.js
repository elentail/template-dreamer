const readOnly = (target, property, descriptor) => {
  // with new Person, target will be an instance of Person
  descriptor.writable = false;
  return descriptor; // this function MUST return descriptor
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// create instance
const p = new Person('John', 'Doe');
console.log(p.getFullName());

// Person.prototype.getFullName = () => 'CRACKED';
