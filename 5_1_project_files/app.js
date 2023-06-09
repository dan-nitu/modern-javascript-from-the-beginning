// // CONSTRUCTORS & THE 'THIS' KEYWORD

// // const brad = {
// //   name: 'Brad',
// //   age: 30,
// // };

// // console.log(brad);
// // console.log(brad.age);

// // Person constructor
// // Constructors should start with capital
// function Person(name, age, dob) {
//   this.name = name;
//   this.age = age;
//   // this refers to the curent instance of the object

//   this.birthday = new Date(dob);

//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// // this in the global scope refers to the windows

// const brad = new Person('Brad', 36, '9-10-1981');
// console.log(brad);
// console.log(brad.calculateAge());
// const john = new Person('John', 30);
// console.log(john);
// console.log(john.age);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // BUILT IN CONSTRUCTORS
// // Second methods is slower

// //  String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');
// name2.foo = 'bar';
// console.log(name1);
// console.log(name2);

// console.log(typeof name1);
// console.log(typeof name2);

// if (name2 === 'Jeff') {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// if (name2 == 'Jeff') {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function (x, y) {
//   return x + y;
// };

// const getSum2 = new Function('x', 'y', 'return x+y');

// console.log(getSum1(2, 3));
// console.log(getSum2(2, 3));

// // Object
// const john1 = { name: 'John' };
// const john2 = new Object({ name: 'John' });

// console.log(john1);
// console.log(john2);

// // Arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);

// console.log(arr1);
// console.log(arr2);

// // Regular Expressions
// const rel1 = /\w+/;
// const rel2 = new RegExp('\\w+');

// console.log(rel1);
// console.log(rel2);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // PROTOTYPES EXPLAINED

// // Object.prototype
// // Person.prototype

// // Person constructor
// function Person(firstName, lastname, dob) {
//   this.firstName = firstName;
//   this.lastname = lastname;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function () {
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // };
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// // functions are the same for all of the Person objects so it sould be put in the prototype

// // Calculate age
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// console.log(john.calculateAge());

// // Get fullname
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastname}`;
// };

// console.log(mary.getFullName());

// // Gets Marries
// Person.prototype.getsMarried = function (newLastName) {
//   this.lastname = newLastName;
// };

// mary.getsMarried('Smith');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));
// // functions in prototype are not part of properties

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // PROTOTYPAL INHERITANCE

// // Person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
// console.log(customer1);
// console.log(customer1.greeting());

// // Customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// };

// console.log(customer1.greeting());

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // USING OBJECT.CREATE

// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   },
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// console.log(mary);
// console.log(mary.greeting());

// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: { value: 'Brad' },
//   lastName: { value: 'Traversy' },
//   age: { value: 36 },
// });

// console.log(brad);
// console.log(brad.greeting());

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // ES6 CLASSES

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   // static method
//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());

// mary.getsMarried('Thompson');
// console.log(mary);

// console.log(Person.addNumbers(1, 2));
// // console.log(mary.addNumbers(1, 2));
// // ^ not working because it's a static function (kind of a standalone function)

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// SUB CLASSES

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());

console.log(Customer.getMembershipCost());
