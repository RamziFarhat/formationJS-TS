"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transaction_1 = require("./models/transaction");
var dynamicStyle_1 = require("./dynamicStyle");
var money_1 = require("./utils/money");
var transactions = [];
// UI DOM ref
// Left side
var form = document.getElementById("form");
var nameInput = document.getElementById("name");
var amountInput = document.getElementById("amount");
var nameIcon = document.getElementById("nameIcon");
var amountIcon = document.getElementById("amountIcon");
// Right side
var balance = document.getElementById("balance");
var money_plus = document.getElementById("money-plus");
var money_minus = document.getElementById("money-minus");
var list = document.getElementById("list");
function createTransaction(name, amount) {
    return new transaction_1.Transaction(name, amount);
}
// var x:number =  Math.floor(x);
// console.log(x);
function addTransaction(e) {
    // preventDefault to prevent the default form action for Ajax form submissions
    e.preventDefault();
    if (nameInput.value.trim() === "") {
        dynamicStyle_1.handleInputStyling(true, nameInput, nameIcon);
    }
    else {
        dynamicStyle_1.handleInputStyling(false, nameInput, nameIcon);
    }
    if (amountInput.value.trim() === "") {
        dynamicStyle_1.handleInputStyling(true, amountInput, amountIcon);
    }
    else {
        dynamicStyle_1.handleInputStyling(false, amountInput, amountIcon);
    }
    // On valide si tous est bien
    if (amountInput.value.trim() !== "" && nameInput.value.trim() !== "") {
        var transaction = createTransaction(nameInput.value, amountInput.value);
        transactions.push(transaction);
        // New
        addTransactionToHistory(transaction);
        updateValues();
        // clear inputs
        nameInput.value = "";
        amountInput.value = "";
    }
}
// Add transactions to DOM list
function addTransactionToHistory(transaction) {
    // Get sign
    var sign = transaction.getAmount() < 0 ? "-" : "+";
    var item = document.createElement("li");
    // Add class based on value
    item.classList.add(transaction.getAmount() < 0 ? "minus" : "plus");
    item.innerHTML = "\n    " + transaction.getName() + " <span>" + sign + Math.abs(transaction.getAmount()) + "</span> <button class=\"delete-btn\" onclick=\"removeTransaction(" + transaction.getId() + ")\">x</button>\n  ";
    list.appendChild(item);
}
// Update the balance, income and expense
function updateValues() {
    var amounts = money_1.getAmountsArray(transactions);
    var total = money_1.getTotal(amounts);
    var income = money_1.getIncome(amounts);
    var expense = money_1.getExpense(amounts);
    balance.innerText = "€" + total;
    money_plus.innerText = "€" + income;
    money_minus.innerText = "€" + expense;
}
form.addEventListener("submit", addTransaction);
//# sourceMappingURL=script.js.map