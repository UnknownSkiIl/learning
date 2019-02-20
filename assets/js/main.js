let money,
    time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    appMoney : money,
    appTime : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
}


answerOne = prompt('Введите обязательную статью расходов в этом месяце');
answerTwo = prompt('Во сколько обойдется?');

expenses: {
    answerOne : answerTwo;
}

alert("Ваш бюджет на день - " + (money - answerTwo) / 30);
console.log(appData);


