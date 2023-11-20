//
// Inheritance
//

let person = {
  firstName: "Colton",
  lastName: "Skiera",
  age: 36,
  greet: function () {
    console.log(`Hello, ${person.firstName}.`);
  },
};

let person1 = {
  firstName: "Colton",
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
