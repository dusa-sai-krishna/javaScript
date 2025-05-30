/**
 * A constructor is a Special Method. Starts with a
 * upper case character. It is create new objects and
 * assign initial values to objects properties.
 * It can be outside a class as well.
 */

function Car(model, year, brand) {
  this.model = model;
  this.year = year;
  this.brand = brand;
  this.describe = function () {
    console.log(`I am a car of Model:${this.model}
            Year:${this.year}
             Brand:${this.brand} `);
  };
}

//Let's create a new Cars
const car1 = new Car("Rx", "2003", "BMW");
const car2 = new Car("Py", "1998", "Merc");

car1.describe();
car2.describe();
