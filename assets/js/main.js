let money, time,
    sum = 0,
    go = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

    expensesEl = document.getElementsByClassName('expenses-item'),
    btns = document.getElementsByTagName('button'),
    affirmBtnE = btns[0],
    affirmBtnO = btns[1],
    calculateBtn = btns[2],
    optionalExpensesEl = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeEl = document.querySelector('.choose-income'),
    savingsEl = document.querySelector('#savings'),
    chooseSumEl = document.querySelector('.choose-sum'),
    choosePercentEl = document.querySelector('.choose-percent');
    


go.addEventListener('click', function() {
    affirmBtnE.removeAttribute('disabled');
    affirmBtnO.removeAttribute('disabled');
    calculateBtn.removeAttribute('disabled');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц в гривнах (только цифру)", '');

    while (isNaN(money) || money == null || money == '') {
        money = +prompt("Ваш бюджет на месяц в гривнах (только цифру)", '');
    }
    appData.appMoney = money;
    appData.appTime = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

affirmBtnE.addEventListener('click', function () {
    for (let i = 0; i < expensesEl.length; i++) {
        let answerOne = expensesEl[i].value,
            answerTwo = expensesEl[++i].value;

        if (typeof (answerOne) === 'string' && answerTwo != null && answerOne != '' && answerTwo != '' && answerOne.length < 51 && answerTwo.length < 51) {
            console.log('done');
            appData.expenses[answerOne] = answerTwo;
            sum += +answerTwo;
        } else {
            alert('Введите правильные данные');
            i--;
        }
    }

    expensesValue.textContent = sum;
});

affirmBtnO.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesEl.length; i++) {
        let answerOne = optionalExpensesEl[i].value;
        n = i + 1;
        if (typeof (answerOne) === 'string' && answerOne != '' && answerOne.length < 51) {
            console.log('done');
            appData.optionalExpenses[n] = answerOne;
        } else {
            alert('Введите правильные данные');
            i--;
        }
        optionalExpensesValue.textContent += appData.optionalExpenses[n] + ', '
    };
});

calculateBtn.addEventListener('click', function () {
    
    if (appData.appMoney != undefined) {
        appData.moneyPerDay = +((appData.appMoney - sum)  / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Newbie';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Street boy';
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = 'Boss';
        } else {
            levelValue.textContent = 'Error';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }     
});

chooseIncomeEl.addEventListener('input', function () {
    let answerOne = chooseIncomeEl.value;
    appData.income = answerOne.split(',');
    incomeValue.textContent = appData.income;
});

savingsEl.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSumEl.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSumEl.value,
            percent = +choosePercentEl.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercentEl.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSumEl.value,
            percent = +choosePercentEl.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    appMoney : money,
    appTime : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false,
};






