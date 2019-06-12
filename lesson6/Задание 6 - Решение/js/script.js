//Восстановить порядок в меню
let menuVar = document.querySelector('.menu'),
menuItems = document.querySelectorAll('.menu-item');
menuVar.insertBefore (menuItems[2], menuItems[1]);

//добавить пятый пункт
let newItem = document.createElement('li');
    //newItemText = document.createTextNode('Пятый пункт');
newItem.classList.add('menu-item');
    //newItem.appendChild(newItemText);
newItem.textContent = 'Пятый пункт';
menuVar.appendChild(newItem);

//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let mainTitle = document.getElementById('title');
//mainTitle.textContent = 'Мы продаем только подлинную технику Apple';
mainTitle.textContent = mainTitle.textContent.replace(' технику', ' подлинную технику');
    //userfrendly - при наведеение на текст >> вопрос по отношению к технике
    mainTitle.onmouseover = function (){
        let questionApple = prompt ("Ваше отношение к технике Apple"),
        answerApple = document.querySelector("#prompt");
        answerApple.textContent = questionApple;
    };
//Удалить рекламу со страницы
let reklama = document.getElementsByClassName('adv')[0];
reklama.remove();

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"*/
let answerApple = prompt ("Ваше отношение к технике Apple"),
blockApple = document.querySelector("#prompt");
blockApple.textContent = answerApple;