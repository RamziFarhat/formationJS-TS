// Enums
var Weekdays;

(function (Weekdays) {
    Weekdays[Weekdays["Lundi"] = 1] = "Lundi";
    Weekdays[Weekdays["Mardi"] = 2] = "Mardi";
    Weekdays[Weekdays["Mercredi"] = 3] = "Mercredi";
})(Weekdays || (Weekdays = {}));

console.log(Weekdays[1]);
console.log(Weekdays[2]);

// Tuples
var identity = ["Alexis", 27];

console.log(identity);
