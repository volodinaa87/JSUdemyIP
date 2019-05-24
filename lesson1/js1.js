//-->1)
let money = prompt("Ваш бюджет на месяц?", ''), 
time = prompt("Введите дату в формате YYYY-MM-DD", '');
//<--1)
//console.log('Ваш бюджет на месяц: '+ money + '\nДата: ' + timeDate);

var appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let article = prompt("Введите обязательную статью расходов в этом месяце", ''),
    articleCoast = prompt("Введите обязательную статью расходов в этом месяце", '')
    appData.expenses[article] = articleCoast;
}

alert('Ваш бюджет на день: '+ appData.budget / 30);

