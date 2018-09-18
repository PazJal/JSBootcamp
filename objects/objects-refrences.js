let myAccount = {
  name: 'Paz',
  expenses: 0,
  income: 0
}
let otherAccount = myAccount;
otherAccount.income = 1000;
otherAccount = {};


let addExpense = function (account , amount) { 
  account.expenses += amount; 

}

addExpense(myAccount , 2.5);

console.log(myAccount);


let addIncome = function (account , amount) {
  account.income += amount;
}

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
}

let accountSummary = function (account) {
  return `Account for ${account.name} has $${account.income-account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount , 3000);

console.log(accountSummary(myAccount));

resetAccount(myAccount);

console.log(accountSummary(myAccount));