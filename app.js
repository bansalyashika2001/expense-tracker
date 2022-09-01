const addItemBtn = document.querySelector(".add-item-btn");
const cost = document.querySelector("#cost");
const title = document.querySelector("#title");
const expenseAmount = document.querySelector(".expense-text");
const incomeAmount = document.querySelector(".income-text");
const logs = document.querySelector(".logs");
const totalAmount = document.querySelector(".totalAmount");

let expense = 0;
let income = 0;
let total = 0;

addItemBtn.addEventListener("click", () => {
  if (title.value == "" || cost.value == "") {
    alert("TITLE OR COST CAN NOT BE EMPTY");
  } else {
    if (cost.value.indexOf("+") > -1) {
      logs.innerHTML += `<div class="log green"><p>${
        title.value
      }</p><p>+₹${cost.value.substring(1)}</p></div>`;
      income += Number(cost.value.substring(1));
      incomeAmount.textContent = income;
    } else if (cost.value.indexOf("-") > -1) {
      logs.innerHTML += `<div class="log red"><p>${
        title.value
      }</p><p>-₹${cost.value.substring(1)}</p></div>`;
      expense += Number(cost.value.substring(1));
      expenseAmount.textContent = expense;
    } else {
      alert("Input should contain + for income and - for expense");
    }
    total = income - expense;
    if (total >= 0) {
      totalAmount.textContent = "₹" + total;
    } else {
      totalAmount.textContent = "-₹" + total;
    }
  }

  expenseAmount.textContent = expense;
});
