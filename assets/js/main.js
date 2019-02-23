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
    savings : true,
    chooseExpances: function () {
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
        }
    },
    chooseOptExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.appMoney / 30).toFixed();
        alert('На день у тебя есть ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимал даун')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('deafuld chel')
        } else if (appData.moneyPerDay >= 2000) {
            console.log('tupa da da ya!')
        } else {
            console.log('Error')
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сума накоплений?');
            precent = +prompt('Под каков процент?');

            appData.monthIncome = save / 100 / 12 * precent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) { 
            let answerOne = prompt('Что принесет дополнительный доход?(Перечислете через ",")', '');
            if (typeof (answerOne) === 'string' && answerOne != '' && answerOne.length < 51) {
                appData.income = answerOne.split(',');
                appData.income.push(prompt('Что-то еще?'));
                appData.income.sort();
            }  else {
                alert('Введите хотя бы один источник, есле нет впишите "нет" ')
                i--;
            }
        };
        appData.income.forEach(function(item, i, massive) {
            i++;
            console.log("Способы доп. заработка: " + i + ' - ' + item);
        });
        
    }

};
console.log("Наша программа включает в себя данные: ");
for (key in appData) {
    console.log(appData[key]);
}




