//-->1)
let money = +prompt("Ваш бюджет на месяц?", ''), 
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
/*
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
    };
*/
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


appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: '+ Math.round(appData.moneyPerDay,2)  + ' руб.');

if(appData.moneyPerDay <100){
    console.log("Миниальный уровень достатка!");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка!");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка!");
} else {
    console.log("Error!");
}