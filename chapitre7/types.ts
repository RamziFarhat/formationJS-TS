
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. 
    I'll be ${ age + 1 } years old next month.`;

// is equivalent to 
let sentence2: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";

let list: number[] = [1, 2, 3];
//The second way uses a generic array type, Array<elemType>:
let list2: Array<number> = [1, 2, 3];









//Tuples
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//  x = [10, "hello"]; // Error

console.log(x[0].toLowerCase()); // OK
console.log(x[1].valueOf()); // Error, 'number' does not have 'substr'





enum Color {Red, Green, Blue} // 0xf00d, 0x0f0d, 0xf0fd
let c: Color = Color.Green;

enum Color {pink = 1, Greeny, Bluish}
let c2: Color = Color.Greeny;

enum Color {cyan = 1, magenta = 2, yellow = 4}
let c3: Color = Color.magenta;

enum Color {rouge = 1, vert, Bleu}
let colorName: string = Color[2];
alert(colorName);



 let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation.

// The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:

let list3: any[] = [1, true, "free"];

list3[1] = 100;
// Void
// void is a little like the opposite of any. void means the absence of having any type at all. void type is mainly used as the return type of functions that do not return a value:

function warnUser(): void {
    alert("This is my warning message");
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them:

let unusable: void = undefined;

// Null and Undefined
// In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they're not extremely useful on their own:

// // Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.