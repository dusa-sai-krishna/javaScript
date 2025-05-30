/**
 * Super keyword should be in the first line of every
 * child constructor
 * It is used to call the properties and methods of
 * parent classes.
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  describe() {
    console.log(`I am ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  describe() {
    super.describe();
    console.log(`I belong to ${this.breed}`);
  }
}

const dog1 = new Dog("Bond", "HVA");
dog1.describe();
