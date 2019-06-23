'use strict';
//Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById("start"),
    //Получить все блоки в правой части программы через классы 
    //(которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
    expensesItem = document.getElementsByClassName('expenses-item'),
    //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    //Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

//start();
//-->1)
startBtn.addEventListener('click', function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeDate = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});
//<--1)
//console.log('Ваш бюджет на месяц: '+ money + '\nДата: ' + timeDate);
expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let article = expensesItem[i].value,
            articleCoast = expensesItem[++i].value;

        if (typeof (article) === 'string' && typeof (article) != null &&
            typeof (articleCoast) === 'string' && typeof (articleCoast) != null &&
            article != '' && articleCoast != '' && article.length < 50) {
            console.log("done: " + [i] + " case");
            appData.expenses[article] = articleCoast;
            sum += +articleCoast;
        } else {
            console.log("Wrong parameters");
            i--;
        }
    }
    expensesValue.textContent = sum.toFixed();
});

optionalExpensesBtn.addEventListener('click', function (params) {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExp = optionalExpensesItem[i].value;
        if (typeof (optExp) === 'string' && typeof (optExp) != null && optExp != '' && optExp.length < 50) {
            console.log("done: " + [i] + " optionalExpenses added");
            appData.optionalExpenses[i] = optExp;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        } else {
            console.log("Wrong parameter of optional expense!");
            i--;
        }
    }
});


countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Миниальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Error!";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};