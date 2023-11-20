//
// Inheritance
//

let son = {
  firstName: "Colton",
  lastName: "Skiera",
  age: 36,
  greet: function () {
    console.log(`Hello, ${person.firstName}.`);
  },
};

let brother = {
  firstName: "Notloc",
  lastName: "Skiera",
  age: 36,
  student: {
    grade: "A",
  },
  greet: function () {
    console.log(
      `Hello ${person1.firstName}, your grade is an ${person1.student.grade}`
    );
  },
};

person.greet();
person1.greet();

//
// Encapsilation
//
function bankAccount(initialBalance, accountHolder) {
  let balance = initialBalance;
  let accountOwner = accountHolder;

  this.deposit = function (amount) {
    if (amount > 0) {
      balance += amount;
      console.log(
        `${accountOwner} deposited ${amount}. New balance is ${balance}`
      );
    } else {
      console.log("Invalid deposit amount");
    }
  };
  this.withdraw = function (amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log(
        `${accountOwner} deposited ${amount}. New balance is ${balance}`
      );
    } else {
      console.log("Invalid withdrawl amount");
    }
  };

  this.checkBalance = function () {
    console.log(`Balance for ${accountOwner}: ${balance}`);
  };
}

const myAccount = new bankAccount(1000, "Colton Skiera");

myAccount.deposit(500);
myAccount.withdraw(400);
myAccount.checkBalance();

//
// Polymorphism
//

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const genericAnimal = new Animal("Generic Animal");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

genericAnimal.makeSound();
dog.makeSound();
cat.makeSound();

//
// Composition
//

function createLibrary() {
  const books = [];

  function addBook(book) {
    books.push(book);
    console.log(
      `Added book: ${book.title} by ${book.author} (${book.publishedYear})`
    );
  }

  function removeBook(title) {
    const index = books.findIndex((book) => book.title === title);

    if (index !== -1) {
      const removedBook = books.splice(index, 1)[0];
      console.log(
        `Removed book: ${removedBook.title} by ${removedBook.author} (${removedBook.publishedYear})`
      );
    } else {
      console.log(`Book with title "${title}" not found in the library.`);
    }
  }

  function displayBooks() {
    console.log("Library Books:");
    books.forEach((book) => {
      console.log(`${book.title} by ${book.author} (${book.publishedYear})`);
    });
  }

  return {
    addBook,
    removeBook,
    displayBooks,
  };
}

const library = createLibrary();

const book1 = createBook("The Catcher in the Rye", "J.D. Salinger", 1951);
const book2 = createBook("To Kill a Mockingbird", "Harper Lee", 1960);

library.addBook(book1);
library.addBook(book2);
library.displayBooks();

library.removeBook("To Kill a Mockingbird");
library.displayBooks();

//
// Static
//

const PersonUtility = {
  calculateAverageAge: function (people) {
    if (people.length === 0) {
      return 0;
    }

    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
  },
};

const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Bob", age: 30 };
const person3 = { name: "Charlie", age: 22 };

const peopleArray = [person1, person2, person3];

const averageAge = PersonUtility.calculateAverageAge(peopleArray);
console.log(`Average age: ${averageAge}`);

//
// Singleton Pattern
//

const Logger = (() => {
  let instance;
  const logMessages = [];

  const createInstance = () => ({
    log: (message) => {
      logMessages.push(message);
      console.log(`Log: ${message}`);
    },
    getLogs: () => logMessages,
  });

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2);

logger1.log("Message 1");
logger2.log("Message 2");

console.log(logger1.getLogs());

//
// Abstraction
//

function createShoppingCart() {
  const cart = [];

  return {
    addProduct: function (name, price, quantity) {
      const product = { name, price, quantity };
      cart.push(product);
      console.log(`Added ${quantity} ${name}(s) to the cart.`);
    },

    removeProduct: function (productName) {
      const index = cart.findIndex((product) => product.name === productName);

      if (index !== -1) {
        const removedProduct = cart.splice(index, 1)[0];
        console.log(
          `Removed ${removedProduct.quantity} ${productName}(s) from the cart.`
        );
      } else {
        console.log(`${productName} not found in the cart.`);
      }
    },

    calculateTotalPrice: function () {
      const totalPrice = cart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
      return totalPrice;
    },

    viewCart: function () {
      console.log("Shopping Cart:");
      cart.forEach((product) => {
        console.log(
          `Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`
        );
      });

      const totalPrice = this.calculateTotalPrice();
      console.log(`Total Price: $${totalPrice}`);
    },
  };
}

const shoppingCart = createShoppingCart();

shoppingCart.addProduct("Laptop", 1000, 2);
shoppingCart.addProduct("Headphones", 50, 3);

shoppingCart.viewCart();
