let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц в гривнах (только цифру)", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == null || money == '') {
        money = +prompt("Ваш бюджет на месяц в гривнах (только цифру)", '');
    }
}
start();

let appData = {
    appMoney : money,
    appTime : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : true
}

function chooseExpances() {
    for (let i = 0; i < 2; i++) {
        let answerOne = prompt('Введите обязательную статью расходов в этом месяце');
        answerTwo = prompt('Во сколько обойдется?');

        if (typeof (answerOne) === 'string' && answerTwo != null && answerOne != '' && answerTwo != '' && answerOne.length < 51 && answerTwo.length < 51) {
            console.log('done');
            appData.expenses[answerOne] = answerTwo;
        } else {
            alert('Введите правильные данные');
            i--;
        }
    };
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answerOne = prompt('Статья необязательных расходов?');
            n = i + 1;
        if (typeof (answerOne) === 'string' && answerOne != '' && answerOne.length < 51) {
            console.log('done');
            appData.optionalExpenses[n] = answerTwo;
        } else {
            alert('Введите правильные данные');
            i--;
        }
    };
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.appMoney / 30).toFixed();
    alert('На днеь у тебя есть' + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимал даун')
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('deafuld chel')
    } else if (appData.moneyPerDay >= 2000) {
        console.log('tupa da da ya!')
    } else {
        console.log('Error')
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сума накоплений?');
            precent = +prompt('Под каков процент?');

        appData.monthIncome = save/100/12*precent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

chooseExpances();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();

