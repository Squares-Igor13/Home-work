let startBtn = document.getElementById('start');

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
	expensesItemBtn = buttons[1],
	optionalexpensesBtn = buttons[2],
	countBudgetBtn = buttons[3];
	calculateSavingsBtn = buttons[4];

//поля с необязательными расходами(массив)
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

//статии возможного дохода
let chooseIncomeItem = document.querySelector('.choose-income');

//чекбокс
let checkbox = document.querySelector('#savings');

//сумма
let sumValue = document.querySelector('#sum');

//процент
let percentValue = document.querySelector('#percent');

//год
let year = document.querySelector('.year-value');

//месяц
let month = document.querySelector('.month-value');

//день
let day = document.querySelector('.day-value');







let money,
    time;

startBtn.addEventListener('click', start);

function start() {

	time = prompt("Дата в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
   
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();


    
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = appData.timeData.split('-')[2];
}






let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,

    chooseExpenses: function() {
    	let sum = 0;

    	//Обязательные расходы
    	if(appData.budget != undefined) {
    		for (let i = 0; i < expensesItem.length; i++) {
	            let a = expensesItem[i].value,
	                b = expensesItem[++i].value;
	        
	            if ( (typeof(a))==='string' && (typeof(a)) != null && 
	                 (typeof(b)) != null && a != '' && b != '' && 
	                  a.length <= 20) {
	                appData.expenses[a] = b;
	                sum += +b;
	            } 
	        }
	        expensesValue.textContent = sum;
	        appData.sumExpenses = sum;
    	}
        
    },

    //Бюджет на 1 день
    detectDayBudget: function() {
    	if(appData.budget != undefined) {
	    	if(appData.budget != undefined) {
	    		appData.moneyPerDay = ((appData.budget - appData.sumExpenses) / 30).toFixed();
	        	daybudgetValue.textContent = appData.moneyPerDay;
	    	} else {
	    		daybudgetValue.textContent = 'No budget data';
	    	}
    	}
    },

    //Уровень дохода(низкий, средний, высокий)
    detectedLevel: function() {
    	if(appData.budget != undefined) {
    		let a = appData.moneyPerDay;

	        if (a < 1000) {
	            levelValue.textContent = 'Минимальный уровень';
	        } else if(a >= 1000 && appData.moneyPerDay < 2000) {
	            levelValue.textContent = 'Средний уровень';
	        } else if (a >= 2000) {
	            levelValue.textContent = 'Высокий уровень';
	        } else {
	            levelValue.textContent = 'Error';
	        }
    	} else {
    		levelValue.textContent = '_____';
    	}
    },

    

    //Возможные траты
    chooseOptExpenses: function() {
    	if(appData.budget != undefined) {
	    	let sum = 0;

	    	console.log(optionalexpensesItem[3+1].value);

	    	for(let i = 0; i < (optionalexpensesItem.length/2); i++) {
		    	
		    		let a = optionalexpensesItem[i].value,
			            b = optionalexpensesItem[i+3].value;

			        appData.optionalExpenses[a] = b;
			                sum += +b;

			       
			}

		    optionalexpensesValue.textContent = sum
		}
	        /*for(let i = 0; i < optionalexpensesItem.length; i++) {
	            let a = optionalexpensesItem[i].value;
	            if(a != null && a != '') {
	               
	            	appData.optionalExpenses[i] = a; 
	            
	            	optionalexpensesValue.textContent += (i+1) + '. ' + appData.optionalExpenses[i] + ' ';
	            
	            }
	        	
	        }*/
   		
    },

    //дополнительный доход
    chooseIncome: function() {
    	if(appData.budget != undefined) {
	        let answer = chooseIncomeItem.value;
	        
	        appData.income = answer.split(', ');
	        let sum = 0;

	        for(let i = 0; i < appData.income.length; i++) {
	        	sum += +appData.income[i].split('=')[1];
	        }

	  		incomeValue.textContent = sum;

	  	}
    },

    showListData: function() {
        let count = 1;
        console.log('Наша программа включает в себя: ');
        for(let prop in appData) {
            
            console.log(count++ + ': ' + prop);
            
        }
    }
};

	//кнопка утвердить обязательные расходы
expensesItemBtn.addEventListener('click', appData.chooseExpenses);

	//кнопка утвердить необязательные расходы
optionalexpensesBtn.addEventListener('click', appData.chooseOptExpenses);



	//кнопка Рассчитать дневной бюджет
countBudgetBtn.addEventListener('click', appData.detectDayBudget);
countBudgetBtn.addEventListener('click', appData.detectedLevel);

	//поле с возможными доходами
chooseIncomeItem.addEventListener('change', appData.chooseIncome);

	//чекбокс
checkbox.addEventListener('click', function() {
	if(appData.savings === true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});


    //Расчет накоплений
/*calculateSavingsBtn.addEventListener('click', function() {
	if(appData.budget != undefined) {
		if(appData.savings == true) {
			let sum = +sumValue.value,
				percent = +percentValue.value;

			appData.monthIncome = (sum/100/12*percent).toFixed(2);
			appData.yearIncome = (sum/100*percent).toFixed(2);

			monthsavingsValue.textContent = appData.monthIncome;
			yearsavingsValue.textContent = appData.yearIncome;
		}
	}
});*/


percentValue.addEventListener('input', function() {
	if(!isNaN(sumValue.value) && sumValue.value != '' && sumValue.value != null) {
		if(appData.savings == true) {
			let sum = +sumValue.value,
				percent = +percentValue.value;

			appData.monthIncome = (sum/100/12*percent).toFixed(2);
			appData.yearIncome = (sum/100*percent).toFixed(2);

			monthsavingsValue.textContent = appData.monthIncome;
			yearsavingsValue.textContent = appData.yearIncome;
		}
	
	}
})


