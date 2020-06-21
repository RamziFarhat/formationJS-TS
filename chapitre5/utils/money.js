function getAmountsArray(transactions) {
  var array = [];
  for (var index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    array.push(transaction.getAmount());
  }
  return array;
}

function getTotal(valuesArray) {
  var total = 0;
  valuesArray.forEach(function (amount) {
    total = total + amount;
  });
  return total;
}

function getIncome(amountsArray) {
  return getTotal(amountsArray.filter((item) => item > 0));
}

function getExpense(amountsArray) {
  return getTotal(amountsArray.filter((item) => item < 0)) * -1;
}
