let money= +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    appMoney : money,
    appTime : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
}

// let i = 0;
// while (i < 2) {
//     i++;
//     let answerOne = prompt('Введите обязательную статью расходов в этом месяце');
//     answerTwo = prompt('Во сколько обойдется?');

//     if (typeof (answerOne) === 'string' && answerOne != '' && answerTwo != '' && answerOne.length < 51 && answerTwo.length < 51) {
//         console.log('done');
//         appData.expenses[answerOne] = answerTwo;
//     } else {
//         alert('Введите правильные данные');
//         i--;
//     }
// }
let i = 0;
do {
    
}

while (i < 2) {
    i++
    let answerOne = prompt('Введите обязательную статью расходов в этом месяце');
    answerTwo = prompt('Во сколько обойдется?');

    if (typeof (answerOne) === 'string' && answerOne != '' && answerTwo != '' && answerOne.length < 51 && answerTwo.length < 51) {
        console.log('done');
        appData.expenses[answerOne] = answerTwo;
    } else {
        alert('Введите правильные данные');
        i--;
    }
}

// for (let i = 0; i < 2; i++) {
//     let answerOne = prompt('Введите обязательную статью расходов в этом месяце');
//         answerTwo = prompt('Во сколько обойдется?');
    
//     if (typeof (answerOne) === 'string' && answerOne != '' && answerTwo != '' && answerOne.length < 51 && answerTwo.length < 51) {
//         console.log('done');
//         appData.expenses[answerOne] = answerTwo;
//     } else {
//         alert('Введите правильные данные');
//         i--;
//     }
// };

appData.moneyPerDay = appData.appMoney / 30;

console.log(appData);

if(appData.moneyPerDay < 100) {
    console.log('Минимал даун')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('deafuld chel')
} else if (appData.moneyPerDay >= 2000){
    console.log('tupa da da ya!')
} else {
    console.log('Error')
}



