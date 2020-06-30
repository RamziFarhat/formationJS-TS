var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ". \n    I'll be " + (age + 1) + " years old next month.";
// is equivalent to 
var sentence2 = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
//The second way uses a generic array type, Array<elemType>:
var list2 = [1, 2, 3];
//Tuples
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//  x = [10, "hello"]; // Error
console.log(x[0].toLowerCase()); // OK
console.log(x[1].valueOf()); // Error, 'number' does not have 'substr'
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // 0xf00d, 0x0f0d, 0xf0fd
var c = Color.Green;
(function (Color) {
    Color[Color["pink"] = 1] = "pink";
    Color[Color["Greeny"] = 2] = "Greeny";
    Color[Color["Bluish"] = 3] = "Bluish";
})(Color || (Color = {}));
var c2 = Color.Greeny;
(function (Color) {
    Color[Color["cyan"] = 1] = "cyan";
    Color[Color["magenta"] = 2] = "magenta";
    Color[Color["yellow"] = 4] = "yellow";
})(Color || (Color = {}));
var c3 = Color.magenta;
(function (Color) {
    Color[Color["rouge"] = 1] = "rouge";
    Color[Color["vert"] = 2] = "vert";
    Color[Color["Bleu"] = 3] = "Bleu";
})(Color || (Color = {}));
var colorName = "Bleu";
alert(colorName);
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
// The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation.
// The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:
// let list3: any[] = [1, true, "free"];
// list3[1] = 100;
// Void
// void is a little like the opposite of any. void means the absence of having any type at all. void type is mainly used as the return type of functions that do not return a value:
// function warnUser(): void {
//     alert("This is my warning message");
// }
// Declaring variables of type void is not useful because you can only assign undefined or null to them:
// let unusable: void = undefined;
// Null and Undefined
// In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they're not extremely useful on their own:
// // Not much else we can assign to these variables!
// let u: undefined = undefined;
// let n: null = null;
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
