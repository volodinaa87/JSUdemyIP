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

    let money,time;

    function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');  
        
        while (isNaN(money) || money == "" || money == null)  {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
    }
    start();
    //-->1)
    
    //<--1)
    //console.log('Ваш бюджет на месяц: '+ money + '\nДата: ' + timeDate);
    
    var appData = {
        budget: money,
        timeDate: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let article = prompt("Введите обязательную статью расходов в этом месяце", ''),
                articleCoast = prompt("Во сколько обойдется?", '');
                    
                    if (typeof(article) === 'string' && typeof(article) != null &&
                        typeof(articleCoast) === 'string' && typeof(articleCoast) != null &&
                        article != '' && articleCoast != '' && article.length<50) {
                            console.log("done: "+[i] + " case");
                            appData.expenses[article] = articleCoast;
                    }
                    else {
                        console.log("Wrong parameters");
                        i--;
                    }
                } 
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert('Ежедневный бюджет: '+ Math.round(appData.moneyPerDay,2)  + ' руб.');
        },
        detectLevel: function () {
            if(appData.moneyPerDay <100){
                console.log("Миниальный уровень достатка!");
            } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
                console.log("Средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000){
                console.log("Высокий уровень достатка!");
            } else {
                console.log("Error!");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());    
            }
        },
        chooseOptExpenses: function () {
            for (let i = 0; i < 3; i++) {
                let optExp = prompt("Статья необязательных расходов?", '');
                    if (typeof(optExp) === 'string' && typeof(optExp) != null  && optExp != '' && optExp.length<50) {
                            console.log("done: "+[i] + " optionalExpenses added");
                            appData.optionalExpenses[i] = optExp;
                    }
                    else {
                        console.log("Wrong parameter of optional expense!");
                        i--;
                    }
                }
        },
        chooseIncome: function () {
            let items = prompt("Что несет доп доход? (перечисли через запятую)",'');
             if (typeof(items) == 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
                //appData.income.forEach(element => console.log("Способы доп. заработка: " + element));
                appData.income.forEach (function (incomeItemMass, i) {
                    console.log("Способы доп. заработка: " + (i+1) + " - " + incomeItemMass);
                });
            } else {
                console.log("Неправильные данные в статьях доп.заработка" + items);
            }
        }
    };
    
    appData.chooseExpenses();
    appData.detectDayBudget();
    appData.detectLevel();
    appData.checkSavings();
    appData.chooseOptExpenses();
    appData.chooseIncome();
    
    for (let key in appData) {
        if (appData.hasOwnProperty(key)) {
            console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
        }
    }
    
    /*for (const iterator of appData) {
        console.log("Наша программа включает в себя данные: " + iterator + " - " + appData[iterator]);
    }*/
    
    
    //while
    /*
    let i=0;
    while (i<2) {
        let article = prompt("Введите обязательную статью расходов в этом месяце", ''),
        articleCoast = prompt("Во сколько обойдется?", '');
            
            if (typeof(article) === 'string' && typeof(article) != null &&
                typeof(articleCoast) === 'string' && typeof(articleCoast) != null &&
                article != '' && articleCoast != '' && article.length<50) {
                    console.log("done: "+[i] + " case");
                    appData.expenses[article] = articleCoast;
            }
            else {
                console.log("Wrong parameters");
                article=null;
                articleCoast=null;
                i--;
            }
          i++;  
    }
    */
    
    //do while
    /*
    let i=0;
    do {
        let article = prompt("Введите обязательную статью расходов в этом месяце", ''),
        articleCoast = prompt("Во сколько обойдется?", '');
            
            if (typeof(article) === 'string' && typeof(article) != null &&
                typeof(articleCoast) === 'string' && typeof(articleCoast) != null &&
                article != '' && articleCoast != '' && article.length<50) {
                    console.log("done: "+[i] + " case");
                    appData.expenses[article] = articleCoast;
            }
            else {
                console.log("Wrong parameters");
                article=null;
                articleCoast=null;
                i--;
            }
          i++;  
    }
    while (i<2);
    */
    
    