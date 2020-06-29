"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpense = exports.getIncome = exports.getTotal = exports.getAmountsArray = void 0;
function getAmountsArray(transactions) {
    var array = [];
    for (var index = 0; index < transactions.length; index++) {
        var transaction = transactions[index];
        array.push(transaction.getAmount());
    }
    return array;
}
exports.getAmountsArray = getAmountsArray;
function getTotal(valuesArray) {
    var total = 0;
    valuesArray.forEach(function (amount) {
        total = total + amount;
    });
    return total;
}
exports.getTotal = getTotal;
function getIncome(amountsArray) {
    return getTotal(amountsArray.filter(function (item) { return item > 0; }));
}
exports.getIncome = getIncome;
function getExpense(amountsArray) {
    return getTotal(amountsArray.filter(function (item) { return item < 0; })) * -1;
}
exports.getExpense = getExpense;
//# sourceMappingURL=money.js.map