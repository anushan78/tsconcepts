const x: number = 2;
console.log(x);

let result: number | undefined = undefined;
console.log(result);
result = 2;
console.log(result);

var arr: number[] = [1, 2, 3, 4];

var arr2: string[][] = [
  ["anu", "ten"],
  ["nisha", "amara"],
];

// Tuples

// coordinates
const coord: [number, string] = [1, "polar"];
console.log(coord[1]);

const complexT: [number, string][] = [[1, "anu"]];
console.log(complexT[0][1]);

let direction: "north" | "south" | "east" | "west";

direction = "east";

// string enum

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Rank {
  Small,
  Medium,
  Large,
}

enum Tip {
  One = 102,
  Two,
  Three,
}

// we don't know what the type is
let xt: unknown = 1;

if (typeof xt == "number") {
  xt = xt + 1;
  console.log("number");
} else if (typeof xt == "string") {
}

if (typeof xt == "number") {
  const casted = (xt as number) + 1;
}

const arrs = [[{ name: "anu" }]];
// [] or undefined
const el = arrs.pop()?.pop()?.name;
// force to be the type
//const el2 = arrs.pop()!.pop()!.name;

function makeName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  } else {
    return firstName + " " + lastName;
  }
}

const fNames = makeName("anu", "ten");

function callFunc(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string
) {
  func(param1, param2);
}

callFunc(makeName, "anush", "tenn");

function mul(x: number, y: number): number {
  return x * y;
}

function divv(x: number, y: number): number {
  return x / y;
}

function applyMulti(
  funcs: ((a: number, b: number) => number)[],
  param1: number,
  param2: number
) {
  funcs[0](param1, param2);
}

applyMulti([mul, divv], 32, 55);

function Sum(...numbers: number[]) {}

Sum(1, 3, 4, 2);
Sum();
Sum(33, 4);

// Overloaded functions.
// Define all possible overload, then create common overload method to handle all
function getItemLength(name: string): number;
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames: unknown): unknown {
  if (typeof nameOrNames == "string") {
    return "Hello World";
  } else if (Array.isArray(nameOrNames)) {
    return nameOrNames.length;
  }
  return 0;
}

// Interfaces
interface Person {
  name: string;
  age: number;
  height?: number;
  hello: () => void;
}

const pers: Person = {
  name: "anu",
  age: 46,
  height: 165,
  hello: function () {
    console.log("hi " + this.name);
  },
};

interface Employee extends Person {
  employeeId: number;
}

// Cannot create instances of an abstract class
abstract class Animal {
  abstract makeSound(duration: number): void;

  move(duration: number) {
    console.log("Moving along...");
    this.makeSound(duration);
  }
}

class Dog extends Animal {
  makeSound(duration: number) {
    console.log("woof woof");
  }
}

const dog = new Dog();
dog.move(10);

interface Vehicle {
  Drive(): void;
}

class Car implements Vehicle {
  private model: string;
  private year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  Drive(): void {
    console.log(`Model: ${this.model}, Year: ${this.year}`);
  }

  Test() {
    return 1;
  }
}

// Class instantiated with interface does not have access to Test() method,
// where as the class instantiated with Vehicle class has access

let carCl = new Car("Mercedes Benz", 2025);
let carIn: Vehicle = new Car("Tesla", 2024);

class Plane implements Vehicle {
  Drive(): void {
    console.log("AirBus A380");
  }
}

const pl = new Plane();
const vn = new Car("Toyota Hiace", 2020);
const vehis: Vehicle[] = [pl, vn];

function DoIt(item: Vehicle) {
  item.Drive();
}

// Static - Associated with the class not with the instance
class Apple {
  static instanceCount: number = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
    Apple.instanceCount++;
  }

  static decreaseCount() {
    // Static method can use this keyword here because instanceCount is static member
    this.instanceCount--;
  }
}

const apple1 = new Apple("Red Apple"); // 1
console.log(Apple.instanceCount);

const apple2 = new Apple("Yellow Apple"); // 2
console.log(Apple.instanceCount);

Apple.decreaseCount();
console.log(Apple.instanceCount);
