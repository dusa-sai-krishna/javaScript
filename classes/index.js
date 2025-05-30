/**
 * Classes were introduced later in JS in ES6 version.
 * As we know Classes help us to organize and structure
 * objects and also implement OOPs principles in our
 * codebase.
 */

class Product {
  constructor(quantity, price, name) {
    this.quantity = quantity;
    this.price = price;
    this.name = name;
  }

  //Observe functions don't need function keyword befoer function name
  describe() {
    console.log(`I am ${this.name} with price: ${this.price}`);
  }
}

const prod1 = new Product(10, 100, "Surf XL");
prod1.describe();
