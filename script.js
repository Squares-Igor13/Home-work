let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Дата в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a))==='string' && (typeof(a)) != null && 
                 (typeof(b)) != null && a != '' && b != '' && 
                  a.length <= 20) {
                console.log('All right');
                appData.expenses[a] = b;
            } else {
                i--;
            }
            
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Every day budjet is ' + appData.moneyPerDay);
    },
    detectedLevel: function(moneyPerDay) {
        if (moneyPerDay < 1000) {
            console.log('Минимальный уровень');
        } else if(moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень');
        } else if (moneyPerDay >= 2000) {
            console.log('Высокий уровень');
        } else {
            console.log('Error');
        }
    },
    moneyPerDay: function() {
        if(appData.savings == true) {
            let save = +prompt('What are your savings?');
            let percent = +prompt('What percent?');
    
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert('Income from your deposit is ' + appData.monthIncome + ' per month');
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let a = prompt('Необязательный расходы: ', '');
                b = +prompt('Сколько денег ?', '');
    
            if(typeof(a) ==='string' && (typeof(a)) != null && 
            (typeof(b)) != null && a != '' && b != '') {
                appData.optionalExpenses[a] = b; 
            }
        }
    },
    chooseIncome: function() {
        let answer = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if(isNaN(answer) && answer != '' && answer != null) {
            appData.income = answer.split(', ');
            appData.income.push(prompt('Добавьте еще дополнительные доходы', ''));
            appData.income.sort();
        }
        
        appData.income.forEach(function(item, num) {
            console.log((num+1) + ': ' + item);
        });
    },
    showListData: function() {
        let count = 1;
        console.log('Наша программа включает в себя: ');
        for(let prop in appData) {
            
            console.log(count++ + ': ' + prop);
            
        }
    }
};




