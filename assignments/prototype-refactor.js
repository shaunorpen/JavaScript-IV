/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.

*/

// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//   }
  
//   Person.prototype.greet = function () {
//     return `Hello I am ${this.name} and I am ${this.age} years old.`
//   }
  
//   Person.prototype.eat = function (edible) {
//     this.stomach.push(edible);
//   }
  
//   Person.prototype.poop = function () {
//     this.stomach = [];
//   }

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    greet () {
        return `Hello I am ${this.name} and I am ${this.age} years old.`
    }
    eat (edible) {
        if (edible) {
            this.stomach.push(edible);
        } else {
            return 'You didn\'t give me anything to eat!'
        }
    }
    poop () {
        if (this.stomach.length > 0) {
            this.stomach = [];
        } else {
            return 'My stomach is empty - I don\'t need the loo!';
        }
    }
}
  
  let mike = new Person ('Mike', 25);
  console.log(mike.greet());
  console.log(mike.stomach);
  mike.eat('Banana');
  mike.eat('Pear');
  console.log(mike.stomach);
  mike.poop();
  console.log(mike.stomach);
  
  /*
  
    TASK 2
  
    - Build a Car constructor that takes model name and make.
    - Give cars the ability to drive a distance.
    - By driving a car, the distance driven should be added to an "odometer" property.
    - Give cars the ability to crash.
    - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
    - Give cars the ability to be repaired.
    - A repaired car can be driven again.
  
  */
  
//   function Car2 (make, model) {
//     this.make = make;
//     this.model = model;
//     this.odometer = 0;
//     this.isCrashed = false;
//   }
  
//   Car2.prototype.drive = function (distance) {
//     if (this.isCrashed) {
//       return console.log(`I crashed at ${this.odometer} miles!`);
//     } else {
//       this.odometer += distance;
//     }
//   }
  
//   Car2.prototype.crash = function () {
//     this.isCrashed = true;
//   }
  
//   Car2.prototype.repair = function () {
//     this.isCrashed = false;
//   }

class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.odometer = 0;
        this.isCrashed = false;
    }
    drive (distance) {
        if (this.isCrashed) {
            return console.log(`I crashed at ${this.odometer} miles!`);
        } else {
            this.odometer += distance;
        }
    }
    crash () {
        this.isCrashed = true;
    }
    repair () {
        this.isCrashed = false;
    }
}
  
  let myCar2 = new Car2 ('Ford', 'Pontiac');
  console.log(myCar2);
  myCar2.drive(100);
  console.log(myCar2);
  myCar2.crash();
  myCar2.drive(10);
  console.log(myCar2);
  myCar2.repair();
  myCar2.drive(100);
  console.log(myCar2);
  
  /*
  
    TASK 3
  
    - Build a Baby constructor that subclasses the Person built earlier.
    - Babies of course inherit the ability to greet, which can be strange.
    - Babies should have the ability to play, which persons don't.
    - By playing, a string is returned with some text of your choosing.
  
  */
  
  function Baby (name, age) {
    Person.call(this, name, age);
  }
  
  Baby.prototype = Object.create(Person.prototype);
  
  Baby.prototype.play = function () {
    return console.log('Yada yada yada');
  }
  
  let myBaby = new Baby ('Ted', 0);
  console.log(myBaby);
  myBaby.play();
  
  /*
  
    TASK 4
  
    Use your imagination and come up with constructors that allow to build objects
    With amazing and original capabilities. Build 3 small ones, or a very
    complicated one with lots of state. Surprise us!
  
  */
  
  // 1
  
  function buildBuilding (type, numberOfFloors, numberOfParkingSpaces) {
    this.type = type;
    this.numberOfFloors = numberOfFloors;
    this.numberOfParkingSpaces = numberOfParkingSpaces;
  }
  
  buildBuilding.prototype.description = function () {
    return `This ${this.type} has ${this.numberOfFloors} floors and ${this.numberOfParkingSpaces} parking spaces.`
  }
  
  let building = new buildBuilding('block of flats', 3, 6);
  console.log(building);
  console.log(building.description());
  
  // 2
  
  function buildHouse (type = 'house', numberOfFloors = 1, numberOfParkingSpaces = 2) {
    buildBuilding.call(this, type, numberOfFloors, numberOfParkingSpaces);
    this.isInhabited = true;
  }
  
  buildHouse.prototype = Object.create(buildBuilding.prototype);
  
  let house = new buildHouse ();
  console.log(house);
  console.log(house.description());
  
  // 3
  
  function buildShed (type = 'shed', numberOfFloors = 1, numberOfParkingSpaces = 0) {
    buildBuilding.call(this, type, numberOfFloors, numberOfParkingSpaces)
    this.isInhabited = false;
  }
  
  buildShed.prototype = Object.create(buildBuilding.prototype);
  
  let shed = new buildShed();
  console.log(shed);
  console.log(shed.description());
  
  /*
  
    STRETCH TASK
  
    Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
    In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
    At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
    Each constructor function has unique properties and methods that are defined in their block comments below:
  */
  
  /*
    === GameObject ===
    * createdAt
    * name
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
  
  function GameObject (obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats (obj) {
    GameObject.call(this, obj)
    this.healthPoints = obj.healthPoints;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  function Humanoid (obj) {
    CharacterStats.call(this, obj);
    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.  