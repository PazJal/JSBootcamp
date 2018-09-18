const account = {
  name: 'Andrew Mead',
  incomes: [],
  expenses: [],
  addExpense: function (description , amount) {
    const newExpense = { description ,amount};
    this.expenses.push(newExpense);

  },
  addIncome: function (description , amount) {
    const newIncome = { description ,amount};
    this.incomes.push(newIncome);

  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    this.expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    let totalIncome = 0;
    this.incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    let balance = totalIncome - totalExpenses;

    return `${this.name} has a balance of  $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses. `
  }
}

account.addExpense('Rent' , 950);
account.addExpense('Coffee', 2);
account.addIncome('Job' , 1000);


console.log(account.getAccountSummary());

