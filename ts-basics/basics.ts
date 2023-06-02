let age: number;

age= 12;

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor = true;

let hobbies: string [];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: 'Max',
  age: 32
};

let people: Person[];

let course: string | number = 'React';
course = 12341;

//Functions & Types

function add(a: number, b: number) {
  return a+b;
};

function print (value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray= [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); 