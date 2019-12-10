let start = document.getElementById('start');

//поля правой части программы
let budgetValue = document.querySelector('.budget-value'),
	daybudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),	
	monthsavingsValue = document.querySelector('.monthsavings-value'),
	yearsavingsValue = document.querySelector('.yearsavings-value');

//поля с обязательными расходами(массив)
let expensesItem = document.getElementsByClassName('expenses-item');

//кнопки "Утвердить" и "Рассчитать"
let buttons = document.getElementsByTagName('button'),
	expensesItemBtn = buttons[0],
	optionalexpensesBtn = buttons[1],
	countBudgetBtn = buttons[2];

//поля с необязательными расходами(массив)
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

//статии возможного дохода
let chooseIncome = document.querySelector('.choose-income');

//чекбокс
let checkbox = document.querySelector('#savings');

//сумма
let sum = document.querySelector('#sum');

//процент
let percent = document.querySelector('#percent');

//год
let year = document.querySelector('.year-value');

//месяц
let month = document.querySelector('.month-value');

//день
let day = document.querySelector('.day-value');


day.addEventListener('click', func);

function func() {
	alert('wow');
}